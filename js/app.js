/**
 * TartaOke - Aplicação de Consulta de Karaokê
 * Mobile-first, Busca Instantânea, PWA Offline e Gerenciamento de Fila.
 */

(function () {
  'use strict';

  // --- Estado da Aplicação ---
  const state = {
    allSongs: [],
    filteredSongs: [],
    queue: [], // Lista de códigos favoritados/na fila
    activeCategory: 'all', // 'all', 'nacional', 'internacional', 'queue'
    searchQuery: '',
    page: 1,
    pageSize: 35,
    installPrompt: null
  };

  // --- Elementos do DOM ---
  const searchInput = document.getElementById('searchInput');
  const btnClearSearch = document.getElementById('btnClearSearch');
  const songListContainer = document.getElementById('songList');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');
  const filterTabs = document.querySelectorAll('.tab-btn');
  const btnQueueModal = document.getElementById('btnQueueModal');
  const queueBadge = document.getElementById('queueBadge');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  // Modais
  const queueModal = document.getElementById('queueModal');
  const settingsModal = document.getElementById('settingsModal');
  const btnSettings = document.getElementById('btnSettings');
  const btnCloseQueue = document.getElementById('btnCloseQueue');
  const btnCloseSettings = document.getElementById('btnCloseSettings');
  const queueItemsContainer = document.getElementById('queueItemsContainer');
  const btnShareQueue = document.getElementById('btnShareQueue');
  const btnClearQueue = document.getElementById('btnClearQueue');
  const btnInstallApp = document.getElementById('btnInstallApp');

  // Configuração & Importação
  const btnExportJson = document.getElementById('btnExportJson');
  const btnExportCsv = document.getElementById('btnExportCsv');
  const btnImport = document.getElementById('btnImport');
  const importTextarea = document.getElementById('importTextarea');
  const importFileInput = document.getElementById('importFileInput');
  const btnResetCatalog = document.getElementById('btnResetCatalog');

  // --- Funções Utilitárias ---

  // Normalização de texto: remove acentos, pontuações e converte para minúsculas
  function normalizeText(text) {
    if (!text) return '';
    return text
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  // Prepara o índice de busca para resposta instantânea
  function indexSong(song) {
    const code = (song.code || '').toString();
    const title = song.title || '';
    const artist = song.artist || '';
    const lyrics = song.lyrics || '';
    const category = (song.category || 'nacional').toLowerCase();

    return {
      ...song,
      code,
      title,
      artist,
      lyrics,
      category,
      _codeNorm: normalizeText(code),
      _titleNorm: normalizeText(title),
      _artistNorm: normalizeText(artist),
      _lyricsNorm: normalizeText(lyrics),
      _fullSearchText: normalizeText(`${code} ${title} ${artist} ${lyrics}`)
    };
  }

  // Exibir notificação rápida (Toast)
  let toastTimeout;
  function showToast(message, duration = 2200) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toastMessage.textContent = message;
    toast.classList.add('show');

    // Feedback tátil em dispositivos compatíveis
    if (navigator.vibrate) {
      try { navigator.vibrate(35); } catch (e) { }
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // Copiar texto para a área de transferência
  async function copyToClipboard(text, successMessage) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast(successMessage || `Copiado: ${text}`);
    } catch (err) {
      showToast(`Código: ${text}`);
    }
  }

  // --- Armazenamento Local (LocalStorage) ---

  function loadQueue() {
    try {
      const saved = localStorage.getItem('tartaoke_queue');
      state.queue = saved ? JSON.parse(saved) : [];
    } catch (e) {
      state.queue = [];
    }
    updateQueueBadge();
  }

  function saveQueue() {
    try {
      localStorage.setItem('tartaoke_queue', JSON.stringify(state.queue));
    } catch (e) { }
    updateQueueBadge();
  }

  function updateQueueBadge() {
    const count = state.queue.length;
    queueBadge.textContent = count;
    queueBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  function toggleQueue(song) {
    const code = song.code;
    const index = state.queue.findIndex(item => item.code === code);

    if (index >= 0) {
      state.queue.splice(index, 1);
      showToast(`Removida da fila: ${song.title}`);
    } else {
      state.queue.push({
        code: song.code,
        title: song.title,
        artist: song.artist,
        sang: false
      });
      showToast(`Adicionada à fila: [${song.code}] ${song.title}`);
    }

    saveQueue();
    renderSongs();
    if (queueModal.classList.contains('active')) {
      renderQueueList();
    }
  }

  // Carregar catálogo de músicas
  async function loadSongsCatalog() {
    let rawSongs = [];

    // 1. Tentar ler do localStorage (músicas customizadas pelo usuário)
    const customSongs = localStorage.getItem('tartaoke_custom_catalog');
    if (customSongs) {
      try {
        rawSongs = JSON.parse(customSongs);
      } catch (e) {
        console.error('Erro ao ler catálogo customizado:', e);
      }
    }

    // 2. Usar o catálogo KaraokêBox / Videokê embutido em window.COMPACT_SONGS
    if (!rawSongs || rawSongs.length === 0) {
      if (window.COMPACT_SONGS && Array.isArray(window.COMPACT_SONGS)) {
        rawSongs = window.COMPACT_SONGS.map(item => ({
          code: item[0],
          title: item[1],
          artist: item[2],
          lyrics: item[3] || '',
          category: item[4] || 'nacional'
        }));
      } else if (window.DEFAULT_SONGS && Array.isArray(window.DEFAULT_SONGS)) {
        rawSongs = window.DEFAULT_SONGS;
      } else {
        // Fallback: tentar fetch do data/songs.json
        try {
          const resp = await fetch('data/songs.json');
          rawSongs = await resp.json();
        } catch (e) {
          rawSongs = [];
        }
      }
    }

    // Indexar músicas
    state.allSongs = rawSongs.map(indexSong);
    applyFilters();
  }

  // --- Filtros & Busca ---

  function applyFilters() {
    const rawQuery = state.searchQuery.trim();
    const queryNorm = normalizeText(rawQuery);
    const queryTerms = queryNorm.split(/\s+/).filter(Boolean);

    let list = state.allSongs;

    // Filtro por Categoria
    if (state.activeCategory === 'nacional') {
      list = list.filter(s => s.category === 'nacional');
    } else if (state.activeCategory === 'internacional') {
      list = list.filter(s => s.category === 'internacional');
    } else if (state.activeCategory === 'japonesa') {
      list = list.filter(s => s.category === 'japonesa');
    } else if (state.activeCategory === 'queue') {
      const queueCodes = new Set(state.queue.map(q => q.code));
      list = list.filter(s => queueCodes.has(s.code));
    }

    // Filtro por Busca de Texto
    if (queryTerms.length > 0) {
      list = list
        .map(song => {
          // Todas as palavras digitadas precisam estar no cadastro da música
          const matchesAll = queryTerms.every(term => {
            if (song._fullSearchText.includes(term)) return true;
            // Flexibilidade para plurais e singulares (ex: evidencias -> evidencia)
            if (term.endsWith('s') && term.length > 3 && song._fullSearchText.includes(term.slice(0, -1))) return true;
            if (!term.endsWith('s') && term.length > 3 && song._fullSearchText.includes(term + 's')) return true;
            return false;
          });
          if (!matchesAll) return null;

          // Cálculo de Relevância
          let score = 0;
          // Match exato de código ganha pontuação máxima
          if (song._codeNorm === queryNorm) {
            score += 1000;
          } else if (song._codeNorm.startsWith(queryNorm)) {
            score += 500;
          }

          // Match no título
          if (song._titleNorm === queryNorm) {
            score += 400;
          } else if (song._titleNorm.startsWith(queryNorm)) {
            score += 300;
          } else if (song._titleNorm.includes(queryNorm)) {
            score += 150;
          }

          // Match no artista
          if (song._artistNorm === queryNorm) {
            score += 250;
          } else if (song._artistNorm.startsWith(queryNorm)) {
            score += 200;
          } else if (song._artistNorm.includes(queryNorm)) {
            score += 100;
          }

          // Match no início da letra
          if (song._lyricsNorm && song._lyricsNorm.includes(queryNorm)) {
            score += 50;
          }

          return { song, score };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .map(item => item.song);
    }

    state.filteredSongs = list;
    state.page = 1;
    renderSongs();
  }

  // Destacar termos buscados no texto
  function highlightMatches(text, query) {
    if (!query || !text) return escapeHtml(text);
    const words = query.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return escapeHtml(text);

    // Escape regex
    const pattern = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${pattern})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark>$1</mark>');
  }

  function escapeHtml(str) {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // --- Renderização da Lista ---

  function renderSongs() {
    const list = state.filteredSongs;
    const total = list.length;
    resultCount.innerHTML = `<strong>${total}</strong> música${total !== 1 ? 's' : ''}`;

    if (total === 0) {
      songListContainer.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    // Paginação
    const visibleCount = state.page * state.pageSize;
    const songsToRender = list.slice(0, visibleCount);
    const queueCodeSet = new Set(state.queue.map(q => q.code));

    const html = songsToRender.map(song => {
      const isQueued = queueCodeSet.has(song.code);
      const highlightedTitle = highlightMatches(song.title, state.searchQuery);
      const highlightedArtist = highlightMatches(song.artist, state.searchQuery);

      return `
        <article class="song-card" data-code="${escapeHtml(song.code)}" title="Toque para copiar o número ${escapeHtml(song.code)}">
          <div class="song-code-badge" data-action="copy">
            <span class="song-code-val">${escapeHtml(song.code)}</span>
            <span class="song-code-label">CÓDIGO</span>
          </div>
          
          <div class="song-info" data-action="copy">
            <h3 class="song-title">${highlightedTitle}</h3>
            <div class="song-artist">${highlightedArtist}</div>
            ${song.lyrics ? `<div class="song-lyrics">${escapeHtml(song.lyrics)}</div>` : ''}
          </div>

          <div class="song-actions">
            <button class="btn-action ${isQueued ? 'active-fav' : ''}" 
                    data-action="queue" 
                    aria-label="${isQueued ? 'Remover da Fila' : 'Adicionar à Fila'}"
                    title="${isQueued ? 'Remover da Fila' : 'Adicionar à Fila'}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="${isQueued ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Adiciona botão "Carregar Mais" se houver mais músicas
    let loadMoreHtml = '';
    if (visibleCount < total) {
      const remaining = total - visibleCount;
      loadMoreHtml = `
        <button id="btnLoadMore" class="btn-load-more">
          Carregar mais (${remaining} restantes)
        </button>
      `;
    }

    songListContainer.innerHTML = html + loadMoreHtml;

    // Vincular clique do botão Carregar Mais
    const btnLoadMore = document.getElementById('btnLoadMore');
    if (btnLoadMore) {
      btnLoadMore.addEventListener('click', () => {
        state.page++;
        renderSongs();
      });
    }
  }

  // --- Renderização da Fila de Músicas ---

  function renderQueueList() {
    if (state.queue.length === 0) {
      queueItemsContainer.innerHTML = `
        <div class="empty-state" style="padding: 24px 0;">
          <span class="empty-icon">⭐</span>
          <div class="empty-title">Sua fila está vazia</div>
          <p class="empty-desc">Toque na estrela de qualquer música para colocá-la na sua lista da noite!</p>
        </div>
      `;
      return;
    }

    const html = state.queue.map((item, idx) => `
      <div class="queue-item ${item.sang ? 'sang' : ''}" data-index="${idx}">
        <div style="display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1;">
          <span class="song-code-badge" style="padding: 4px 8px; font-size: 0.95rem; min-width: 52px; cursor: pointer;" data-action="copy-code" data-code="${escapeHtml(item.code)}">
            ${escapeHtml(item.code)}
          </span>
          <div style="min-width: 0; flex: 1;">
            <div style="font-weight: 700; font-size: 0.95rem; color: #fff; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
              ${escapeHtml(item.title)}
            </div>
            <div style="font-size: 0.8rem; color: var(--accent-cyan); text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
              ${escapeHtml(item.artist)}
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
          <button class="btn-action" data-action="toggle-sang" data-index="${idx}" title="${item.sang ? 'Marcar como não cantada' : 'Marcar como cantada'}">
            ${item.sang ? '↩️' : '🎤'}
          </button>
          <button class="btn-action" data-action="remove-queue" data-index="${idx}" title="Remover da fila">
            ✕
          </button>
        </div>
      </div>
    `).join('');

    queueItemsContainer.innerHTML = html;
  }

  // --- Importação / Exportação do Catálogo ---

  function exportCatalogAsJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.allSongs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `catalogo_karaoke_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Catálogo baixado em JSON!");
  }

  function exportCatalogAsCsv() {
    let csv = "codigo,titulo,artista,inicio_da_letra,categoria\n";
    state.allSongs.forEach(s => {
      const row = [
        `"${(s.code || '').replace(/"/g, '""')}"`,
        `"${(s.title || '').replace(/"/g, '""')}"`,
        `"${(s.artist || '').replace(/"/g, '""')}"`,
        `"${(s.lyrics || '').replace(/"/g, '""')}"`,
        `"${(s.category || 'nacional').replace(/"/g, '""')}"`
      ];
      csv += row.join(",") + "\n";
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `catalogo_karaoke_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("Catálogo baixado em CSV!");
  }

  function parseCsv(text) {
    const lines = text.trim().split(/\r?\n/);
    if (lines.length < 2) return [];

    const songs = [];
    // Pular cabeçalho se houver
    const startIndex = lines[0].toLowerCase().includes('titulo') || lines[0].toLowerCase().includes('codigo') ? 1 : 0;

    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Divisão simples respeitando aspas ou ponto e vírgula / vírgula
      const delimiter = line.includes(';') ? ';' : ',';
      const parts = line.split(delimiter).map(p => p.trim().replace(/^["']|["']$/g, ''));

      if (parts.length >= 2) {
        songs.push({
          code: parts[0] || '',
          title: parts[1] || '',
          artist: parts[2] || '',
          lyrics: parts[3] || '',
          category: parts[4] ? parts[4].toLowerCase() : 'nacional'
        });
      }
    }
    return songs;
  }

  function handleImportText(content) {
    try {
      content = content.trim();
      let importedSongs = [];

      if (content.startsWith('[') || content.startsWith('{')) {
        const parsed = JSON.parse(content);
        importedSongs = Array.isArray(parsed) ? parsed : [parsed];
      } else {
        importedSongs = parseCsv(content);
      }

      if (importedSongs.length === 0) {
        alert("Nenhuma música válida foi encontrada para importar.");
        return;
      }

      const formatted = importedSongs.map(s => ({
        code: (s.code || s.numero || s.id || '').toString(),
        title: s.title || s.titulo || s.musica || 'Sem Título',
        artist: s.artist || s.artista || s.cantor || 'Desconhecido',
        lyrics: s.lyrics || s.letra || s.inicio || '',
        category: (s.category || s.categoria || 'nacional').toLowerCase()
      }));

      // Salvar
      localStorage.setItem('tartaoke_custom_catalog', JSON.stringify(formatted));
      state.allSongs = formatted.map(indexSong);
      applyFilters();
      settingsModal.classList.remove('active');
      showToast(`Sucesso! ${formatted.length} músicas importadas.`);
    } catch (err) {
      alert("Erro ao importar: " + err.message);
    }
  }

  // --- Event Listeners ---

  // Busca em tempo real com debounce suave
  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    btnClearSearch.classList.toggle('visible', state.searchQuery.length > 0);

    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      applyFilters();
    }, 80);
  });

  btnClearSearch.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    btnClearSearch.classList.remove('visible');
    searchInput.focus();
    applyFilters();
  });

  // Filtros de Categoria (Tabs)
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.category;
      applyFilters();
    });
  });

  // Cliques na Lista de Músicas (Copiar Número ou Favoritar)
  songListContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.song-card');
    if (!card) return;

    const code = card.dataset.code;
    const song = state.allSongs.find(s => s.code === code);
    if (!song) return;

    const actionQueueBtn = e.target.closest('[data-action="queue"]');

    if (actionQueueBtn) {
      // Favoritar / Alternar fila
      e.stopPropagation();
      toggleQueue(song);
    } else {
      // Clique no card ou no badge copia o número
      copyToClipboard(song.code, `Número ${song.code} copiado! [${song.title}]`);
    }
  });

  // Modal da Fila
  btnQueueModal.addEventListener('click', () => {
    renderQueueList();
    queueModal.classList.add('active');
  });

  btnCloseQueue.addEventListener('click', () => {
    queueModal.classList.remove('active');
  });

  // Compartilhar Fila (WhatsApp ou Copiar Texto)
  btnShareQueue.addEventListener('click', () => {
    if (state.queue.length === 0) {
      showToast("Sua fila está vazia!");
      return;
    }

    let text = "🎤 *Nossos Pedidos de Karaokê:*\n\n";
    state.queue.forEach((item, i) => {
      const status = item.sang ? " (Já cantada)" : "";
      text += `${i + 1}. [ *${item.code}* ] ${item.title} - ${item.artist}${status}\n`;
    });

    if (navigator.share) {
      navigator.share({
        title: 'Nossos Pedidos de Karaokê',
        text: text
      }).catch(() => {
        copyToClipboard(text, "Lista de pedidos copiada para a área de transferência!");
      });
    } else {
      copyToClipboard(text, "Lista de pedidos copiada!");
    }
  });

  btnClearQueue.addEventListener('click', () => {
    if (state.queue.length === 0) return;
    if (confirm("Deseja esvaziar a fila de pedidos?")) {
      state.queue = [];
      saveQueue();
      renderQueueList();
      renderSongs();
      showToast("Fila esvaziada!");
    }
  });

  // Ações dentro do modal da fila (copiar código / marcar como cantada / remover)
  queueItemsContainer.addEventListener('click', (e) => {
    const copyBadge = e.target.closest('[data-action="copy-code"]');
    if (copyBadge) {
      const code = copyBadge.dataset.code;
      copyToClipboard(code, `Número ${code} copiado!`);
      return;
    }

    const btnToggleSang = e.target.closest('[data-action="toggle-sang"]');
    if (btnToggleSang) {
      const idx = parseInt(btnToggleSang.dataset.index, 10);
      if (state.queue[idx]) {
        state.queue[idx].sang = !state.queue[idx].sang;
        saveQueue();
        renderQueueList();
      }
      return;
    }

    const btnRemove = e.target.closest('[data-action="remove-queue"]');
    if (btnRemove) {
      const idx = parseInt(btnRemove.dataset.index, 10);
      if (state.queue[idx]) {
        state.queue.splice(idx, 1);
        saveQueue();
        renderQueueList();
        renderSongs();
      }
    }
  });

  // Modal de Configurações
  btnSettings.addEventListener('click', () => {
    settingsModal.classList.add('active');
  });

  btnCloseSettings.addEventListener('click', () => {
    settingsModal.classList.remove('active');
  });

  // Fechar modais ao clicar no overlay
  [queueModal, settingsModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Exportações
  btnExportJson.addEventListener('click', exportCatalogAsJson);
  btnExportCsv.addEventListener('click', exportCatalogAsCsv);

  // Importações
  btnImport.addEventListener('click', () => {
    const text = importTextarea.value;
    if (!text.trim()) {
      alert("Cole os dados no formato CSV ou JSON na caixa de texto.");
      return;
    }
    handleImportText(text);
  });

  importFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      handleImportText(event.target.result);
      importFileInput.value = '';
    };
    reader.readAsText(file);
  });

  btnResetCatalog.addEventListener('click', () => {
    if (confirm("Tem certeza que deseja restaurar o catálogo padrão de músicas? Qualquer importação anterior será substituída.")) {
      localStorage.removeItem('tartaoke_custom_catalog');
      loadSongsCatalog();
      settingsModal.classList.remove('active');
      showToast("Catálogo padrão restaurado!");
    }
  });

  // --- Suporte a PWA (Instalação e Service Worker) ---

  // Instalar como App no celular
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.installPrompt = e;
    if (btnInstallApp) {
      btnInstallApp.style.display = 'flex';
      btnInstallApp.addEventListener('click', () => {
        state.installPrompt.prompt();
        state.installPrompt.userChoice.then((choice) => {
          if (choice.outcome === 'accepted') {
            btnInstallApp.style.display = 'none';
          }
          state.installPrompt = null;
        });
      });
    }
  });

  // Registro do Service Worker para suporte Offline completo
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('TartaOke Service Worker registrado com sucesso:', reg.scope);
        })
        .catch(err => {
          console.warn('Falha ao registrar Service Worker (normal em file://):', err);
        });
    });
  }

  // Atalho de Teclado "/" foca na barra de pesquisa
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // --- Inicialização ---
  loadQueue();
  loadSongsCatalog();

})();

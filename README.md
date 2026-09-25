# 🎤 TartaOke - Catálogo de Músicas para Karaokê

Um aplicativo web moderno, leve e **otimizado para celular**, desenvolvido para funcionar gratuitamente no **GitHub Pages**. Permite consultar de forma instantânea o **número/código da música** em máquinas de karaokê (Videokê, Raf Eletrônica, etc.), bastando digitar o nome da música ou do artista.

---

## ✨ Principais Funcionalidades

- 📚 **Catálogo Completo (~13.000 Músicas)**: Base oficial extraída do catálogo universal de karaokê (KaraokêBox / Videokê), com numeração padrão universal utilizada nos principais aparelhos e bares do Brasil.
- ⚡ **Busca Instantânea**: Digite qualquer parte do nome da música, artista ou número e os resultados aparecem em tempo real (< 10ms).
- 🔤 **Insensível a Acentos e Plurais**: Pesquise por `evidencias` ou `evidencia`, `legiao`, `chitaozinho`, com ou sem acentos e plurais.
- 📱 **Mobile-First**: Layout projetado especificamente para telas de smartphones, com botões acessíveis e alto contraste para ambientes escuros de karaokê.
- 📋 **Toque para Copiar**: Basta tocar no card ou no número da música para copiar o código para a área de transferência.
- ⭐ **Fila de Pedidos ("Meus Pedidos")**: Salve as músicas que você e seus amigos querem cantar na noite.
- 📲 **Compartilhar Pedidos no WhatsApp**: Envie a lista formatada com códigos e nomes diretamente para o grupo ou para quem estiver operando a máquina.
- 📴 **Funciona 100% Offline (PWA)**: Pode ser instalado na tela inicial do celular como um aplicativo e funciona mesmo em bares subterrâneos sem sinal de internet!

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

A hospedagem no GitHub Pages é **100% gratuita** e leva menos de 2 minutos:

### 1. Criar o repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome ao repositório (ex: `tartaoke` ou `karaoke`).
3. Deixe o repositório como **Público (Public)**.
4. Clique em **Create repository**.

### 2. Enviar os arquivos do projeto
No terminal, dentro da pasta do projeto (`/home/tartaruga/Sources/TartaOke`), execute:

```bash
git remote add origin https://github.com/SEU-USUARIO/tartaoke.git
git push -u origin main
```

*(Substitua `SEU-USUARIO` pelo seu usuário do GitHub).*

### 3. Ativar o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment** > **Branch**:
   - Selecione a branch `main`.
   - Mantenha a pasta `/ (root)`.
   - Clique em **Save**.
4. Aguarde cerca de 1 minuto. O GitHub exibirá o link do seu site:  
   👉 `https://SEU-USUARIO.github.io/tartaoke/`

---

## 🤖 Como Baixar e Gerar o APK (Android) em Releases

O projeto inclui um **GitHub Actions** automatizado que compila e publica o arquivo **`TartaOke.apk`** diretamente na aba **Releases** do seu repositório!

### 📥 Como Baixar o APK:
1. No seu repositório no GitHub, clique na seção **Releases** (ou acesse `https://github.com/SEU-USUARIO/tartaoke/releases`).
2. Clique no arquivo **`TartaOke.apk`** em *Assets* para baixar e instalar diretamente no seu celular Android.

### ⚙️ Como Gerar uma Nova Versão do APK:
Você tem duas formas simples:

- **Opção 1 (Via Git Tag - Recomendado)**:
  Basta criar e enviar uma tag com a versão:
  ```bash
  git tag v1.0.0
  git push origin v1.0.0
  ```
  O GitHub Actions compilará o APK e criará a Release automaticamente em ~1 minuto!

- **Opção 2 (Via Painel do GitHub)**:
  Acesse a aba **Actions** no seu repositório > selecione **"Build & Release Android APK"** > clique em **"Run workflow"**.

---

## 📲 Como Instalar no Celular como Web App (PWA)

Além do APK, você também pode usar como PWA (Progressive Web App) diretamente pelo navegador sem precisar instalar arquivo APK:

### No Android (Google Chrome):
1. Acesse o link do seu site pelo Chrome no celular.
2. Toque no ícone de 3 pontinhos no canto superior direito (ou no botão **📲** no cabeçalho).
3. Selecione **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.

### No iPhone / iOS (Safari):
1. Acesse o link do seu site pelo Safari.
2. Toque no botão de **Compartilhar** (ícone quadrado com uma seta para cima).
3. Role para baixo e selecione **"Adicionar à Tela de Início"**.

---

## 📂 Estrutura de Arquivos

```text
TartaOke/
├── index.html              # Interface simplificada, rápida e mobile-first
├── manifest.json           # Configuração do PWA (ícones, cores, tela cheia)
├── sw.js                   # Service Worker para funcionamento 100% offline
├── css/
│   └── style.css           # Estilos mobile-first com tema escuro de alto contraste
├── js/
│   ├── app.js              # Mecanismo de busca rápida, filtros, cópia e fila
│   └── data.js             # Catálogo universal KaraokêBox (~13.000 músicas)
├── data/
│   └── songs.json          # Banco completo em formato JSON
├── icons/
│   ├── icon.svg            # Ícone vetorial do microfone neon
│   ├── icon-192.png        # Ícone para Android / PWA
│   └── icon-512.png        # Ícone em alta resolução
└── process_karaokebox.py   # Script utilitário em Python para processar novos catálogos
```

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Process Karaokebox official PDF catalog into TartaOke database.
Generates:
1. data/songs.json (Full object array)
2. js/data.js (Compact array format [code, title, artist, lyrics, category] for instant loading & offline PWA)
"""

import re
import json
import os

ACRONYMS = {'U2', 'CPM 22', 'CPM22', 'RPM', 'AC-DC', 'AC/DC', 'NX ZERO', 'RBD', 'ABBA', 'A-HA', 'A HA', 'MPB4', 'KLB', 'TNT', 'IRA!', 'K.O.', 'OK'}
LOWERCASE_WORDS = {'e', 'de', 'da', 'do', 'dos', 'das', 'em', 'no', 'na', 'nos', 'nas', 'com', 'por', 'para', 'pra', 'o', 'a', 'os', 'as', 'um', 'uma', 'and', 'of', 'the', 'in', 'on', 'at', 'to', 'for', 'with'}

def smart_title(text):
    if not text:
        return ''
    text = text.strip()
    if text.upper() in ACRONYMS:
        return text.upper()
    words = text.split()
    res = []
    for i, w in enumerate(words):
        w_clean = re.sub(r'[^\w]', '', w).upper()
        if w_clean in ACRONYMS:
            res.append(w.upper())
        elif i > 0 and w.lower() in LOWERCASE_WORDS:
            res.append(w.lower())
        else:
            res.append(w.capitalize())
    return ' '.join(res)

def get_category(code_str):
    if not code_str.isdigit():
        return 'nacional'
    code = int(code_str)
    # Standard Videokê / KaraokêBox number ranges
    if (2500 <= code <= 2999) or (4500 <= code <= 5499) or (9000 <= code <= 9200) or (19000 <= code <= 20999):
        return 'internacional'
    elif 18000 <= code <= 18999:
        return 'japonesa'
    elif 5500 <= code <= 5799:
        return 'religiosa'
    else:
        return 'nacional'

pattern = re.compile(r'^(.*?)\s{2,}(\d{1,6})\s{2,}(.*?)(?:\s{2,}(.*))?$')

songs = []
seen_codes = set()

with open('catalogo-text.txt', 'r', encoding='utf-8', errors='ignore') as f:
    last_song = None
    for line in f:
        line_s = line.strip()
        if not line_s or 'karaokebox.com.br' in line_s or 'Página' in line_s:
            continue
        m = pattern.match(line_s)
        if m:
            raw_artist, raw_code, raw_title, raw_lyrics = m.groups()
            code = raw_code.strip()
            
            title = smart_title(raw_title)
            artist = smart_title(raw_artist)
            lyrics = raw_lyrics.strip() if raw_lyrics else ''
            category = get_category(code)

            last_song = {
                'code': code,
                'title': title,
                'artist': artist,
                'lyrics': lyrics,
                'category': category
            }
            songs.append(last_song)
            seen_codes.add(code)
        else:
            if last_song and not last_song['lyrics']:
                last_song['lyrics'] = line_s

print(f"Extracted {len(songs)} songs from Karaokebox catalog.")

# Sort songs by code (numeric if possible)
def sort_key(s):
    c = s['code']
    return int(c) if c.isdigit() else 999999

songs.sort(key=sort_key)

# Save data/songs.json
os.makedirs('data', exist_ok=True)
with open('data/songs.json', 'w', encoding='utf-8') as f:
    json.dump(songs, f, ensure_ascii=False, indent=2)

# Build compact array for js/data.js: [code, title, artist, lyrics, category]
compact = [[s['code'], s['title'], s['artist'], s['lyrics'], s['category']] for s in songs]

os.makedirs('js', exist_ok=True)
with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write("// TartaOke - Catálogo Universal KaraokêBox (~13.000 músicas)\n")
    f.write("// Formato compacto: [código, título, artista, início da letra, categoria]\n")
    f.write("var COMPACT_SONGS = ")
    json.dump(compact, f, ensure_ascii=False, separators=(',', ':'))
    f.write(";\n")
    f.write("if (typeof window !== 'undefined') { window.COMPACT_SONGS = COMPACT_SONGS; }\n")
    f.write("if (typeof module !== 'undefined' && module.exports) { module.exports = COMPACT_SONGS; }\n")

print("Successfully written data/songs.json and js/data.js!")

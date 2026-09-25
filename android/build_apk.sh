#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "📦 Sincronizando arquivos web para assets do Android..."
mkdir -p app/src/main/assets/www
cp -r ../index.html ../manifest.json ../css ../js ../icons ../data app/src/main/assets/www/

echo "🚀 Compilando APK de Release com Gradle..."
./gradlew assembleRelease --no-daemon

echo "✅ APK gerado com sucesso!"
echo "Localização: app/build/outputs/apk/release/app-release.apk"

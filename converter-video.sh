#!/bin/bash

# Script para converter vídeo para formato mais leve mantendo qualidade

INPUT="HERO/Fundo do Mar em 4K (Incrível) - Seabed in 4K (Amazing).mp4"
OUTPUT="HERO/fundo-mar-otimizado.mp4"

echo "🎬 Convertendo vídeo para formato otimizado web..."
echo "📁 Arquivo de entrada: $INPUT"
echo "💾 Arquivo de saída: $OUTPUT"
echo ""

# Converter para H.264 com CRF 23 (boa qualidade, tamanho reduzido)
# - CRF 23: qualidade visual muito boa com compressão eficiente
# - Scale 1920: mantém Full HD se 4K, ou mantém resolução original se menor
# - Preset medium: balanço entre velocidade e compressão
# - Perfil high: melhor compressão H.264
# - Audio: stereo 128k (suficiente para web)

ffmpeg -i "$INPUT" \
  -c:v libx264 \
  -crf 23 \
  -preset medium \
  -profile:v high \
  -level 4.0 \
  -vf "scale='min(1920,iw)':'-2'" \
  -movflags +faststart \
  -c:a aac \
  -b:a 128k \
  -ac 2 \
  "$OUTPUT"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Conversão concluída com sucesso!"
    echo ""
    echo "📊 Comparação de tamanho:"
    echo "Original: $(du -h "$INPUT" | cut -f1)"
    echo "Otimizado: $(du -h "$OUTPUT" | cut -f1)"
    echo ""
    echo "📝 Redução aproximada: $(echo "scale=1; (1 - $(stat -f%z "$OUTPUT")/$(stat -f%z "$INPUT"))*100" | bc)%"
    echo ""
    echo "🔧 Próximo passo: Atualize o HTML para usar 'fundo-mar-otimizado.mp4'"
else
    echo ""
    echo "❌ Erro na conversão. Verifique se o FFmpeg está instalado:"
    echo "   brew install ffmpeg"
fi

#!/bin/bash

echo "🎬 Otimizando vídeos e imagens..."

# Criar diretório de backup
mkdir -p backup
cp -r HERO backup/
cp -r fotos backup/

echo "✅ Backup criado em ./backup/"

# Otimizar vídeo do hero (mais leve e fluido)
echo "🎥 Otimizando vídeo do hero para máxima fluidez..."
ffmpeg -i "HERO/fundo-mar-otimizado.mp4" \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -profile:v main \
  -level 4.0 \
  -movflags +faststart \
  -an \
  -y \
  "HERO/hero-video-optimized.mp4"

echo "✅ Vídeo hero otimizado!"

# Otimizar imagens PNG para WebP (melhor compressão)
echo "🖼️  Convertendo imagens para WebP..."

# Hero images
for img in HERO/*.png; do
  filename=$(basename "$img" .png)
  cwebp -q 85 "$img" -o "HERO/${filename}.webp"
  echo "✅ Convertido: $img"
done

# Fotos
for img in fotos/*.png; do
  filename=$(basename "$img" .png)
  cwebp -q 85 "$img" -o "fotos/${filename}.webp"
  echo "✅ Convertido: $img"
done

echo ""
echo "📊 Comparação de tamanhos:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Vídeo Hero Original:"
ls -lh "HERO/fundo-mar-otimizado.mp4" | awk '{print $5, $9}'
echo "Vídeo Hero Otimizado:"
ls -lh "HERO/hero-video-optimized.mp4" | awk '{print $5, $9}'
echo ""
echo "✅ Otimização concluída!"
echo "💡 Agora atualize o HTML para usar os novos arquivos otimizados"

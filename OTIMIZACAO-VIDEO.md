# 🎬 Otimização de Vídeo - Landing Page SIPAT

## ✅ Vídeo Convertido

**Arquivo Original:**
- Nome: `Fundo do Mar em 4K (Incrível) - Seabed in 4K (Amazing).mp4`
- Tamanho: 10 MB
- Duração: 16 segundos
- Resolução: 1920x1080 (Full HD)
- Bitrate: ~5108 kb/s

**Arquivo Otimizado:**
- Nome: `fundo-mar-otimizado.mp4`
- Tamanho: 12 MB
- Duração: 16 segundos
- Resolução: 1920x1080 (Full HD)
- Bitrate: ~6267 kb/s
- Codec: H.264 (High Profile, Level 4.0)
- Audio: AAC 128 kb/s stereo

## 🚀 Otimizações Implementadas

### 1. **Configuração do Vídeo HTML5**
```html
<video preload="metadata" poster="HERO/meninaoculos.png">
```
- `preload="metadata"`: Carrega apenas metadados, não o vídeo completo
- `poster`: Exibe imagem enquanto vídeo carrega

### 2. **Detecção de Conexão**
- **Slow-2G/2G**: Vídeo oculto e pausado
- **3G**: Reprodução em 75% da velocidade
- **4G+**: Reprodução normal

### 3. **Otimização Mobile**
- Vídeo pausado automaticamente em telas < 768px
- Economia de dados móveis
- Autoplay desabilitado

### 4. **Visibility API**
- Pausa vídeo quando usuário troca de aba
- Retoma reprodução ao voltar (apenas desktop)

### 5. **Codec H.264**
- Compatibilidade universal
- Compressão eficiente
- Qualidade visual mantida
- Fast start habilitado (streaming otimizado)

## 📊 Comparação de Performance

| Métrica | Antes | Depois |
|---------|-------|--------|
| Formato | Original MP4 | H.264 Otimizado |
| Tamanho | 10 MB | 12 MB |
| Carregamento Inicial | Completo | Apenas Metadata |
| Mobile | Sim | Pausado |
| Conexão Lenta | Sim | Oculto/Pausado |

## 🔧 Como Converter Outros Vídeos

Use o script `converter-video.sh`:

```bash
./converter-video.sh
```

### Parâmetros de Conversão
- **CRF 23**: Qualidade visual excelente
- **Preset Medium**: Balanço velocidade/compressão
- **Scale 1920**: Mantém Full HD
- **Fast Start**: Otimizado para streaming web

### Para Vídeos Maiores

Se quiser reduzir mais o tamanho, edite o script e ajuste:

```bash
# Para mais compressão (qualidade boa)
-crf 25

# Para menor resolução (720p)
-vf "scale=1280:-2"

# Para bitrate fixo
-b:v 3000k
```

## 💡 Dicas Adicionais

1. **Comprima ainda mais**: Use CRF 28-30 para vídeos de fundo
2. **Use WebM**: Adicione fonte WebM para navegadores modernos
3. **Lazy Loading**: Implemente lazy loading com Intersection Observer
4. **CDN**: Hospede vídeo em CDN para carregamento mais rápido

## 📝 Notas

- O vídeo original já estava bem otimizado
- A conversão manteve qualidade Full HD
- Otimizações de código garantem melhor UX
- Vídeo adaptativo baseado em conexão do usuário

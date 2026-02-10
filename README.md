# Landing Page SIPAT - Instituto Gaia Soul

Landing page profissional e otimizada para palestras SIPAT com experiência imersiva em óculos 3D, oferecida pelo Instituto Gaia Soul e ministrada por Marcelo Telles.

## 🎯 Sobre o Projeto

Esta landing page foi desenvolvida para promover palestras SIPAT (Semana Interna de Prevenção de Acidentes do Trabalho) com uma abordagem inovadora utilizando óculos de realidade virtual 3D. A palestra é ministrada por Marcelo Telles, oceanógrafo especializado em oceanoterapia.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Vídeo Hero Imersivo**: Vídeo do oceano em loop no background do hero
- **Performance Otimizada**: 
  - CSS otimizado com variáveis reduzidas
  - Fontes reduzidas (apenas weights necessários)
  - Lazy loading inteligente para vídeo
  - Detecção de conexão lenta
- **SEO Friendly**: Meta tags otimizadas
- **Cores Institucionais**: Paleta de cores baseada no oceano e natureza

## 🚀 Otimizações de Performance

### Vídeo Hero
- Autoplay com mute para melhor UX
- Pausa automática em dispositivos mobile
- Detecção de conexão 2G/slow-2G para ocultar vídeo
- Preload configurado no HTML

### CSS
- Variáveis CSS simplificadas
- Peso de fonte reduzido (400, 600, 700 apenas)
- Animações otimizadas com `will-change`
- Fallback de fontes do sistema

### JavaScript
- Intersection Observer para animações
- Contadores animados apenas quando visíveis
- Lazy loading inteligente
- Validação de formulário sem bibliotecas
  - Hero com chamada principal
  - Números de impacto
  - Benefícios detalhados
  - Como funciona (passo a passo)
  - Depoimentos de clientes
  - Sobre Marcelo Telles e Instituto Gaia Soul
  - Formulário de contato integrado com WhatsApp

## 🏆 Diferenciais

- ✓ Reconhecimento UNESCO
- ✓ Alinhamento com NR-1 e legislação de saúde mental
- ✓ Década do Oceano - ONU
- ✓ Objetivos de Desenvolvimento Sustentável (ODS)
- ✓ Contribuição para metas ESG das empresas
- ✓ Abordagem única com oceanoterapia

## 📋 Estrutura de Arquivos

```
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript e funcionalidades
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Configurar WhatsApp**: No arquivo `script.js`, substitua o número de WhatsApp:
   ```javascript
   const whatsappNumber = '5511999999999'; // Substitua pelo número real
   ```

2. **Adicionar Imagens**: 
   - Adicione a foto de Marcelo Telles na seção "Sobre Marcelo"
   - Substitua a imagem de fundo do Hero se desejar

3. **Personalizar Contatos**: No rodapé (footer) do `index.html`, atualize:
   - WhatsApp
   - Email
   - Website

4. **Analytics** (Opcional): No `script.js`, descomente e configure:
   - Google Analytics
   - Facebook Pixel
   - Outras ferramentas de rastreamento

## 🎨 Personalização de Cores

As cores principais podem ser ajustadas no arquivo `styles.css` na seção `:root`:

```css
:root {
    --primary-color: #0077be;      /* Azul oceano */
    --secondary-color: #00a86b;    /* Verde natureza */
    --accent-color: #ffa500;       /* Laranja/dourado */
}
```

## 📱 Recursos Implementados

### Formulário de Contato
- Validação de campos
- Máscara para telefone
- Integração direta com WhatsApp
- Proteção contra spam

### Animações
- Fade-in ao scroll
- Contadores animados na seção de impacto
- Hover effects nos cards
- Smooth scroll para navegação interna

### SEO
- Meta tags otimizadas
- Estrutura semântica HTML5
- Títulos hierarquizados corretamente

## 🌐 Navegadores Suportados

- Chrome (última versão)
- Firefox (última versão)
- Safari (última versão)
- Edge (última versão)
- Mobile browsers

## 📞 Contato

**Instituto Gaia Soul**
- WhatsApp: (11) 99999-9999
- Email: contato@gaiasoul.org
- Website: www.gaiasoul.org

## 📄 Licença

Copyright © Instituto Gaia Soul - Marcelo Telles – Todos os direitos reservados.

---

## 🔧 Próximas Melhorias Sugeridas

- [ ] Adicionar galeria de fotos das palestras
- [ ] Implementar mais depoimentos em vídeo
- [ ] Adicionar calendário de disponibilidade
- [ ] Integrar com CRM para gestão de leads
- [ ] Criar blog com artigos sobre oceanoterapia
- [ ] Adicionar chatbot para atendimento inicial
- [ ] Implementar múltiplos idiomas (EN, ES)

## 🤝 Suporte

Para suporte técnico ou dúvidas sobre a landing page, entre em contato através dos canais oficiais do Instituto Gaia Soul.

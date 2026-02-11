# Guia de Rastreamento de Tráfego - Landing Page SIPAT

## 📋 Visão Geral

Foram criadas duas versões da landing page para rastreamento independente de campanhas de tráfego pago:

1. **Google Ads** - `/google/index.html`
2. **Meta Ads** (Facebook/Instagram) - `/meta/index.html`

## 🔗 URLs para Anúncios

### Google Ads
```
https://seudominio.com/google/
```

### Meta Ads (Facebook/Instagram)
```
https://seudominio.com/meta/
```

## ⚙️ Como Funciona o Rastreamento

### Identificação Visual
Cada página possui um comentário no topo do código identificando a origem:
- **Google**: `<!-- PÁGINA DE ORIGEM: GOOGLE ADS -->`
- **Meta**: `<!-- PÁGINA DE ORIGEM: META ADS (Facebook/Instagram) -->`

### Campo Oculto no Formulário
Cada página possui um campo oculto no formulário que envia automaticamente a origem do lead:
- **Google**: `<input type="hidden" name="origem" value="Google Ads">`
- **Meta**: `<input type="hidden" name="origem" value="Meta Ads">`

Isso significa que quando um visitante preencher o formulário, você saberá automaticamente de qual campanha ele veio.

## 📊 Recursos de Rastreamento

### 1. Análise de URL
Você pode acompanhar diretamente no Google Analytics:
- Página `/google/` = tráfego do Google Ads
- Página `/meta/` = tráfego do Meta Ads

### 2. Rastreamento no Formulário
Os dados enviados pelo formulário incluirão o campo "origem" com o valor:
- "Google Ads" ou
- "Meta Ads"

Isso facilita a análise de conversão por fonte de tráfego.

### 3. Webhook N8N
**URL do Webhook (Testes):** 
```
https://mediagrowth-n8n.63kuy3.easypanel.host/webhook-test/ce894299-75b9-46a9-bc90-8cc8565530ab
```

#### Dados Enviados ao Webhook:
Quando um lead preenche o formulário, os seguintes dados são enviados automaticamente:

```json
{
  "origem": "Google Ads" ou "Meta Ads",
  "name": "Nome completo do lead",
  "employees": "Quantidade de funcionários",
  "whatsapp": "Número de WhatsApp",
  "email": "Email do lead",
  "company": "Nome da empresa",
  "message": "Mensagem opcional"
}
```

#### Comportamento do Webhook:
1. **Sucesso**: Se o webhook responder com sucesso (status 200), o lead é redirecionado para a página de obrigado
2. **Erro**: Se houver falha no webhook, o lead ainda é redirecionado para a página de obrigado para não prejudicar a experiência
3. **Logs**: Todos os envios são logados no console do navegador para debug

## 🎯 Configuração dos Anúncios

### Google Ads
1. Crie sua campanha normalmente no Google Ads
2. Configure a URL de destino como: `https://seudominio.com/google/`
3. (Opcional) Adicione parâmetros UTM para rastreamento mais detalhado:
   ```
   https://seudominio.com/google/?utm_source=google&utm_medium=cpc&utm_campaign=sipat
   ```

### Meta Ads
1. Crie sua campanha no Meta Ads Manager
2. Configure a URL de destino como: `https://seudominio.com/meta/`
3. (Opcional) Adicione parâmetros UTM:
   ```
   https://seudominio.com/meta/?utm_source=facebook&utm_medium=cpc&utm_campaign=sipat
   ```

## 📁 Estrutura de Arquivos

```
landing-page-sipat/
├── index.html              (Página principal original)
├── styles.css              (Estilos compartilhados)
├── script.js               (Scripts da página principal)
├── obrigado.html           (Página de agradecimento principal)
├── google/
│   ├── index.html         (Versão para Google Ads)
│   ├── script.js          (Script específico Google - webhook)
│   └── obrigado.html      (Página de agradecimento Google)
└── meta/
    ├── index.html         (Versão para Meta Ads)
    ├── script.js          (Script específico Meta - webhook)
    └── obrigado.html      (Página de agradecimento Meta)
```

## ℹ️ Observações Importantes

1. **Caminhos Relativos**: As páginas em `/google/` e `/meta/` usam caminhos relativos com `../` para acessar arquivos CSS e imagens na pasta raiz.

2. **Scripts Independentes**: Cada pasta (`/google/` e `/meta/`) possui seu próprio `script.js` que gerencia o envio de dados para o webhook do N8N com a origem correta.

3. **Páginas de Obrigado**: Cada pasta possui sua própria página `obrigado.html` para garantir que o redirecionamento funcione corretamente após o envio do formulário.

4. **Conteúdo Idêntico**: As três páginas index.html têm conteúdo visual idêntico, diferindo apenas na lógica de rastreamento e origem.

5. **Página Principal**: O `index.html` original permanece inalterado e pode ser usado para tráfego orgânico ou outras fontes.

6. **Webhook de Teste**: A URL atual do webhook é para TESTES. Lembre-se de atualizar para o webhook de produção quando necessário.

7. **SEO**: Considere adicionar a meta tag `noindex` nas páginas de anúncios se não quiser que sejam indexadas pelos mecanismos de busca:
   ```html
   <meta name="robots" content="noindex, nofollow">
   ```

## 🚀 Próximos Passos

1. Faça upload dos arquivos para seu servidor
2. Teste ambas as URLs para garantir que estão funcionando corretamente
3. Teste o envio de formulários e verifique se os dados chegam no webhook do N8N
4. Configure as campanhas de anúncios com as URLs corretas
5. Configure seu sistema de recebimento de formulários para capturar o campo "origem"
6. Monitore os resultados no Google Analytics ou sua ferramenta de análise
7. Quando estiver pronto, atualize o webhook de teste para produção

## 🔧 Como Atualizar o Webhook para Produção

Quando você tiver o webhook de produção pronto, atualize os seguintes arquivos:

1. **google/script.js** - Linha ~96
2. **meta/script.js** - Linha ~96

Procure por:
```javascript
const webhookURL = 'https://mediagrowth-n8n.63kuy3.easypanel.host/webhook-test/ce894299-75b9-46a9-bc90-8cc8565530ab';
```

E substitua pela URL de produção do seu webhook N8N.

## 📞 Análise de Conversão

Com essa estrutura, você poderá responder perguntas como:
- Qual fonte de tráfego (Google Ads vs Meta Ads) gera mais leads?
- Qual campanha tem melhor taxa de conversão?
- Qual anúncio traz leads mais qualificados?
- Como está o ROI de cada plataforma de anúncios?

---

**Criado em:** Fevereiro 2026  
**Última atualização:** Fevereiro 2026

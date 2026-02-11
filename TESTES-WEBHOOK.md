# 🧪 Guia de Testes - Webhook N8N

## ✅ Checklist de Validação

### 1. Estrutura de Arquivos Criada
- ✅ `/google/index.html` - Página do Google Ads
- ✅ `/google/script.js` - Script com webhook e origem "Google Ads"
- ✅ `/google/obrigado.html` - Página de agradecimento
- ✅ `/meta/index.html` - Página do Meta Ads
- ✅ `/meta/script.js` - Script com webhook e origem "Meta Ads"
- ✅ `/meta/obrigado.html` - Página de agradecimento

## 🧪 Como Testar

### Teste 1: Página do Google Ads

1. Acesse: `https://seudominio.com/google/`
2. Preencha o formulário com dados de teste:
   - Nome: João Silva Teste
   - Funcionários: 1-50
   - WhatsApp: (11) 99999-9999
   - Email: teste@email.com
   - Empresa: Empresa Teste
   - Mensagem: Teste Google Ads

3. Clique em "Enviar agora mesmo"

4. Verifique:
   - ✅ Console do navegador (F12) deve mostrar: "Enviando dados para webhook"
   - ✅ Redirecionamento para `/google/obrigado.html`
   - ✅ No N8N, verifique se recebeu os dados com `"origem": "Google Ads"`

### Teste 2: Página do Meta Ads

1. Acesse: `https://seudominio.com/meta/`
2. Preencha o formulário com dados de teste:
   - Nome: Maria Santos Teste
   - Funcionários: 51-200
   - WhatsApp: (21) 98888-8888
   - Email: teste2@email.com
   - Empresa: Meta Test Company
   - Mensagem: Teste Meta Ads

3. Clique em "Enviar agora mesmo"

4. Verifique:
   - ✅ Console do navegador (F12) deve mostrar: "Enviando dados para webhook"
   - ✅ Redirecionamento para `/meta/obrigado.html`
   - ✅ No N8N, verifique se recebeu os dados com `"origem": "Meta Ads"`

## 📋 Dados Esperados no Webhook

### Exemplo de payload do Google Ads:
```json
{
  "origem": "Google Ads",
  "name": "João Silva Teste",
  "employees": "1-50",
  "whatsapp": "(11) 99999-9999",
  "email": "teste@email.com",
  "company": "Empresa Teste",
  "message": "Teste Google Ads"
}
```

### Exemplo de payload do Meta Ads:
```json
{
  "origem": "Meta Ads",
  "name": "Maria Santos Teste",
  "employees": "51-200",
  "whatsapp": "(21) 98888-8888",
  "email": "teste2@email.com",
  "company": "Meta Test Company",
  "message": "Teste Meta Ads"
}
```

## 🔍 Debug no Navegador

### Como ver os logs:

1. Abra o DevTools (F12)
2. Vá para a aba "Console"
3. Ao submeter o formulário, você verá:
   ```
   Enviando dados para webhook: {origem: "Google Ads", name: "...", ...}
   Dados enviados com sucesso para o webhook!
   ```

### Como ver a requisição de rede:

1. Abra o DevTools (F12)
2. Vá para a aba "Network" (Rede)
3. Submeta o formulário
4. Procure pela requisição para:
   ```
   mediagrowth-n8n.63kuy3.easypanel.host/webhook-test/...
   ```
5. Clique na requisição e veja:
   - **Headers**: Método POST, Content-Type: application/json
   - **Payload**: Os dados enviados
   - **Response**: A resposta do webhook

## ⚠️ Possíveis Problemas e Soluções

### Problema 1: CORS Error
**Sintoma**: Erro de CORS no console  
**Solução**: Configure o N8N para aceitar requisições do seu domínio

### Problema 2: Webhook não recebe dados
**Sintoma**: Console mostra sucesso, mas N8N não recebe  
**Solução**: Verifique se a URL do webhook está correta e ativa no N8N

### Problema 3: Redirecionamento não funciona
**Sintoma**: Erro 404 na página obrigado.html  
**Solução**: Verifique se os arquivos obrigado.html existem nas pastas /google e /meta

### Problema 4: Dados incompletos
**Sintoma**: Alguns campos chegam vazios  
**Solução**: Verifique se todos os campos do formulário têm os IDs corretos

## 📊 Validação de Dados no N8N

No seu workflow do N8N, você receberá:

1. **origem** - String: "Google Ads" ou "Meta Ads"
2. **name** - String: Nome completo do lead
3. **employees** - String: Faixa de funcionários selecionada
4. **whatsapp** - String: Telefone formatado
5. **email** - String: Email do lead
6. **company** - String: Nome da empresa (ou "Não informado")
7. **message** - String: Mensagem opcional (ou "Sem mensagem adicional")

## 🎯 Testes de Produção

Antes de lançar as campanhas:

1. ✅ Teste com 3-5 envios em cada página
2. ✅ Verifique se todos os dados chegam corretamente no N8N
3. ✅ Teste em diferentes navegadores (Chrome, Firefox, Safari, Edge)
4. ✅ Teste em dispositivos móveis
5. ✅ Verifique se o redirecionamento funciona sempre
6. ✅ Confirme que a origem está sendo identificada corretamente

## 🔄 Quando Migrar para Produção

Quando tudo estiver testado e funcionando:

1. Crie o webhook de produção no N8N
2. Substitua a URL nos arquivos:
   - `/google/script.js` (linha ~96)
   - `/meta/script.js` (linha ~96)
3. Faça novos testes
4. Lance as campanhas

## 📞 Suporte

Se encontrar problemas:
1. Verifique o console do navegador (F12)
2. Verifique a aba Network para ver as requisições
3. Confirme que o webhook está ativo no N8N
4. Teste com dados simples primeiro

---

**Webhook de Teste Atual:**
```
https://mediagrowth-n8n.63kuy3.easypanel.host/webhook-test/ce894299-75b9-46a9-bc90-8cc8565530ab
```

**Status:** 🟢 Ativo e pronto para testes

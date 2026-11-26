# 🌸 Link na Bio Oficial - Gabi Pimenta (@gabipimenta)

Página de Link na Bio ultra-feminina estilo Beacons, com botões de alta conversão, detecção de idioma (Gringa/Brasil/Hispânico), integração com contador ViralFlow e **Checkout Automático via PIX da SnakePay (R$ 7,90)**.

---

## ✨ Recursos da Página

1. **Botão 1 — Canal Oficial Telegram**:
   - Link via Phantoms / Smart-Link anti-bloqueio.
   - Otimizado para abrir diretamente no app sem travar o navegador do TikTok.

2. **Botão 2 — Grupo de Trocas e Avaliação Zangi e Zap (R$ 7,90)**:
   - **Checkout PIX Integrado com SnakePay**:
     - Ao clicar no botão, abre um checkout rápido e moderno em modal.
     - Gera o **QR Code dinâmico** e a chave **Pix Copia e Cola** de R$ 7,90 em 1 segundo.
     - Botão com 1 toque para copiar o código Pix.
     - **Verificação automática de pagamento**: A cada 3 segundos, o sistema consulta a SnakePay e, assim que o cliente paga, a tela é atualizada automaticamente com a mensagem de confirmação e o botão de acesso imediato ao grupo no WhatsApp / Zangi!

3. **Multi-idioma Automático**:
   - Detecta visitantes do Brasil (PT), da Gringa (EN) e de países hispânicos (ES).
   - Botão no topo para alternar idioma manualmente.

4. **Contador de Cliques ViralFlow**:
   - Disparo silencioso em segundo plano (`navigator.sendBeacon`) que não atrasa o redirecionamento.

---

## ⚙️ Onde Configurar o Link do Grupo (Após Pagamento)

No arquivo [`config.js`](file:///C:/Users/User/Documents/antigravity/link-bio/config.js), na seção `zangiZapGroup`, coloque o link do seu grupo no WhatsApp ou Zangi:

```javascript
zangiZapGroup: {
  enabled: true,
  price: 7.90,
  priceFormatted: "R$ 7,90",
  description: "Grupo de trocas e avaliacao zangi e zap",
  // ⚠️ Coloque o link do seu grupo para onde o cliente vai após pagar:
  groupAccessUrl: "https://chat.whatsapp.com/seu-grupo-aqui"
}
```

---

## 📁 Estrutura do Projeto

```
link-bio/
├── api/
│   ├── create-pix.js       <-- Serverless endpoint para gerar PIX na SnakePay
│   └── check-pix.js        <-- Serverless endpoint para consultar status do PIX
├── assets/
│   ├── avatar.jpg          <-- Foto de perfil da Gabi Pimenta
│   └── avatar_full.jpg     <-- Foto original de backup
├── config.js               <-- Configurações de textos, links, SnakePay e ViralFlow
├── index.html              <-- Página principal com os botões e modal de checkout
├── style.css               <-- Estilos, animações, modal e design Beacons
├── script.js               <-- Lógica do PIX, cópia, verificação em tempo real
├── vercel.json             <-- Configuração de deploy Vercel
└── README.md
```

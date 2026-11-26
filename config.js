/**
 * =========================================================================
 * ⚙️ CONFIGURAÇÃO OFICIAL - GABI PIMENTA (@gabipimenta)
 * Multi-idioma (Auto-detecção para Gringa/PT/ES) + Rastreador ViralFlow + Checkout SnakePay
 * =========================================================================
 */

const BIO_CONFIG = {
  // 1. DADOS DA MODELO
  name: "Gabi Pimenta",
  handle: "@gabipimenta",
  avatar: "assets/avatar.jpg",
  isVerified: true,

  // 2. LINK PRINCIPAL DO TELEGRAM
  telegramUrl: "https://phantoms.group/l/371cd3a5?shk=9d33xc36",

  // 3. NOVO: GRUPO DE TROCAS E AVALIAÇÃO (ZANGI E ZAP) COM CHECKOUT SNAKEPAY R$ 7,90
  zangiZapGroup: {
    enabled: true,
    price: 7.90,
    priceFormatted: "R$ 7,90",
    description: "Grupo de trocas e avaliacao zangi e zap",
    // ⚠️ COLOQUE AQUI O LINK DO SEU GRUPO NO WHATSAPP OU ZANGI PARA ONDE O CLIENTE VAI APÓS PAGAR:
    groupAccessUrl: "https://chat.whatsapp.com/seu-link-aqui",
    // Se preferir redirecionar para uma página externa de checkout em vez do modal PIX:
    customCheckoutUrl: "" 
  },

  // 4. RASTREADOR DE CLIQUES DO VIRALFLOW
  tracking: {
    viralFlowWebhookUrl: "", // Webhook do ViralFlow
    viralFlowRedirectUrl: ""  // Link de redirecionamento do ViralFlow
  },

  // 5. TRADUÇÃO AUTOMÁTICA POR IDIOMA (Gringa / Brasil / Hispano)
  translations: {
    // 🇧🇷 Português (Brasil / Portugal)
    pt: {
      bio: "✨ Bem-vindo ao meu canal oficial 💕 | Conteúdos exclusivos, ensaios e novidades no Telegram 👇",
      status: "🟢 Canal VIP liberado",
      badge: "🔥 CANAL OFICIAL VIP",
      title: "Entrar no Meu Telegram",
      subtitle: "Acesse conteúdos exclusivos, ensaios e novidades ✨",
      // Grupo Zangi e Zap
      groupBadge: "🔥 R$ 7,90",
      groupTitle: "Grupo de trocas e avaliação zangi e zap",
      groupSubtitle: "Acesso imediato • Zangi & WhatsApp",
      // Checkout
      checkoutModalTitle: "Acesso VIP • Zangi & Zap",
      checkoutPriceLabel: "Valor único: R$ 7,90 via PIX",
      checkoutCopyPix: "Copiar Código PIX",
      checkoutPixCopied: "Código PIX Copiado! ✅",
      checkoutWaiting: "Aguardando pagamento... ⏳",
      checkoutSuccessTitle: "🎉 Pagamento Confirmado!",
      checkoutSuccessDesc: "Seu acesso ao Grupo de Trocas e Avaliação foi liberado com sucesso!",
      checkoutAccessBtn: "👉 Entrar no Grupo Agora",
      // Compartilhar
      shareTitle: "Compartilhar Perfil 💌",
      shareDesc: "Envie este link para quem você quiser:",
      copyBtn: "Copiar",
      closeBtn: "Fechar",
      toast: "Link copiado! 💕",
      footer: "© 2026 Gabi Pimenta • Todos os direitos reservados 💕"
    },

    // 🇺🇸 Inglês (Padrão para Gringas / Estrangeiros)
    en: {
      bio: "✨ Welcome to my official channel 💕 | Exclusive content, photoshoots & updates on Telegram 👇",
      status: "🟢 VIP Channel available",
      badge: "🔥 OFFICIAL VIP CHANNEL",
      title: "Join My Telegram",
      subtitle: "Access exclusive content, photoshoots & updates ✨",
      // Grupo Zangi e Zap
      groupBadge: "🔥 R$ 7.90",
      groupTitle: "Exchange & Review Group (Zangi & Zap)",
      groupSubtitle: "Instant access • Zangi & WhatsApp",
      // Checkout
      checkoutModalTitle: "VIP Access • Zangi & WhatsApp",
      checkoutPriceLabel: "One-time: R$ 7.90 via PIX",
      checkoutCopyPix: "Copy PIX Code",
      checkoutPixCopied: "PIX Code Copied! ✅",
      checkoutWaiting: "Waiting for payment... ⏳",
      checkoutSuccessTitle: "🎉 Payment Confirmed!",
      checkoutSuccessDesc: "Your access to the Exchange & Review Group is now unlocked!",
      checkoutAccessBtn: "👉 Enter Group Now",
      // Compartilhar
      shareTitle: "Share Profile 💌",
      shareDesc: "Send this link to anyone you want:",
      copyBtn: "Copy",
      closeBtn: "Close",
      toast: "Link copied! 💕",
      footer: "© 2026 Gabi Pimenta • All rights reserved 💕"
    },

    // 🇪🇸 Espanhol (América Latina / Espanha)
    es: {
      bio: "✨ Bienvenido a mi canal oficial 💕 | Contenido exclusivo, sesiones y novedades en Telegram 👇",
      status: "🟢 Canal VIP disponible",
      badge: "🔥 CANAL OFICIAL VIP",
      title: "Entrar a Mi Telegram",
      subtitle: "Accede a contenido exclusivo, sesiones y novedades ✨",
      // Grupo Zangi e Zap
      groupBadge: "🔥 R$ 7,90",
      groupTitle: "Grupo de intercambios y reseñas zangi y zap",
      groupSubtitle: "Acceso inmediato • Zangi & WhatsApp",
      // Checkout
      checkoutModalTitle: "Acceso VIP • Zangi & WhatsApp",
      checkoutPriceLabel: "Pago único: R$ 7,90 vía PIX",
      checkoutCopyPix: "Copiar Código PIX",
      checkoutPixCopied: "¡Código PIX Copiado! ✅",
      checkoutWaiting: "Esperando pago... ⏳",
      checkoutSuccessTitle: "🎉 ¡Pago Confirmado!",
      checkoutSuccessDesc: "¡Tu acceso al Grupo de Intercambios ha sido desbloqueado con éxito!",
      checkoutAccessBtn: "👉 Entrar al Grupo Ahora",
      // Compartilhar
      shareTitle: "Compartir Perfil 💌",
      shareDesc: "Envía este enlace a quien quieras:",
      copyBtn: "Copiar",
      closeBtn: "Cerrar",
      toast: "¡Enlace copiado! 💕",
      footer: "© 2026 Gabi Pimenta • Todos los direitos reservados 💕"
    }
  }
};

/**
 * =========================================================================
 * ⚙️ CONFIGURAÇÃO OFICIAL - GABI PIMENTA (@gabipimenta)
 * Multi-idioma (Auto-detecção para Gringa/PT/ES) + Rastreador ViralFlow
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

  // 3. RASTREADOR DE CLIQUES DO VIRALFLOW
  tracking: {
    // Insira aqui o Webhook do ViralFlow para contabilizar cada clique
    viralFlowWebhookUrl: "", // Ex: "https://seu-endpoint.viralflow.com/webhook/click"
    // Se o ViralFlow te der um link próprio para substituir o destino:
    viralFlowRedirectUrl: "" // Ex: "https://track.viralflow.com/..."
  },

  // 4. TRADUÇÃO AUTOMÁTICA POR IDIOMA (Gringa / Brasil / Hispano)
  translations: {
    // 🇧🇷 Português (Brasil / Portugal)
    pt: {
      bio: "✨ Bem-vindo ao meu canal oficial 💕 | Conteúdos exclusivos, ensaios e novidades no Telegram 👇",
      status: "🟢 Canal VIP liberado",
      badge: "🔥 CANAL OFICIAL VIP",
      title: "Entrar no Meu Telegram",
      subtitle: "Acesse conteúdos exclusivos, ensaios e novidades ✨",
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
      shareTitle: "Compartir Perfil 💌",
      shareDesc: "Envía este enlace a quien quieras:",
      copyBtn: "Copiar",
      closeBtn: "Cerrar",
      toast: "¡Enlace copiado! 💕",
      footer: "© 2026 Gabi Pimenta • Todos los derechos reservados 💕"
    }
  }
};

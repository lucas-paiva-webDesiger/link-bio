/**
 * =========================================================================
 * ⚙️ CONFIGURAÇÃO OFICIAL - GABI PIMENTA (@gabipimenta)
 * Multi-idioma Natural + Teaser Prova Social + Checkout SnakePay
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

  // 3. GRUPO +18 DE TROCAS E AVALIAÇÃO (ZANGI E ZAP)
  zangiZapGroup: {
    enabled: true,
    price: 7.90,
    priceFormatted: "R$ 7,90",
    description: "Grupo de trocas e avaliacao zangi e zap",
    // ⚠️ COLOQUE O LINK DO SEU GRUPO NO WHATSAPP OU ZANGI AQUI:
    groupAccessUrl: "https://chat.whatsapp.com/seu-link-aqui",
    customCheckoutUrl: ""
  },

  // 4. RASTREADOR DE CLIQUES DO VIRALFLOW
  tracking: {
    viralFlowWebhookUrl: "",
    viralFlowRedirectUrl: ""
  },

  // 5. TRADUÇÃO AUTOMÁTICA POR IDIOMA (Gringa +18 / Brasil / Hispano)
  translations: {
    // 🇧🇷 Português (Brasil / Portugal)
    pt: {
      bio: "✨ Bem-vindo ao meu canal oficial 💕 | Conteúdos exclusivos, ensaios e novidades no Telegram 👇",
      status: "🟢 Canal VIP liberado",
      badge: "🔥 CANAL OFICIAL VIP",
      title: "Entrar no Meu Telegram",
      subtitle: "Acesse conteúdos exclusivos, ensaios e novidades ✨",
      // Botão Grupo Zangi e Zap
      groupBadge: "🔞 +18 VIP",
      groupTitle: "Grupo de trocas e avaliação zangi e zap",
      groupSubtitle: "🔥 Fotos e vídeos diários • Trocas ao vivo • R$ 7,90",
      // Modal Preview (Prova do que tem)
      previewBadge: "🔞 GRUPO EXCLUSIVO +18",
      previewTitle: "Grupo de Trocas & Avaliação (Zangi & Zap)",
      previewMembers: "🟢 1.480 membros ativos trocando agora",
      teaser1Tag: "🔒 VÍDEO COMPLETO",
      teaser2Tag: "🔞 ENSAIO +18",
      teaser3Tag: "💬 CHAT & TROCAS",
      benefit1: "🔥 <strong>Trocas diárias ilimitadas</strong> de fotos e vídeos entre os membros",
      benefit2: "😈 <strong>Avaliação de fotos real</strong> no privado do Zangi e WhatsApp",
      benefit3: "🔒 <strong>100% anônimo e discreto</strong> (seu número e identidade protegidos)",
      benefit4: "⚡ <strong>Acesso vitalício imediato</strong> por apenas <strong>R$ 7,90</strong> (sem mensalidade)",
      previewPriceTag: "De R$ 29,90 por apenas",
      previewBtnCta: "👉 LIBERAR MEU ACESSO AGORA • R$ 7,90",
      // Modal Checkout PIX
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

    // 🇺🇸 Inglês (+18 Natural para Gringas)
    en: {
      bio: "✨ Welcome to my official channel 💕 | Exclusive content, photoshoots & updates on Telegram 👇",
      status: "🟢 VIP Channel available",
      badge: "🔥 OFFICIAL VIP CHANNEL",
      title: "Join My Telegram",
      subtitle: "Access exclusive content, photoshoots & updates ✨",
      // Botão Grupo Zangi e Zap
      groupBadge: "🔞 18+ VIP",
      groupTitle: "18+ Media Swap & Rate Group (Zangi & Zap)",
      groupSubtitle: "🔥 Daily photo & video swaps • Ratings • R$ 7.90",
      // Modal Preview (Prova do que tem)
      previewBadge: "🔞 18+ EXCLUSIVE LEAKS",
      previewTitle: "18+ VIP Swap & Rate Group (Zangi & WhatsApp)",
      previewMembers: "🟢 1,480 active members swapping right now",
      teaser1Tag: "🔒 FULL VIDEO",
      teaser2Tag: "🔞 18+ PHOTOSHOOT",
      teaser3Tag: "💬 LIVE SWAPS",
      benefit1: "🔥 <strong>Unlimited daily photo & video swaps</strong> between active members",
      benefit2: "😈 <strong>Private photo rating & reviews</strong> on Zangi and WhatsApp",
      benefit3: "🔒 <strong>100% anonymous & discreet</strong> (your phone number stays private)",
      benefit4: "⚡ <strong>Instant lifetime access</strong> for only <strong>R$ 7.90</strong> (~$1.40 USD)",
      previewPriceTag: "Regular price $9.90, today only",
      previewBtnCta: "👉 UNLOCK MY VIP ACCESS NOW • R$ 7.90",
      // Modal Checkout PIX
      checkoutModalTitle: "VIP Access • Zangi & WhatsApp",
      checkoutPriceLabel: "One-time: R$ 7.90 via PIX",
      checkoutCopyPix: "Copy PIX Code",
      checkoutPixCopied: "PIX Code Copied! ✅",
      checkoutWaiting: "Waiting for payment... ⏳",
      checkoutSuccessTitle: "🎉 Payment Confirmed!",
      checkoutSuccessDesc: "Your VIP access to the Zangi & WhatsApp group has been unlocked!",
      checkoutAccessBtn: "👉 Enter VIP Group Now",
      // Compartilhar
      shareTitle: "Share Profile 💌",
      shareDesc: "Send this link to anyone you want:",
      copyBtn: "Copy",
      closeBtn: "Close",
      toast: "Link copied! 💕",
      footer: "© 2026 Gabi Pimenta • All rights reserved 💕"
    },

    // 🇪🇸 Espanhol (+18 Natural)
    es: {
      bio: "✨ Bienvenido a mi canal oficial 💕 | Contenido exclusivo, sesiones y novedades en Telegram 👇",
      status: "🟢 Canal VIP disponible",
      badge: "🔥 CANAL OFICIAL VIP",
      title: "Entrar a Mi Telegram",
      subtitle: "Accede a contenido exclusivo, sesiones y novedades ✨",
      // Botão Grupo Zangi e Zap
      groupBadge: "🔞 +18 VIP",
      groupTitle: "Grupo de intercambios y evaluación +18 (Zangi y Zap)",
      groupSubtitle: "🔥 Fotos y videos diarios • Sin censura • R$ 7,90",
      // Modal Preview (Prova do que tem)
      previewBadge: "🔞 GRUPO EXCLUSIVO +18",
      previewTitle: "Grupo de Intercambios & Evaluación +18 (Zangi & WhatsApp)",
      previewMembers: "🟢 1.480 miembros activos intercambiando ahora",
      teaser1Tag: "🔒 VIDEO COMPLETO",
      teaser2Tag: "🔞 SESIÓN +18",
      teaser3Tag: "💬 CHAT Y ENLACES",
      benefit1: "🔥 <strong>Intercambios diarios ilimitados</strong> de fotos y videos entre miembros",
      benefit2: "😈 <strong>Evaluación privada de fotos</strong> en Zangi y WhatsApp",
      benefit3: "🔒 <strong>100% discreto y anónimo</strong> (tu número e identidad protegidos)",
      benefit4: "⚡ <strong>Acceso de por vida</strong> por solo <strong>R$ 7,90</strong> (pago único)",
      previewPriceTag: "De R$ 29,90 por solo",
      previewBtnCta: "👉 DESBLOQUEAR MI ACCESO AHORA • R$ 7,90",
      // Modal Checkout PIX
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

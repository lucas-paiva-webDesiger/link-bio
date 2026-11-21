/**
 * =========================================================================
 * JAVASCRIPT - GABI PIMENTA (@gabipimenta)
 * Multi-idioma Automático (Gringa / Brasil / Hispano) + Contador ViralFlow
 * =========================================================================
 */

let currentLanguage = "pt";

document.addEventListener("DOMContentLoaded", () => {
  const cfg = typeof BIO_CONFIG !== "undefined" ? BIO_CONFIG : {};

  // 1. Detecta e aplica idioma (Gringa ou Brasil)
  initLanguage(cfg);

  // 2. Configura cliques e rastreador ViralFlow
  setupTelegramClick(cfg);

  // 3. Configura compartilhamento
  setupShare();
});

/**
 * Idiomas suportados com suas bandeiras e rótulos
 */
const LANG_META = {
  pt: { flag: "🇧🇷", label: "PT" },
  en: { flag: "🇺🇸", label: "EN" },
  es: { flag: "🇪🇸", label: "ES" }
};

/**
 * Detecta o idioma do visitante automaticamente
 */
function detectLanguage() {
  // 1. Verifica se o usuário já escolheu manualmente antes
  const saved = localStorage.getItem("gabi_bio_lang");
  if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
    return saved;
  }

  // 2. Detecta idioma do navegador do celular / TikTok
  const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || "en";
  const lower = navLang.toLowerCase();

  if (lower.startsWith("pt")) {
    return "pt";
  } else if (lower.startsWith("es")) {
    return "es";
  }

  // Qualquer outro idioma (EUA, Europa, Ásia, etc.) = Gringa (Inglês)
  return "en";
}

/**
 * Inicializa e aplica o idioma detectado
 */
function initLanguage(cfg) {
  currentLanguage = detectLanguage();
  applyLanguage(currentLanguage, cfg);

  // Alternador manual ao clicar no botão
  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      // Ciclo: PT -> EN -> ES -> PT
      if (currentLanguage === "pt") currentLanguage = "en";
      else if (currentLanguage === "en") currentLanguage = "es";
      else currentLanguage = "pt";

      localStorage.setItem("gabi_bio_lang", currentLanguage);
      applyLanguage(currentLanguage, cfg);
    });
  }
}

/**
 * Atualiza todos os textos da tela para o idioma selecionado
 */
function applyLanguage(lang, cfg) {
  const t = (cfg.translations && cfg.translations[lang]) || (cfg.translations && cfg.translations.en) || {};

  // Atualiza metadados e botão de idioma
  document.documentElement.lang = lang === "pt" ? "pt-BR" : (lang === "es" ? "es" : "en");
  const meta = LANG_META[lang] || LANG_META.en;
  
  const flagEl = document.getElementById("lang-flag");
  const labelEl = document.getElementById("lang-label");
  if (flagEl) flagEl.textContent = meta.flag;
  if (labelEl) labelEl.textContent = meta.label;

  // Título da Aba
  if (cfg.name) {
    document.title = lang === "en" ? `${cfg.name} | Official Channel` : `${cfg.name} | Canal Oficial`;
  }

  // Avatar e Nome
  const avatarEl = document.getElementById("avatar-img");
  if (avatarEl && cfg.avatar) {
    avatarEl.src = cfg.avatar;
    avatarEl.alt = cfg.name || "Gabi Pimenta";
  }

  const nameEl = document.getElementById("profile-name");
  if (nameEl && cfg.name) nameEl.textContent = cfg.name;

  const handleEl = document.getElementById("profile-handle");
  if (handleEl && cfg.handle) handleEl.textContent = cfg.handle;

  // Textos Traduzidos
  const bioEl = document.getElementById("profile-bio");
  if (bioEl && t.bio) bioEl.textContent = t.bio;

  const liveTextEl = document.getElementById("live-text");
  if (liveTextEl && t.status) liveTextEl.textContent = t.status;

  const tgBadge = document.getElementById("telegram-badge");
  if (tgBadge && t.badge) tgBadge.textContent = t.badge;

  const tgTitle = document.getElementById("telegram-title");
  if (tgTitle && t.title) tgTitle.textContent = t.title;

  const tgSubtitle = document.getElementById("telegram-subtitle");
  if (tgSubtitle && t.subtitle) tgSubtitle.textContent = t.subtitle;

  const footerEl = document.getElementById("bio-footer-text");
  if (footerEl && t.footer) footerEl.textContent = t.footer;

  // Modal de Compartilhar
  const shareTitleEl = document.getElementById("share-modal-title");
  if (shareTitleEl && t.shareTitle) shareTitleEl.textContent = t.shareTitle;

  const shareDescEl = document.getElementById("share-modal-desc");
  if (shareDescEl && t.shareDesc) shareDescEl.textContent = t.shareDesc;

  const copyBtn = document.getElementById("copy-btn");
  if (copyBtn && t.copyBtn) copyBtn.textContent = t.copyBtn;

  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn && t.closeBtn) closeBtn.textContent = t.closeBtn;
}

/**
 * Manipulação do clique no Telegram com CONTADOR VIRALFLOW integrado
 */
function setupTelegramClick(cfg) {
  const tgBtn = document.getElementById("telegram-featured-link");
  if (!tgBtn) return;

  // URL final de destino (seja o link do ViralFlow ou o Phantoms)
  const targetUrl = (cfg.tracking && cfg.tracking.viralFlowRedirectUrl) || 
                    cfg.telegramUrl || 
                    "https://phantoms.group/l/371cd3a5?shk=9d33xc36";
  
  tgBtn.setAttribute("href", targetUrl);

  tgBtn.addEventListener("click", function(e) {
    // 1. RASTREADOR / CONTADOR DE CLIQUES (VIRALFLOW)
    trackViralFlowClick(cfg);

    // 2. Navegação suave no mesmo frame para não quebrar no navegador do TikTok
    window.location.href = targetUrl;
  });
}

/**
 * Envia o evento de clique para o ViralFlow em segundo plano (sem travar o redirecionamento)
 */
function trackViralFlowClick(cfg) {
  const webhookUrl = cfg.tracking && cfg.tracking.viralFlowWebhookUrl;
  
  // Dados detalhados do clique para o ViralFlow
  const clickData = {
    event: "link_click",
    target: "telegram",
    model: cfg.name || "Gabi Pimenta",
    handle: cfg.handle || "@gabipimenta",
    language: currentLanguage,
    referrer: document.referrer || "tiktok_direct",
    source_url: window.location.href,
    timestamp: new Date().toISOString()
  };

  if (webhookUrl) {
    // navigator.sendBeacon garante o envio mesmo enquanto o navegador sai da página
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(clickData)], { type: "application/json" });
      navigator.sendBeacon(webhookUrl, blob);
    } else {
      fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clickData)
      }).catch(() => {});
    }
  }

  // Registra no contador local para consulta rápida
  try {
    const count = parseInt(localStorage.getItem("total_clicks") || "0", 10) + 1;
    localStorage.setItem("total_clicks", count.toString());
  } catch (err) {}
}

/**
 * Sistema de Compartilhamento / Copiar Link (Estilo Beacons)
 */
function setupShare() {
  const shareBtn = document.getElementById("share-btn");
  const modalBackdrop = document.getElementById("share-modal-backdrop");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const copyBtn = document.getElementById("copy-btn");
  const shareInput = document.getElementById("share-url-input");
  const toast = document.getElementById("toast-msg");

  const currentUrl = window.location.href;
  if (shareInput) shareInput.value = currentUrl;

  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        navigator.share({
          title: "Gabi Pimenta",
          text: currentLanguage === "en" ? "Check out Gabi Pimenta's official Telegram channel 💕" : "Confira o canal oficial de Gabi Pimenta no Telegram 💕",
          url: currentUrl
        }).catch(() => {});
      } else {
        if (modalBackdrop) modalBackdrop.classList.add("active");
      }
    });
  }

  if (closeModalBtn && modalBackdrop) {
    closeModalBtn.addEventListener("click", () => {
      modalBackdrop.classList.remove("active");
    });

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove("active");
      }
    });
  }

  if (copyBtn && shareInput) {
    copyBtn.addEventListener("click", () => {
      const successMsg = (BIO_CONFIG.translations && BIO_CONFIG.translations[currentLanguage] && BIO_CONFIG.translations[currentLanguage].toast) || "Link copiado! 💕";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareInput.value).then(() => {
          showToast(successMsg);
          if (modalBackdrop) modalBackdrop.classList.remove("active");
        }).catch(() => fallbackCopy(successMsg));
      } else {
        fallbackCopy(successMsg);
      }
    });
  }

  function fallbackCopy(msg) {
    shareInput.select();
    document.execCommand("copy");
    showToast(msg);
    if (modalBackdrop) modalBackdrop.classList.remove("active");
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }
}

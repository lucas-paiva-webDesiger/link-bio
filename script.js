/**
 * =========================================================================
 * JAVASCRIPT - GABI PIMENTA (@gabipimenta)
 * Multi-idioma Automático + Contador ViralFlow + Checkout SnakePay (PIX R$ 7,90)
 * =========================================================================
 */

let currentLanguage = "pt";
let pixPollingInterval = null;
let currentTransactionId = null;

document.addEventListener("DOMContentLoaded", () => {
  const cfg = typeof BIO_CONFIG !== "undefined" ? BIO_CONFIG : {};

  // 1. Detecta e aplica idioma (Gringa ou Brasil)
  initLanguage(cfg);

  // 2. Configura cliques e rastreador ViralFlow
  setupTelegramClick(cfg);

  // 3. Configura o botão e checkout SnakePay (Zangi & Zap R$ 7,90)
  setupSnakePayCheckout(cfg);

  // 4. Configura compartilhamento
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
  const saved = localStorage.getItem("gabi_bio_lang");
  if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
    return saved;
  }

  const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || "en";
  const lower = navLang.toLowerCase();

  if (lower.startsWith("pt")) {
    return "pt";
  } else if (lower.startsWith("es")) {
    return "es";
  }

  return "en";
}

/**
 * Inicializa e aplica o idioma detectado
 */
function initLanguage(cfg) {
  currentLanguage = detectLanguage();
  applyLanguage(currentLanguage, cfg);

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
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

  document.documentElement.lang = lang === "pt" ? "pt-BR" : (lang === "es" ? "es" : "en");
  const meta = LANG_META[lang] || LANG_META.en;
  
  const flagEl = document.getElementById("lang-flag");
  const labelEl = document.getElementById("lang-label");
  if (flagEl) flagEl.textContent = meta.flag;
  if (labelEl) labelEl.textContent = meta.label;

  if (cfg.name) {
    document.title = lang === "en" ? `${cfg.name} | Official Channel` : `${cfg.name} | Canal Oficial`;
  }

  const avatarEl = document.getElementById("avatar-img");
  if (avatarEl && cfg.avatar) {
    avatarEl.src = cfg.avatar;
    avatarEl.alt = cfg.name || "Gabi Pimenta";
  }

  const nameEl = document.getElementById("profile-name");
  if (nameEl && cfg.name) nameEl.textContent = cfg.name;

  const handleEl = document.getElementById("profile-handle");
  if (handleEl && cfg.handle) handleEl.textContent = cfg.handle;

  // Bio e Status
  const bioEl = document.getElementById("profile-bio");
  if (bioEl && t.bio) bioEl.textContent = t.bio;

  const liveTextEl = document.getElementById("live-text");
  if (liveTextEl && t.status) liveTextEl.textContent = t.status;

  // Botão 1: Telegram
  const tgBadge = document.getElementById("telegram-badge");
  if (tgBadge && t.badge) tgBadge.textContent = t.badge;

  const tgTitle = document.getElementById("telegram-title");
  if (tgTitle && t.title) tgTitle.textContent = t.title;

  const tgSubtitle = document.getElementById("telegram-subtitle");
  if (tgSubtitle && t.subtitle) tgSubtitle.textContent = t.subtitle;

  // Botão 2: Grupo Zangi e Zap
  const groupBadge = document.getElementById("group-badge");
  if (groupBadge && t.groupBadge) groupBadge.textContent = t.groupBadge;

  const groupTitle = document.getElementById("group-title");
  if (groupTitle && t.groupTitle) groupTitle.textContent = t.groupTitle;

  const groupSubtitle = document.getElementById("group-subtitle");
  if (groupSubtitle && t.groupSubtitle) groupSubtitle.textContent = t.groupSubtitle;

  // Modal Checkout Textos
  const checkoutTitle = document.getElementById("checkout-title");
  if (checkoutTitle && t.checkoutModalTitle) checkoutTitle.textContent = t.checkoutModalTitle;

  // Prova Social / Teasers (+18)
  const previewBadge = document.getElementById("preview-badge");
  if (previewBadge && t.previewBadge) previewBadge.textContent = t.previewBadge;

  const previewTitle = document.getElementById("preview-title");
  if (previewTitle && t.previewTitle) previewTitle.textContent = t.previewTitle;

  const previewMembersText = document.getElementById("preview-members-text");
  if (previewMembersText && t.previewMembers) previewMembersText.textContent = t.previewMembers;

  const teaser1Tag = document.getElementById("teaser1-tag");
  if (teaser1Tag && t.teaser1Tag) teaser1Tag.textContent = t.teaser1Tag;

  const teaser2Tag = document.getElementById("teaser2-tag");
  if (teaser2Tag && t.teaser2Tag) teaser2Tag.textContent = t.teaser2Tag;

  const teaser3Tag = document.getElementById("teaser3-tag");
  if (teaser3Tag && t.teaser3Tag) teaser3Tag.textContent = t.teaser3Tag;

  const benefit1 = document.getElementById("benefit-1");
  if (benefit1 && t.benefit1) benefit1.innerHTML = t.benefit1;

  const benefit2 = document.getElementById("benefit-2");
  if (benefit2 && t.benefit2) benefit2.innerHTML = t.benefit2;

  const benefit3 = document.getElementById("benefit-3");
  if (benefit3 && t.benefit3) benefit3.innerHTML = t.benefit3;

  const benefit4 = document.getElementById("benefit-4");
  if (benefit4 && t.benefit4) benefit4.innerHTML = t.benefit4;

  const previewPriceTag = document.getElementById("preview-price-tag");
  if (previewPriceTag && t.previewPriceTag) {
    previewPriceTag.innerHTML = `${t.previewPriceTag} <span class="preview-price-old">R$ 29,90</span>`;
  }

  const previewCtaBtn = document.getElementById("preview-cta-btn");
  if (previewCtaBtn && t.previewBtnCta) previewCtaBtn.textContent = t.previewBtnCta;

  const checkoutPrice = document.getElementById("checkout-price");
  if (checkoutPrice && t.checkoutPriceLabel) checkoutPrice.textContent = t.checkoutPriceLabel;

  const checkoutCopyLabel = document.getElementById("checkout-copy-label");
  if (checkoutCopyLabel && t.checkoutCopyPix) checkoutCopyLabel.textContent = t.checkoutCopyPix;

  const checkoutStatusText = document.getElementById("checkout-status-text");
  if (checkoutStatusText && t.checkoutWaiting) checkoutStatusText.textContent = t.checkoutWaiting;

  const checkoutSuccessTitle = document.getElementById("checkout-success-title");
  if (checkoutSuccessTitle && t.checkoutSuccessTitle) checkoutSuccessTitle.textContent = t.checkoutSuccessTitle;

  const checkoutSuccessDesc = document.getElementById("checkout-success-desc");
  if (checkoutSuccessDesc && t.checkoutSuccessDesc) checkoutSuccessDesc.textContent = t.checkoutSuccessDesc;

  const checkoutAccessLabel = document.getElementById("checkout-access-label");
  if (checkoutAccessLabel && t.checkoutAccessBtn) checkoutAccessLabel.textContent = t.checkoutAccessBtn;

  // Rodapé
  const footerEl = document.getElementById("bio-footer-text");
  if (footerEl && t.footer) footerEl.textContent = t.footer;

  // Modal Compartilhar
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

  const targetUrl = (cfg.tracking && cfg.tracking.viralFlowRedirectUrl) || 
                    cfg.telegramUrl || 
                    "https://phantoms.group/l/371cd3a5?shk=9d33xc36";
  
  tgBtn.setAttribute("href", targetUrl);

  tgBtn.addEventListener("click", function(e) {
    trackViralFlowClick(cfg, "telegram");
    window.location.href = targetUrl;
  });
}

/**
 * =========================================================================
 * CHECKOUT SNAKEPAY - GRUPO ZANGI & ZAP (R$ 7,90 VIA PIX)
 * =========================================================================
 */
function setupSnakePayCheckout(cfg) {
  const groupBtn = document.getElementById("group-featured-link");
  const modalBackdrop = document.getElementById("checkout-modal-backdrop");
  const closeBtn = document.getElementById("checkout-close-btn");
  const copyPixBtn = document.getElementById("checkout-copy-btn");
  const pixCodeInput = document.getElementById("checkout-pix-code");
  const copyLabel = document.getElementById("checkout-copy-label");

  const previewView = document.getElementById("checkout-preview-view");
  const previewCtaBtn = document.getElementById("preview-cta-btn");
  const loadingView = document.getElementById("checkout-loading-view");
  const pixView = document.getElementById("checkout-pix-view");
  const successView = document.getElementById("checkout-success-view");
  const qrImg = document.getElementById("checkout-qr-img");
  const accessLink = document.getElementById("checkout-access-link");

  if (!groupBtn || !modalBackdrop) return;

  // Clique no botão Grupo Zangi & Zap -> Exibe primeiro o Teaser / Prova!
  groupBtn.addEventListener("click", () => {
    trackViralFlowClick(cfg, "group_zangi_zap");

    if (cfg.zangiZapGroup && cfg.zangiZapGroup.customCheckoutUrl) {
      window.location.href = cfg.zangiZapGroup.customCheckoutUrl;
      return;
    }

    modalBackdrop.classList.add("active");
    if (previewView) previewView.style.display = "flex";
    loadingView.style.display = "none";
    pixView.style.display = "none";
    successView.style.display = "none";
  });

  // Clique no botão "LIBERAR MEU ACESSO AGORA • R$ 7,90" -> Gera o PIX
  if (previewCtaBtn) {
    previewCtaBtn.addEventListener("click", () => {
      if (previewView) previewView.style.display = "none";
      loadingView.style.display = "flex";
      gerarPixSnakePay();
    });
  }

  // Fechar Modal
  if (closeBtn) {
    closeBtn.addEventListener("click", fecharModalCheckout);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      fecharModalCheckout();
    }
  });

  function fecharModalCheckout() {
    modalBackdrop.classList.remove("active");
    if (pixPollingInterval) {
      clearInterval(pixPollingInterval);
      pixPollingInterval = null;
    }
  }

  // Copiar Código PIX
  if (copyPixBtn && pixCodeInput) {
    copyPixBtn.addEventListener("click", () => {
      const code = pixCodeInput.value;
      if (!code) return;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => onPixCopied()).catch(() => fallbackCopy(code));
      } else {
        fallbackCopy(code);
      }
    });
  }

  function fallbackCopy(code) {
    pixCodeInput.select();
    document.execCommand("copy");
    onPixCopied();
  }

  function onPixCopied() {
    if (copyLabel) {
      const orig = copyLabel.textContent;
      copyLabel.textContent = "Código PIX Copiado! ✅";
      setTimeout(() => { copyLabel.textContent = orig; }, 2500);
    }
    showToastMsg("Código PIX copiado! Cole no seu banco 💕");
  }

  /**
   * Comunicação com SnakePay para Gerar o PIX
   */
  async function gerarPixSnakePay() {
    try {
      let data = null;

      // 1. Tenta rota serverless da Vercel (/api/create-pix)
      try {
        const res = await fetch("/api/create-pix", {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        });
        if (res.ok) {
          data = await res.json();
        }
      } catch (e) {}

      // 2. Se falhar ou estiver rodando localmente sem serverless, chama direto a SnakePay
      if (!data || !data.success) {
        const apiKey = (cfg.zangiZapGroup && cfg.zangiZapGroup.apiKey) || atob("c2tfbGl2ZV9hNjkyY2M4NjdlZWE0ZjY2ODJhNmM3MTExNDA0ODFmNTVkNTViMDU1");
        const resDirect = await fetch("https://snakepay.com.br/api/pix/create", {
          method: "POST",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            amount: 7.90,
            description: "Grupo de trocas e avaliacao zangi e zap",
            external_id: "order-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7)
          })
        });
        data = await resDirect.json();
      }

      if (data && data.success && data.transaction) {
        exibirPixGerado(data.transaction);
      } else {
        throw new Error(data?.error || "Erro ao gerar PIX");
      }
    } catch (err) {
      loadingView.style.display = "none";
      alert("Não foi possível gerar o PIX no momento. Por favor, tente novamente em instantes.");
      fecharModalCheckout();
    }
  }

  /**
   * Exibe o QR Code e o Copia e Cola
   */
  function exibirPixGerado(tx) {
    currentTransactionId = tx.id;
    loadingView.style.display = "none";
    pixView.style.display = "block";

    // QR Code
    if (qrImg && tx.qr_code_base64) {
      qrImg.src = tx.qr_code_base64;
    }

    // Código Copia e Cola
    if (pixCodeInput && tx.pix_copia_cola) {
      pixCodeInput.value = tx.pix_copia_cola;
    }

    // Inicia verificação periódica de pagamento a cada 3.5 segundos
    iniciarVerificacaoPagamento(tx.id);
  }

  /**
   * Consulta o status do PIX periodicamente até aprovar
   */
  function iniciarVerificacaoPagamento(txId) {
    if (pixPollingInterval) clearInterval(pixPollingInterval);

    pixPollingInterval = setInterval(async () => {
      try {
        let statusData = null;

        // Tenta rota serverless
        try {
          const res = await fetch(`/api/check-pix?id=${encodeURIComponent(txId)}`);
          if (res.ok) statusData = await res.json();
        } catch (e) {}

        // Fallback direto na API SnakePay
        if (!statusData || !statusData.status) {
          const apiKey = (cfg.zangiZapGroup && cfg.zangiZapGroup.apiKey) || atob("c2tfbGl2ZV9hNjkyY2M4NjdlZWE0ZjY2ODJhNmM3MTExNDA0ODFmNTVkNTViMDU1");
          const resDirect = await fetch(`https://snakepay.com.br/api/pix/${encodeURIComponent(txId)}`, {
            method: "GET",
            headers: { "x-api-key": apiKey }
          });
          if (resDirect.ok) statusData = await resDirect.json();
        }

        // Se o pagamento foi aprovado!
        if (statusData && statusData.status === "paid") {
          clearInterval(pixPollingInterval);
          pixPollingInterval = null;
          exibirSucessoPagamento();
        }
      } catch (err) {}
    }, 3500);
  }

  /**
   * Tela de Sucesso / Liberação de Acesso
   */
  function exibirSucessoPagamento() {
    pixView.style.display = "none";
    successView.style.display = "flex";

    const targetGroupUrl = (cfg.zangiZapGroup && cfg.zangiZapGroup.groupAccessUrl) || "https://chat.whatsapp.com/";
    if (accessLink) {
      accessLink.href = targetGroupUrl;
    }

    showToastMsg("🎉 Pagamento de R$ 7,90 Aprovado!");
  }
}

/**
 * Envia o evento de clique para o ViralFlow em segundo plano
 */
function trackViralFlowClick(cfg, targetName = "telegram") {
  const webhookUrl = cfg.tracking && cfg.tracking.viralFlowWebhookUrl;
  
  const clickData = {
    event: "link_click",
    target: targetName,
    model: cfg.name || "Gabi Pimenta",
    handle: cfg.handle || "@gabipimenta",
    language: currentLanguage,
    referrer: document.referrer || "tiktok_direct",
    source_url: window.location.href,
    timestamp: new Date().toISOString()
  };

  if (webhookUrl) {
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
          showToastMsg(successMsg);
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
    showToastMsg(msg);
    if (modalBackdrop) modalBackdrop.classList.remove("active");
  }
}

function showToastMsg(msg) {
  const toast = document.getElementById("toast-msg");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

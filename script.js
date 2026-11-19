/**
 * =========================================================================
 * JAVASCRIPT - GABI PIMENTA (@gabipimenta)
 * Ultra-leve, Otimizado para Mobile & Navegador In-App do TikTok
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof BIO_CONFIG !== "undefined") {
    renderBio(BIO_CONFIG);
  }
  setupShare();
  setupTelegramClick();
});

/**
 * Preenche a página dinamicamente conforme BIO_CONFIG
 */
function renderBio(cfg) {
  if (cfg.name) {
    document.title = `${cfg.name} | Canal Oficial`;
  }

  // 1. Avatar da Modelo
  const avatarEl = document.getElementById("avatar-img");
  if (avatarEl && cfg.avatar) {
    avatarEl.src = cfg.avatar;
    avatarEl.alt = cfg.name || "Gabi Pimenta";
  }

  // 2. Status Online
  const liveBadgeEl = document.getElementById("live-badge");
  const liveTextEl = document.getElementById("live-text");
  if (liveBadgeEl && liveTextEl) {
    if (cfg.status && cfg.status.show) {
      liveBadgeEl.style.display = "inline-flex";
      liveTextEl.textContent = cfg.status.text || "🟢 Canal VIP liberado";
    } else {
      liveBadgeEl.style.display = "none";
    }
  }

  // 3. Nome e Verificado
  const nameEl = document.getElementById("profile-name");
  if (nameEl && cfg.name) nameEl.textContent = cfg.name;

  const verifiedEl = document.getElementById("verified-icon");
  if (verifiedEl) {
    verifiedEl.style.display = cfg.isVerified ? "inline-block" : "none";
  }

  // 4. Handle (@)
  const handleEl = document.getElementById("profile-handle");
  if (handleEl && cfg.handle) handleEl.textContent = cfg.handle;

  // 5. Bio
  const bioEl = document.getElementById("profile-bio");
  if (bioEl && cfg.bio) bioEl.textContent = cfg.bio;

  // 6. Botão de Destaque do Telegram
  const tgLinkEl = document.getElementById("telegram-featured-link");
  if (tgLinkEl && cfg.telegram) {
    tgLinkEl.href = cfg.telegram.url || "https://phantoms.group/l/371cd3a5?shk=9d33xc36";
    
    const tgBadge = document.getElementById("telegram-badge");
    if (tgBadge && cfg.telegram.badge) tgBadge.textContent = cfg.telegram.badge;

    const tgTitle = document.getElementById("telegram-title");
    if (tgTitle && cfg.telegram.title) tgTitle.textContent = cfg.telegram.title;

    const tgSubtitle = document.getElementById("telegram-subtitle");
    if (tgSubtitle && cfg.telegram.subtitle) tgSubtitle.textContent = cfg.telegram.subtitle;
  }

  // 7. Rodapé
  const footerEl = document.getElementById("bio-footer-text");
  if (footerEl && cfg.footerText) {
    footerEl.textContent = cfg.footerText;
  }
}

/**
 * Manipulação do clique no Telegram para máxima compatibilidade com o TikTok
 */
function setupTelegramClick() {
  const tgBtn = document.getElementById("telegram-featured-link");
  if (!tgBtn) return;

  tgBtn.addEventListener("click", function(e) {
    // Garante que o navegador interno do TikTok ou celular não abra abas em branco
    const targetUrl = tgBtn.getAttribute("href") || "https://phantoms.group/l/371cd3a5?shk=9d33xc36";
    
    // Dispara navegação direta no mesmo frame (evita bloqueador de popups do TikTok)
    window.location.href = targetUrl;
  });
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
          title: "Gabi Pimenta | Canal Oficial",
          text: "Confira o canal oficial de Gabi Pimenta no Telegram 💕",
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
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareInput.value).then(() => {
          showToast("Link copiado! 💕");
          if (modalBackdrop) modalBackdrop.classList.remove("active");
        }).catch(() => fallbackCopy());
      } else {
        fallbackCopy();
      }
    });
  }

  function fallbackCopy() {
    shareInput.select();
    document.execCommand("copy");
    showToast("Link copiado! 💕");
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

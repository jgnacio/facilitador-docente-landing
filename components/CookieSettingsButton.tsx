"use client";

export default function CookieSettingsButton() {
  function abrirBanner() {
    localStorage.removeItem("cookie-consent");
    window.dispatchEvent(new Event("show-cookie-banner"));
  }

  return (
    <button
      onClick={abrirBanner}
      className="text-stone-500 hover:text-primary transition-colors text-sm"
    >
      Configurar cookies
    </button>
  );
}

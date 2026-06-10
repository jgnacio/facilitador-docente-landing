"use client";

import { useTranslations } from "next-intl";

export default function CookieSettingsButton() {
  const t = useTranslations("Footer");

  function abrirBanner() {
    localStorage.removeItem("cookie-consent");
    window.dispatchEvent(new Event("show-cookie-banner"));
  }

  return (
    <button
      onClick={abrirBanner}
      className="text-stone-500 hover:text-primary transition-colors text-sm"
    >
      {t("cookieSettings")}
    </button>
  );
}

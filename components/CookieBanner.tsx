"use client";

import { useState, useEffect } from "react";

const GA_ID = "G-04PKCN4MXE";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function activarGA() {
  window.gtag("consent", "update", { analytics_storage: "granted" });
  if (!document.getElementById("ga4-script")) {
    const s = document.createElement("script");
    s.id = "ga4-script";
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s.async = true;
    document.head.appendChild(s);
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };

    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    const choice = localStorage.getItem("cookie-consent");
    if (choice === "accepted") {
      activarGA();
    } else if (!choice) {
      setVisible(true);
    }

    const handler = () => setVisible(true);
    window.addEventListener("show-cookie-banner", handler);
    return () => window.removeEventListener("show-cookie-banner", handler);
  }, []);

  function aceptar() {
    localStorage.setItem("cookie-consent", "accepted");
    activarGA();
    setVisible(false);
  }

  function rechazar() {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-dark-bg border-t border-stone-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-stone-400 text-sm max-w-2xl leading-relaxed">
          Usamos cookies de analítica (Google Analytics) para entender cómo se usa el sitio y
          mejorarlo. Podés aceptarlas o rechazarlas. Más info en nuestra{" "}
          <a href="/privacidad" className="text-white underline hover:text-primary transition-colors">
            Política de Privacidad
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={rechazar}
            className="px-5 py-2 rounded-lg border border-stone-600 text-stone-300 text-sm hover:border-stone-400 hover:text-white transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={aceptar}
            className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

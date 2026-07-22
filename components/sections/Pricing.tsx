"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

function HoneyJar({ fill }: { fill: "empty" | "low" | "mid" | "full" | "brim" }) {
  const fills = {
    empty: (
      <path d="M26 80 Q26 88 35 88 L65 88 Q74 88 74 80 L74 75 L26 75 Z" fill="#F47D31" opacity="0.3" />
    ),
    low: (
      <path d="M25 60 L75 60 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 Z" fill="#F47D31" opacity="0.6" />
    ),
    mid: (
      <path d="M25 40 L75 40 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 Z" fill="#F47D31" opacity="0.8" />
    ),
    full: (
      <path d="M26 30 L74 30 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 Z" fill="#F47D31" />
    ),
    brim: (
      <path d="M30 20 L70 20 L75 30 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 L25 30 Z" fill="#F47D31" />
    ),
  };
  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 100 100">
      <path d="M30 20 L70 20 L75 30 L75 80 Q75 90 65 90 L35 90 Q25 90 25 80 L25 30 Z" fill="white" stroke="#e5e7eb" strokeWidth="4" />
      <path d="M35 15 L65 15 L65 20 L35 20 Z" fill="#e5e7eb" />
      {fills[fill]}
    </svg>
  );
}

function GlowHoneyJar({ size, gradId, delay }: { size: string; gradId: string; delay: string }) {
  const clipId = `clip-${gradId}`;
  return (
    <div className={`${size} honey-glow`} style={{ animationDelay: delay }}>
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 100 100">
        <defs>
          <clipPath id={clipId}>
            <path d="M30 20 L70 20 L75 30 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 L25 30 Z" />
          </clipPath>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8621A" />
            <stop offset="35%" stopColor="#F47D31" />
            <stop offset="55%" stopColor="#F99558" />
            <stop offset="65%" stopColor="#F47D31" />
            <stop offset="100%" stopColor="#D95E18" />
          </linearGradient>
        </defs>
        <path d="M30 20 L70 20 L75 30 L75 80 Q75 90 65 90 L35 90 Q25 90 25 80 L25 30 Z" fill="white" stroke="#e5e7eb" strokeWidth="4" />
        <path d="M35 15 L65 15 L65 20 L35 20 Z" fill="#e5e7eb" />
        <g clipPath={`url(#${clipId})`}>
          <rect
            x="-80" y="-80" width="260" height="260"
            fill={`url(#${gradId})`}
            style={{ animation: `honeySlide 1s ${delay} cubic-bezier(0.4, 0, 0.2, 1) infinite alternate` }}
          />
        </g>
        <path d="M30 20 L70 20 L75 30 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 L25 30 Z" fill="none" />
      </svg>
    </div>
  );
}

function MultiHoneyJar() {
  return (
    <div className="flex items-end justify-center">
      <GlowHoneyJar size="w-14 h-14 -mr-1" gradId="honey-grad-l" delay="0s" />
      <GlowHoneyJar size="w-24 h-24" gradId="honey-grad-c" delay="0s" />
      <GlowHoneyJar size="w-14 h-14 -ml-1" gradId="honey-grad-r" delay="0s" />
    </div>
  );
}

const MAILTO_INSTITUCIONAL =
  "mailto:facilitadordocenteuy@gmail.com?subject=Solicitud%20Plan%20Institucional%20%E2%80%94%20Facilitador%20Docente&body=Hola%2C%0A%0AMe%20comunico%20desde%20%5Bnombre%20de%20la%20instituci%C3%B3n%5D%20para%20solicitar%20informaci%C3%B3n%20sobre%20el%20Plan%20Institucional%20de%20Facilitador%20Docente.%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta.%0A%0ASaludos%2C%0A%5BTu%20nombre%5D";

export default function Pricing() {
  const t = useTranslations("Pricing");

  const freeFeatures = [0, 1, 2, 3].map((i) => ({ text: t(`freeFeatures.${i}`), included: true }));
  const basicFeatures = [0, 1, 2, 3, 4].map((i) => ({ text: t(`basicFeatures.${i}`), included: true }));
  const maxFeatures = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({ text: t(`maxFeatures.${i}`), included: true }));
  const instFeatures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => ({ text: t(`instFeatures.${i}`), included: true }));

  const plans = [
    {
      name: t("free"),
      price: t("free"),
      period: null,
      fill: "low" as const,
      highlighted: false,
      badge: null,
      subtext: t("noCard"),
      features: freeFeatures,
      cta: t("startFree"),
      href: "https://app.facilitadordocente.com",
      ctaClass: "block w-full py-2.5 px-4 text-center border border-primary text-primary rounded-lg font-medium hover:bg-orange-50 transition-colors",
    },
    {
      name: "Básico",
      price: "$400",
      period: t("perMonth"),
      fill: "mid" as const,
      highlighted: false,
      badge: null,
      subtext: t("uyu"),
      features: basicFeatures,
      cta: t("subscribe"),
      href: "https://app.facilitadordocente.com",
      ctaClass: "block w-full py-2.5 px-4 text-center border border-primary text-primary rounded-lg font-medium hover:bg-orange-50 transition-colors",
    },
    {
      name: "MAX",
      animated: true,
      price: "$800",
      period: t("perMonth"),
      fill: "full" as const,
      highlighted: true,
      badge: t("mostPopular"),
      subtext: `${t("uyu")} · ${t("trialNote")}`,
      features: maxFeatures,
      cta: t("startTrial"),
      href: "https://app.facilitadordocente.com",
      ctaClass: "block w-full py-2.5 px-4 text-center bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors button-glow",
    },
    {
      name: "Institucional",
      price: null,
      period: null,
      fill: "full" as const,
      multiJar: true,
      highlighted: false,
      badge: t("forDirectors"),
      subtext: t("priceConsult"),
      features: instFeatures,
      cta: t("consult"),
      href: MAILTO_INSTITUCIONAL,
      ctaClass: "block w-full py-2.5 px-4 text-center border border-primary text-primary rounded-lg font-medium hover:bg-orange-50 transition-colors",
    },
  ];

  return (
    <section className="py-24 px-6 bg-orange-50/30" id="precios">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-stone-900 mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-stone-600">{t("subheading")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-6 flex flex-col relative ${
                plan.highlighted
                  ? "border-2 border-primary md:-translate-y-4 border-glow"
                  : "border border-stone-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wide whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className={`mx-auto mb-4 ${"multiJar" in plan && plan.multiJar ? "w-full" : "h-24 w-24 relative"} ${plan.badge ? "mt-2" : ""}`}>
                {"multiJar" in plan && plan.multiJar
                  ? <MultiHoneyJar />
                  : "animated" in plan && plan.animated
                  ? <GlowHoneyJar size="w-24 h-24" gradId="honey-grad-max" delay="0s" />
                  : <HoneyJar fill={plan.fill} />}
              </div>

              <h3 className="text-xl font-bold text-stone-900 text-center mb-2">{plan.name}</h3>

              <div className="text-center mb-2">
                {plan.price ? (
                  <>
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-stone-500 text-sm">{plan.period}</span>
                  </>
                ) : (
                  <span className="text-xl font-semibold text-stone-700">{t("priceConsult")}</span>
                )}
              </div>

              {plan.subtext && plan.price && (
                <div className="text-center mb-6 text-xs text-primary font-medium">{plan.subtext}</div>
              )}
              {(!plan.subtext || !plan.price) && <div className="mb-6" />}

              <ul className="space-y-3 mb-8 flex-1 text-sm text-stone-600">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target={plan.href.startsWith("mailto") ? undefined : "_blank"}
                rel={plan.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                onClick={() => sendGAEvent({ event: `click_plan_${plan.name.toLowerCase()}` })}
                className={plan.ctaClass}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

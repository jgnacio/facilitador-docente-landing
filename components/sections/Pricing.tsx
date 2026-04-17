function HoneyJar({ fill }: { fill: "empty" | "low" | "mid" | "full" }) {
  const fills = {
    empty: (
      <path
        d="M26 80 Q26 88 35 88 L65 88 Q74 88 74 80 L74 75 L26 75 Z"
        fill="#F47D31"
        opacity="0.3"
      />
    ),
    low: (
      <path
        d="M25 60 L75 60 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 Z"
        fill="#F47D31"
        opacity="0.6"
      />
    ),
    mid: (
      <path
        d="M25 40 L75 40 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 Z"
        fill="#F47D31"
        opacity="0.8"
      />
    ),
    full: (
      <path
        d="M26 30 L74 30 L75 80 Q75 88 65 88 L35 88 Q25 88 25 80 Z"
        fill="#F47D31"
      />
    ),
  };

  return (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 100 100">
      <path
        d="M30 20 L70 20 L75 30 L75 80 Q75 90 65 90 L35 90 Q25 90 25 80 L25 30 Z"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth="4"
      />
      <path d="M35 15 L65 15 L65 20 L35 20 Z" fill="#e5e7eb" />
      {fills[fill]}
    </svg>
  );
}

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "/mes",
    fill: "empty" as const,
    highlighted: false,
    badge: null,
    subtext: null,
    features: [
      { text: "3 planificaciones al mes", included: true },
      { text: "Acceso al Explorador EBI", included: true },
      { text: "Sin adaptaciones especiales", included: false },
      { text: "Sin exportación PDF", included: false },
    ],
    cta: "Comenzar gratis",
    ctaClass:
      "block w-full py-2.5 px-4 text-center border border-stone-300 rounded-lg text-stone-700 font-medium hover:bg-stone-50 transition-colors",
  },
  {
    name: "Early Access",
    price: "$5",
    period: "/mes",
    fill: "low" as const,
    highlighted: true,
    badge: "Oferta de lanzamiento",
    subtext: "Válido por el lanzamiento",
    features: [
      { text: "Planificaciones ilimitadas", included: true },
      { text: "Asistente IA Potente", included: true },
      { text: "Exportación PDF", included: true },
      { text: "", included: null },
    ],
    cta: "Aprovechar oferta",
    ctaClass:
      "block w-full py-2.5 px-4 text-center bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors shadow-md",
  },
  {
    name: "Plus",
    price: "$10",
    period: "/mes",
    fill: "mid" as const,
    highlighted: false,
    badge: null,
    subtext: null,
    features: [
      { text: "Todo lo de Early Access", included: true },
      { text: "Adaptaciones curriculares", included: true },
      { text: "Rúbricas automáticas", included: true },
      { text: "Soporte Multigrado", included: true },
    ],
    cta: "Suscribirse",
    ctaClass:
      "block w-full py-2.5 px-4 text-center border border-primary text-primary rounded-lg font-medium hover:bg-orange-50 transition-colors",
  },
  {
    name: "Max",
    price: "$20",
    period: "/mes",
    fill: "full" as const,
    highlighted: false,
    badge: null,
    subtext: null,
    features: [
      { text: "Todo lo de Plus", included: true },
      { text: "Modelos de IA Avanzados", included: true },
      { text: "Acceso anticipado a funcionalidades nuevas", included: true },
      { text: "Soporte prioritario", included: true },
    ],
    cta: "Suscribirse",
    ctaClass:
      "block w-full py-2.5 px-4 text-center border border-stone-300 rounded-lg text-stone-700 font-medium hover:bg-stone-50 transition-colors",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-orange-50/30" id="precios">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-stone-900 mb-4">
            Invertí en tu tiempo libre
          </h2>
          <p className="text-lg text-stone-600">
            Pagos seguros mensuales o anuales vía Mercado Pago Uruguay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-6 flex flex-col relative ${
                plan.highlighted
                  ? "border-2 border-primary shadow-xl md:-translate-y-4"
                  : "border border-stone-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wide whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className={`h-24 w-24 mx-auto mb-4 relative ${plan.badge ? "mt-2" : ""}`}>
                <HoneyJar fill={plan.fill} />
              </div>

              <h3 className="text-xl font-bold text-stone-900 text-center mb-2">{plan.name}</h3>
              <div className="text-center mb-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-stone-500 text-sm">{plan.period}</span>
              </div>

              {plan.subtext && (
                <div className="text-center mb-6 text-xs text-primary font-medium">
                  {plan.subtext}
                </div>
              )}
              {!plan.subtext && <div className="mb-6" />}

              <ul className="space-y-3 mb-8 flex-1 text-sm text-stone-600">
                {plan.features.map((f, i) => {
                  if (f.included === null) return <li key={i} className="h-5" />;
                  return (
                    <li key={i} className={`flex items-start gap-2 ${!f.included ? "text-stone-400" : ""}`}>
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        {f.included ? "check" : "close"}
                      </span>
                      {f.text}
                    </li>
                  );
                })}
              </ul>

              <a href="#" className={plan.ctaClass}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const individualBenefits = [
  {
    title: "Ahorro de tiempo masivo",
    desc: "Reduce el tiempo de planificación semanal de horas a minutos.",
  },
  {
    title: "Tranquilidad administrativa",
    desc: "Documentación siempre al día y alineada al formato que exige dirección.",
  },
  {
    title: "Inspiración constante",
    desc: "Nuevas ideas para abordar temas difíciles o repetitivos.",
  },
];

const institutionBenefits = [
  {
    title: "Estandarización",
    desc: "Formatos unificados para todo el equipo docente del centro.",
  },
  {
    title: "Banco de recursos compartido",
    desc: "Los docentes pueden compartir y reutilizar planificaciones exitosas.",
  },
  {
    title: "Gestión de licencias",
    desc: "Administración centralizada de cuentas para todo el staff.",
  },
];

export default function ForWhom() {
  return (
    <section className="py-24 px-6 bg-light-bg border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-stone-900 mb-8">
              Para el docente individual
            </h2>
            <ul className="space-y-6 mb-8">
              {individualBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <h4 className="font-bold text-stone-900">{b.title}</h4>
                    <p className="text-stone-600 text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors"
            >
              Ver planes individuales{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <h2 className="font-headline text-3xl md:text-4xl text-stone-900 mb-8">
              Para instituciones
            </h2>
            <ul className="space-y-6 mb-8">
              {institutionBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-stone-700 mt-1">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold text-stone-900">{b.title}</h4>
                    <p className="text-stone-600 text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-stone-700 font-bold hover:text-stone-900 transition-colors"
            >
              Contactar ventas{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

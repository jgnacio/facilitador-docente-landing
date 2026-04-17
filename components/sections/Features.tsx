const features = [
  {
    icon: "school",
    title: "Planificaciones EBI",
    description:
      "Genera secuencias didácticas alineadas con las competencias específicas, generales y criterios de logro del nuevo marco curricular.",
  },
  {
    icon: "diversity_3",
    title: "Soporte Multigrado",
    description:
      "Crea propuestas que integran diferentes niveles en una misma actividad, ideal para escuelas rurales o aulas heterogéneas.",
  },
  {
    icon: "psychology_alt",
    title: "Adaptaciones Curriculares",
    description:
      "Genera variantes de tus actividades adaptadas para estudiantes con necesidades educativas especiales en un clic.",
  },
  {
    icon: "fact_check",
    title: "Rúbricas Automáticas",
    description:
      "Obtené grillas de evaluación detalladas y rúbricas que conectan directamente con los criterios de logro seleccionados.",
  },
  {
    icon: "smart_toy",
    title: "Asistente IA Chat",
    description:
      "Un chatbot entrenado específicamente con documentos de ANEP para resolver tus dudas sobre el programa al instante.",
  },
  {
    icon: "explore",
    title: "Explorador EBI",
    description:
      "Navega fácilmente por el programa oficial. Filtra, busca y encuentra rápidamente competencias y contenidos.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-dark-bg text-stone-300" id="funcionalidades">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-white mb-6">
            Herramientas pensadas para tu día a día
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-stone-400">
            Todo lo que necesitás para gestionar tus clases, integrado en un solo lugar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-dark-surface p-6 rounded-xl border border-border-color hover:border-primary/50 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                {f.icon}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-stone-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

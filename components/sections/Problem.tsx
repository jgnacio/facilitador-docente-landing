const problems = [
  {
    icon: "calendar_today",
    title: "Domingos perdidos",
    description:
      "Horas frente a la pantalla intentando encajar actividades en los formatos exigidos, robándole tiempo a tu familia y descanso.",
  },
  {
    icon: "menu_book",
    title: "La presión del EBI",
    description:
      "Navegar por las nuevas competencias, metas de aprendizaje y criterios de logro de ANEP buscando cómo justificar cada actividad.",
  },
  {
    icon: "assignment_late",
    title: "Requerimientos administrativos",
    description:
      "Adaptaciones curriculares, informes de desempeño, grillas de evaluación... papeleo interminable que te aleja de la pedagogía.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 bg-dark-bg text-stone-300" id="problemas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-white mb-6">
            Conocemos la realidad del aula
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-stone-400">
            Sabemos que el tiempo frente al grupo es solo la mitad del trabajo. La burocracia y la
            planificación se llevan tu tiempo libre.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-dark-surface p-8 rounded-xl border border-border-color"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-stone-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

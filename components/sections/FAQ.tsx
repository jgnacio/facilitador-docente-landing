const faqs = [
  {
    question: "¿El agente conoce el programa oficial de ANEP?",
    answer:
      "Sí. El asistente tiene integrado el currículo oficial de ANEP vigente. Mapea directamente las Competencias Específicas y Criterios de Logro que corresponden a tu grado y espacio antes de sugerir actividades.",
  },
  {
    question: "¿Puedo planificar para mis alumnos específicos?",
    answer:
      "Absolutamente. Considera la realidad del grupo que cargaste, no un 'grupo genérico'. Si tenés alumnos con necesidades específicas de apoyo, el agente genera diferenciaciones pedagógicas reales para ellos.",
  },
  {
    question: "¿Cómo sé que la planificación está alineada al currículo?",
    answer:
      "El agente te indica exactamente de qué parte del programa oficial proviene cada contenido sugerido. Las actividades propuestas se anclan directamente a las metas de aprendizaje y criterios de logro.",
  },
  {
    question: "¿Funciona para 3° a 6° grado EBI?",
    answer:
      "Sí, está diseñado específicamente para maestras del Tramo 3 y Tramo 4 de Educación Básica Integrada (3° a 6° grado de primaria), respetando las características de estas edades.",
  },
  {
    question: "¿Qué son las Competencias Específicas y cómo las usa el agente?",
    answer:
      "Son los aprendizajes que el currículo espera desarrollar en cada espacio. El agente no te pide que las busques o las ingreses de memoria; las identifica automáticamente a partir de tu intención pedagógica y las integra en el diseño de la clase.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-dark-bg" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-5xl text-white mb-12 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-dark-surface border border-border-color rounded-xl group overflow-hidden"
            >
              <summary className="flex justify-between items-center font-bold text-white p-6 cursor-pointer list-none">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-stone-400 text-sm leading-relaxed border-t border-border-color/50 mt-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

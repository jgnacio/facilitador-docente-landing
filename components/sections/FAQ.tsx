const faqs = [
  {
    question: "¿Las planificaciones están actualizadas al EBI vigente?",
    answer:
      "Sí. Nuestra base de datos contiene los documentos oficiales de ANEP correspondientes al Marco Curricular Nacional y los Programas de Educación Básica Integrada actualizados.",
  },
  {
    question: "¿Qué niveles educativos abarca?",
    answer:
      "Actualmente cubrimos desde Educación Inicial hasta 6° grado, abarcando todos los espacios y unidades curriculares del marco EBI vigente. Estamos trabajando en la incorporación de nuevos marcos curriculares para ampliar la cobertura próximamente.",
  },
  {
    question: "¿La IA reemplaza mi rol docente?",
    answer:
      "De ninguna manera. Facilitador Docente es un asistente que automatiza la estructura, redacción y conexión con el programa oficial. Tú aportás la intención pedagógica, el conocimiento de tus alumnos y la evaluación final del material generado.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí, no hay contratos de permanencia. Podés cancelar tu suscripción mensual cuando lo desees desde el panel de configuración de tu cuenta.",
  },
  {
    question: "¿Cómo funciona el pago con Mercado Pago?",
    answer:
      "Utilizamos la pasarela de pagos segura de Mercado Pago Uruguay. Podés pagar con cualquier tarjeta de crédito o débito local, o con saldo en tu cuenta de Mercado Pago. La renovación es automática mes a mes.",
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

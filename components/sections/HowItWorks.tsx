import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Primero, mapea el currículo",
    quote: '"Sabés que el plan tiene fundamento — cada actividad está anclada al programa oficial."',
    description:
      "Identifica las Competencias Específicas y Criterios de Logro que corresponden a tu grado y espacio. No es un chat genérico. Conoce la diferencia entre Tramo 3 y Tramo 4.",
  },
  {
    number: "2",
    title: "Después, conoce tu grupo",
    quote: '"¿Con qué temática querés trabajar la actividad?"',
    description:
      "Considera los alumnos reales que cargaste, no un \"grupo genérico\". El agente te sugiere un contenido y te dice de dónde viene en el currículo ANEP.",
  },
  {
    number: "3",
    title: "Recién ahí, genera la planificación",
    description:
      "Aparece la planificación completa — Inicio, Desarrollo y Cierre — con referencias exactas a qué parte del programa oficial respalda cada actividad.",
    actions: ["Sí, guardar", "No por ahora"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-light-bg text-stone-800" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-stone-900 mb-6">
            Planificación que respeta el programa ANEP.
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-stone-600">
            El proceso importa. No es magia, es una herramienta pensada para maestras que asegura que cada clase tenga intención curricular.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Steps */}
          <div className="flex-1 space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl font-headline">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h3>

                  {step.quote && (
                    <div
                      className="mb-3 px-4 py-2.5 rounded-xl text-sm font-medium text-stone-700 italic"
                      style={{
                        background: "rgba(244,125,49,0.07)",
                        borderLeft: "3px solid rgba(244,125,49,0.5)",
                      }}
                    >
                      {step.quote}
                    </div>
                  )}

                  <p className="text-stone-600 leading-relaxed">{step.description}</p>

                  {step.actions && (
                    <div className="flex gap-3 mt-3">
                      <span className="px-4 py-1.5 rounded-lg text-sm font-medium text-white bg-primary">
                        {step.actions[0]}
                      </span>
                      <span className="px-4 py-1.5 rounded-lg text-sm font-medium text-stone-600 bg-stone-100">
                        {step.actions[1]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Resumen final */}
            <div
              className="ml-18 p-4 rounded-xl text-sm text-stone-600 leading-relaxed"
              style={{ background: "rgba(244,125,49,0.05)", marginLeft: "72px" }}
            >
              <span className="font-semibold text-stone-800">En total: 3 mensajes del docente.</span>{" "}
              El asistente hace el trabajo pesado — currículo, metodología, diferenciaciones por alumno.
              Tú aportás tu conocimiento del contexto real del aula.
            </div>
          </div>

          {/* Mockup real — agenteIA */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 40px rgba(156,68,0,0.08)",
                border: "1px solid rgba(244,125,49,0.1)",
              }}
            >
              <Image
                src="/images/mockups/agenteIA.png"
                alt="Interfaz del agente IA de Facilitador Docente"
                width={1400}
                height={875}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

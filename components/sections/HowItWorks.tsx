const steps = [
  {
    number: "1",
    title: "Decís qué querés planificar",
    quote: '"Quiero planificar algo de lectura para 5to grado"',
    description:
      "El agente hace todo el trabajo pesado solo: busca las Competencias Específicas, los contenidos del programa oficial, los criterios de logro, y revisa tu grupo de alumnos. Todo simultáneo, invisible para el docente.",
  },
  {
    number: "2",
    title: "Confirmás el enfoque curricular",
    quote: '"¿Con qué temática querés trabajar la actividad?"',
    description:
      "El agente te muestra qué CE eligió, qué contenido, qué metodología activa. Solo te hace una pregunta. Puede ser algo de la realidad del grupo, una fecha especial, un proyecto en curso.",
  },
  {
    number: "3",
    title: "Revisás y guardás",
    description:
      "Aparece la planificación completa — Inicio, Desarrollo y Cierre — contextualizada con tu temática y adaptada a tu grupo real.",
    actions: ["Sí, guardar", "No por ahora"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-light-bg text-stone-800" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-stone-900 mb-6">
            3 mensajes. El resto lo hace el agente.
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-stone-600">
            No configurás nada. No elegís competencias. No buscás en el programa.
            Solo contás qué querés enseñar.
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
              El agente hace el 95% del trabajo — currículo, metodología, diferenciaciones por alumno.
              El docente solo aporta su conocimiento del contexto real del aula.
            </div>
          </div>

          {/* Mockup chat */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                boxShadow: "0 20px 40px rgba(156,68,0,0.06)",
                border: "1px solid rgba(244,125,49,0.1)",
              }}
            >
              {/* Header del chat */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ borderBottom: "1px solid rgba(244,125,49,0.08)", background: "#FAF9F7" }}
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[16px]">smart_toy</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">Facilitador Docente</p>
                  <p className="text-xs text-stone-500">Agente IA · EBI ANEP</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
              </div>

              {/* Mensajes */}
              <div className="p-5 space-y-4 text-sm">
                {/* Docente */}
                <div className="flex justify-end">
                  <div
                    className="px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] text-white text-sm"
                    style={{ background: "#F47D31" }}
                  >
                    Quiero planificar algo de lectura para 5to grado
                  </div>
                </div>

                {/* Agente — procesando */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-[14px]">smart_toy</span>
                  </div>
                  <div className="space-y-1.5 max-w-[85%]">
                    {[
                      { icon: "school", text: "Buscando CE de Lenguas 5to…" },
                      { icon: "menu_book", text: "Cargando contenidos del programa…" },
                      { icon: "group", text: "Revisando tu grupo de alumnos…" },
                    ].map((item) => (
                      <div
                        key={item.icon}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-stone-500"
                        style={{ background: "#FAF9F7" }}
                      >
                        <span className="material-symbols-outlined text-primary text-[13px]">{item.icon}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agente — pregunta */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-[14px]">smart_toy</span>
                  </div>
                  <div
                    className="px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] text-stone-700 text-sm"
                    style={{ background: "#FAF9F7" }}
                  >
                    Encontré las CE de Prácticas del Lenguaje. ¿Con qué temática querés trabajar la actividad?
                  </div>
                </div>

                {/* Docente */}
                <div className="flex justify-end">
                  <div
                    className="px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] text-white text-sm"
                    style={{ background: "#F47D31" }}
                  >
                    El Mundial de fútbol
                  </div>
                </div>

                {/* Resultado */}
                <div
                  className="rounded-xl p-4 space-y-2"
                  style={{ background: "rgba(244,125,49,0.06)", border: "1px solid rgba(244,125,49,0.15)" }}
                >
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Planificación generada</p>
                  <p className="text-xs text-stone-600 font-medium">Lectura comprensiva — Mundial de Fútbol · 5to grado</p>
                  <div className="space-y-1">
                    {["Inicio (10 min)", "Desarrollo (25 min)", "Cierre (10 min)"].map((block) => (
                      <div key={block} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-60" />
                        <span className="text-xs text-stone-500">{block}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button className="px-3 py-1 rounded-lg text-xs font-medium text-white bg-primary">
                      Sí, guardar
                    </button>
                    <button className="px-3 py-1 rounded-lg text-xs font-medium text-stone-500 bg-stone-100">
                      No por ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <>
    {/* Sentinel para IntersectionObserver del navbar */}
    <div id="navbar-sentinel" className="absolute top-0 h-10 w-full pointer-events-none" aria-hidden="true" />
    <section
      className="pt-40 pb-24 px-6 relative overflow-hidden bg-light-bg"
      id="inicio"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="font-headline text-5xl md:text-7xl text-stone-900 mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
          Menos horas de trabajo administrativo.
          <br />
          <span className="text-primary italic">Más horas de disfrute educativo.</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          Tu asistente personal para crear planificaciones adaptadas al EBI de ANEP en minutos.
          Recuperá tu tiempo libre sin perder calidad educativa.
        </p>

        <div className="max-w-xl mx-auto mb-10">
          <blockquote className="border-l-4 border-primary/40 pl-6 text-left">
            <p className="font-headline italic text-2xl text-stone-700 leading-tight mb-2">
              "La tecnología por sí misma no es transformativa. Es la escuela, la pedagogía, la que
              es transformativa."
            </p>
            <cite className="text-sm font-medium text-stone-500 uppercase tracking-widest not-italic italic">
              — Tanya Byron
            </cite>
          </blockquote>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://forms.gle/tjnfZ6jgwGpFiBfz6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-primary-hover transition-colors w-full sm:w-auto shadow-[0_10px_20px_rgba(244,125,49,0.2)]"
          >
            Empezar a planificar gratis
          </a>
          <a
            href="#como-funciona"
            className="border border-stone-300 px-8 py-3.5 rounded-lg font-medium text-stone-700 hover:bg-stone-100 transition-colors w-full sm:w-auto"
          >
            Ver cómo funciona
          </a>
        </div>

        <div className="bg-stone-100 text-stone-600 py-3 px-6 rounded-full inline-block text-sm mb-16 border border-stone-200">
          <span className="font-bold text-primary">Dato:</span> Más del 60% de los docentes dedica
          más de 5hs semanales a planificar.
        </div>

        <div
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 40px rgba(156,68,0,0.08)" }}
        >
          <Image
            src="/images/mockups/principal.png"
            alt="Dashboard de Facilitador Docente — Tu espacio de planificación docente"
            width={1400}
            height={875}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
    </section>
    </>
  );
}

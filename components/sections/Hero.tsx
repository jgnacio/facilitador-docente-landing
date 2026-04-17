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
            href="#"
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

        <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(156,68,0,0.06)] border border-stone-200/50 bg-gradient-to-br from-orange-50 to-orange-100/50">
          <div className="bg-stone-50 py-3 px-4 flex items-center gap-2 border-b border-stone-200">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-orange-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="p-8">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyM4oRFbHh3mAhRnTgpM1nMjEvFiYdV5Uk18Fn7wHj07QBsLqhMjktFD7Ski5FjCMEhGKT1SFAuj9xwie43sfE1GyzuVx_M58LDnjoq8OHEKagLx5BBUCKn0l-3rEAeHvD37uOQNkFje5PEVCxPCOQArSVeKzPqpwZmyINNwAC8ljJVjMwN3cfrMcbpQ_XCaadLVdO-VLLPh2yBu1ibCQjypX6MjtQvVtcTFGVg0MvzI1JO9mes3D7wWiAGnSFhoStAZPh15x-wg4"
              alt="Dashboard de Facilitador Docente"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-lg shadow-sm border border-stone-200/50"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

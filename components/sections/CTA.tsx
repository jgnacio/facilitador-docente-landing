export default function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline text-4xl md:text-6xl text-white mb-6">
          Recuperá tus fines de semana.
        </h2>
        <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
          La docencia es tu vocación. La burocracia no debería serlo. Uníte a cientos de docentes en
          Uruguay que ya planifican más rápido y mejor.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#"
            className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-[0_10px_25px_rgba(244,125,49,0.3)] w-full sm:w-auto"
          >
            Acceder a Facilitador Docente
          </a>
          <p className="text-sm text-stone-400">Empezá gratis. Sin tarjeta de crédito.</p>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Facilitador Docente",
  description: "Contactá al equipo de Facilitador Docente para consultas, soporte o información sobre el Plan Institucional.",
  alternates: { canonical: "https://facilitadordocente.com/contacto" },
};

export default function Contacto() {
  return (
    <main className="min-h-screen bg-light-bg px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-headline text-4xl text-stone-900 mb-4">Contacto</h1>
        <p className="text-stone-600 text-lg mb-12 leading-relaxed">
          ¿Tenés preguntas sobre el servicio, necesitás soporte o querés información
          sobre el Plan Institucional? Escribinos directamente.
        </p>

        <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm space-y-6 text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Soporte general</p>
            <a
              href="mailto:facilitadordocenteuy@gmail.com"
              className="text-primary font-medium hover:underline text-lg"
            >
              facilitadordocenteuy@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Plan Institucional</p>
            <a
              href="mailto:facilitadordocenteuy@gmail.com?subject=Solicitud%20Plan%20Institucional%20%E2%80%94%20Facilitador%20Docente&body=Hola%2C%0A%0AMe%20comunico%20desde%20%5Bnombre%20de%20la%20instituci%C3%B3n%5D%20para%20solicitar%20informaci%C3%B3n%20sobre%20el%20Plan%20Institucional%20de%20Facilitador%20Docente.%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta.%0A%0ASaludos%2C%0A%5BTu%20nombre%5D"
              className="text-primary font-medium hover:underline text-lg"
            >
              Consultar sobre Plan Institucional →
            </a>
          </div>
        </div>

        <p className="text-stone-400 text-sm mt-8">
          Respondemos en menos de 48 horas hábiles.
        </p>
      </div>
    </main>
  );
}

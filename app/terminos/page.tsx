import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio | Facilitador Docente",
  description: "Condiciones de uso del servicio Facilitador Docente.",
  alternates: { canonical: "https://facilitadordocente.com/terminos" },
};

export default function Terminos() {
  return (
    <main className="min-h-screen bg-light-bg px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl text-stone-900 mb-2">Términos de Servicio</h1>
        <p className="text-stone-500 text-sm mb-12">Última actualización: junio 2026</p>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">1. Descripción del servicio</h2>
          <p className="text-stone-600 leading-relaxed">
            Facilitador Docente es una plataforma de asistencia pedagógica con inteligencia
            artificial para docentes de Educación Básica Integrada (EBI) en Uruguay, desarrollada
            por Bit-A. El servicio permite generar planificaciones alineadas al currículo oficial
            de ANEP, crear adecuaciones curriculares, gestionar grupos de alumnos, elaborar
            informes pedagógicos y almacenar documentación de alumnos (incluidos informes de
            especialistas). El asistente actúa como herramienta de apoyo y no sustituye el
            criterio profesional del docente.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">2. Aceptación de los términos</h2>
          <p className="text-stone-600 leading-relaxed">
            Al crear una cuenta o usar el servicio, aceptás estos Términos de Servicio y nuestra{" "}
            <a href="/privacidad" className="text-primary underline">Política de Privacidad</a>.
            Si usás el servicio en nombre de una institución educativa, declarás tener autorización
            para vincular a dicha institución. El servicio está dirigido a docentes mayores de
            edad; no está destinado a ser usado directamente por menores.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">3. Cuentas y acceso</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Para acceder al servicio debés crear una cuenta con datos verídicos. Sos responsable
            de mantener la confidencialidad de tus credenciales y de todas las acciones realizadas
            bajo tu cuenta. Notificanos inmediatamente ante cualquier uso no autorizado a{" "}
            <a href="mailto:facilitadordocenteuy@gmail.com" className="text-primary underline">
              facilitadordocenteuy@gmail.com
            </a>.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estos términos,
            con notificación previa salvo en casos de violaciones graves o riesgo de seguridad.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">4. Datos de alumnos y responsabilidad del docente</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            El servicio permite cargar y gestionar datos de alumnos, incluyendo nombre y apellido,
            fecha de nacimiento, grado, informes de especialistas, diagnósticos y necesidades
            educativas especiales (NEE), con el fin de personalizar planificaciones, adecuaciones
            e informes pedagógicos.
          </p>
          <p className="text-stone-600 leading-relaxed mb-3">
            <strong>El docente es el responsable del tratamiento</strong> de estos datos frente a
            los alumnos, sus familias y la normativa vigente. Al cargar datos de alumnos, el
            docente declara que:
          </p>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2 mb-3">
            <li>Cuenta con la autorización de los padres, madres o tutores legales correspondiente.</li>
            <li>La carga de datos cumple con las políticas institucionales de su centro educativo.</li>
            <li>Solo cargará datos necesarios para el uso pedagógico del servicio.</li>
          </ul>
          <p className="text-stone-600 leading-relaxed">
            Facilitador Docente actúa como <strong>encargado del tratamiento</strong> de estos
            datos, procesándolos únicamente según las instrucciones del docente y para los fines
            descritos en la{" "}
            <a href="/privacidad" className="text-primary underline">Política de Privacidad</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">5. Uso aceptable</h2>
          <p className="text-stone-600 leading-relaxed mb-3">Al usar Facilitador Docente te comprometés a:</p>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
            <li>Usar el servicio únicamente con fines pedagógicos legítimos.</li>
            <li>
              Cargar datos de alumnos solo con las autorizaciones correspondientes y en cumplimiento
              de la normativa de protección de datos aplicable.
            </li>
            <li>No intentar acceder a datos de otros docentes o instituciones.</li>
            <li>No intentar revertir, copiar, redistribuir o explotar comercialmente el sistema de IA.</li>
            <li>No usar el servicio para generar contenido engañoso, fraudulento o que viole derechos de terceros.</li>
            <li>No realizar ataques, pruebas de intrusión o acciones que afecten la seguridad o disponibilidad del servicio.</li>
            <li>No usar el servicio para fines distintos a la planificación y gestión pedagógica.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">6. Suscripciones y pagos</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Facilitador Docente ofrece planes individuales e institucionales con facturación
            mensual o anual, procesados vía Mercado Pago Uruguay.
          </p>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
            <li>
              <strong>Cancelación:</strong> podés cancelar tu suscripción en cualquier momento
              desde tu panel. El acceso se mantiene hasta el fin del período pagado.
            </li>
            <li>
              <strong>Reembolsos:</strong> no realizamos reembolsos por períodos parciales, salvo
              por falla imputable al servicio debidamente documentada.
            </li>
            <li>
              <strong>Cambios de precio:</strong> notificaremos con al menos 30 días de
              anticipación cualquier cambio en los precios de suscripción.
            </li>
            <li>
              <strong>Plan Institucional:</strong> incluye licencias asignables a docentes del
              centro educativo. La institución es responsable de la gestión y asignación de
              licencias dentro de su cuenta.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">7. Contenido generado por IA</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            El asistente utiliza modelos de inteligencia artificial (Google Gemini) para generar
            planificaciones, adecuaciones e informes basados en el currículo oficial de ANEP y
            los datos del grupo. El contenido generado:
          </p>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
            <li>
              Son sugerencias pedagógicas, no prescripciones. El docente es el responsable final
              de revisar, adaptar y aprobar cualquier planificación antes de implementarla.
            </li>
            <li>
              Puede contener errores o no ser apropiado para todos los contextos de aula.
              Facilitador Docente no garantiza la exactitud o idoneidad del contenido generado.
            </li>
            <li>
              El sistema puede realizar búsquedas en internet para enriquecer planificaciones
              con recursos externos; el docente es responsable de evaluar la pertinencia de
              esos recursos.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">8. Archivos y almacenamiento</h2>
          <p className="text-stone-600 leading-relaxed">
            El servicio permite adjuntar y almacenar documentos (como informes de especialistas
            en formato PDF) vinculados a alumnos. Estos archivos se almacenan en servicios de
            almacenamiento en la nube seguros. El docente es responsable de contar con las
            autorizaciones necesarias para cargar y almacenar dichos documentos. No cargues
            documentos sin relación pedagógica ni información que no sea necesaria para el uso
            del servicio.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">9. Propiedad intelectual</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            El software, diseño, modelos y currículo estructurado de Facilitador Docente son
            propiedad de Bit-A y sus creadores. El currículo de ANEP utilizado como base es
            propiedad de ANEP y se usa como referencia pedagógica.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Las planificaciones y materiales generados a partir de tu uso son tuyas para uso
            educativo personal y profesional. No podés comercializarlos ni distribuirlos de forma
            masiva atribuyéndolos a Facilitador Docente sin autorización expresa.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">10. Disponibilidad del servicio</h2>
          <p className="text-stone-600 leading-relaxed">
            Hacemos nuestro mejor esfuerzo para mantener el servicio disponible de forma continua.
            Sin embargo, podemos realizar tareas de mantenimiento, actualizaciones o enfrentar
            interrupciones fuera de nuestro control. Notificaremos mantenimientos programados con
            anticipación razonable. No garantizamos disponibilidad del 100%.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">11. Limitación de responsabilidad</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Facilitador Docente no se responsabiliza por:
          </p>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
            <li>Decisiones pedagógicas tomadas en base al contenido generado por el asistente.</li>
            <li>Pérdida de datos causada por el usuario (eliminación accidental, credenciales comprometidas).</li>
            <li>Interrupciones del servicio causadas por terceros (proveedores de IA, plataforma cloud, fuerza mayor).</li>
            <li>Uso indebido de datos de alumnos por parte del docente.</li>
          </ul>
          <p className="text-stone-600 leading-relaxed mt-3">
            En ningún caso nuestra responsabilidad total superará el monto pagado por el usuario
            en los últimos 3 meses de suscripción.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">12. Modificaciones del servicio y los términos</h2>
          <p className="text-stone-600 leading-relaxed">
            Podemos actualizar estos términos o modificar el servicio con 15 días de preaviso por
            correo electrónico para cambios en términos, y con notificación razonable para cambios
            en funcionalidades. El uso continuado del servicio tras la notificación implica
            aceptación de los cambios.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">13. Ley aplicable</h2>
          <p className="text-stone-600 leading-relaxed">
            Estos términos se rigen por la legislación de la República Oriental del Uruguay.
            Cualquier controversia se someterá a los tribunales competentes de Montevideo,
            Uruguay, salvo acuerdo expreso de las partes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">14. Contacto</h2>
          <p className="text-stone-600 leading-relaxed">
            Consultas sobre estos términos:{" "}
            <a href="mailto:facilitadordocenteuy@gmail.com" className="text-primary underline">
              facilitadordocenteuy@gmail.com
            </a>
          </p>
        </section>

        <p className="text-stone-500 text-sm mt-12 pt-8 border-t border-stone-200">
          Responsable del servicio: Bit-A ·{" "}
          <a href="mailto:facilitadordocenteuy@gmail.com" className="text-primary underline">
            facilitadordocenteuy@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}

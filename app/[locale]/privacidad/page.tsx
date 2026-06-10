import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Facilitador Docente",
  description: "Cómo recopilamos, usamos y protegemos tus datos en Facilitador Docente.",
  alternates: {
    canonical: "https://facilitadordocente.com/privacidad",
    languages: {
      es: "https://facilitadordocente.com/privacidad",
      en: "https://facilitadordocente.com/en/privacidad",
    },
  },
};

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-light-bg px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl text-stone-900 mb-2">Política de Privacidad</h1>
        <p className="text-stone-500 text-sm mb-12">Última actualización: junio 2026</p>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">1. Quiénes somos</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Facilitador Docente es una plataforma de asistencia pedagógica con inteligencia
            artificial para docentes de Educación Básica Integrada (EBI) de Uruguay, desarrollada
            y operada por <strong>Bit-A</strong> desde Uruguay.
          </p>
          <p className="text-stone-600 leading-relaxed">
            <strong>Responsable del tratamiento:</strong> Bit-A<br />
            <strong>Contacto:</strong>{" "}
            <a href="mailto:facilitadordocenteuy@gmail.com" className="text-primary underline">
              facilitadordocenteuy@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">2. Marco legal</h2>
          <p className="text-stone-600 leading-relaxed">
            Tratamos tus datos personales de acuerdo con la{" "}
            <strong>Ley N.º 18.331 de Protección de Datos Personales de Uruguay</strong> y su
            decreto reglamentario, así como con los principios de protección de datos
            internacionalmente reconocidos. Uruguay cuenta con reconocimiento de nivel adecuado
            de protección de datos por parte de la Unión Europea.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">3. Datos que recopilamos</h2>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-3">
            <li>
              <strong>Datos de cuenta del docente:</strong> nombre, correo electrónico y
              contraseña (cifrada) al registrarte, gestionados a través de Clerk.
            </li>
            <li>
              <strong>Datos de alumnos:</strong> nombre y apellido, fecha de nacimiento, grado,
              diagnósticos, informes de especialistas (en formato PDF), necesidades educativas
              especiales (NEE) y otro material pedagógico que el docente cargue para personalizar
              planificaciones, adecuaciones e informes (ver sección 4).
            </li>
            <li>
              <strong>Archivos adjuntos:</strong> documentos PDF (como informes de especialistas)
              cargados por el docente y vinculados a alumnos, almacenados en Google Cloud Storage.
            </li>
            <li>
              <strong>Datos de uso:</strong> interacciones con el asistente, planificaciones
              generadas, consultas al asistente y registros técnicos de acceso.
            </li>
            <li>
              <strong>Datos de navegación:</strong> recopilados mediante cookies y herramientas
              de analítica, solo con tu consentimiento (ver sección 8).
            </li>
            <li>
              <strong>Datos de pago:</strong> gestionados exclusivamente por Mercado Pago.
              No almacenamos datos de tarjetas ni cuentas bancarias.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">4. Datos de alumnos (incluidos menores de edad)</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Para prestar el servicio, Facilitador Docente almacena datos de los alumnos que el
            docente carga en la plataforma: nombre y apellido, fecha de nacimiento, grado,
            diagnósticos, informes de especialistas (PDF), necesidades educativas especiales (NEE)
            y recomendaciones de apoyo. Dado que muchos alumnos son menores de edad, tratamos
            esta información con especial cuidado.
          </p>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-3">
            <li>
              <strong>Finalidad:</strong> estos datos se usan exclusivamente para generar
              planificaciones, adecuaciones e informes pedagógicos personalizados para el grupo
              del docente. No se usan para ningún otro fin ni para publicidad.
            </li>
            <li>
              <strong>Responsabilidad del docente:</strong> el docente que carga estos datos es
              el <strong>responsable del tratamiento</strong> frente a las familias y a la
              normativa vigente. Al cargar datos de alumnos, el docente declara contar con las
              autorizaciones de padres, madres o tutores legales que correspondan. Facilitador
              Docente actúa como <strong>encargado del tratamiento</strong>, procesando estos
              datos únicamente por cuenta e instrucción del docente.
            </li>
            <li>
              <strong>Datos sensibles:</strong> la información pedagógica puede incluir datos
              sensibles (diagnósticos, NEE, informes clínicos). Aplicamos medidas de seguridad
              reforzadas y no los compartimos con terceros, salvo los sub-procesadores
              estrictamente necesarios (ver sección 7).
            </li>
            <li>
              <strong>Procesamiento por IA:</strong> los datos del alumno se envían de forma
              segura a <strong>Google Gemini</strong> exclusivamente para generar el contenido
              pedagógico solicitado. Google procesa estos datos bajo sus políticas de privacidad
              y compromisos de seguridad como procesador de datos.
            </li>
            <li>
              <strong>Sin uso para entrenamiento:</strong> los datos de alumnos no se utilizan
              para mejorar ni entrenar nuestros sistemas; se procesan únicamente para generar
              el contenido pedagógico solicitado. Tampoco autorizamos a nuestros proveedores a
              usarlos para entrenar sus modelos (ver sección 7).
            </li>
            <li>
              <strong>Acceso y eliminación:</strong> el docente puede acceder, modificar o
              eliminar los datos de sus alumnos en cualquier momento desde la plataforma o
              contactándonos en{" "}
              <a href="mailto:facilitadordocenteuy@gmail.com" className="text-primary underline">
                facilitadordocenteuy@gmail.com
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">5. Base legal del tratamiento</h2>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
            <li>
              <strong>Ejecución del contrato:</strong> para prestarte el servicio que contratás
              (crear tu cuenta, generar planificaciones, gestionar tu suscripción).
            </li>
            <li>
              <strong>Consentimiento:</strong> para el tratamiento de los datos de alumnos
              (gestionado por el docente frente a las familias), para cookies de analítica y para
              comunicaciones que lo requieran. Podés retirar tu consentimiento en cualquier momento.
            </li>
            <li>
              <strong>Interés legítimo:</strong> para mejorar el servicio y garantizar su seguridad.
            </li>
            <li>
              <strong>Obligación legal:</strong> cuando la normativa nos exija conservar o
              aportar información.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">6. Para qué usamos los datos</h2>
          <ul className="list-disc pl-6 text-stone-600 leading-relaxed space-y-2">
            <li>Generar planificaciones, adecuaciones curriculares e informes pedagógicos.</li>
            <li>
              Personalizar las sugerencias del asistente según el grupo y los alumnos del docente.
            </li>
            <li>
              Realizar búsquedas en internet para enriquecer planificaciones con recursos
              externos, cuando el docente lo solicita.
            </li>
            <li>Gestionar tu cuenta, suscripción y comunicaciones relacionadas.</li>
            <li>Garantizar la seguridad y el correcto funcionamiento de la plataforma.</li>
            <li>Mejorar el servicio a partir de datos de uso agregados y anonimizados.</li>
          </ul>
          <p className="text-stone-600 leading-relaxed mt-3">
            No vendemos tus datos a terceros ni los usamos para publicidad de terceros.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">7. Sub-procesadores y terceros</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Para prestar el servicio utilizamos los siguientes proveedores, cada uno bajo sus
            propias políticas de privacidad y compromisos de seguridad:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-stone-600 border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2 pr-4 font-semibold text-stone-700">Proveedor</th>
                  <th className="text-left py-2 pr-4 font-semibold text-stone-700">Función</th>
                  <th className="text-left py-2 font-semibold text-stone-700">Datos transferidos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="py-2 pr-4 font-medium">Google Gemini / Vertex AI</td>
                  <td className="py-2 pr-4">Procesamiento de IA</td>
                  <td className="py-2">Datos del docente, grupo y alumnos necesarios para generar planificaciones</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Google Cloud Storage</td>
                  <td className="py-2 pr-4">Almacenamiento de archivos</td>
                  <td className="py-2">PDFs de informes de especialistas y documentos adjuntos</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Google Analytics 4</td>
                  <td className="py-2 pr-4">Analítica web (con consentimiento)</td>
                  <td className="py-2">Datos de navegación seudonimizados</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Clerk</td>
                  <td className="py-2 pr-4">Autenticación y gestión de cuentas</td>
                  <td className="py-2">Nombre, email y credenciales de acceso del docente</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Mercado Pago</td>
                  <td className="py-2 pr-4">Procesamiento de pagos</td>
                  <td className="py-2">Datos necesarios para gestionar la suscripción (sin datos de tarjeta)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-600 leading-relaxed mt-4">
            Todos los proveedores operan como encargados del tratamiento o tienen compromisos
            contractuales equivalentes. No autorizamos a ningún proveedor a usar tus datos para
            sus propios fines de entrenamiento de modelos, publicidad u otros fines no relacionados
            con la prestación del servicio.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">8. Cookies y analítica</h2>
          <p className="text-stone-600 leading-relaxed">
            Usamos <strong>Google Analytics 4 (GA4)</strong> para entender cómo se usa el sitio
            y mejorarlo. GA4 recopila datos de navegación seudonimizados (páginas visitadas,
            tiempo de permanencia, tipo de dispositivo). <strong>GA4 solo se activa si aceptás
            las cookies de analítica</strong> mediante el banner de consentimiento del sitio.
            Podés cambiar tu elección en cualquier momento usando el enlace
            "Configurar cookies" en el pie de página. Si rechazás las cookies, no recopilamos
            ningún dato de navegación.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">9. Transferencias internacionales de datos</h2>
          <p className="text-stone-600 leading-relaxed">
            Algunos proveedores (Google Gemini / Vertex AI, Google Cloud Storage, Google Analytics,
            Clerk y Mercado Pago) procesan datos fuera de Uruguay, principalmente en Estados
            Unidos y/o la Unión Europea. Estas transferencias se realizan amparadas en las
            garantías que ofrecen dichos proveedores (cláusulas contractuales tipo, marcos de
            adecuación reconocidos y certificaciones de seguridad), procurando un nivel de
            protección equivalente al exigido por la normativa uruguaya.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">10. Tus derechos</h2>
          <p className="text-stone-600 leading-relaxed mb-3">
            Podés ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación
            (eliminación) y oposición, así como solicitar la portabilidad de tus datos, la
            limitación de su tratamiento y retirar tu consentimiento. Para ejercerlos, escribinos a{" "}
            <a href="mailto:facilitadordocenteuy@gmail.com" className="text-primary underline">
              facilitadordocenteuy@gmail.com
            </a>
            . Respondemos en un plazo máximo de 15 días hábiles.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Si considerás que el tratamiento de tus datos no se ajusta a la normativa, tenés
            derecho a presentar un reclamo ante la{" "}
            <strong>Unidad Reguladora y de Control de Datos Personales (URCDP)</strong> de Uruguay.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">11. Seguridad de los datos</h2>
          <p className="text-stone-600 leading-relaxed">
            Aplicamos medidas técnicas y organizativas para proteger tus datos: cifrado de
            contraseñas, autenticación segura vía Clerk, comunicaciones cifradas (HTTPS), control
            de acceso a la información y almacenamiento seguro en la nube. Prestamos especial
            atención a la protección de los datos de alumnos y de los documentos pedagógicos
            sensibles. Ningún sistema es completamente infalible, pero trabajamos para resguardar
            tu información frente a accesos no autorizados, pérdida o alteración.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">12. Retención de datos</h2>
          <p className="text-stone-600 leading-relaxed">
            Conservamos tus datos mientras mantengas una cuenta activa. Al cancelar tu cuenta,
            eliminamos tus datos personales y los de tus alumnos en un plazo de 30 días, excepto
            cuando la ley nos obligue a conservarlos por más tiempo. Los datos de pago
            históricos pueden conservarse por el período que exija la normativa fiscal aplicable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-headline text-2xl text-stone-900 mb-3">13. Cambios a esta política</h2>
          <p className="text-stone-600 leading-relaxed">
            Notificaremos cambios relevantes por correo electrónico con al menos 15 días de
            anticipación. El uso continuado del servicio tras la notificación implica aceptación
            de la política actualizada.
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

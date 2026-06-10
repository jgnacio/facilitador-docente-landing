import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Contacto");
  return {
    title: t("title"),
    description: t("description"),
  };
}

const MAILTO_GENERAL = "mailto:facilitadordocenteuy@gmail.com";
const MAILTO_INSTITUCIONAL =
  "mailto:facilitadordocenteuy@gmail.com?subject=Solicitud%20Plan%20Institucional%20%E2%80%94%20Facilitador%20Docente&body=Hola%2C%0A%0AMe%20comunico%20desde%20%5Bnombre%20de%20la%20instituci%C3%B3n%5D%20para%20solicitar%20informaci%C3%B3n%20sobre%20el%20Plan%20Institucional%20de%20Facilitador%20Docente.%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta.%0A%0ASaludos%2C%0A%5BTu%20nombre%5D";

export default async function Contacto() {
  const t = await getTranslations("Contacto");

  return (
    <main className="min-h-screen bg-light-bg px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-headline text-4xl text-stone-900 mb-4">{t("heading")}</h1>
        <p className="text-stone-600 text-lg mb-12 leading-relaxed">{t("subheading")}</p>

        <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm space-y-6 text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">
              {t("generalLabel")}
            </p>
            <a href={MAILTO_GENERAL} className="text-primary font-medium hover:underline text-lg">
              facilitadordocenteuy@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">
              {t("institutionalLabel")}
            </p>
            <a href={MAILTO_INSTITUCIONAL} className="text-primary font-medium hover:underline text-lg">
              {t("institutionalLink")}
            </a>
          </div>
        </div>

        <p className="text-stone-400 text-sm mt-8">{t("footnote")}</p>
      </div>
    </main>
  );
}

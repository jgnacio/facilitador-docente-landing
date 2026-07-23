import { getTranslations } from "next-intl/server";
import { CheckCircle2, ArrowRight } from "lucide-react";

const MAILTO_INSTITUCIONAL =
  "mailto:facilitadordocenteuy@gmail.com?subject=Solicitud%20Plan%20Institucional%20%E2%80%94%20Facilitador%20Docente&body=Hola%2C%0A%0AMe%20comunico%20desde%20%5Bnombre%20de%20la%20instituci%C3%B3n%5D%20para%20solicitar%20informaci%C3%B3n%20sobre%20el%20Plan%20Institucional%20de%20Facilitador%20Docente.%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta.%0A%0ASaludos%2C%0A%5BTu%20nombre%5D";

export default async function ForWhom() {
  const t = await getTranslations("ForWhom");

  const individualBenefits = [0, 1, 2].map((i) => ({
    title: t(`individual.${i}.title`),
    desc: t(`individual.${i}.desc`),
  }));

  const institutionBenefits = [0, 1, 2].map((i) => ({
    title: t(`institution.${i}.title`),
    desc: t(`institution.${i}.desc`),
  }));

  return (
    <section className="py-24 px-6 bg-light-bg border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-stone-900 mb-8">
              {t("individualHeading")}
            </h2>
            <ul className="space-y-6 mb-8">
              {individualBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-stone-900">{b.title}</h4>
                    <p className="text-stone-600 text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors"
            >
              {t("individualCta")}{" "}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <h2 className="font-headline text-3xl md:text-4xl text-stone-900 mb-8">
              {t("institutionHeading")}
            </h2>
            <ul className="space-y-6 mb-8">
              {institutionBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <CheckCircle2 className="text-stone-700 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-stone-900">{b.title}</h4>
                    <p className="text-stone-600 text-sm">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={MAILTO_INSTITUCIONAL}
              className="inline-flex items-center gap-2 text-stone-700 font-bold hover:text-stone-900 transition-colors"
            >
              {t("institutionCta")}{" "}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

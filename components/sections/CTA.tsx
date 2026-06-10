import { getTranslations } from "next-intl/server";

export default async function CTA() {
  const t = await getTranslations("CTA");

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline text-4xl md:text-6xl text-white mb-6">
          {t("heading")}
        </h2>
        <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
          {t("subheading")}
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://app.facilitadordocente.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-hover transition-colors shadow-[0_10px_25px_rgba(244,125,49,0.3)] w-full sm:w-auto"
          >
            {t("cta")}
          </a>
          <p className="text-sm text-stone-400">{t("footnote")}</p>
        </div>
      </div>
    </section>
  );
}

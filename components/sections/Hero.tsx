import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <>
      <div id="navbar-sentinel" className="absolute top-0 h-10 w-full pointer-events-none" aria-hidden="true" />
      <section className="pt-40 pb-24 px-6 relative overflow-hidden bg-light-bg" id="inicio">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-headline text-5xl md:text-7xl text-stone-900 mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            {t("headline")}
            <br />
            <span className="text-primary italic">{t("headlineAccent")}</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            {t("subheadline")}
          </p>

          <div className="max-w-xl mx-auto mb-10">
            <blockquote className="border-l-4 border-primary/40 pl-6 text-left">
              <p className="font-headline italic text-2xl text-stone-700 leading-tight mb-2">
                {t("quote")}
              </p>
              <cite className="text-sm font-medium text-stone-500 uppercase tracking-widest not-italic italic">
                {t("quoteAuthor")}
              </cite>
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://app.facilitadordocente.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-primary-hover transition-colors w-full sm:w-auto shadow-[0_10px_20px_rgba(244,125,49,0.2)]"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#como-funciona"
              className="border border-stone-300 px-8 py-3.5 rounded-lg font-medium text-stone-700 hover:bg-stone-100 transition-colors w-full sm:w-auto"
            >
              {t("ctaSecondary")}
            </a>
          </div>

          <div className="bg-stone-100 text-stone-600 py-3 px-6 rounded-full inline-block text-sm mb-16 border border-stone-200">
            <span className="font-bold text-primary">{t("statBold")}</span>{" "}
            {t("stat")}
          </div>

          <div
            className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 20px 40px rgba(156,68,0,0.08)" }}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/uJdiDcgr2w4?autoplay=0&loop=1&playlist=uJdiDcgr2w4&controls=1&rel=0&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                title={t("videoTitle")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

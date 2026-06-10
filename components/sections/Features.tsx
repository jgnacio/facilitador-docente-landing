import { getTranslations } from "next-intl/server";

const ICONS = ["school", "diversity_3", "psychology_alt", "fact_check", "smart_toy", "explore"];

export default async function Features() {
  const t = await getTranslations("Features");

  const features = ICONS.map((icon, i) => ({
    icon,
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="py-24 px-6 bg-dark-bg text-stone-300" id="funcionalidades">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-white mb-6">
            {t("heading")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-stone-400">
            {t("subheading")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-dark-surface p-6 rounded-xl border border-border-color hover:border-primary/50 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                {f.icon}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-stone-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

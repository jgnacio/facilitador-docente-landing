import { getTranslations } from "next-intl/server";
import { Calendar, BookOpen, ClipboardX } from "lucide-react";

const ICONS = [Calendar, BookOpen, ClipboardX];

export default async function Problem() {
  const t = await getTranslations("Problem");

  const items = ICONS.map((Icon, i) => ({
    Icon,
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="py-24 px-6 bg-dark-bg text-stone-300" id="problemas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl text-white mb-6">
            {t("heading")}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-stone-400">
            {t("subheading")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((p) => (
            <div
              key={p.title}
              className="bg-dark-surface p-8 rounded-xl border border-border-color"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <p.Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-stone-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

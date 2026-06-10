import { getTranslations } from "next-intl/server";

export default async function FAQ() {
  const t = await getTranslations("FAQ");

  const faqs = [0, 1, 2, 3, 4].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  return (
    <section className="py-24 px-6 bg-dark-bg" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-5xl text-white mb-12 text-center">
          {t("heading")}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-dark-surface border border-border-color rounded-xl group overflow-hidden"
            >
              <summary className="flex justify-between items-center font-bold text-white p-6 cursor-pointer list-none">
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-stone-400 text-sm leading-relaxed border-t border-border-color/50 mt-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

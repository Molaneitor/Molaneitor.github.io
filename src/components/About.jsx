import { profile, languages } from "../data/profile";
import { ui } from "../data/translations";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-20 border-t border-[var(--color-border)]">
      <div className="section-container grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <p className="section-eyebrow mb-3">{t(ui.about.eyebrow)}</p>
          <h2 className="section-title mb-6">{t(ui.about.title)}</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">{t(profile.summary)}</p>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed">{t(ui.about.extra)}</p>
        </div>

        <div className="md:col-span-2">
          <p className="section-eyebrow mb-3">{t(ui.about.languagesEyebrow)}</p>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={t(lang.name)}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-white">{t(lang.name)}</span>
                  <span className="text-[var(--color-text-muted)]">{t(lang.level)}</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--color-surface-2)] overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${lang.levelPct}%`, backgroundColor: "var(--color-accent)" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="section-eyebrow mt-8 mb-3">{t(ui.about.locationEyebrow)}</p>
          <p className="text-[var(--color-text-muted)]">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}

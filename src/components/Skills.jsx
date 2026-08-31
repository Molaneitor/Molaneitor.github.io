import { skillGroups, softSkills } from "../data/skills";
import { certifications } from "../data/experience";
import { ui } from "../data/translations";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="habilidades" className="py-20 border-t border-[var(--color-border)]">
      <div className="section-container">
        <p className="section-eyebrow mb-3">{t(ui.skills.eyebrow)}</p>
        <h2 className="section-title mb-10">{t(ui.skills.title)}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <div key={t(group.title)} className="card p-5">
              <h3 className="font-display font-semibold text-white mb-3">{t(group.title)}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={t(item)}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t(ui.skills.softSkillsTitle)}</h3>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((item) => (
                <li
                  key={t(item)}
                  className="text-sm px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "var(--color-accent-dim)", color: "var(--color-accent-soft)" }}
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">{t(ui.skills.certificationsTitle)}</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              {certifications.map((cert) => (
                <li key={t(cert)} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-accent)" }} />
                  {t(cert)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

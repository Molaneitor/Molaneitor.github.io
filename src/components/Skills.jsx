import { skillGroups, softSkills } from "../data/skills";
import { certifications } from "../data/experience";

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 border-t border-[var(--color-border)]">
      <div className="section-container">
        <p className="section-eyebrow mb-3">Habilidades</p>
        <h2 className="section-title mb-10">Herramientas y tecnologías</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-5">
              <h3 className="font-display font-semibold text-white mb-3">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Habilidades blandas</h3>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((item) => (
                <li
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "var(--color-accent-dim)", color: "var(--color-accent-soft)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Certificaciones y cursos</h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-accent)" }} />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

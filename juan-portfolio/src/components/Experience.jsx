import { experience, education } from "../data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 border-t border-[var(--color-border)]">
      <div className="section-container grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <p className="section-eyebrow mb-3">Trayectoria</p>
          <h2 className="section-title mb-10">Experiencia laboral</h2>

          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.role} className="relative pl-6 border-l border-[var(--color-border)]">
                <span
                  className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-semibold text-white text-lg">{job.role}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text-muted)]">
                    {job.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-accent-soft)] font-medium mt-0.5">
                  {job.company} · {job.location}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{job.period}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-text-muted)]">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-text-muted)] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="section-eyebrow mb-3">Formación</p>
          <h2 className="section-title mb-10">Educación</h2>
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.institution} className="card p-5">
                <h3 className="font-display font-semibold text-white">{ed.degree}</h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">{ed.institution}</p>
                <p className="text-xs text-[var(--color-accent-soft)] mt-2">{ed.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

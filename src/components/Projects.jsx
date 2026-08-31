import { projects } from "../data/projects";
import { ui } from "../data/translations";
import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-20 border-t border-[var(--color-border)]">
      <div className="section-container">
        <p className="section-eyebrow mb-3">{t(ui.projects.eyebrow)}</p>
        <h2 className="section-title mb-2">{t(ui.projects.title)}</h2>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-10">{t(ui.projects.subtitle)}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={t(project.title)} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-semibold text-white text-lg">{t(project.title)}</h3>
                {project.featured && (
                  <span
                    className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-accent-dim)", color: "var(--color-accent-soft)" }}
                  >
                    {t(ui.projects.featured)}
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed grow">
                {t(project.description)}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-5 text-sm">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    <FaGithub /> {t(ui.projects.code)}
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt /> {t(ui.projects.viewSite)}
                  </a>
                )}
                {!project.repo && !project.live && (
                  <span className="text-xs text-[var(--color-text-muted)]/70 italic">
                    {t(ui.projects.docsOnRequest)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

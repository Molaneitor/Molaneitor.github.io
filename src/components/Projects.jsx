import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 border-t border-[var(--color-border)]">
      <div className="section-container">
        <p className="section-eyebrow mb-3">Proyectos</p>
        <h2 className="section-title mb-2">Trabajo en datos y desarrollo</h2>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-10">
          Proyectos reales aplicados a negocio: automatización de datos, dashboards y desarrollo web.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-semibold text-white text-lg">{project.title}</h3>
                {project.featured && (
                  <span
                    className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-accent-dim)", color: "var(--color-accent-soft)" }}
                  >
                    Destacado
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed grow">
                {project.description}
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
                    <FaGithub /> Código
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt /> Ver sitio
                  </a>
                )}
                {!project.repo && !project.live && (
                  <span className="text-xs text-[var(--color-text-muted)]/70 italic">
                    Documentación disponible bajo solicitud
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

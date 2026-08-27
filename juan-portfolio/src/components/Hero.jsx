import { profile } from "../data/profile";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-24 overflow-hidden">
      {/* glow decorativo */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />

      <div className="section-container relative">
        <p className="section-eyebrow mb-4">Hola, soy</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-[var(--color-text-muted)] font-display">
          {profile.roles.join(" · ")}
        </p>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
          {profile.summary.es}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={profile.cv.es} download className="btn-primary">
            <FaFileDownload /> CV en Español
          </a>
          <a href={profile.cv.en} download className="btn-secondary">
            <FaFileDownload /> CV in English
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5 text-2xl text-[var(--color-text-muted)]">
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-accent-soft)] transition-colors">
            <FaLinkedin />
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent-soft)] transition-colors">
            <FaGithub />
          </a>
          <a href={profile.social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[var(--color-accent-soft)] transition-colors">
            <FaWhatsapp />
          </a>
          <a href={profile.social.email} aria-label="Correo" className="hover:text-[var(--color-accent-soft)] transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

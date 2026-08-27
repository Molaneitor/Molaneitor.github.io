import { profile } from "../data/profile";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
        <p>© {year} {profile.name}. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 text-lg">
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-accent-soft)] transition-colors">
            <FaLinkedin />
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent-soft)] transition-colors">
            <FaGithub />
          </a>
          <a href={profile.social.email} aria-label="Correo" className="hover:text-[var(--color-accent-soft)] transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

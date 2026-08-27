import { profile } from "../data/profile";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 border-t border-[var(--color-border)]">
      <div className="section-container text-center max-w-2xl mx-auto">
        <p className="section-eyebrow mb-3">Contacto</p>
        <h2 className="section-title mb-4">¿Hablamos de tu próximo proyecto de datos?</h2>
        <p className="text-[var(--color-text-muted)] mb-10">
          Estoy abierto a oportunidades como Data Analyst, BI Developer o roles afines. Escríbeme por
          cualquiera de estos medios.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href={profile.social.email} className="btn-primary">
            <FaEnvelope /> {profile.email}
          </a>
          <a href={profile.social.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="btn-secondary">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

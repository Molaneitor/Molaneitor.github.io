import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";

const links = [
  { href: "#inicio", label: ui.nav.home },
  { href: "#sobre-mi", label: ui.nav.about },
  { href: "#habilidades", label: ui.nav.skills },
  { href: "#experiencia", label: ui.nav.experience },
  { href: "#proyectos", label: ui.nav.projects },
  { href: "#contacto", label: ui.nav.contact },
];

function LanguageToggle({ className = "" }) {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      title={t(ui.navbar.switchTo)}
      aria-label={t(ui.navbar.switchTo)}
      className={`text-xs font-semibold tracking-wide px-2.5 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white hover:border-[var(--color-accent-soft)] transition-colors ${className}`}
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0d0f12]/90 backdrop-blur border-b border-[#262b31]" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <a href="#inicio" className="font-display font-bold text-lg tracking-tight text-white">
          JD<span className="text-[var(--color-accent-soft)]">.</span>Molano
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--color-text-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LanguageToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            className="text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(ui.navbar.openMenu)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-[var(--color-text-muted)] bg-[#0d0f12]/95 border-b border-[#262b31]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-white transition-colors"
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

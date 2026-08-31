import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const saved = window.localStorage.getItem("jd_lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // localStorage can be unavailable (private browsing, etc.) — fall back silently.
  }
  return null;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => readStoredLang() || "en");

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem("jd_lang", lang);
    } catch {
      // ignore write failures
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "en" ? "es" : "en")),
      // Pick the right variant out of a { es, en } object; returns non-objects untouched.
      t: (field) => (field && typeof field === "object" && "en" in field ? field[lang] : field),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

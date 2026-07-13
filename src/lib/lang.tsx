import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "../content/site";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: { pt: string; en: string }) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved =
      (typeof window !== "undefined" && (localStorage.getItem("kanao-lang") as Lang)) || null;
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("kanao-lang", l);
  };

  const t = (s: { pt: string; en: string }) => s[lang];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be inside LangProvider");
  return ctx;
}

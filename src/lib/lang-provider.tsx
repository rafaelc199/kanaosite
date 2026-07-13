import { useEffect, useState, type ReactNode } from "react";
import type { Lang } from "../content/site";
import { LangContext } from "./lang-context";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("kanao-lang") as Lang | null;
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    localStorage.setItem("kanao-lang", nextLang);
  };

  const t = (text: { pt: string; en: string }) => text[lang];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

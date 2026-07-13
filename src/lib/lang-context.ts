import { createContext, useContext } from "react";
import type { Lang } from "../content/site";

export type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (text: { pt: string; en: string }) => string;
};

export const LangContext = createContext<LangContextValue | null>(null);

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be inside LangProvider");
  return context;
}

import { Link, useRouterState } from "@tanstack/react-router";
import { brand, nav } from "../content/site";
import { useLang } from "../lib/lang";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const links = [
    { to: "/", label: nav.home },
    { to: "/projetos", label: nav.projects },
    { to: "/estudio", label: nav.about },
    { to: "/contacto", label: nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-sm border-b border-border/60">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          style={{ fontFamily: "var(--font-wordmark)" }}
          className="text-xl md:text-2xl tracking-[0.02em] font-medium lowercase"
        >
          {brand.name.toLowerCase()} interior design
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em]">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"}`}
              >
                {t(l.label)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]">
          <button
            onClick={() => setLang("pt")}
            className={
              lang === "pt" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }
          >
            PT
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => setLang("en")}
            className={
              lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }
          >
            EN
          </button>
        </div>
      </div>

      {/* mobile nav */}
      <nav className="md:hidden flex justify-center gap-5 pb-3 text-[10px] uppercase tracking-[0.16em]">
        {links.map((l) => {
          const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
          return (
            <Link
              key={l.to}
              to={l.to}
              className={active ? "text-foreground" : "text-muted-foreground"}
            >
              {t(l.label)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

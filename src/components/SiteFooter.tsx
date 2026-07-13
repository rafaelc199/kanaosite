import { Link } from "@tanstack/react-router";
import { brand, nav } from "../content/site";
import { useLang } from "../lib/lang";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p
            style={{ fontFamily: "var(--font-wordmark)" }}
            className="text-3xl tracking-[0.02em] font-medium lowercase"
          >
            {brand.name.toLowerCase()} interior design
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{t(brand.tagline)}</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            {t({ pt: "Contacto", en: "Contact" })}
          </p>
          <p>{brand.email}</p>
          <p>{brand.phone}</p>
          <p className="text-muted-foreground">{t(brand.address)}</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            {t({ pt: "Navegar", en: "Navigate" })}
          </p>
          <div className="flex flex-col gap-1">
            <Link to="/projetos" className="hover:text-foreground text-muted-foreground">
              {t(nav.projects)}
            </Link>
            <Link to="/estudio" className="hover:text-foreground text-muted-foreground">
              {t(nav.about)}
            </Link>
            <Link to="/contacto" className="hover:text-foreground text-muted-foreground">
              {t(nav.contact)}
            </Link>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground text-muted-foreground"
            >
              Instagram
            </a>
            <Link to="/privacidade" className="hover:text-foreground text-muted-foreground">
              {t({ pt: "Privacidade", en: "Privacy" })}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        © {new Date().getFullYear()} {brand.name}
      </div>
    </footer>
  );
}

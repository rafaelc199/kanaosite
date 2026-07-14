import { Link } from "@tanstack/react-router";
import { brand } from "../content/site";
import { useLang } from "../lib/lang";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="mt-32 bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-8 py-20">

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.6fr_1fr_1fr]">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/brand/kanao-logo-footer.jpeg"
              alt="Kanao Interior Design"
              className="w-[520px] max-w-full object-contain"
            />
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.35em] text-white/40">
              {t({ pt: "Contacto", en: "Contact" })}
            </h3>

            <div className="space-y-4 text-lg leading-relaxed text-white/90">
              <a
                href="mailto:kanao.interiordesign@gmail.com"
                className="block transition hover:text-white"
              >
                kanao.interiordesign@gmail.com
              </a>

              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                className="block transition hover:text-white"
              >
                {brand.phone}
              </a>

              <p className="text-white/70">
                {t(brand.address)}
              </p>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-8 text-xs uppercase tracking-[0.35em] text-white/40">
              {t({ pt: "Navegar", en: "Navigate" })}
            </h3>

            <nav className="flex flex-col gap-4 text-lg text-white/90">

              <Link
                to="/projetos"
                className="transition hover:text-white hover:translate-x-1"
              >
                Portfólio
              </Link>

              <Link
                to="/estudio"
                className="transition hover:text-white hover:translate-x-1"
              >
                Sobre
              </Link>

              <Link
                to="/contacto"
                className="transition hover:text-white hover:translate-x-1"
              >
                Contacto
              </Link>

              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white hover:translate-x-1"
              >
                Instagram
              </a>

              <Link
                to="/privacidade"
                className="transition hover:text-white hover:translate-x-1"
              >
                Privacidade
              </Link>

            </nav>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.25em] text-white/40">

          <p>© {new Date().getFullYear()} KANAO</p>

          <p className="mt-4 md:mt-0">
            INTERIOR DESIGN STUDIO
          </p>

        </div>

      </div>
    </footer>
  );
}
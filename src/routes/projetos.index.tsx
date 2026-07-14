import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "../content/site";
import { useLang } from "../lib/lang";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Kanao" },
      {
        name: "description",
        content: "Portfólio de projetos de design de interiores do estúdio Kanao.",
      },
      { property: "og:title", content: "Projetos — Kanao" },
      { property: "og:description", content: "Portfólio de projetos de design de interiores." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-20 pb-20">
      <header className="mb-16 md:mb-24">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t({ pt: "Portfólio", en: "Portfolio" })}
        </p>
        <h1 className="serif text-4xl md:text-6xl mt-3">
          {t({ pt: "Projetos selecionados", en: "Selected projects" })}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-32">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to="/projetos/$slug"
            params={{ slug: p.slug }}
            className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={p.images[0]}
                alt={t(p.title)}
                className="w-full h-[55vh] md:h-[70vh] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="serif text-white text-2xl md:text-3xl mb-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  {t(p.title)}
                </span>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="serif text-2xl">{t(p.title)}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t(p.location)} · {t(p.category)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

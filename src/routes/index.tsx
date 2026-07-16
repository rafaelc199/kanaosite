import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { home, projects, phases } from "../content/site";
import { useLang } from "../lib/lang";
import { canonicalLink, createSeoMeta } from "../lib/seo";

const title = "Kanao — Design de Interiores em Portugal";
const description =
  "Estúdio de design de interiores em Marco de Canaveses. Projetos residenciais e comerciais em Portugal, da conceção à obra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: createSeoMeta({ title, description, path: "/", image: projects[0]?.images[0] }),
    links: [canonicalLink("/")],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useLang();
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-24 pb-20 md:pb-32">
        <h1 className="serif text-[2.5rem] sm:text-5xl md:text-8xl leading-[1.05] tracking-tight max-w-5xl whitespace-pre-line">
          {t(home.heroTitle)}
        </h1>
        <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-10 items-end">
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            {t(home.heroSubtitle)}
          </p>
          <div className="flex gap-4 md:justify-end text-[11px] uppercase tracking-[0.18em]">
            <Link
              to="/projetos"
              className="border-b border-foreground pb-1 hover:opacity-60 transition"
            >
              {t(home.ctaProjects)} →
            </Link>
            <Link
              to="/contacto"
              className="border-b border-border pb-1 text-muted-foreground hover:text-foreground hover:border-foreground transition"
            >
              {t(home.ctaContact)}
            </Link>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        <img
          src={projects[0].images[0]}
          alt={t(projects[0].title)}
          className="w-full h-[60vh] md:h-[85vh] object-cover"
        />
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-40 text-center">
        <p className="serif text-2xl md:text-4xl leading-snug">{t(home.intro)}</p>
      </section>

      {/* PHASES */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-3xl mb-16 md:mb-24">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t({ pt: "Processo", en: "Process" })}
            </p>
            <h2 className="serif text-3xl md:text-5xl mt-3 leading-[1.1]">{t(phases.title)}</h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground">{t(phases.subtitle)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {phases.items.map((ph) => (
              <div key={ph.label.en} className="flex flex-col">
                <span className="serif text-5xl md:text-6xl text-muted-foreground/40 leading-none">
                  {ph.label.en.replace("Phase ", "0")}
                </span>
                <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t(ph.label)}
                </p>
                <h3 className="serif text-2xl md:text-3xl mt-2">{t(ph.title)}</h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t(ph.body)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-20 space-y-24 md:space-y-32">
        {featured.map((p, i) => (
          <Link
            key={p.slug}
            to="/projetos/$slug"
            params={{ slug: p.slug }}
            className={`block group ${i % 2 === 1 ? "md:ml-auto md:w-[70%]" : "md:w-[80%]"}`}
          >
            <div className="overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.title[lang]}
                className="h-auto w-full object-contain transition-transform duration-[1200ms] group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <div>
                <h3 className="serif text-2xl md:text-3xl">{t(p.title)}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t(p.location)} · {t(p.category)}
                </p>
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.year}
              </span>
            </div>
          </Link>
        ))}
        <div className="text-center pt-8">
          <Link
            to="/projetos"
            className="text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:opacity-60"
          >
            {t({ pt: "Ver todos os projetos", en: "View all projects" })} →
          </Link>
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { about, projects } from "../content/site";
import { useLang } from "../lib/lang";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [
      { title: "Estúdio — Kanao" },
      {
        name: "description",
        content: "Sobre o estúdio Kanao — abordagem ao design de interiores.",
      },
      { property: "og:title", content: "Estúdio — Kanao" },
      { property: "og:description", content: "Sobre o estúdio Kanao." },
    ],
  }),
  component: About,
});

function About() {
  const { t, lang } = useLang();
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-20 pb-20">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t({ pt: "Estúdio", en: "Studio" })}
        </p>
        <h1 className="serif text-4xl md:text-7xl mt-3 max-w-4xl leading-[1.05]">
          {t({
            pt: "Interiores que se tornam parte de quem os habita.",
            en: "Interiors that become part of those who inhabit them.",
          })}
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <img
          src={projects[1]?.images[0] ?? projects[0].images[0]}
          alt=""
          className="w-full h-[60vh] md:h-[85vh] object-cover"
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-32 space-y-8">
        {about.body[lang].map((p, i) => (
          <p key={i} className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </section>

      <section className="border-t border-border/60">
        <Link
          to="/projetos"
          className="block mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24 group"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {t({ pt: "Ver portfólio", en: "View portfolio" })}
          </p>
          <h2 className="serif text-3xl md:text-5xl mt-3 group-hover:opacity-60 transition">
            {t({ pt: "Projetos selecionados", en: "Selected projects" })} →
          </h2>
        </Link>
      </section>
    </>
  );
}

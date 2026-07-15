import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, type Project } from "../content/site";
import { useLang } from "../lib/lang";
import { useState } from "react";
import { Lightbox } from "../components/Lightbox";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title.pt} — Kanao` : "Projeto — Kanao";
    return {
      meta: [
        { title },
        { name: "description", content: p?.description.pt ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.description.pt ?? "" },
        { property: "og:image", content: p?.images[0] ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="serif text-4xl">Projeto não encontrado</h1>
      <Link
        to="/projetos"
        className="mt-6 inline-block text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1"
      >
        Voltar aos projetos
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p>{error.message}</p>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const { t } = useLang();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <article>
      {/* HEADER */}
      <header className="mx-auto max-w-[1600px] px-6 md:px-10 pt-8 md:pt-16 pb-12">
        <Link
          to="/projetos"
          className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
        >
          ← {t({ pt: "Projetos", en: "Projects" })}
        </Link>
        <h1 className="serif text-4xl md:text-7xl mt-6">{t(project.title)}</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t({ pt: "Local", en: "Location" })}
            </p>
            <p className="mt-1">{t(project.location)}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t({ pt: "Categoria", en: "Category" })}
            </p>
            <p className="mt-1">{t(project.category)}</p>
          </div>
        </div>
      </header>

      {/* COVER */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <img
          src={project.images[0]}
          alt={t(project.title)}
          fetchPriority="high"
          decoding="async"
          onClick={() => setLightboxIndex(0)}
          className="block h-auto w-full cursor-zoom-in"
        />
      </div>

      {/* DESCRIPTION */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-32">
        <p className="serif text-xl md:text-2xl leading-relaxed">{t(project.description)}</p>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 space-y-6 md:space-y-10 pb-32">
        {project.images.slice(1).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${t(project.title)} — ${i + 2}`}
            onClick={() => setLightboxIndex(i + 1)}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full cursor-zoom-in"
          />
        ))}
      </section>

      {/* NEXT */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Link to="/projetos/$slug" params={{ slug: next.slug }} className="group block">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {t({ pt: "Próximo projeto", en: "Next project" })}
            </p>
            <h2 className="serif text-3xl md:text-5xl mt-3 group-hover:opacity-60 transition">
              {t(next.title)} →
            </h2>
          </Link>
          <Link
            to="/projetos"
            className="self-start md:self-end text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:opacity-60 transition"
          >
            ← {t({ pt: "Voltar ao portfólio", en: "Back to portfolio" })}
          </Link>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          alt={t(project.title)}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </article>
  );
}

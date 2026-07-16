import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { projects } from "../content/site";
import { absoluteUrl } from "../lib/seo";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0" },
          { path: "/projetos", changefreq: "monthly", priority: "0.9" },
          { path: "/estudio", changefreq: "yearly", priority: "0.7" },
          { path: "/contacto", changefreq: "yearly", priority: "0.7" },
        ];

        const projectEntries: SitemapEntry[] = projects.map((p) => ({
          path: `/projetos/${p.slug}`,
          changefreq: "yearly",
          priority: "0.8",
        }));

        const urls = [...staticEntries, ...projectEntries].map((e) =>
          [
            `  <url>`,
            `    <loc>${absoluteUrl(e.path)}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

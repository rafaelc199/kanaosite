export const SITE_URL = "https://kanaosite.vercel.app";

export const DEFAULT_TITLE = "Kanao — Design de Interiores";
export const DEFAULT_DESCRIPTION =
  "Estúdio de design de interiores em Marco de Canaveses. Projetos residenciais e comerciais em Portugal, da conceção à obra.";
export const DEFAULT_SOCIAL_IMAGE = "/images/casa-vg/capa.jpg";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createSeoMeta({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: `${title} — projeto de design de interiores` },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}

export function canonicalLink(path: string) {
  return { rel: "canonical", href: absoluteUrl(path) };
}

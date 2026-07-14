export const SITE_URL = "https://kanaosite.vercel.app";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function seoHead({ title, description, path, image, type = "website" }: SeoOptions) {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image ?? "/images/casa-vg/cozinha-sala-03.webp");

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: "Kanao" },
      { property: "og:locale", content: "pt_PT" },
      { property: "og:image", content: socialImage },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

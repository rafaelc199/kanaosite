export type Lang = "pt" | "en";

export type Project = {
  slug: string;
  title: { pt: string; en: string };
  location: { pt: string; en: string };
  year: string;
  category: { pt: string; en: string };
  description: { pt: string; en: string };
  images: string[];
};

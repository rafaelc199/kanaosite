import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { LangProvider } from "../lib/lang";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { CookieBanner } from "../components/CookieBanner";
import { brand } from "../content/site";
import { DEFAULT_DESCRIPTION, DEFAULT_SOCIAL_IMAGE, DEFAULT_TITLE, absoluteUrl } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar a página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro. Pode tentar novamente ou regressar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const organizationJsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${absoluteUrl("/")}#studio`,
      name: brand.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/images/brand/kanao-logo-dark.png"),
      image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
      description: DEFAULT_DESCRIPTION,
      email: brand.email,
      telephone: brand.phone.replaceAll(" ", ""),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marco de Canaveses",
        addressRegion: "Porto",
        addressCountry: "PT",
      },
      areaServed: "PT",
      sameAs: [brand.instagram],
    };
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: DEFAULT_TITLE },
        {
          name: "description",
          content: DEFAULT_DESCRIPTION,
        },
        { name: "author", content: brand.name },
        { name: "format-detection", content: "telephone=no" },
        { property: "og:site_name", content: brand.name },
        { property: "og:locale", content: "pt_PT" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&family=Outfit:wght@400;500&display=swap",
        },
        { rel: "preconnect", href: "https://api.fontshare.com" },
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=nippo@400,500,700&display=swap",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(organizationJsonLd),
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <SiteHeader />
        <main className="pt-28 md:pt-20">
          <div key={pathname} className="animate-fade-in">
            <Outlet />
          </div>
        </main>
        <SiteFooter />
        <CookieBanner />
      </LangProvider>
    </QueryClientProvider>
  );
}

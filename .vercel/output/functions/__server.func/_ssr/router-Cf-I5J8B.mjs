import { r as __toESM } from "../_runtime.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang, t as LangContext } from "./lang-context-C117CugB.mjs";
import { a as nav, n as brand } from "./global-BHNs0o0g.mjs";
import { t as projects } from "./projects-D1dd172G.mjs";
import { t as Route$7 } from "./projetos._slug-DXZPP6LX.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cf-I5J8B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DAOEXFox.css";
function LangProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("pt");
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("kanao-lang");
		if (saved === "pt" || saved === "en") setLangState(saved);
	}, []);
	const setLang = (nextLang) => {
		setLangState(nextLang);
		localStorage.setItem("kanao-lang", nextLang);
	};
	const t = (text) => text[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangContext.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
function SiteHeader() {
	const { lang, setLang, t } = useLang();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const links = [
		{
			to: "/",
			label: nav.home
		},
		{
			to: "/projetos",
			label: nav.projects
		},
		{
			to: "/estudio",
			label: nav.about
		},
		{
			to: "/contacto",
			label: nav.contact
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-sm border-b border-border/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					style: { fontFamily: "var(--font-wordmark)" },
					className: "text-xl md:text-2xl tracking-[0.02em] font-medium lowercase",
					children: [brand.name.toLowerCase(), " interior design"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em]",
					children: links.map((l) => {
						const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: `transition-colors hover:text-foreground ${active ? "text-foreground" : "text-muted-foreground"}`,
							children: t(l.label)
						}, l.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang("pt"),
							className: lang === "pt" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
							children: "PT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang("en"),
							className: lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
							children: "EN"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "md:hidden flex justify-center gap-5 pb-3 text-[10px] uppercase tracking-[0.16em]",
			children: links.map((l) => {
				const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: active ? "text-foreground" : "text-muted-foreground",
					children: t(l.label)
				}, l.to);
			})
		})]
	});
}
function SiteFooter() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/60 mt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: { fontFamily: "var(--font-wordmark)" },
						className: "text-3xl tracking-[0.02em] font-medium lowercase",
						children: [brand.name.toLowerCase(), " interior design"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t(brand.tagline)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3",
							children: t({
								pt: "Contacto",
								en: "Contact"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: brand.email }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: brand.phone }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: t(brand.address)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3",
						children: t({
							pt: "Navegar",
							en: "Navigate"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projetos",
								className: "hover:text-foreground text-muted-foreground",
								children: t(nav.projects)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/estudio",
								className: "hover:text-foreground text-muted-foreground",
								children: t(nav.about)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contacto",
								className: "hover:text-foreground text-muted-foreground",
								children: t(nav.contact)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: brand.instagram,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-foreground text-muted-foreground",
								children: "Instagram"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacidade",
								className: "hover:text-foreground text-muted-foreground",
								children: t({
									pt: "Privacidade",
									en: "Privacy"
								})
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/60 py-6 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				brand.name
			]
		})]
	});
}
var STORAGE_KEY = "kanao_cookie_consent";
function CookieBanner() {
	const { t } = useLang();
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved === "accepted");
		else if (!saved) setVisible(true);
	}, []);
	const decide = (choice) => {
		localStorage.setItem(STORAGE_KEY, choice);
		if (choice === "accepted");
		setVisible(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-xl p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-foreground leading-relaxed",
				children: [
					t({
						pt: "Usamos cookies analíticos para melhorar o site. Pode aceitar ou recusar.",
						en: "We use analytics cookies to improve the site. You can accept or decline."
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/privacidade",
						className: "underline text-muted-foreground hover:text-foreground",
						children: t({
							pt: "Saber mais",
							en: "Learn more"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2 justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => decide("declined"),
					className: "text-xs uppercase tracking-[0.15em] px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors",
					children: t({
						pt: "Recusar",
						en: "Decline"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => decide("accepted"),
					className: "text-xs uppercase tracking-[0.15em] px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity",
					children: t({
						pt: "Aceitar",
						en: "Accept"
					})
				})]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => {
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: "Kanao — Design de Interiores" },
				{
					name: "description",
					content: "Estúdio de design de interiores Kanao. Projetos residenciais e comerciais com foco em luz, matéria e proporção."
				},
				{
					name: "author",
					content: "Kanao"
				},
				{
					property: "og:title",
					content: "Kanao — Design de Interiores"
				},
				{
					property: "og:description",
					content: "Estúdio de design de interiores. Projetos residenciais e comerciais."
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:card",
					content: "summary"
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: ""
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&family=Outfit:wght@400;500&display=swap"
				},
				{
					rel: "preconnect",
					href: "https://api.fontshare.com"
				},
				{
					rel: "stylesheet",
					href: "https://api.fontshare.com/v2/css?f[]=nippo@400,500,700&display=swap"
				}
			],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					name: "Kanao",
					description: "Estúdio de design de interiores. Projetos residenciais e comerciais com foco em luz, matéria e proporção.",
					email: "kanao.interiordesign@gmail.com",
					telephone: "+351914448002",
					address: {
						"@type": "PostalAddress",
						addressLocality: "Marco de Canaveses",
						addressRegion: "Porto",
						addressCountry: "PT"
					},
					areaServed: "PT",
					sameAs: ["https://instagram.com/kanao.interiordesign"]
				})
			}]
		};
	},
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LangProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-28 md:pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-fade-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, pathname)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {})
		] })
	});
}
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticEntries = [
		{
			path: "/",
			changefreq: "monthly",
			priority: "1.0"
		},
		{
			path: "/projetos",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/estudio",
			changefreq: "yearly",
			priority: "0.7"
		},
		{
			path: "/contacto",
			changefreq: "yearly",
			priority: "0.7"
		},
		{
			path: "/privacidade",
			changefreq: "yearly",
			priority: "0.3"
		}
	];
	const projectEntries = projects.map((p) => ({
		path: `/projetos/${p.slug}`,
		changefreq: "yearly",
		priority: "0.8"
	}));
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[...staticEntries, ...projectEntries].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./privacidade-D9YelRnX.mjs");
var Route$4 = createFileRoute("/privacidade")({
	head: () => ({
		meta: [
			{ title: "Privacidade — Kanao" },
			{
				name: "description",
				content: "Política de privacidade e cookies do estúdio Kanao. Informação sobre tratamento de dados pessoais em conformidade com o RGPD."
			},
			{
				property: "og:title",
				content: "Privacidade — Kanao"
			},
			{
				property: "og:url",
				content: "/privacidade"
			},
			{
				name: "robots",
				content: "noindex"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacidade"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./estudio-Cy3wJrR2.mjs");
var Route$3 = createFileRoute("/estudio")({
	head: () => ({ meta: [
		{ title: "Estúdio — Kanao" },
		{
			name: "description",
			content: "Sobre o estúdio Kanao — abordagem ao design de interiores."
		},
		{
			property: "og:title",
			content: "Estúdio — Kanao"
		},
		{
			property: "og:description",
			content: "Sobre o estúdio Kanao."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contacto-DHq9ogAM.mjs");
var Route$2 = createFileRoute("/contacto")({
	head: () => ({ meta: [
		{ title: "Contacto — Kanao" },
		{
			name: "description",
			content: "Fale connosco sobre o seu projeto de design de interiores."
		},
		{
			property: "og:title",
			content: "Contacto — Kanao"
		},
		{
			property: "og:description",
			content: "Fale connosco sobre o seu projeto."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-CoVaBIDe.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Kanao — Design de Interiores" },
		{
			name: "description",
			content: "Estúdio de design de interiores. Projetos residenciais e comerciais em Portugal."
		},
		{
			property: "og:title",
			content: "Kanao — Design de Interiores"
		},
		{
			property: "og:description",
			content: "Estúdio de design de interiores. Projetos residenciais e comerciais."
		},
		{
			property: "og:image",
			content: projects[0]?.images[0] ?? ""
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projetos.index-Cs86_okx.mjs");
var Route = createFileRoute("/projetos/")({
	head: () => ({ meta: [
		{ title: "Projetos — Kanao" },
		{
			name: "description",
			content: "Portfólio de projetos de design de interiores do estúdio Kanao."
		},
		{
			property: "og:title",
			content: "Projetos — Kanao"
		},
		{
			property: "og:description",
			content: "Portfólio de projetos de design de interiores."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var PrivacidadeRoute = Route$4.update({
	id: "/privacidade",
	path: "/privacidade",
	getParentRoute: () => Route$6
});
var EstudioRoute = Route$3.update({
	id: "/estudio",
	path: "/estudio",
	getParentRoute: () => Route$6
});
var ContactoRoute = Route$2.update({
	id: "/contacto",
	path: "/contacto",
	getParentRoute: () => Route$6
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ProjetosIndexRoute = Route.update({
	id: "/projetos/",
	path: "/projetos/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	ContactoRoute,
	EstudioRoute,
	PrivacidadeRoute,
	SitemapDotxmlRoute,
	ProjetosSlugRoute: Route$7.update({
		id: "/projetos/$slug",
		path: "/projetos/$slug",
		getParentRoute: () => Route$6
	}),
	ProjetosIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

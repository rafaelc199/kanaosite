import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./lang-context-C117CugB.mjs";
import { i as home, o as phases } from "./global-BHNs0o0g.mjs";
import { t as projects } from "./projects-D1dd172G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CoVaBIDe.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const { t, lang } = useLang();
	const featured = projects.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-24 pb-20 md:pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "serif text-[2.5rem] sm:text-5xl md:text-8xl leading-[1.05] tracking-tight max-w-5xl whitespace-pre-line",
				children: t(home.heroTitle)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 md:mt-16 grid md:grid-cols-2 gap-10 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base md:text-lg text-muted-foreground max-w-xl",
					children: t(home.heroSubtitle)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 md:justify-end text-[11px] uppercase tracking-[0.18em]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projetos",
						className: "border-b border-foreground pb-1 hover:opacity-60 transition",
						children: [t(home.ctaProjects), " →"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contacto",
						className: "border-b border-border pb-1 text-muted-foreground hover:text-foreground hover:border-foreground transition",
						children: t(home.ctaContact)
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: projects[0].images[0],
				alt: t(projects[0].title),
				className: "w-full h-[60vh] md:h-[85vh] object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-40 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "serif text-2xl md:text-4xl leading-snug",
				children: t(home.intro)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mb-16 md:mb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: t({
								pt: "Processo",
								en: "Process"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "serif text-3xl md:text-5xl mt-3 leading-[1.1]",
							children: t(phases.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base md:text-lg text-muted-foreground",
							children: t(phases.subtitle)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12",
					children: phases.items.map((ph) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "serif text-5xl md:text-6xl text-muted-foreground/40 leading-none",
								children: ph.label.en.replace("Phase ", "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
								children: t(ph.label)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "serif text-2xl md:text-3xl mt-2",
								children: t(ph.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed",
								children: t(ph.body)
							})
						]
					}, ph.label.en))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 pb-20 space-y-24 md:space-y-32",
			children: [featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projetos/$slug",
				params: { slug: p.slug },
				className: `block group ${i % 2 === 1 ? "md:ml-auto md:w-[70%]" : "md:w-[80%]"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.images[0],
						alt: p.title[lang],
						className: "w-full h-[55vh] md:h-[80vh] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "serif text-2xl md:text-3xl",
						children: t(p.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: [
							t(p.location),
							" · ",
							t(p.category)
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: p.year
					})]
				})]
			}, p.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projetos",
					className: "text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:opacity-60",
					children: [t({
						pt: "Ver todos os projetos",
						en: "View all projects"
					}), " →"]
				})
			})]
		})
	] });
}
//#endregion
export { Index as component };

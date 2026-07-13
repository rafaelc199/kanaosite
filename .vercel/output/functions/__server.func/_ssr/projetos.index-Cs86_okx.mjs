import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./lang-context-C117CugB.mjs";
import { t as projects } from "./projects-D1dd172G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projetos.index-Cs86_okx.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1600px] px-6 md:px-10 pt-12 md:pt-20 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-16 md:mb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: t({
					pt: "Portfólio",
					en: "Portfolio"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "serif text-4xl md:text-6xl mt-3",
				children: t({
					pt: "Projetos selecionados",
					en: "Selected projects"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-32",
			children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projetos/$slug",
				params: { slug: p.slug },
				className: `group block ${i % 2 === 1 ? "md:mt-24" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.images[0],
						alt: t(p.title),
						className: "w-full h-[55vh] md:h-[70vh] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "serif text-white text-2xl md:text-3xl mb-8 translate-y-3 group-hover:translate-y-0 transition-transform duration-500",
							children: t(p.title)
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "serif text-2xl",
						children: t(p.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: [
							t(p.location),
							" · ",
							t(p.category)
						]
					})]
				})]
			}, p.slug))
		})]
	});
}
//#endregion
export { ProjectsPage as component };

import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./lang-context-C117CugB.mjs";
import { t as about } from "./global-BHNs0o0g.mjs";
import { t as projects } from "./projects-D1dd172G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estudio-Cy3wJrR2.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	const { t, lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-20 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: t({
					pt: "Estúdio",
					en: "Studio"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "serif text-4xl md:text-7xl mt-3 max-w-4xl leading-[1.05]",
				children: t({
					pt: "Interiores que se tornam parte de quem os habita.",
					en: "Interiors that become part of those who inhabit them."
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1400px] px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: projects[1]?.images[0] ?? projects[0].images[0],
				alt: "",
				className: "w-full h-[60vh] md:h-[85vh] object-cover"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-32 space-y-8",
			children: about.body[lang].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg md:text-xl leading-relaxed text-muted-foreground",
				children: p
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projetos",
				className: "block mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24 group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: t({
						pt: "Ver portfólio",
						en: "View portfolio"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "serif text-3xl md:text-5xl mt-3 group-hover:opacity-60 transition",
					children: [t({
						pt: "Projetos selecionados",
						en: "Selected projects"
					}), " →"]
				})]
			})
		})
	] });
}
//#endregion
export { About as component };

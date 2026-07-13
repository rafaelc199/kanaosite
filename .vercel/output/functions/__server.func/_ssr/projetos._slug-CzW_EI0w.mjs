import { r as __toESM } from "../_runtime.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./lang-context-C117CugB.mjs";
import { t as projects } from "./projects-D1dd172G.mjs";
import { t as Route } from "./projetos._slug-DXZPP6LX.mjs";
import { n as ChevronRight, r as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projetos._slug-CzW_EI0w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ images, index, onClose, onIndexChange, alt }) {
	const prev = (0, import_react.useCallback)(() => onIndexChange((index - 1 + images.length) % images.length), [
		index,
		images.length,
		onIndexChange
	]);
	const next = (0, import_react.useCallback)(() => onIndexChange((index + 1) % images.length), [
		index,
		images.length,
		onIndexChange
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowLeft") prev();
			else if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prevOverflow;
		};
	}, [
		onClose,
		prev,
		next
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] bg-black/95 animate-fade-in flex items-center justify-center",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					onClose();
				},
				className: "absolute top-6 right-6 text-white/80 hover:text-white transition",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-7 h-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					prev();
				},
				className: "absolute left-4 md:left-8 text-white/80 hover:text-white transition",
				"aria-label": "Previous",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-10 h-10" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images[index],
				alt: alt ?? "",
				onClick: (e) => e.stopPropagation(),
				className: "max-h-[90vh] max-w-[92vw] object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: (e) => {
					e.stopPropagation();
					next();
				},
				className: "absolute right-4 md:right-8 text-white/80 hover:text-white transition",
				"aria-label": "Next",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-10 h-10" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.18em]",
				children: [
					index + 1,
					" / ",
					images.length
				]
			})
		]
	});
}
function ProjectDetail() {
	const { project } = Route.useLoaderData();
	const { t } = useLang();
	const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
	const [lightboxIndex, setLightboxIndex] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 pt-8 md:pt-16 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projetos",
					className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground",
					children: ["← ", t({
						pt: "Projetos",
						en: "Projects"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "serif text-4xl md:text-7xl mt-6",
					children: t(project.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid md:grid-cols-3 gap-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: t({
							pt: "Local",
							en: "Location"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: t(project.location)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: t({
							pt: "Categoria",
							en: "Category"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: t(project.category)
					})] })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.images[0],
				alt: t(project.title),
				fetchPriority: "high",
				decoding: "async",
				onClick: () => setLightboxIndex(0),
				className: "w-full h-[70vh] md:h-[90vh] object-cover cursor-zoom-in"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "serif text-xl md:text-2xl leading-relaxed",
				children: t(project.description)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 space-y-6 md:space-y-10 pb-32",
			children: project.images.slice(1).map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: `${t(project.title)} — ${i + 2}`,
				onClick: () => setLightboxIndex(i + 1),
				className: `w-full object-cover cursor-zoom-in ${i % 3 === 0 ? "h-[70vh] md:h-[90vh]" : "h-[55vh] md:h-[70vh]"} ${i % 2 === 1 ? "md:w-[70%] md:ml-auto" : ""}`
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projetos/$slug",
					params: { slug: next.slug },
					className: "group block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: t({
							pt: "Próximo projeto",
							en: "Next project"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "serif text-3xl md:text-5xl mt-3 group-hover:opacity-60 transition",
						children: [t(next.title), " →"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projetos",
					className: "self-start md:self-end text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:opacity-60 transition",
					children: ["← ", t({
						pt: "Voltar ao portfólio",
						en: "Back to portfolio"
					})]
				})]
			})
		}),
		lightboxIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			images: project.images,
			index: lightboxIndex,
			alt: t(project.title),
			onClose: () => setLightboxIndex(null),
			onIndexChange: setLightboxIndex
		})
	] });
}
//#endregion
export { ProjectDetail as component };

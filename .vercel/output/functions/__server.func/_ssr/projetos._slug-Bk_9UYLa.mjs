import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projetos._slug-Bk_9UYLa.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-6 py-32 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "serif text-4xl",
		children: "Projeto não encontrado"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/projetos",
		className: "mt-6 inline-block text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1",
		children: "Voltar aos projetos"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };

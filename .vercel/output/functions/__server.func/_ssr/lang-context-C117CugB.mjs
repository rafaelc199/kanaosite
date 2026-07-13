import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lang-context-C117CugB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var LangContext = (0, import_react.createContext)(null);
function useLang() {
	const context = (0, import_react.useContext)(LangContext);
	if (!context) throw new Error("useLang must be inside LangProvider");
	return context;
}
//#endregion
export { useLang as n, LangContext as t };

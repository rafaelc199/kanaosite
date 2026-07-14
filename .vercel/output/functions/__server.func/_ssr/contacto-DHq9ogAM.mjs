import { r as __toESM } from "../_runtime.mjs";
import { D as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-R0SIwUaC.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useLang } from "./lang-context-C117CugB.mjs";
import { n as brand, r as contact } from "./global-BHNs0o0g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-DHq9ogAM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ContactSchema = objectType({
	name: stringType().trim().min(1, "Nome obrigatório").max(100),
	email: stringType().trim().email("Email inválido").max(255),
	message: stringType().trim().min(1, "Mensagem obrigatória").max(2e3)
});
var sendContactMessage = createServerFn({ method: "POST" }).validator((data) => ContactSchema.parse(data)).handler(createSsrRpc("f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a"));
function ContactPage() {
	const { t } = useLang();
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)(null);
	const send = useServerFn(sendContactMessage);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-20 pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-16 md:mb-24 max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: t({
						pt: "Vamos conversar",
						en: "Let's talk"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "serif text-4xl md:text-6xl mt-3",
					children: t(contact.title)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg text-muted-foreground",
					children: t(contact.intro)
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "md:col-span-4 space-y-8 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${brand.email}`,
						className: "hover:opacity-60",
						children: brand.email
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2",
						children: t({
							pt: "Telefone",
							en: "Phone"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: brand.phone })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2",
						children: t({
							pt: "Estúdio",
							en: "Studio"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(brand.address) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2",
						children: "Instagram"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: brand.instagram,
						target: "_blank",
						rel: "noreferrer",
						className: "hover:opacity-60",
						children: "@kanao.interiordesign"
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: async (e) => {
					e.preventDefault();
					const form = e.currentTarget;
					const fd = new FormData(form);
					setStatus("sending");
					setErrorMsg(null);
					try {
						await send({ data: {
							name: String(fd.get("name") ?? ""),
							email: String(fd.get("email") ?? ""),
							message: String(fd.get("message") ?? "")
						} });
						setStatus("sent");
						form.reset();
					} catch (err) {
						console.error(err);
						setStatus("error");
						setErrorMsg(t({
							pt: "Não foi possível enviar. Tente novamente ou envie email diretamente.",
							en: "Could not send. Please try again or email us directly."
						}));
					}
				},
				className: "md:col-span-8 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "name",
						label: t(contact.form.name),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "email",
						type: "email",
						label: t(contact.form.email),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "message",
						label: t(contact.form.message),
						textarea: true,
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: status === "sending",
						className: "text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:opacity-60",
						children: status === "sending" ? t({
							pt: "A enviar…",
							en: "Sending…"
						}) : `${t(contact.form.send)} →`
					}),
					status === "sent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t(contact.form.sent)
					}),
					status === "error" && errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						children: errorMsg
					})
				]
			})]
		})]
	});
}
function Field({ name, label, type = "text", textarea = false, required = false }) {
	const cls = "block w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			required,
			rows: 5,
			className: `${cls} resize-none mt-1`
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: `${cls} mt-1`
		})]
	});
}
//#endregion
export { ContactPage as component };

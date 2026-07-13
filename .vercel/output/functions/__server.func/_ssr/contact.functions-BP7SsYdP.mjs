import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-BP7SsYdP.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var TO_EMAIL = "kanao.interiordesign@gmail.com";
var FROM_EMAIL = "Kanao <onboarding@resend.dev>";
var RESEND_URL = "https://api.resend.com/emails";
function escapeHtml(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var sendContactMessage_createServerFn_handler = createServerRpc({
	id: "f4ab91175279d24fdd2724e2cfe526fe74336bbdfd18bfac38060247ff17403a",
	name: "sendContactMessage",
	filename: "src/lib/contact.functions.ts"
}, (opts) => sendContactMessage.__executeServer(opts));
var sendContactMessage = createServerFn({ method: "POST" }).validator((data) => ContactSchema.parse(data)).handler(sendContactMessage_createServerFn_handler, async ({ data }) => {
	const RESEND_API_KEY = process.env.RESEND_API_KEY_OWN;
	if (!RESEND_API_KEY) throw new Error("Email service not configured");
	const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;color:#111;line-height:1.6">
        <h2 style="margin:0 0 16px;font-weight:400">Nova mensagem de contacto</h2>
        <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Mensagem:</strong></p>
        <div style="padding:12px;background:#f5f3ee;border-left:3px solid #c9b896">${escapeHtml(data.message).replace(/\n/g, "<br/>")}</div>
      </div>
    `;
	const response = await fetch(RESEND_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${RESEND_API_KEY}`
		},
		body: JSON.stringify({
			from: FROM_EMAIL,
			to: [TO_EMAIL],
			reply_to: data.email,
			subject: `Contacto site — ${data.name}`,
			html
		})
	});
	if (!response.ok) {
		const body = await response.text().catch(() => "");
		console.error("Resend error", response.status, body);
		throw new Error(`Resend ${response.status}: ${body.slice(0, 300)}`);
	}
	return { ok: true };
});
//#endregion
export { sendContactMessage_createServerFn_handler };

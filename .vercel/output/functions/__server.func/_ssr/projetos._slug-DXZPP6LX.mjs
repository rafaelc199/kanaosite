import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as projects } from "./projects-D1dd172G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projetos._slug-DXZPP6LX.js
var $$splitComponentImporter = () => import("./projetos._slug-CzW_EI0w.mjs");
var $$splitErrorComponentImporter = () => import("./projetos._slug-BUtEvrVG.mjs");
var $$splitNotFoundComponentImporter = () => import("./projetos._slug-Bk_9UYLa.mjs");
var Route = createFileRoute("/projetos/$slug")({
	loader: ({ params }) => {
		const project = projects.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.project;
		const title = p ? `${p.title.pt} — Kanao` : "Projeto — Kanao";
		return { meta: [
			{ title },
			{
				name: "description",
				content: p?.description.pt ?? ""
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: p?.description.pt ?? ""
			},
			{
				property: "og:image",
				content: p?.images[0] ?? ""
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

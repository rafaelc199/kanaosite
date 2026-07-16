import { createFileRoute } from "@tanstack/react-router";
import { brand } from "../content/site";
import { useLang } from "../lib/lang";
import { absoluteUrl, canonicalLink } from "../lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Privacidade — Kanao" },
      {
        name: "description",
        content:
          "Política de privacidade e cookies do estúdio Kanao. Informação sobre tratamento de dados pessoais em conformidade com o RGPD.",
      },
      { property: "og:title", content: "Privacidade — Kanao" },
      { property: "og:url", content: absoluteUrl("/privacidade") },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [canonicalLink("/privacidade")],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { lang } = useLang();

  const updated = "07 / 2026";

  const pt = (
    <>
      <h1 className="font-display text-4xl md:text-5xl mb-3">Política de Privacidade</h1>
      <p className="text-sm text-muted-foreground mb-12">Última atualização: {updated}</p>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">1. Responsável pelo tratamento</h2>
        <p>
          O responsável pelo tratamento dos dados pessoais recolhidos através deste website é{" "}
          <strong>{brand.name}</strong>, contactável através de{" "}
          <a href={`mailto:${brand.email}`} className="underline">
            {brand.email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">2. Dados recolhidos</h2>
        <p>
          Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de
          contacto: nome, email, telefone (opcional) e mensagem. Estes dados são utilizados
          exclusivamente para responder ao seu pedido.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">3. Fundamento legal</h2>
        <p>
          O tratamento baseia-se no seu consentimento (art. 6.º/1/a do RGPD) ao submeter o
          formulário, e no legítimo interesse do estúdio em responder a pedidos comerciais.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">4. Conservação</h2>
        <p>
          Os dados de contacto são mantidos apenas pelo tempo necessário para responder ao pedido e,
          quando aplicável, durante a duração da relação comercial. Serão eliminados quando deixarem
          de ser necessários.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">5. Partilha com terceiros</h2>
        <p>
          Não vendemos nem partilhamos os seus dados. Utilizamos o serviço{" "}
          <a href="https://resend.com" className="underline" target="_blank" rel="noreferrer">
            Resend
          </a>{" "}
          para envio dos emails do formulário e, com o seu consentimento, o{" "}
          <a
            href="https://policies.google.com/privacy"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Google Analytics
          </a>{" "}
          para estatísticas anónimas de utilização.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">6. Cookies</h2>
        <p>
          Este site utiliza cookies estritamente necessários ao seu funcionamento e, mediante
          consentimento, cookies analíticos (Google Analytics) com IP anonimizado. Pode aceitar ou
          recusar no banner exibido na primeira visita. A sua escolha fica guardada no navegador;
          para a alterar, limpe os dados do site.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">7. Os seus direitos</h2>
        <p>
          Tem direito de aceder, corrigir, apagar, opor-se ou solicitar a portabilidade dos seus
          dados, bem como retirar o consentimento a qualquer momento. Para exercer estes direitos,
          contacte-nos por email. Pode também apresentar reclamação junto da Comissão Nacional de
          Proteção de Dados (CNPD).
        </p>
      </section>
    </>
  );

  const en = (
    <>
      <h1 className="font-display text-4xl md:text-5xl mb-3">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: {updated}</p>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">1. Data controller</h2>
        <p>
          The controller of personal data collected through this website is{" "}
          <strong>{brand.name}</strong>, reachable at{" "}
          <a href={`mailto:${brand.email}`} className="underline">
            {brand.email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">2. Data we collect</h2>
        <p>
          We only collect the data you voluntarily provide through the contact form: name, email,
          phone (optional) and message. This data is used solely to respond to your enquiry.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">3. Legal basis</h2>
        <p>
          Processing is based on your consent (GDPR art. 6(1)(a)) when submitting the form, and on
          the studio's legitimate interest in responding to commercial requests.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">4. Retention</h2>
        <p>
          Contact data is kept only for as long as necessary to reply to your enquiry and, if
          applicable, throughout the commercial relationship. It is deleted when no longer needed.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">5. Third parties</h2>
        <p>
          We do not sell or share your data. We use{" "}
          <a href="https://resend.com" className="underline" target="_blank" rel="noreferrer">
            Resend
          </a>{" "}
          to deliver contact-form emails and, with your consent,{" "}
          <a
            href="https://policies.google.com/privacy"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Google Analytics
          </a>{" "}
          for anonymous usage statistics.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">6. Cookies</h2>
        <p>
          This site uses strictly necessary cookies and, with your consent, analytics cookies
          (Google Analytics) with anonymised IP. You can accept or decline via the banner shown on
          your first visit. To change your choice, clear the site data in your browser.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="font-display text-2xl">7. Your rights</h2>
        <p>
          You have the right to access, rectify, erase, object to or request portability of your
          data, and to withdraw consent at any time. To exercise these rights, contact us by email.
          You may also lodge a complaint with the Portuguese Data Protection Authority (CNPD).
        </p>
      </section>
    </>
  );

  return (
    <div className="mx-auto max-w-3xl px-6 md:px-10 py-16 md:py-24 text-[15px] leading-relaxed">
      {lang === "en" ? en : pt}
    </div>
  );
}

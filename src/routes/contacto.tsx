import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { brand, contact } from "../content/site";
import { useLang } from "../lib/lang";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "../lib/contact.functions";

import { seoHead } from "../lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    seoHead({
      title: "Contacto — Kanao",
      description: "Fale connosco sobre o seu projeto de design de interiores.",
      path: "/contacto",
    }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const send = useServerFn(sendContactMessage);

  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-20 pb-32">
      <header className="mb-16 md:mb-24 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t({ pt: "Vamos conversar", en: "Let's talk" })}
        </p>
        <h1 className="serif text-4xl md:text-6xl mt-3">{t(contact.title)}</h1>
        <p className="mt-8 text-lg text-muted-foreground">{t(contact.intro)}</p>
      </header>

      <div className="grid md:grid-cols-12 gap-12">
        <aside className="md:col-span-4 space-y-8 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Email
            </p>
            <a href={`mailto:${brand.email}`} className="hover:opacity-60">
              {brand.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {t({ pt: "Telefone", en: "Phone" })}
            </p>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:opacity-60">
              {brand.phone}
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {t({ pt: "Estúdio", en: "Studio" })}
            </p>
            <p>{t(brand.address)}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Instagram
            </p>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:opacity-60">
              @kanao.interiordesign
            </a>
          </div>
        </aside>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            setStatus("sending");
            setErrorMsg(null);
            try {
              await send({
                data: {
                  name: String(fd.get("name") ?? ""),
                  email: String(fd.get("email") ?? ""),
                  message: String(fd.get("message") ?? ""),
                  website: String(fd.get("website") ?? ""),
                },
              });
              setStatus("sent");
              form.reset();
            } catch (err) {
              console.error(err);
              setStatus("error");
              setErrorMsg(
                t({
                  pt: "Não foi possível enviar. Tente novamente ou envie email diretamente.",
                  en: "Could not send. Please try again or email us directly.",
                }),
              );
            }
          }}
          className="md:col-span-8 space-y-8"
          aria-busy={status === "sending"}
        >
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <Field
            name="name"
            autoComplete="name"
            maxLength={100}
            label={t(contact.form.name)}
            required
          />
          <Field
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            label={t(contact.form.email)}
            required
          />
          <Field
            name="message"
            maxLength={2000}
            label={t(contact.form.message)}
            textarea
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="text-[11px] uppercase tracking-[0.18em] border-b border-foreground pb-1 hover:opacity-60 disabled:cursor-wait disabled:opacity-50"
          >
            {status === "sending"
              ? t({ pt: "A enviar…", en: "Sending…" })
              : `${t(contact.form.send)} →`}
          </button>

          {status === "sent" && (
            <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
              {t(contact.form.sent)}
            </p>
          )}
          {status === "error" && errorMsg && (
            <p role="alert" className="text-sm text-destructive">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
  required = false,
  autoComplete,
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  const cls =
    "block w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors";
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          maxLength={maxLength}
          rows={5}
          className={`${cls} resize-none mt-1`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          maxLength={maxLength}
          className={`${cls} mt-1`}
        />
      )}
    </label>
  );
}

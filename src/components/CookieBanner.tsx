import { useEffect, useState } from "react";
import { useLang } from "../lib/lang";

const STORAGE_KEY = "kanao_cookie_consent";

type Consent = "accepted" | "declined";

function loadGA() {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  if (!gaId) return;
  if (document.getElementById("ga-script")) return;

  const s1 = document.createElement("script");
  s1.id = "ga-script";
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.id = "ga-init";
  s2.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`;
  document.head.appendChild(s2);
}

export function CookieBanner() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (saved === "accepted") {
      loadGA();
    } else if (!saved) {
      setVisible(true);
    }
  }, []);

  const decide = (choice: Consent) => {
    localStorage.setItem(STORAGE_KEY, choice);
    if (choice === "accepted") loadGA();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 animate-fade-in">
      <div className="rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-xl p-5">
        <p className="text-sm text-foreground leading-relaxed">
          {t({
            pt: "Usamos cookies analíticos para melhorar o site. Pode aceitar ou recusar.",
            en: "We use analytics cookies to improve the site. You can accept or decline.",
          })}{" "}
          <a href="/privacidade" className="underline text-muted-foreground hover:text-foreground">
            {t({ pt: "Saber mais", en: "Learn more" })}
          </a>
        </p>
        <div className="mt-4 flex gap-2 justify-end">
          <button
            onClick={() => decide("declined")}
            className="text-xs uppercase tracking-[0.15em] px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors"
          >
            {t({ pt: "Recusar", en: "Decline" })}
          </button>
          <button
            onClick={() => decide("accepted")}
            className="text-xs uppercase tracking-[0.15em] px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
          >
            {t({ pt: "Aceitar", en: "Accept" })}
          </button>
        </div>
      </div>
    </div>
  );
}

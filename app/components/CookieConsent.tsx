"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

type ConsentValue = "accepted" | "refused";

type StoredConsent = {
  value: ConsentValue;
  timestamp: number;
};

const STORAGE_KEY = "camil-cookie-consent";

// Environ 6 mois
const CONSENT_DURATION = 1000 * 60 * 60 * 24 * 183;

export default function CookieConsent({
  measurementId,
}: {
  measurementId: string;
}) {
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        setShowBanner(true);
        setInitialized(true);
        return;
      }

      const consent: StoredConsent = JSON.parse(stored);

      const isExpired =
        Date.now() - consent.timestamp > CONSENT_DURATION;

      if (isExpired) {
        localStorage.removeItem(STORAGE_KEY);
        setShowBanner(true);
        setInitialized(true);
        return;
      }

      if (consent.value === "accepted") {
        setAnalyticsAllowed(true);
      }

      setShowBanner(false);
      setInitialized(true);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setShowBanner(true);
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    const openSettings = () => {
      setShowBanner(true);
    };

    window.addEventListener(
      "open-cookie-settings",
      openSettings
    );

    return () => {
      window.removeEventListener(
        "open-cookie-settings",
        openSettings
      );
    };
  }, []);

  const saveConsent = (value: ConsentValue) => {
    const consent: StoredConsent = {
      value,
      timestamp: Date.now(),
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(consent)
    );
  };

  const deleteGoogleAnalyticsCookies = () => {
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();

      if (
        cookieName.startsWith("_ga") ||
        cookieName.startsWith("_gid") ||
        cookieName.startsWith("_gat")
      ) {
        // Cookie du domaine courant
        document.cookie = `${cookieName}=; Max-Age=0; path=/`;

        // Cookie potentiellement défini sur .domaine.fr
        document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${window.location.hostname}`;

        document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=.${window.location.hostname}`;
      }
    });
  };

  const acceptCookies = () => {
    saveConsent("accepted");
    setAnalyticsAllowed(true);
    setShowBanner(false);
  };

  const refuseCookies = () => {
    const analyticsWasActive = analyticsAllowed;

    saveConsent("refused");
    setAnalyticsAllowed(false);
    deleteGoogleAnalyticsCookies();
    setShowBanner(false);

    // Si Analytics était déjà chargé, on recharge la page
    // pour le retirer complètement de la session.
    if (analyticsWasActive) {
      window.location.reload();
    }
  };

  if (!initialized) {
    return null;
  }

  return (
    <>
      {/* GOOGLE ANALYTICS :
          chargé UNIQUEMENT après consentement */}
      {analyticsAllowed && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />

          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];

                function gtag(){
                  dataLayer.push(arguments);
                }

                gtag('js', new Date());
                gtag('config', '${measurementId}');
              `,
            }}
          />
        </>
      )}

      {/* BANDEAU COOKIES */}
      {showBanner && (
  <div className="fixed bottom-4 left-4 right-4 z-[100] sm:bottom-6 sm:left-auto sm:right-6 sm:w-[520px]">
    <div className="rounded-[20px] border border-white/10 bg-[#0B0D0F]/95 p-5 text-[#F5F1EA] shadow-2xl backdrop-blur-md">

      {/* TEXTE */}
      <div>
        <p className="text-base font-semibold">
          Cookies & mesure d’audience
        </p>

        <p className="mt-2 text-[0.82rem] leading-[1.6] text-[#C7CED6]">
          J’utilise Google Analytics pour mesurer l’audience du site
          et améliorer son fonctionnement. Ces traceurs ne sont activés
          qu’avec ton accord.
        </p>

        <Link
          href="/politique-cookies"
          className="mt-2 inline-block text-[0.8rem] font-semibold text-[#4F6D8A] transition hover:text-[#6F8DA8]"
        >
          En savoir plus sur les cookies →
        </Link>
      </div>

      {/* BOUTONS */}
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={refuseCookies}
          className="flex-1 rounded-full border border-[#C7CED6]/40 bg-[#F5F1EA] px-4 py-2.5 text-sm font-semibold text-[#0B0D0F] transition hover:bg-white"
        >
          Tout refuser
        </button>

        <button
          type="button"
          onClick={acceptCookies}
          className="flex-1 rounded-full border border-[#C7CED6]/40 bg-[#F5F1EA] px-4 py-2.5 text-sm font-semibold text-[#0B0D0F] transition hover:bg-white"
        >
          Tout accepter
        </button>
      </div>

    </div>
  </div>
)}
    </>
  );
}
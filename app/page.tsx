"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"

const googleReviews = [
  {
    name: "Camille Berne",
    date: "Il y a 1 semaine",
    text: "Camil est un coach au top ! Très à l’écoute et bienveillant, il a parfaitement su comprendre mes besoins. J’avais pour objectif de préparer un Hyrox et il m’a conçu un programme parfaitement adapté qui m’a permis d’atteindre mon objectif. Je le recommande sans hésitation, vous pouvez le contacter en toute confiance ! 🌞",
  },
   {
    name: "Ethan",
    date: "Il y a 1 heure",
    text: "Excellent coach ! Contacté en janvier pour une perte de poids et une remise en forme à distance, Camil s’est montré particulièrement réactif et disponible. Il apporte un réel plus grâce à son accompagnement et est plus qu’investi dans son métier. Enfin, les résultats sont là : -22 kg en 6 mois et une appétence pour le sport retrouvée ! Il ne reste plus qu’à fixer le prochain objectif qui, grâce à lui, sera clairement atteignable et surtout agréable à atteindre ! Foncez, je n’ai pas trouvé mieux ailleurs !",
  },
  {
    name: "David Thiolière",
    date: "Il y a 1 semaine",
    text: "Je recommande Camil à 100 %. Nous avons réalisé plusieurs séances avec ma fille Clémence, âgée de cinq ans, et l’expérience a été très positive. Camille sait parfaitement s’adapter aux enfants en se mettant à leur niveau. Son approche est à la fois ludique, bienveillante et efficace, ce qui permet aux enfants de participer avec plaisir. Un grand merci pour son professionnalisme et sa qualité d’accompagnement",
  },
  {
    name: "Guillaume Somont",
    date: "Il y a 1 semaine",
    text: "Suivis plus que personnalisé, très à l’écoute du projet et des programmes voulu. Très pro franchement allez y les yeux fermé 👍",
  },
  {
    name: "Kenzo Ronteau",
    date: "Il y a 4 jours",
    text: "Camil est un coach attentif, intéressé et sérieux, je recommande à 100%!",
  },
];

export default function Home() {
  const [socialsOpen, setSocialsOpen] = useState(false);

const reviewsRef = useRef<HTMLDivElement>(null);
const reviewsPauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
const reviewsScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
const [reviewsPaused, setReviewsPaused] = useState(false);

const pauseReviewsTemporarily = useCallback(() => {
  if (reviewsPauseTimeoutRef.current) {
    clearTimeout(reviewsPauseTimeoutRef.current);
  }

  setReviewsPaused(true);

  reviewsPauseTimeoutRef.current = setTimeout(() => {
    setReviewsPaused(false);
  }, 8000);
}, []);

const getReviewsMetrics = useCallback(() => {
  const container = reviewsRef.current;
  if (!container) return null;

  const firstCard = container.querySelector("article") as HTMLElement | null;
  if (!firstCard) return null;

  const styles = window.getComputedStyle(container);
  const rawGap = Number.parseFloat(styles.columnGap || styles.gap || "0");
  const gap = Number.isNaN(rawGap) ? 0 : rawGap;

  const cardWidth = firstCard.getBoundingClientRect().width || 320;
  const step = cardWidth + gap;
  const setWidth = googleReviews.length * step;

  return { container, step, setWidth };
}, []);

const normalizeReviewsScroll = useCallback(() => {
  const metrics = getReviewsMetrics();
  if (!metrics) return;

  const { container, setWidth } = metrics;

  if (container.scrollLeft >= setWidth) {
    container.scrollLeft = container.scrollLeft - setWidth;
  }

  if (container.scrollLeft < 0) {
    container.scrollLeft = container.scrollLeft + setWidth;
  }
}, [getReviewsMetrics]);

const moveReviews = useCallback(
  (direction: 1 | -1) => {
    const metrics = getReviewsMetrics();
    if (!metrics) return;

    const { container, step, setWidth } = metrics;

    if (direction === 1 && container.scrollLeft >= setWidth - step) {
      container.scrollLeft = container.scrollLeft - setWidth;
    }

    if (direction === -1 && container.scrollLeft <= 5) {
      container.scrollLeft = container.scrollLeft + setWidth;
    }

    container.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });

    if (reviewsScrollTimeoutRef.current) {
      clearTimeout(reviewsScrollTimeoutRef.current);
    }

    reviewsScrollTimeoutRef.current = setTimeout(() => {
      normalizeReviewsScroll();
    }, 700);
  },
  [getReviewsMetrics, normalizeReviewsScroll]
);

const handleManualReviewMove = useCallback(
  (direction: 1 | -1) => {
    pauseReviewsTemporarily();
    moveReviews(direction);
  },
  [pauseReviewsTemporarily, moveReviews]
);

useEffect(() => {
  if (reviewsPaused) return;

  const interval = setInterval(() => {
    moveReviews(1);
  }, 6500);

  return () => clearInterval(interval);
}, [reviewsPaused, moveReviews]);

useEffect(() => {
  return () => {
    if (reviewsPauseTimeoutRef.current) {
      clearTimeout(reviewsPauseTimeoutRef.current);
    }

    if (reviewsScrollTimeoutRef.current) {
      clearTimeout(reviewsScrollTimeoutRef.current);
    }
  };
}, []);

  return (
    
    <main className="min-h-screen bg-[#0B0D0F] text-[#F5F1EA]">

{/* Contact flottant */}
<div className="fixed bottom-5 left-5 z-50">
  <div className="flex items-center rounded-full border border-[#1A2228] bg-[#0B0D0F]/95 p-2 shadow-xl backdrop-blur-md">

    {/* BOUTON ME CONTACTER */}
    <button
      type="button"
      aria-label={socialsOpen ? "Fermer les moyens de contact" : "Ouvrir les moyens de contact"}
      aria-expanded={socialsOpen}
      aria-controls="social-contact-menu"
      onClick={() => setSocialsOpen(!socialsOpen)}
      className="flex shrink-0 items-center gap-3 rounded-full text-[#F5F1EA] transition"
    >
      {/* LOGO */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0B0D0F]">
        <Image
          src="/image/logo-icone.png"
          alt=""
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>

      {/* TEXTE */}
      <span className="whitespace-nowrap text-sm font-semibold">
        Me contacter
      </span>

      {/* + / × */}
      <span
        aria-hidden="true"
        className={`mr-2 text-xl font-light leading-none transition-transform duration-300 ${
          socialsOpen ? "rotate-45" : "rotate-0"
        }`}
      >
        +
      </span>
    </button>

    {/* RÉSEAUX */}
    <div
      id="social-contact-menu"
      className={`flex items-center overflow-hidden transition-all duration-300 ${
        socialsOpen
  ? "ml-2 max-w-[220px] gap-2 opacity-100"
  : "max-w-0 gap-0 opacity-0"
      }`}
    >
      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/camil_ppl/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#C7CED6] transition hover:bg-[#4F6D8A] hover:text-[#F5F1EA]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/camil-pieplu-344a61272/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#C7CED6] transition hover:bg-[#4F6D8A] hover:text-[#F5F1EA]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M6.94 8.75H3.75V20h3.19V8.75ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.6c0-3.02-1.61-4.42-3.76-4.42a3.23 3.23 0 0 0-2.92 1.6V8.75h-3.06V20h3.19v-5.56c0-1.47.28-2.9 2.1-2.9 1.8 0 1.82 1.68 1.82 3V20h3.19v-6.4h-.56Z" />
        </svg>
      </a>

{/* WHATSAPP */}
<a
  href="https://wa.me/33659332029"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#C7CED6] transition hover:bg-[#4F6D8A] hover:text-[#F5F1EA]"
>
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.33 5L2 22l5.12-1.34A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.51 22 12S17.56 2 12.04 2Zm0 18.17a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.17 8.17 0 1 1 12.04 20.17Zm4.48-6.12c-.25-.12-1.45-.71-1.68-.8-.22-.08-.38-.12-.54.13-.16.24-.63.79-.77.95-.14.17-.28.18-.52.06-.25-.12-1.03-.38-1.96-1.21a7.27 7.27 0 0 1-1.36-1.69c-.14-.24-.01-.37.11-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.25-.85.83-.85 2.02s.87 2.34.99 2.5c.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
  </svg>
</a>

      {/* EMAIL */}
      <a
        href="mailto:camilpieplu3@gmail.com"
        aria-label="E-mail"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#C7CED6] transition hover:bg-[#4F6D8A] hover:text-[#F5F1EA]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </a>
    </div>

  </div>
</div>

      {/* Hero - plein ecran avec image de fond */}
      <section className="relative min-h-[100svh] overflow-hidden">

        {/* Image de fond a droite */}
       <div className="absolute inset-y-0 right-0 w-[62%] lg:w-[45%]">
       <Image
  src="/image/image-de-fond.png"
  alt="Séance de coaching sportif avec Camil Pieplu à Lyon"
  fill
  sizes="(max-width: 1024px) 62vw, 45vw"
  className="object-cover object-[60%_center] lg:object-center"
  priority
/>

       <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/70 to-transparent lg:via-[#0B0D0F]/60" />
       </div>

        {/* Contenu par dessus l'image */}
        <div className="relative z-10 flex min-h-[100svh] flex-col px-5 sm:px-8 lg:px-6 lg:pl-16">

        <div className="min-[1700px]:origin-top-left min-[1700px]:scale-[1.12]">

          {/* Navbar */}
<nav className="pt-6 pb-0">
  <Image
    src="/image/logo-cp.png.png"
    alt="Camil Pieplu Coaching Premium"
    width={170}
    height={170}
    className="-translate-y-2 h-auto w-24 opacity-95 md:-translate-y-6 md:w-32 lg:w-40 xl:w-52"
  />
</nav>

          {/* Texte hero */}
          <div className="flex w-full flex-col justify-start pb-8 pt-4 min-[400px]:pt-8 lg:max-w-[65%] lg:pb-10 lg:pl-32 lg:pt-12">
            <p className="mb-6 mt-0 text-sm font-medium uppercase tracking-[0.18em] text-[#7E8B98] min-[400px]:mb-8 lg:-mt-24 lg:text-base lg:tracking-[0.22em] md:hidden">
  <span className="block">Préparateur physique</span>
  <span className="mt-1 block">Coach sportif</span>
  <span className="mt-1 block">Lyon</span>
</p>

<p className="mb-6 mt-0 hidden text-sm font-medium uppercase tracking-[0.18em] text-[#7E8B98] min-[400px]:mb-8 md:block lg:-mt-24 lg:text-base lg:tracking-[0.22em]">
  Préparateur physique &amp; coach sportif · Lyon
</p>

          <h1
  style={{ fontSize: "clamp(1.8rem, 3.5vw, 4rem)" }}
  className="max-w-5xl font-semibold leading-[1.1] md:leading-tight"
>
  <span className="block text-[#F5F1EA]">
    Coach sportif à Lyon
  </span>

  <span className="block text-[#C7CED6]">
    un accompagnement
  </span>

  <span className="block text-[#C7CED6]">
    construit autour de toi
  </span>
</h1>

            <div className="mt-8 space-y-4 text-base leading-8 text-[#C7CED6] md:mt-8 md:space-y-3 lg:text-lg lg:leading-8">
  <p>
    Préparation physique individuelle, coaching sportif et accompagnement nutritionnel.
  </p>

  <p>
    Une approche personnalisée, un suivi régulier et une stratégie qui évolue avec tes objectifs, tes résultats et ton quotidien.
  </p>
</div>

           <div className="mt-10 flex flex-col gap-4 pb-8 min-[400px]:mt-10 min-[400px]:pb-10 lg:mt-10 lg:flex-row lg:pb-10">
  <a
    href="https://calendly.com/camilpieplu/30min"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => { (window as any).gtag?.("event", "book_call_click") }}
    className="w-full rounded-full bg-[#4F6D8A] px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-[#5B7B99] sm:w-auto md:w-[240px] md:px-10 md:py-5 lg:w-auto"
  >
    Réserver un appel découverte
  </a>
</div>
            </div>
          </div>

        </div>
      </section>

     <motion.section
  id="univers"
  className="border-t border-[#E7E1D7] bg-[#F5F1EA] px-5 py-16 text-[#0B0D0F] md:px-12 md:py-24 lg:px-16 xl:px-20"
  initial={{ opacity: 0, y: 100, scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true }}
>
  <div className="mx-auto max-w-[1600px]">

    {/* Introduction */}
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#4F6D8A] md:text-sm">
        Deux approches · un accompagnement individualisé
      </p>

      <h2 className="text-3xl font-semibold leading-tight text-[#0B0D0F] md:text-4xl lg:text-5xl">
        Choisis l&apos;accompagnement
        <span className="block text-[#4F6D8A]">
          adapté à ton objectif
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#3A4652] md:text-lg md:leading-8">
        Que ton objectif concerne ton physique, ton quotidien ou ta pratique
        sportive, l&apos;accompagnement est construit autour de ton profil,
        de tes contraintes et de ta progression.
      </p>
    </div>

    {/* Les deux univers */}
    <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">

      {/* Accompagnements personnalisés */}
      <article className="flex h-full flex-col rounded-[2rem] border border-[#D8D0C4] bg-[#FBF8F2] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

        {/* Zone haute */}
        <div className="lg:min-h-[230px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4F6D8A] md:text-sm">
            Accompagnements personnalisés
          </p>

          <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#0B0D0F] md:text-3xl">
            Construire une stratégie
            <span className="block">
              autour de toi
            </span>
          </h3>

          <p className="mt-6 text-base leading-7 text-[#3A4652] md:text-lg md:leading-8">
            Pour améliorer ton physique, ta forme et ton quotidien grâce à un
            suivi construit autour de tes objectifs, de ton niveau et de tes
            contraintes.
          </p>
        </div>

        {/* Points */}
        <div className="mt-6 flex flex-col justify-center gap-4 border-y border-[#DDD5CA] py-7 lg:h-[220px]">

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F6D8A]" />
            <p className="font-medium text-[#0B0D0F]">
              Coaching sportif
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F6D8A]" />
            <p className="font-medium text-[#0B0D0F]">
              Accompagnement nutritionnel
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4F6D8A]" />
            <p className="font-medium text-[#0B0D0F]">
              Accompagnement physique &amp; nutrition
            </p>
          </div>

        </div>

        {/* Modalités */}
        <p className="pt-7 text-xs font-medium uppercase leading-6 tracking-[0.12em] text-[#65717C] md:text-sm">
  <span className="block md:inline">
    À distance · En salle/terrain
  </span>
  <span className="block md:inline">
    <span className="hidden md:inline"> · </span>
    À domicile · Hybride
  </span>
</p>

      </article>

      {/* Préparation physique */}
      <article className="flex h-full flex-col rounded-[2rem] border border-[#1A2228] bg-[#0B0D0F] p-7 text-[#F5F1EA] shadow-xl transition duration-300 hover:-translate-y-1 md:p-10">

        {/* Zone haute */}
        <div className="lg:min-h-[230px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7E9AB5] md:text-sm">
            Préparation physique
          </p>

          <h3 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
            <span className="md:whitespace-nowrap">
              Mesurer. Comprendre.{" "}
              <span className="text-[#C7CED6]">Programmer.</span>
            </span>
          </h3>

          <p className="mt-6 text-base leading-7 text-[#C7CED6] md:text-lg md:leading-8">
            Une préparation physique individuelle construite à partir de ton
            sport, de ton profil et de tes objectifs. Des tests physiques
            permettent d&apos;identifier les priorités de travail et
            d&apos;orienter la programmation.
          </p>
        </div>

        {/* Points */}
        <div className="mt-6 flex flex-col justify-center gap-4 border-y border-[#26323A] py-7 lg:h-[220px]">

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7E9AB5]" />
            <p className="font-medium">
              Tests physiques
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7E9AB5]" />
            <p className="font-medium">
              Programmation individualisée
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7E9AB5]" />
            <p className="font-medium">
              Suivi de la charge d&apos;entraînement
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7E9AB5]" />
            <p className="font-medium">
              Réathlétisation
            </p>
          </div>

        </div>

        {/* Modalités */}
        <p className="pt-7 text-xs font-medium uppercase leading-6 tracking-[0.12em] text-[#8996A1] md:text-sm">
          <span className="block md:inline">
            À distance · En salle/terrain
          </span>
          <span className="block md:inline">
            <span className="hidden md:inline"> · </span>
            À domicile · Hybride
          </span>
        </p>

      </article>

    </div>

  </div>
</motion.section>

{/* Avis Google */}
<section
  id="avis"
  className="overflow-hidden bg-[#080D0F] py-16 text-[#F5F1EA] md:py-20"
>
 <div className="mx-auto grid w-full max-w-[1700px] gap-8 px-5 sm:px-8 md:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:gap-8 lg:px-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-10 xl:px-12 2xl:max-w-[1800px]">

    {/* Introduction fixe et cliquable */}
<a
  href="https://maps.app.goo.gl/KmbVS3RwrMrNZQ1eA"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Voir tous les avis Google de Camil Pieplu Coaching"
  className="group block rounded-3xl"
>
  <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#7E8B98]">
  Avis Google
</p>

  <h2 className="text-3xl font-semibold leading-tight text-[#F5F1EA] md:text-[2rem] xl:text-4xl">
    <span className="block whitespace-nowrap">
      Ils en parlent
    </span>

    <span className="block whitespace-nowrap">
      mieux que moi
    </span>
  </h2>

<p className="mt-5 max-w-[260px] text-sm leading-6 text-[#7E8B98]">
  Coaching sportif, préparation physique et accompagnement à distance :
  <br />
  Des objectifs différents, avec la même exigence de suivi.
</p>

  <div className="mt-7 text-2xl tracking-[0.22em] text-[#D6A936] md:text-3xl">
    ★★★★★
  </div>

  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7E8B98] transition group-hover:translate-x-1 group-hover:text-[#F5F1EA]">
    Voir tous les avis Google
    <span aria-hidden="true">↗</span>
  </div>
</a>

    {/* Avis défilants */}
    <div className="relative min-w-0 overflow-hidden">

      {/* Dégradés sur les côtés */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#080D0F] to-transparent md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#080D0F] to-transparent md:w-16" />

     {/* Flèches desktop / tablette */}
<button
  type="button"
  aria-label="Avis précédent"
  onClick={() => handleManualReviewMove(-1)}
  className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#1A2228] bg-[#0B0D0F]/90 text-2xl text-[#F5F1EA] backdrop-blur transition hover:bg-[#4F6D8A] md:flex"
>
  ‹
</button>

<button
  type="button"
  aria-label="Avis suivant"
  onClick={() => handleManualReviewMove(1)}
  className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#1A2228] bg-[#0B0D0F]/90 text-2xl text-[#F5F1EA] backdrop-blur transition hover:bg-[#4F6D8A] md:flex"
>
  ›
</button>

<div
  ref={reviewsRef}
  onMouseEnter={() => setReviewsPaused(true)}
  onMouseLeave={() => setReviewsPaused(false)}
  onTouchStart={pauseReviewsTemporarily}
  className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-smooth pr-12 [-ms-overflow-style:none] [scrollbar-width:none] lg:max-[1400px]:gap-4 [&::-webkit-scrollbar]:hidden"
>
  {[...googleReviews, ...googleReviews, ...googleReviews, ...googleReviews, ...googleReviews].map((review, index) => (
    <article
      key={`${review.name}-${index}`}
      className="w-[285px] shrink-0 snap-start rounded-3xl border border-[#1A2228] bg-[#0D1317] p-6 sm:w-[340px] md:max-lg:w-[280px] md:max-lg:p-5 lg:max-[1400px]:w-[285px] lg:max-[1400px]:p-5"
    >
      <div className="mb-4 text-sm tracking-[0.15em] text-[#D6A936]">
        ★★★★★
      </div>

      <p className="text-base leading-7 text-[#C7CED6]">
        “{review.text}”
      </p>

      <div className="mt-6 border-t border-[#1A2228] pt-4">
        <p className="font-semibold text-[#F5F1EA]">
          {review.name}
        </p>

        <p className="mt-1 text-sm text-[#7E8B98]">
          {review.date}
        </p>
      </div>
    </article>
  ))}
</div>
</div>
  </div>
</section>

      <section
  id="fonctionnement"
  className="bg-[#080D0F] px-6 pb-20 pt-16 text-[#F5F1EA] md:px-12 md:pb-24 md:pt-20 lg:px-16 xl:px-20"
>
  <div className="mx-auto max-w-[1320px]">

    {/* Introduction */}
    <div className="max-w-5xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#7E8B98]">
        Comment ça fonctionne
      </p>

      <h2 className="text-[2.1rem] font-semibold leading-tight md:text-5xl lg:text-[3.4rem]">
  <span className="block whitespace-nowrap">
    Un accompagnement
  </span>

  <span className="block text-[#C7CED6]">
    qui évolue avec toi
  </span>
</h2>

      <p className="mt-8 max-w-4xl text-lg leading-8 text-[#C7CED6]">
        Pas de programme figé. Chaque accompagnement est construit à partir de
        ton profil, de tes objectifs et de tes contraintes, puis ajusté au fil
        de ta progression.
      </p>
    </div>

    {/* Étapes */}
    <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-[0.9fr_1fr_0.9fr]">

  {/* Étape 1 */}
  <div className="flex h-full flex-col rounded-3xl border border-[#D8D0C4] bg-[#FBF8F2] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4F6D8A]">
      01
    </p>

    <h3 className="mt-4 text-2xl font-semibold text-[#4F6D8A]">
      Bilan &amp; stratégie
    </h3>

    <div className="mt-6 border-t border-[#DDD5CA] pt-6 max-w-[85%]">
      <p className="leading-7 text-[#3A4652]">
        On fait le point sur ton objectif, ton niveau, ton historique, ton
        organisation et tes contraintes. Lorsque c&apos;est pertinent, des
        tests physiques permettent aussi d&apos;objectiver ton profil et tes
        priorités.
      </p>
    </div>
  </div>

  {/* Étape 2 */}
  <div className="flex h-full flex-col rounded-3xl border border-[#D8D0C4] bg-[#FBF8F2] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4F6D8A]">
      02
    </p>

    <h3 className="mt-4 text-2xl font-semibold text-[#4F6D8A]">
  Programmation individualisée
</h3>

    <div className="mt-6 border-t border-[#DDD5CA] pt-6 max-w-[85%]">
      <p className="leading-7 text-[#3A4652]">
        Je construis une stratégie adaptée à ton besoin : entraînement,
        préparation physique ou nutrition. Chaque choix est pensé pour être
        cohérent avec ton quotidien et ton objectif.
      </p>
    </div>
  </div>

  {/* Étape 3 */}
  <div className="flex h-full flex-col rounded-3xl border border-[#D8D0C4] bg-[#FBF8F2] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4F6D8A]">
      03
    </p>

    <h3 className="mt-4 text-2xl font-semibold text-[#4F6D8A]">
      Suivi &amp; ajustements
    </h3>

    <div className="mt-6 border-t border-[#DDD5CA] pt-6 max-w-[85%]">
      <p className="leading-7 text-[#3A4652]">
        Bilans réguliers, échanges faciles pendant la semaine, adaptations
        selon tes retours et tes résultats, avec une visio mensuelle pour
        prendre du recul et ajuster la suite.
      </p>
    </div>
  </div>

</div>

    {/* Message fort */}
    <div className="mx-auto mt-16 max-w-4xl text-center">
      <p className="text-xl font-semibold leading-8 text-[#F5F1EA] md:text-2xl md:leading-9">
        Tu ne repars pas simplement avec un programme.
      </p>

      <p className="mt-2 text-xl font-semibold leading-8 text-[#4F6D8A] md:text-2xl md:leading-9">
        L&apos;accompagnement évolue avec toi.
      </p>

      <div className="mt-10 flex justify-center">
        <a
          href="https://calendly.com/camilpieplu/30min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            (window as any).gtag?.("event", "book_call_click")
          }}
          className="w-full rounded-full bg-[#4F6D8A] px-8 py-5 text-center text-base font-semibold text-white transition hover:bg-[#5B7B99] sm:w-auto md:px-14 md:py-6 md:text-lg"
        >
          Réserver un appel découverte
        </a>
      </div>
    </div>

  </div>
</section>

{/* À PROPOS */}
<section
  id="a-propos"
  className="bg-[#F5F1EA] px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24 lg:px-16 lg:pb-20 lg:pt-28 xl:px-20"
>
  <div className="mx-auto max-w-[1240px]">
    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

      {/* PHOTO */}
      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
          <Image
            src="/image/camil-about.jpg"
            alt="Camil Pieplu, préparateur physique et coach sportif à Lyon"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* TEXTE */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6D8A]">
          À propos
        </p>

        <h2 className="max-w-[720px] text-[2.4rem] font-semibold leading-[1.08] text-[#0B0D0F] md:text-5xl lg:text-[3.4rem]">
          Une méthode construite
          <span className="block text-[#4F6D8A]">
            autour de toi.
          </span>
        </h2>

        <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.8] text-[#3A4652]">

          <p className="text-[1.08rem] font-medium text-[#0B0D0F]">
            Hello, moi c’est Camil, préparateur physique & coach sportif à Lyon.
          </p>

          <p>
            Mon approche repose sur une idée simple :{" "}
            <strong className="font-semibold text-[#0B0D0F]">
              te comprendre
            </strong>
            , comprendre ton objectif et tes contraintes avant de construire quoi
            que ce soit.
          </p>

          <p>
            Depuis 5 ans, mon parcours et mes expériences m’ont beaucoup appris.
            Ils m’ont permis de construire ma propre méthode de coaching basée sur{" "}
            <strong className="font-semibold text-[#0B0D0F]">
              l'échange, les tests et les données
            </strong>
            , afin de créer une programmation réellement adaptée et individualisée.
          </p>

          <p>
            Aujourd’hui, j’accompagne les personnes qui souhaitent améliorer leur{" "}
            <strong className="font-semibold text-[#0B0D0F]">
              condition physique
            </strong>
            , retrouver de{" "}
            <strong className="font-semibold text-[#0B0D0F]">
              l’énergie
            </strong>{" "}
            ou mieux performer dans leur{" "}
            <strong className="font-semibold text-[#0B0D0F]">
              sport
            </strong>
            .
          </p>
        </div>

        {/* PREUVES */}
        <div className="mt-10 border-t border-[#D8D0C4] pt-8">
          <div className="grid gap-7 sm:grid-cols-3 sm:gap-6 lg:grid-cols-[1fr_1.35fr_0.9fr]">

  {/* MASTER */}
  <div className="sm:pr-6">
    <p className="whitespace-nowrap font-semibold text-[#0B0D0F]">
      Master STAPS
    </p>

    <p className="mt-1 text-[0.95rem] leading-relaxed text-[#69737C]">
      <span className="whitespace-nowrap">
        Entraînement & optimisation
      </span>
      <br />
      de la performance
    </p>
  </div>

  {/* EXPÉRIENCES */}
  <div className="sm:border-l sm:border-[#D8D0C4] sm:px-6">
    <p className="whitespace-nowrap font-semibold text-[#0B0D0F]">
      Préparateur physique
    </p>

    <p className="mt-1 text-[0.95rem] leading-relaxed text-[#69737C]">
      <span className="whitespace-nowrap">
        Force athlétique · Haltérophilie
      </span>
      <br />
      Football · Tennis
    </p>
  </div>

  {/* BF1 */}
  <div className="sm:border-l sm:border-[#D8D0C4] sm:pl-6">
    <p className="whitespace-nowrap font-semibold text-[#0B0D0F]">
      BF1 Haltérophilie
    </p>

    <p className="mt-1 text-[0.95rem] leading-relaxed text-[#69737C]">
      Entraînement  compétition
    </p>
  </div>

</div>
        </div>

        {/* LIEN */}
        <a
  href="/a-propos"
  className="mt-6 inline-flex items-center gap-2 text-[1.02rem] font-semibold text-[#4F6D8A] transition-all duration-300 hover:gap-3"
>
          Découvrir mon parcours
          <span aria-hidden="true">→</span>
        </a>
      </div>

    </div>
  </div>
</section>

{/* CONTACT FINAL */}
<section
  id="contact"
  className="bg-[#080D0F] px-6 py-20 text-[#F5F1EA] md:px-12 md:py-24 lg:px-16 lg:py-28 xl:px-20"
>
  <div className="mx-auto max-w-[1240px]">

    <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">

      {/* TEXTE */}
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6D8A]">
          Contact
        </p>

        <h2 className="max-w-[650px] text-[2.5rem] font-semibold leading-[1.08] md:text-5xl lg:text-[3.5rem]">
          Échangeons sur
          <span className="block text-[#C7CED6]">
            ton objectif.
          </span>
        </h2>
      </div>

      <div className="max-w-[560px] lg:justify-self-end">
        <p className="text-[1.05rem] leading-[1.8] text-[#C7CED6]">
          Une question sur un accompagnement, la préparation physique ou
          simplement envie d’échanger sur ton objectif ?
          <span className="text-[#F5F1EA]">
            {" "}Écris-moi directement sur le canal qui te convient le mieux.
          </span>
        </p>
      </div>

    </div>

    {/* CONTACTS */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/33659332029"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-[20px] border border-white/10 bg-[#111518] px-6 py-5 transition duration-300 hover:border-[#4F6D8A] hover:bg-[#151B20]"
      >
        <div>
          <p className="text-sm text-[#89939B]">
            Échange direct
          </p>

          <p className="mt-1 text-lg font-semibold text-[#F5F1EA]">
            WhatsApp
          </p>
        </div>

        <span className="text-xl text-[#4F6D8A] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/camil_ppl/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-[20px] border border-white/10 px-6 py-5 transition duration-300 hover:border-[#4F6D8A] hover:bg-white/5"
      >
        <div>
          <p className="text-sm text-[#89939B]">
            Réseaux
          </p>

          <p className="mt-1 text-lg font-semibold text-[#F5F1EA]">
            Instagram
          </p>
        </div>

        <span className="text-xl text-[#4F6D8A] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/camil-pieplu-344a61272/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-[20px] border border-white/10 px-6 py-5 transition duration-300 hover:border-[#4F6D8A] hover:bg-white/5"
      >
        <div>
          <p className="text-sm text-[#89939B]">
            Professionnel
          </p>

          <p className="mt-1 text-lg font-semibold text-[#F5F1EA]">
            LinkedIn
          </p>
        </div>

        <span className="text-xl text-[#4F6D8A] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* EMAIL */}
      <a
        href="mailto:camilpieplu3@gmail.com"
        className="group flex items-center justify-between rounded-[20px] border border-white/10 px-6 py-5 transition duration-300 hover:border-[#4F6D8A] hover:bg-white/5"
      >
        <div>
          <p className="text-sm text-[#89939B]">
            Par e-mail
          </p>

          <p className="mt-1 text-lg font-semibold text-[#F5F1EA]">
            M’écrire
          </p>
        </div>

        <span className="text-xl text-[#4F6D8A] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 bg-[#080D0F] px-6 pb-10 pt-14 text-[#F5F1EA] md:px-12 lg:px-16 xl:px-20">
  <div className="mx-auto max-w-[1240px]">

    <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_0.8fr_1fr]">

      {/* IDENTITÉ */}
      <div>
        <p className="text-xl font-semibold">
          Camil Pieplu
        </p>

        <p className="mt-2 max-w-[340px] text-sm leading-relaxed text-[#89939B]">
        Préparation physique & coaching sportif,
        <br />
         à distance et en présentiel.
        </p>
      </div>

      {/* NAVIGATION */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F6D8A]">
          Navigation
        </p>

        <nav className="mt-5 flex flex-col gap-3 text-sm text-[#C7CED6]">
          <a href="/" className="transition hover:text-[#F5F1EA]">
            Accueil
          </a>

          <a
            href="#fonctionnement"
            className="transition hover:text-[#F5F1EA]"
          >
            Comment ça fonctionne
          </a>

          <a
            href="#a-propos"
            className="transition hover:text-[#F5F1EA]"
          >
            À propos
          </a>

          <a
            href="#contact"
            className="transition hover:text-[#F5F1EA]"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* LÉGAL */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F6D8A]">
          Informations légales
        </p>

        <nav className="mt-5 flex flex-col gap-3 text-sm text-[#C7CED6]">
          <a
            href="/mentions-legales"
            className="transition hover:text-[#F5F1EA]"
          >
            Mentions légales
          </a>

          <a
            href="/politique-confidentialite"
            className="transition hover:text-[#F5F1EA]"
          >
            Politique de confidentialité
          </a>

          <a
            href="/cgv"
            className="transition hover:text-[#F5F1EA]"
          >
            Conditions générales de vente
          </a>

          <a
            href="/politique-cookies"
            className="transition hover:text-[#F5F1EA]"
          >
            Politique de cookies
          </a>
          <button
  type="button"
  onClick={() =>
    window.dispatchEvent(
      new Event("open-cookie-settings")
    )
  }
  className="text-left transition hover:text-[#F5F1EA]"
>
  Gérer mes cookies
</button>
        </nav>
      </div>

    </div>

    {/* BAS DU FOOTER */}
    <div className="flex flex-col gap-3 pt-7 text-xs text-[#69737C] sm:flex-row sm:items-center sm:justify-between">
      <p>
        © 2026 Camil Pieplu. Tous droits réservés.
      </p>

      <p>
        Entrepreneur individuel · Lyon, France
      </p>
    </div>

  </div>
</footer>

    </main>
  );
}


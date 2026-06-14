"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"

const googleReviews = [
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
];

export default function Home() {
  const [socialsOpen, setSocialsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0D0F] text-[#F5F1EA]">

{/* Réseaux sociaux flottants */}
<div className="fixed bottom-5 left-5 z-50 flex group">
  <div className="flex items-center gap-0 rounded-full border border-[#1A2228] bg-[#0B0D0F]/90 p-2 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:gap-3">
   <button
  type="button"
  aria-label="Ouvrir les réseaux sociaux"
  aria-expanded={socialsOpen}
  onClick={() => setSocialsOpen(!socialsOpen)}
  className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0B0D0F] transition hover:bg-[#111820]"
>
  <Image
    src="/image/logo-icone.png"
    alt="Camil Pieplu"
    width={56}
    height={56}
    className="h-full w-full object-cover"
  />
</button>

    <div
  className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${
    socialsOpen ? "ml-2 max-w-[180px] opacity-100" : "max-w-0 opacity-0"
  } [@media(hover:hover)]:group-hover:ml-2 [@media(hover:hover)]:group-hover:max-w-[180px] [@media(hover:hover)]:group-hover:opacity-100`}
>
  <a
    href="https://www.instagram.com/camil_ppl/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full text-[#C7CED6] transition hover:bg-[#4F6D8A] hover:text-[#F5F1EA]"
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
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  </a>

  <a
    href="https://www.linkedin.com/in/camil-pieplu-344a61272/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-10 w-10 items-center justify-center rounded-full text-[#C7CED6] transition hover:bg-[#4F6D8A] hover:text-[#F5F1EA]"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M6.94 8.75H3.75V20h3.19V8.75ZM5.35 4a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7ZM20.25 13.6c0-3.02-1.61-4.42-3.76-4.42a3.23 3.23 0 0 0-2.92 1.6V8.75h-3.06V20h3.19v-5.56c0-1.47.28-2.9 2.1-2.9 1.8 0 1.82 1.68 1.82 3V20h3.19v-6.4h-.56Z" />
    </svg>
  </a>

  <a
    href="mailto:camilpieplu3@gmail.com"
    aria-label="Email"
    className="flex h-10 w-10 items-center justify-center rounded-full text-[#C7CED6] transition hover:bg-[#4F6D8A] hover:text-[#F5F1EA]"
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
       alt="background sport"
       fill
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
            <p className="mb-6 mt-0 text-sm font-medium uppercase tracking-[0.18em] text-[#7E8B98] min-[400px]:mb-8 lg:-mt-24 lg:text-base lg:tracking-[0.22em]">
              Coach sportif premium · Lyon
            </p>

          <h1
           style={{ fontSize: "clamp(1.8rem, 3.5vw, 4rem)" }}
           className="max-w-5xl font-semibold leading-tight"
           >
           Un accompagnement sportif
           <br className="hidden md:block" />{" "}
           pensé pour toi
          <br className="hidden md:block" />{" "}
           et ton emploi du temps
          </h1>

            <p className="mt-6 text-base leading-7 text-[#C7CED6] min-[400px]:mt-8 lg:mt-8 lg:text-lg lg:leading-8">
            J&apos;aide les cadres et entrepreneurs à transformer et reprendre le contrôle
            de leur corps en 90 jours
           <br className="hidden md:block" />{" "}
           grâce à un accompagnement structuré, personnalisé et adapté à leur emploi du temps chargé
           <br className="hidden md:block" />{" "}
           sans passer des heures à la salle ni suivre des méthodes compliquées
         </p>

           <div className="mt-8 flex flex-col gap-4 pb-8 min-[400px]:mt-10 min-[400px]:pb-10 lg:mt-10 lg:flex-row lg:pb-10">
  <a
    href="https://calendly.com/camilpieplu/30min"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => { (window as any).gtag?.("event", "book_call_click") }}
    className="w-full rounded-full bg-[#4F6D8A] px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-[#5B7B99] sm:w-auto md:w-[240px] md:px-10 md:py-5 lg:w-auto"
  >
    Réserve un appel
  </a>
</div>
            </div>
          </div>

        </div>
      </section>

      <motion.section
  id="freins"
  className="border-t border-[#E7E1D7] bg-[#F5F1EA] px-5 py-16 text-[#0B0D0F] md:px-12 md:py-24 lg:px-16 xl:px-20 lg:max-[1400px]:pt-10 lg:max-[1400px]:pb-12 md:max-lg:py-12 [@media(min-width:1024px)_and_(max-height:850px)]:pt-8 [@media(min-width:1024px)_and_(max-height:850px)]:pb-10"
  initial={{ opacity: 0, y: 120, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true }}
>
  <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20">
    {/* Partie gauche */}
    <div>
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.28em] text-[#0B0D0F]">
        Ce qui te freine
      </p>

      <h2 className="text-3xl font-semibold leading-tight text-[#4F6D8A] md:text-4xl lg:text-5xl lg:max-[1400px]:text-[2.4rem] lg:max-[1400px]:leading-[1.15] max-[639px]:text-[1.55rem] max-[639px]:leading-[1.18] [@media(min-width:1024px)_and_(max-height:850px)]:text-[2.15rem] [@media(min-width:1024px)_and_(max-height:850px)]:leading-[1.1]">
  <span className="block whitespace-nowrap">
    Tu veux te remettre en forme,
  </span>
  <span className="block whitespace-nowrap">
    mais tu manques de temps
  </span>
</h2>

      <div className="mx-auto mt-7 max-w-[620px] overflow-hidden rounded-3xl shadow-xl md:mt-9 lg:max-[1400px]:max-w-[520px] md:max-lg:max-w-[520px] md:max-lg:mt-6[@media(min-width:1200px)_and_(max-height:850px)]:mt-6 [@media(min-width:1200px)_and_(max-height:850px)]:max-w-[500px]">
  <Image
    src="/image/coaching-seance.jpg"
    alt="Camil en séance de coaching sportif"
    width={1100}
    height={650}
    className="h-auto w-full"
  />
</div>
    </div>

    {/* Partie droite */}
   <div className="space-y-8 text-base leading-7 text-[#3A4652] md:space-y-10 md:text-lg md:leading-8 lg:max-[1400px]:space-y-6 lg:max-[1400px]:text-base lg:max-[1400px]:leading-7 lg:max-[1400px]:pt-[115px][@media(min-width:1200px)_and_(max-height:850px)]:space-y-5 [@media(min-width:1200px)_and_(max-height:850px)]:text-base [@media(min-width:1200px)_and_(max-height:850px)]:leading-7 [@media(min-width:1200px)_and_(max-height:850px)]:pt-[80px]">
  <div className="border-l border-[#C9BFAF] pl-6">
    <p className="mb-2 text-base font-bold uppercase tracking-[0.18em] text-[#4F6D8A]">
      Manque de temps
    </p>
    <p>
      Tes journées sont déjà pleines, et le sport passe toujours après le reste.
    </p>
  </div>

  <div className="border-l border-[#C9BFAF] pl-6">
    <p className="mb-2 text-base font-bold uppercase tracking-[0.18em] text-[#4F6D8A]">
      Douleurs &amp; tensions
    </p>
    <p>
      Dos, nuque, poignets, genoux : ton corps encaisse ton rythme quotidien.
    </p>
  </div>

  <div className="border-l border-[#C9BFAF] pl-6">
    <p className="mb-2 text-base font-bold uppercase tracking-[0.18em] text-[#4F6D8A]">
      Énergie &amp; fatigue
    </p>
    <p>
      Tu te réveilles déjà fatigué, tu manques d&apos;énergie dans la journée et
      le moindre effort te paraît plus difficile qu&apos;avant.
    </p>
  </div>

        <div className="border-l border-[#C9BFAF] pl-6">
        <p className="mb-2 text-base font-bold uppercase tracking-[0.18em] text-[#4F6D8A]">
          Nutrition compliquée
        </p>
        <p>
          Repas sautés, choix rapides, manque d&apos;organisation : tu fais des
          efforts, mais sans plan clair, les résultats ne suivent pas.
        </p>
      </div>
    </div>
  </div>

  <div className="mx-auto mt-12 flex flex-col items-center text-center">
  <p className="text-xl font-semibold leading-8 text-[#0B0D0F] md:text-2xl md:leading-9">
    Ils ont commencé avec les mêmes freins
  </p>

  <p className="mt-2 text-base leading-7 text-[#3A4652] md:text-lg">
    Aujourd&apos;hui, ils avancent avec une méthode adaptée à leur rythme
  </p>

  <a
    href="#avis"
    onClick={() => {
      (window as any).gtag?.("event", "view_reviews_click")
    }}
    className="mt-8 inline-flex min-w-[260px] items-center justify-center rounded-full bg-[#4F6D8A] px-12 py-5 text-lg font-bold text-[#F5F1EA] shadow-xl shadow-black/15 transition hover:bg-[#0B0D0F] lg:max-[1400px]:mt-6 lg:max-[1400px]:min-w-[220px] lg:max-[1400px]:px-10 lg:max-[1400px]:py-4 lg:max-[1400px]:text-base [@media(min-width:1024px)_and_(max-height:850px)]:mt-5 [@media(min-width:1024px)_and_(max-height:850px)]:min-w-[200px] [@media(min-width:1024px)_and_(max-height:850px)]:px-8 [@media(min-width:1024px)_and_(max-height:850px)]:py-3 [@media(min-width:1024px)_and_(max-height:850px)]:text-sm"
  >
    Voir leurs avis
  </a>
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

      <motion.div
  className="flex w-max items-start gap-5 lg:max-[1400px]:gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...googleReviews, ...googleReviews].map((review, index) => (
          <article
            key={`${review.name}-${index}`}
            className="w-[285px] shrink-0 rounded-3xl border border-[#1A2228] bg-[#0D1317] p-6 sm:w-[340px] md:max-lg:w-[280px] md:max-lg:p-5 lg:max-[1400px]:w-[285px] lg:max-[1400px]:p-5"
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
      </motion.div>
    </div>
  </div>
</section>

      <section
  id="accompagnement"
  className="bg-[#080D0F] px-6 pb-20 pt-12 text-[#F5F1EA] md:pb-24 md:pt-14 lg:max-[1400px]:pt-8 lg:max-[1400px]:pb-6 [@media(min-width:1024px)_and_(max-height:850px)]:pt-4"
>
        <div className="mx-auto max-w-6xl">

          <div className="max-w-6xl">
  <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#7E8B98]">
    Ton accompagnement
  </p>

  <h2 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.4rem] lg:max-[1400px]:text-[2.55rem] lg:max-[1400px]:leading-[1.12] [@media(min-width:1024px)_and_(max-height:850px)]:text-[2.25rem] [@media(min-width:1024px)_and_(max-height:850px)]:leading-[1.08]">
  Un accompagnement pensé
  <br />
  pour obtenir des résultats durables
</h2>

  <p className="mt-8 max-w-6xl text-lg leading-8 text-[#C7CED6]">
    Pas de programme générique, 
    <br />
    chaque accompagnement est construit autour de ton rythme, de tes contraintes et de tes objectifs, pour avancer avec une méthode adaptée.
  </p>
</div>

<div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:max-[1400px]:mt-10 lg:max-[1400px]:gap-6">
  <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">

    <h3 className="text-2xl font-semibold text-[#F5F1EA]">
      Bilan &amp; stratégie
    </h3>

    <p className="mt-6 leading-7 text-[#C7CED6]">
      On part de ton emploi du temps, ton niveau actuel, tes douleurs éventuelles
      et tes objectifs pour construire un plan réaliste.
    </p>
  </div>

  <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">

    <h3 className="text-2xl font-semibold text-[#F5F1EA]">
      Programme personnalisé
    </h3>

    <p className="mt-6 leading-7 text-[#C7CED6]">
      Des séances construites selon ton niveau, tes objectifs et ton emploi du
      temps, avec le matériel nécessaire fourni à chaque séance.
    </p>
  </div>

  <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">

    <h3 className="text-2xl font-semibold text-[#F5F1EA]">
      Suivi &amp; ajustements
    </h3>

    <p className="mt-6 leading-7 text-[#C7CED6]">
      On ajuste ton entraînement, ton alimentation et ton organisation au fil
      des semaines pour garder le cap.
    </p>
  </div>
</div>

          <div className="mt-16 [@media(min-width:1024px)_and_(max-height:850px)]:mt-10">
  <p className="mx-auto mt-16 max-w-4xl text-center text-xl font-semibold leading-8 text-[#C7CED6] md:text-2xl md:leading-9 [@media(min-width:1024px)_and_(max-height:850px)]:mt-10 [@media(min-width:1024px)_and_(max-height:850px)]:text-lg [@media(min-width:1024px)_and_(max-height:850px)]:leading-8">
    Mes accompagnements s’adressent aux personnes prêtes à avancer sérieusement,
    avec une méthode adaptée à leur rythme et à leur quotidien.
  </p>
            <div className="mt-10 flex justify-center lg:max-[1400px]:mt-6 [@media(min-width:1024px)_and_(max-height:850px)]:mt-5">
  <a
    href="https://calendly.com/camilpieplu/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full rounded-full bg-[#4F6D8A] px-8 py-5 text-center text-base font-semibold text-white transition hover:bg-[#5B7B99] sm:w-auto md:px-14 md:py-6 md:text-lg lg:max-[1400px]:px-10 lg:max-[1400px]:py-4 lg:max-[1400px]:text-base [@media(min-width:1024px)_and_(max-height:850px)]:px-8 [@media(min-width:1024px)_and_(max-height:850px)]:py-3 [@media(min-width:1024px)_and_(max-height:850px)]:text-sm"
  >
                Réserve un appel
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

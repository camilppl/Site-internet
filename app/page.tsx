"use client";

import { motion } from "framer-motion";
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D0F] text-[#F5F1EA]">
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 md:py-20">

      <Image
  src="/image/logo-cp.png.png"
  alt="Camil Pieplu Coaching Premium"
  width={170}
  height={170}
  className="absolute left-4 top-6 h-auto w-24 opacity-95 md:top-4 md:-left-60 md:w-48"
/>
  
        <p className="mt-16 mb-6 text-base font-medium uppercase tracking-[0.22em] text-[#7E8B98] md:mt-0">
          Coach sportif premium · Lyon
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-7xl">
          Un accompagnement sportif
          <br />
          pensé pour toi
          <br />
          et ton emploi du temps
        </h1>

        <p className="mt-6 max-w-4xl text-base leading-7 text-[#C7CED6] md:mt-8 md:text-lg md:leading-8">
          J’aide les cadres et entrepreneurs à transformer et reprendre le contrôle
          de leur corps en 90 jours
          <br />
          grâce à un accompagnement structuré, personnalisé et adapté à leur emploi du temps chargé
          <br />
          sans passer des heures à la salle ni suivre des méthodes compliquées
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
  href="https://calendly.com/camilpieplu/30min"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
  (window as any).gtag?.('event', 'book_call_click')
}}
  className="rounded-full bg-[#4F6D8A] px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#5B7B99]"
>
  Réserver un appel
</a>

          <a
  href="#accompagnement"
 onClick={() => {
  (window as any).gtag?.('event', 'view_offer_click')
}}
  className="rounded-full border border-[#2E3945] px-8 py-4 text-center text-sm font-semibold text-[#F5F1EA] transition"
>
            Voir l’accompagnement
          </a>
        </div>
      </section>

      <motion.section
  id="histoire"
  className="border-t border-[#E7E1D7] bg-[#F5F1EA] px-6 py-28 text-[#0B0D0F]"
  initial={{ opacity: 0, y: 120, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true }}
>
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-[220px_440px_1fr] md:items-start ">

    {/* Image */}
    <div className="flex justify-center md:block md:-ml-[250px]">
      <Image
        src="/image/camil-about.jpg"
        alt="Camil coach sportif"
        width={220}
        height={280}
        className="rounded-3xl object-cover shadow-xl"
      />
    </div>

    {/* Titres */}
<div className="md:-ml-[225px]">
  <p className="mb-6 text-lg font-medium uppercase tracking-[0.22em] text-[#0B0D0F]">
    Mon histoire
  </p>
  <h2 className="text-4xl font-semibold leading-tight text-[#4F6D8A] md:text-5xl mt-[30px]">
    J'ai créé l'accompagnement
    <br />
    que j'aurais aimé avoir
  </h2>
</div>

    {/* Texte */}
    <div className="space-y-6 text-lg leading-8 text-[#3A4652]">
      <p>
        Pendant longtemps, j'ai vu des personnes motivées abandonner par
        manque de temps, de structure ou parce qu'elles suivaient des
        méthodes impossibles à tenir.
      </p>
      <p>
        J'ai voulu créer une approche différente : plus humaine, plus simple,
        plus personnalisée et surtout adaptée à la réalité.
      </p>
      <p>
        Aujourd'hui, j'aide les cadres et entrepreneurs à retrouver un corps
        plus fort, plus d'énergie et une discipline durable, sans que le sport
        devienne une contrainte de plus dans leur quotidien.
      </p>
    </div>

  </div>
</motion.section>

<section
  id="accompagnement"
  className="bg-[#080D0F] px-6 py-28 text-[#F5F1EA]"
>
  <div className="mx-auto max-w-6xl">

    {/* Titre */}
    <div className="max-w-3xl">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#7E8B98]">
        Ton accompagnement
      </p>

      <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
        Un accompagnement pensé pour obtenir des résultats durables
      </h2>

      <p className="mt-8 text-lg leading-8 text-[#C7CED6]">
        Pas de programme générique.
        Pas de solutions impossibles à tenir.

        <br /><br />

        Chaque accompagnement est construit autour de ton organisation,
        <br />
        tes contraintes et de tes objecitfs.
      </p>
    </div>

    {/* Cartes */}
    <div className="mt-20 grid gap-8 md:grid-cols-3">

      {/* Carte 1 */}
      <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">
        <h3 className="mb-6 text-2xl font-semibold">
          Performance
        </h3>

        <ul className="space-y-4 text-[#C7CED6]">
          <li>Mise en place de routines </li>
          <li>Améliore ta condition physique </li>
          <li>Optimise ton énergie </li>
        </ul>
      </div>

      {/* Carte 2 */}
      <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">
        <h3 className="mb-6 text-2xl font-semibold">
          Transformation
        </h3>

        <ul className="space-y-4 text-[#C7CED6]">
          <li>Perds du poids durablement</li>
          <li>Construis une alimentation saine </li>
          <li>Retrouve confiance et discipline</li>
        </ul>
      </div>

      {/* Carte 3 */}
      <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">
        <h3 className="mb-6 text-2xl font-semibold">
          Accompagnement
        </h3>

        <ul className="space-y-4 text-[#C7CED6]">
          <li>Suivi personnalisé</li>
          <li>Adaptation continue du programme</li>
          <li>Coaching humain et structuré</li>
        </ul>
      </div>

    </div>

    {/* Texte final */}
    <div className="mt-16 max-w-6xl">
      <p className="text-lg leading-8 text-[#7E8B98]">
        Mes accompagnements sont proposés aux personnes motivées et prêtes à s’investir sur le long terme pour transformer leur quotidien.
      </p>

      <div className="mt-12 flex justify-center">
  <a
    href="https://calendly.com/camilpieplu/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#4F6D8A] px-14 py-6 text-lg font-semibold text-white transition hover:bg-[#5B7B99]"
  >
    Réserver un appel
  </a>
</div>

    </div>

  </div>
</section>

    </main>
  );
}
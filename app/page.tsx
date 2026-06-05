"use client";

import { motion } from "framer-motion";
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D0F] text-[#F5F1EA]">

      {/* Hero - plein ecran avec image de fond */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Image de fond a droite */}
        <div className="absolute inset-y-0 right-0 w-[45%]">
          <Image
            src="/image/image-de-fond.png"
            alt="background sport"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F] via-[#0B0D0F]/60 to-transparent" />
        </div>

        {/* Contenu par dessus l'image */}
        <div className="relative z-10 flex flex-col min-h-screen px-6 pl-10 md:pl-16">

          {/* Navbar */}
          <nav className="pt-6 pb-0">
            <Image
              src="/image/logo-cp.png.png"
              alt="Camil Pieplu Coaching Premium"
              width={170}
              height={170}
              className="h-auto w-24 opacity-95 md:w-32 lg:w-40 xl:w-52"
            />
          </nav>

          {/* Texte hero */}
          <div className="flex flex-col justify-start pt-8 md:pt-12 w-full max-w-[65%] pl-20 md:pl-32">
            <p className="mb-6 text-base font-medium uppercase tracking-[0.22em] text-[#7E8B98]">
              Coach sportif premium · Lyon
            </p>

            <h1 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Un accompagnement sportif
              <br />
              pensé pour toi
              <br />
              et ton emploi du temps
            </h1>

            <p className="mt-6 text-base leading-7 text-[#C7CED6] md:mt-8 md:text-lg md:leading-8">
              J&apos;aide les cadres et entrepreneurs à transformer et reprendre le contrôle
              de leur corps en 90 jours
              <br />
              grâce à un accompagnement structuré, personnalisé et adapté à leur emploi du temps chargé
              <br />
              sans passer des heures à la salle ni suivre des méthodes compliquées
            </p>

            <div className="mt-10 pb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendly.com/camilpieplu/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { (window as any).gtag?.("event", "book_call_click") }}
                className="rounded-full bg-[#4F6D8A] px-10 py-5 text-center text-base font-semibold text-white transition hover:bg-[#5B7B99]"
              >
                Réserve un appel
              </a>
              <a
                href="#accompagnement"
                onClick={() => { (window as any).gtag?.("event", "view_offer_click") }}
                className="rounded-full border border-[#2E3945] px-10 py-5 text-center text-base font-semibold text-[#F5F1EA] transition"
              >
                Voir l&apos;accompagnement
              </a>
            </div>
          </div>

        </div>
      </section>

      <motion.section
        id="histoire"
        className="border-t border-[#E7E1D7] bg-[#F5F1EA] pl-8 pr-6 py-28 text-[#0B0D0F] md:pl-16"
        initial={{ opacity: 0, y: 120, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr_1fr] md:items-start">

          <div className="flex justify-start">
            <Image
              src="/image/camil-about.jpg"
              alt="Camil coach sportif"
              width={220}
              height={280}
              className="w-32 rounded-3xl object-cover shadow-xl md:w-52 lg:w-56"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#0B0D0F]">
              Mon histoire
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#4F6D8A] md:text-4xl lg:text-5xl">
              J&apos;ai créé l&apos;accompagnement
              <br />
              que j&apos;aurais aimé avoir
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#3A4652]">
            <p>
              Pendant longtemps, j&apos;ai vu des personnes motivées abandonner par
              manque de temps, de structure ou parce qu&apos;elles suivaient des
              méthodes impossibles à tenir.
            </p>
            <p>
              J&apos;ai voulu créer une approche différente : plus humaine, plus simple,
              plus personnalisée et surtout adaptée à la réalité.
            </p>
            <p>
              Aujourd&apos;hui, j&apos;aide les cadres et entrepreneurs à retrouver un corps
              plus fort, plus d&apos;énergie et une discipline durable, sans que le sport
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
              tes contraintes et de tes objectifs.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">
              <h3 className="mb-6 text-2xl font-semibold">Performance</h3>
              <ul className="space-y-4 text-[#C7CED6]">
                <li>Mise en place de routines</li>
                <li>Améliore ta condition physique</li>
                <li>Optimise ton énergie</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">
              <h3 className="mb-6 text-2xl font-semibold">Transformation</h3>
              <ul className="space-y-4 text-[#C7CED6]">
                <li>Perds du poids durablement</li>
                <li>Construis une alimentation saine</li>
                <li>Retrouve confiance et discipline</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#1A2228] bg-[#0D1317] p-8">
              <h3 className="mb-6 text-2xl font-semibold">Accompagnement</h3>
              <ul className="space-y-4 text-[#C7CED6]">
                <li>Suivi personnalisé</li>
                <li>Adaptation continue du programme</li>
                <li>Coaching humain et structuré</li>
              </ul>
            </div>

          </div>

          <div className="mt-16">
            <p className="text-lg leading-8 text-[#7E8B98]">
              Mes accompagnements sont proposés aux personnes motivées et prêtes à s&apos;investir sur le long terme pour transformer leur quotidien.
            </p>
            <div className="mt-12 flex justify-center">
              <a
                href="https://calendly.com/camilpieplu/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#4F6D8A] px-14 py-6 text-lg font-semibold text-white transition hover:bg-[#5B7B99]"
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

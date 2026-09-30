import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies | Camil Pieplu",
  description:
    "Politique de cookies du site de Camil Pieplu, préparateur physique et coach sportif à Lyon.",
};

export default function PolitiqueCookies() {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#0B0D0F]">
      <section className="px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[900px]">

          {/* RETOUR */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F6D8A] transition hover:gap-3"
          >
            ← Retour à l’accueil
          </Link>

          {/* TITRE */}
          <div className="mt-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#4F6D8A]">
              Cookies & traceurs
            </p>

            <h1 className="text-[2.7rem] font-semibold leading-[1.05] md:text-5xl lg:text-[3.6rem]">
              Politique de cookies
            </h1>

            <p className="mt-6 max-w-[760px] text-[1.05rem] leading-[1.8] text-[#59636B]">
              Cette politique explique les cookies et autres traceurs
              susceptibles d’être utilisés sur le site, leurs finalités ainsi
              que les moyens permettant de gérer vos préférences.
            </p>
          </div>

          <div className="mt-14 space-y-12">

            {/* DÉFINITION */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                1. Qu’est-ce qu’un cookie ?
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Un cookie est un petit fichier ou identifiant susceptible
                  d’être stocké ou lu sur votre terminal lorsque vous consultez
                  un site internet.
                </p>

                <p>
                  Certains traceurs sont nécessaires au fonctionnement du site.
                  D’autres peuvent être utilisés pour mesurer l’audience ou
                  analyser l’utilisation du site et nécessitent alors, selon
                  leur nature et leur configuration, votre consentement préalable.
                </p>
              </div>
            </section>

            {/* CATÉGORIES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                2. Catégories de traceurs utilisés
              </h2>

              <div className="mt-5 space-y-6 leading-[1.8] text-[#3A4652]">

                <div>
                  <h3 className="font-semibold text-[#0B0D0F]">
                    Traceurs strictement nécessaires
                  </h3>

                  <p className="mt-2">
                    Ils permettent notamment de mémoriser vos préférences en
                    matière de cookies ou d’assurer certaines fonctions
                    essentielles du site.
                  </p>

                  <p className="mt-2">
                    Ces traceurs ne sont pas utilisés à des fins publicitaires.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#0B0D0F]">
                    Traceurs de mesure d’audience
                  </h3>

                  <p className="mt-2">
                    Le site utilise Google Analytics afin de mesurer la
                    fréquentation du site, de comprendre quelles pages sont
                    consultées et d’améliorer son fonctionnement.
                  </p>

                  <p className="mt-2">
                    Lorsque le consentement est requis, ces traceurs ne sont
                    activés qu’après votre accord.
                  </p>
                </div>
              </div>
            </section>

            {/* GOOGLE ANALYTICS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                3. Google Analytics
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Google Analytics est un service de mesure d’audience fourni
                  par Google.
                </p>

                <p>
                  Les données collectées peuvent notamment permettre d’obtenir
                  des statistiques sur le nombre de visiteurs, les sessions, les
                  pages consultées, ainsi que certaines informations techniques
                  relatives au navigateur et à l’appareil.
                </p>

                <p>
                  Les balises Google Analytics 4 peuvent notamment utiliser les
                  cookies suivants :
                </p>

                <div className="overflow-hidden rounded-2xl border border-[#D8D0C4]">
                  <div className="grid border-b border-[#D8D0C4] bg-[#EFEAE2] px-5 py-4 font-semibold md:grid-cols-3">
                    <p>Cookie</p>
                    <p>Finalité</p>
                    <p>Durée par défaut</p>
                  </div>

                  <div className="grid gap-2 border-b border-[#D8D0C4] px-5 py-5 md:grid-cols-3">
                    <p className="font-semibold">_ga</p>
                    <p>Distinguer les utilisateurs</p>
                    <p>Jusqu’à 2 ans</p>
                  </div>

                  <div className="grid gap-2 px-5 py-5 md:grid-cols-3">
                    <p className="font-semibold">
                      _ga_&lt;container-id&gt;
                    </p>
                    <p>Conserver l’état de la session</p>
                    <p>Jusqu’à 2 ans</p>
                  </div>
                </div>

                <p>
                  Ces durées correspondent aux durées par défaut indiquées par
                  Google et peuvent être réduites par la configuration du
                  service ou par les limitations propres au navigateur utilisé.
                </p>
              </div>
            </section>

            {/* CONSENTEMENT */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                4. Recueil du consentement
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Lors de votre première visite, un bandeau vous permet
                  d’accepter ou de refuser les traceurs qui ne sont pas
                  strictement nécessaires.
                </p>

                <p>
                  Le refus est proposé avec le même niveau de simplicité que
                  l’acceptation.
                </p>

                <p>
                  En l’absence de consentement, les traceurs concernés ne sont
                  pas activés.
                </p>
              </div>
            </section>

            {/* MODIFICATION DU CHOIX */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                5. Modifier ou retirer votre consentement
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Vous pouvez modifier ou retirer votre consentement à tout
                  moment.
                </p>

                <p>
                  Une fonctionnalité dédiée à la gestion des préférences de
                  cookies est accessible sur le site afin de vous permettre de
                  revenir sur votre choix.
                </p>
              </div>
            </section>

            {/* SERVICES EXTERNES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                6. Services externes
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Le site contient des liens vers des services externes tels que
                  Calendly, WhatsApp, Instagram et LinkedIn.
                </p>

                <p>
                  Dans l’état actuel du site, ces services sont accessibles par
                  des liens externes et ne sont pas directement intégrés dans les
                  pages sous forme de contenus embarqués.
                </p>

                <p>
                  Lorsque vous cliquez sur l’un de ces liens et quittez le site,
                  la politique de cookies et de confidentialité du service
                  concerné s’applique.
                </p>
              </div>
            </section>

            {/* RESPONSABLE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                7. Responsable du traitement
              </h2>

              <div className="mt-5 space-y-2 leading-[1.8] text-[#3A4652]">
                <p>
                  Le responsable du traitement est :
                </p>

                <p>
                  <strong>Camil Pieplu</strong>
                </p>

                <p>
                  E-mail :{" "}
                  <a
                    href="mailto:camilpieplu3@gmail.com"
                    className="font-semibold text-[#4F6D8A] hover:underline"
                  >
                    camilpieplu3@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* CONFIDENTIALITÉ */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                8. Données personnelles
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Pour en savoir plus sur le traitement des données personnelles,
                consultez la{" "}
                <Link
                  href="/politique-confidentialite"
                  className="font-semibold text-[#4F6D8A] hover:underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>

          </div>

          {/* BAS */}
          <div className="mt-16 border-t border-[#D8D0C4] pt-8">
            <p className="text-sm text-[#69737C]">
              Dernière mise à jour : 30 septembre 2026
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
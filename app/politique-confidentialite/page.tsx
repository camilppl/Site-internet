import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Camil Pieplu",
  description:
    "Politique de confidentialité du site de Camil Pieplu, préparateur physique et coach sportif à Lyon.",
};

export default function PolitiqueConfidentialite() {
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
              Données personnelles
            </p>

            <h1 className="text-[2.7rem] font-semibold leading-[1.05] md:text-5xl lg:text-[3.6rem]">
              Politique de confidentialité
            </h1>

            <p className="mt-6 max-w-[760px] text-[1.05rem] leading-[1.8] text-[#59636B]">
              Cette politique explique quelles données personnelles peuvent être
              traitées lors de l’utilisation du site, pourquoi elles sont
              utilisées et quels sont vos droits.
            </p>
          </div>

          <div className="mt-14 space-y-12">

            {/* RESPONSABLE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                1. Responsable du traitement
              </h2>

              <div className="mt-5 space-y-2 leading-[1.8] text-[#3A4652]">
                <p>
                  Le responsable du traitement est :
                </p>

                <p>
                  <strong>Camil Pieplu</strong>
                </p>

                <p>
                  Entrepreneur individuel – Micro-entreprise
                </p>

                <p>
                  Adresse professionnelle :
                  <strong> 3 ter rue arago, villeurbanne, 69100
                  </strong>
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

                <p>
                  Téléphone :
                  <strong> 06 59 33 20 29</strong>
                </p>
              </div>
            </section>

            {/* DONNÉES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                2. Données personnelles susceptibles d’être traitées
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Selon la manière dont vous utilisez le site ou entrez en
                  contact avec Camil Pieplu, les catégories de données suivantes
                  peuvent être traitées :
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    données d’identification et de contact, telles que le nom,
                    le prénom, l’adresse e-mail ou le numéro de téléphone ;
                  </li>

                  <li>
                    informations communiquées volontairement dans le cadre d’un
                    échange ou d’une demande de coaching ;
                  </li>

                  <li>
                    informations liées à la prise de rendez-vous via Calendly ;
                  </li>

                  <li>
                    données techniques et de navigation, telles que le type de
                    navigateur, les pages consultées ou les interactions avec le
                    site lorsque les outils de mesure d’audience sont activés.
                  </li>
                </ul>
              </div>
            </section>

            {/* FINALITÉS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                3. Finalités et bases légales
              </h2>

              <div className="mt-5 overflow-hidden rounded-2xl border border-[#D8D0C4]">
                <div className="grid border-b border-[#D8D0C4] bg-[#EFEAE2] px-5 py-4 font-semibold md:grid-cols-2">
                  <p>Finalité</p>
                  <p>Base légale</p>
                </div>

                <div className="grid gap-2 border-b border-[#D8D0C4] px-5 py-5 text-[#3A4652] md:grid-cols-2">
                  <p>
                    Répondre aux demandes de contact et échanger sur un
                    accompagnement
                  </p>
                  <p>
                    Mesures précontractuelles ou intérêt légitime selon la
                    nature de la demande
                  </p>
                </div>

                <div className="grid gap-2 border-b border-[#D8D0C4] px-5 py-5 text-[#3A4652] md:grid-cols-2">
                  <p>
                    Organiser un rendez-vous ou un appel découverte
                  </p>
                  <p>
                    Mesures précontractuelles
                  </p>
                </div>

                <div className="grid gap-2 border-b border-[#D8D0C4] px-5 py-5 text-[#3A4652] md:grid-cols-2">
                  <p>
                    Mesurer l’audience et améliorer les performances du site
                  </p>
                  <p>
                    Consentement lorsque celui-ci est requis
                  </p>
                </div>

                <div className="grid gap-2 px-5 py-5 text-[#3A4652] md:grid-cols-2">
                  <p>
                    Respecter les obligations légales et administratives
                  </p>
                  <p>
                    Obligation légale
                  </p>
                </div>
              </div>
            </section>

            {/* GOOGLE ANALYTICS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                4. Google Analytics
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Le site utilise Google Analytics afin de mesurer la
                  fréquentation du site et de mieux comprendre son utilisation.
                </p>

                <p>
                  Lorsque le consentement est requis, les traceurs de mesure
                  d’audience ne doivent être activés qu’après votre accord.
                  Vous pouvez également refuser leur utilisation.
                </p>

                <p>
                  Google peut traiter certaines données techniques liées à votre
                  navigation conformément à ses propres conditions de
                  traitement des données.
                </p>
              </div>
            </section>

            {/* CALENDLY */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                5. Prise de rendez-vous via Calendly
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Le site contient des liens permettant de réserver un appel via
                  Calendly.
                </p>

                <p>
                  Lorsque vous utilisez ce service, les informations nécessaires
                  à la prise de rendez-vous sont traitées par Calendly pour
                  fournir le service de planification.
                </p>

                <p>
                  Calendly indique que certaines données peuvent être hébergées
                  ou traitées aux États-Unis et s’appuie notamment sur le cadre
                  UE–États-Unis de protection des données ainsi que, lorsque
                  nécessaire, sur les clauses contractuelles types.
                </p>
              </div>
            </section>

            {/* HÉBERGEMENT */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                6. Hébergement du site
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Le site est hébergé par Netlify, Inc.
                </p>

                <p>
                  Dans le cadre de l’hébergement et de la sécurité du site,
                  Netlify peut traiter certaines données techniques, notamment
                  des informations liées aux connexions et aux appareils.
                </p>

                <p>
                  Netlify indique que des transferts internationaux de données
                  peuvent avoir lieu et prévoit différents mécanismes de
                  protection, notamment le cadre UE–États-Unis de protection des
                  données et les clauses contractuelles types.
                </p>
              </div>
            </section>

            {/* DESTINATAIRES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                7. Destinataires des données
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Les données sont accessibles uniquement aux personnes et
                  prestataires qui en ont besoin dans le cadre des finalités
                  décrites ci-dessus.
                </p>

                <p>
                  Il peut notamment s’agir de :
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Camil Pieplu ;</li>
                  <li>Google, pour les outils de mesure d’audience ;</li>
                  <li>Calendly, pour la prise de rendez-vous ;</li>
                  <li>Netlify, pour l’hébergement et le fonctionnement du site.</li>
                </ul>
              </div>
            </section>

            {/* DURÉES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                8. Durée de conservation
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Les données personnelles ne sont conservées que pendant la
                  durée nécessaire aux finalités pour lesquelles elles ont été
                  collectées, puis supprimées ou archivées lorsque la loi
                  l’exige.
                </p>

                <p>
                  Les durées peuvent notamment dépendre de la nature de la
                  demande, de l’existence d’une relation contractuelle ou des
                  obligations administratives et comptables applicables.
                </p>
              </div>
            </section>

            {/* DROITS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                9. Vos droits
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Selon la situation et la base légale du traitement, vous
                  pouvez disposer notamment des droits suivants :
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>droit d’accès à vos données ;</li>
                  <li>droit de rectification ;</li>
                  <li>droit à l’effacement ;</li>
                  <li>droit à la limitation du traitement ;</li>
                  <li>droit d’opposition ;</li>
                  <li>droit à la portabilité lorsque celui-ci est applicable ;</li>
                  <li>droit de retirer votre consentement à tout moment.</li>
                </ul>

                <p>
                  Pour exercer vos droits, vous pouvez écrire à :
                  {" "}
                  <a
                    href="mailto:camilpieplu3@gmail.com"
                    className="font-semibold text-[#4F6D8A] hover:underline"
                  >
                    camilpieplu3@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* CNIL */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                10. Réclamation auprès de la CNIL
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Si vous estimez que vos droits relatifs à vos données
                personnelles ne sont pas respectés, vous pouvez introduire une
                réclamation auprès de la Commission nationale de l’informatique
                et des libertés (CNIL).
              </p>
            </section>

            {/* LIENS TIERS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                11. Services et sites tiers
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Le site contient des liens vers des services externes tels que
                WhatsApp, Instagram, LinkedIn et Calendly. Lorsque vous quittez
                ce site pour utiliser l’un de ces services, leur propre
                politique de confidentialité s’applique.
              </p>
            </section>

            {/* COOKIES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                12. Cookies et traceurs
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Pour plus d’informations sur les cookies et traceurs utilisés
                sur le site ainsi que sur la gestion de vos préférences,
                consultez la{" "}
                <Link
                  href="/politique-cookies"
                  className="font-semibold text-[#4F6D8A] hover:underline"
                >
                  politique de cookies
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
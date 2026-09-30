import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Camil Pieplu",
  description:
    "Mentions légales du site de Camil Pieplu, préparateur physique et coach sportif à Lyon.",
};

export default function MentionsLegales() {
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
              Informations légales
            </p>

            <h1 className="text-[2.7rem] font-semibold leading-[1.05] md:text-5xl lg:text-[3.6rem]">
              Mentions légales
            </h1>

            <p className="mt-6 max-w-[700px] text-[1.05rem] leading-[1.8] text-[#59636B]">
              Les présentes mentions légales précisent l’identité de l’éditeur
              du site, les informations relatives à son activité ainsi que les
              conditions d’utilisation du site.
            </p>
          </div>

          <div className="mt-14 space-y-12">

            {/* ÉDITEUR */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                1. Éditeur du site
              </h2>

              <div className="mt-5 space-y-2 leading-[1.8] text-[#3A4652]">
                <p>
                  <strong>Camil Pieplu</strong>
                </p>

                <p>
                  Entrepreneur individuel – Micro-entreprise
                </p>

                <p>
                  Activité : préparateur physique & coach sportif
                </p>

                <p>
                  SIREN : <strong>941 513 533</strong>
                </p>

                <p>
                  SIRET : <strong>941 513 533 00021</strong>
                </p>

                <p>
                  Immatriculé au Registre national des entreprises (RNE)
                </p>

                <p>
                  Adresse professionnelle :
                  <strong> 3 ter rue arago, villeurbanne, 69100</strong>
                </p>
 
                <p>
                  Téléphone :
                  <strong> 06 59 33 20 29</strong>
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

            {/* ACTIVITÉ RÉGLEMENTÉE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                2. Activité professionnelle
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  L’activité d’encadrement d’activités physiques ou sportives
                  contre rémunération est une activité réglementée par le Code
                  du sport.
                </p>

                <p>
                  Titre professionnel :{" "}
                  <strong>Éducateur sportif / préparateur physique</strong>
                </p>

                <p>
                  État dans lequel le titre a été délivré :{" "}
                  <strong>France</strong>
                </p>

                <p>
                  Carte professionnelle d’éducateur sportif :
                  <strong> 06024ED0077</strong>
                </p>
              </div>
            </section>

            {/* PUBLICATION */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                3. Directeur de la publication
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Le directeur de la publication du site est{" "}
                <strong>Camil Pieplu</strong>.
              </p>
            </section>

            {/* HÉBERGEMENT */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                4. Hébergement
              </h2>

              <div className="mt-5 space-y-2 leading-[1.8] text-[#3A4652]">
                <p>
                  Le site est hébergé par :
                </p>

                <p>
                  <strong>Netlify, Inc.</strong>
                </p>

                <p>
                  101 2nd Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  États-Unis
                </p>

                <p>
                  Contact :{" "}
                  <a
                    href="mailto:support@netlify.com"
                    className="font-semibold text-[#4F6D8A] hover:underline"
                  >
                    support@netlify.com
                  </a>
                </p>

                <p>
                  Téléphone :
                  <strong> </strong>
                </p>
              </div>
            </section>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                5. Propriété intellectuelle
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Sauf indication contraire, les contenus originaux présents
                  sur ce site, notamment les textes, photographies, éléments
                  graphiques, logos et illustrations, sont protégés par les
                  règles applicables en matière de propriété intellectuelle.
                </p>

                <p>
                  Toute reproduction, représentation, modification ou
                  exploitation de ces contenus sans autorisation préalable du
                  titulaire des droits concernés est interdite, sauf dans les
                  cas prévus par la loi.
                </p>
              </div>
            </section>

            {/* RESPONSABILITÉ */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                6. Responsabilité
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Camil Pieplu s’efforce de fournir sur ce site des
                  informations aussi exactes et à jour que possible.
                </p>

                <p>
                  Les informations disponibles sur le site sont fournies à
                  titre informatif et ne remplacent pas un accompagnement
                  individualisé adapté à la situation de chaque personne.
                </p>
              </div>
            </section>

            {/* LIENS EXTERNES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                7. Liens externes
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Le site peut contenir des liens vers des sites ou services
                exploités par des tiers. Camil Pieplu ne contrôle pas le
                contenu ou les pratiques de ces services externes.
              </p>
            </section>

            {/* DONNÉES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                8. Données personnelles et cookies
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Pour en savoir plus sur la collecte et le traitement des
                données personnelles ainsi que sur l’utilisation des cookies,
                consultez la{" "}
                <Link
                  href="/politique-confidentialite"
                  className="font-semibold text-[#4F6D8A] hover:underline"
                >
                  politique de confidentialité
                </Link>{" "}
                et la{" "}
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
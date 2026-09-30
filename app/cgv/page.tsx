import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Camil Pieplu",
  description:
    "Conditions générales de vente des prestations de coaching sportif et de préparation physique proposées par Camil Pieplu.",
};

export default function CGV() {
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
              Informations contractuelles
            </p>

            <h1 className="text-[2.7rem] font-semibold leading-[1.05] md:text-5xl lg:text-[3.6rem]">
              Conditions générales de vente
            </h1>

            <p className="mt-6 max-w-[760px] text-[1.05rem] leading-[1.8] text-[#59636B]">
              Les présentes conditions générales de vente encadrent les
              prestations proposées par Camil Pieplu aux clients particuliers.
            </p>
          </div>

          <div className="mt-14 space-y-12">

            {/* PRESTATAIRE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                1. Identification du prestataire
              </h2>

              <div className="mt-5 space-y-2 leading-[1.8] text-[#3A4652]">
                <p>
                  <strong>Camil Pieplu</strong>
                </p>

                <p>Entrepreneur individuel – Micro-entreprise</p>

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

                <p>
                  Carte professionnelle d’éducateur sportif :
                  <strong> 06024ED0077</strong>
                </p>

                <p>
                  Autorité compétente :
                  <strong> Préfet du Rhône – Service départemental à la jeunesse, à l’engagement et aux sports (SDJES du Rhône)</strong>
                </p>

                <p>
                  Assurance responsabilité civile professionnelle :
                  <strong> MAAF Assurances SA
Chaban – 79180 Chauray
Adresse postale : Chauray – 79036 Niort Cedex 09 -
Téléphone : 05 49 34 35 36 - 
RCS Niort 542 073 580 - N° de contrat : MCE 001</strong>
                </p>

                <p>
                  Couverture géographique :
                  <strong> Monde entier, à l’exception des États-Unis et du Canada, sous réserve des exclusions et limitations prévues au contrat d’assurance.</strong>
                </p>
              </div>
            </section>

            {/* OBJET */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                2. Objet et champ d’application
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Les présentes conditions générales de vente s’appliquent aux
                  prestations proposées par Camil Pieplu à des clients
                  particuliers agissant à des fins non professionnelles.
                </p>

                <p>
                  Toute commande ou souscription à une prestation implique que
                  le client ait pu prendre connaissance des présentes CGV avant
                  la conclusion du contrat.
                </p>

                <p>
                  Des conditions particulières figurant notamment dans un devis,
                  contrat, bon de commande ou proposition commerciale peuvent
                  compléter les présentes CGV.
                </p>
              </div>
            </section>

            {/* SERVICES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                3. Prestations proposées
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Les prestations peuvent notamment comprendre :
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>coaching sportif individuel ;</li>
                  <li>préparation physique individuelle ;</li>
                  <li>programmation d’entraînement à distance ;</li>
                  <li>séances en présentiel ou à domicile ;</li>
                  <li>suivi et ajustement de la programmation ;</li>
                  <li>tests et évaluations physiques ;</li>
                  <li>réathlétisation dans le champ de compétence du coach ;</li>
                  <li>
                    accompagnement nutritionnel non médical et conseils
                    généraux relatifs aux habitudes alimentaires.
                  </li>
                </ul>

                <p>
                  Le contenu exact de la prestation, sa durée, ses modalités de
                  réalisation et les éventuelles options sont précisés au
                  client avant son engagement.
                </p>
              </div>
            </section>

            {/* COMMANDE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                4. Formation du contrat
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Avant toute souscription, le client reçoit les informations
                  essentielles relatives à la prestation, notamment son
                  contenu, sa durée, son prix et ses modalités de paiement.
                </p>

                <p>
                  Le contrat est conclu lorsque le client accepte de manière
                  claire la proposition, le devis ou le contrat qui lui est
                  présenté selon les modalités indiquées sur celui-ci.
                </p>

                <p>
                  Lorsque le contrat est conclu à distance, une confirmation
                  reprenant les éléments essentiels de l’accord est remise au
                  client sur un support durable, par exemple par e-mail.
                </p>
              </div>
            </section>

            {/* PRIX */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                5. Prix
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Les prix applicables sont ceux communiqués au client avant la
                  conclusion du contrat.
                </p>

                <p>
                  Ils sont indiqués en euros et correspondent au montant total
                  dû par le consommateur, sauf frais supplémentaires clairement
                  annoncés avant la conclusion du contrat.
                </p>

                <p>
                  Le tarif applicable, la durée de l’accompagnement et les
                  éventuelles modalités de paiement échelonné sont précisés dans
                  le devis, le contrat ou la proposition commerciale acceptée
                  par le client.
                </p>
              </div>
            </section>

            {/* PAIEMENT */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                6. Modalités de paiement
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Selon l’offre choisie, le règlement peut être effectué en une
                  seule fois ou de manière échelonnée conformément à
                  l’échéancier communiqué au client avant la conclusion du
                  contrat.
                </p>

                <p>
                  Le paiement échelonné constitue une modalité de règlement de
                  la prestation et ne modifie pas, à lui seul, la durée
                  contractuelle prévue.
                </p>

                <p>
                  En cas d’échec ou de retard de paiement, le client est invité
                  à régulariser la situation. Après information du client et en
                  l’absence de régularisation, l’exécution des prestations
                  restant à réaliser pourra être suspendue dans le respect des
                  droits légaux du consommateur.
                </p>
              </div>
            </section>

            {/* EXÉCUTION */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                7. Exécution de la prestation
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  La date de début de l’accompagnement et ses modalités
                  d’exécution sont convenues avec le client et précisées dans
                  les documents contractuels.
                </p>

                <p>
                  Les prestations peuvent être réalisées en présentiel, à
                  distance, par visioconférence, sur le terrain, à domicile ou
                  selon une combinaison de ces modalités.
                </p>

                <p>
                  Lorsque l’accompagnement comprend une programmation, celle-ci
                  peut évoluer en fonction des informations communiquées par le
                  client, de ses retours, de sa progression et de son contexte.
                </p>
              </div>
            </section>

            {/* RENDEZ-VOUS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                8. Annulation et report d’un rendez-vous
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Lorsqu’une prestation comprend un rendez-vous individuel, le
                  client est invité à informer Camil Pieplu dans les meilleurs
                  délais s’il ne peut pas être présent.
                </p>

                <p>
                  Les conditions précises d’annulation, de report ou de
                  facturation d’une séance annulée tardivement sont les
                  suivantes :
                </p>

                <p className="rounded-xl border border-[#D8D0C4] bg-[#EFEAE2] p-5 font-semibold">
                  <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
  <p>
    Lorsqu’une prestation comprend un rendez-vous individuel ou une séance
    programmée, toute demande d’annulation ou de report doit être communiquée
    à Camil Pieplu dans les meilleurs délais.
  </p>

  <p>
    Une séance annulée ou reportée plus de 24 heures avant l’horaire prévu
    peut être reprogrammée sans frais, sous réserve des disponibilités.
  </p>

  <p>
    En cas d’annulation moins de 24 heures avant le rendez-vous ou d’absence
    du client sans information préalable, la séance pourra être considérée
    comme réalisée et restera due.
  </p>

  <p>
    En cas de circonstance exceptionnelle ou de force majeure empêchant le
    client d’honorer le rendez-vous, la situation pourra être examinée au cas
    par cas afin de convenir, lorsque cela est possible, d’un report.
  </p>

  <p>
    En cas d’annulation d’une séance à l’initiative de Camil Pieplu, celle-ci
    sera reprogrammée sans frais à une date convenue avec le client. Si aucun
    report n’est possible, les sommes éventuellement versées au titre de cette
    séance seront remboursées.
  </p>
</div>
                </p>

                <p>
                  Les situations exceptionnelles ou de force majeure pourront
                  faire l’objet d’un examen au cas par cas.
                </p>
              </div>
            </section>

            {/* DURÉE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                9. Durée de l’accompagnement et fin du contrat
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  La durée de chaque accompagnement est précisée au client
                  avant la conclusion du contrat.
                </p>

                <p>
                  Sauf stipulation contraire expressément acceptée par le
                  client, une prestation souscrite pour une durée déterminée
                  prend fin au terme de cette durée sans renouvellement
                  automatique.
                </p>

                <p>
                  Les droits légaux du consommateur concernant notamment la
                  rétractation, la résolution du contrat en cas de manquement
                  ou toute autre cause légitime demeurent applicables.
                </p>
              </div>
            </section>

            {/* RÉTRACTATION */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                10. Droit de rétractation
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Pour les contrats conclus à distance ou hors établissement,
                  le consommateur dispose, sauf exception légale, d’un délai de
                  quatorze jours à compter de la conclusion du contrat pour
                  exercer son droit de rétractation sans avoir à justifier sa
                  décision.
                </p>

                <p>
                  Pour exercer ce droit, le client peut adresser une déclaration
                  claire exprimant sa volonté de se rétracter à :
                </p>

                <p>
                  <a
                    href="mailto:camilpieplu3@gmail.com"
                    className="font-semibold text-[#4F6D8A] hover:underline"
                  >
                    camilpieplu3@gmail.com
                  </a>
                </p>

                <p>
                  Le client peut également utiliser le formulaire type figurant
                  à la fin des présentes CGV.
                </p>
              </div>
            </section>

            {/* EXÉCUTION AVANT 14 JOURS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                11. Commencement de la prestation avant la fin du délai de rétractation
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Si le client souhaite que l’exécution de la prestation
                  commence avant la fin du délai légal de rétractation, une
                  demande expresse en ce sens doit être recueillie.
                </p>

                <p>
                  Si le client exerce ensuite son droit de rétractation alors
                  que la prestation a commencé à sa demande, il pourra être
                  redevable d’un montant proportionnel aux prestations
                  effectivement fournies jusqu’à la communication de sa décision
                  de se rétracter, dans les conditions prévues par la loi.
                </p>

                <p>
                  Lorsque la prestation a été pleinement exécutée avant la fin
                  du délai de rétractation, le droit de rétractation ne peut
                  être perdu que dans les conditions prévues par la
                  réglementation, notamment après accord préalable exprès du
                  consommateur et reconnaissance de la perte de ce droit lorsque
                  la prestation aura été entièrement exécutée.
                </p>
              </div>
            </section>

            {/* SANTÉ */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                12. Santé et aptitude à la pratique sportive
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Le client doit communiquer les informations utiles à
                  l’adaptation de la pratique sportive, notamment l’existence de
                  restrictions, contre-indications ou recommandations médicales
                  dont il a connaissance.
                </p>

                <p>
                  Les prestations de coaching sportif, de préparation physique
                  et d’accompagnement nutritionnel proposées ne remplacent pas
                  un diagnostic, un traitement ou un suivi effectué par un
                  professionnel de santé.
                </p>

                <p>
                  En cas de doute concernant son aptitude à pratiquer une
                  activité physique ou la compatibilité de celle-ci avec son
                  état de santé, le client est invité à solliciter l’avis d’un
                  professionnel de santé compétent.
                </p>
              </div>
            </section>

            {/* OBLIGATIONS CLIENT */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                13. Engagement du client
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  La qualité de l’accompagnement dépend notamment de la
                  précision des informations communiquées par le client et de
                  son implication dans la prestation.
                </p>

                <p>
                  Le client s’engage à signaler toute difficulté, douleur,
                  blessure ou changement de situation susceptible d’avoir une
                  incidence sur la programmation ou la pratique sportive.
                </p>
              </div>
            </section>

            {/* RÉSULTATS */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                14. Résultats de l’accompagnement
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  L’accompagnement a pour objectif de fournir au client une
                  prestation personnalisée fondée sur son profil et ses
                  objectifs.
                </p>

                <p>
                  Les résultats peuvent toutefois dépendre de nombreux facteurs,
                  notamment l’assiduité, la récupération, les habitudes de vie,
                  l’état de santé, l’alimentation et la régularité du client.
                </p>

                <p>
                  Aucun résultat chiffré ou niveau de performance précis n’est
                  garanti sauf engagement écrit spécifique.
                </p>
              </div>
            </section>

            {/* PROPRIÉTÉ */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                15. Propriété intellectuelle
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Les programmes, documents, supports, vidéos, méthodes,
                  illustrations et contenus remis au client dans le cadre de
                  l’accompagnement sont destinés à son usage personnel.
                </p>

                <p>
                  Sauf autorisation préalable, ils ne peuvent pas être diffusés,
                  reproduits, revendus ou mis à disposition de tiers.
                </p>
              </div>
            </section>

            {/* DONNÉES */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                16. Données personnelles
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Les informations relatives au traitement des données
                personnelles sont disponibles dans la{" "}
                <Link
                  href="/politique-confidentialite"
                  className="font-semibold text-[#4F6D8A] hover:underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>

            {/* FORCE MAJEURE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                17. Force majeure
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Aucune partie ne pourra être tenue responsable d’un retard ou
                d’une inexécution résultant d’un événement de force majeure au
                sens de la législation applicable. Les parties chercheront,
                lorsque cela est possible, une solution permettant de reporter,
                adapter ou reprendre la prestation.
              </p>
            </section>

            {/* RÉCLAMATION */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                18. Réclamation
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  En cas de difficulté concernant une prestation, le client est
                  invité à contacter en priorité Camil Pieplu afin de rechercher
                  une solution amiable.
                </p>

                <p>
                  Toute réclamation peut être adressée à :
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

            {/* MÉDIATION */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                19. Médiation de la consommation
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Après avoir adressé une réclamation écrite au professionnel et
                  en l’absence de solution amiable, le consommateur peut
                  recourir gratuitement au médiateur de la consommation dont
                  relève Camil Pieplu.
                </p>

                <div className="rounded-xl border border-[#D8D0C4] bg-[#EFEAE2] p-5">
                  <p>
                    <strong>[NOM DU MÉDIATEUR]</strong>
                  </p>

                  <p className="mt-2">
                    [ADRESSE DU MÉDIATEUR]
                  </p>

                  <p className="mt-2">
                    Site internet :
                    <strong> [URL DU MÉDIATEUR]</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* DROIT */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                20. Droit applicable et règlement des litiges
              </h2>

              <div className="mt-5 space-y-4 leading-[1.8] text-[#3A4652]">
                <p>
                  Les présentes conditions générales de vente sont soumises au
                  droit français.
                </p>

                <p>
                  En cas de litige qui ne pourrait pas être résolu à l’amiable
                  ou par la médiation de la consommation, les juridictions
                  compétentes seront déterminées conformément aux règles
                  légales applicables au consommateur.
                </p>
              </div>
            </section>

            {/* FORMULAIRE */}
            <section className="border-t border-[#D8D0C4] pt-8">
              <h2 className="text-2xl font-semibold">
                21. Formulaire type de rétractation
              </h2>

              <p className="mt-5 leading-[1.8] text-[#3A4652]">
                Le formulaire suivant peut être utilisé uniquement si le client
                souhaite se rétracter d’un contrat pour lequel le droit de
                rétractation est applicable.
              </p>

              <div className="mt-6 rounded-2xl border border-[#D8D0C4] bg-[#EFEAE2] p-6 leading-[1.8] text-[#3A4652]">
                <p>
                  À l’attention de :
                  <br />
                  <strong>Camil Pieplu</strong>
                  <br />
                  3 ter rue arago, 69100 Villeurbanne
                  <br />
                  camilpieplu3@gmail.com
                </p>

                <p className="mt-6">
                  Je vous notifie par la présente ma rétractation du contrat
                  portant sur la prestation suivante :
                </p>

                <p className="mt-4">
                  ....................................................................
                </p>

                <p className="mt-4">
                  Contrat conclu le :
                  ....................................................................
                </p>

                <p className="mt-4">
                  Nom du consommateur :
                  ....................................................................
                </p>

                <p className="mt-4">
                  Adresse du consommateur :
                  ....................................................................
                </p>

                <p className="mt-4">
                  Date :
                  ....................................................................
                </p>

                <p className="mt-4">
                  Signature du consommateur, uniquement en cas d’envoi du
                  formulaire au format papier :
                </p>
              </div>
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
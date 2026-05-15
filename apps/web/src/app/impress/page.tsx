export default function ImpressPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Impressum</h1>

      <section className="space-y-4 text-muted">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Angaben gemäß § 5 TMG
          </h2>
          <p>Google Developer Group on Campus University of Duisburg-Essen</p>
          <p>Lennart K</p>
          <p>Schützenbahn 70, Raum SM-109</p>
          <p>45127 Essen</p>
          <p>Deutschland</p>
          <p className="mt-3">E-Mail: gdgoc-ude@googlegroups.com</p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p>Google Developer Group on Campus University of Duisburg-Essen</p>
          <p>Lennart K</p>
          <p>Schützenbahn 70, Raum SM-109</p>
          <p>45127 Essen</p>
          <p>Deutschland</p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Haftung für Inhalte
          </h2>
          <p>
            Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte wird jedoch keine Gewähr übernommen.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Haftung für Links
          </h2>
          <p>
            Diese Webseite enthält Links zu externen Webseiten Dritter, auf
            deren Inhalte kein Einfluss besteht. Deshalb wird für diese fremden
            Inhalte keine Gewähr übernommen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Urheberrecht
          </h2>
          <p>
            Die auf dieser Webseite veröffentlichten Inhalte und
            Präsentationsfolien unterliegen dem jeweiligen Urheberrecht.
          </p>
          <p className="mt-3">
            Die veröffentlichten Vortragsfolien werden mit Zustimmung der
            jeweiligen Vortragenden bereitgestellt. Eine weitere Verwendung,
            Vervielfältigung oder Verbreitung ist ohne Zustimmung der jeweiligen
            Rechteinhaber nicht gestattet, sofern nicht gesetzlich erlaubt.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            Hinweis
          </h2>
          <p>
            Dieses Muster stellt keine Rechtsberatung dar und sollte vor
            Veröffentlichung insbesondere hinsichtlich der konkreten
            Betreiberangaben und der tatsächlichen technischen Konfiguration
            geprüft werden.
          </p>
        </div>
      </section>
    </main>
  );
}

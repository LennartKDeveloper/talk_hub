export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Datenschutzerklärung</h1>

      <section className="space-y-4 text-muted">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            1. Allgemeine Hinweise
          </h2>
          <p>
            Diese Datenschutzerklärung informiert über die Art, den Umfang und
            den Zweck der Verarbeitung personenbezogener Daten auf dieser
            Webseite.
          </p>
          <p className="mt-3">
            Die Webseite dient ausschließlich der Bereitstellung von
            Informationen zu geplanten Vorträgen an der Universität im Rahmen
            der Google Developer Group on Campus, sowie der Veröffentlichung
            von Präsentationsfolien vergangener Vorträge. Die Veröffentlichung
            der Vortragsfolien erfolgt jeweils mit vorheriger Zustimmung der
            Vortragenden.
          </p>
          <p className="mt-3">
            Da es sich um eine statische Webseite handelt, werden durch den
            Betreiber selbst keine personenbezogenen Daten erhoben,
            verarbeitet oder gespeichert.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            2. Verantwortliche Stelle
          </h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:</p>
          <p className="mt-3">Google Developer Group on Campus University of Duisburg-Essen</p>
          <p>Lennart K</p>
          <p>Schützenbahn 70, Raum SM-109</p>
          <p>45127 Essen</p>
          <p>Deutschland</p>
          <p className="mt-3">E-Mail: gdgoc-ude@googlegroups.com</p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            3. Hosting über GitHub Pages
          </h2>
          <p>
            Diese Webseite wird über GitHub Pages gehostet, einen Dienst der:
          </p>
          <p className="mt-3">GitHub, Inc.</p>
          <p>88 Colin P Kelly Jr St</p>
          <p>San Francisco, CA 94107</p>
          <p>USA</p>
          <p className="mt-3">
            Beim Aufruf der Webseite verarbeitet GitHub möglicherweise
            technische Zugriffsdaten (z. B. IP-Adresse, Browserinformationen,
            Datum und Uhrzeit des Zugriffs) in sogenannten Server-Logfiles.
            Diese Verarbeitung erfolgt durch GitHub als Hosting-Anbieter.
          </p>
          <p className="mt-3">
            Weitere Informationen zur Datenverarbeitung durch GitHub finden sich
            unter:
          </p>
          <p className="mt-3 break-words">
            https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
          </p>
          <p className="mt-3">
            Die Nutzung von GitHub Pages erfolgt auf Grundlage des berechtigten
            Interesses an einer sicheren und effizienten Bereitstellung der
            Webseite gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            4. Keine Cookies und kein Tracking
          </h2>
          <p>Diese Webseite verwendet keine Cookies.</p>
          <p className="mt-3">
            Es werden keine Analyse- oder Trackingdienste eingesetzt.
            Insbesondere werden keine personenbezogenen Daten zu Marketing-,
            Analyse- oder Statistikzwecken verarbeitet.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            5. Externe Links
          </h2>
          <p>
            Die Webseite enthält Links zu externen Webseiten, insbesondere zu
            Informationen über geplante Vorträge.
          </p>
          <p className="mt-3">
            Für die Inhalte externer Webseiten sind ausschließlich deren
            Betreiber verantwortlich. Beim Anklicken externer Links gelten die
            Datenschutzbestimmungen der jeweiligen Anbieter.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            6. Bereitstellung von Vortragsfolien
          </h2>
          <p>
            Auf dieser Webseite werden Präsentationsfolien vergangener Vorträge
            veröffentlicht.
          </p>
          <p className="mt-3">
            Die Veröffentlichung erfolgt ausschließlich mit vorheriger
            Zustimmung der jeweiligen Vortragenden.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            7. Rechte betroffener Personen
          </h2>
          <p>
            Soweit personenbezogene Daten verarbeitet werden, stehen betroffenen
            Personen nach der DSGVO insbesondere folgende Rechte zu:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Recht auf Auskunft gemäß Art. 15 DSGVO</li>
            <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
            <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
            <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
            <li>Recht auf Widerspruch gemäß Art. 21 DSGVO</li>
            <li>Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">
            8. Stand
          </h2>
          <p>Stand: Mai 2026</p>
        </div>
      </section>
    </main>
  );
}

import React from "react";

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/70">
            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">1. Informazioni Generali</h2>
              <p>
                La presente Privacy Policy descrive come Elettricisti Esperti raccoglie, utilizza e protegge 
                le informazioni personali degli utenti che visitano il sito web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">2. Dati Raccolti</h2>
              <p>
                Raccogliamo i seguenti dati personali quando utilizzate i nostri servizi:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Indirizzo fisico (se richiesto per i servizi)</li>
                <li>Dati di navigazione (cookie tecnici)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">3. Finalità del Trattamento</h2>
              <p>I dati personali vengono utilizzati per:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Fornire risposte alle richieste di preventivo</li>
                <li>Erogare i servizi richiesti</li>
                <li>Comunicazioni commerciali (con consenso)</li>
                <li>Adempimenti di legge e normativi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">4. Base Giuridica</h2>
              <p>
                Il trattamento dei dati personali si basa sul consenso dell'interessato, sull'esecuzione 
                di un contratto o su un legittimo interesse dell'azienda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">5. Diritti dell'Interessato</h2>
              <p>Ai sensi del GDPR, l'utente ha diritto di:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">6. Contatti</h2>
              <p>
                Per esercitare i propri diritti o per qualsiasi domanda sulla privacy, contattare:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@elettricistiesperti.it</p>
                <p><strong>Indirizzo:</strong> Via dell'Elettricità, 42 - 20100 Milano (MI)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">7. Modifiche</h2>
              <p>
                Questa Privacy Policy può essere modificata in qualsiasi momento. Le modifiche entreranno 
                in vigore dalla data di pubblicazione sul sito.
              </p>
              <p className="mt-4">
                <strong>Ultimo aggiornamento:</strong> {new Date().getFullYear()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


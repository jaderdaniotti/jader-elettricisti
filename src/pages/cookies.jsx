import React from "react";

export default function Cookies() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
            Cookie Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/70">
            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">Cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono salvati sul dispositivo quando si visita 
                un sito web. Vengono utilizzati per migliorare l'esperienza di navigazione e per fornire 
                informazioni sui comportamenti degli utenti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">Tipi di Cookie Utilizzati</h2>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Cookie Tecnici</h3>
                  <p>
                    Sono necessari per il funzionamento del sito e non richiedono il consenso. 
                    Includono cookie di sessione e funzionalità.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Cookie Analitici</h3>
                  <p>
                    Raccolgono informazioni sull'utilizzo del sito in forma aggregata e anonima, 
                    per migliorare le prestazioni e l'usabilità.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Cookie di Preferenze</h3>
                  <p>
                    Memorizzano le preferenze dell'utente (come il tema scuro/chiaro) per migliorare 
                    l'esperienza di navigazione.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">Gestione dei Cookie</h2>
              <p>
                È possibile gestire o disabilitare i cookie attraverso le impostazioni del browser. 
                Tuttavia, alcune funzionalità del sito potrebbero non funzionare correttamente 
                se i cookie vengono disabilitati.
              </p>
              <p className="mt-4">
                Le istruzioni per gestire i cookie variano a seconda del browser utilizzato:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">Cookie di Terze Parti</h2>
              <p>
                Il nostro sito potrebbe utilizzare servizi di terze parti che installano cookie propri. 
                Per maggiori informazioni, consultare le rispettive policy di privacy:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google Analytics (se utilizzato)</li>
                <li>Servizi di hosting e CDN</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">Consenso</h2>
              <p>
                Continuando a navigare sul sito, l'utente accetta l'utilizzo dei cookie secondo 
                quanto descritto in questa policy. Il consenso può essere revocato in qualsiasi 
                momento modificando le impostazioni del browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-foreground mt-8 mb-4">Contatti</h2>
              <p>
                Per domande sui cookie, contattare:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@elettricistiesperti.it</p>
              </div>
            </section>

            <section>
              <p className="mt-8">
                <strong>Ultimo aggiornamento:</strong> {new Date().getFullYear()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from "react";
import { immagini } from "../images";
import TrustStrip from "../components/sections/TrustStrip";
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel";
import FAQAccordion from "../components/sections/FAQAccordion";
import {
  Zap,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Building2,
  Wrench,
  Lightbulb,
  Home as HomeIcon,
  ArrowRight,
  FileText,
  Settings,
  Briefcase,
  Newspaper,
  ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background">
      
      {/* Hero Section - Minimal e Professionale */}
      <section className="relative min-h-[90vh] flex items-center bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-16 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            
            {/* Contenuto Testuale */}
            <div className="space-y-8" data-aos="fade-up" data-aos-duration="600">
              <div className="space-y-6">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Impianti Elettrici dal 1990
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight leading-[1.1]">
                  Elettricità
                  <span className="block font-normal mt-2">Professionale</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-xl">
                Progettazione, installazione e manutenzione di impianti elettrici civili e industriali. 
                Soluzioni complete con certificazioni e garanzie.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contatti" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFD700] text-background text-sm font-medium hover:bg-[#FFD700]/90 transition-colors duration-200"
                >
                  Richiedi Preventivo
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a 
                  href="#servizi" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground/80 text-sm font-medium hover:border-[#FFD700] hover:text-foreground transition-colors duration-200"
                >
                  I Nostri Servizi
                </a>
              </div>

              {/* Info rapide - Minimal */}
              <div className="flex gap-12 pt-12 border-t border-border">
                <div>
                  <div className="text-2xl font-light text-foreground">30+</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Anni</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground">5000+</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Clienti</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Assistenza</div>
                </div>
              </div>
            </div>

            {/* Immagine Hero */}
            <div className="relative" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <img 
                src={immagini.elettricisti1} 
                alt="Elettricisti al lavoro" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Sezione Servizi - Layout Pulito */}
      <section id="servizi" className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Servizi</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight max-w-2xl">
                Cosa Offriamo
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Servizio 1 - Interventi in Alta Quota */}
              <div 
                className="group border border-border hover:border-[#FFD700] transition-colors duration-200"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="0"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={immagini.interventoaltaquota} 
                    alt="Intervento in alta quota" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Building2 className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Interventi in Alta Quota</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Installazioni e manutenzioni su edifici alti e strutture industriali. 
                    Team specializzato con certificazioni di sicurezza.
                  </p>
                  <a href="#contatti" className="text-sm font-medium text-foreground hover:underline inline-flex items-center gap-1">
                    Scopri di più
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Servizio 2 - Pannelli Solari */}
              <div 
                className="group border border-border hover:border-[#FFD700] transition-colors duration-200"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={immagini.pannelli} 
                    alt="Installazione pannelli solari" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Zap className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Impianti Fotovoltaici</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Impianti fotovoltaici chiavi in mano. Progettazione, installazione 
                    e manutenzione di sistemi ad energia solare.
                  </p>
                  <a href="#contatti" className="text-sm font-medium text-foreground hover:underline inline-flex items-center gap-1">
                    Scopri di più
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Servizio 3 - Quadri Elettrici */}
              <div 
                className="group border border-border hover:border-[#FFD700] transition-colors duration-200"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={immagini.quadroelettrico} 
                    alt="Quadro elettrico" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Settings className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Quadri Elettrici</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Progettazione e installazione di quadri elettrici civili e industriali. 
                    Sistemi di automazione e domotica.
                  </p>
                  <a href="#contatti" className="text-sm font-medium text-foreground hover:underline inline-flex items-center gap-1">
                    Scopri di più
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Servizio 4 - Elettricità Civile */}
              <div 
                className="group border border-border hover:border-[#FFD700] transition-colors duration-200"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <HomeIcon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Elettricità Civile</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Installazioni complete per nuove costruzioni e ristrutturazioni. 
                    Certificazioni e collaudi secondo normativa vigente.
                  </p>
                  <a href="#contatti" className="text-sm font-medium text-foreground hover:underline inline-flex items-center gap-1">
                    Scopri di più
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Servizio 5 - Manutenzione */}
              <div 
                className="group border border-border hover:border-[#FFD700] transition-colors duration-200"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <Wrench className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Manutenzione e Riparazioni</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Servizio di pronto intervento 24/7 per emergenze. 
                    Manutenzione programmata per prevenire guasti.
                  </p>
                  <a href="#contatti" className="text-sm font-medium text-foreground hover:underline inline-flex items-center gap-1">
                    Scopri di più
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Servizio 6 - Illuminazione */}
              <div 
                className="group border border-border hover:border-[#FFD700] transition-colors duration-200"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="500"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <Lightbulb className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Illuminazione</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Progettazione e installazione di sistemi di illuminazione LED 
                    per interni ed esterni. Soluzioni energetiche efficienti.
                  </p>
                  <a href="#contatti" className="text-sm font-medium text-foreground hover:underline inline-flex items-center gap-1">
                    Scopri di più
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sezione Chi Siamo - Minimal */}
      <section id="chi-siamo" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Azienda</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                Chi Siamo
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-6 text-foreground/60 leading-relaxed" data-aos="fade-up" data-aos-duration="600">
                <p className="text-lg">
                  Azienda specializzata nel settore elettrico con oltre <strong className="text-foreground">30 anni di esperienza</strong> 
                  nella progettazione, installazione e manutenzione di impianti elettrici civili e industriali.
                </p>
                <p>
                  Ci distinguiamo per la <strong className="text-foreground">professionalità</strong>, la <strong className="text-foreground">puntualità</strong> 
                  e l'attenzione ai dettagli. Ogni intervento viene eseguito nel rispetto delle normative vigenti, 
                  garantendo sicurezza e qualità certificata.
                </p>
                <p>
                  Il nostro team è composto da <strong className="text-foreground">elettricisti qualificati</strong> e costantemente 
                  aggiornati sulle nuove tecnologie e normative del settore.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <img 
                  src={immagini.elettricisti2} 
                  alt="Elettricisti al lavoro" 
                  className="w-full h-64 object-cover"
                />
                <img 
                  src={immagini.elettricisti3} 
                  alt="Team di elettricisti" 
                  className="w-full h-64 object-cover mt-8"
                />
              </div>
            </div>

            {/* Valori - Minimal Grid */}
            <div className="grid md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
                <Shield className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Sicurezza</h3>
                <p className="text-sm text-foreground/60">Impianti certificati e a norma</p>
              </div>
              
              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <Award className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Qualità</h3>
                <p className="text-sm text-foreground/60">Materiali di prima scelta</p>
              </div>
              
              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <Clock className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Puntualità</h3>
                <p className="text-sm text-foreground/60">Rispetto dei tempi concordati</p>
              </div>

              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                <Users className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Esperienza</h3>
                <p className="text-sm text-foreground/60">Team qualificato e competente</p>
              </div>
            </div>

            {/* Sezione Capo */}
            <div className="mt-20 pt-20 border-t border-border">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-up" data-aos-duration="600">
                  <img 
                    src={immagini.capo} 
                    alt="Responsabile azienda" 
                    className="w-full max-w-md mx-auto"
                  />
                </div>
                <div className="space-y-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Direzione</div>
                    <h3 className="text-3xl font-light text-foreground mb-6">Il Nostro Responsabile</h3>
                  </div>
                  <p className="text-foreground/60 leading-relaxed">
                    Con oltre <strong className="text-foreground">25 anni di esperienza</strong> nel settore elettrico, 
                    il nostro responsabile guida un team di professionisti dedicati alla qualità e all'eccellenza. 
                    La filosofia aziendale si basa su trasparenza, affidabilità e soddisfazione del cliente.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sezione Certificazioni */}
      <section id="certificazioni" className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Certificazioni</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                Qualifiche e Certificazioni
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border p-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
                <Award className="w-10 h-10 text-foreground mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">ISO 9001:2015</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Certificazione di qualità per la gestione dei processi aziendali e la soddisfazione del cliente.
                </p>
              </div>

              <div className="border border-border p-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <Award className="w-10 h-10 text-foreground mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">SOA Categoria OG1</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Qualifica per l'esecuzione di lavori pubblici nel settore degli impianti elettrici.
                </p>
              </div>

              <div className="border border-border p-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <Award className="w-10 h-10 text-foreground mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">DURC Regolare</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Documento Unico di Regolarità Contributiva sempre aggiornato per tutti i nostri lavoratori.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sezione Lavora con Noi */}
      <section id="lavora-con-noi" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-16 text-center" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Carriere</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6">
                Lavora con Noi
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Cerchiamo professionisti motivati e qualificati per entrare a far parte del nostro team.
              </p>
            </div>

            <div className="space-y-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <div className="border border-border p-8 bg-background">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Elettricista Installatore</h3>
                    <p className="text-sm text-muted-foreground">Tempo indeterminato - Full time</p>
                  </div>
                  <Briefcase className="w-6 h-6 text-muted-foreground/80" />
                </div>
                <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                  Cerchiamo elettricista con esperienza minima di 3 anni nel settore. 
                  Conoscenza normativa CEI e capacità di lavorare in team. Offriamo contratto a tempo indeterminato, 
                  formazione continua e ambiente di lavoro stimolante.
                </p>
                <a href="#contatti" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                  Candidati ora
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="border border-border p-8 bg-background">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Tecnico Progettista</h3>
                    <p className="text-sm text-muted-foreground">Tempo indeterminato - Full time</p>
                  </div>
                  <Briefcase className="w-6 h-6 text-muted-foreground/80" />
                </div>
                <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                  Ricerchiamo tecnico progettista per impianti elettrici civili e industriali. 
                  Competenze in AutoCAD, conoscenza normativa e capacità di gestione progetti. 
                  Esperienza minima 5 anni nel settore.
                </p>
                <a href="#contatti" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                  Candidati ora
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-12 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <p className="text-foreground/60 mb-6">
                Non trovi la posizione giusta? Invia comunque il tuo curriculum
              </p>
              <a 
                href="#contatti" 
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground/80 text-sm font-medium hover:bg-[#FFD700] hover:text-background transition-colors duration-200"
              >
                Invia Curriculum
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Sezione News */}
      <section id="news" className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">News</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                Ultime Novità
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="border border-border" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
                <div className="aspect-[4/3] bg-card"></div>
                <div className="p-8">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">15 Gennaio 2024</div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Nuove Normative CEI 2024</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Aggiornamenti sulle nuove normative CEI per impianti elettrici. 
                    Scopri le novità che interessano il settore.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                    Leggi tutto
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              <article className="border border-border" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <div className="aspect-[4/3] bg-card"></div>
                <div className="p-8">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">10 Gennaio 2024</div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Progetto Completato: Uffici Aziendali</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Completato l'intervento di ristrutturazione elettrica per un complesso 
                    di uffici aziendali di 2000 mq.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                    Leggi tutto
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              <article className="border border-border" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <div className="aspect-[4/3] bg-card"></div>
                <div className="p-8">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">5 Gennaio 2024</div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Incentivi Fotovoltaico 2024</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Nuove agevolazioni e incentivi per l'installazione di impianti fotovoltaici. 
                    Scopri come risparmiare.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                    Leggi tutto
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Testimonianze</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                Cosa Dicono i Nostri Clienti
              </h2>
            </div>
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">FAQ</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                Domande Frequenti
              </h2>
            </div>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Sezione Contatti - Minimal */}
      <section id="contatti" className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-16" data-aos="fade-up" data-aos-duration="600">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Contatti</div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
                Richiedi un Preventivo
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              
              {/* Info Contatti */}
              <div className="space-y-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-8">Informazioni</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground mb-1">Indirizzo</div>
                        <div className="text-sm text-foreground/60">Via dell'Elettricità, 42<br />20100 Milano (MI)</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground mb-1">Telefono</div>
                        <a href="tel:+390212345678" className="text-sm text-foreground/60 hover:underline">
                          +39 02 1234 5678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground mb-1">Emergenze 24/7</div>
                        <a href="tel:+393401234567" className="text-sm text-foreground/60 hover:underline">
                          +39 340 123 4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground mb-1">Email</div>
                        <a href="mailto:info@elettricistiesperti.it" className="text-sm text-foreground/60 hover:underline">
                          info@elettricistiesperti.it
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground mb-1">Orari</div>
                        <div className="text-sm text-foreground/60">
                          Lun - Ven: 8:00 - 18:00<br />
                          Sabato: 9:00 - 13:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Contatti */}
              <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome e Cognome *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors"
                      placeholder="Mario Rossi"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors"
                      placeholder="mario.rossi@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefono *
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors"
                      placeholder="+39 340 123 4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Servizio di interesse
                    </label>
                    <select className="w-full px-4 py-3 border border-border bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors">
                      <option>Seleziona un servizio</option>
                      <option>Interventi in Alta Quota</option>
                      <option>Impianti Fotovoltaici</option>
                      <option>Quadri Elettrici</option>
                      <option>Elettricità Civile</option>
                      <option>Manutenzione e Riparazioni</option>
                      <option>Illuminazione</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Messaggio *
                    </label>
                    <textarea 
                      rows="5"
                      className="w-full px-4 py-3 border border-border bg-background text-foreground focus:border-slate-900 focus:outline-none transition-colors resize-none"
                      placeholder="Descrivi la tua richiesta..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1 w-4 h-4 border-border text-foreground focus:ring-slate-900"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-foreground/60">
                      Acconsento al trattamento dei dati personali secondo la normativa sulla privacy (GDPR) *
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#FFD700] text-background py-3.5 text-sm font-medium hover:bg-[#FFD700]/90 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Invia Richiesta
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

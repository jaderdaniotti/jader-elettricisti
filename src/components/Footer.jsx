import React from "react";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  
  // Funzione per gestire lo scroll smooth agli anchor (solo se siamo sulla home)
  const handleScrollTo = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Se non siamo sulla home, Link gestirà la navigazione normalmente
  };

  return (
  <footer className="bg-background border-t border-border">
    <div className="container mx-auto px-6 lg:px-16 py-16">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-[#FFD700] flex items-center justify-center">
                <Zap className="text-background w-5 h-5" />
            </div>
            <span className="text-lg font-medium text-foreground">Elettricisti Esperti</span>
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Azienda specializzata nel settore elettrico con oltre 30 anni di esperienza. 
            Soluzioni complete per impianti civili e industriali.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">Servizi</h3>
          <nav className="flex flex-col space-y-3">
            <a href="/#servizi" onClick={(e) => handleScrollTo(e, '#servizi')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Interventi in Alta Quota</a>
            <a href="/#servizi" onClick={(e) => handleScrollTo(e, '#servizi')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Impianti Fotovoltaici</a>
            <a href="/#servizi" onClick={(e) => handleScrollTo(e, '#servizi')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Quadri Elettrici</a>
            <a href="/#servizi" onClick={(e) => handleScrollTo(e, '#servizi')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Elettricità Civile</a>
            <a href="/#servizi" onClick={(e) => handleScrollTo(e, '#servizi')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Manutenzione</a>
            <a href="/#servizi" onClick={(e) => handleScrollTo(e, '#servizi')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Illuminazione</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">Azienda</h3>
          <nav className="flex flex-col space-y-3">
            <a href="/#chi-siamo" onClick={(e) => handleScrollTo(e, '#chi-siamo')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Chi Siamo</a>
            <a href="/#certificazioni" onClick={(e) => handleScrollTo(e, '#certificazioni')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Certificazioni</a>
            <a href="/#lavora-con-noi" onClick={(e) => handleScrollTo(e, '#lavora-con-noi')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Lavora con Noi</a>
            <a href="/#news" onClick={(e) => handleScrollTo(e, '#news')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">News</a>
            <a href="/#contatti" onClick={(e) => handleScrollTo(e, '#contatti')} className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">Contatti</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">Contatti</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#FFD700] mt-0.5 flex-shrink-0 w-4 h-4" />
              <div className="text-sm text-foreground/60">
                <p>Via dell'Elettricità, 42</p>
                <p>20100 Milano (MI)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#FFD700] flex-shrink-0 w-4 h-4" />
              <a href="tel:+390212345678" className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">
                +39 02 1234 5678
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#FFD700] flex-shrink-0 w-4 h-4" />
              <a href="tel:+393401234567" className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">
                +39 340 123 4567
              </a>
              <span className="text-xs text-[#FFD700]">24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#FFD700] flex-shrink-0 w-4 h-4" />
              <a href="mailto:info@elettricistiesperti.it" className="text-sm text-foreground/60 hover:text-[#FFD700] transition-colors">
                info@elettricistiesperti.it
              </a>
            </div>
            <div className="flex items-start gap-3 pt-2">
              <Clock className="text-[#FFD700] flex-shrink-0 w-4 h-4 mt-0.5" />
              <div className="text-sm text-foreground/60">
                <p>Lun - Ven: 8:00 - 18:00</p>
                <p>Sabato: 9:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Elettricisti Esperti. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <p>P.IVA: 12345678901</p>
            <p>REA: MI-1234567</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Zap, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Funzione per gestire lo scroll smooth agli anchor
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // Offset per la navbar fissa
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Chiudi il menu mobile se aperto
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#FFD700] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="text-background w-5 h-5" />
            </div>
            <span className="text-lg font-medium text-foreground">
              Elettricisti Esperti
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <a 
              href="#servizi"
              onClick={(e) => handleScrollTo(e, '#servizi')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive('/') ? 'text-[#FFD700]' : 'text-foreground/80 hover:text-[#FFD700]'
              }`}
            >
              Servizi
            </a>
            <a 
              href="#chi-siamo"
              onClick={(e) => handleScrollTo(e, '#chi-siamo')}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-[#FFD700] transition-colors"
            >
              Azienda
            </a>
            <a 
              href="#certificazioni"
              onClick={(e) => handleScrollTo(e, '#certificazioni')}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-[#FFD700] transition-colors"
            >
              Certificazioni
            </a>
            <a 
              href="#lavora-con-noi"
              onClick={(e) => handleScrollTo(e, '#lavora-con-noi')}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-[#FFD700] transition-colors"
            >
              Lavora con Noi
            </a>
            <a 
              href="#news"
              onClick={(e) => handleScrollTo(e, '#news')}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-[#FFD700] transition-colors"
            >
              News
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:border-[#FFD700] text-foreground/80 hover:text-[#FFD700] transition-all"
              aria-label="Cambia tema"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="#contatti"
              onClick={(e) => handleScrollTo(e, '#contatti')}
              className="ml-4 px-6 py-2 bg-[#FFD700] text-background text-sm font-medium hover:bg-[#FFD700]/90 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contatti
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:border-[#FFD700] text-foreground hover:text-[#FFD700] transition-all"
              aria-label="Cambia tema"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col pt-4 space-y-2">
              <a href="#servizi" onClick={(e) => handleScrollTo(e, '#servizi')} className="py-3 px-4 text-sm text-foreground/80 hover:text-[#FFD700] transition-colors">Servizi</a>
              <a href="#chi-siamo" onClick={(e) => handleScrollTo(e, '#chi-siamo')} className="py-3 px-4 text-sm text-foreground/80 hover:text-[#FFD700] transition-colors">Azienda</a>
              <a href="#certificazioni" onClick={(e) => handleScrollTo(e, '#certificazioni')} className="py-3 px-4 text-sm text-foreground/80 hover:text-[#FFD700] transition-colors">Certificazioni</a>
              <a href="#lavora-con-noi" onClick={(e) => handleScrollTo(e, '#lavora-con-noi')} className="py-3 px-4 text-sm text-foreground/80 hover:text-[#FFD700] transition-colors">Lavora con Noi</a>
              <a href="#news" onClick={(e) => handleScrollTo(e, '#news')} className="py-3 px-4 text-sm text-foreground/80 hover:text-[#FFD700] transition-colors">News</a>
              <a href="#contatti" onClick={(e) => handleScrollTo(e, '#contatti')} className="mt-2 py-3 px-4 bg-[#FFD700] text-background font-medium text-center flex items-center justify-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                Contatti
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Rileva lo scroll per cambiare lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione per gestire lo smooth scroll
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (target === "#" || target === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3" 
          : "bg-white border-b border-slate-200 py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-slate-900 flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-medium tracking-tight text-slate-900">
                Elettricisti Esperti
              </span>
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <a 
              href="#servizi"
              onClick={(e) => handleSmoothScroll(e, "#servizi")}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Servizi
            </a>
            <a 
              href="#chi-siamo"
              onClick={(e) => handleSmoothScroll(e, "#chi-siamo")}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Azienda
            </a>
            <a 
              href="#certificazioni"
              onClick={(e) => handleSmoothScroll(e, "#certificazioni")}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Certificazioni
            </a>
            <a 
              href="#lavora-con-noi"
              onClick={(e) => handleSmoothScroll(e, "#lavora-con-noi")}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Lavora con Noi
            </a>
            <a 
              href="#news"
              onClick={(e) => handleSmoothScroll(e, "#news")}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              News
            </a>
            <a 
              href="#contatti"
              onClick={(e) => handleSmoothScroll(e, "#contatti")}
              className="ml-4 px-6 py-2 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contatti
            </a>
          </div>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col pt-4">
              <a 
                href="#servizi"
                onClick={(e) => handleSmoothScroll(e, "#servizi")}
                className="py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm"
              >
                Servizi
              </a>
              <a 
                href="#chi-siamo"
                onClick={(e) => handleSmoothScroll(e, "#chi-siamo")}
                className="py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm"
              >
                Azienda
              </a>
              <a 
                href="#certificazioni"
                onClick={(e) => handleSmoothScroll(e, "#certificazioni")}
                className="py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm"
              >
                Certificazioni
              </a>
              <a 
                href="#lavora-con-noi"
                onClick={(e) => handleSmoothScroll(e, "#lavora-con-noi")}
                className="py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm"
              >
                Lavora con Noi
              </a>
              <a 
                href="#news"
                onClick={(e) => handleSmoothScroll(e, "#news")}
                className="py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-sm"
              >
                News
              </a>
              <a 
                href="#contatti"
                onClick={(e) => handleSmoothScroll(e, "#contatti")}
                className="mt-2 py-3 px-4 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors text-center flex items-center justify-center gap-2 text-sm"
              >
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

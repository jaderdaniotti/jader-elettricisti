import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 lg:hidden">
      <div className="flex flex-col gap-3">
        <a
          href="tel:+393401234567"
          className="w-14 h-14 bg-[#FFD700] text-background rounded-full flex items-center justify-center shadow-lg hover:bg-[#FFD700]/90 transition-all hover:scale-110"
          aria-label="Chiama ora"
        >
          <Phone className="w-6 h-6" />
        </a>
        <Link
          to="/#contatti"
          className="w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-foreground/90 transition-all hover:scale-110 border border-border"
          aria-label="Richiedi preventivo"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default FloatingCTA;


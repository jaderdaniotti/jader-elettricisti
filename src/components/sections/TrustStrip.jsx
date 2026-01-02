import React from "react";
import { Shield, Clock, Award, Phone } from "lucide-react";

const TrustStrip = () => {
  const items = [
    {
      icon: Shield,
      text: "Certificazioni CEI",
      subtext: "Conformità normativa"
    },
    {
      icon: Clock,
      text: "Pronto Intervento 24/7",
      subtext: "Emergenze elettriche"
    },
    {
      icon: Award,
      text: "Garanzia 2 Anni",
      subtext: "Su tutti i lavori"
    },
    {
      icon: Phone,
      text: "Risposta in 2h",
      subtext: "Preventivo rapido"
    }
  ];

  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 lg:px-16 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {item.text}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;


import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "../../data/testimonials.json";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="relative">
      <div className="border border-border bg-card p-8 md:p-12">
        <div className="flex items-center gap-2 mb-4">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
          ))}
        </div>
        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
          "{currentTestimonial.text}"
        </blockquote>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium text-foreground">
              {currentTestimonial.name}
            </div>
            <div className="text-sm text-foreground/60">
              {currentTestimonial.role} - {currentTestimonial.location}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 flex items-center justify-center border border-border hover:bg-card transition-colors"
              aria-label="Testimonianza precedente"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 flex items-center justify-center border border-border hover:bg-card transition-colors"
              aria-label="Testimonianza successiva"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#FFD700] w-8'
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Vai alla testimonianza ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;


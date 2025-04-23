
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface CarouselProps {
  images: CarouselImage[];
  autoplaySpeed?: number;
}

export function Carousel({ images, autoplaySpeed = 5000 }: CarouselProps) {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  
  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplaySpeed]);

  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Carousel content */}
      <div 
        className={`relative h-96 ${
          direction === "left" 
            ? "animate-carousel-left" 
            : direction === "right" 
            ? "animate-carousel-right" 
            : ""
        }`}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ 
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/80 to-transparent" />
            <div className="container mx-auto h-full flex flex-col justify-center text-white p-8 max-w-md">
              <h2 className="text-4xl font-bold mb-2">{image.title}</h2>
              <p className="text-xl mb-6">{image.subtitle}</p>
              {image.cta && (
                <Button 
                  className="bg-white text-brand-purple hover:bg-gray-100 self-start"
                  asChild
                >
                  <a href={image.cta.link}>
                    {image.cta.text}
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

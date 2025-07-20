import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import heroImage from "@/assets/hero-vintage.jpg";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Floating vintage elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="h-6 w-6 text-vintage-gold/50" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 border border-vintage-gold/30 rotate-45" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 rounded-full bg-secondary/30" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-foreground">
            Aditi Borse
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-vintage-gold" />
            <p className="font-cormorant text-xl md:text-2xl text-muted-foreground italic">
              UI/UX Designer & Engineer
            </p>
            <div className="h-px w-16 bg-vintage-gold" />
          </div>
          <p className="font-cormorant text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences where timeless elegance meets modern innovation. 
            Every pixel tells a story, every interaction sparks joy.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <SearchBar onSearch={onSearch} />
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="group bg-vintage-gold text-background hover:bg-vintage-gold/90 font-cormorant text-lg px-8 py-6 rounded-full shadow-gold transition-all duration-500 ease-silk hover:scale-105"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Vintage scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-vintage-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vintage-gold/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
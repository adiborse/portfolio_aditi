import React from "react";
import { Palette, Code, Heart, Award } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Button } from "@/components/ui/button";
import portraitImage from "@/assets/aditi-portrait.jpg";

export const AboutSection = () => {
  const skills = [
    { icon: Palette, name: "UI/UX Design", description: "Crafting intuitive and beautiful user experiences" },
    { icon: Code, name: "Frontend Development", description: "Bringing designs to life with modern technologies" },
    { icon: Heart, name: "User Research", description: "Understanding user needs through empathy and data" },
    { icon: Award, name: "Design Strategy", description: "Aligning business goals with user-centered design" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-vintage">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Side */}
          <div className="relative">
            <VintageCard textured className="p-8">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img
                  src={portraitImage}
                  alt="Aditi Borse"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative quote */}
              <div className="text-center">
                <blockquote className="font-display text-lg italic text-foreground mb-4">
                  "Design is not just what it looks like and feels like. 
                  Design is how it works."
                </blockquote>
                <cite className="font-cormorant text-sm text-muted-foreground">
                  — Steve Jobs
                </cite>
              </div>
            </VintageCard>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About Me
              </h2>
              <div className="space-y-4 font-cormorant text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello, I'm Aditi Borse, a passionate UI/UX Designer and Engineer based in India. 
                  With over 3 years of experience, I specialize in creating digital experiences 
                  that are both aesthetically beautiful and functionally exceptional.
                </p>
                <p>
                  My journey began with a love for both art and technology. I believe that great 
                  design happens at the intersection of human empathy and technical innovation. 
                  Every project I take on is an opportunity to solve real problems and create 
                  meaningful connections between users and technology.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring vintage markets, reading about 
                  design history, or experimenting with new creative techniques. I draw inspiration 
                  from the timeless elegance of classic design while embracing the possibilities 
                  of modern technology.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <VintageCard key={index} className="p-4 hover:bg-vintage-parchment/50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                      <skill.icon className="h-5 w-5 text-vintage-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {skill.name}
                      </h3>
                      <p className="font-cormorant text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </VintageCard>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-cormorant text-lg px-8 py-3 rounded-full shadow-vintage transition-all duration-500 ease-silk hover:scale-105"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
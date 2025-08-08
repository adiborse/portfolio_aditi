import React from "react";
import { Palette, Code, Heart, Award } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const skills = [
    { icon: Code, name: "Languages & Databases", description: "Python, Java, Dart, MySQL, MongoDB" },
    { icon: Palette, name: "Frameworks & Tools", description: "Bootstrap, React, GitHub, VSCode, Figma, Canva, Flutter" },
    { icon: Heart, name: "Web Technologies", description: "HTML, CSS, JavaScript, Node.js, Express, Flask" },
    { icon: Award, name: "AI/ML", description: "TensorFlow, PyTorch, YOLO, CNN, OpenCV, NLP" }
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
                  src="/images/ADITI_BORSE_IT.png"
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
                  Hello, I'm Aditi Borse, a passionate Software Engineer and Designer currently pursuing 
                  B.E in Information Technology at Datta Meghe College of Engineering. I specialize in 
                  creating innovative digital solutions that blend cutting-edge technology with user-centered design.
                </p>
                <p>
                  My expertise spans across full-stack development, AI/ML, mobile app development, and UI/UX design. 
                  I'm passionate about building scalable systems, implementing AI-powered solutions, and creating 
                  intuitive user experiences. From banking systems to safety applications, I love solving complex 
                  real-world problems through technology.
                </p>
                <p>
                  I'm a hackathon winner and have ranked among top performers in various competitions. 
                  My skills include Data Structures, Algorithms, Problem Solving, Scalable System Design, 
                  and Cloud Computing. I believe in continuous learning and staying updated with the latest 
                  technological advancements.
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
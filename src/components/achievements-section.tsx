import React from "react";
import { Trophy, Award, Star, Target } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024 Winner",
      description: "Led the development of an AI-powered real-time safety analytics system, enhancing public security measures and impacting over a million users nationwide.",
      year: "2024",
      category: "National Competition",
      impact: "1M+ users impacted"
    },
    {
      icon: Award,
      title: "5th Rank - IdeaHackathon (Union Bank of India)",
      description: "Engineered an AI-driven identity verification system with facial recognition and AV query management, improving fraud detection efficiency by 35%.",
      year: "2024",
      category: "Banking Innovation",
      impact: "35% efficiency improvement"
    },
    {
      icon: Star,
      title: "AI Innovation in FinTech",
      description: "Developed cutting-edge solutions combining blockchain, AI, and mobile technologies for secure banking and financial services.",
      year: "2024",
      category: "Technology Innovation",
      impact: "Enhanced Security"
    },
    {
      icon: Target,
      title: "Full-Stack Development Excellence",
      description: "Successfully delivered multiple projects spanning web platforms, mobile applications, and AI/ML systems with focus on scalability and user experience.",
      year: "2023-2024",
      category: "Technical Excellence",
      impact: "Multiple Platforms"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Recognition & Achievements
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and recognition in my journey of innovation and excellence in technology.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <VintageCard
              key={index}
              className="p-6 group hover:shadow-gold transition-all duration-500 ease-silk"
              textured
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center group-hover:bg-vintage-gold/30 transition-colors duration-300">
                  <achievement.icon className="h-6 w-6 text-vintage-gold" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-vintage-gold transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-cormorant">
                      {achievement.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground font-cormorant text-base leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-vintage-gold/20 text-vintage-gold font-cormorant text-xs"
                    >
                      {achievement.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-vintage-gold/30 text-foreground font-cormorant text-xs"
                    >
                      {achievement.impact}
                    </Badge>
                  </div>
                </div>
              </div>
            </VintageCard>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">2+</div>
            <div className="font-cormorant text-muted-foreground">Years Experience</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">5+</div>
            <div className="font-cormorant text-muted-foreground">Major Projects</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">2</div>
            <div className="font-cormorant text-muted-foreground">Hackathon Wins</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">10+</div>
            <div className="font-cormorant text-muted-foreground">Technologies</div>
          </VintageCard>
        </div>
      </div>
    </section>
  );
};
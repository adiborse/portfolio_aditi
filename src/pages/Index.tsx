import React, { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { ProjectGallery } from "@/components/project-gallery";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { EducationSection } from "@/components/education-section";
import { CertificationsSection } from "@/components/certifications-section";
import { AchievementsSection } from "@/components/achievements-section";
import { BlogSection } from "@/components/blog-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // If there's a search query, scroll to projects section
    if (query.trim()) {
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />
      
      {/* Project Gallery */}
      <ProjectGallery searchQuery={searchQuery} />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Experience Timeline */}
      <ExperienceTimeline />
      
      {/* Education Section */}
      <EducationSection />
      
      {/* Certifications Section */}
      <CertificationsSection />
      
      {/* Achievements Section */}
      <AchievementsSection />
      
      {/* Blog Section */}
      <BlogSection searchQuery={searchQuery} />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-vintage-gold/20 bg-vintage-parchment/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-cormorant text-muted-foreground">
            © 2024 Aditi Borse. Crafted with love and attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
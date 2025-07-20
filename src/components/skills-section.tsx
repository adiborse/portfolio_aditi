import React, { useState } from "react";
import { Code2, Palette, Database, Brain, Cloud, Smartphone, Globe, Shield } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = {
  "frontend": {
    icon: Palette,
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90, experience: "2+ years" },
      { name: "HTML/CSS", level: 95, experience: "3+ years" },
      { name: "JavaScript", level: 88, experience: "2+ years" },
      { name: "Bootstrap", level: 85, experience: "2+ years" },
      { name: "Tailwind CSS", level: 80, experience: "1+ year" },
      { name: "Figma", level: 92, experience: "2+ years" }
    ]
  },
  "backend": {
    icon: Database,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, experience: "2+ years" },
      { name: "Express.js", level: 83, experience: "2+ years" },
      { name: "Python", level: 88, experience: "2+ years" },
      { name: "Flask", level: 80, experience: "1+ year" },
      { name: "Spring Boot", level: 75, experience: "1+ year" },
      { name: "RESTful APIs", level: 87, experience: "2+ years" }
    ]
  },
  "database": {
    icon: Database,
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 85, experience: "2+ years" },
      { name: "MySQL", level: 82, experience: "2+ years" },
      { name: "Google Cloud", level: 78, experience: "1+ year" },
      { name: "Firebase", level: 80, experience: "1+ year" },
      { name: "Docker", level: 70, experience: "6+ months" }
    ]
  },
  "mobile": {
    icon: Smartphone,
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 88, experience: "2+ years" },
      { name: "Dart", level: 85, experience: "2+ years" },
      { name: "React Native", level: 75, experience: "1+ year" },
      { name: "Mobile UI/UX", level: 90, experience: "2+ years" }
    ]
  },
  "ai": {
    icon: Brain,
    title: "AI/ML & Data Science",
    skills: [
      { name: "TensorFlow", level: 82, experience: "1+ year" },
      { name: "PyTorch", level: 78, experience: "1+ year" },
      { name: "Computer Vision", level: 85, experience: "1+ year" },
      { name: "NLP", level: 80, experience: "1+ year" },
      { name: "YOLO", level: 75, experience: "6+ months" },
      { name: "OpenCV", level: 83, experience: "1+ year" }
    ]
  },
  "tools": {
    icon: Cloud,
    title: "Tools & Technologies",
    skills: [
      { name: "Git/GitHub", level: 90, experience: "3+ years" },
      { name: "VS Code", level: 95, experience: "3+ years" },
      { name: "Postman", level: 85, experience: "2+ years" },
      { name: "Canva", level: 88, experience: "2+ years" },
      { name: "Blockchain", level: 70, experience: "6+ months" },
      { name: "Agile/Scrum", level: 82, experience: "1+ year" }
    ]
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="py-20 px-6 bg-gradient-vintage">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Expertise
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills refined through hands-on experience and continuous learning.
          </p>
        </div>

        {/* Skills Categories Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-12 bg-vintage-cream/50 p-2 rounded-2xl">
            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex flex-col items-center gap-2 p-4 rounded-xl data-[state=active]:bg-vintage-gold data-[state=active]:text-background transition-all duration-300"
              >
                <category.icon className="h-5 w-5" />
                <span className="font-cormorant text-xs hidden md:block">{category.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <VintageCard className="p-8" textured>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-vintage-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{category.title}</h3>
                    <p className="font-cormorant text-muted-foreground">Professional proficiency and experience</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-cormorant font-semibold text-foreground">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs font-cormorant">
                            {skill.experience}
                          </Badge>
                          <span className="text-sm text-vintage-gold font-cormorant">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-vintage-cream"
                      />
                    </div>
                  ))}
                </div>
              </VintageCard>
            </TabsContent>
          ))}
        </Tabs>

        {/* Core Competencies */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <VintageCard className="p-6 text-center group hover:shadow-gold transition-all duration-500">
            <Code2 className="h-12 w-12 text-vintage-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-display text-xl font-bold text-foreground mb-2">Full-Stack Development</h4>
            <p className="font-cormorant text-muted-foreground">End-to-end application development with modern technologies</p>
          </VintageCard>

          <VintageCard className="p-6 text-center group hover:shadow-gold transition-all duration-500">
            <Brain className="h-12 w-12 text-vintage-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-display text-xl font-bold text-foreground mb-2">AI/ML Engineering</h4>
            <p className="font-cormorant text-muted-foreground">Intelligent systems and machine learning solutions</p>
          </VintageCard>

          <VintageCard className="p-6 text-center group hover:shadow-gold transition-all duration-500">
            <Palette className="h-12 w-12 text-vintage-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-display text-xl font-bold text-foreground mb-2">UI/UX Design</h4>
            <p className="font-cormorant text-muted-foreground">User-centered design and intuitive interfaces</p>
          </VintageCard>
        </div>
      </div>
    </section>
  );
};
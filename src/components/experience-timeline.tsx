import React from "react";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Engineer & AI Developer",
    company: "Freelance & Project Work",
    location: "Remote",
    period: "2023 - Present",
    type: "Professional Experience",
    description: "Leading development of AI-powered applications and full-stack solutions. Specialized in banking systems, safety applications, and educational platforms with focus on user experience and scalability.",
    achievements: [
      "Developed AI-powered banking assistant for Union Bank",
      "Created safety analytics system impacting 1M+ users",
      "Built virtual learning platform for peer collaboration",
      "Implemented facial recognition and identity verification systems"
    ],
    technologies: ["React", "Flutter", "Python", "AI/ML", "Cloud Computing"]
  },
  {
    title: "B.E Information Technology",
    company: "Datta Meghe College of Engineering",
    location: "Navi Mumbai, India",
    period: "2022 - 2026",
    type: "Education",
    description: "Pursuing Bachelor of Engineering in Information Technology with focus on software development, artificial intelligence, and system design. Active participant in hackathons and technical competitions.",
    achievements: [
      "Consistent academic performance with strong foundation in CS fundamentals",
      "Active participant in coding competitions and hackathons",
      "Leadership roles in technical projects and team collaborations",
      "Research interests in AI/ML and scalable system design"
    ],
    technologies: ["Data Structures", "Algorithms", "System Design", "Database Management"]
  },
  {
    title: "Smart India Hackathon Winner",
    company: "Government of India",
    location: "National Level",
    period: "2024",
    type: "Achievement",
    description: "Led a team to develop an AI-powered real-time safety analytics system that enhances public security measures. The solution was recognized for its innovation and potential impact on national security.",
    achievements: [
      "National level recognition for innovative AI solution",
      "Led cross-functional team of 6 developers and designers",
      "Developed scalable system architecture for real-time analytics",
      "Presented solution to government officials and industry experts"
    ],
    technologies: ["AI", "Real-time Analytics", "Computer Vision", "Public Safety Tech"]
  },
  {
    title: "AI Innovation Developer",
    company: "Union Bank of India Hackathon",
    location: "Mumbai, India",
    period: "2024",
    type: "Competition",
    description: "Secured 5th rank in Union Bank's IdeaHackathon by developing an AI-driven identity verification system with facial recognition and automated query management for banking operations.",
    achievements: [
      "5th rank among hundreds of participants nationwide",
      "Improved fraud detection efficiency by 35%",
      "Integrated blockchain technology for enhanced security",
      "Developed user-friendly mobile interface for banking staff"
    ],
    technologies: ["Flutter", "Facial Recognition", "Blockchain", "Spring Boot", "Cloud Security"]
  },
  {
    title: "Technical Project Lead",
    company: "Academic & Personal Projects",
    location: "Mumbai, India",
    period: "2022 - 2024",
    type: "Leadership",
    description: "Led multiple technical projects from conception to deployment, focusing on real-world problem solving through innovative technology solutions. Managed teams and coordinated with stakeholders.",
    achievements: [
      "Successfully delivered 5+ major projects",
      "Mentored junior developers and designers",
      "Established best practices for code quality and documentation",
      "Coordinated with cross-functional teams and stakeholders"
    ],
    technologies: ["Project Management", "Team Leadership", "Agile Methodology", "Full-Stack Development"]
  }
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Journey & Experience
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and achievements that have shaped my professional journey in technology and innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-vintage-gold via-vintage-gold to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4 bg-vintage-gold rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <VintageCard className="p-6 group hover:shadow-gold transition-all duration-500" textured>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-vintage-gold transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground font-cormorant mt-1">
                          <Building className="h-4 w-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground font-cormorant">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground font-cormorant">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="bg-vintage-gold/20 text-vintage-gold font-cormorant"
                      >
                        {experience.type}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground font-cormorant leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-4">
                      <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                        <Award className="h-4 w-4 text-vintage-gold" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground font-cormorant flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-vintage-gold rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs font-cormorant border-vintage-gold/30 text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </VintageCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">2+</div>
            <div className="font-cormorant text-muted-foreground">Years Active Development</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">5+</div>
            <div className="font-cormorant text-muted-foreground">Major Projects Delivered</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">2</div>
            <div className="font-cormorant text-muted-foreground">National Recognitions</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">1M+</div>
            <div className="font-cormorant text-muted-foreground">Users Impacted</div>
          </VintageCard>
        </div>
      </div>
    </section>
  );
};
import React from "react";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import hackathonWinner from "@/assets/hackathon-winner.png";
import educationImage from "/Screenshot 2025-07-21 205808.png";
import unionBankImage from "/unionbank.jpg";
import ideBootcampImage from "/Screenshot 2025-07-23 185659.png";
import lendenImage from "/lenden.jpg";

const experiences = [
  {
    title: "B.E Information Technology",
    company: "Datta Meghe College of Engineering",
    location: "Navi Mumbai, India",
    period: "2022 - 2026",
    type: "Education",
    image: educationImage,
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
    title: "Smart India Hackathon Winner 2024",
    company: "Government of India - BIL",
    location: "National Level",
    period: "2024",
    type: "Achievement",
    image: hackathonWinner,
    description: "Winner of Smart India Hackathon 2024 for women safety problem statement given by BIL (Bharat Electronics Limited). Led a team to develop an AI-powered real-time safety analytics system that enhances public security measures with special focus on women safety. The solution was recognized for its innovation and potential impact on national security.",
    achievements: [
      "National level winner for women safety AI solution",
      "Led cross-functional team of 6 developers and designers",
      "Developed scalable system architecture for real-time safety analytics",
      "Presented solution to government officials and BIL representatives",
      "Created comprehensive women safety monitoring system"
    ],
    technologies: ["AI", "Real-time Analytics", "Computer Vision", "Women Safety Tech", "BIL Integration"]
  },
  {
    title: "AI Innovation Developer",
    company: "Union Bank of India Hackathon",
    location: "Mumbai, India",
    period: "2024",
    type: "Competition",
    image: unionBankImage,
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
    title: "LenDenClub - The Matrix Protocol AI Hackathon",
    company: "Team SHILEDAR - Final Round",
    location: "India",
    period: "2024",
    type: "Competition",
    image: lendenImage,
    description: "Made it to the final round of LenDenClub's The Matrix Protocol AI Hackathon, standing among the top teams out of 1800+ participants from across India. Built VoxGenie, a real-time multilingual AI voice assistant to simplify P2P lending for diverse Indian users in just 48 hours.",
    achievements: [
      "Finalist among 1800+ participants from across India",
      "Built VoxGenie AI assistant with multilingual capabilities",
      "Led UI/UX design and final presentation for Team SHILEDAR",
      "Developed real-time voice assistant with biometric authentication",
      "Created inclusive financial literacy solution with multi-modal input",
      "Enabled code-mixed & regional language conversations"
    ],
    technologies: ["AI Voice Assistant", "UI/UX Design", "Multilingual AI", "Biometric Auth", "Financial Tech", "Real-time Processing"]
  },
  {
    title: "Innovation Design and Entrepreneurship (IDE) Bootcamp",
    company: "AICTE & MIC - Government Initiative",
    location: "Mumbai, India",
    period: "2025",
    type: "Leadership",
    image: ideBootcampImage,
    description: "Selected participant for the Second Edition of Innovation Design and Entrepreneurship (IDE) Bootcamp organized by AICTE and MIC. This intensive program focuses on fostering innovation, design thinking, and entrepreneurial mindset among aspiring innovators and future leaders.",
    achievements: [
      "Selected among limited participants for prestigious government bootcamp",
      "Focused on innovation design and entrepreneurial development",
      "Exposure to design thinking methodologies and startup ecosystem",
      "Networking with industry experts and fellow innovators",
      "Developing skills in product development and business strategy"
    ],
    technologies: ["Design Thinking", "Innovation Management", "Entrepreneurship", "Product Development", "Business Strategy"]
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

                    {/* Content Layout - Image Left, Text Right */}
                    {experience.image ? (
                      <div className="flex gap-6 mb-4">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={experience.image} 
                            alt={experience.title}
                            className="w-80 h-80 object-cover rounded-lg"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          {/* Description */}
                          <p className="text-muted-foreground font-cormorant leading-relaxed">
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Description for entries without image */
                      <p className="text-muted-foreground font-cormorant leading-relaxed mb-4">
                        {experience.description}
                      </p>
                    )}

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
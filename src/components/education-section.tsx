import React from "react";
import { GraduationCap, Book, Award, Users, Code, Trophy } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const education = {
  degree: "Bachelor of Engineering in Information Technology",
  institution: "Datta Meghe College of Engineering",
  location: "Navi Mumbai, Maharashtra, India",
  period: "2022 - 2026",
  status: "Currently Pursuing",
  description: "Comprehensive program focusing on software development, artificial intelligence, database management, and system design. Active involvement in practical projects and research work."
};

const coursework = [
  {
    category: "Core Computer Science",
    courses: [
      { name: "Data Structures & Algorithms", progress: 95 },
      { name: "Object-Oriented Programming", progress: 92 },
      { name: "Database Management Systems", progress: 90 },
      { name: "Software Engineering", progress: 88 },
      { name: "Computer Networks", progress: 85 }
    ]
  },
  {
    category: "Specialized Technologies",
    courses: [
      { name: "Artificial Intelligence & Machine Learning", progress: 88 },
      { name: "Web Technologies", progress: 95 },
      { name: "Mobile App Development", progress: 90 },
      { name: "Cloud Computing", progress: 82 },
      { name: "Cybersecurity Fundamentals", progress: 80 }
    ]
  },
  {
    category: "Mathematics & Analytics",
    courses: [
      { name: "Discrete Mathematics", progress: 85 },
      { name: "Statistics & Probability", progress: 83 },
      { name: "Linear Algebra", progress: 80 },
      { name: "Data Analysis", progress: 87 }
    ]
  }
];

const academicAchievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2024 Winner",
    description: "National level recognition for AI-powered safety analytics system",
    impact: "Government Recognition"
  },
  {
    icon: Award,
    title: "Union Bank Hackathon - 5th Rank",
    description: "Developed AI-driven identity verification system for banking",
    impact: "Industry Recognition"
  },
  {
    icon: Code,
    title: "Technical Project Leadership",
    description: "Led multiple cross-functional teams in developing real-world solutions",
    impact: "Leadership Skills"
  },
  {
    icon: Users,
    title: "Peer Collaboration Excellence",
    description: "Active mentor and collaborator in academic and competitive programming",
    impact: "Team Building"
  }
];

const researchInterests = [
  "Artificial Intelligence & Machine Learning",
  "Computer Vision & Image Processing",
  "Natural Language Processing",
  "Blockchain Technology",
  "Scalable System Architecture",
  "Human-Computer Interaction",
  "Mobile Computing",
  "Cloud Technologies"
];

export const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Education & Learning
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology through rigorous academic pursuit and hands-on learning.
          </p>
        </div>

        {/* Main Education Card */}
        <VintageCard className="p-8 mb-12" textured>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-vintage-gold/20 rounded-full flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-vintage-gold" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {education.degree}
                  </h3>
                  <p className="font-cormorant text-lg text-muted-foreground mb-1">
                    {education.institution}
                  </p>
                  <p className="font-cormorant text-base text-muted-foreground">
                    {education.location}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0 text-right">
                  <Badge variant="secondary" className="bg-vintage-gold/20 text-vintage-gold font-cormorant mb-2">
                    {education.status}
                  </Badge>
                  <p className="font-cormorant text-muted-foreground">
                    {education.period}
                  </p>
                </div>
              </div>
              
              <p className="font-cormorant text-base text-muted-foreground leading-relaxed">
                {education.description}
              </p>
            </div>
          </div>
        </VintageCard>

        {/* Coursework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coursework.map((category, index) => (
            <VintageCard key={index} className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Book className="h-6 w-6 text-vintage-gold" />
                <h4 className="font-display text-lg font-bold text-foreground">
                  {category.category}
                </h4>
              </div>
              
              <div className="space-y-4">
                {category.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-cormorant text-sm text-foreground">
                        {course.name}
                      </span>
                      <span className="text-xs text-vintage-gold font-cormorant">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress 
                      value={course.progress} 
                      className="h-1.5 bg-vintage-cream"
                    />
                  </div>
                ))}
              </div>
            </VintageCard>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Academic Achievements & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicAchievements.map((achievement, index) => (
              <VintageCard key={index} className="p-6 group hover:shadow-gold transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center group-hover:bg-vintage-gold/30 transition-colors duration-300">
                    <achievement.icon className="h-6 w-6 text-vintage-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground mb-2 group-hover:text-vintage-gold transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="font-cormorant text-muted-foreground text-sm leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    <Badge variant="outline" className="text-xs font-cormorant border-vintage-gold/30">
                      {achievement.impact}
                    </Badge>
                  </div>
                </div>
              </VintageCard>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <VintageCard className="p-8" textured>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            Research Interests & Future Focus
          </h3>
          
          <p className="font-cormorant text-center text-muted-foreground mb-8 leading-relaxed">
            Areas of technology and research that drive my curiosity and shape my learning journey.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {researchInterests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-vintage-gold/20 text-vintage-gold font-cormorant text-sm px-4 py-2 hover:bg-vintage-gold/30 transition-colors duration-300 cursor-default"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </VintageCard>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">4</div>
            <div className="font-cormorant text-muted-foreground">Years Program</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">15+</div>
            <div className="font-cormorant text-muted-foreground">Core Subjects</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">8</div>
            <div className="font-cormorant text-muted-foreground">Research Areas</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">2</div>
            <div className="font-cormorant text-muted-foreground">Major Awards</div>
          </VintageCard>
        </div>
      </div>
    </section>
  );
};
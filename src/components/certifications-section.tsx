import React from "react";
import { Award, CheckCircle, Calendar, ExternalLink, BookOpen } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford University)",
    date: "2024",
    status: "Completed",
    description: "Comprehensive program covering supervised learning, unsupervised learning, and neural networks. Hands-on projects with real-world datasets.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"],
    credentialId: "ML2024-ADT",
    verificationLink: "#"
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    status: "Completed",
    description: "Complete certification covering HTML, CSS, JavaScript, React, Node.js, and database management with hands-on projects.",
    skills: ["React", "Node.js", "MongoDB", "Express", "RESTful APIs"],
    credentialId: "FCC2023-FSWD",
    verificationLink: "#"
  },
  {
    title: "Google Cloud Platform Fundamentals",
    issuer: "Google Cloud",
    date: "2024",
    status: "Completed",
    description: "Core infrastructure, compute options, storage options, and networking capabilities of Google Cloud Platform.",
    skills: ["Google Cloud", "Cloud Computing", "DevOps", "Container Technology"],
    credentialId: "GCP2024-FND",
    verificationLink: "#"
  },
  {
    title: "Flutter Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    status: "Completed",
    description: "Comprehensive course on Flutter and Dart programming for building native mobile applications for iOS and Android.",
    skills: ["Flutter", "Dart", "Mobile Development", "Firebase"],
    credentialId: "UDM2023-FLT",
    verificationLink: "#"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    status: "In Progress",
    description: "Foundation-level understanding of AWS Cloud, services, and terminology. Preparing for cloud solutions architecture.",
    skills: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
    credentialId: "AWS2024-CP",
    verificationLink: "#"
  },
  {
    title: "Blockchain Development Fundamentals",
    issuer: "IBM",
    date: "2024",
    status: "In Progress",
    description: "Understanding blockchain technology, smart contracts, and decentralized application development.",
    skills: ["Blockchain", "Smart Contracts", "Ethereum", "Solidity"],
    credentialId: "IBM2024-BC",
    verificationLink: "#"
  }
];

const skillCategories = {
  "AI/ML": ["Machine Learning", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
  "Web Development": ["React", "Node.js", "Express", "MongoDB", "RESTful APIs"],
  "Mobile Development": ["Flutter", "Dart", "React Native", "Firebase"],
  "Cloud & DevOps": ["Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD"],
  "Blockchain": ["Smart Contracts", "Ethereum", "Solidity", "Web3"]
};

export const CertificationsSection = () => {
  const completedCerts = certifications.filter(cert => cert.status === "Completed");
  const inProgressCerts = certifications.filter(cert => cert.status === "In Progress");

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Certifications & Learning
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized courses to stay current with technology trends.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">{completedCerts.length}</div>
            <div className="font-cormorant text-muted-foreground">Completed</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">{inProgressCerts.length}</div>
            <div className="font-cormorant text-muted-foreground">In Progress</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">5</div>
            <div className="font-cormorant text-muted-foreground">Skill Areas</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">25+</div>
            <div className="font-cormorant text-muted-foreground">Technical Skills</div>
          </VintageCard>
        </div>

        {/* Completed Certifications */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-vintage-gold" />
            Completed Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCerts.map((cert, index) => (
              <VintageCard key={index} className="p-6 group hover:shadow-gold transition-all duration-500" textured>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center group-hover:bg-vintage-gold/30 transition-colors duration-300">
                    <Award className="h-6 w-6 text-vintage-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display font-semibold text-foreground group-hover:text-vintage-gold transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 font-cormorant text-xs">
                        Verified
                      </Badge>
                    </div>
                    
                    <p className="font-cormorant text-muted-foreground text-sm mb-1">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-cormorant mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                      <span className="mx-2">•</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                    
                    <p className="font-cormorant text-sm text-muted-foreground leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs font-cormorant border-vintage-gold/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs font-cormorant hover:bg-vintage-gold/10"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Verify Certificate
                    </Button>
                  </div>
                </div>
              </VintageCard>
            ))}
          </div>
        </div>

        {/* In Progress Certifications */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-vintage-gold" />
            Currently Pursuing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressCerts.map((cert, index) => (
              <VintageCard key={index} className="p-6 group hover:shadow-gold transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vintage-gold/10 rounded-full flex items-center justify-center group-hover:bg-vintage-gold/20 transition-colors duration-300">
                    <BookOpen className="h-6 w-6 text-vintage-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display font-semibold text-foreground group-hover:text-vintage-gold transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <Badge variant="outline" className="border-vintage-gold/30 text-vintage-gold font-cormorant text-xs">
                        In Progress
                      </Badge>
                    </div>
                    
                    <p className="font-cormorant text-muted-foreground text-sm mb-1">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-cormorant mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>Expected: {cert.date}</span>
                    </div>
                    
                    <p className="font-cormorant text-sm text-muted-foreground leading-relaxed mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs font-cormorant border-vintage-gold/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </VintageCard>
            ))}
          </div>
        </div>

        {/* Skills Categorization */}
        <VintageCard className="p-8" textured>
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-vintage-gold" />
            Certified Skills by Category
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="text-center">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  {category}
                </h4>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-vintage-gold/20 text-vintage-gold font-cormorant text-xs block"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </VintageCard>
      </div>
    </section>
  );
};
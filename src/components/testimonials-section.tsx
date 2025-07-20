import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Linkedin, Twitter } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    position: "Senior Technical Mentor",
    company: "Smart India Hackathon 2024",
    image: "/api/placeholder/100/100",
    content: "Aditi's innovative approach to AI-powered safety analytics was truly impressive. Her team's solution not only won the national competition but demonstrated real potential for large-scale implementation. Her technical depth combined with excellent presentation skills made her stand out among hundreds of participants.",
    rating: 5,
    project: "AI Safety Analytics System",
    skills: ["AI/ML", "Leadership", "Innovation"],
    linkedIn: "#",
    verified: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Product Manager",
    company: "Union Bank of India",
    image: "/api/placeholder/100/100",
    content: "Working with Aditi during the IdeaHackathon was exceptional. Her banking assistant solution showed deep understanding of financial security requirements. The facial recognition and identity verification system she developed improved our fraud detection efficiency significantly. Highly recommend her for fintech projects.",
    rating: 5,
    project: "VyomAssist Banking Solution",
    skills: ["FinTech", "Security", "Mobile Development"],
    linkedIn: "#",
    verified: true
  },
  {
    id: 3,
    name: "Prof. Anita Desai",
    position: "Head of IT Department",
    company: "Datta Meghe College of Engineering",
    image: "/api/placeholder/100/100",
    content: "Aditi is one of our most promising students. Her ability to bridge theoretical knowledge with practical applications is remarkable. She consistently delivers high-quality projects and shows excellent leadership in team collaborations. Her work on StudySync demonstrates her understanding of educational technology needs.",
    rating: 5,
    project: "Academic Excellence",
    skills: ["Full-Stack Development", "Problem Solving", "Team Leadership"],
    linkedIn: "#",
    verified: true
  },
  {
    id: 4,
    name: "Rohit Mehta",
    position: "Senior Software Engineer",
    company: "Tech Startup Mentor",
    image: "/api/placeholder/100/100",
    content: "I mentored Aditi during her mobile app development journey. Her dedication to learning Flutter and implementing complex features like real-time tracking in Raksha was impressive. She writes clean, maintainable code and has a great eye for user experience design.",
    rating: 5,
    project: "Raksha Safety App",
    skills: ["Mobile Development", "UX Design", "Code Quality"],
    linkedIn: "#",
    verified: true
  },
  {
    id: 5,
    name: "Sarah Johnson",
    position: "UI/UX Design Lead",
    company: "Design Collective",
    image: "/api/placeholder/100/100",
    content: "Aditi's design sensibility is outstanding. She understands that great design in technical applications isn't just about aesthetics—it's about making complex systems accessible. Her portfolio demonstrates a perfect balance of visual appeal and functional excellence.",
    rating: 5,
    project: "UI/UX Design Excellence",
    skills: ["UI/UX Design", "User Research", "Design Systems"],
    linkedIn: "#",
    verified: true
  },
  {
    id: 6,
    name: "Amit Patel",
    position: "Blockchain Developer",
    company: "CryptoTech Solutions",
    image: "/api/placeholder/100/100",
    content: "Aditi's understanding of blockchain technology and its applications in security is impressive for someone at her stage. She quickly grasped complex concepts and implemented them effectively in her banking security project. Looking forward to seeing her contributions in the blockchain space.",
    rating: 5,
    project: "Blockchain Security Implementation",
    skills: ["Blockchain", "Smart Contracts", "Security"],
    linkedIn: "#",
    verified: true
  }
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Testimonials & Recommendations
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Words of appreciation from mentors, collaborators, and industry professionals who have witnessed my work and dedication.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">{testimonials.length}</div>
            <div className="font-cormorant text-muted-foreground">Recommendations</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">5.0</div>
            <div className="font-cormorant text-muted-foreground">Average Rating</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">100%</div>
            <div className="font-cormorant text-muted-foreground">Verified Reviews</div>
          </VintageCard>
          
          <VintageCard className="p-6 text-center">
            <div className="text-3xl font-display font-bold text-vintage-gold mb-2">6</div>
            <div className="font-cormorant text-muted-foreground">Industries</div>
          </VintageCard>
        </div>

        {/* Featured Testimonial */}
        <VintageCard className="p-8 mb-12" textured>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Testimonial Content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Quote className="h-8 w-8 text-vintage-gold" />
                <div className="flex items-center gap-1">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-vintage-gold text-vintage-gold" />
                  ))}
                </div>
                {currentData.verified && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 font-cormorant text-xs">
                    Verified
                  </Badge>
                )}
              </div>
              
              <blockquote className="font-cormorant text-lg leading-relaxed text-muted-foreground mb-6 italic">
                "{currentData.content}"
              </blockquote>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="font-cormorant border-vintage-gold/30 text-vintage-gold">
                  {currentData.project}
                </Badge>
                {currentData.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="font-cormorant border-vintage-gold/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Author Info */}
            <div className="md:w-80 flex-shrink-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-vintage-gold">
                    {currentData.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">
                    {currentData.name}
                  </h4>
                  <p className="font-cormorant text-muted-foreground text-sm">
                    {currentData.position}
                  </p>
                  <p className="font-cormorant text-muted-foreground text-sm">
                    {currentData.company}
                  </p>
                </div>
              </div>
              
              <Button 
                size="sm" 
                variant="outline" 
                className="font-cormorant hover:bg-vintage-gold/10"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-vintage-gold/20">
            <Button 
              variant="ghost" 
              onClick={prevTestimonial}
              className="font-cormorant hover:bg-vintage-gold/10"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-vintage-gold' : 'bg-vintage-gold/30'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              onClick={nextTestimonial}
              className="font-cormorant hover:bg-vintage-gold/10"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </VintageCard>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <VintageCard 
              key={testimonial.id} 
              className={`p-6 group hover:shadow-gold transition-all duration-500 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-vintage-gold/30' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-vintage-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-vintage-gold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-foreground text-sm group-hover:text-vintage-gold transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="font-cormorant text-muted-foreground text-xs">
                    {testimonial.position}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-vintage-gold text-vintage-gold" />
                  ))}
                </div>
              </div>
              
              <p className="font-cormorant text-muted-foreground text-sm leading-relaxed line-clamp-4">
                "{testimonial.content}"
              </p>
              
              <div className="mt-4 pt-3 border-t border-vintage-gold/10">
                <Badge variant="outline" className="font-cormorant text-xs border-vintage-gold/30">
                  {testimonial.project}
                </Badge>
              </div>
            </VintageCard>
          ))}
        </div>

        {/* Call to Action */}
        <VintageCard className="mt-16 p-8 text-center" textured>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Let's Work Together
          </h3>
          <p className="font-cormorant text-muted-foreground mb-6">
            Ready to collaborate on your next project? I'd love to hear about your ideas and how we can bring them to life.
          </p>
          <Button 
            size="lg"
            className="bg-vintage-gold text-background hover:bg-vintage-gold/80 font-cormorant px-8 py-3 rounded-full"
          >
            Start a Conversation
          </Button>
        </VintageCard>
      </div>
    </section>
  );
};
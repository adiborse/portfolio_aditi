import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const projects = [
  {
    id: 1,
    title: "VyomAssist - AI-Powered Banking Support System",
    description: "Built a smart assistant for Union Bank's Vyom app to help customers get instant support through chat, voice, and video. Integrated face recognition and Aadhaar-based verification to ensure secure login and authentication.",
    image: project1,
    tags: ["Flutter", "React", "Node.js", "Spring Boot", "Flask", "Google Cloud", "TensorFlow", "Blockchain"],
    category: "AI/ML",
    year: "2024",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "StudySync - Virtual Learning Platform",
    description: "Created a virtual learning platform for students from diverse fields to collaborate and study together. Enabled group discussions, doubt clearing, and project collaboration to promote peer learning.",
    image: project2,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB"],
    category: "Web Platform",
    year: "2024",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Raksha - Mobile Safety App",
    description: "Developed a mobile safety app with real-time alerts, live tracking, and community support. Built a web platform for law enforcement with video surveillance, weapon detection, and vehicle tracking.",
    image: project1,
    tags: ["Flutter", "Dart", "MERN Stack", "AI", "ML", "Computer Vision"],
    category: "Mobile App",
    year: "2023",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "AI-Powered Safety Analytics System",
    description: "Led the development of an AI-powered real-time safety analytics system for Smart India Hackathon 2024, enhancing public security measures and impacting over a million users nationwide.",
    image: project2,
    tags: ["AI", "Computer Vision", "Real-time Analytics", "Public Safety", "Python"],
    category: "AI/ML",
    year: "2024",
    link: "#",
    github: "#"
  }
];

const categories = ["All", "AI/ML", "Web Platform", "Mobile App"];

interface ProjectGalleryProps {
  searchQuery: string;
}

export const ProjectGallery = ({ searchQuery }: ProjectGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Creative Journal
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of digital stories, each crafted with intention and brought to life through thoughtful design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                font-cormorant text-base px-6 py-3 rounded-full transition-all duration-500 ease-silk
                ${selectedCategory === category 
                  ? "bg-vintage-gold text-background shadow-gold" 
                  : "bg-vintage-cream/50 text-foreground hover:bg-vintage-gold/20 border-vintage-gold/30"
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <VintageCard
              key={project.id}
              className="group overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-silk group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`
                    absolute inset-0 bg-vintage-gold/90 backdrop-blur-sm
                    flex items-center justify-center gap-4
                    transition-opacity duration-500 ease-silk
                    ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
                  `}>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-vintage-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-cormorant">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground font-cormorant text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-secondary/20 text-secondary-foreground font-cormorant text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </VintageCard>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="font-cormorant text-xl text-muted-foreground">
              No projects found matching your search. Try a different term or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
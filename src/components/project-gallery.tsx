import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "VyomAssist - AI Banking Support System",
    description: "Built a smart assistant for Union Bank's Vyom app to help customers get instant support through chat, voice, and video. Integrated face recognition and Aadhaar-based verification to ensure secure login and authentication.",
    videoSrc: "/vid/vyom.mp4",
    tags: ["AI", "Banking", "Face Recognition", "Security", "Voice Assistant"],
    category: "AI/ML",
    year: "2024"
  },
  {
    id: 2,
    title: "Raksha - Women Safety Analytics",
    description: "Winner of Smart India Hackathon 2024 for women safety problem statement. Developed an AI-powered real-time safety analytics system that enhances public security measures with special focus on women safety.",
    videoSrc: "/vid/raksha vidd.mp4",
    tags: ["AI", "Computer Vision", "Women Safety", "Real-time Analytics", "Government"],
    category: "AI/ML",
    year: "2024"
  },
  {
    id: 3,
    title: "LokYatri - Smart Transportation",
    description: "Comprehensive transportation solution that provides smart routing, real-time tracking, and user-friendly interface for seamless travel experience. Focus on improving public transportation accessibility.",
    videoSrc: "/vid/lokyatri.mp4",
    tags: ["Smart Transport", "Real-time Tracking", "Mobile App", "UI/UX", "Navigation"],
    category: "Mobile App",
    year: "2024"
  },
  {
    id: 4,
    title: "InfluencerHub - Social Media Management Platform",
    description: "Centralized social media management platform with real-time analytics and AI-powered content generation. Amplified campaign effectiveness by 35% through intelligent automation and data-driven insights.",
    videoSrc: "/vid/infhub.mp4",
    tags: ["React", "JavaScript", "CSS", "Bootstrap", "Social Media", "Analytics", "AI Content"],
    category: "Web Platform",
    year: "2024"
  }
];

const categories = ["All", "AI/ML", "Mobile App", "Web Platform"];

interface ProjectGalleryProps {
  searchQuery: string;
}

export const ProjectGallery = ({ searchQuery }: ProjectGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());
  const [videoProgress, setVideoProgress] = useState<Record<number, number>>({});
  const [loadingVideos, setLoadingVideos] = useState<Set<number>>(new Set());

  const handleVideoPlay = (projectId: number) => {
    setPlayingVideo(projectId);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  const toggleMute = (projectId: number) => {
    const newMutedVideos = new Set(mutedVideos);
    if (mutedVideos.has(projectId)) {
      newMutedVideos.delete(projectId);
    } else {
      newMutedVideos.add(projectId);
    }
    setMutedVideos(newMutedVideos);
  };

  const handleVideoProgress = (projectId: number, currentTime: number, duration: number) => {
    if (duration > 0) {
      setVideoProgress(prev => ({
        ...prev,
        [projectId]: (currentTime / duration) * 100
      }));
    }
  };

  const handleVideoLoadStart = (projectId: number) => {
    setLoadingVideos(prev => new Set([...prev, projectId]));
  };

  const handleVideoCanPlay = (projectId: number) => {
    setLoadingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(projectId);
      return newSet;
    });
  };

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
            Technical Journal
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, learnings, and stories from my journey in technology, innovation, and problem-solving through real project demonstrations.
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
              className="group overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                {/* Project Video */}
                <div className="aspect-video overflow-hidden relative">
                  {/* Loading Skeleton */}
                  {loadingVideos.has(project.id) && (
                    <div className="absolute inset-0 bg-vintage-cream/20 animate-pulse flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-vintage-gold/30 border-t-vintage-gold rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <video
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.videoSrc}
                    poster=""
                    muted={mutedVideos.has(project.id)}
                    onPlay={() => handleVideoPlay(project.id)}
                    onPause={handleVideoPause}
                    onLoadStart={() => handleVideoLoadStart(project.id)}
                    onCanPlay={() => handleVideoCanPlay(project.id)}
                    onTimeUpdate={(e) => {
                      const video = e.target as HTMLVideoElement;
                      handleVideoProgress(project.id, video.currentTime, video.duration);
                    }}
                    controls={false}
                    preload="metadata"
                  />
                  
                  {/* Video Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div 
                      className="h-full bg-vintage-gold transition-all duration-200"
                      style={{ width: `${videoProgress[project.id] || 0}%` }}
                    />
                  </div>
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-4 right-4 flex items-center justify-between">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20 min-h-[44px] min-w-[44px] transition-all duration-200 hover:scale-110"
                        aria-label={playingVideo === project.id ? "Pause video" : "Play video"}
                        onClick={() => {
                          const video = document.querySelector(`video[src="${project.videoSrc}"]`) as HTMLVideoElement;
                          if (video) {
                            if (video.paused) {
                              video.play();
                            } else {
                              video.pause();
                            }
                          }
                        }}
                      >
                        {playingVideo === project.id ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20 min-h-[44px] min-w-[44px] transition-all duration-200 hover:scale-110"
                        aria-label={mutedVideos.has(project.id) ? "Unmute video" : "Mute video"}
                        onClick={() => toggleMute(project.id)}
                      >
                        {mutedVideos.has(project.id) ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-vintage-gold/90 text-background font-cormorant">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 font-cormorant">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-vintage-gold transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-cormorant text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs font-cormorant border-vintage-gold/30 text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="font-cormorant border-vintage-gold/50 hover:bg-vintage-gold/10"
                    >
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-vintage-gold hover:bg-vintage-gold/90 text-background font-cormorant"
                    >
                      Live Demo
                    </Button>
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
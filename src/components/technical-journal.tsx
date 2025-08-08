import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "VyomAssist - AI Banking Support System",
    description: "Built a smart assistant for Union Bank's Vyom app to help customers get instant support through chat, voice, and video. Integrated face recognition and Aadhaar-based verification to ensure secure login and authentication.",
    videoSrc: "/vid/vyom.mp4",
    category: "AI/Banking",
    technologies: ["AI", "Banking", "Face Recognition", "Security", "Voice Assistant"],
    year: "2024"
  },
  {
    id: 2,
    title: "Raksha - Women Safety Analytics",
    description: "Winner of Smart India Hackathon 2024 for women safety problem statement. Developed an AI-powered real-time safety analytics system that enhances public security measures with special focus on women safety.",
    videoSrc: "/vid/raksha vidd.mp4",
    category: "AI/Safety",
    technologies: ["AI", "Computer Vision", "Women Safety", "Real-time Analytics", "Government"],
    year: "2024"
  },
  {
    id: 3,
    title: "LokYatri - Smart Transportation",
    description: "Comprehensive transportation solution that provides smart routing, real-time tracking, and user-friendly interface for seamless travel experience. Focus on improving public transportation accessibility.",
    videoSrc: "/vid/lokyatri.mp4",
    category: "Transportation",
    technologies: ["Smart Transport", "Real-time Tracking", "Mobile App", "UI/UX", "Navigation"],
    year: "2024"
  }
];

export const TechnicalJournal = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());

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

  return (
    <section id="technical-journal" className="py-20 px-6">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <VintageCard key={project.id} className="overflow-hidden group hover:shadow-gold transition-all duration-500" textured>
              {/* Video Section */}
              <div className="relative aspect-video bg-vintage-cream/20 overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={project.videoSrc}
                  poster=""
                  muted={mutedVideos.has(project.id)}
                  onPlay={() => handleVideoPlay(project.id)}
                  onPause={handleVideoPause}
                  controls={false}
                  preload="metadata"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
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
                      className="text-white hover:bg-white/20"
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

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-vintage-gold transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="font-cormorant text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs font-cormorant border-vintage-gold/30 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </VintageCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalJournal;

import React, { useState } from "react";
import { BookOpen, Calendar, Clock, Tag, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react";
import { VintageCard } from "@/components/ui/vintage-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Building AI-Powered Banking Solutions: Lessons from VyomAssist",
    excerpt: "Deep dive into developing an intelligent banking assistant that handles customer queries through multiple channels while ensuring security and compliance.",
    content: "Creating VyomAssist was a journey that taught me the importance of balancing innovation with security in financial technology...",
    author: "Aditi Borse",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "AI/ML",
    tags: ["Artificial Intelligence", "Banking", "Flutter", "Security"],
    image: "/api/placeholder/600/300",
    likes: 24,
    comments: 8,
    featured: true
  },
  {
    id: 2,
    title: "The Future of Mobile Safety: Real-time Analytics in Action",
    excerpt: "How we developed Raksha, a comprehensive safety platform that combines mobile alerts, community support, and AI-powered threat detection.",
    content: "Safety in the digital age requires more than just emergency buttons. Our approach with Raksha focuses on proactive threat detection...",
    author: "Aditi Borse",
    date: "2024-01-28",
    readTime: "6 min read",
    category: "Mobile Development",
    tags: ["Mobile App", "Safety", "Real-time", "Computer Vision"],
    image: "/api/placeholder/600/300",
    likes: 18,
    comments: 5,
    featured: false
  },
  {
    id: 3,
    title: "Winning Smart India Hackathon: From Idea to National Recognition",
    excerpt: "The complete journey of developing our AI-powered safety analytics system that won the national competition and its impact on public security.",
    content: "When we started working on our Smart India Hackathon project, we knew we wanted to solve a real problem that affects millions...",
    author: "Aditi Borse",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Competition",
    tags: ["Hackathon", "AI", "Public Safety", "Innovation"],
    image: "/api/placeholder/600/300",
    likes: 42,
    comments: 15,
    featured: true
  },
  {
    id: 4,
    title: "Full-Stack Development Best Practices: Lessons from StudySync",
    excerpt: "Key insights and architectural decisions that made StudySync a successful virtual learning platform for collaborative education.",
    content: "Building StudySync taught me that the best learning platforms are those that facilitate genuine human connection...",
    author: "Aditi Borse",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Web Development",
    tags: ["Full-Stack", "Education", "Collaboration", "MERN"],
    image: "/api/placeholder/600/300",
    likes: 31,
    comments: 12,
    featured: false
  },
  {
    id: 5,
    title: "Blockchain in Banking: Enhancing Security Through Innovation",
    excerpt: "Exploring how blockchain technology can revolutionize identity verification and fraud detection in modern banking systems.",
    content: "The intersection of blockchain and banking presents unique opportunities for enhancing security and user trust...",
    author: "Aditi Borse",
    date: "2023-12-05",
    readTime: "9 min read",
    category: "Blockchain",
    tags: ["Blockchain", "Security", "FinTech", "Innovation"],
    image: "/api/placeholder/600/300",
    likes: 28,
    comments: 7,
    featured: false
  },
  {
    id: 6,
    title: "The Art of UI/UX Design in Technical Applications",
    excerpt: "How to balance functionality with aesthetics when designing interfaces for complex technical solutions and enterprise applications.",
    content: "Great design in technical applications isn't about making things pretty—it's about making complex systems accessible...",
    author: "Aditi Borse",
    date: "2023-11-18",
    readTime: "5 min read",
    category: "Design",
    tags: ["UI/UX", "Design", "User Experience", "Technical"],
    image: "/api/placeholder/600/300",
    likes: 22,
    comments: 9,
    featured: false
  }
];

const categories = ["All", "AI/ML", "Mobile Development", "Web Development", "Design", "Competition", "Blockchain"];

interface BlogSectionProps {
  searchQuery?: string;
}

export const BlogSection = ({ searchQuery = "" }: BlogSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="py-20 px-6 bg-gradient-vintage">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Journal
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, learnings, and stories from my journey in technology, innovation, and problem-solving.
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

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-vintage-gold" />
              Featured Articles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <VintageCard 
                  key={post.id} 
                  className="group overflow-hidden hover:shadow-gold transition-all duration-500"
                  textured
                >
                  <div className="aspect-[16/9] bg-vintage-cream/50 mb-6 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-vintage-gold/20 to-vintage-gold/5 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-vintage-gold/50" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="bg-vintage-gold/20 text-vintage-gold font-cormorant">
                        {post.category}
                      </Badge>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground font-cormorant">
                        Featured
                      </Badge>
                    </div>
                    
                    <h4 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-vintage-gold transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="font-cormorant text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground font-cormorant mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs font-cormorant border-vintage-gold/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="font-cormorant hover:bg-vintage-gold/10"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </VintageCard>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              All Articles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <VintageCard 
                  key={post.id} 
                  className="group overflow-hidden hover:shadow-vintage transition-all duration-500"
                >
                  <div className="aspect-[16/10] bg-vintage-cream/30 mb-4 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-vintage-gold/10 to-vintage-gold/5 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-vintage-gold/50" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3 font-cormorant border-vintage-gold/30 text-vintage-gold">
                      {post.category}
                    </Badge>
                    
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-vintage-gold transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="font-cormorant text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-cormorant mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-xs font-cormorant hover:bg-vintage-gold/10 p-2"
                      >
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </VintageCard>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-vintage-gold/50 mx-auto mb-4" />
            <p className="font-cormorant text-xl text-muted-foreground">
              No articles found matching your criteria. Try a different category or search term.
            </p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <VintageCard className="mt-16 p-8 text-center" textured>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Stay Updated
          </h3>
          <p className="font-cormorant text-muted-foreground mb-6">
            Subscribe to get notified about new articles on technology, innovation, and my latest projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-full border border-vintage-gold/30 bg-vintage-cream/50 font-cormorant focus:outline-none focus:border-vintage-gold"
            />
            <Button className="bg-vintage-gold text-background hover:bg-vintage-gold/80 font-cormorant px-6 py-2 rounded-full">
              Subscribe
            </Button>
          </div>
        </VintageCard>
      </div>
    </section>
  );
};
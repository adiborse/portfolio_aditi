import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { VintageCard } from "@/components/ui/vintage-card";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "adi.borse2104@gmail.com", href: "mailto:adi.borse2104@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-9373847863", href: "tel:+919373847863" },
    { icon: MapPin, label: "Location", value: "Airoli, Navi Mumbai", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/aditiborse", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/aditiborse", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/aditiborse", label: "Instagram" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Create Together
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <VintageCard textured className="p-6">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-vintage-parchment/50 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-vintage-gold/20 rounded-full flex items-center justify-center group-hover:bg-vintage-gold/30 transition-colors duration-300">
                      <item.icon className="h-5 w-5 text-vintage-gold" />
                    </div>
                    <div>
                      <p className="font-cormorant font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="font-cormorant text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-vintage-gold/20">
                <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-10 h-10 p-0 rounded-full border-vintage-gold/30 hover:bg-vintage-gold/20 hover:border-vintage-gold"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </VintageCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <VintageCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-cormorant font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-vintage-cream/50 border-vintage-gold/30 focus:border-vintage-gold font-cormorant"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-cormorant font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-vintage-cream/50 border-vintage-gold/30 focus:border-vintage-gold font-cormorant"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-cormorant font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-vintage-cream/50 border-vintage-gold/30 focus:border-vintage-gold font-cormorant"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-cormorant font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-vintage-cream/50 border-vintage-gold/30 focus:border-vintage-gold font-cormorant resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-vintage-gold text-background hover:bg-vintage-gold/90 font-cormorant text-lg py-3 rounded-full shadow-gold transition-all duration-500 ease-silk hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </VintageCard>
          </div>
        </div>
      </div>
    </section>
  );
};
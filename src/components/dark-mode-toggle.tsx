import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 z-50 w-12 h-12 p-0 rounded-full",
        "bg-vintage-cream/80 backdrop-blur-sm border-vintage-gold/30",
        "hover:bg-vintage-gold/20 hover:border-vintage-gold",
        "transition-all duration-500 ease-silk hover:scale-110",
        "shadow-vintage"
      )}
      title={isDark ? "Switch to Light Mode" : "Switch to Luxury Noir Mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-vintage-gold transition-transform duration-500 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 text-vintage-gold transition-transform duration-500 rotate-0" />
      )}
      <span className="sr-only">
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>
    </Button>
  );
};
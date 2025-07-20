import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface VintageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  textured?: boolean;
}

export const VintageCard = ({ 
  children, 
  className, 
  hover = true, 
  textured = false,
  ...props
}: VintageCardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden",
        "bg-vintage-parchment border-vintage-gold/20",
        "shadow-vintage backdrop-blur-sm",
        textured && "vintage-texture",
        hover && [
          "transition-all duration-500 ease-silk",
          "hover:scale-105 hover:shadow-gold hover:border-vintage-gold/40",
          "hover:-rotate-1"
        ],
        className
      )}
      {...props}
    >
      {/* Vintage corner decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-vintage-gold/30" />
      <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-vintage-gold/30" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-vintage-gold/30" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-vintage-gold/30" />
      
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle gold shimmer effect */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, hsl(var(--vintage-gold) / 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 2s linear infinite'
        }}
      />
    </Card>
  );
};
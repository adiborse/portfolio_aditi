import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({ onSearch, placeholder = "Search projects, skills, awards...", className }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className={cn(
      "relative max-w-2xl mx-auto transition-all duration-500 ease-silk",
      isFocused && "scale-105",
      className
    )}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "pl-12 pr-12 py-6 text-lg font-cormorant",
            "bg-vintage-cream/80 backdrop-blur-sm",
            "border-vintage-gold/30 focus:border-vintage-gold",
            "rounded-2xl shadow-vintage",
            "placeholder:text-muted-foreground/70",
            "transition-all duration-500 ease-silk"
          )}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Vintage decorative elements */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-vintage-gold/50 rounded-tl-lg" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-vintage-gold/50 rounded-tr-lg" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-vintage-gold/50 rounded-bl-lg" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-vintage-gold/50 rounded-br-lg" />
    </div>
  );
};
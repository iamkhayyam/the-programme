import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeLevel = 0 | 1 | 2 | 3;

interface ThemeContextType {
  level: ThemeLevel;
  setLevel: (level: ThemeLevel) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  isBlinking: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [level, setLevelState] = useState<ThemeLevel>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme-level");
      return saved ? (parseInt(saved) as ThemeLevel) : 0;
    }
    return 0;
  });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove all theme classes
    root.classList.remove("theme-0", "theme-1", "theme-2", "theme-3", "dark");
    
    // Add current theme class
    root.classList.add(`theme-${level}`);
    
    // Also add 'dark' class for levels 2 and 3 for tailwind dark: modifiers if needed
    if (level >= 2) {
      root.classList.add("dark");
    }
    
    localStorage.setItem("theme-level", level.toString());
  }, [level]);

  const setLevel = (newLevel: ThemeLevel) => {
    if (newLevel === level) return;
    
    setIsBlinking(true);
    setTimeout(() => {
      setLevelState(newLevel);
    }, 400); 
    setTimeout(() => {
      setIsBlinking(false);
    }, 800);
  };

  const theme = level >= 2 ? "dark" : "light";
  const toggleTheme = () => {
    const newLevel: ThemeLevel = level < 2 ? 2 : 0;
    setLevel(newLevel);
  };

  return (
    <ThemeContext.Provider value={{ level, setLevel, theme, toggleTheme, isBlinking }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

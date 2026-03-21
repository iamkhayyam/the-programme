import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "./PageTransition";
import gsap from "gsap";
import { ReadingSpeedProvider } from "../context/ReadingSpeedContext";
import { useTheme } from "../context/ThemeContext";
import AutoScroller from "./AutoScroller";
import { AnimatePresence } from "motion/react";

interface LayoutProps {
  children: React.ReactNode;
}

const YinYang = ({ size = 12 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-700 ease-in-out"
  >
    <circle cx="50" cy="50" r="50" fill="currentColor" />
    <path d="M50,0 A50,50 0 0,1 50,100 A25,25 0 0,1 50,50 A25,25 0 0,0 50,0" fill="var(--bg-color)" />
    <circle cx="50" cy="25" r="8" fill="currentColor" />
    <circle cx="50" cy="75" r="8" fill="var(--bg-color)" />
  </svg>
);

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const logoRef = useRef<HTMLAnchorElement>(null);
  const { theme, toggleTheme, isBlinking } = useTheme();

  const handleLogoHover = () => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      skewX: 1.5,
      duration: 1.2,
      ease: "power2.out"
    });
  };

  const handleLogoLeave = () => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      skewX: 0,
      duration: 1.2,
      ease: "power2.inOut"
    });
  };

  return (
    <ReadingSpeedProvider>
      <div className="min-h-screen selection:bg-accent/30 text-ink font-plex-sans relative">
        {/* --- BLINK OVERLAY --- */}
        <AnimatePresence>
          {isBlinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "expo.inOut" }}
              className="fixed inset-0 bg-[#121212] z-[10001] pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* --- SITE HEADER --- */}
        <header className="fixed top-0 left-0 right-0 z-[100] border-b border-ink bg-linen px-4 md:px-8 h-14 flex items-center justify-between">
          <Link 
            ref={logoRef}
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
            to="/" 
            className="font-space font-medium text-[0.95rem] tracking-[0.28em] uppercase text-ink leading-none"
          >
            KNOWWARE<span className="block text-[0.6rem] tracking-[0.22em] text-mid font-light mt-1">THE &nbsp; A.R.C &nbsp; INSTITUTE</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-space text-[0.7rem] tracking-[0.12em] uppercase font-medium">
            <Link to="/preprints" className="hover:text-mid transition-colors">Papers</Link>
            <Link to="/essays" className="hover:text-mid transition-colors">Essays</Link>
            <Link 
              to="/constitutional-proof" 
              className={`transition-all duration-300 ${location.pathname === '/constitutional-proof' ? 'text-ink font-bold underline decoration-accent decoration-2 underline-offset-4' : 'hover:text-mid'}`}
            >
              SCRIPT
            </Link>
            <a href="https://github.com/iamkhayyam/the-programme" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-mid transition-colors">
              GitHub <ExternalLink size={10} />
            </a>
            <Link to="/contact" className="hover:text-mid transition-colors">Contact</Link>
          </nav>
        </header>

        <main className="relative z-10 pt-14 pb-14">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        {/* --- FOOTER --- */}
        <footer className="fixed bottom-0 left-0 right-0 z-[100] border-t border-ink bg-linen/90 backdrop-blur-sm px-4 md:px-8 py-3 flex items-center justify-between font-plex-mono text-[0.6rem] tracking-widest uppercase text-mid">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <span>Knowware is measured in lifetimes</span>
            <span className="hidden sm:inline">In Progress · March 2026</span>
            <span className="hidden lg:inline">Registered · Canada</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-5 h-5 rounded-full flex items-center justify-center bg-ink text-light border border-rule/30 hover:border-accent transition-all shadow-lg active:scale-90 overflow-hidden"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              <div className={`transition-transform duration-700 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`}>
                <YinYang size={12} />
              </div>
            </button>
            <AutoScroller />
          </div>
        </footer>
      </div>
    </ReadingSpeedProvider>
  );
}

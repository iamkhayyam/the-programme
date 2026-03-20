import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "./PageTransition";
import gsap from "gsap";
import { ReadingSpeedProvider } from "../context/ReadingSpeedContext";
import AutoScroller from "./AutoScroller";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const logoRef = useRef<HTMLAnchorElement>(null);

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
        {/* --- SITE HEADER --- */}
        <header className="sticky top-0 z-[100] border-b border-ink bg-linen px-4 md:px-8 h-14 flex items-center justify-between">
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
            <Link to="/constitutional-proof" className="hover:text-mid transition-colors">The Play</Link>
            <a href="https://github.com/iamkhayyam/the-programme" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-mid transition-colors">
              GitHub <ExternalLink size={10} />
            </a>
            <Link to="/contact" className="hover:text-mid transition-colors">Contact</Link>
          </nav>
        </header>

        <main className="relative z-10">
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        <AutoScroller />

        {/* --- FOOTER --- */}
        <footer className="sticky bottom-0 z-[100] border-t border-ink bg-linen/90 backdrop-blur-sm px-8 py-4 flex flex-col md:flex-row justify-between font-plex-mono text-[0.6rem] tracking-widest uppercase text-mid gap-2">
          <span>Knowware is measured in lifetimes</span>
          <span>In Progress · March 2026</span>
          <span>Registered · Canada</span>
        </footer>
      </div>
    </ReadingSpeedProvider>
  );
}

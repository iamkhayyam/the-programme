import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const eyelidTopRef = useRef<HTMLDivElement>(null);
  const eyelidBottomRef = useRef<HTMLDivElement>(null);
  const staticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !eyelidTopRef.current || !eyelidBottomRef.current || !staticRef.current) return;

    const ctx = gsap.context(() => {
      // Reset state
      gsap.set([eyelidTopRef.current, eyelidBottomRef.current], { yPercent: 0, opacity: 1 });
      gsap.set(staticRef.current, { opacity: 0.1 });
      gsap.set(containerRef.current, { opacity: 0, filter: "blur(8px)" });

      const tl = gsap.timeline();

      // 1. Initial "static" burst - Subdued
      tl.to(staticRef.current, {
        opacity: 0.2,
        duration: 0.08,
        repeat: 2,
        yoyo: true,
        ease: "none"
      });

      // 2. Eyelids opening - Smoother and more gradual
      tl.to(eyelidTopRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "expo.inOut"
      }, "+=0.05");

      tl.to(eyelidBottomRef.current, {
        yPercent: 100,
        duration: 0.8,
        ease: "expo.inOut"
      }, "<");

      // 3. Content reveal - Softer fade
      tl.to(containerRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.5");

      tl.to(staticRef.current, {
        opacity: 0.03,
        duration: 1.2,
        ease: "power1.inOut"
      }, "-=1.0");

      // Subtle scroll reveal for all sections
      const sections = containerRef.current?.querySelectorAll("section, .reveal");
      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 94%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Blinking Eyelids - Dark Charcoal */}
      <div 
        ref={eyelidTopRef}
        className="fixed top-0 left-0 w-full h-1/2 bg-[#121212] z-[10000] pointer-events-none origin-top will-change-transform"
      />
      <div 
        ref={eyelidBottomRef}
        className="fixed bottom-0 left-0 w-full h-1/2 bg-[#121212] z-[10000] pointer-events-none origin-bottom will-change-transform"
      />
      
      {/* Static/Noise overlay */}
      <div 
        ref={staticRef}
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-screen bg-repeat"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div ref={containerRef} className="opacity-0">
        {children}
      </div>
    </div>
  );
}

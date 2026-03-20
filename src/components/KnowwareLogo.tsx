import React, { useEffect, useRef, useId } from "react";

interface KnowwareLogoProps {
  size?: number | string;
  className?: string;
  strokeColor?: string;
  circleColor?: string;
}

/**
 * KnowwareLogo component
 * Renders an animated SVG logo with a "Constitutional Sieve" effect.
 * Uses the exact geometric lines and mathematical motion from the source SVG.
 */
export default function KnowwareLogo({ 
  size = "100%", 
  className = "",
  strokeColor = "currentColor",
  circleColor = "#1a1a1a"
}: KnowwareLogoProps) {
  const circlesRef = useRef<(SVGCircleElement | null)[]>([]);
  const clipId = useId().replace(/:/g, "");

  useEffect(() => {
    let requestRef: number;
    let startTime: number | null = null;
    const DURATION = 12000; // Slow, elegant cycle

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = (time - startTime) % DURATION;
      const t = elapsed / DURATION;

      // Update 64 dots across 16 lines (4 dots per line)
      for (let i = 0; i < 64; i++) {
        const circle = circlesRef.current[i];
        if (!circle) continue;
        
        const lineIdx = i % 16;
        const dotInLineIdx = Math.floor(i / 16);
        
        // Angles matching the source SVG (11.25 degree increments)
        // The source SVG uses negative increments for its line definitions
        const angle = (lineIdx * -11.25) * (Math.PI / 180);
        
        // Harmonic motion: r = 250 * sin(t * 2pi + phase)
        // Staggering phases creates the "sieve" effect
        // pi/8 spreads phases across lines; pi/2 spreads 4 dots along each line
        const phase = (lineIdx * Math.PI / 8) + (dotInLineIdx * Math.PI / 2);
        const r = 250 * Math.sin(t * Math.PI * 2 + phase);
        
        const cx = 300 + r * Math.cos(angle);
        const cy = 300 + r * Math.sin(angle);
        
        circle.setAttribute("cx", cx.toString());
        circle.setAttribute("cy", cy.toString());
        
        // Ethereal pulse: vary opacity and radius slightly
        const pulse = 0.5 + 0.5 * Math.cos(t * Math.PI * 4 + phase);
        circle.setAttribute("opacity", (0.2 + 0.6 * pulse).toString());
        circle.setAttribute("r", (7 + 4 * pulse).toString());
      }

      requestRef = requestAnimationFrame(animate);
    };

    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  // Exact line definitions from the source SVG
  const lines = [
    { x1: 50, y1: 300, x2: 550, y2: 300 },
    { x1: 54.8, y1: 348.8, x2: 545.2, y2: 251.2 },
    { x1: 69.0, y1: 395.7, x2: 531.0, y2: 204.3 },
    { x1: 92.1, y1: 438.9, x2: 507.9, y2: 161.1 },
    { x1: 123.2, y1: 476.8, x2: 476.8, y2: 123.2 },
    { x1: 161.1, y1: 507.9, x2: 438.9, y2: 92.1 },
    { x1: 204.3, y1: 531.0, x2: 395.7, y2: 69.0 },
    { x1: 251.2, y1: 545.2, x2: 348.8, y2: 54.8 },
    { x1: 300, y1: 550, x2: 300, y2: 50 },
    { x1: 348.8, y1: 545.2, x2: 251.2, y2: 54.8 },
    { x1: 395.7, y1: 531.0, x2: 204.3, y2: 69.0 },
    { x1: 438.9, y1: 507.9, x2: 161.1, y2: 92.1 },
    { x1: 476.8, y1: 476.8, x2: 123.2, y2: 123.2 },
    { x1: 507.9, y1: 438.9, x2: 92.1, y2: 161.1 },
    { x1: 531.0, y1: 395.7, x2: 69.0, y2: 204.3 },
    { x1: 545.2, y1: 348.8, x2: 54.8, y2: 251.2 }
  ];

  return (
    <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 600 600"
        className="w-full h-full"
      >
        <defs>
          <clipPath id={`clip-${clipId}`}>
            <circle cx="300" cy="300" r="250" />
          </clipPath>
        </defs>
        
        <rect width="600" height="600" fill="none" />
        
        <g clipPath={`url(#clip-${clipId})`}>
          {/* 16 Geometric Lines */}
          {lines.map((l, i) => (
            <line 
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} 
              stroke={strokeColor} 
              strokeWidth="1.5" 
              opacity="0.15"
            />
          ))}

          {/* 64 Animated Dots */}
          {[...Array(64)].map((_, idx) => (
            <circle 
              key={idx}
              ref={el => circlesRef.current[idx] = el}
              fill={circleColor} 
              r="10"
            />
          ))}
        </g>
        
        {/* Outer Ring */}
        <circle 
          cx="300" cy="300" r="250" 
          fill="none" 
          stroke={strokeColor} 
          strokeWidth="2" 
          opacity="0.3" 
        />
      </svg>
    </div>
  );
}

import React, { useEffect, useRef } from "react";

/**
 * CollatzAnimation component
 * Renders a "Seaweed" style Collatz Conjecture visualization.
 * Numbers branch out from 1, following the inverse Collatz rules:
 * - n -> 2n
 * - n -> (n-1)/3 (if (n-1)%3 == 0 and result is odd)
 */
export default function CollatzAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const len = 8; // Length of each segment
    const angleEven = 0.15; // Angle for 2n branch
    const angleOdd = -0.25; // Angle for (n-1)/3 branch

    const drawCollatz = (n: number, x: number, y: number, angle: number, depth: number) => {
      if (depth > 15) return;

      const nextX = x + len * Math.cos(angle);
      const nextY = y + len * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nextX, nextY);
      ctx.strokeStyle = `rgba(120, 120, 120, ${0.15 - depth * 0.01})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Always branch to 2n
      drawCollatz(n * 2, nextX, nextY, angle + angleEven, depth + 1);

      // Branch to (n-1)/3 if applicable
      if (n > 1 && (n - 1) % 3 === 0 && ((n - 1) / 3) % 2 !== 0) {
        drawCollatz((n - 1) / 3, nextX, nextY, angle + angleOdd, depth + 1);
      }
    };

    // For a background, we want something more dynamic than a static tree.
    // Let's draw multiple "vines" that grow over time.
    
    interface Vine {
      n: number;
      x: number;
      y: number;
      angle: number;
      depth: number;
      opacity: number;
      speed: number;
      segments: { x1: number; y1: number; x2: number; y2: number; opacity: number }[];
    }

    let vines: Vine[] = [];

    const createVine = () => {
      return {
        n: Math.floor(Math.random() * 100) + 1,
        x: Math.random() * width,
        y: height + 50,
        angle: -Math.PI / 2 + (Math.random() - 0.5) * 0.5,
        depth: 0,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 2 + 1,
        segments: []
      };
    };

    for (let i = 0; i < 15; i++) {
      vines.push(createVine());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      vines.forEach((vine, i) => {
        // Draw existing segments
        vine.segments.forEach(seg => {
          ctx.beginPath();
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
          ctx.strokeStyle = `rgba(150, 150, 150, ${seg.opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        });

        // Add new segment based on Collatz
        if (vine.depth < 40) {
          const currentN = vine.n;
          let nextN: number;
          let turnAngle: number;

          if (currentN % 2 === 0) {
            nextN = currentN / 2;
            turnAngle = 0.1;
          } else {
            nextN = currentN * 3 + 1;
            turnAngle = -0.2;
          }

          const nextAngle = vine.angle + turnAngle;
          const nextX = vine.x + len * Math.cos(nextAngle);
          const nextY = vine.y + len * Math.sin(nextAngle);

          vine.segments.push({
            x1: vine.x,
            y1: vine.y,
            x2: nextX,
            y2: nextY,
            opacity: vine.opacity * (1 - vine.depth / 40)
          });

          vine.n = nextN;
          vine.x = nextX;
          vine.y = nextY;
          vine.angle = nextAngle;
          vine.depth++;
        } else {
          // Reset vine
          vines[i] = createVine();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}

import React, { useRef, useLayoutEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ChevronRight, BookOpen, FileText, Info } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { PAPERS } from "../constants/programme";
import { ESSAYS } from "./Essays";
import KnowwareLogo from "../components/KnowwareLogo";
import { Fraction } from "../components/Fraction";

export default function Home() {
  const maktubRef = useRef<HTMLImageElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const closingContentRef = useRef<HTMLDivElement>(null);
  const sonarContainerRef = useRef<HTMLDivElement>(null);

  const handleMaktubHover = () => {
    if (!maktubRef.current) return;
    gsap.to(maktubRef.current, {
      scale: 1.04,
      filter: "hue-rotate(15deg) brightness(1.1) blur(1px)",
      duration: 0.8,
      ease: "power2.out"
    });
  };

  const handleMaktubLeave = () => {
    if (!maktubRef.current) return;
    gsap.to(maktubRef.current, {
      scale: 1,
      filter: "hue-rotate(0deg) brightness(1) blur(0px)",
      duration: 0.8,
      ease: "power2.inOut"
    });
  };

  useLayoutEffect(() => {
    if (!closingRef.current || !closingContentRef.current || !maktubRef.current) return;

    const ctx = gsap.context(() => {
      // Main immersive transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: closingRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.fromTo(closingContentRef.current, 
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, ease: "power2.out" }, 
        0
      )
      .fromTo(closingRef.current, {
        backgroundColor: "rgba(245, 245, 240, 0)",
        backdropFilter: "blur(0px)",
      }, {
        backgroundColor: "rgba(10, 10, 10, 0.96)",
        backdropFilter: "blur(24px)",
        ease: "none"
      }, 0)
      .to([closingContentRef.current, closingContentRef.current.querySelectorAll("div:not(.sonar-ring), p, sub")], {
        color: "#f5f5f0",
        borderColor: "rgba(245, 245, 240, 0.2)",
        ease: "none"
      }, 0)
      .to(maktubRef.current, {
        filter: "invert(1) brightness(2) contrast(1.5)",
        opacity: 1,
        ease: "none"
      }, 0);

      // Sonar effect
      const sonarTl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      });

      if (sonarContainerRef.current) {
        const rings = sonarContainerRef.current.querySelectorAll(".sonar-ring");
        rings.forEach((ring, i) => {
          sonarTl.fromTo(ring, 
            { scale: 0.5, opacity: 0.8 },
            { scale: 4, opacity: 0, duration: 3, delay: i * 1 },
            0
          );
        });
      }

      // Pulse the calligraphy itself (separate from sonar timeline)
      gsap.to(maktubRef.current, {
        scale: 1.1,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }, closingRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="max-w-[1140px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">
        {/* --- SIDEBAR --- */}
        <aside className="border-r border-rule pr-7 py-10 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hidden lg:block">
        <div className="font-plex-mono text-[0.55rem] tracking-[0.18em] uppercase text-light mb-1.5">Programme</div>
        <KnowwareLogo size="clamp(75px, 9vw, 95px)" className="mb-8" strokeColor="var(--text-light)" circleColor="var(--text-color)" />
        
        <div className="font-plex-mono text-[0.58rem] tracking-wider text-light leading-[2] uppercase mb-7">
          <strong className="text-ink block font-medium text-[0.6rem] mt-2.5 first:mt-0">Institute</strong>ARC Institute
          
          <div className="flex gap-6 mt-2.5">
            <div>
              <strong className="text-ink block font-medium text-[0.6rem]">Year</strong>2026
            </div>
            <div>
              <strong className="text-ink block font-medium text-[0.6rem]">Status</strong>Active
            </div>
          </div>
        </div>

        <div className="font-plex-mono text-[0.55rem] tracking-[0.18em] uppercase text-light mb-2.5">Essays</div>
        <ul className="font-plex-mono text-[0.55rem] tracking-wider leading-[2.1] uppercase text-light mb-6">
          {ESSAYS.map((essay) => (
            <li key={essay.id} className="hover:text-ink hover:text-[0.6rem] transition-all duration-300">
              <Link to={essay.readUrl}>
                {essay.id} · {essay.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="font-plex-mono text-[0.55rem] tracking-[0.18em] uppercase text-light mb-2.5">Papers</div>
        <ul className="font-plex-mono text-[0.55rem] tracking-wider leading-[2.1] uppercase text-light mb-6">
          {PAPERS.map((paper) => (
            <li key={paper.id} className="hover:text-ink hover:text-[0.6rem] transition-all duration-300">
              <Link to={paper.paperUrl}>
                {paper.id} · {paper.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="font-plex-mono text-[0.55rem] tracking-[0.18em] uppercase text-light mb-2.5">SCRIPT</div>
        <ul className="font-plex-mono text-[0.55rem] tracking-wider leading-[2.1] uppercase text-light">
          <li className="hover:text-ink hover:text-[0.6rem] transition-all duration-300">
            <Link to="/constitutional-proof">
              00 · The Constitutional Proof
            </Link>
          </li>
        </ul>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="lg:pl-11 py-12 md:pb-24">
        <div className="reveal">
          {/* HERO SECTION */}
          <div className="pb-12 border-b border-rule mb-12" id="abstract">
            <div className="font-plex-mono text-[0.62rem] text-light tracking-[0.15em] uppercase mb-10">
              CONSTITUTIONAL SIEVE PROGRAMME · ARC INSTITUTE OF KNOWWARE · 2026
            </div>
            <h1 className="font-stix font-semibold text-[3.2rem] leading-[1.1] text-ink mb-12 tracking-tight max-w-[900px]">
              Mathematics is full of constants that appear to be chosen but turn out to be forced.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-[1.35rem] leading-[1.6] text-mid font-garamond italic">
                Euler's <span className="font-serif">e</span>. Shannon's channel capacity. Kolmogorov's turbulence exponent. In each case, the constant was never actually available for selection — the structure of the system had already decided. Nobody named this. It kept happening anyway.
              </p>
              <p className="text-[1.35rem] leading-[1.6] text-mid font-garamond italic">
                Constitutional Forcing names it. The programme began with a cattle monitor, passed through a chip architecture, and arrived at a geometry that had been sitting in Khayyam's triangle since 1070. The same mechanism — found six times, in six different domains, across a millennium. These nine papers are the proof of that journey.
              </p>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <motion.a 
                href="https://github.com/iamkhayyam/the-programme" 
                target="_blank" 
                rel="noreferrer"
                animate={{ 
                  boxShadow: [
                    "4px 4px 0px 0px rgba(0,0,0,0.1)",
                    "4px 4px 15px 0px rgba(242,125,38,0.3)",
                    "4px 4px 0px 0px rgba(0,0,0,0.1)"
                  ],
                  borderColor: [
                    "rgba(0,0,0,1)",
                    "rgba(242,125,38,0.8)",
                    "rgba(0,0,0,1)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="group relative overflow-hidden flex items-center gap-4 px-8 py-4 border border-ink hover:bg-ink hover:text-linen transition-all duration-500 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                {/* The "Flash" Shimmer */}
                <motion.div 
                  animate={{ 
                    left: ["-100%", "200%"],
                  }}
                  transition={{ 
                    duration: 1.2, 
                    repeat: Infinity, 
                    repeatDelay: 3.5,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-accent/40 to-transparent -skew-x-[35deg] pointer-events-none z-0"
                />
                
                <Github size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10 font-plex-mono text-[0.75rem] tracking-[0.25em] uppercase font-bold">Star on GitHub</span>
              </motion.a>
              <div className="hidden md:block h-px flex-1 bg-rule/30" />
              <div className="hidden md:flex items-center gap-4 font-plex-mono text-[0.6rem] text-light uppercase tracking-widest">
                <span>Open Source</span>
                <div className="w-1 h-1 rounded-full bg-rule" />
                <span>MIT License</span>
              </div>
            </div>
          </div>

          {/* 4. SIX FACES */}
          <section id="faces" className="mb-24 pt-16 border-t border-rule reveal">
            <div className="font-plex-sans text-[0.6rem] tracking-[0.2em] uppercase text-light mb-2">SIX PROVEN INSTANCES</div>
            <h2 className="font-stix font-semibold text-[1.8rem] text-ink mb-4">
              <span className="line-through opacity-40">Four. Five.</span> Six Faces of One Object
            </h2>
            <p className="mb-8 text-[1rem] text-mid italic font-garamond">
              The mechanism operates across six independent domains and a millennium. The naming is not discovery — it is recognition.
            </p>

            <div className="responsive-table-container">
              <table className="responsive-table text-[0.85rem]">
                <thead>
                  <tr className="border-y border-ink">
                    <th className="font-plex-sans font-medium text-[0.65rem] uppercase tracking-wider">Domain</th>
                    <th className="font-plex-sans font-medium text-[0.65rem] uppercase tracking-wider">Year</th>
                    <th className="font-plex-sans font-medium text-[0.65rem] uppercase tracking-wider">Mathematician</th>
                    <th className="font-plex-sans font-medium text-[0.65rem] uppercase tracking-wider">Instance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-rule">
                    <td data-label="Domain">Combinatorics</td>
                    <td data-label="Year">1070</td>
                    <td data-label="Mathematician">Khayyam</td>
                    <td data-label="Instance">The mod-3 fractal of Khayyam's Triangle</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td data-label="Domain">Fluid dynamics</td>
                    <td data-label="Year">1941</td>
                    <td data-label="Mathematician">Kolmogorov</td>
                    <td data-label="Instance">Dissipation exponent α = 3/4</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td data-label="Domain">Information theory</td>
                    <td data-label="Year">1948</td>
                    <td data-label="Mathematician">Shannon</td>
                    <td data-label="Instance">AEP + Channel Coding Theorem; θ₁ = 1/2</td>
                  </tr>
                  <tr className="border-b border-rule">
                    <td data-label="Domain">Analytic number theory</td>
                    <td data-label="Year">2025</td>
                    <td data-label="Mathematician">Pascadi</td>
                    <td data-label="Instance">θ = 5/8 for smooth triply-well-factorable moduli</td>
                  </tr>
                  <tr className="border-b border-rule font-medium">
                    <td data-label="Domain">Algebraic number theory</td>
                    <td data-label="Year">2026</td>
                    <td data-label="Mathematician">Wakil</td>
                    <td data-label="Instance">θ<sub>W</sub> = 5/8, cascade moduli q = 3<sup>K</sup></td>
                  </tr>
                  <tr className="border-b border-rule text-light italic">
                    <td data-label="Domain">Signal processing</td>
                    <td data-label="Year">2026*</td>
                    <td data-label="Mathematician">Wakil</td>
                    <td data-label="Instance">θ<sub>FFT</sub> = 1/2, DFT conjugate symmetry — named 2026; operating since Cooley–Tukey 1965</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 font-plex-mono text-[0.55rem] text-light leading-relaxed max-w-[800px]">
                * The DFT instance was not discovered in 2026. It was operating in every FFT computation since 1965. It was recognised as a Constitutional Forcing instance in 2026 — which is a different thing.
              </div>
            </div>
          </section>

          {/* 5. THE NINE PAPERS GRID */}
          <section id="series" className="mb-24 pt-16 border-t border-rule reveal">
            <div className="font-plex-sans text-[0.6rem] tracking-[0.2em] uppercase text-light mb-2">THE NINE PAPERS</div>
            <h2 className="font-stix font-semibold text-[1.8rem] text-ink mb-12">
              Constitutional Sieve Programme
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
              {PAPERS.map((paper) => (
                <Link 
                  key={paper.id}
                  to={paper.paperUrl}
                  className="bg-paper-bg p-6 hover:bg-linen/30 transition-colors flex flex-col justify-between min-h-[220px] group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="font-plex-mono text-[0.55rem] tracking-[0.15em] uppercase text-light">
                        {paper.paperId} · {paper.category}
                      </div>
                    </div>
                    <h3 className="font-stix font-semibold text-[1.15rem] leading-tight text-ink mb-3 group-hover:text-accent transition-colors">
                      {paper.title}
                    </h3>
                    <div className="font-plex-mono text-[0.55rem] text-light mb-4">
                      {paper.metadata}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <span className="inline-block px-2 py-1 bg-linen text-mid font-plex-mono text-[0.5rem] tracking-widest uppercase border border-rule">
                      {paper.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>

    {/* --- CLOSING --- */}
    <div ref={closingRef} className="relative z-10 border-t border-rule overflow-hidden min-h-[320px] md:h-[calc(100vh-3.5rem-3rem)] pt-20 pb-2 md:py-0 flex items-center justify-center w-full">
        <div ref={closingContentRef} className="max-w-[800px] mx-auto px-8 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="font-stix text-ink flex items-center gap-4 md:gap-6 mb-8 tracking-normal">
            <span className="text-[2.2rem] md:text-[3.2rem] font-medium">θ<sub>k</sub> =</span>
            <Fraction 
              numerator={<span className="text-[1.6rem] md:text-[2.2rem] px-1">2<sup>k</sup> − k</span>}
              denominator={<span className="text-[1.6rem] md:text-[2.2rem] px-1">2<sup>k</sup></span>}
              className="scale-110 md:scale-125"
            />
          </div>
          <div className="w-12 h-px bg-ink/20 mx-auto mb-6" />
          
          <div className="space-y-4 mb-6 md:mb-12">
            <p className="font-garamond italic text-[1.3rem] md:text-[1.4rem] text-mid max-w-[580px] mx-auto leading-[1.7]">
              "The mechanism was not invented in 2026. It was operating in Khayyam's triangle in 1070, in Shannon's Bell Labs notebook in 1948, in Kolmogorov's Moscow in 1941, in the primes since before any of them were born."
            </p>
            <p className="font-garamond italic text-[1.3rem] md:text-[1.4rem] text-mid max-w-[580px] mx-auto leading-[1.7]">
              The limo was not late. It had been driving for a thousand years.
            </p>
          </div>
          
          <div className="mt-1 md:mt-8 flex flex-col items-center gap-1 md:gap-3 relative">
            {/* Sonar Rings */}
            <div ref={sonarContainerRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
              <div className="sonar-ring absolute w-32 h-32 border border-accent/40 rounded-full" />
              <div className="sonar-ring absolute w-32 h-32 border border-accent/30 rounded-full" />
              <div className="sonar-ring absolute w-32 h-32 border border-accent/20 rounded-full" />
            </div>

            <div className="font-plex-mono text-[0.5rem] md:text-[0.6rem] tracking-[0.4em] uppercase text-light">Maktub</div>
            <div className="font-plex-mono text-[0.5rem] md:text-[0.6rem] tracking-[0.4em] uppercase text-light">It is written</div>
            <img 
              ref={maktubRef}
              onMouseEnter={handleMaktubHover}
              onMouseLeave={handleMaktubLeave}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='80' fill='%231e3a8a' font-style='italic'%3Eمكتوب%3C/text%3E%3C/svg%3E" 
              alt="Maktub Calligraphy" 
              className="h-16 md:h-28 w-auto mt-1 md:mt-4 opacity-90 theme-blend contrast-125 cursor-pointer relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

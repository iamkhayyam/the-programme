import React, { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { PAPERS } from "../constants/programme";
import { ESSAYS } from "./Essays";
import KnowwareLogo from "../components/KnowwareLogo";
import { Fraction } from "../components/Fraction";
import type { PaperContent } from "./papers/types";
import p01 from "./papers/p01";
import p02 from "./papers/p02";
import p03 from "./papers/p03";
import p04 from "./papers/p04";
import p05 from "./papers/p05";
import p06 from "./papers/p06";
import p07 from "./papers/p07";
import p08 from "./papers/p08";
import p09 from "./papers/p09";

const PAPERS_DATA: Record<string, PaperContent> = { p01, p02, p03, p04, p05, p06, p07, p08, p09 };


export default function PaperDetail() {
  const { id } = useParams<{ id: string }>();
  const paper = id ? PAPERS_DATA[id] : null;
  const paperStatus = PAPERS.find(p => p.id === paper?.id)?.status || "UNDER REVISION";
  const nextBtnRef = useRef<HTMLDivElement>(null);

  if (!paper) {
    return <Navigate to="/" replace />;
  }

  const submitted = paper.date.split(" · ")[0].replace("Submitted ", "");

  const handleNextHover = () => {
    if (!nextBtnRef.current) return;
    gsap.to(nextBtnRef.current, { 
      x: 8, 
      duration: 0.6, 
      ease: "power2.out",
      onComplete: () => {
        gsap.to(nextBtnRef.current, { x: 0, duration: 0.8, ease: "power2.inOut" });
      }
    });
  };

  return (
    <div className="max-w-[1140px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">
      {/* --- SIDEBAR --- */}
      <aside className="border-r border-rule pr-7 py-10 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hidden lg:block">
        <div className="font-plex-mono text-[0.55rem] tracking-[0.18em] uppercase text-light mb-1.5">Programme</div>
        <KnowwareLogo size="clamp(75px, 9vw, 95px)" className="mb-8" strokeColor="var(--text-light)" circleColor="var(--text-color)" />
        
        <div className="font-plex-mono text-[0.58rem] tracking-wider text-light leading-[2] uppercase mb-7">
          <strong className="text-ink block font-medium text-[0.6rem] mt-2.5 first:mt-0">Author</strong>{paper.authors}
          
          <div className="flex gap-6 mt-2.5">
            <div>
              <strong className="text-ink block font-medium text-[0.6rem]">Published</strong>{submitted.replace(/^(\w{3})\w*/, "$1")}
            </div>
            <div>
              <strong className="text-ink block font-medium text-[0.6rem]">Status</strong>{paperStatus}
            </div>
          </div>

          <strong className="text-ink block font-medium text-[0.6rem] mt-2.5">Series</strong>Constitutional Sieve
          <strong className="text-ink block font-medium text-[0.6rem] mt-2.5">MSC 2020</strong>{paper.msc}
        </div>

        <div className="mb-7">
          <a href={paper.pdfUrl} target="_blank" rel="noreferrer" className="block font-plex-mono text-[0.58rem] tracking-wider uppercase text-accent hover:text-ink border-b border-rule py-1.5 leading-tight hover:text-[0.62rem] transition-all duration-300">
            <span className="text-light block text-[0.52rem]">Revised November 2026 · PDF</span>
            Full Paper → View
          </a>
          <a href={`${import.meta.env.BASE_URL}files/p${paper.id}.html`} target="_blank" rel="noreferrer" className="block font-plex-mono text-[0.58rem] tracking-wider uppercase text-accent hover:text-ink border-b border-rule py-1.5 leading-tight hover:text-[0.62rem] transition-all duration-300">
            <span className="text-light block text-[0.52rem]">Revised November 2026 · HTML</span>
            Full Text → Read
          </a>
          {paper.githubUrl && (
            <a href={paper.githubUrl} target="_blank" rel="noreferrer" className="block font-plex-mono text-[0.58rem] tracking-wider uppercase text-accent hover:text-ink border-b border-rule py-1.5 leading-tight hover:text-[0.62rem] transition-all duration-300">
              <span className="text-light block text-[0.52rem]">LaTeX Source</span>
              GitHub → Source
            </a>
          )}
        </div>

        <div className="font-plex-mono text-[0.55rem] tracking-[0.18em] uppercase text-light mb-2.5">Essays</div>
        <ul className="font-plex-mono text-[0.55rem] tracking-wider leading-[2.1] uppercase text-light mb-6">
          {ESSAYS.map((e) => (
            <li key={e.id} className="hover:text-ink hover:text-[0.6rem] transition-all duration-300">
              <Link to={e.readUrl}>
                {e.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="font-plex-mono text-[0.55rem] tracking-[0.18em] uppercase text-light mb-2.5">Papers</div>
        <ul className="font-plex-mono text-[0.55rem] tracking-wider leading-[2.1] uppercase text-light">
          {PAPERS.map((p) => (
            <li key={p.id} className={`${p.paperUrl === `/papers/p${paper.id}` ? "text-ink font-medium" : ""} hover:text-ink hover:text-[0.6rem] transition-all duration-300`}>
              <Link to={p.paperUrl} className="hover:text-ink transition-colors">
                {p.paperUrl === `/papers/p${paper.id}` && "→ "}{p.id} · {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* --- CONTENT --- */}
      <article className="lg:pl-11 py-10 md:pb-16 bg-paper-bg min-h-[calc(100vh-56px)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center pb-8 border-b border-rule mb-8">
            <div className="font-plex-mono text-[0.6rem] text-light tracking-[0.15em] uppercase mb-5">Preprint · ARC Institute of Knowware · {submitted}</div>
            <h1 className="font-stix font-semibold text-[1.8rem] leading-[1.35] text-ink mb-4">{paper.title}</h1>
            <div className="font-plex-sans text-[0.82rem] text-mid mb-1.5">{paper.authors}</div>
            <div className="font-plex-sans text-[0.72rem] text-light italic mb-4">{paper.affiliation}</div>
            <div className="font-plex-mono text-[0.62rem] text-light">{paper.date}</div>
          </div>

          <div className="mx-0 md:mx-8 mb-6 p-4 border-l-2 border-accent font-plex-sans text-[0.8rem] leading-relaxed text-mid">
            <span className="font-plex-mono text-[0.58rem] tracking-[0.15em] uppercase text-light block mb-1">Revised · November 2026</span>
            This page summarises the revised paper. The revision note below lists what changed from the earlier version.
          </div>

          <div className="mx-0 md:mx-8 mb-6 p-5 bg-note-bg border border-rule">
            <div className="font-plex-sans font-medium text-[0.68rem] uppercase tracking-widest text-mid mb-3 text-center">Abstract</div>
            <div className="font-stix text-[1.05rem] leading-[1.65] text-mid text-justify">{paper.abstract}</div>
          </div>

          <div className="mx-0 md:mx-8 mb-6 font-plex-sans text-[0.7rem] text-light text-center">
            <strong className="text-mid font-medium">Keywords:</strong> {paper.keywords}
          </div>

          <div className="flex flex-wrap gap-6 items-center justify-center mb-8 py-3 border-y border-[#ddd]">
            <span className="font-plex-mono text-[0.55rem] tracking-widest uppercase text-light">MSC 2020: {paper.msc}</span>
            <span className="font-plex-mono text-[0.55rem] tracking-widest uppercase text-light">
              <a href={paper.pdfUrl} target="_blank" rel="noreferrer" className="text-accent border-b border-[#ddd] hover:text-ink transition-colors">Full paper (PDF)</a>
            </span>
          </div>

          <div className="font-stix text-[1.35rem] leading-[1.72] text-ink max-w-[640px] mx-auto">
            {paper.content}

            {paper.nextPaper && (
              <div className="mt-12 pt-5 border-t border-ink max-w-[640px] reveal">
                <div className="font-plex-mono text-[0.52rem] tracking-[0.15em] uppercase text-light mb-1.5">Next in Programme</div>
                <div 
                  ref={nextBtnRef}
                  onMouseEnter={handleNextHover}
                  className="font-plex-sans text-[0.75rem] font-medium tracking-wider uppercase"
                >
                  <Link to={paper.nextPaper.url} className="text-ink hover:text-accent transition-colors">{paper.nextPaper.title} →</Link>
                </div>
                <div className="font-stix text-[0.88rem] text-light mt-1 italic">{paper.nextPaper.desc}</div>
              </div>
            )}
          </div>
        </motion.div>
      </article>
    </div>
  );
}

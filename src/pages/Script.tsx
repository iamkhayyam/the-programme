import React from "react";
import { motion } from "motion/react";
import ConstitutionalProofScreenplay from "../components/ConstitutionalProofScreenplay";
import KnowwareLogo from "../components/KnowwareLogo";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { PAPERS } from "../constants/programme";

export default function Script() {
  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0">
      {/* --- SIDEBAR --- */}
      <aside className="border-r border-rule pr-7 py-10 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hidden md:block">
        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-1.5">Programme</div>
        <KnowwareLogo size="clamp(75px, 9vw, 95px)" className="mb-8 -ml-[8.33%]" strokeColor="var(--text-light)" circleColor="var(--text-color)" />
        
        <div className="font-plex-mono text-[0.52rem] tracking-wider text-light leading-[2] uppercase mb-7">
          <strong className="text-ink block font-medium text-[0.55rem] mt-2.5 first:mt-0">Author</strong>Khayyam Wakil
          
          <div className="flex gap-6 mt-2.5">
            <div>
              <strong className="text-ink block font-medium text-[0.55rem]">Year</strong>2025
            </div>
            <div>
              <strong className="text-ink block font-medium text-[0.55rem]">Status</strong>Active
            </div>
          </div>

          <strong className="text-ink block font-medium text-[0.55rem] mt-2.5">Format</strong>Screenplay
        </div>

        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-2.5">SCRIPT</div>
        <ul className="font-plex-mono text-[0.5rem] tracking-wider leading-[2.1] uppercase text-ink mb-6">
          <li className="font-medium hover:text-light transition-colors">
            <Link to="/constitutional-proof">→ 00 - THE CONSTITUTIONAL PROOF</Link>
          </li>
        </ul>

        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-2.5">Resources</div>
        <a 
          href={`${import.meta.env.BASE_URL}constitutional_proof.pdf`} 
          download 
          className="flex items-center gap-2 font-plex-mono text-[0.5rem] tracking-wider leading-[2.1] uppercase text-coral hover:text-ink transition-colors mb-6"
        >
          <Download size={10} />
          Download Text
        </a>

        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-2.5">Essays</div>
        <ul className="font-plex-mono text-[0.5rem] tracking-wider leading-[2.1] uppercase text-light mb-6">
          {PAPERS.map((p) => (
            <li key={p.id} className="hover:text-ink transition-colors">
              <Link to={p.essayUrl}>
                {p.id} · {p.essayTitle.replace("✍️ ", "")}
              </Link>
            </li>
          ))}
        </ul>

        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-2.5">Papers</div>
        <ul className="font-plex-mono text-[0.5rem] tracking-wider leading-[2.1] uppercase text-light">
          {PAPERS.map((p) => (
            <li key={p.id} className="hover:text-ink transition-colors">
              <Link to={p.paperUrl}>
                {p.id} · {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* --- CONTENT --- */}
      <main className="md:pl-11 py-10 md:pb-20 bg-paper-bg min-h-[calc(100vh-56px)]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-[700px] mx-auto">
            <ConstitutionalProofScreenplay />
          </div>
        </motion.div>
      </main>
    </div>
  );
}

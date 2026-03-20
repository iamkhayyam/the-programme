import React from "react";
import { motion } from "motion/react";
import ConstitutionalProofScreenplay from "../components/ConstitutionalProofScreenplay";
import KnowwareLogo from "../components/KnowwareLogo";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";

export default function ConstitutionalProof() {
  return (
    <div className="max-w-[1080px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0">
      {/* --- SIDEBAR --- */}
      <aside className="border-r border-rule pr-7 py-10 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto hidden md:block">
        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-1.5">Programme</div>
        <KnowwareLogo size={70} className="mb-8" strokeColor="#888" circleColor="#1a1a1a" />
        
        <div className="font-plex-mono text-[0.52rem] tracking-wider text-light leading-[2] uppercase mb-7">
          <strong className="text-ink block font-medium text-[0.55rem] mt-2.5 first:mt-0">Author</strong>Khayyam Wakil
          <strong className="text-ink block font-medium text-[0.55rem] mt-2.5">Year</strong>2025
          <strong className="text-ink block font-medium text-[0.55rem] mt-2.5">Format</strong>Screenplay
        </div>

        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-2.5">Navigation</div>
        <ul className="font-plex-mono text-[0.5rem] tracking-wider leading-[2.1] uppercase text-ink mb-6">
          <li className="hover:text-light transition-colors">
            <Link to="/">← Back to Home</Link>
          </li>
          <li className="hover:text-light transition-colors">
            <Link to="/play">Play Overview</Link>
          </li>
        </ul>

        <div className="font-plex-mono text-[0.5rem] tracking-[0.18em] uppercase text-light mb-2.5">Resources</div>
        <a 
          href={`${import.meta.env.BASE_URL}constitutional_proof.pdf`} 
          download 
          className="flex items-center gap-2 font-plex-mono text-[0.5rem] tracking-wider leading-2.1 uppercase text-coral hover:text-ink transition-colors"
        >
          <Download size={10} />
          Download Text
        </a>
      </aside>

      {/* --- CONTENT --- */}
      <main className="md:pl-11 py-10 md:pb-20 bg-paper-bg min-h-[calc(100vh-56px)]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-[820px] mx-auto">
            <div className="flex justify-between items-center mb-8 md:hidden">
               <Link to="/" className="text-[10px] uppercase tracking-widest text-light">← Home</Link>
               <a href={`${import.meta.env.BASE_URL}constitutional_proof.pdf`} download className="text-[10px] uppercase tracking-widest text-coral flex items-center gap-1">
                 <Download size={10} /> PDF
               </a>
            </div>
            <ConstitutionalProofScreenplay />
          </div>
        </motion.div>
      </main>
    </div>
  );
}

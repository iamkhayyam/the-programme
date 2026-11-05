import React from "react";
import { motion } from "motion/react";
import { FileText, BookOpen, ChevronRight, Download, Github } from "lucide-react";
import { Link } from "react-router-dom";

const PREPRINTS = [
  {
    id: "01",
    paperId: "PAPER 01",
    category: "MATH.NT",
    title: "Constitutional Forcing",
    date: "Feb 2026",
    status: "UNDER REVISION",
    description: "The foundational paper defining the Constitutional Forcing mechanism. It states the counting theorem and proposes instances of the mechanism in prime arithmetic and information theory.",
    highlights: [
      "Definition 2.1: The Constitutional Constraint",
      "Definition 2.4: Constitutional Forcing",
      "Theorem 2.6: The Counting Theorem",
      "Conjecture 5.1: The Constitutional Forcing Conjecture"
    ],
    htmlUrl: "/papers/p01",
    pdfUrl: "https://preprint.knowware.institute/pdf/p01.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p01.zip",
    githubUrl: "https://github.com/knowware-institute/p01"
  },
  {
    id: "02",
    paperId: "PAPER 02",
    category: "MATH.HO",
    title: "Khayyam's Triangle",
    date: "Jan 2026",
    status: "UNDER REVISION",
    description: "A historical and combinatorial essay on Omar Khayyam's place in the history of the arithmetic triangle and on the mod-3 Sierpiński fractal hidden in its numbers.",
    highlights: [
      "Historical Analysis: Khayyam and the Triangle",
      "Lemma 4.1: Lucas's Theorem",
      "Proposition 4.2: The Mod-p Sierpiński Fractal",
      "Connection to the Companion Papers"
    ],
    htmlUrl: "/papers/p02",
    pdfUrl: "https://preprint.knowware.institute/pdf/p02.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p02.zip",
    githubUrl: "https://github.com/knowware-institute/p02"
  },
  {
    id: "03",
    paperId: "PAPER 03",
    category: "MATH.HO",
    title: "Spherical Cow Philosophy",
    date: "Feb 2026",
    status: "UNDER REVISION",
    description: "The methodological manifesto of the programme. It argues for the 'constitutional' approach to mathematical constants—viewing them as forced by system architecture rather than chosen by nature.",
    highlights: [
      "Definition 3.1: The Spherical Cow Methodology",
      "Principle 3.2: Spherical Cow",
      "Proposition 4.1: Twin Prime Constitution",
      "Criteria 5.3–5.4: When to Apply the Methodology"
    ],
    htmlUrl: "/papers/p03",
    pdfUrl: "https://preprint.knowware.institute/pdf/p03.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p03.zip",
    githubUrl: "https://github.com/knowware-institute/p03"
  },
  {
    id: "04",
    paperId: "PAPER 04",
    category: "MATH.NT",
    title: "Eisenstein Integers, θ = 5/8",
    date: "Feb 2026",
    status: "UNDER REVISION",
    description: "The core arithmetic claim of the programme: a level of distribution θ = 5/8 for cascade moduli 3ᴷ, argued from the hexagonal geometry of Eisenstein integers and Watt's theorem.",
    highlights: [
      "Theorem 1.1: θW = 5/8 for Cascade Moduli (claimed)",
      "Eisenstein Ramification Analysis",
      "Application of Watt's Mean Value Theorem",
      "The Hexagonal Lattice Constraint"
    ],
    htmlUrl: "/papers/p04",
    pdfUrl: "https://preprint.knowware.institute/pdf/p04.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p04.zip",
    githubUrl: "https://github.com/knowware-institute/p04"
  },
  {
    id: "05",
    paperId: "PAPER 05",
    category: "MATH.NT",
    title: "Ramanujan's Dimensional Forcing",
    date: "Feb 2026",
    status: "UNDER REVISION",
    description: "Proposes a single formula for the levels of k-fold constitutional sieves and predicts higher-order constants in the k-hierarchy of forcing dimensions.",
    highlights: [
      "The Proposed Formula: θₖ = (2ᵏ − k)/2ᵏ",
      "Theorem 3.4: Nested Constraint Count",
      "Proposition 4.1: Pattern vs. Configuration Density",
      "Predictions: θ₄ = 3/4, θ₅ = 27/32"
    ],
    htmlUrl: "/papers/p05",
    pdfUrl: "https://preprint.knowware.institute/pdf/p05.pdf",
    downloadUrl: null,
    githubUrl: null
  },
  {
    id: "06",
    paperId: "PAPER 06",
    category: "CS.IT / MATH.NT",
    title: "The Shannon–Wakil Effect",
    date: "Feb 2026",
    status: "UNDER REVISION",
    description: "Proposes a structural parallel between Claude Shannon's 1948 theorems and the cascade-moduli arithmetic, named the Shannon–Wakil Effect.",
    highlights: [
      "Definition 2.1: The Shannon–Wakil Effect",
      "Propositions 3.2 and 4.2: The AEP and Channel Coding",
      "Proposition 5.2: The Cascade-Moduli Case",
      "Analysis of the 78-Year Recognition Gap"
    ],
    htmlUrl: "/papers/p06",
    pdfUrl: "https://preprint.knowware.institute/pdf/p06.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p06.zip",
    githubUrl: "https://github.com/knowware-institute/p06"
  },
  {
    id: "07",
    paperId: "PAPER 07",
    category: "MATH.NT",
    title: "Condition W3",
    date: "Feb 2026",
    status: "UNDER REVISION",
    description: "States Condition W3, the absence of Siegel zeros for Dirichlet characters modulo 3ᴷ, and argues for it through the CM field Q(ω).",
    highlights: [
      "Theorem 1.1: Condition W3",
      "Proposition 2.1: The CM Structure of Q(ω)",
      "Lemma 4.1: L-function Factorisation",
      "Theorem 7.1: Watt Conditions"
    ],
    htmlUrl: "/papers/p07",
    pdfUrl: "https://preprint.knowware.institute/pdf/p07.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p07.zip",
    githubUrl: "https://github.com/knowware-institute/p07"
  },
  {
    id: "08",
    paperId: "PAPER 08",
    category: "MATH.NT",
    title: "Prime Digit Bias",
    date: "Mar 2026",
    status: "UNDER REVISION",
    description: "Proposes a ternary reading of the last-digit bias in consecutive primes observed by Lemke Oliver and Soundararajan (2016).",
    highlights: [
      "Theorem 3.2: Constitutional Signature",
      "Theorem 3.4: Ternary Equilibrium",
      "Proposition 4.1: Min-Gap Transition Structure",
      "Proposition 5.1: The Snail's Pace"
    ],
    htmlUrl: "/papers/p08",
    pdfUrl: "https://preprint.knowware.institute/pdf/p08.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p08.zip",
    githubUrl: "https://github.com/knowware-institute/p08"
  },
  {
    id: "09",
    paperId: "PAPER 09",
    category: "CS.IT / MATH.CA",
    title: "The DFT Constitutional Constant",
    date: "Mar 2026",
    status: "UNDER REVISION",
    description: "Reads the conjugate symmetry of the discrete Fourier transform of real signals, which leaves N of 2N real degrees of freedom, as a constitutional constant θ_FFT = 1/2.",
    highlights: [
      "Definition 2.3: The Constant θ_FFT",
      "Theorem 3.1: Conjugate Symmetry",
      "Section 4: Empirical Measurements",
      "Conjecture 8.1: Constitutional Universality"
    ],
    htmlUrl: "/papers/p09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p09.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p09.zip",
    githubUrl: "https://github.com/knowware-institute/p09"
  }
];

const SubjectTag = ({ category }: { category: string }) => (
  <span className="font-plex-mono text-[0.55rem] text-accent uppercase tracking-widest border border-accent/20 px-2 py-0.5 rounded-full bg-accent/5">
    {category}
  </span>
);

const ActionButton = ({ 
  label, 
  icon: Icon, 
  url, 
  isExternal = true,
  isPrimary = false
}: { 
  label: string; 
  icon: any; 
  url: string | null; 
  isExternal?: boolean;
  isPrimary?: boolean;
}) => {
  const disabled = !url;
  const baseStyles = "flex items-center gap-2 font-plex-sans font-bold text-[0.6rem] tracking-[0.18em] uppercase transition-all duration-300";
  const activeStyles = isPrimary 
    ? "text-ink hover:text-accent" 
    : "text-mid hover:text-ink";
  const disabledStyles = "text-light/30 cursor-not-allowed grayscale pointer-events-none";

  const content = (
    <>
      <Icon size={14} className={disabled ? "" : "group-hover:scale-110 transition-transform"} />
      {label}
      {!disabled && isPrimary && <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (disabled) {
    return (
      <div className={`${baseStyles} ${disabledStyles}`}>
        {content}
      </div>
    );
  }

  if (isExternal) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noreferrer" 
        className={`${baseStyles} ${activeStyles} group`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={url} className={`${baseStyles} ${activeStyles} group`}>
      {content}
    </Link>
  );
};

export default function Preprints() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-16 bg-paper-bg min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="border-b border-rule pb-12 mb-16">
          <div className="font-plex-mono text-[0.62rem] text-light tracking-[0.15em] uppercase mb-4">
            ARC INSTITUTE OF KNOWWARE · REPOSITORY
          </div>
          <h1 className="font-stix font-semibold text-[2.5rem] leading-tight text-ink mb-6">
            Knowware Preprints
          </h1>
          <p className="font-garamond italic text-[1.15rem] text-mid max-w-[700px]">
            The formal record of the Constitutional Sieve Programme, from historical restoration to signal processing. These preprints are being revised; earlier versions contained errors, and their status labels reflect this.
          </p>
        </div>

        <div className="space-y-32">
          {PREPRINTS.map((paper, idx) => (
            <motion.div 
              key={paper.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 group"
            >
              {/* LEFT COLUMN: METADATA & HIGHLIGHTS */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="font-plex-mono text-[0.55rem] text-light tracking-[0.2em] uppercase">
                      {paper.paperId}
                    </div>
                    <SubjectTag category={paper.category} />
                  </div>
                </div>

                {/* AT A GLANCE: INTEGRATED DESIGN */}
                <div className="relative pl-6 py-1">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-rule/40" />
                  <div className="font-plex-mono text-[0.5rem] text-light tracking-[0.25em] uppercase mb-6 opacity-80">
                    At a Glance
                  </div>
                  <ul className="space-y-5">
                    {paper.highlights.map((h, i) => (
                      <li key={i} className="group/item">
                        <span className="font-plex-sans text-[0.7rem] leading-snug text-mid italic group-hover/item:text-ink transition-colors block">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN: CONTENT & LINKS */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="font-plex-mono text-[0.6rem] text-light uppercase tracking-wider">
                      {paper.date}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-rule" />
                    <div className="font-plex-mono text-[0.6rem] text-accent uppercase tracking-wider">
                      {paper.status}
                    </div>
                  </div>
                  
                  <h2 className="font-stix font-semibold text-[2.1rem] leading-tight text-ink mb-5 group-hover:text-accent transition-colors duration-500">
                    {paper.title}
                  </h2>
                  
                  <p className="text-[1.05rem] leading-relaxed text-mid font-garamond italic mb-8 border-l-2 border-rule pl-6">
                    {paper.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-rule">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                    <div className="flex items-center gap-6">
                      <ActionButton 
                        label="View HTML" 
                        icon={BookOpen} 
                        url={paper.htmlUrl} 
                        isExternal={false} 
                        isPrimary={true} 
                      />
                      <ActionButton 
                        label="View PDF" 
                        icon={FileText} 
                        url={paper.pdfUrl} 
                        isPrimary={true} 
                      />
                    </div>
                    
                    <div className="h-4 w-px bg-rule hidden sm:block" />
                    
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                      <ActionButton 
                        label="Download" 
                        icon={Download} 
                        url={paper.downloadUrl} 
                      />
                      <ActionButton 
                        label="GitHub" 
                        icon={Github} 
                        url={paper.githubUrl} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER SIGNATURE */}
        <div className="mt-32 pt-16 border-t border-rule text-center">
          <div className="inline-block opacity-40 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='serif' font-size='40' fill='%23003366' font-style='italic'%3Eمكتوب%3C/text%3E%3C/svg%3E" 
              alt="Maktub" 
              className="h-20 theme-blend"
            />
          </div>
          <div className="font-plex-mono text-[0.55rem] text-light tracking-[0.2em] uppercase mt-4">
            ARC Institute of Knowware · 2026
          </div>
        </div>
      </motion.div>
    </div>
  );
}

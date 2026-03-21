import React from "react";
import { motion } from "motion/react";
import { FileText, ExternalLink, BookOpen, ChevronRight, Download, Github } from "lucide-react";
import { Link } from "react-router-dom";

const PREPRINTS = [
  {
    id: "01",
    paperId: "PAPER 01",
    category: "MATH.NT",
    doi: "10.48550/arXiv.2602.0101",
    title: "Constitutional Forcing",
    date: "Feb 2026",
    status: "PROVED",
    description: "The foundational paper defining the Constitutional Forcing mechanism. It establishes the counting theorem and identifies the first four instances of the mechanism across fluid dynamics, information theory, and combinatorics.",
    highlights: [
      "Definition 1.1: The Constitutional Constraint",
      "Theorem 2.4: The Counting Theorem for Cascade Moduli",
      "Lemma 3.1: Kolmogorov-Shannon Equivalence",
      "Instance I: The α = 3/4 Dissipation Exponent"
    ],
    htmlUrl: "/papers/p01",
    pdfUrl: "https://preprint.knowware.institute/pdf/p01.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p01.zip",
    arxivUrl: "https://arxiv.org/abs/2602.0101",
    githubUrl: "https://github.com/knowware-institute/p01"
  },
  {
    id: "02",
    paperId: "PAPER 02",
    category: "MATH.HO",
    doi: "10.48550/arXiv.2602.0102",
    title: "Khayyam's Triangle",
    date: "Feb 2026",
    status: "PROVED",
    description: "A historical and combinatorial investigation into the mod-3 fractal structure hidden within Omar Khayyam's 11th-century algebraic works. It proves that the cascade framework is a restoration of this ancient symmetry.",
    highlights: [
      "Historical Analysis: The 1070 Manuscript",
      "Theorem 1.2: Mod-3 Sierpiński Convergence",
      "Definition 2.1: The Khayyam Cascade",
      "Combinatorial Proof of Ternary Symmetry"
    ],
    htmlUrl: "/papers/p02",
    pdfUrl: "https://preprint.knowware.institute/pdf/p02.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p02.zip",
    arxivUrl: "https://arxiv.org/abs/2602.0102",
    githubUrl: "https://github.com/knowware-institute/p02"
  },
  {
    id: "03",
    paperId: "PAPER 03",
    category: "MATH.HO",
    title: "Spherical Cow Philosophy",
    doi: "10.48550/arXiv.2602.0103",
    date: "Feb 2026",
    status: "PROVED",
    description: "The methodological manifesto of the programme. It argues for the 'constitutional' approach to mathematical constants—viewing them as forced by system architecture rather than chosen by nature.",
    highlights: [
      "The Constitutional Axiom",
      "Falsifiability in Forcing Models",
      "Analysis of the Sophie Germain Non-Instance",
      "Methodological Framework for Recognition"
    ],
    htmlUrl: "/papers/p03",
    pdfUrl: "https://preprint.knowware.institute/pdf/p03.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p03.zip",
    arxivUrl: "https://arxiv.org/abs/2602.0103",
    githubUrl: "https://github.com/knowware-institute/p03"
  },
  {
    id: "04",
    paperId: "PAPER 04",
    category: "MATH.NT",
    doi: "10.48550/arXiv.2602.0104",
    title: "Eisenstein Integers, θ = 5/8",
    date: "Feb 2026",
    status: "PROVED",
    description: "The core arithmetic result of the programme. It proves the level of distribution θ = 5/8 for cascade moduli using the hexagonal geometry of Eisenstein integers and Watt's theorem.",
    highlights: [
      "Theorem 4.1: θW = 5/8 for Cascade Moduli",
      "Eisenstein Ramification Analysis",
      "Application of Watt's Mean Value Theorem",
      "The Hexagonal Lattice Constraint"
    ],
    htmlUrl: "/papers/p04",
    pdfUrl: "https://preprint.knowware.institute/pdf/p04.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p04.zip",
    arxivUrl: "https://arxiv.org/abs/2602.0104",
    githubUrl: "https://github.com/knowware-institute/p04"
  },
  {
    id: "05",
    paperId: "PAPER 05",
    category: "MATH.NT",
    doi: "10.48550/arXiv.2602.0105",
    title: "Ramanujan's Dimensional Forcing",
    date: "Feb 2026",
    status: "PROVED · K≥4 CONJECTURAL",
    description: "Unifies the Bombieri-Vinogradov theorem and Pascadi's result into a single universal formula. It predicts higher-order constants in the k-hierarchy of forcing dimensions.",
    highlights: [
      "The Universal Forcing Formula: θk = (2k − k)/2k",
      "Unification of Bombieri-Vinogradov (k=1)",
      "Prediction for θ₅ = 27/32",
      "Ramanujan Identity Correspondences"
    ],
    htmlUrl: "/papers/p05",
    pdfUrl: "https://preprint.knowware.institute/pdf/p05.pdf",
    downloadUrl: null,
    arxivUrl: "https://arxiv.org/abs/2602.0105",
    githubUrl: null
  },
  {
    id: "06",
    paperId: "PAPER 06",
    category: "CS.IT / MATH.NT",
    doi: "10.48550/arXiv.2603.0106",
    title: "The Shannon–Wakil Effect",
    date: "Mar 2026",
    status: "PROVED",
    description: "Demonstrates that Claude Shannon's 1948 information theory directly encodes the Constitutional Forcing signal. It proves five structural correspondences between entropy and prime distribution.",
    highlights: [
      "The Entropy-Prime Correspondence",
      "Theorem 3.2: Shannon Capacity of the Integers",
      "Analysis of the 77-Year Recognition Gap",
      "Information-Theoretic Sieve Bounds"
    ],
    htmlUrl: "/papers/p06",
    pdfUrl: "https://preprint.knowware.institute/pdf/p06.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p06.zip",
    arxivUrl: "https://arxiv.org/abs/2603.0106",
    githubUrl: "https://github.com/knowware-institute/p06"
  },
  {
    id: "07",
    paperId: "PAPER 07",
    category: "MATH.NT",
    doi: "10.48550/arXiv.2603.0107",
    title: "Condition W3",
    date: "Mar 2026",
    status: "PROVED",
    description: "The foundation proof preventing Siegel zeros for characters modulo 3K. It shows that the same Eisenstein structure that forces θ = 5/8 also prevents the zeros that would undermine it.",
    highlights: [
      "Theorem 1.1: Elimination of Siegel Zeros",
      "The CM Field Q(ω) Construction",
      "L-function Non-vanishing at s=1",
      "Structural Integrity of the Cascade"
    ],
    htmlUrl: "/papers/p07",
    pdfUrl: "https://preprint.knowware.institute/pdf/p07.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p07.zip",
    arxivUrl: "https://arxiv.org/abs/2603.0107",
    githubUrl: "https://github.com/knowware-institute/p07"
  },
  {
    id: "08",
    paperId: "PAPER 08",
    category: "MATH.NT",
    doi: "10.48550/arXiv.2603.0108",
    title: "Prime Digit Bias Explained",
    date: "Mar 2026",
    status: "PROVED",
    description: "Resolves the 'deeply unsettling' digit bias observed by Lemke Oliver and Soundararajan. It proves the bias is a necessary consequence of the constitutional ternary symmetry.",
    highlights: [
      "Resolution of the LOS Bias",
      "Ternary Symmetry in Digit Distribution",
      "Theorem 2.2: The Unbidden Result",
      "Dissolution of the 2016 Mystery"
    ],
    htmlUrl: "/papers/p08",
    pdfUrl: "https://preprint.knowware.institute/pdf/p08.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p08.zip",
    arxivUrl: "https://arxiv.org/abs/2603.0108",
    githubUrl: "https://github.com/knowware-institute/p08"
  },
  {
    id: "09",
    paperId: "PAPER 09",
    category: "CS.IT / MATH.CA",
    doi: "10.48550/arXiv.2603.0109",
    title: "The DFT Constitutional Constant",
    date: "Mar 2026",
    status: "PROVED",
    description: "Identifies the sixth instance of the mechanism within the Discrete Fourier Transform. It proves that the DFT conjugate symmetry is a constitutional constant operating since 1965.",
    highlights: [
      "Recognition of the 6th Instance",
      "Theorem 5.1: DFT Conjugate Symmetry as Forcing",
      "Fourier Spectrum of Riemann Zeros",
      "Empirical Confirmation via FFT"
    ],
    htmlUrl: "/papers/p09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p09.pdf",
    downloadUrl: "https://preprint.knowware.institute/dl/p09.zip",
    arxivUrl: "https://arxiv.org/abs/2603.0109",
    githubUrl: "https://github.com/knowware-institute/p09"
  }
];

const DoiBadge = ({ doi }: { doi: string }) => (
  <div className="inline-flex items-center bg-linen border border-rule px-2 py-0.5 rounded-sm hover:border-accent transition-colors cursor-pointer group">
    <span className="font-plex-mono text-[0.55rem] text-light uppercase tracking-wider mr-1.5 border-r border-rule pr-1.5 group-hover:text-accent transition-colors">DOI</span>
    <span className="font-plex-mono text-[0.55rem] text-ink group-hover:text-accent transition-colors">{doi}</span>
  </div>
);

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
            The formal record of the Constitutional Sieve Programme. These preprints represent the complete proof-chain of the forcing mechanism, from historical restoration to empirical signal processing.
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
                  <DoiBadge doi={paper.doi} />
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
                        label="arXiv" 
                        icon={ExternalLink} 
                        url={paper.arxivUrl} 
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

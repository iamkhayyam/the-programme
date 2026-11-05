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
    date: "Feb 2026 · rev. Nov 2026",
    status: "REVISED · POSTULATE",
    description: "Defines constitutional constraints and Constitutional Forcing. The count of k eliminated configurations, and with it θₖ = (2ᵏ − k)/2ᵏ, is stated as a postulate; candidate instances in prime arithmetic and information theory are presented as proposals.",
    highlights: [
      "Definitions: Constitutional Constraint and Constitutional Forcing",
      "Postulate 2.6: The Counting Postulate",
      "Proposals 3.1–3.2: Bombieri–Vinogradov and Cascade Moduli",
      "Conjecture 5.1: The Constitutional Forcing Conjecture"
    ],
    htmlUrl: "/papers/p01",
    pdfUrl: `${import.meta.env.BASE_URL}files/p01.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p01.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p01-constitutional-forcing"
  },
  {
    id: "02",
    paperId: "PAPER 02",
    category: "MATH.HO",
    title: "Khayyam's Triangle",
    date: "Jan 2026 · rev. Nov 2026",
    status: "REVISED",
    description: "The arithmetic triangle before Pascal — in India, the Islamic world and China — and the case for Khayyam's name, together with the mod-3 Sierpiński-type fractal hidden in its numbers, of Hausdorff dimension log 6/log 3.",
    highlights: [
      "Centuries Before Pascal: The Sources",
      "Lemma 4.1: Lucas's Theorem",
      "Proposition 4.2: The Mod-p Fractal and Its Dimension",
      "When the Fractal Was Noticed"
    ],
    htmlUrl: "/papers/p02",
    pdfUrl: `${import.meta.env.BASE_URL}files/p02.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p02.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p02-khayyams-triangle"
  },
  {
    id: "03",
    paperId: "PAPER 03",
    category: "MATH.HO",
    title: "Spherical Cow Philosophy",
    date: "Feb 2026 · rev. Nov 2026",
    status: "REVISED",
    description: "The methodological framework of the programme: accept a constitutional constraint as the entry point, derive its consequences, and fix testable predictions in advance.",
    highlights: [
      "The Spherical Cow Methodology",
      "The Spherical Cow Principle",
      "Proposition 4.1: Twin Prime Constitution",
      "Criteria for When to Apply It"
    ],
    htmlUrl: "/papers/p03",
    pdfUrl: `${import.meta.env.BASE_URL}files/p03.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p03.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p03-constitutional-signatures"
  },
  {
    id: "04",
    paperId: "PAPER 04",
    category: "MATH.NT",
    title: "Eisenstein Integers and a Conjectured θ = 5/8",
    date: "Feb 2026 · rev. Nov 2026",
    status: "REVISED · CONJECTURE",
    description: "Primes in arithmetic progressions to the moduli 3ᴷ and the arithmetic of the Eisenstein integers. The summed estimate holds for every exponent below 1; the per-modulus level 5/8 is stated as a conjecture, which would go beyond what GRH gives.",
    highlights: [
      "Theorem 1.1: The Summed Estimate (any θ < 1)",
      "Conjecture 1.3: Level 5/8 for Each Modulus 3ᴷ",
      "Eisenstein Integers, Ramification and Real Characters mod 3ᴷ",
      "Withdrawn Material: Where the Original Argument Failed"
    ],
    htmlUrl: "/papers/p04",
    pdfUrl: `${import.meta.env.BASE_URL}files/p04.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p04.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p04-that-eisenstein-guy"
  },
  {
    id: "05",
    paperId: "PAPER 05",
    category: "MATH.NT",
    title: "Ramanujan's Dimensional Forcing",
    date: "Feb 2026 · rev. Nov 2026",
    status: "REVISED · POSTULATE",
    description: "The configuration-density formula θₖ = (2ᵏ − k)/2ᵏ as a postulate, its relation to the binary model (2ᵏ − 1 invalid configurations), and conjectured links to levels of distribution.",
    highlights: [
      "Postulate 3.4 and Proposition 3.5: Two Counting Models",
      "Proposition 4.1: Pattern vs. Configuration Density",
      "Conjecture 5.8: Level 5/8 for Each Modulus 3ᴷ",
      "Conjecture 6.4: Configuration Density and Levels of Distribution"
    ],
    htmlUrl: "/papers/p05",
    pdfUrl: `${import.meta.env.BASE_URL}files/p05.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p05.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p05-ramanujans-formula"
  },
  {
    id: "06",
    paperId: "PAPER 06",
    category: "CS.IT / MATH.NT",
    title: "The Shannon–Wakil Effect",
    date: "Feb 2026 · rev. Nov 2026",
    status: "REVISED · ANALOGY",
    description: "A proposed analogy between Shannon's AEP and channel coding theorem and the cascade-moduli arithmetic, with the information-theoretic statements corrected: the constants are H/log|A| and C, not 1/2.",
    highlights: [
      "Definition 2.1: The Shannon–Wakil Effect",
      "Proposition 3.2: The AEP",
      "Proposition 4.2: Channel Coding, a Partial Instance",
      "Conjecture 9.1: The Constitutional Forcing Conjecture"
    ],
    htmlUrl: "/papers/p06",
    pdfUrl: `${import.meta.env.BASE_URL}files/p06.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p06.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p06-shannon-wakil"
  },
  {
    id: "07",
    paperId: "PAPER 07",
    category: "MATH.NT",
    title: "Condition W3",
    date: "Feb 2026 · rev. Nov 2026",
    status: "REVISED · CLASSICAL RESULT",
    description: "No Siegel zeros for characters modulo 3ᴷ, with a one-line proof: (ℤ/3ᴷ)ˣ is cyclic, so the only real character comes from the character mod 3. The base change to Q(ω) is computed correctly and nothing is specific to 3.",
    highlights: [
      "Theorem 1.1: Condition W3",
      "Lemma 2.1: Real Characters Modulo 3ᴷ",
      "Lemma 2.2: Positivity of L(σ, χ₋₃)",
      "Proposition 4.1: Base Change to Q(ω)"
    ],
    htmlUrl: "/papers/p07",
    pdfUrl: `${import.meta.env.BASE_URL}files/p07.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p07.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p07-condition_w3"
  },
  {
    id: "08",
    paperId: "PAPER 08",
    category: "MATH.NT",
    title: "Prime Digit Bias",
    date: "Mar 2026 · rev. Nov 2026",
    status: "REVISED · EXPLANATION WITHDRAWN",
    description: "The Lemke Oliver–Soundararajan bias in the last digits of consecutive primes, recomputed for the first 10⁸ and 10⁹ primes. The Hardy–Littlewood explanation accounts for it; the ternary-constitutional explanation of the first version is withdrawn.",
    highlights: [
      "The Recomputed Transition Matrix",
      "The Hardy–Littlewood Singular Series and the Prime 3",
      "The Rate of Decay",
      "Other Moduli and the Parity Barrier"
    ],
    htmlUrl: "/papers/p08",
    pdfUrl: `${import.meta.env.BASE_URL}files/p08.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p08.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p08-prime-bias-ternary-bridge"
  },
  {
    id: "09",
    paperId: "PAPER 09",
    category: "CS.IT / MATH.CA",
    title: "The DFT Constitutional Constant",
    date: "Mar 2026 · rev. Nov 2026",
    status: "REVISED · CLASSICAL RESULT",
    description: "The conjugate symmetry of the discrete Fourier transform of a real signal, which leaves N of its 2N real degrees of freedom, read as θ_FFT = 1/2 — a classical fact, with what it does and does not imply.",
    highlights: [
      "Theorem 3.1: Conjugate Symmetry",
      "Proposition 4.1: The Energy-Fraction Identity",
      "Proposition 7.1: No Compression From the Symmetry",
      "Withdrawn: the Khayyam Bridge and the Universality Conjecture"
    ],
    htmlUrl: "/papers/p09",
    pdfUrl: `${import.meta.env.BASE_URL}files/p09.pdf`,
    downloadUrl: `${import.meta.env.BASE_URL}files/p09.html`,
    githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p09-wakil-theta-fft"
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
            The formal record of the Constitutional Sieve Programme, from historical restoration to signal processing. All nine preprints were revised in November 2026; each opens with a revision note listing what changed.
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
                        label="Summary" 
                        icon={BookOpen} 
                        url={paper.htmlUrl} 
                        isExternal={false} 
                        isPrimary={true} 
                      />
                      <ActionButton 
                        label="PDF" 
                        icon={FileText} 
                        url={paper.pdfUrl} 
                        isPrimary={true} 
                      />
                    </div>
                    
                    <div className="h-4 w-px bg-rule hidden sm:block" />
                    
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                      <ActionButton 
                        label="Full Text" 
                        icon={BookOpen} 
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

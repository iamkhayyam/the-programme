import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, Headphones, Share2 } from "lucide-react";

export const ESSAYS = [
  {
    id: "00",
    slug: "preface",
    title: "Preface",
    subtitle: "The Intimate Laboratory",
    date: "Feb 2026",
    teaser: "She was 93. Sharp as a tack. In the last year of her life I was lucky enough to be her primary caretaker. I didn't have the mathematics for it yet, but I was watching Constitutional Forcing operate in the most intimate possible laboratory.",
    themes: [
      "Constitutional Forcing",
      "The Intimate Laboratory",
      "Pattern Recognition",
      "Forced Constants"
    ],
    readUrl: "/essays/preface",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "01",
    slug: "khayyams-triangle",
    title: "Khayyam's Triangle",
    subtitle: "A Millennium Prized Problem",
    date: "Feb 2026",
    teaser: "The wrong name is Pascal's Triangle. Khayyam documented this triangle 584 years before Pascal published anything. This is not a minor attribution error. This is a restoration.",
    themes: [
      "Historical Restoration",
      "The Isfahan Observatory",
      "Mod-3 Sierpiński Fractal",
      "Geometric Sight"
    ],
    readUrl: "/essays/khayyams-triangle",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "02",
    slug: "the-shannon-wakil-effect",
    title: "The Shannon-Wakil Effect",
    subtitle: "The Same Machine",
    date: "Feb 2026",
    teaser: "Claude Shannon was solving a problem about telephone lines. I was solving a problem about prime numbers. We were building the same machine, seventy-seven years apart.",
    themes: [
      "Information Theory",
      "Channel Coding Theorem",
      "Typical Sets",
      "The Locksmith Argument"
    ],
    readUrl: "/essays/the-shannon-wakil-effect",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "03",
    slug: "spherical-cow-philosophy",
    title: "Spherical Cow Philosophy",
    subtitle: "It Started With Winter",
    date: "Feb 2026",
    teaser: "We came to the Twin Prime Conjecture from a cattle problem. Winter forced ternary logic. Ternary logic forced the number 3. The number 3 forced the question.",
    themes: [
      "Occam's Razor",
      "Ternary Encoding",
      "Eisenstein Geometry",
      "The Sophie Germain Test"
    ],
    readUrl: "/essays/spherical-cow-philosophy",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "04",
    slug: "once-upon-a-napkin",
    title: "Once Upon a Napkin",
    subtitle: "A Tribute to Ramanujan",
    date: "Feb 2026",
    teaser: "At 1:27 AM on a Zoom call, Ramanujan slid me a napkin. He did not derive the formula. He recognized it. The same way he recognized the partition identities.",
    themes: [
      "Ramanujan's Legacy",
      "The Universal Formula",
      "Configuration Density",
      "Recognition vs Discovery"
    ],
    readUrl: "/essays/once-upon-a-napkin",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "05",
    slug: "the-quilt-proof",
    title: "The Quilt Proof",
    subtitle: "Three Sailboats, One Island, and Why Nobody Will Believe You Until They Do",
    date: "Feb 2026",
    teaser: "A quilt proof is not a single derivation. It is a convergence — multiple independent routes to the same result, each one a different patch cut from different cloth.",
    themes: [
      "Convergence",
      "Pascadi's Route",
      "The Crete Cow",
      "Biokythera"
    ],
    readUrl: "/essays/the-quilt-proof",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "06",
    slug: "the-stepping-stones",
    title: "The Stepping Stones",
    subtitle: "CacheCow, Condition W3, and the Blueprint That Was Always There",
    date: "Feb 2026",
    teaser: "It is minus thirty degrees Celsius on the Alberta Prairies. A cow is standing in a field. The tag is dead. This is where Constitutional Forcing was actually discovered.",
    themes: [
      "The Cascade",
      "Condition W3",
      "CM Field Q(ω)",
      "Siegel Zeros"
    ],
    readUrl: "/essays/the-stepping-stones",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "07",
    slug: "the-seventh-domain",
    title: "The Seventh Domain",
    subtitle: "Constitutional Forcing: The Mechanism Named",
    date: "Feb 2026",
    teaser: "There are only six folds in origami. I don’t know why I remembered that. But I did, and then I thought about hexagons, and then everything started fitting into place.",
    themes: [
      "Formal Definition",
      "The Six Doors",
      "Causal Structure",
      "Recognition in 2026"
    ],
    readUrl: "/essays/the-seventh-domain",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "08",
    slug: "the-sustained-note",
    title: "The Sustained Note",
    subtitle: "The View From the Top — Of Consequence",
    date: "Feb 2026",
    teaser: "Press pause on any moment. It is never silent. What you hear when you press pause is a grand symphony of every note and vibration held simultaneously in a single sustained frequency.",
    themes: [
      "Zen and Flow",
      "Reiki Mastery",
      "Digit Bias Resolution",
      "The Mandala"
    ],
    readUrl: "/essays/the-sustained-note",
    audioUrl: null,
    shareUrl: null
  },
  {
    id: "09",
    slug: "domain-ation",
    title: "Domain-ation",
    subtitle: "The Codex, the First Dance, and Why This Is Also the Beginning",
    date: "Mar 2026",
    teaser: "The nerd gets the prom queen. This is not a conclusion. It is a codex. Written in plain sight, in the only language that cannot be misread: mathematics.",
    themes: [
      "The Codex",
      "DFT Constant",
      "The Transmission",
      "Maktub"
    ],
    readUrl: "/essays/domain-ation",
    audioUrl: null,
    shareUrl: null
  }
];

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

export default function Essays() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-16 bg-paper-bg min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="border-b border-rule pb-12 mb-16">
          <div className="font-plex-mono text-[0.62rem] text-light tracking-[0.15em] uppercase mb-4">
            ARC INSTITUTE OF KNOWWARE · NARRATIVES
          </div>
          <h1 className="font-stix font-semibold text-[2.5rem] leading-tight text-ink mb-6">
            Narrative Essays
          </h1>
          <p className="font-garamond italic text-[1.15rem] text-mid max-w-[700px]">
            The experience of the programme arriving, timestamped, in the rooms where it happened. These essays provide the narrative thread that the formal papers cannot contain.
          </p>
        </div>

        <div className="space-y-32">
          {ESSAYS.map((essay, idx) => (
            <motion.div 
              key={essay.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 group"
            >
              {/* LEFT COLUMN: METADATA & THEMES */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="font-plex-mono text-[0.55rem] text-light tracking-[0.2em] uppercase">
                    ESSAY {essay.id}
                  </div>
                  <div className="font-plex-mono text-[0.6rem] text-mid uppercase tracking-wider">
                    {essay.date}
                  </div>
                </div>

                {/* KEY THEMES: INTEGRATED DESIGN */}
                <div className="relative pl-6 py-1">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-rule/40" />
                  <div className="font-plex-mono text-[0.5rem] text-light tracking-[0.25em] uppercase mb-6 opacity-80">
                    Key Themes
                  </div>
                  <ul className="space-y-5">
                    {essay.themes.map((t, i) => (
                      <li key={i} className="group/item">
                        <span className="font-plex-sans text-[0.7rem] leading-snug text-mid italic group-hover/item:text-ink transition-colors block">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN: CONTENT & ACTIONS */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <Link to={essay.readUrl}>
                    <h2 className="font-stix font-semibold text-[2.1rem] leading-tight text-ink mb-2 group-hover:text-accent transition-colors duration-500">
                      {essay.title}
                    </h2>
                  </Link>
                  <div className="font-stix italic text-[1.1rem] text-mid mb-6">
                    {essay.subtitle}
                  </div>
                  
                  <p className="text-[1.05rem] leading-relaxed text-mid font-garamond italic mb-8 border-l-2 border-rule pl-6">
                    {essay.teaser}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-rule">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                    <div className="flex items-center gap-6">
                      <ActionButton 
                        label="Read Narrative" 
                        icon={BookOpen} 
                        url={essay.readUrl} 
                        isExternal={false} 
                        isPrimary={true} 
                      />
                    </div>
                    
                    <div className="h-4 w-px bg-rule hidden sm:block" />
                    
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                      <ActionButton 
                        label="Listen" 
                        icon={Headphones} 
                        url={essay.audioUrl} 
                      />
                      <ActionButton 
                        label="Share" 
                        icon={Share2} 
                        url={essay.shareUrl} 
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

import React, { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { PAPERS } from "../constants/programme";
import { ESSAYS } from "./Essays";
import KnowwareLogo from "../components/KnowwareLogo";
import { Fraction } from "../components/Fraction";

interface PaperContent {
  id: string;
  track: string;
  title: React.ReactNode;
  authors: string;
  affiliation: string;
  date: string;
  abstract: React.ReactNode;
  keywords: string;
  msc: string;
  content: React.ReactNode;
  pdfUrl: string;
  githubUrl: string | null;
  nextPaper?: {
    id: string;
    title: React.ReactNode;
    desc: React.ReactNode;
    url: string;
  };
}

const PAPERS_DATA: Record<string, PaperContent> = {
  p01: {
    id: "01",
    track: "Paper · ARC-CF-P01",
    title: "Constitutional Forcing",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted February 2026 · Constitutional Sieve Programme, Paper 01 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p01.pdf",
    githubUrl: "https://github.com/knowware-institute/p01",
    abstract: (
      <>
        <p className="mb-3">We introduce and formally define <em>Constitutional Forcing</em>: a mechanism by which the irreducible algebraic structure of a mathematical system uniquely determines a governing constant, leaving no freedom in its value. The constant is not fitted, not approximated, and not chosen — it is forced. Changing it requires changing the structure of the system itself.</p>
        <p className="mb-3">A system of depth <em>k</em> has exactly <em>k</em> independent <em>constitutional constraints</em>, operating on a binary configuration space of size 2<sup><em>k</em></sup>. Each constraint eliminates exactly one configuration class, leaving 2<sup><em>k</em></sup> − <em>k</em> valid configurations. The forced governing constant is the configuration density <em>θ<sub>k</sub></em> = <Fraction numerator={<>2<sup>k</sup> − k</>} denominator={<>2<sup>k</sup></>} />.</p>
        <p>We exhibit instances across two independent domains: prime arithmetic (<em>k</em>=1, <em>k</em>=3) and information theory (<em>k</em>=1). We propose the Counting Theorem: exactly <em>k</em> configurations are invalid in any <em>k</em>-fold constitutionally constrained system. This paper is the foundation of a nine-paper programme. The remaining eight papers develop the instances, derive consequences, and explore the cross-domain structure of the mechanism.</p>
      </>
    ),
    keywords: "constitutional forcing, constitutional constraint, configuration density, forced governing constant, sieve theory, level of distribution, Shannon entropy, k-hierarchy, Shannon–Wakil effect",
    msc: "11N35 (primary) · 11N13 · 94A15 · 01A99",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">What Constitutional Forcing Is</h2>
        <p className="mb-4">The Bombieri–Vinogradov theorem establishes that primes are equidistributed in arithmetic progressions on average over moduli up to x<sup>1/2</sup> (up to logarithmic factors). The level of distribution is θ = <Fraction numerator="1" denominator="2" />. It is not a computation; it is a structural fact about binary arithmetic progressions.</p>
        <p className="mb-4">In the companion paper [3] we argue for θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> for cascade moduli q = 3<sup>K</sup> via the algebraic geometry of the Eisenstein integers.</p>
        <p className="mb-4">This paper asks: what is the mechanism? Why <Fraction numerator="5" denominator="8" />? Why not <Fraction numerator="3" denominator="5" />, or <Fraction numerator="2" denominator="3" />, or some other rational number? The answer proposed here is Constitutional Forcing: the cascade result is argued to be an instance of the same structural phenomenon as the Bombieri–Vinogradov barrier itself.</p>
        
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Definitions</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-accent bg-accent-pale">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Definition 2.1 — Constitutional Constraint</div>
          <p className="text-[0.95rem] leading-relaxed">A constraint C on a system S is constitutional if it satisfies three conditions: (CF1) Intrinsic — it is forced by the irreducible algebraic structure of S, not a free parameter or modelling choice; (CF2) Independent — it is structurally separate from other constitutional constraints, not derivable from them; (CF3) Binary-eliminating — it eliminates exactly one configuration class from the relevant configuration space.</p>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-accent bg-accent-pale">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Definition 2.4 — Constitutional Forcing of Depth k</div>
          <p className="text-[0.95rem] leading-relaxed">A system S exhibits Constitutional Forcing of depth k if: it has a binary configuration space C<sub>k</sub> = {'{0,1}'}<sup>k</sup> of size 2<sup>k</sup>; exactly k independent constitutional constraints operate on C<sub>k</sub>; the forced governing constant is θ<sub>k</sub> = <Fraction numerator={<>2<sup>k</sup> − k</>} denominator={<>2<sup>k</sup></>} />; and no other value is consistent with the structure.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Two Instances</h2>
        <h3 className="font-stix font-semibold italic text-[0.92rem] text-mid mt-6 mb-2">3.1 Bombieri–Vinogradov: k = 1, θ = <Fraction numerator="1" denominator="2" /></h3>
        <p className="mb-4">For arithmetic progressions over all moduli q ≤ x<sup>1/2</sup>, one constitutional constraint operates: primality itself. This eliminates one configuration class (the non-prime configuration). Formula: θ<sub>1</sub> = <Fraction numerator="2 − 1" denominator="2" /> = <Fraction numerator="1" denominator="2" />. The Bombieri–Vinogradov theorem is constitutionally forced.</p>
        
        <h3 className="font-stix font-semibold italic text-[0.92rem] text-mid mt-6 mb-2">3.2 Cascade Moduli: k = 3, θ = <Fraction numerator="5" denominator="8" /></h3>
        <p className="mb-4">For arithmetic progressions over cascade moduli q = 3<sup>K</sup>, three constitutional constraints are proposed, arising from the structure of Z[ω]: for a twin prime pair (p, p+2), survival conditions at moduli 3 (p ≡ 2 (mod 3)), 9 (attributed to the ramification (3) = (1−ω)<sup>2</sup>) and 27 (attributed to the three-level filtration of Z[ω]/(3<sup>K</sup>)). Formula: θ<sub>3</sub> = <Fraction numerator="8 − 3" denominator="8" /> = <Fraction numerator="5" denominator="8" />.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Counting Theorem</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 2.6 — Counting Theorem</div>
          <p className="text-[0.95rem] leading-relaxed">Let S exhibit Constitutional Forcing of depth k. Then exactly k configurations in C<sub>k</sub> = {'{0,1}'}<sup>k</sup> are invalid, and the forced governing constant is θ<sub>k</sub> = <Fraction numerator={<>2<sup>k</sup> − k</>} denominator={<>2<sup>k</sup></>} />.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Non-Instances and Falsifiability</h2>
        <p className="mb-4">A framework that cannot be wrong is not a framework. We document a proposed non-instance.</p>
        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 4.1 — Sophie Germain Non-Instance</div>
          <p className="text-[0.95rem] leading-relaxed">Sophie Germain prime pairs (p, 2p+1) do not exhibit Constitutional Forcing at depth k = 2. Predicted level of distribution: θ = <Fraction numerator="1" denominator="2" />. No enhancement over Bombieri–Vinogradov.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Constitutional Forcing Conjecture</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink border-dashed bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Conjecture 5.1 — Constitutional Forcing Conjecture</div>
          <p className="text-[0.95rem] leading-relaxed">Every mathematical system with exactly k independent constitutional constraints on a binary configuration space of size 2<sup>k</sup> exhibits the forced governing constant θ<sub>k</sub> = <Fraction numerator={<>2<sup>k</sup> − k</>} denominator={<>2<sup>k</sup></>} />. The correspondence between configuration density and analytic level of distribution for k ≥ 4 is conjectural and is the principal open problem of the programme.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Position in the Nine-Paper Programme</h2>
        <div className="responsive-table-container">
          <table className="responsive-table text-[0.85rem] font-stix">
            <thead>
              <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
                <th className="py-2 px-3 text-left">Paper</th>
                <th className="py-2 px-3 text-left">Content</th>
                <th className="py-2 px-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule"><td className="py-2 px-3">01 (this)</td><td className="py-2 px-3">Constitutional Forcing: definition, Counting Theorem, instances</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">02</td><td className="py-2 px-3">Khayyam's Triangle: historical restoration, mod-3 fractal, combinatorial origin</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">03</td><td className="py-2 px-3">Spherical Cow Philosophy: methodological framework, falsifiability</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">04</td><td className="py-2 px-3">Eisenstein integers, cascade moduli, θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> (geometric argument)</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">05</td><td className="py-2 px-3">Ramanujan's formula: universal formula θ<sub>k</sub> = <Fraction numerator={<>2<sup>k</sup>−k</>} denominator={<>2<sup>k</sup></>} /></td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">06</td><td className="py-2 px-3">Shannon–Wakil Effect: information theory parallel</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">07</td><td className="py-2 px-3">Condition W3: Siegel zero exclusion via CM structure of Z[ω]</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">08</td><td className="py-2 px-3">Prime digit bias (Lemke Oliver–Soundararajan)</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b-2 border-ink"><td className="py-2 px-3">09</td><td className="py-2 px-3">DFT constitutional constant θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" /></td><td className="py-2 px-3">Under revision</td></tr>
            </tbody>
          </table>
          <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> Structure of the nine-paper Constitutional Sieve Programme.</div>
        </div>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. Bombieri, "On the large sieve," <em>Mathematika</em> 12 (1965), 201–225.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Vinogradov, "The density hypothesis for Dirichlet L-series," <em>Izv. Akad. Nauk SSSR</em> 29 (1965).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ternary Forcing on the Hexagonal Lattice: Eisenstein Integers, Cascade Moduli, and Level of Distribution <Fraction numerator="5" denominator="8" />," Constitutional Sieve Programme Paper 04 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Condition W3: Absence of Siegel Zeros for Characters Modulo 3<sup>K</sup> via the CM Structure of Z[ω]," Constitutional Sieve Programme Paper 07 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Pascadi, "On the exponents of distribution of primes and smooth numbers," arXiv:2505.00653 (2025).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">C. E. Shannon, "A Mathematical Theory of Communication," <em>Bell Syst. Tech. J.</em> 27 (1948), 379–423.</li>
          </ol>
        </div>
      </>
    ),
    nextPaper: {
      id: "02",
      title: "02 · Khayyam's Triangle",
      desc: "Historical Restoration and the Geometry Hidden in the Numbers. The mod-3 fractal that sat inside the most studied triangle in mathematics for nine centuries.",
      url: "/papers/p02"
    }
  },
  p02: {
    id: "02",
    track: "Paper · ARC-CF-P02",
    title: "Khayyam's Triangle",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted January 2026 · Constitutional Sieve Programme, Paper 02 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p02.pdf",
    githubUrl: "https://github.com/knowware-institute/p02",
    abstract: (
      <>
        <p className="mb-3">The triangular array of binomial coefficients has been called "Pascal's Triangle" in the West for centuries — yet Pascal arrived 584 years after the Persian mathematician Omar Khayyam described it. That alone might justify a rename. But there is a stronger argument hiding in plain sight: the triangle's deepest structural property is <em>geometric</em>, not combinatorial, and it belongs by mathematical character to Khayyam's tradition rather than Pascal's. Reduce the triangle's entries modulo any prime <em>p</em> and a Sierpiński-type fractal emerges — a self-similar geometric structure invisible to Pascal's probabilistic eye, but exactly the kind of hidden geometry Khayyam spent his life finding.</p>
        <p>This paper is the second in the nine-paper Constitutional Sieve Programme. The mod-3 fractal structure of Khayyam's Triangle, governed by Lucas's theorem, is the direct combinatorial ancestor of the cascade moduli framework and the level-of-distribution result <em>θ<sub>W</sub></em> = <Fraction numerator="5" denominator="8" /> claimed in the companion papers. A reader wishing to understand why the prime 3 plays a privileged role in that arithmetic programme will find the answer here.</p>
      </>
    ),
    keywords: "Pascal's triangle, Khayyam's triangle, Sierpiński fractal, Lucas's theorem, modular arithmetic, history of mathematics, cascade moduli, constitutional sieve theory",
    msc: "01A30 · 11B65 · 28A80 · 11N35",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Wrong Man's Name</h2>
        <p className="mb-4">Here is a simple question nobody seems to have asked. You know the triangular array of binomial coefficients — the one where each entry is the sum of the two above it, the one that encodes combinations, gives you Pascal's Rule, and sits in every combinatorics textbook. You call it Pascal's Triangle. But what does its deepest structural property look like, and whose mathematical instincts would have found it?</p>
        <p className="mb-4">Colour every entry that is <em>not</em> divisible by 3 and leave the rest blank. Do this for row after row, hundreds of rows deep. What emerges is not a triangle. It is a fractal — an infinite, self-similar geometric object that replicates itself at every scale. This is not a recent discovery. What is curious is that nobody has used it to ask the obvious question: does this fractal belong to Pascal's mathematical world, or to someone else's? The answer is someone else's. His name was Omar Khayyam.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">584 Years Earlier</h2>
        <div className="responsive-table-container">
          <table className="responsive-table text-[0.85rem] font-stix">
            <thead>
              <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
                <th className="py-2 px-3 text-left">Year</th>
                <th className="py-2 px-3 text-left">Mathematician</th>
                <th className="py-2 px-3 text-left">Location</th>
                <th className="py-2 px-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule"><td className="py-2 px-3">~1070</td><td className="py-2 px-3">Omar Khayyam</td><td className="py-2 px-3">Persia</td><td className="py-2 px-3">Treatment now lost; cited by al-Ṭūsī, 1265</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">1261</td><td className="py-2 px-3">Yang Hui</td><td className="py-2 px-3">China</td><td className="py-2 px-3">Independent discovery</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">1265</td><td className="py-2 px-3">al-Ṭūsī</td><td className="py-2 px-3">Persia</td><td className="py-2 px-3">Explicitly cites Khayyam</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">1303</td><td className="py-2 px-3">Zhu Shijie</td><td className="py-2 px-3">China</td><td className="py-2 px-3">Includes diagram</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">1527</td><td className="py-2 px-3">Petrus Apianus</td><td className="py-2 px-3">Europe</td><td className="py-2 px-3">127 years before Pascal</td></tr>
              <tr className="border-b-2 border-ink"><td className="py-2 px-3">1654</td><td className="py-2 px-3">Blaise Pascal</td><td className="py-2 px-3">France</td><td className="py-2 px-3"><em>Traité du triangle arithmétique</em></td></tr>
            </tbody>
          </table>
          <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> The triangle before Pascal. He came last.</div>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Two Ways of Seeing a Triangle</h2>
        <p className="mb-4">Pascal's question was: <em>how many outcomes?</em> He wrote his <em>Traité</em> to solve the problem of points — how to divide gambling stakes fairly when a game is interrupted. That question is extraordinarily productive. It built probability theory. It shaped mathematics for generations. But it cannot see the fractal.</p>
        <p className="mb-4">Khayyam's question was: <em>what structure is hiding here?</em> Reduce the triangle modulo 3. What survives? The answer is a Sierpiński triangle — the same self-similar fractal pattern at every scale, its appearance governed exactly by Lucas's theorem. The fractal is invisible to Pascal's question. It is the first thing Khayyam's question finds.</p>

        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Lemma 4.1 — Lucas's Theorem</div>
          <p className="text-[0.95rem] leading-relaxed">The binomial coefficient <em>C</em>(<em>n</em>, <em>k</em>) ≡ 0 (mod <em>p</em>) if and only if at least one base-<em>p</em> digit of <em>k</em> exceeds the corresponding digit of <em>n</em>. Equivalently, <em>C</em>(<em>n</em>, <em>k</em>) is nonzero mod <em>p</em> if and only if every base-<em>p</em> digit of <em>k</em> is at most the corresponding digit of <em>n</em>.</p>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 4.2 — Hausdorff Dimension of the Mod-<em>p</em> Fractal</div>
          <p className="text-[0.95rem] leading-relaxed">For any prime <em>p</em>, the set of nonzero entries of the triangular array modulo <em>p</em> forms a Sierpiński fractal with Hausdorff dimension log(<em>p</em>(<em>p</em>+1)/2)/log(<em>p</em>). For <em>p</em> = 3: dimension = log(6)/log(3) ≈ 1.631. For <em>p</em> = 2: dimension = log(3)/log(2) ≈ 1.585.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Why This Matters: The Combinatorial Origin of θ = <Fraction numerator="5" denominator="8" /></h2>
        <p className="mb-4">The mod-3 fractal is not decorative. The surviving entries — the nonzero residues 1 and 2 mod 3 — trace out exactly the constitutional residue classes that twin primes inhabit.</p>
        <p className="mb-4">Proposition 2.3 of the Ramanujan paper [5] proposes a direct combinatorial correspondence between the fractal and the sieve. The triangle is not a metaphor for the arithmetic. The triangle <em>is</em> the arithmetic, seen from a different frame. Both are projections of the same underlying structure. Khayyam's Triangle (combinatorial face) and the hexagonal lattice of the Eisenstein integers (algebraic face) are the same result in two mathematical languages.</p>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">R. Rashed (ed.), <em>Encyclopedia of the History of Arabic Science</em>, Vol. 2. Routledge, 1996.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">B. Pascal, <em>Traité du triangle arithmétique</em> (1654; published posthumously 1665).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. W. Weisstein, "Pascal's Triangle," MathWorld, Wolfram Web Resource.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">M. Gardner, "Mathematical Games," <em>Scientific American</em> (1977).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ramanujan's Dimensional Forcing: A Universal Formula for Sieve Levels," Constitutional Sieve Programme Paper 05 (2026).</li>
          </ol>
        </div>

        <div className="mt-12 mb-8">
          <img 
            src={`${import.meta.env.BASE_URL}khayyam_sierpinski_academic.png`} 
            alt="Khayyam's Triangle and the Geometry Hidden in the Numbers" 
            className="w-full h-auto border border-rule shadow-sm"
            referrerPolicy="no-referrer"
          />
          <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid">
            <strong>Figure 1.</strong> Khayyam's Triangle and the Geometry Hidden in the Numbers. Modular reduction reveals what counting cannot see.
          </div>
        </div>
      </>
    ),
    nextPaper: {
      id: "03",
      title: "03 · Spherical Cow Philosophy",
      desc: <>A Methodological Framework for Mathematical Discovery. Why the barrier at θ = <Fraction numerator="1" denominator="2" /> is not an obstacle — it is information.</>,
      url: "/papers/p03"
    }
  },
  p03: {
    id: "03",
    track: "Paper · ARC-CF-P03",
    title: "Spherical Cow Philosophy",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted February 2026 · Constitutional Sieve Programme, Paper 03 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p03.pdf",
    githubUrl: "https://github.com/knowware-institute/p03",
    abstract: (
      <>
        <p className="mb-3">We present <em>spherical cow philosophy</em> — a methodological framework for mathematical discovery that complements classical proof-by-contradiction by accepting empirical constitutional constraints as foundational and deriving their forced consequences. Named after the physics heuristic of modelling complex systems through essential simplification, the approach inverts the usual hierarchy: instead of deriving special cases from universal axioms, we identify structural constraints that are empirically universal within a domain, derive what they force rigorously, and validate predictions across independent domains.</p>
        <p>The framework addresses a specific situation: when classical sieve methods encounter persistent structural barriers — such as the θ = <Fraction numerator="1" denominator="2" /> ceiling for twin primes — the productive path may be to accept the constitutional constraint (here, <em>p</em> ≡ 2 (mod 3) for all twin primes <em>p</em> &gt; 3) as the natural entry point and derive its arithmetic consequences. The framework is explicitly falsifiable: it predicts a non-instance (Sophie Germain primes at θ = <Fraction numerator="1" denominator="2" />) and an open prediction (<em>k</em> = 4 constellation at θ = <Fraction numerator="3" denominator="4" />).</p>
      </>
    ),
    keywords: "mathematical methodology, constitutional forcing, spherical cow, empirical constitution, twin primes, sieve theory, methodological pluralism, structural barriers, cross-domain validation",
    msc: "00A30 (primary) · 00A35 · 11N35 · 11N36",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Introduction: The Physics Analogy</h2>
        <p className="mb-4">When physicists model heat transfer from a cow, they make a radical simplification: assume the cow is spherical. Strip away legs, spots, digestive complexity — keep only mass distribution and thermal properties. The spherical cow succeeds not despite its unrealism but because of it: it knows what to ignore. The simplification reveals what matters.</p>
        <p className="mb-4">Classical mathematics has three canonical responses to a hard problem: assume falsehood and derive a contradiction; build from axioms toward the target; exhaust the available toolkit. These approaches work brilliantly when the problem is provable from accepted axioms. When they encounter a persistent structural barrier — one that resists centuries of effort by the best available methods — the barrier is information. It may be signalling that the productive formulation has not yet been identified.</p>
        <p className="mb-4">Spherical cow philosophy provides a complementary response: <em>instead of asking how to overcome the barrier, ask what constitutional constraint the barrier is telling you exists</em>. Accept that constraint as the productive entry point. Derive what it forces. Validate the consequences.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Twin Prime Constitution</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 4.1 — Twin Prime Constitutional Signature</div>
          <p className="text-[0.95rem] leading-relaxed">Every twin prime pair (p, p+2) with p &gt; 3 satisfies p ≡ 2 (mod 3) and p+2 ≡ 1 (mod 3).</p>
        </div>
        <div className="proof ml-6 mb-6 text-[0.92rem] text-mid leading-relaxed">
          <div className="font-plex-sans italic text-[0.8rem] text-light mb-1">Proof.</div>
          Among any three consecutive integers, exactly one is divisible by 3. For the pair (p, p+2): if p ≡ 0 (mod 3), then 3 ∣ p, contradicting primality. If p ≡ 1 (mod 3), then p+2 ≡ 0 (mod 3), contradicting primality of p+2. Therefore p ≡ 2 (mod 3) and p+2 ≡ 0+1 = 1 (mod 3). <span className="float-right text-ink">□</span>
        </div>
        <p className="mb-4">This is not a hypothesis. It is a theorem. Guaranteed, inescapable. The primes cannot escape their own constitution. Spherical cow philosophy says: accept this as the entry point, not a consequence to derive. The constitutional signature forces a specific modular structure, which forces specific algebraic geometry (the Eisenstein integers), which — the programme argues — forces the level of distribution θ<sub>W</sub> = <Fraction numerator="5" denominator="8" />.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Non-Circularity and Falsifiability</h2>
        <p className="mb-4">The critical objection to spherical cow philosophy is circularity: if we accept constraints as given rather than proving them, have we proved anything? The answer is that we accept <em>theorems</em> as entry points, not assumptions. Proposition 4.1 is proved. The question is which direction to go from it: the spherical cow approach starts there and asks what it forces, rather than treating it as a consequence to derive from something more fundamental.</p>
        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 5.1 — Sophie Germain Falsification</div>
          <p className="text-[0.95rem] leading-relaxed">Sophie Germain prime pairs (p, 2p+1) do not exhibit the cascade moduli enhancement. The framework predicts depth k = 2 (not 3), giving θ<sub>2</sub> = <Fraction numerator="1" denominator="2" />.</p>
        </div>
        <p className="mb-4">A framework that cannot be wrong is not a framework. This one can be.</p>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Constitutional Forcing," Constitutional Sieve Programme Paper 01 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Khayyam's Triangle," Constitutional Sieve Programme Paper 02 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">T. Kuhn, <em>The Structure of Scientific Revolutions</em>. University of Chicago Press, 1962.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Popper, <em>The Logic of Scientific Discovery</em>. Hutchinson, 1959.</li>
          </ol>
        </div>
      </>
    ),
    nextPaper: {
      id: "04",
      title: "04 · Ternary Forcing on the Hexagonal Lattice",
      desc: "Eisenstein Integers, Cascade Moduli, and Level of Distribution 5/8. The geometric argument: why the prime 3 ramifies as a perfect square in Z[ω].",
      url: "/papers/p04"
    }
  },
  p04: {
    id: "04",
    track: "Paper · ARC-CF-P04",
    title: "Ternary Forcing on the Hexagonal Lattice",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted February 2026 · Constitutional Sieve Programme, Paper 04 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p04.pdf",
    githubUrl: "https://github.com/knowware-institute/p04",
    abstract: (
      <>
        <p className="mb-3">We argue for a level of distribution θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> for primes in arithmetic progressions modulo powers of 3. The argument proceeds in two independent geometric parts.</p>
        <p className="mb-3"><strong>Part I (Eisenstein filtration).</strong> The prime 3 ramifies in the Eisenstein integers Z[ω] as (3) = (1−ω)². This ramification induces a canonical three-level filtration on Z[ω]/(3<sup><em>K</em></sup>), forcing sieve weights over cascade moduli <em>q</em> = 3<sup><em>K</em></sup> to be triply-well-factorable: <em>w</em>(<em>d</em>) = α(<em>d</em>₁)β(<em>d</em>₂)γ(<em>d</em>₃) for <em>d</em> = <em>d</em>₁<em>d</em>₂<em>d</em>₃ ∣ <em>q</em>. Three-fold Cauchy–Schwarz over these levels, combined with the Weil bound, gives a first ceiling of θ ≤ <Fraction numerator="2" denominator="3" />.</p>
        <p><strong>Part II (Cyclic group cancellation).</strong> The group (Z/3<sup><em>K</em></sup>Z)* is cyclic of order φ(3<sup><em>K</em></sup>) = 2·3<sup><em>K</em>−1</sup>. We argue that this cyclic structure yields θ<sub>W</sub> = <Fraction numerator="5" denominator="8" />. The Siegel zero condition (Condition W3) is treated in the companion paper [7].</p>
      </>
    ),
    keywords: "level of distribution, Eisenstein integers, cascade moduli, Kloosterman sums, Watt's theorem, Siegel zeros, sieve theory, twin primes, Bombieri–Vinogradov, triply-well-factorable weights",
    msc: "11N13 (primary) · 11N35 · 11N36 · 11R04 · 11L05",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Introduction</h2>
        <p className="mb-4">The Bombieri–Vinogradov theorem establishes equidistribution of primes in arithmetic progressions modulo <em>q</em>, for <em>q</em> ≤ <em>x</em><sup>1/2</sup>, with savings over the trivial bound: for any <em>A</em> &gt; 0,</p>
        <div className="flex items-center justify-between my-6">
          <div className="flex-1 text-center font-stix text-[1.02rem]"><em>∑</em><sub><em>q</em> ≤ <em>x</em><sup>1/2</sup>/(log <em>x</em>)<sup><em>B</em></sup></sub> max<sub>gcd(<em>a</em>,<em>q</em>)=1</sub> |ψ(<em>x</em>; <em>q</em>, <em>a</em>) − <em>x</em>/φ(<em>q</em>)| ≪ <em>x</em>/(log <em>x</em>)<sup><em>A</em></sup></div>
          <div className="font-plex-mono text-[0.68rem] text-light w-11 text-right">(1)</div>
        </div>
        <p className="mb-4">The <em>level of distribution</em> θ is the supremum of exponents for which (1) holds with <em>q</em> ≤ <em>x</em><sup>θ</sup>. Bombieri–Vinogradov gives θ = <Fraction numerator="1" denominator="2" /> for all moduli. This paper argues for θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> for cascade moduli <em>q</em> = 3<sup><em>K</em></sup>. The argument is geometric: both Part I (the ceiling 2/3) and Part II (the value 5/8) are argued to arise from algebraic properties of 3 in Z[ω], not from analytic optimisation.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Geometric Part I: Eisenstein Filtration</h2>
        <p className="mb-4">The Eisenstein integers Z[ω], where ω = <em>e</em><sup>2πi/3</sup>, form a hexagonal lattice in the complex plane. Their fundamental property for this paper is the ramification of 3.</p>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 2.2 — Ramification of 3 in Z[ω]</div>
          <p className="text-[0.95rem] leading-relaxed">In the ring Z[ω], the prime 3 factors as (3) = (1−ω)². The ideal 𝔭 = (1−ω) is the unique prime of Z[ω] above 3, with norm N(𝔭) = 3. The ramification is total: e = 2, f = 1.</p>
        </div>
        <div className="proof ml-6 mb-6 text-[0.92rem] text-mid leading-relaxed">
          <div className="font-plex-sans italic text-[0.8rem] text-light mb-1">Proof.</div>
          The minimal polynomial of ω over Q is Φ₃(<em>x</em>) = <em>x</em>² + <em>x</em> + 1. Modulo 3: <em>x</em>² + <em>x</em> + 1 ≡ <em>x</em>² − 2<em>x</em> + 1 = (<em>x</em>−1)² (mod 3), since 1 ≡ −2 (mod 3). So Φ₃ ≡ (<em>x</em>−1)² mod 3. By Dedekind's theorem, (3) = (1−ω)² in Z[ω], confirming total ramification. <span className="float-right text-ink">□</span>
        </div>
        <p className="mb-4">This ramification forces a canonical three-level filtration on Z[ω]/(3<sup><em>K</em></sup>). Any function <em>w</em>(<em>d</em>) supported on <em>d</em> ∣ 3<sup><em>K</em></sup> decomposes as <em>w</em>(<em>d</em>) = α(<em>d</em>₁)β(<em>d</em>₂)γ(<em>d</em>₃), where <em>d</em>₁<em>d</em>₂<em>d</em>₃ = <em>d</em> corresponds to the three levels of the filtration. Sieve weights over cascade moduli are therefore <em>triply-well-factorable</em> by the algebraic structure of Z[ω], not by choice. Three-fold Cauchy–Schwarz over the filtration levels gives θ ≤ <Fraction numerator="2" denominator="3" />.</p>

        <div className="my-6 p-4 border border-rule border-l-4 border-light bg-paper-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Corollary 6.4 — Twin Primes as Inert-Split Pairs</div>
          <p className="text-[0.95rem] leading-relaxed">A prime <em>p</em> &gt; 3 satisfies <em>p</em> ≡ 2 (mod 3) if and only if <em>p</em> is <em>inert</em> in Z[ω] (remains prime). Its companion <em>p</em>+2 ≡ 1 (mod 3) <em>splits</em> in Z[ω] (factors into two distinct Eisenstein primes). Twin primes are precisely the inert-split pairs of the hexagonal lattice.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Geometric Part II: Cyclic Group Cancellation</h2>
        <p className="mb-4">The group (Z/3<sup><em>K</em></sup>Z)* is cyclic of order φ(3<sup><em>K</em></sup>) = 2·3<sup><em>K</em>−1</sup>. We argue that this cyclic structure, deployed via Watt's 1995 theorem, yields θ<sub>W</sub> = <Fraction numerator="5" denominator="8" />.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Main Theorem</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 1.1 — Level of Distribution for Cascade Moduli</div>
          <p className="text-[0.95rem] leading-relaxed mb-3">For any <em>A</em> &gt; 0 and ε &gt; 0,</p>
          <div className="text-center font-stix text-[1.02rem] mb-3"><em>∑</em><sub>3<sup><em>K</em></sup> ≤ <em>x</em><sup><Fraction numerator="5" denominator="8" />−ε</sup></sub> max<sub>gcd(<em>a</em>, 3<sup><em>K</em></sup>)=1</sub> |ψ(<em>x</em>; 3<sup><em>K</em></sup>, <em>a</em>) − <em>x</em>/φ(3<sup><em>K</em></sup>)| ≪ <em>x</em>/(log <em>x</em>)<sup><em>A</em></sup></div>
          <p className="text-[0.95rem] leading-relaxed">where ψ(<em>x</em>; <em>q</em>, <em>a</em>) = Σ<sub><em>n</em>≤<em>x</em>, <em>n</em>≡<em>a</em> (mod <em>q</em>)</sub> Λ(<em>n</em>). Primes have level of distribution θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> over cascade moduli 3<sup><em>K</em></sup>, subject to Condition W3 (treated in [7]).</p>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 5.1 — Uniqueness of θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /></div>
          <p className="text-[0.95rem] leading-relaxed">For cascade moduli <em>q</em> = 3<sup><em>K</em></sup>, the value θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> is the unique level of distribution forced by the Eisenstein structure: (1) without cyclic group cancellation, the Weil-bound ceiling is θ ≤ <Fraction numerator="2" denominator="3" />; (2) without the triply-factorable structure from the Eisenstein filtration, the cyclic cancellation cannot be deployed; (3) the conjunction of both geometric facts forces exactly θ<sub>W</sub> = <Fraction numerator="5" denominator="8" />, not any other value.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Hexagonal Lattice: Geometric Picture</h2>
        <p className="mb-4">The three constraints proposed for the cascade moduli case — survival conditions for twin primes at the levels mod 3, mod 9 and mod 27 — are attributed to the structure of the hexagonal lattice Z[ω]: the level mod 3 to the signature <em>p</em> ≡ 2 (mod 3), the level mod 9 to the ramification (3) = 𝔭², and the level mod 27 to the three-level filtration of Z[ω]/(3<sup><em>K</em></sup>). Each is counted as eliminating one of the 2³ = 8 binary configurations, leaving 8 − 3 = 5 valid configurations: θ<sub>3</sub> = <Fraction numerator="5" denominator="8" />.</p>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. Bombieri, "On the large sieve," <em>Mathematika</em> 12 (1965), 201–225.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Vinogradov, "The density hypothesis for Dirichlet <em>L</em>-series," <em>Izv. Akad. Nauk SSSR</em> 29 (1965).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">N. Watt, "Kloosterman sums and a mean value for Dirichlet polynomials," <em>J. Number Theory</em> 53 (1995), 179–210.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Pascadi, "On the exponents of distribution of primes and smooth numbers," arXiv:2505.00653 (2025).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">H. M. Stark, "A complete determination of the complex quadratic fields of class-number one," <em>Michigan Math. J.</em> 14 (1967), 1–27.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Baker, "Linear forms in the logarithms of algebraic numbers IV," <em>Mathematika</em> 15 (1968), 204–216.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Condition W3: Absence of Siegel Zeros for Characters Modulo 3<sup>K</sup> via the CM Structure of Z[ω]," Constitutional Sieve Programme Paper 07 (2026).</li>
          </ol>
        </div>
      </>
    ),
    nextPaper: {
      id: "05",
      title: "05 · Ramanujan's Dimensional Forcing",
      desc: "A Universal Formula for Sieve Levels. The proposed formula θₖ = (2ᵏ − k)/2ᵏ, covering Bombieri–Vinogradov (k=1) and the cascade claim (k=3).",
      url: "/papers/p05"
    }
  },
  p05: {
    id: "05",
    track: "Paper · ARC-CF-P05",
    title: "Ramanujan's Dimensional Forcing",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted February 2026 · Constitutional Sieve Programme, Paper 05 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p05.pdf",
    githubUrl: null,
    abstract: (
      <>
        <p className="mb-3">We derive a universal formula for the level of distribution achieved by <em>k</em>-fold sieves with constitutional structure:</p>
        <p className="text-center my-3 italic font-stix text-[1.1rem]">θ<sub><em>k</em></sub> = <Fraction numerator={<>2<sup>k</sup> − k</>} denominator={<>2<sup>k</sup></>} /> = 1 − <Fraction numerator="k" denominator={<>2<sup>k</sup></>} />.</p>
        <p className="mb-3">The formula rests on two independent pillars. The <em>combinatorial pillar</em>: a counting theorem claims that a <em>k</em>-level nested constitutional sieve has exactly <em>k</em> invalid configurations out of 2<sup><em>k</em></sup> total, giving configuration density (2<sup><em>k</em></sup>−<em>k</em>)/2<sup><em>k</em></sup>. The <em>geometric pillar</em>: for <em>k</em>=3 (twin primes, cascade moduli q=3<sup>K</sup>), the algebraic structure of Z[ω] is argued to force θ = 5/8 independently, via two mechanisms — the three-level Eisenstein filtration and the cyclic Kloosterman cancellation.</p>
        <p>The formula recovers the classical Bombieri–Vinogradov barrier (θ<sub>1</sub> = <Fraction numerator="1" denominator="2" />, k=1) and the cascade moduli value claimed in Paper 04 (θ<sub>3</sub> = <Fraction numerator="5" denominator="8" />, k=3), and predicts the next achievable threshold at k=4 (θ<sub>4</sub> = <Fraction numerator="3" denominator="4" />). We also resolve a previously conflated distinction between <em>pattern density</em> and <em>configuration density</em> that explains a discrepancy of about 9% in earlier estimates.</p>
      </>
    ),
    keywords: "Ramanujan, level of distribution, constitutional dimension, L-functions, modular forms, sieve theory, twin primes, universal formula",
    msc: "11N13 (primary) · 11F11 · 11N35 · 11N36",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Introduction</h2>
        <p className="mb-4">This paper asks and answers: is there a universal formula for the level of distribution θ<sub>k</sub> as a function of sieve depth <em>k</em>? The answer is</p>
        <div className="flex items-center justify-between my-6">
        <p className="text-center my-6 font-stix text-[1.15rem]"><em>θ<sub>k</sub></em> = <Fraction numerator={<>2<sup>k</sup> − k</>} denominator={<>2<sup>k</sup></>} /></p>
          <div className="font-plex-mono text-[0.68rem] text-light w-11 text-right">(1)</div>
        </div>
        <p className="mb-4">giving θ<sub>1</sub> = <Fraction numerator="1" denominator="2" /> (Bombieri–Vinogradov), θ<sub>3</sub> = <Fraction numerator="5" denominator="8" /> (companion paper [4]), and θ<sub>4</sub> = <Fraction numerator="3" denominator="4" /> (predicted). Formula (1) is not an empirical fit: it is argued from first principles in two independent ways — one combinatorial, one geometric — and both arguments agree.</p>
        <p className="mb-4">The Ramanujan principle: in his work on partition functions and modular forms, Ramanujan observed that certain numbers force exact asymptotic formulas through their structural properties alone. Just as 24 is forced by the modular properties of the Dedekind eta function, the number 3 is argued here to force θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> in sieve theory. Given the constitutional structure, the configuration space has 2³ = 8 configurations; three constraints eliminate three configurations; and θ<sub>3</sub> = <Fraction numerator="5" denominator="8" /> is inevitable — not chosen, not approximated, forced.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Two Densities: A Critical Distinction</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-accent bg-accent/5">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-accent mb-2">Definition</div>
          <p className="text-[0.95rem] leading-relaxed"><strong>Configuration density</strong> ρ<sup>config</sup><sub>k</sub> = (2<sup><em>k</em></sup>−<em>k</em>)/2<sup><em>k</em></sup> is the ratio of valid to total binary configurations in a <em>k</em>-fold constitutionally constrained system, as counted by the Counting Theorem. <strong>Pattern density</strong> ρ<sup>pattern</sup><sub>k</sub> is the empirically observed frequency of primes landing in constitutional residue classes.</p>
        </div>
        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Remark — The ≈ 9% Discrepancy</div>
          <p className="text-[0.95rem] leading-relaxed italic">Pattern density ≠ configuration density. Pattern density (416/729 ≈ 0.571) falls below configuration density (5/8 = 0.625) by approximately 9%. Earlier estimates in this programme conflated the two, producing predictions that were systematically about 9% too low. The formula θ<sub>k</sub> = <Fraction numerator={<>2<sup>k</sup>−k</>} denominator={<>2<sup>k</sup></>} /> uses <em>configuration density</em>.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Combinatorial Pillar</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.4 — Nested Constraint Count</div>
          <p className="text-[0.95rem] leading-relaxed">For a <em>k</em>-fold sieve with constitutional constraints at each of <em>k</em> nested levels, exactly <em>k</em> configurations in C<sub>k</sub> = {'{0,1}'}<sup><em>k</em></sup> are invalid. The configuration density is θ<sub>k</sub> = (2<sup><em>k</em></sup>−<em>k</em>)/2<sup><em>k</em></sup>.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Universal Formula and Its Predictions</h2>
        <div className="responsive-table-container">
          <table className="responsive-table text-[0.85rem] font-stix">
            <thead>
              <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
                <th className="py-2 px-3 text-left">k</th>
                <th className="py-2 px-3 text-left">Formula</th>
                <th className="py-2 px-3 text-left">Value</th>
                <th className="py-2 px-3 text-left">Status</th>
                <th className="py-2 px-3 text-left">Source / Prediction</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule"><td className="py-2 px-3">1</td><td className="py-2 px-3"><Fraction numerator={<>2−1</>} denominator="2" /></td><td className="py-2 px-3"><Fraction numerator="1" denominator="2" /></td><td className="py-2 px-3">Proved</td><td className="py-2 px-3">Bombieri–Vinogradov (1965)</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">2</td><td className="py-2 px-3"><Fraction numerator={<>4−2</>} denominator="4" /></td><td className="py-2 px-3"><Fraction numerator="1" denominator="2" /></td><td className="py-2 px-3">Claimed non-instance</td><td className="py-2 px-3">Sophie Germain pairs (k=2 by structure)</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">3</td><td className="py-2 px-3"><Fraction numerator={<>8−3</>} denominator="8" /></td><td className="py-2 px-3"><Fraction numerator="5" denominator="8" /></td><td className="py-2 px-3">Claimed</td><td className="py-2 px-3">Cascade moduli</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">4</td><td className="py-2 px-3"><Fraction numerator={<>16−4</>} denominator="16" /></td><td className="py-2 px-3"><Fraction numerator="3" denominator="4" /></td><td className="py-2 px-3">Predicted (open)</td><td className="py-2 px-3">Unknown prime constellation with 4 constraints</td></tr>
              <tr className="border-b-2 border-ink"><td className="py-2 px-3">5</td><td className="py-2 px-3">(32−5)/32</td><td className="py-2 px-3">27/32</td><td className="py-2 px-3">Predicted (open)</td><td className="py-2 px-3">—</td></tr>
            </tbody>
          </table>
          <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> The <em>k</em>-hierarchy of constitutional sieve levels. The formula generates falsifiable predictions.</div>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Conjecture — Ramanujan's Dimensional Forcing</div>
          <p className="text-[0.95rem] leading-relaxed">For every <em>k</em>-fold sieve with constitutional structure, the analytic level of distribution equals the configuration density: θ<sub>k</sub> = (2<sup><em>k</em></sup>−<em>k</em>)/2<sup><em>k</em></sup>. The combinatorial pillar (Theorem 3.4) is claimed to establish this for all <em>k</em> at the counting level, and the geometric pillar to establish it analytically for <em>k</em>=3 (cascade moduli). The extension to <em>k</em> ≥ 4 over sufficiently broad moduli families is the principal open problem of the programme.</p>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Remark — Connection to Goldston–Pintz–Yıldırım</div>
          <p className="text-[0.95rem] leading-relaxed">The Goldston–Pintz–Yıldırım theorem shows that a level of distribution θ &gt; 1/2, over a moduli family broad enough to serve as GPY input, yields bounded gaps between primes. The cascade moduli family (θ<sub>W</sub> = <Fraction numerator="5" denominator="8" />, <em>k</em>=3) is too narrow: cascade moduli q = 3<sup>K</sup> form a one-parameter family. The formula predicts θ<sub>5</sub> = <Fraction numerator="27" denominator="32" /> ≈ 0.844 for a 5-level constitutional sieve.</p>
        </div>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Constitutional Forcing," Constitutional Sieve Programme Paper 01 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Khayyam's Triangle," Constitutional Sieve Programme Paper 02 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. Bombieri, A. Vinogradov, Bombieri–Vinogradov theorem (1965).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ternary Forcing on the Hexagonal Lattice," Constitutional Sieve Programme Paper 04 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Pascadi, "On the exponents of distribution of primes and smooth numbers," arXiv:2505.00653 (2025).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">D. Goldston, J. Pintz, C. Yıldırım, "Primes in tuples I," <em>Ann. Math.</em> 170 (2009), 819–862.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Condition W3," Constitutional Sieve Programme Paper 07 (2026).</li>
          </ol>
        </div>
      </>
    ),
    nextPaper: {
      id: "06",
      title: "06 · The Shannon–Wakil Effect",
      desc: "Constitutional Forcing as a Universal Pattern in Information Theory and Prime Arithmetic. Five structural correspondences between Shannon's 1948 theorems and the cascade moduli result.",
      url: "/papers/p06"
    }
  },
  p06: {
    id: "06",
    track: "Paper · ARC-CF-P06",
    title: "The Shannon–Wakil Effect",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted February 2026 · Constitutional Sieve Programme, Paper 06 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p06.pdf",
    githubUrl: "https://github.com/knowware-institute/p06",
    abstract: (
      <>
        <p className="mb-3">We identify, formalize, and provide three instances of a structural phenomenon we call the <em>Shannon–Wakil effect</em>: an exponential configuration space undergoes forced dimensional reduction to a strict subspace, governed by a constant that is uniquely determined by the algebraic structure of the system and cannot be altered without changing that structure.</p>
        <p className="mb-3">The first two instances are both due to Shannon (1948). The Asymptotic Equipartition Property shows that |𝒜|<sup><em>n</em></sup> sequences concentrate onto a typical set of size ≈ 2<sup><em>nH</em></sup>, where entropy <em>H</em> is forced by the source distribution. The Channel Coding Theorem shows that reliable communication is possible only at rates <em>R</em> &lt; <em>C</em>, where channel capacity <em>C</em> is forced by the channel. The proposed third instance is the cascade moduli claim of Paper 04: primes modulo powers of 3 concentrate onto an effective subspace governed by level of distribution θ<sub>W</sub> = <Fraction numerator="5" denominator="8" />, argued to be forced by the algebraic structure of Z[ω].</p>
        <p>We exhibit a non-instance (Sophie Germain prime pairs at θ = <Fraction numerator="1" denominator="2" />).</p>
      </>
    ),
    keywords: "Shannon, information theory, entropy, level of distribution, twin primes, sieve theory, k-hierarchy, structural parallel",
    msc: "94A15 (primary) · 94A24 · 11N35 · 11N13",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Introduction</h2>
        <p className="mb-4">Every mathematician knows at some level that information theory and number theory are different subjects. Information theory studies the storage and transmission of data; number theory studies the arithmetic structure of integers. They have different objects, different tools, and different communities.</p>
        <p className="mb-4">This paper documents a precise structural parallel between the two, visible only after both sides are independently understood. In 1948, Shannon proved two theorems that together define the fundamental limits of compression and communication. In 2026, a companion paper argued for an analogous phenomenon in analytic number theory. The governing constants in both cases are not chosen — they are uniquely forced by the algebraic structure of the underlying mathematical object. We call all three results instances of the Shannon–Wakil effect.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Shannon–Wakil Effect: Definition</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-accent bg-accent/5">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-accent mb-2">Definition 2.1 — Shannon–Wakil Effect</div>
          <p className="text-[0.95rem] leading-relaxed">A system exhibits the <em>Shannon–Wakil effect</em> if: (i) it has an exponential configuration space of size <em>B</em><sup><em>n</em></sup> or 2<sup><em>k</em></sup>; (ii) algebraic structure forces dimensional reduction to a strict subspace; (iii) the governing constant of that reduction is uniquely determined by the structure and cannot be altered without changing the system; (iv) the reduction is not approximated or fitted — it is exact and structural.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">First Instance: Shannon's AEP (1948)</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.1 — Asymptotic Equipartition Property (Shannon 1948)</div>
          <p className="text-[0.95rem] leading-relaxed">For any ε &gt; 0, the typical set <em>T</em><sub>ε</sub><sup>(<em>n</em>)</sup> = {'{'}<em>x</em><sup><em>n</em></sup> ∈ 𝒜<sup><em>n</em></sup> : |−(1/<em>n</em>) log<sub>2</sub> <em>p</em>(<em>x</em><sup><em>n</em></sup>) − <em>H</em>| &lt; ε{'}'} satisfies: (i) Pr[<em>X</em><sup><em>n</em></sup> ∈ <em>T</em><sub>ε</sub><sup>(<em>n</em>)</sup>] → 1; (ii) |<em>T</em><sub>ε</sub><sup>(<em>n</em>)</sup>| ≤ 2<sup><em>n</em>(<em>H</em>+ε)</sup>; (iii) |<em>T</em><sub>ε</sub><sup>(<em>n</em>)</sup>| ≥ (1−ε)2<sup><em>n</em>(<em>H</em>−ε)</sup> for large <em>n</em>.</p>
        </div>
        <p className="mb-4">The Shannon–Wakil structure: configuration space |𝒜|<sup><em>n</em></sup>; forced reduction to ≈ 2<sup><em>nH</em></sup>; governing constant <em>H</em> = −Σ <em>p</em> log <em>p</em> forced uniquely by the source distribution. You cannot change <em>H</em> without changing the source. It is not fitted. It is forced.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Second Instance: Channel Coding Theorem (1948)</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 4.1 — Channel Coding Theorem (Shannon 1948)</div>
          <p className="text-[0.95rem] leading-relaxed">(Achievability) For any <em>R</em> &lt; <em>C</em> and ε &gt; 0, codes of rate <em>R</em> and block-length <em>n</em> exist with error probability &lt; ε for all sufficiently large <em>n</em>. (Converse) For any <em>R</em> &gt; <em>C</em>, every sequence of codes of rate <em>R</em> has error probability bounded away from 0. Channel capacity: <em>C</em> = max<sub><em>p</em>(<em>x</em>)</sub> <em>I</em>(<em>X</em>;<em>Y</em>).</p>
        </div>
        <p className="mb-4">The Shannon–Wakil structure: code space 2<sup><em>nR</em></sup>; forced reduction to reliable codes only for <em>R</em> &lt; <em>C</em>; governing constant <em>C</em> = max <em>I</em>(<em>X</em>;<em>Y</em>) forced uniquely by the channel. The supremum structure of <em>C</em> and the supremum structure of level of distribution θ<sub>W</sub> are formally identical: both are the maximum rate at which a forced concentration holds.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Third Instance: Cascade Moduli Forcing (2026)</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 5.1 — Cascade Moduli Forcing (Companion Paper [4])</div>
          <p className="text-[0.95rem] leading-relaxed">For any <em>A</em> &gt; 0 and ε &gt; 0, Σ<sub>3<sup>K</sup> ≤ x<sup>θ<sub>W</sub>−ε</sup></sub> max<sub>gcd(<em>a</em>,3<sup>K</sup>)=1</sub> |ψ(<em>x</em>; 3<sup>K</sup>, <em>a</em>) − <em>x</em>/φ(3<sup>K</sup>)| ≪ <em>x</em>/(log <em>x</em>)<sup><em>A</em></sup>. The level of distribution θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> is the supremum of valid equidistribution rates, forced by the algebraic structure of Z[ω]. It cannot be changed without changing the structure.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Five Structural Correspondences</h2>
        <div className="responsive-table-container">
          <table className="responsive-table text-[0.85rem] font-stix">
            <thead>
              <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
                <th className="py-2 px-3 text-left">#</th>
                <th className="py-2 px-3 text-left">Shannon AEP</th>
                <th className="py-2 px-3 text-left">Channel Coding</th>
                <th className="py-2 px-3 text-left">Cascade Moduli</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule"><td className="py-2 px-3">1</td><td className="py-2 px-3">|𝒜|<sup><em>n</em></sup> possible sequences</td><td className="py-2 px-3">2<sup><em>nR</em></sup> possible codes</td><td className="py-2 px-3">All progressions mod 3<sup><em>K</em></sup></td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">2</td><td className="py-2 px-3">Concentrates on ≈ 2<sup><em>nH</em></sup></td><td className="py-2 px-3">Reliable only at <em>R</em> &lt; <em>C</em></td><td className="py-2 px-3">Concentrates on <em>x</em><sup>θ<sub>W</sub></sup></td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">3</td><td className="py-2 px-3"><em>H</em> forced by source <em>p</em>(<em>x</em>)</td><td className="py-2 px-3"><em>C</em> forced by channel <em>p</em>(<em>y</em>|<em>x</em>)</td><td className="py-2 px-3">θ<sub>W</sub> forced by Z[ω] structure</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">4</td><td className="py-2 px-3">Entropy maximisation</td><td className="py-2 px-3">Mutual information supremum</td><td className="py-2 px-3">Equidistribution supremum</td></tr>
              <tr className="border-b-2 border-ink"><td className="py-2 px-3">5</td><td className="py-2 px-3"><em>H</em> / log|𝒜|</td><td className="py-2 px-3"><em>C</em></td><td className="py-2 px-3">θ₃ = (8−3)/8 = 5/8</td></tr>
            </tbody>
          </table>
          <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> Five structural correspondences between the three instances of the Shannon–Wakil effect. Each is precise, not metaphorical.</div>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Remark — The 78-Year Gap</div>
          <p className="text-[0.95rem] leading-relaxed italic">Shannon's results: 1948. The cascade moduli result: 2026. Gap: 78 years. The structural parallel was invisible until both sides were independently developed. Shannon had never heard of cascade moduli; this programme was not built by analogy from information theory. The independence of the two paths is part of the evidence that the mechanism is real: two separate fields, different tools, different communities, decades apart, forced to the same formal structure by the same underlying phenomenon.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Shannon–Wakil Constant Ratio</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition — Shannon–Wakil Constant Ratio</div>
          <p className="text-[0.95rem] leading-relaxed">The ratio θ<sub>W</sub>/θ<sub>BV</sub> = (<Fraction numerator="5" denominator="8" />)/(<Fraction numerator="1" denominator="2" />) = <Fraction numerator="5" denominator="4" /> is the information-theoretic gain from exploiting the algebraic structure of Z[ω] relative to a generic (unstructured) channel. Whether this ratio has a channel-capacity interpretation — that is, whether there exists a channel whose capacity is exactly 5/4 times the capacity of the corresponding binary channel — is an open problem.</p>
        </div>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">C. E. Shannon, "A Mathematical Theory of Communication," <em>Bell Syst. Tech. J.</em> 27 (1948), 379–423.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">T. Cover and J. Thomas, <em>Elements of Information Theory</em>, 2nd ed. Wiley, 2006.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ramanujan's Dimensional Forcing," Constitutional Sieve Programme Paper 05 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ternary Forcing on the Hexagonal Lattice," Constitutional Sieve Programme Paper 04 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Spherical Cow Philosophy," Constitutional Sieve Programme Paper 03 (2026).</li>
          </ol>
        </div>
      </>
    ),
    nextPaper: {
      id: "07",
      title: "07 · Condition W3",
      desc: "Absence of Siegel Zeros for Characters Modulo 3K via the CM Structure of Z[ω]. The foundation check: arguing that the pathological zeros that would undermine the main theorem cannot exist.",
      url: "/papers/p07"
    }
  },
  p07: {
    id: "07",
    track: "Paper · ARC-CF-P07",
    title: "Condition W3: Absence of Siegel Zeros for Characters Modulo 3K via the CM Structure of Z[ω]",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted February 2026 · Constitutional Sieve Programme, Paper 07 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p07.pdf",
    githubUrl: "https://github.com/knowware-institute/p07",
    abstract: (
      <>
        <p className="mb-3">We argue for Condition W3: for every primitive Dirichlet character χ modulo <em>q</em> = 3<sup><em>K</em></sup>, the <em>L</em>-function <em>L</em>(<em>s</em>, χ) has no real zero in the region σ &gt; 1 − <em>c</em>/log <em>q</em> for an absolute, effectively computable constant <em>c</em> &gt; 0.</p>
        <p>The argument has three steps, each using the same algebraic structure. <strong>Step 1 (Lifting).</strong> Every primitive character χ (mod 3<sup><em>K</em></sup>) lifts canonically to a primitive Hecke Grössencharacter Ψ<sub>χ</sub> of K = Q(ω) = Q(√−3) of conductor 𝔭<sup>2<em>K</em></sup>, where 𝔭 = (1−ω) is the unique prime of Z[ω] above 3. <strong>Step 2 (Stark–Baker).</strong> Since K is a CM field of class number 1, the Stark–Baker theorem excludes Siegel zeros for <em>L</em>(<em>s</em>, Ψ<sub>χ</sub>) in an effective zero-free region. <strong>Step 3 (Transfer).</strong> The factorisation <em>L</em>(<em>s</em>, Ψ<sub>χ</sub>) = <em>L</em>(<em>s</em>, χ)·<em>L</em>(<em>s</em>, χε) transfers the zero-free region to <em>L</em>(<em>s</em>, χ).</p>
      </>
    ),
    keywords: "Siegel zeros, exceptional zeros, Dirichlet L-functions, Hecke Grössencharacters, CM fields, Eisenstein integers, Stark–Baker theorem, cascade moduli, Watt's theorem, level of distribution",
    msc: "11M20 (primary) · 11R42 · 11N13 · 11R37",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Setup and Statement</h2>
        <p className="mb-4">Papers 04 and 07 apply Watt's mean-value theorem [3] under three conditions they label W1–W3. Conditions W1 and W2 are parameter bounds addressed in the companion paper [4], Appendix A. Condition W3 — no Siegel zeros — is what this paper addresses.</p>

        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 1.1 — Condition W3</div>
          <p className="text-[0.95rem] leading-relaxed">Let <em>K</em> ≥ 1 and let χ be a primitive Dirichlet character modulo <em>q</em> = 3<sup><em>K</em></sup>. Then <em>L</em>(<em>s</em>, χ) has no real zero in the region σ &gt; 1 − <em>c</em>/log <em>q</em> for an absolute, effectively computable constant <em>c</em> &gt; 0.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Step 1: Lifting to a Hecke Character</h2>
        <p className="mb-4">Paper 07 lifts χ to a Hecke character of K = Q(ω) by base change.</p>

        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 2.5 — Canonical Lifting</div>
          <p className="text-[0.95rem] leading-relaxed">Let χ be a primitive Dirichlet character modulo 3<sup><em>K</em></sup>, and let Ψ<sub>χ</sub> = χ∘N be its base change, a Hecke Grössencharacter of K = Q(√−3); then Ψ<sub>χ</sub>((<em>n</em>)) = χ(<em>n</em>)² for all <em>n</em> coprime to 3. The factorisation <em>L</em>(<em>s</em>, Ψ<sub>χ</sub>) = <em>L</em>(<em>s</em>, χ)·<em>L</em>(<em>s</em>, χε) holds, where ε = (−3/·) is the quadratic character of K/Q.</p>
        </div>
        <div className="ml-6 mb-6 font-stix text-[0.92rem] leading-relaxed text-mid">
          <div className="font-plex-sans italic text-[0.8rem] text-light mb-1">Proof sketch.</div>
          The factorisation follows from the standard decomposition of Hecke <em>L</em>-functions over quadratic extensions. <span className="float-right text-[1rem]">□</span>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Step 2: The Stark–Baker Theorem for CM Fields</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.2 — as stated in Paper 07</div>
          <p className="text-[0.95rem] leading-relaxed">Let F be a CM field and let Ψ be a Hecke character of F of conductor 𝔣. Then <em>L</em>(<em>s</em>, Ψ) has no real zero in the region σ &gt; 1 − <em>c</em><sub>F</sub>/log(N(𝔣)·|disc(F)|) for an effectively computable constant <em>c</em><sub>F</sub> &gt; 0 depending only on [F:Q].</p>
          <p className="mt-2 text-[0.8rem] leading-relaxed text-light italic">In this generality the statement is not an established theorem: for imaginary quadratic fields it would settle the Landau–Siegel zero problem. Stark (1967) and Baker (1966) solved the class-number-one problem. Under revision.</p>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 3.1 — CM Structure of Q(ω)</div>
          <p className="text-[0.95rem] leading-relaxed">The field K = Q(ω) = Q(√−3) is a CM field: totally imaginary, quadratic over Q, with discriminant disc(K) = −3. Its class number is 1 (Z[ω] is a principal ideal domain). The Minkowski bound for Z[ω] is (2/π)√3 &lt; 2, so every ideal class contains an ideal of norm 1, i.e. the unit ideal. These properties together make K the optimal field for the Stark–Baker argument: the effective constant <em>c</em><sub>K</sub> is explicit and the zero-free region is the largest possible for a quadratic CM field.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Step 3: Transfer to <em>L</em>(<em>s</em>, χ)</h2>
        <p className="mb-4">From Proposition 2.5: <em>L</em>(<em>s</em>, Ψ<sub>χ</sub>) = <em>L</em>(<em>s</em>, χ)·<em>L</em>(<em>s</em>, χε). If <em>L</em>(<em>s</em>, χ) had a real zero β in the region σ &gt; 1 − <em>c</em>/log <em>q</em>, then <em>L</em>(β, Ψ<sub>χ</sub>) = <em>L</em>(β, χ)·<em>L</em>(β, χε) = 0. But Stark–Baker (Theorem 3.2) guarantees no such zero for <em>L</em>(<em>s</em>, Ψ<sub>χ</sub>). Contradiction. Hence <em>L</em>(<em>s</em>, χ) has no such zero. <span className="float-right text-[1rem]">□</span></p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Full Coherence: One Structure, Three Applications</h2>
        <p className="mb-4">The Eisenstein structure of Z[ω] does three things at once: (1) it forces the triply-well-factorable decomposition of sieve weights (Part I of [4]); (2) it provides the cyclic group structure used in the argument for θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> (Part II of [4]); (3) it provides the CM field structure that prevents Siegel zeros (this paper). The same algebraic structure does all three jobs simultaneously. This coherence is constitutional — not designed in, but forced by what Z[ω] is.</p>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">H. M. Stark, "A complete determination of the complex quadratic fields of class-number one," <em>Michigan Math. J.</em> 14 (1967), 1–27.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Baker, "Linear forms in the logarithms of algebraic numbers IV," <em>Mathematika</em> 15 (1968), 204–216.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">N. Watt, "Kloosterman sums and a mean value for Dirichlet polynomials," <em>J. Number Theory</em> 53 (1995), 179–210.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ternary Forcing on the Hexagonal Lattice," Constitutional Sieve Programme Paper 04 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">D. Goldfeld and L. Szpiro, "Bounds for the order of the Tate-Shafarevich group," <em>Compositio Math.</em> 97 (1995), 71–87.</li>
          </ol>
        </div>
      </>
    ),
    nextPaper: {
      id: "08",
      title: "08 · Prime Digit Bias",
      desc: "A proposed ternary explanation of the Lemke Oliver–Soundararajan bias: why consecutive prime last digits tend to avoid each other.",
      url: "/papers/p08"
    }
  },
  p08: {
    id: "08",
    track: "Paper · ARC-CF-P08",
    title: "Prime Digit Bias: The Ternary Constitutional Explanation of the Lemke Oliver–Soundararajan Effect",
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted March 2026 · Constitutional Sieve Programme, Paper 08 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p08.pdf",
    githubUrl: "https://github.com/knowware-institute/p08",
    abstract: (
      <>
        <p className="mb-3">In 2016, Lemke Oliver and Soundararajan published a striking computational discovery: the last digits of consecutive primes exhibit a strong repulsion bias that contradicts naïve randomness assumptions and persists — though diminishing — across all number bases tested. The authors correctly traced this to the Hardy–Littlewood prime constellations conjecture, but could not identify the underlying mechanistic cause: why the structure exists and why it holds across all bases.</p>
        <p>We argue that the bias is not mysterious: that it is the direct base-10 projection of ternary constitutional pressure governing prime distribution — a shadow of the mod-3 constraint under which all primes (except 2 and 3) reside in remainder classes {'{'}1, 2{'}'}, and under which all twin prime pairs satisfy <em>p</em> ≡ 2 (mod 3).</p>
      </>
    ),
    keywords: "prime digit bias, ternary constitutional structure, Lemke Oliver–Soundararajan, mod-3 constraints, minimum gap structure, twin primes, parity barrier, Siegel–Walfisz theorem, cascade moduli",
    msc: "11N05 (primary) · 11N13 · 11A41 · 94A17",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Introduction: The Mystery That Wasn't</h2>
        <p className="mb-4">In March 2016, Robert Lemke Oliver and Kannan Soundararajan submitted a paper that became briefly famous beyond number theory: consecutive primes are not equidistributed in their last digits. If the last digit of a prime is 1, the next prime is far less likely to also end in 1 than chance would predict. The bias is strong, computationally unambiguous, and holds — with diminishing strength — across all bases tested.</p>
        <p className="mb-4">The authors were admirably honest: they could explain <em>that</em> the bias follows from the Hardy–Littlewood conjecture, but not <em>why</em> the underlying structure exists. They called it "surprising" and "deeply unsettling." We argue the structure is neither: that it is the forced shadow of the ternary constitutional constraint governing prime distribution.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Ternary Constitutional Framework</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.2 — Constitutional Signature (from [3])</div>
          <p className="text-[0.95rem] leading-relaxed">Let (<em>p</em>, <em>p</em>+2) be a twin prime pair with <em>p</em> &gt; 3. Then <em>p</em> ≡ 2 (mod 3) and <em>p</em>+2 ≡ 1 (mod 3).</p>
        </div>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.4 — Ternary Equilibrium</div>
          <p className="text-[0.95rem] leading-relaxed">Let π₁(<em>N</em>) and π₂(<em>N</em>) denote the number of primes <em>p</em> ≤ <em>N</em> with <em>p</em> ≡ 1 (mod 3) and <em>p</em> ≡ 2 (mod 3) respectively. Then π₁(<em>N</em>)/π(<em>N</em>) → 1/2 and π₂(<em>N</em>)/π(<em>N</em>) → 1/2 as <em>N</em> → ∞, by Dirichlet's theorem on primes in arithmetic progressions.</p>
        </div>
        <p className="mb-4">The proposed bias mechanism is this: all primes &gt; 3 live in classes {'{'}1, 2{'}'} mod 3 (never class {'{'}0{'}'}), and twin primes constitutionally require the pair (2 mod 3, 1 mod 3). We argue that this constitutional pressure propagates into the base-10 last-digit distribution as a repulsion bias.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Deriving the Lemke Oliver–Soundararajan Bias</h2>

        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 4.1 — Base-10 Projection of Ternary Pressure</div>
          <p className="text-[0.95rem] leading-relaxed">For base-10 digits <em>r</em>, <em>s</em> ∈ {'{'}1, 3, 7, 9{'}'} (the digits coprime to 10 that can appear as last digits of primes &gt; 5), the observed Lemke Oliver–Soundararajan repulsion bias satisfies: the suppression of the pair (<em>r</em>, <em>s</em>) relative to equidistribution is positively correlated with the probability that both <em>r</em> and <em>s</em> are in the same ternary class mod 3. The enhancement of cross-class pairs relative to equidistribution is positively correlated with the constitutional twin-prime constraint.</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Validation and Context</h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Remark — Mechanistic vs. Descriptive Explanation</div>
          <p className="text-[0.95rem] leading-relaxed italic">The proposed explanation is mechanistic, not descriptive. The Lemke Oliver–Soundararajan paper showed that the bias follows from the Hardy–Littlewood conjecture — a descriptive reduction to a more fundamental conjecture. The present paper proposes a structural reason <em>why</em> the conjecture itself encodes such behaviour: that the ternary constitutional constraint <em>p</em> ≡ 2 (mod 3) for twin primes propagates the repulsion pressure that manifests as the digit bias. One is a derivation; the other is an explanation.</p>
        </div>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">R. J. Lemke Oliver and K. Soundararajan, "Unexpected biases in the distribution of consecutive primes," <em>Proc. Natl. Acad. Sci. USA</em> 113 (2016), E4446–E4454.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">G. H. Hardy and J. E. Littlewood, "Some problems of 'Partitio Numerorum' III," <em>Acta Math.</em> 44 (1923), 1–70.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Spherical Cow Philosophy," Constitutional Sieve Programme Paper 03 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Walfisz, <em>Weylsche Exponentialsummen in der neueren Zahlentheorie</em>. VEB Deutscher Verlag, 1963.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Pascadi, "On the exponents of distribution of primes and smooth numbers," arXiv:2505.00653 (2025).</li>
          </ol>
        </div>
      </>
    ),
    nextPaper: {
      id: "09",
      title: "09 · The DFT Constitutional Constant",
      desc: <>θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" />. The conjugate-mirror symmetry of the Discrete Fourier Transform, named and formalised as a constitutional constant. Empirical confirmation across datasets.</>,
      url: "/papers/p09"
    }
  },
  p09: {
    id: "09",
    track: "Paper · ARC-CF-P09",
    title: <>The DFT Constitutional Constant: θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" /> and the Khayyam Bridge</>,
    authors: "Khayyam Wakil",
    affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
    date: "Submitted March 2026 · Constitutional Sieve Programme, Paper 09 of 09",
    pdfUrl: "https://preprint.knowware.institute/pdf/p09.pdf",
    githubUrl: "https://github.com/knowware-institute/p09",
    abstract: (
      <>
        <p className="mb-3">The Discrete Fourier Transform of any real-valued finite signal satisfies an exact conjugate-mirror symmetry: the upper half of its spectrum is completely determined by the lower half. This paper names and formalises this redundancy as the <em>constitutional constant</em> θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" />, establishes a complete proof from first principles, reports empirical confirmation across structured and random datasets (maximum deviation &lt; 3×10<sup>−4</sup>), and maps the boundary conditions under which the constant holds exactly, holds approximately, or ceases to be the relevant quantity.</p>
        <p>This paper is the ninth in the nine-paper Constitutional Sieve Programme. θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" /> is Constitutional Forcing at depth k=1: one constitutional constraint (real-valued input), one invalid configuration class (upper half of spectrum), forced constant <Fraction numerator={<>2<sup>1</sup>−1</>} denominator={<>2<sup>1</sup></>} /> = <Fraction numerator="1" denominator="2" />.</p>
      </>
    ),
    keywords: "Discrete Fourier Transform, constitutional constant, conjugate symmetry, Khayyam's Triangle, Sierpiński fractal, neural compression, intrinsic dimensionality, spectral sparsity, constitutional forcing",
    msc: "42A38 (primary) · 94A12 · 28A80 · 11N35",
    content: (
      <>
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Introduction</h2>
        <p className="mb-4">The conjugate symmetry of the Discrete Fourier Transform is classical and well-known. Every signal processing textbook states it. Every FFT implementation exploits it. It is the reason compressed spectral representations store only half the coefficients.</p>
        <p className="mb-4">What has not been done is name it as a constitutional constant and place it within the framework of Constitutional Forcing. This paper does that. The result is not new; the framing is.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Formal Proof of θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" /></h2>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 1.1 — The Constitutional Constant (Informal)</div>
          <p className="text-[0.95rem] leading-relaxed">For any real-valued signal <em>x</em> ∈ ℝ<sup><em>N</em></sup>, the upper half of its DFT spectrum is the complex conjugate, reversed, of the lower half. Storing only the lower half uniquely determines the full spectrum. The fraction of the spectrum that is independently informative is exactly <Fraction numerator="1" denominator="2" />.</p>
        </div>
        <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.1 — The Constitutional Constant (Formal)</div>
          <p className="text-[0.95rem] leading-relaxed">Let <em>x</em> ∈ ℝ<sup><em>N</em></sup> (real-valued). Then for all <em>k</em> ∈ {'{'}1, …, <em>N</em>−1{'}'},</p>
          <div className="flex items-center justify-between my-2">
            <div className="flex-1 text-center font-stix text-[1.02rem]"><em>x̂</em><sub><em>N</em>−<em>k</em></sub> = <span className="overline"><em>x̂</em><sub><em>k</em></sub></span></div>
            <div className="font-plex-mono text-[0.68rem] text-light w-11 text-right">(1)</div>
          </div>
          <p className="text-[0.95rem] leading-relaxed">Consequently, {'{'}<em>x̂</em><sub><em>k</em></sub> : <em>k</em> ∈ {'{'}0, 1, …, ⌊<em>N</em>/2⌋{'}'}{'}'} uniquely determines <em>x̂</em> entirely, and the fraction of independently informative coefficients is exactly θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" />.</p>
        </div>
        <div className="ml-6 mb-6 font-stix text-[0.92rem] leading-relaxed text-mid">
          <div className="font-plex-sans italic text-[0.8rem] text-light mb-1">Proof.</div>
          By definition, <em>x̂</em><sub><em>k</em></sub> = Σ<sub><em>n</em>=0</sub><sup><em>N</em>−1</sup> <em>x</em>[<em>n</em>] · <em>e</em><sup>−2πi<em>kn</em>/<em>N</em></sup>. Since <em>x</em>[<em>n</em>] ∈ ℝ for all <em>n</em>, we have <em>x̂</em><sub><em>N</em>−<em>k</em></sub> = Σ <em>x</em>[<em>n</em>] <em>e</em><sup>−2πi(<em>N</em>−<em>k</em>)<em>n</em>/<em>N</em></sup> = Σ <em>x</em>[<em>n</em>] <em>e</em><sup>−2πi<em>n</em></sup> <em>e</em><sup>2πi<em>kn</em>/<em>N</em></sup> = Σ <em>x</em>[<em>n</em>] <em>e</em><sup>2πi<em>kn</em>/<em>N</em></sup> = <span className="overline"><em>x̂</em><sub><em>k</em></sub></span>, where the last step uses <em>e</em><sup>−2πi<em>n</em></sup> = 1 and <em>x</em>[<em>n</em>] ∈ ℝ. <span className="float-right text-[1rem]">□</span>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Constitutional Forcing at Depth k=1</h2>
        <p className="mb-4">The DFT result is Constitutional Forcing of depth <em>k</em>=1:</p>
        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition — DFT as Constitutional Forcing</div>
          <p className="text-[0.95rem] leading-relaxed">The DFT of real-valued signals exhibits Constitutional Forcing of depth <em>k</em>=1: (CF1) one constitutional constraint: <em>x</em>[<em>n</em>] ∈ ℝ for all <em>n</em>; (CF2) configuration space of size 2<sup>1</sup> = 2: {'{'}upper half informative, upper half redundant{'}'}; (CF3) exactly one configuration class invalid (upper half cannot carry independent information); (CF4) forced governing constant: θ<sub>FFT</sub> = <Fraction numerator={<>2<sup>1</sup>−1</>} denominator={<>2<sup>1</sup></>} /> = <Fraction numerator="1" denominator="2" />. This is identical in formal structure to the Bombieri–Vinogradov barrier (also depth k=1).</p>
        </div>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Compression Implications</h2>
        <p className="mb-4">The NFR (Neural Fiber Representation) pipeline that motivated this paper achieves 2730× compression at 96% energy retention on neural network weight tensors.</p>

        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Position Within the Constitutional Sieve Programme</h2>
        <div className="responsive-table-container">
          <table className="responsive-table text-[0.85rem] font-stix">
            <thead>
              <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
                <th className="py-2 px-3 text-left">Paper</th>
                <th className="py-2 px-3 text-left">Domain</th>
                <th className="py-2 px-3 text-left">k</th>
                <th className="py-2 px-3 text-left">θ<sub>k</sub></th>
                <th className="py-2 px-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule"><td className="py-2 px-3">01</td><td className="py-2 px-3">All domains (foundation)</td><td className="py-2 px-3">—</td><td className="py-2 px-3">θ<sub>k</sub> = <Fraction numerator={<>2<sup>k</sup>−k</>} denominator={<>2<sup>k</sup></>} /></td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">02</td><td className="py-2 px-3">Khayyam's Triangle (mod 3)</td><td className="py-2 px-3">3</td><td className="py-2 px-3">5/8</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">04</td><td className="py-2 px-3">Cascade moduli (analytic)</td><td className="py-2 px-3">3</td><td className="py-2 px-3">5/8</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">05</td><td className="py-2 px-3">Universal sieve formula</td><td className="py-2 px-3">all k</td><td className="py-2 px-3">General formula</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">06</td><td className="py-2 px-3">Shannon AEP / Channel coding</td><td className="py-2 px-3">1</td><td className="py-2 px-3"><em>H</em> / log|𝒜|; <em>C</em></td><td className="py-2 px-3">Shannon (1948)</td></tr>
              <tr className="border-b border-rule"><td className="py-2 px-3">08</td><td className="py-2 px-3">Prime digit bias</td><td className="py-2 px-3">1</td><td className="py-2 px-3">1/2 (base)</td><td className="py-2 px-3">Under revision</td></tr>
              <tr className="border-b-2 border-ink"><td className="py-2 px-3">09 (this)</td><td className="py-2 px-3">DFT (real-valued signals)</td><td className="py-2 px-3">1</td><td className="py-2 px-3">1/2</td><td className="py-2 px-3">Proved (classical + named)</td></tr>
            </tbody>
          </table>
          <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> Constitutional Forcing instances across the nine-paper programme. The DFT result (this paper) adds an instance at depth k=1.</div>
        </div>

        <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
          <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Remark — What Has Been Named</div>
          <p className="text-[0.95rem] leading-relaxed italic">The DFT conjugate symmetry has been known and exploited for sixty years. What this paper adds is the name, the formal framework, and the connection to the broader Constitutional Forcing structure. Naming something is not trivial: it makes the pattern recognisable in new domains and locates the DFT result within a programme that predicts further instances. The constant θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" /> was always there. It is now recognised.</p>
        </div>

        <div className="mt-12 pt-6 border-t border-rule">
          <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
          <ol className="list-none [counter-reset:refs]">
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">J. Cooley and J. Tukey, "An algorithm for the machine calculation of complex Fourier series," <em>Math. Comp.</em> 19 (1965), 297–301.</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Constitutional Forcing," Constitutional Sieve Programme Paper 01 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Khayyam's Triangle," Constitutional Sieve Programme Paper 02 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ramanujan's Dimensional Forcing," Constitutional Sieve Programme Paper 05 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "The Shannon–Wakil Effect," Constitutional Sieve Programme Paper 06 (2026).</li>
            <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. M. Stein and R. Shakarchi, <em>Fourier Analysis: An Introduction</em>. Princeton University Press, 2003.</li>
          </ol>
        </div>
      </>
    )
  }
};

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
            <span className="text-light block text-[0.52rem]">Preprint · Full PDF</span>
            Knowware Preprints → View
          </a>
          {paper.githubUrl && (
            <a href={paper.githubUrl} target="_blank" rel="noreferrer" className="block font-plex-mono text-[0.58rem] tracking-wider uppercase text-accent hover:text-ink border-b border-rule py-1.5 leading-tight hover:text-[0.62rem] transition-all duration-300">
              <span className="text-light block text-[0.52rem]">LaTeX Source</span>
              GitHub → p{paper.id}.tex
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
            <span className="font-plex-mono text-[0.58rem] tracking-[0.15em] uppercase text-light block mb-1">Under revision · November 2026</span>
            This page summarises a version of the paper that is being revised. Statements reproduced from it, including theorems, are not to be read as established results.
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
              <a href="https://preprints.knowware.institute" target="_blank" rel="noreferrer" className="text-accent border-b border-[#ddd] hover:text-ink transition-colors">preprints.knowware.institute</a>
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

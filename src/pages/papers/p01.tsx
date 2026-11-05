import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p01: PaperContent = {
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
};

export default p01;

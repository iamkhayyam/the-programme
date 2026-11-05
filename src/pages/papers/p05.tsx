import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p05: PaperContent = {
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
};

export default p05;

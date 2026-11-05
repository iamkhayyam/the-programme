import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p06: PaperContent = {
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
};

export default p06;

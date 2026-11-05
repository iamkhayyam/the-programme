import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p07: PaperContent = {
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
};

export default p07;

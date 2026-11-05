import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p04: PaperContent = {
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
};

export default p04;

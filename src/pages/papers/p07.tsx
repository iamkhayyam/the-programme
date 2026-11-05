import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p07: PaperContent = {
  id: "07",
  track: "Paper · ARC-CF-P07",
  title: <>Condition W3: Absence of Siegel Zeros for Characters Modulo 3<sup><em>K</em></sup></>,
  authors: "Khayyam Wakil",
  affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
  date: "February 2026 · revised November 2026 · Constitutional Sieve Programme, Paper 07 of 09",
  pdfUrl: `${import.meta.env.BASE_URL}files/p07.pdf`,
  githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p07-condition_w3",
  abstract: (
    <>
      <p className="mb-3">We prove Condition W3: for every primitive Dirichlet character χ modulo <em>q</em> = 3<sup><em>K</em></sup>, the <em>L</em>-function <em>L</em>(<em>s</em>, χ) has no real zero in the region σ &gt; 1 − <em>c</em>/log <em>q</em>, for an absolute, effectively computable constant <em>c</em> &gt; 0. The statement is classical, and its proof takes one line: the group (ℤ/3<sup><em>K</em></sup>ℤ)<sup>×</sup> is cyclic of even order, so the only real non-principal character modulo 3<sup><em>K</em></sup> is the one induced from the character χ<sub>−3</sub> modulo 3; an exceptional zero can only belong to a real character; and <em>L</em>(σ, χ<sub>−3</sub>) &gt; 0 for σ &gt; 0.</p>
      <p>As context we record, with corrections, the arithmetic of ℚ(ω) that the original version used: the base change χ∘N of a character χ modulo 3<sup><em>K</em></sup> takes the value χ(<em>n</em>)<sup>2</sup> on the ideal (<em>n</em>), its conductor is 𝔭<sup>2<em>K</em>−1</sup> for <em>K</em> ≥ 2, and <em>L</em>(<em>s</em>, χ∘N) = <em>L</em>(<em>s</em>, χ)<em>L</em>(<em>s</em>, χχ<sub>−3</sub>). Condition W3 does not make any level of distribution unconditional, and nothing in it is specific to the prime 3.</p>
    </>
  ),
  keywords: "Siegel zeros, exceptional zeros, Dirichlet L-functions, cyclic groups, Hecke characters, Eisenstein integers, cascade moduli",
  msc: "11M20 (primary) · 11R42 · 11R11",
  content: (
    <>
      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Revision note (November 2026)</div>
        <p className="text-[0.95rem] leading-relaxed">The proof through a “Stark–Baker theorem” for CM fields is replaced by the one-line cyclicity argument, and the former Theorem 3.2 is withdrawn: as stated, it would solve the Landau–Siegel zero problem. The lifting identity χ(<em>n</em>) = Ψ<sub>χ</sub>((<em>n</em>)) of the former Proposition 2.5 is withdrawn: the base change χ∘N gives χ(<em>n</em>)<sup>2</sup>, its conductor is 𝔭<sup>2<em>K</em>−1</sup> (not 𝔭<sup>2<em>K</em></sup>) for <em>K</em> ≥ 2, and the norm map onto (ℤ/3<sup><em>K</em></sup>ℤ)<sup>×</sup> has image of index 2. Also withdrawn: the claim that the argument is specific to 3, the statement that 2 splits in ℤ[ω] (it is inert, since −3 ≡ 5 mod 8), the table of “Watt conditions”, the claim that W3 implies θ<sub><em>f</em></sub> ≤ 7/32 with the zero-density estimate quoted with it, and the “unconditional level of distribution <Fraction numerator="5" denominator="8" />”. The case <em>K</em> = 1, the Minkowski bound and the computation of N(1 − ω) are corrected.</p>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Setup and Statement</h2>
      <p className="mb-4">This paper is p07 of a nine-paper programme [1]. The companion paper p04 [2] concerns primes in arithmetic progressions to the moduli <em>q</em> = 3<sup><em>K</em></sup>; there, a level of distribution <Fraction numerator="5" denominator="8" /> for each single modulus 3<sup><em>K</em></sup> is a conjecture, which would go beyond what the Generalised Riemann Hypothesis gives. The name “Condition W3” is kept as a label for the following classical statement. Notation: ω = <em>e</em><sup>2π<em>i</em>/3</sup>, 𝒦 = ℚ(ω) = ℚ(√−3) with ring of integers ℤ[ω], 𝔭 = (1 − ω) the unique prime above 3, and ε = χ<sub>−3</sub> = (−3/·), the non-principal character modulo 3 and the quadratic character of 𝒦/ℚ.</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 1.1 — Condition W3</div>
        <p className="text-[0.95rem] leading-relaxed">Let <em>K</em> ≥ 1 and let χ be a primitive Dirichlet character modulo <em>q</em> = 3<sup><em>K</em></sup>. Then <em>L</em>(<em>s</em>, χ) has no real zero in the region σ &gt; 1 − <em>c</em>/log <em>q</em>, for an absolute, effectively computable constant <em>c</em> &gt; 0.</p>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Proof of Condition W3</h2>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Lemma 2.1 — Real characters modulo 3<sup><em>K</em></sup></div>
        <p className="text-[0.95rem] leading-relaxed">For <em>K</em> ≥ 1, the group (ℤ/3<sup><em>K</em></sup>ℤ)<sup>×</sup> is cyclic of order 2·3<sup><em>K</em>−1</sup>, and there is exactly one real non-principal character modulo 3<sup><em>K</em></sup>, namely the character induced by χ<sub>−3</sub>. Its <em>L</em>-function is <em>L</em>(<em>s</em>, χ<sub>−3</sub>). In particular, for <em>K</em> ≥ 2 every primitive character modulo 3<sup><em>K</em></sup> is complex.</p>
      </div>
      <p className="mb-4">The powers of 2 modulo 9 are 2, 4, 8, 7, 5, 1, so 2 is a primitive root modulo every 3<sup><em>K</em></sup> [3], and the character group of a cyclic group of even order has exactly one element of order 2. <strong>Lemma 2.2</strong> adds that <em>L</em>(σ, χ<sub>−3</sub>) &gt; 0 for every real σ &gt; 0, since <em>L</em>(σ, χ<sub>−3</sub>) = Σ<sub><em>m</em>≥0</sub> ((3<em>m</em>+1)<sup>−σ</sup> − (3<em>m</em>+2)<sup>−σ</sup>) is a series of positive terms; for example <em>L</em>(1, χ<sub>−3</sub>) = π/(3√3) = 0.6045….</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 2.3 — Classical zero-free region [4, Ch. 14]</div>
        <p className="text-[0.95rem] leading-relaxed">There is an absolute, effectively computable constant <em>c</em><sub>0</sub> ∈ (0, 1] such that, for <em>q</em> ≥ 3 and χ a non-principal character modulo <em>q</em>: if χ is not real, <em>L</em>(<em>s</em>, χ) has no zero in the region σ ≥ 1 − <em>c</em><sub>0</sub>/log(<em>q</em>(|<em>t</em>| + 2)); if χ is real, <em>L</em>(<em>s</em>, χ) has at most one zero in this region, and such a zero is real and simple.</p>
      </div>
      <div className="ml-6 mb-6 font-stix text-[0.92rem] leading-relaxed text-mid">
        <div className="font-plex-sans italic text-[0.8rem] text-light mb-1">Proof of Theorem 1.1.</div>
        Take <em>c</em> = <em>c</em><sub>0</sub>/2. Since log(2<em>q</em>) ≤ 2 log <em>q</em>, a real zero β &gt; 1 − <em>c</em>/log <em>q</em> lies in the region of Theorem 2.3 (with <em>t</em> = 0). If <em>K</em> ≥ 2, χ is not real (Lemma 2.1), so Theorem 2.3 excludes β. If <em>K</em> = 1, then χ = χ<sub>−3</sub>, and <em>L</em>(β, χ<sub>−3</sub>) &gt; 0 by Lemma 2.2. <span className="float-right text-[1rem]">□</span>
      </div>
      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Remarks 2.4–2.5 — A slightly stronger statement; nothing here is specific to 3</div>
        <p className="text-[0.95rem] leading-relaxed">The same argument shows that no non-principal character modulo 3<sup><em>K</em></sup>, primitive or not, has a zero in the region of Theorem 2.3 with <em>q</em> = 3<sup><em>K</em></sup>: these moduli have no exceptional zero, so the prime number theorem for arithmetic progressions to them holds in the Siegel–Walfisz range with effectively computable constants [4, Ch. 20]. For every odd prime ℓ, (ℤ/ℓ<sup><em>K</em></sup>ℤ)<sup>×</sup> is also cyclic of even order, so the same argument proves W3 for the moduli ℓ<sup><em>K</em></sup>, with a constant <em>c</em><sub>ℓ</sub> &gt; 0 depending on ℓ; a constant uniform in ℓ would exclude Siegel zeros for real characters of prime conductor, which is an open problem. Nor is ℚ(ω) special: ℚ(√−7), ℚ(√−11), ℚ(√−19), ℚ(√−43), ℚ(√−67) and ℚ(√−163) also have class number 1, and each is ramified at a single prime.</p>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Field ℚ(ω) and Base Change (Context)</h2>
      <p className="mb-4">Sections 3 and 4 of the paper record the arithmetic of 𝒦 = ℚ(ω). It is context only and is not needed for the proof. <strong>Proposition 3.1:</strong> 𝒦 is imaginary quadratic, hence a CM field, with ring of integers ℤ[ω], discriminant −3, class number 1 (the Minkowski bound is (2/π)√3 ≈ 1.10) and unit group μ<sub>6</sub> = {'{'}±1, ±ω, ±ω<sup>2</sup>{'}'}. It is one of the nine imaginary quadratic fields of class number one, by Heegner [5], Baker [6] and Stark [7]; that theorem plays no role here (Remark 3.2). <strong>Proposition 3.3:</strong> (3) = 𝔭<sup>2</sup>, with N(1 − ω) = 1 + 1 + 1 = 3 and 3 = −ω<sup>2</sup>(1 − ω)<sup>2</sup>. <strong>Lemma 3.5:</strong> a prime ℓ ≠ 3 splits in 𝒦 if ℓ ≡ 1 (mod 3) and is inert if ℓ ≡ 2 (mod 3); in particular 2 is inert and ℤ[ω]/(2) ≅ 𝔽<sub>4</sub>.</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 4.1 — Base change of characters modulo 3<sup><em>K</em></sup></div>
        <p className="text-[0.95rem] leading-relaxed">Let χ be a Dirichlet character modulo 3<sup><em>K</em></sup> and put Ψ<sub>χ</sub>(𝔞) = χ(N𝔞). (i) Ψ<sub>χ</sub> is a Hecke character of finite order with modulus 𝔭<sup>2<em>K</em></sup>, and Ψ<sub>χ</sub>((<em>n</em>)) = χ(<em>n</em>)<sup>2</sup> for every <em>n</em> ∈ ℤ. (ii) The image of the norm map (𝒪<sub>𝒦</sub>/𝔭<sup>2<em>K</em></sup>)<sup>×</sup> → (ℤ/3<sup><em>K</em></sup>ℤ)<sup>×</sup> is the subgroup {'{'}<em>n</em> ≡ 1 (mod 3){'}'}, of index 2; hence Ψ<sub>χ</sub> = Ψ<sub>χε</sub>, and χ ↦ Ψ<sub>χ</sub> is two-to-one. (iii) If χ is primitive, Ψ<sub>χ</sub> is trivial when <em>K</em> = 1, and its conductor is 𝔭<sup>2<em>K</em>−1</sup> when <em>K</em> ≥ 2.</p>
      </div>
      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Lemma 4.3 — <em>L</em>-function factorisation</div>
        <p className="text-[0.95rem] leading-relaxed">For every Dirichlet character χ modulo 3<sup><em>K</em></sup>, <em>K</em> ≥ 1, <em>L</em>(<em>s</em>, Ψ<sub>χ</sub>) = <em>L</em>(<em>s</em>, χ)·<em>L</em>(<em>s</em>, χε). For <em>K</em> = 1, χε is principal and the identity reads ζ<sub>𝒦</sub>(<em>s</em>) = ζ(<em>s</em>)<em>L</em>(<em>s</em>, ε) (Remark 4.4).</p>
      </div>
      <p className="mb-4">The conductor in (iii) agrees with the conductor–discriminant formula, 3·3<sup>2<em>K</em>−1</sup> = 3<sup><em>K</em></sup>·3<sup><em>K</em></sup>. Since <em>L</em>(<em>s</em>, Ψ<sub>χ</sub>) is a product of two Dirichlet <em>L</em>-functions modulo 3<sup><em>K</em></sup>, a zero-free region for it is the same statement as one for the pair <em>L</em>(<em>s</em>, χ), <em>L</em>(<em>s</em>, χε): passing to ℚ(ω) adds nothing to the proof (Remark 4.5).</p>

      <div className="my-6 p-4 border border-rule border-l-4 border-light bg-paper-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Withdrawn (Sections 4–6 of the paper)</div>
        <ul className="list-disc pl-5 space-y-1 text-[0.9rem] leading-relaxed">
          <li><strong>The “Stark–Baker theorem”</strong> (former Theorem 3.2): applied to ζ<sub><em>F</em></sub> = ζ·<em>L</em>(<em>s</em>, χ<sub><em>d</em><sub><em>F</em></sub></sub>) for imaginary quadratic <em>F</em> it would solve the open Landau–Siegel problem; Heegner, Baker and Stark proved the class-number-one theorem, which gives no zero-free region.</li>
          <li><strong>The lifting χ(<em>n</em>) = Ψ<sub>χ</sub>((<em>n</em>))</strong> (former Proposition 2.5): impossible for odd χ, since (<em>n</em>) = (−<em>n</em>) forces χ(−1) = 1; the conductor does not “match” (Remark 4.2).</li>
          <li><strong>“Watt conditions” W1–W3</strong> (former Theorem 7.1): Watt's theorem [8] is a <em>t</em>-aspect mean value of |ζ(½ + <em>it</em>)|<sup>4</sup>|Σ<em>a</em><sub><em>m</em></sub><em>m</em><sup>−<em>it</em></sup>|<sup>2</sup> with no such hypotheses.</li>
          <li><strong>W3 ⇒ θ ≤ 7/32:</strong> that bound is the Kim–Sarnak bound [9] towards Selberg's eigenvalue conjecture, a theorem about Maass forms that neither the absence of Siegel zeros nor any zero-density estimate implies.</li>
          <li><strong>“Unconditional level <Fraction numerator="5" denominator="8" />”</strong> (former Corollary 7.2): p04's sum over 3<sup><em>K</em></sup> ≤ <em>x</em><sup>θ</sup> holds for every θ &lt; 1 without W3; the per-modulus level is a conjecture, and a <em>c</em>/log <em>q</em> region gives no saving for <em>q</em> = <em>x</em><sup>θ</sup>, since <em>x</em><sup>1 − <em>c</em>/log <em>q</em></sup> = <em>e</em><sup>−<em>c</em>/θ</sup><em>x</em>.</li>
          <li><strong>“Coherence”</strong> (former Proposition 6.1): the (1 − ω)-adic filtration of ℤ[ω]/(3<sup><em>K</em></sup>) has 2<em>K</em> steps, not three; the Kloosterman bound (3<sup><em>K</em></sup>)<sup>3/8+ε</sup> fails; the conductors do not match.</li>
          <li><strong>“Specific to 3”</strong> (former Proposition 5.1): see Remark 2.5; its proof also had 2 splitting “since −3 ≡ 1 (mod 8)”, but −3 ≡ 5 (mod 8) and 2 is inert.</li>
        </ul>
      </div>

      <div className="mt-12 pt-6 border-t border-rule">
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
        <ol className="list-none [counter-reset:refs]">
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, “Constitutional Forcing,” ARC Institute of Knowware, preprint, 2026.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, “Ternary Forcing on the Hexagonal Lattice: Eisenstein Integers, Cascade Moduli, and a Conjectured Level of Distribution 5/8,” ARC Institute of Knowware, preprint, 2026.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Ireland and M. Rosen, <em>A Classical Introduction to Modern Number Theory</em>, 2nd ed., Graduate Texts in Mathematics 84, Springer, New York, 1990.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">H. Davenport, <em>Multiplicative Number Theory</em>, 3rd ed., revised by H. L. Montgomery, Graduate Texts in Mathematics 74, Springer, New York, 2000.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Heegner, “Diophantische Analysis und Modulfunktionen,” <em>Math. Z.</em> 56 (1952), 227–253.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Baker, “Linear forms in the logarithms of algebraic numbers,” <em>Mathematika</em> 13 (1966), 204–216.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">H. M. Stark, “A complete determination of the complex quadratic fields of class-number one,” <em>Michigan Math. J.</em> 14 (1967), 1–27.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">N. Watt, “Kloosterman sums and a mean value for Dirichlet polynomials,” <em>J. Number Theory</em> 53 (1995), 179–210.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">H. H. Kim, “Functoriality for the exterior square of GL<sub>4</sub> and the symmetric fourth of GL<sub>2</sub>” (with Appendix 2 by H. H. Kim and P. Sarnak), <em>J. Amer. Math. Soc.</em> 16 (2003), 139–183.</li>
        </ol>
      </div>
    </>
  ),
  nextPaper: {
    id: "08",
    title: "08 · The Lemke Oliver–Soundararajan Bias and Ternary Constitutional Structure",
    desc: <>Recomputed transition counts for the first 10<sup>8</sup> and 10<sup>9</sup> primes show that the Hardy–Littlewood heuristic of Lemke Oliver and Soundararajan accounts for the last-digit bias of consecutive primes, and the ternary explanation is withdrawn.</>,
    url: "/papers/p08"
  }
};

export default p07;

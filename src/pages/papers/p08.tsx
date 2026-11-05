import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p08: PaperContent = {
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
};

export default p08;

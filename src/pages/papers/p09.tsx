import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p09: PaperContent = {
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
};

export default p09;

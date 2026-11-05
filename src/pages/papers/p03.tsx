import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p03: PaperContent = {
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
};

export default p03;

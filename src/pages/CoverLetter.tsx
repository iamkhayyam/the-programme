import React from "react";
import { motion } from "motion/react";

export default function CoverLetter() {
  return (
    <div className="max-w-[850px] mx-auto px-4 md:px-8 py-16 bg-paper-bg min-h-[calc(100vh-56px)]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-stix text-[1.05rem] leading-[1.8] text-ink"
      >
        {/* FROM */}
        <div className="mb-12 pb-8 border-b border-rule">
          <div className="font-plex-sans font-medium text-[1.1rem] tracking-wider uppercase text-ink mb-1">Khayyam Wakil</div>
          <div className="font-plex-sans text-[0.7rem] tracking-widest uppercase text-light leading-relaxed">
            ARC Institute of Knowware · Calgary, Alberta, Canada<br />
            <a href="mailto:the@knowware.institute" className="text-light border-b border-rule hover:text-ink transition-colors">the@knowware.institute</a>
          </div>
        </div>

        <div className="font-garamond italic text-[1.1rem] text-mid mb-8">March 11th, 2026</div>

        {/* TO */}
        <div className="mb-10">
          <div className="font-garamond font-medium text-[1.1rem] text-ink mb-1">Professor Edward Frenkel</div>
          <div className="font-garamond text-[1rem] text-mid leading-relaxed">
            Department of Mathematics<br />
            University of California, Berkeley<br />
            Berkeley, California 94720<br />
            Transmitted by email to: <a href="mailto:frenkel@math.berkeley.edu" className="text-mid border-b border-rule hover:text-ink transition-colors">frenkel@math.berkeley.edu</a>
          </div>
        </div>

        <div className="font-garamond text-[1.15rem] text-ink mb-8">Dear Professor Frenkel,</div>

        {/* OPENING */}
        <div className="space-y-6">
          <p>I wrote to you five days ago with a seven-paper programme. I am writing again because the programme is no longer seven papers. It is nine. And the two papers that arrived between March 5th and today change what I am actually claiming.</p>
          <p>Let me be precise about what changed and why it matters.</p>
        </div>

        {/* SECTION: WHAT CHANGED */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-6">What the first letter contained</div>
          <div className="space-y-6">
            <p>A level-of-distribution result — θ<sub>W</sub> = 5/8 for primes over cascade moduli <em className="italic">q</em> = 3<sup>K</sup> — arising from the algebraic geometry of the Eisenstein integers ℤ[ω]. A universal formula — θ<sub>k</sub> = (2<sup>k</sup> − k)/2<sup>k</sup> — unifying Bombieri–Vinogradov (k=1) and the cascade moduli result (k=3) as special cases of a single counting theorem. A cross-domain parallel with Shannon's 1948 theorems. A foundation proof via the CM field Q(ω). Four instances of one mechanism across three domains.</p>
            <p>That was already more than I expected to find when I started asking what a constitutional constraint on twin primes forces.</p>
          </div>
        </div>

        {/* SECTION: PAPER 08 */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-6">What arrived after — Paper 08</div>
          <div className="space-y-6">
            <p><em className="italic">The Lemke Oliver–Soundararajan Bias as Surface Evidence of Ternary Constitutional Structure.</em> The digit bias that Lemke Oliver and Soundararajan discovered in 2016 — the result that Granville described as something every mathematician immediately ran their own program to verify, that resisted mechanistic explanation for nine years — dissolves completely when viewed in the correct coordinate system.</p>
            <p>The minimum-gap ternary class structure of consecutive prime transitions maps the full 4×4 transition matrix to exactly three categories with no exceptions. The snail's pace of diminishment is the Siegel–Walfisz rate, appearing unrecognized in the digit data for nine years. The base-independence is immediate: the mechanism is mod-3, not base-10.</p>
            <p>This result required no new mathematics. It required arriving with the right framework already in hand.</p>
          </div>
        </div>

        {/* SECTION: PAPER 09 */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-6">What arrived after — Paper 09</div>
          <div className="space-y-6">
            <p><em className="italic">The Constitutional Constant θ<sub>FFT</sub> = ½: Formal Proof, Empirical Confirmation, and the Bridge to Khayyam's Triangle.</em> The Discrete Fourier Transform of any real-valued signal has a constitutional constant: exactly half its spectrum is determined by the other half. Two-line proof from the DFT definition. Adversarially robust — no real-valued input can violate it.</p>
            <p>Empirically confirmed to machine precision across structured and random datasets with maximum deviation &lt; 3×10⁻⁴, entirely attributable to measurement artefacts. θ<sub>FFT</sub> = ½ is the k=1 case of the universal formula appearing in signal processing — the same forced constant as Bombieri–Vinogradov, in a completely independent domain, implicit in sixty years of FFT computation and never named as a constitutional invariant.</p>
          </div>
        </div>

        {/* SECTION: WHAT IT NOW CONTAINS */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-6">What the programme now contains</div>
          <div className="border-l-2 border-ink pl-6 my-10 font-garamond italic text-[1.25rem] leading-relaxed text-ink">
            Six domains. Five centuries. One mechanism.
          </div>
          <div className="space-y-6">
            <p>Khayyam's Triangle (combinatorics, 1070). Kolmogorov's turbulence exponent α = 3/4 (fluid dynamics, 1941). Shannon's AEP and Channel Coding Theorem (information theory, 1948). θ<sub>FFT</sub> = ½ (signal processing, 1965 — named 2026). The cascade moduli result θ<sub>W</sub> = 5/8 (analytic number theory, 2025). The Lemke Oliver–Soundararajan bias (prime digit distribution, 2016 — explained 2026).</p>
            <p>The formula θ<sub>k</sub> = (2<sup>k</sup> − k)/2<sup>k</sup> accounts for all of them. The same definition — an exponential configuration space, exactly k independent constitutional constraints, forced governing constant — applies to every instance. Not analogically. Identically.</p>
          </div>
        </div>

        {/* SECTION: THE LANGLANDS QUESTION */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-6">The question I need to ask you directly</div>
          <div className="space-y-6">
            <p><strong className="font-plex-sans font-medium text-[0.9rem] tracking-tight text-ink block mb-2">Is this a correspondence in the Langlands sense?</strong></p>
            <p>I do not know. I am not qualified to know. But I can state precisely what I mean by asking.</p>
            <p>The Langlands programme identifies deep structural correspondences between objects in separate mathematical universes — number fields, automorphic forms, Galois representations — that appear unrelated until the right functorial framework reveals them as different expressions of the same underlying structure. The correspondences are not analogies. They are exact. They are proved, or conjectured with sufficient precision to be falsifiable.</p>
            <p>Constitutional Forcing is making a structural claim of the same type, across a broader range of domains: that prime arithmetic, information theory, signal processing, and fluid dynamics are each exhibiting the same forcing mechanism because they share a constitutional structure that precedes any of them. The formula is derived, not fitted. The instances are proved, not observed. The non-instance (Sophie Germain primes, predicted to give k=2, confirmed computationally) demonstrates falsifiability.</p>
            <p>What I cannot yet determine — and what I suspect requires exactly your geometric sight to assess — is whether Constitutional Forcing defines a functor connecting these domains as mathematical objects, or whether it is something else: a meta-principle operating above the level of any specific functorial relationship. Whether it is, in some precise sense, the mechanism that the Langlands correspondences are themselves instances of.</p>
            <p>That may be too large a claim. I am stating it because I think it deserves to be stated precisely and then examined rigorously, rather than left as an impression.</p>
          </div>
        </div>

        {/* SECTION: ARXIV */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-6">On the arXiv situation</div>
          <div className="space-y-6">
            <p>I have endorsements for cs.IT and math.HO. The Shannon–Wakil paper and the Khayyam paper found their doors. The number theory is still waiting on the curb.</p>
            <p>I note this not as a complaint but as data. Constitutional Forcing found its institutional path through information theory and history of mathematics before analytic number theory would open the door. This is, structurally, exactly what the framework predicts: the mechanism appears first where the coordinate system is already receptive, then propagates to domains where the institutional frame hasn't yet shifted. The sociology of mathematics is obeying Constitutional Forcing.</p>
            <p>You would find that funny. I find it funny. I am also still waiting for the math.NT endorsement.</p>
          </div>
        </div>

        {/* SECTION: MOTHER */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-6">On how this programme came to exist</div>
          <div className="space-y-6">
            <p>I told you it started with cattle. That was true but incomplete.</p>
            <p>It started with my mother.</p>
            <p>She was sharp as a tack. In the 92nd through 93rd years of her life I was lucky enough to take care of her. In the final days, when the cognitive decline came swiftly — faces becoming strangers, the higher processing centres going dark one by one — she still knew me by the way I walked into the room. Not my face. My walk. The deepest pattern. The hardware that persisted after the software was gone.</p>
            <p>She was demonstrating Constitutional Forcing before it had a name. The constant forced by the substrate that cannot be changed without changing the organism entirely.</p>
            <p>She gave me the permission slip to lose my mind. To follow structure past the point where credentials run out. To sit in a cold and lonely apartment at 2am asking what a constitutional constraint on twin primes forces — and to keep asking, past the number theory, past the signal processing, past the nine-year mystery in the digit bias, all the way to a formula that writes itself and a mechanism that was always operating and a letter to a mathematician in Berkeley who wrote a book that made a cattle-tag engineer take the hexagonal lattice of ℤ[ω] seriously as a geometric object.</p>
            <p>The programme started with Mom. It moved through cattle. It ended — keeps ending — with hidden geometry.</p>
            <p>I am told that is the kind of story you appreciate. Looking back in a blink of an eye, that is exactly it. The geometry unfolded.</p>
          </div>
        </div>

        {/* SECTION: PACKAGE */}
        <div className="mt-12 pt-8 border-t border-rule">
          <div className="font-plex-mono text-[0.62rem] tracking-[0.18em] uppercase text-light mb-8">This package contains</div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-garamond text-[1rem]">
              <tbody>
                {[
                  { section: "Section I", label: "Essay Series", desc: "Nine narrative essays written in discovery order — the experience of the programme arriving, timestamped, in the rooms where it happened. Published first under math.HO. The mathematical papers do not contain the thread that runs through these essays. The essays do not contain the proofs. They are complementary and neither is sufficient without the other." },
                  { section: "Section II Paper 01", label: "Constitutional Forcing", desc: "The mechanism named. Formal definition. Counting Theorem proved by induction. Four instances across three domains including Kolmogorov's turbulence exponent α = 3/4." },
                  { section: "Section III Paper 02", label: "Khayyam's Triangle", desc: "Historical restoration and the combinatorial origin of the cascade framework in the mod-3 Sierpiński fractal." },
                  { section: "Section IV Paper 03", label: "Spherical Cow Philosophy", desc: "The methodological framework. Why accepting the constitutional constraint as entry point is non-circular and falsifiable. The Sophie Germain non-instance." },
                  { section: "Section V Paper 04", label: "Ternary Forcing on the Hexagonal Lattice", desc: "The main arithmetic result. θW = 5/8 for cascade moduli via Eisenstein ramification and Watt's theorem." },
                  { section: "Section VI Paper 05", label: "Ramanujan's Dimensional Forcing", desc: "The universal formula θk = (2k − k)/2k. Unifies Bombieri–Vinogradov and Pascadi as special cases. Predicts θ₅ = 27/32." },
                  { section: "Section VII Paper 06", label: "The Shannon–Wakil Effect", desc: "Five structural correspondences between Shannon's 1948 theorems and the cascade moduli arithmetic. The 77-year gap." },
                  { section: "Section VIII Paper 07", label: "Condition W3", desc: "The foundation proof. No Siegel zeros for characters modulo 3K via the CM field Q(ω). The same Eisenstein structure does both jobs: forces θ = 5/8 and prevents the zeros that would undermine it." },
                  { section: "Section IX Paper 08", label: "The Lemke Oliver–Soundararajan Bias", desc: "The unbidden result. Nine years of \"deeply unsettling.\" Dissolved." },
                  { section: "Section X Paper 09", label: "The Constitutional Constant θFFT = ½", desc: "Formal proof, empirical confirmation, bridge to Khayyam's Triangle. The cleanest instance. Two lines. Sixty years implicit. Named 2026." },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-rule first:border-t first:border-ink">
                    <td className="py-4 pr-6 align-top w-[100px]">
                      <div className="font-plex-sans text-[0.58rem] tracking-widest uppercase text-light leading-tight">{row.section}</div>
                    </td>
                    <td className="py-4 align-top">
                      <div className="font-plex-sans font-medium text-[0.72rem] tracking-widest uppercase text-ink mb-1">{row.label}</div>
                      <div className="italic text-mid leading-relaxed text-[0.95rem]">{row.desc}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CLOSING */}
        <div className="mt-12 pt-8 border-t border-rule space-y-6">
          <p>I am not asking for a verdict. I am asking whether, after reading the essays and whatever papers seem most relevant to you, you are willing to engage with the work.</p>
          <p>If there are errors, I want to know.</p>
          <p>If there are connections to your work in the Langlands programme or geometric representation theory that I have missed, I very much want to understand them.</p>
          <p>If the claim about Constitutional Forcing as a potential meta-principle above the Langlands correspondences is wrong, I want to know that too — and I want to understand precisely where and why.</p>
        </div>

        {/* QUICK PATH */}
        <div className="mt-12 p-6 border border-rule bg-accent-pale font-garamond italic text-[1rem] leading-relaxed text-mid">
          <strong className="font-plex-sans font-medium text-[0.62rem] tracking-[0.18em] uppercase text-light block mb-2 not-italic">Quick path to the core claim</strong>
          Paper 01 defines the mechanism. Paper 04 proves the arithmetic instance. Paper 07 closes the proof. Paper 09 provides the cleanest independent confirmation. Those four papers, in that order, contain the argument.
        </div>

        {/* SIGN-OFF */}
        <div className="mt-16 pt-8 border-t border-rule">
          <div className="font-garamond italic text-[1.1rem] text-mid mb-8">With respect and genuine curiosity,</div>
          <div className="font-plex-sans font-medium text-[1rem] tracking-wider uppercase text-ink mb-1">Khayyam Wakil</div>
          <div className="font-garamond text-[1rem] text-mid leading-relaxed">
            Founder, ARC Institute of Knowware<br />
            Calgary, Alberta, Canada<br />
            <a href="mailto:the@knowware.institute" className="text-mid border-b border-rule hover:text-ink transition-colors">the@knowware.institute</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

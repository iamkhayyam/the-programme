import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p08: PaperContent = {
  id: "08",
  track: "Paper · ARC-CF-P08",
  title: "The Lemke Oliver–Soundararajan Bias and Ternary Constitutional Structure",
  authors: "Khayyam Wakil",
  affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
  date: "March 2026 · revised November 2026 · Constitutional Sieve Programme, Paper 08 of 09",
  pdfUrl: `${import.meta.env.BASE_URL}files/p08.pdf`,
  githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p08-prime-bias-ternary-bridge",
  abstract: (
    <>
      <p className="mb-3">In 2016 Lemke Oliver and Soundararajan observed that consecutive primes are biased against repeating their residue modulo <em>q</em>, for instance their last decimal digit. In the same paper they explained the bias by a heuristic built on the Hardy–Littlewood prime <em>k</em>-tuples conjecture, with explicit lower-order terms whose leading part has size log log <em>x</em>/log <em>x</em>. The first version of the present paper proposed a different, “ternary constitutional” mechanism: that the bias is the base-10 projection of the mod 3 constraint on primes, that the <em>p</em> = 3 factor of the singular series vanishes for gaps divisible by 3, and that the slow decay of the bias is the Siegel–Walfisz rate.</p>
      <p className="mb-3">We test these claims against a recomputation of the consecutive-prime transition counts for the first 10<sup>8</sup> and 10<sup>9</sup> primes. All three are false. The local factor at <em>p</em> = 3 is <Fraction numerator="3" denominator="2" />, its maximum, for gaps divisible by 3 and <Fraction numerator="3" denominator="4" /> otherwise; gap 6 is the most common gap; 𝔖(2) is the smallest even-gap singular-series value, not the largest; the last digit of a prime carries no information about its residue mod 3; and the bias is about the same modulo 4 as modulo 3. A simple Hardy–Littlewood model with the correct <em>p</em> = 3 factor reproduces the base-10 transition matrix to 0.85 percentage points (RMS); the factor claimed in the first version gives 5.9 points and largely removes the diagonal suppression.</p>
      <p>We conclude that the Lemke Oliver–Soundararajan explanation accounts for the bias, and that the ternary-constitutional explanation, as originally stated, is not supported. The prime 3 enters only in the ordinary way, through the singular series, which weights gaps divisible by 3 twice as heavily as other gaps.</p>
    </>
  ),
  keywords: "prime digit bias, consecutive primes, Lemke Oliver–Soundararajan, Hardy–Littlewood singular series, mod 3 structure, twin primes, parity barrier",
  msc: "11N05 (primary) · 11N13 · 11A41",
  content: (
    <>
      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Revision note (November 2026)</div>
        <p className="text-[0.95rem] leading-relaxed">The main claim of the first version, that the bias is explained by ternary constitutional structure, is withdrawn, and the title has changed accordingly. The “observed” transition matrix, whose rows for the digits 3, 7 and 9 were wrong, has been replaced by a matrix recomputed for the first 10<sup>8</sup> primes (the range of Lemke Oliver and Soundararajan's table), and all four figures have been removed. The singular-series facts are now stated correctly: the <em>p</em> = 3 factor is 3/2 or 3/4, never zero; 𝔖(2) is the minimum even-gap value; and 𝔖(10) ≈ 1.76. The minimum-gap ternary-class rule, the identification of the “snail's pace” with the Siegel–Walfisz rate, and the base-independence argument are withdrawn because the data refute them. The twin-prime count, the description of the parity barrier, the prime-gap bounds, the Pascadi reference and a misattributed quotation have been corrected, two untraceable quotations removed, and the level <Fraction numerator="5" denominator="8" /> for moduli 3<sup><em>K</em></sup> is now described as a conjecture.</p>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Findings, Recomputed</h2>
      <p className="mb-4">If the last digits of consecutive primes were independent, each of 1, 3, 7, 9 would follow any other about 25% of the time. Lemke Oliver and Soundararajan [1] showed that they do not. Table 1 recomputes the transitions with a segmented sieve, which reproduces the standard values of π(10<sup><em>k</em></sup>) for 6 ≤ <em>k</em> ≤ 10, of <em>p</em><sub>10<sup><em>k</em></sup></sub> for 6 ≤ <em>k</em> ≤ 9, and the twin-prime count π<sub>2</sub>(10<sup>8</sup>) = 440,312; for the first 10<sup>8</sup> primes its row “ends in 1” agrees with the published counts of [1] to within one. The code and raw output are kept with the programme's audit material (<code>audit/scripts/p08</code>).</p>
      <div className="responsive-table-container">
        <table className="responsive-table text-[0.85rem] font-stix">
          <thead>
            <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
              <th className="py-2 px-3 text-left"><em>p</em><sub><em>n</em></sub> → <em>p</em><sub><em>n</em>+1</sub></th>
              <th className="py-2 px-3 text-left">Ends in 1</th>
              <th className="py-2 px-3 text-left">Ends in 3</th>
              <th className="py-2 px-3 text-left">Ends in 7</th>
              <th className="py-2 px-3 text-left">Ends in 9</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-rule"><td colSpan={5} className="py-2 px-3 italic">First 10<sup>8</sup> primes</td></tr>
            <tr className="border-b border-rule"><td data-label="From" className="py-2 px-3">ends in 1</td><td data-label="Ends in 1" className="py-2 px-3">18.49</td><td data-label="Ends in 3" className="py-2 px-3">29.72</td><td data-label="Ends in 7" className="py-2 px-3">30.02</td><td data-label="Ends in 9" className="py-2 px-3">21.77</td></tr>
            <tr className="border-b border-rule"><td data-label="From" className="py-2 px-3">ends in 3</td><td data-label="Ends in 1" className="py-2 px-3">24.04</td><td data-label="Ends in 3" className="py-2 px-3">17.77</td><td data-label="Ends in 7" className="py-2 px-3">28.17</td><td data-label="Ends in 9" className="py-2 px-3">30.01</td></tr>
            <tr className="border-b border-rule"><td data-label="From" className="py-2 px-3">ends in 7</td><td data-label="Ends in 1" className="py-2 px-3">25.50</td><td data-label="Ends in 3" className="py-2 px-3">27.02</td><td data-label="Ends in 7" className="py-2 px-3">17.76</td><td data-label="Ends in 9" className="py-2 px-3">29.73</td></tr>
            <tr className="border-b border-ink"><td data-label="From" className="py-2 px-3">ends in 9</td><td data-label="Ends in 1" className="py-2 px-3">31.97</td><td data-label="Ends in 3" className="py-2 px-3">25.49</td><td data-label="Ends in 7" className="py-2 px-3">24.05</td><td data-label="Ends in 9" className="py-2 px-3">18.49</td></tr>
            <tr className="border-b border-rule"><td colSpan={5} className="py-2 px-3 italic">First 10<sup>9</sup> primes</td></tr>
            <tr className="border-b border-rule"><td data-label="From" className="py-2 px-3">ends in 1</td><td data-label="Ends in 1" className="py-2 px-3">19.00</td><td data-label="Ends in 3" className="py-2 px-3">29.30</td><td data-label="Ends in 7" className="py-2 px-3">29.43</td><td data-label="Ends in 9" className="py-2 px-3">22.28</td></tr>
            <tr className="border-b border-rule"><td data-label="From" className="py-2 px-3">ends in 3</td><td data-label="Ends in 1" className="py-2 px-3">24.25</td><td data-label="Ends in 3" className="py-2 px-3">18.45</td><td data-label="Ends in 7" className="py-2 px-3">27.87</td><td data-label="Ends in 9" className="py-2 px-3">29.43</td></tr>
            <tr className="border-b border-rule"><td data-label="From" className="py-2 px-3">ends in 7</td><td data-label="Ends in 1" className="py-2 px-3">25.44</td><td data-label="Ends in 3" className="py-2 px-3">26.83</td><td data-label="Ends in 7" className="py-2 px-3">18.44</td><td data-label="Ends in 9" className="py-2 px-3">29.30</td></tr>
            <tr className="border-b-2 border-ink"><td data-label="From" className="py-2 px-3">ends in 9</td><td data-label="Ends in 1" className="py-2 px-3">31.31</td><td data-label="Ends in 3" className="py-2 px-3">25.43</td><td data-label="Ends in 7" className="py-2 px-3">24.26</td><td data-label="Ends in 9" className="py-2 px-3">19.00</td></tr>
          </tbody>
        </table>
        <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> Last-digit transitions between consecutive primes: percentage of transitions from a prime <em>p</em><sub><em>n</em></sub> ending in the row digit to a next prime <em>p</em><sub><em>n</em>+1</sub> ending in the column digit, for <em>n</em> ≤ 10<sup>8</sup> (<em>p</em><sub><em>n</em></sub> ≤ 2,038,074,743, the range of the table in [1]) and <em>n</em> ≤ 10<sup>9</sup> (<em>p</em><sub><em>n</em></sub> ≤ 22,801,763,489).</div>
      </div>
      <p className="mb-4">Every diagonal entry is below 25%: consecutive primes avoid repeating their last digit. Among the first 10<sup>8</sup> primes the suppression is strongest for 3 and 7 (17.8%) and weakest for 1 and 9 (18.5%), and 9 → 1 is 1.73 times as frequent as 9 → 9 (1.65 for the first 10<sup>9</sup> primes). The matrix is symmetric under (<em>a</em> → <em>b</em>) ↦ (−<em>b</em> → −<em>a</em>) mod 10 (3 → 1 is 24.04% and 9 → 7 is 24.05%): this is the symmetry <em>n</em> ↦ −<em>n</em>, under which Hardy–Littlewood densities are invariant.</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink border-dashed bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Conjecture — Lemke Oliver and Soundararajan [1]</div>
        <p className="text-[0.95rem] leading-relaxed">Let π(<em>x</em>; <em>q</em>, (<em>a</em>, <em>b</em>)) count the primes <em>p</em><sub><em>n</em></sub> ≤ <em>x</em> with <em>p</em><sub><em>n</em></sub> ≡ <em>a</em> and <em>p</em><sub><em>n</em>+1</sub> ≡ <em>b</em> (mod <em>q</em>). Then π(<em>x</em>; <em>q</em>, (<em>a</em>, <em>b</em>)) = li(<em>x</em>)/φ(<em>q</em>)<sup>2</sup> · (1 + <em>c</em><sub>1</sub>(<em>q</em>; <em>a</em>, <em>b</em>) log log <em>x</em>/log <em>x</em> + <em>c</em><sub>2</sub>(<em>q</em>; <em>a</em>, <em>b</em>)/log <em>x</em> + <em>O</em>((log <em>x</em>)<sup>−7/4</sup>)), with <em>c</em><sub>1</sub> = 1/2 for <em>a</em> ≢ <em>b</em>, <em>c</em><sub>1</sub>(<em>q</em>; <em>a</em>, <em>a</em>) = 1/2 − φ(<em>q</em>)/2, and <em>c</em><sub>2</sub> explicit, computed from the Hardy–Littlewood singular series.</p>
      </div>
      <p className="mb-4">The conjecture rests on the Hardy–Littlewood prime <em>k</em>-tuples conjecture [2] in a uniform form, so it is a heuristic, not a proof; but it is quantitative and fits the data. Its leading correction is negative on the diagonal for every <em>q</em> ≥ 3 (the suppression), depends only on φ(<em>q</em>) (why the effect looks alike for different moduli), and decays like log log <em>x</em>/log <em>x</em>: “at a snail's pace”, in Quanta Magazine's phrase [3]. Nothing in the present paper supplies an alternative to it.</p>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Elementary Mod 3 Facts</h2>
      <p className="mb-4">Every prime <em>p</em> &gt; 3 lies in Constitutional Class I (<em>p</em> ≡ 1 mod 3) or Class II (<em>p</em> ≡ 2 mod 3); the Forbidden Class <em>p</em> ≡ 0 is closed to primes greater than 3 (Definition 3.1).</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.2 — Constitutional Signature (classical)</div>
        <p className="text-[0.95rem] leading-relaxed">Let (<em>p</em>, <em>p</em>+2) be a twin prime pair with <em>p</em> &gt; 3. Then <em>p</em> ≡ 2 (mod 3) and <em>p</em>+2 ≡ 1 (mod 3).</p>
      </div>
      <p className="mb-4">There are 3,424,506 twin prime pairs with <em>p</em> ≤ 10<sup>9</sup>; the 3,424,505 with <em>p</em> &gt; 3 all have <em>p</em> ≡ 2 (mod 3), a check on the computation rather than evidence (Remark 3.3). More generally (Remark 3.4), for an even gap <em>h</em> with 3 ∤ <em>h</em> a pair (<em>p</em>, <em>p</em>+<em>h</em>) with <em>p</em> &gt; 3 is possible for only one class of <em>p</em> mod 3, while for 3 ∣ <em>h</em> both classes are possible: gaps divisible by 3 are <em>less</em> constrained, not forbidden.</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Theorem 3.5 — Ternary Equilibrium (de la Vallée Poussin [4])</div>
        <p className="text-[0.95rem] leading-relaxed">If π<sub>1</sub>(<em>N</em>) and π<sub>2</sub>(<em>N</em>) count the primes <em>p</em> ≤ <em>N</em> with <em>p</em> ≡ 1 and <em>p</em> ≡ 2 (mod 3), then π<sub>1</sub>(<em>N</em>)/π(<em>N</em>) → 1/2 and π<sub>2</sub>(<em>N</em>)/π(<em>N</em>) → 1/2 as <em>N</em> → ∞.</p>
      </div>
      <p className="mb-4">Since gcd(10, 3) = 1, the prime number theorem for progressions modulo 30 makes the last digit of a prime and its class modulo 3 asymptotically independent (Remark 3.6): the last digit is not a projection of the class modulo 3.</p>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Singular Series and the Factor at <em>p</em> = 3</h2>
      <p className="mb-4">For even <em>h</em> &gt; 0 the Hardy–Littlewood conjecture [2] predicts #{'{'}<em>p</em> ≤ <em>x</em> : <em>p</em>, <em>p</em>+<em>h</em> prime{'}'} ∼ 𝔖(<em>h</em>) <em>x</em>/(log <em>x</em>)<sup>2</sup>, with 𝔖(<em>h</em>) = 2<em>C</em><sub>2</sub> ∏<sub><em>p</em> ∣ <em>h</em>, <em>p</em> &gt; 2</sub> (<em>p</em> − 1)/(<em>p</em> − 2) and 2<em>C</em><sub>2</sub> ≈ 1.3203.</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Correct statement — the local factor at <em>p</em> = 3</div>
        <p className="text-[0.95rem] leading-relaxed">𝔖<sub>3</sub>(<em>h</em>) = (1 − ν<sub>3</sub>(<em>h</em>)/3)/(1 − 1/3)<sup>2</sup> equals <Fraction numerator="3" denominator="2" /> if 3 ∣ <em>h</em> and <Fraction numerator="3" denominator="4" /> if 3 ∤ <em>h</em>. It never vanishes; it is <em>largest</em> for gaps divisible by 3, which receive twice the weight of other gaps.</p>
      </div>
      <p className="mb-4">Hence 𝔖(2) = 𝔖(4) = 𝔖(8) ≈ 1.3203, 𝔖(6) = 𝔖(12) ≈ 2.6406, 𝔖(10) ≈ 1.7604, 𝔖(14) ≈ 1.5844 and 𝔖(30) ≈ 3.5209. Since every factor (<em>p</em> − 1)/(<em>p</em> − 2) exceeds 1, 𝔖(2) = 2<em>C</em><sub>2</sub> is the <em>smallest</em> value over even <em>h</em>, attained exactly when <em>h</em> is a power of 2. The data agree: gap 6 is the most common gap between consecutive primes among the first 10<sup>6</sup>, 10<sup>7</sup>, 10<sup>8</sup> and 10<sup>9</sup> primes (105,002,853 occurrences against 58,047,180 for gap 2 among the first 10<sup>9</sup>), and gaps 2 and 4, which have the same singular series, are equally common.</p>
      <div className="responsive-table-container">
        <table className="responsive-table text-[0.85rem] font-stix">
          <thead>
            <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
              <th className="py-2 px-3 text-left"><em>h</em></th>
              <th className="py-2 px-3 text-left"><em>h</em> mod 3</th>
              <th className="py-2 px-3 text-left">Classes of <em>p</em> mod 3</th>
              <th className="py-2 px-3 text-left">𝔖<sub>3</sub>(<em>h</em>)</th>
              <th className="py-2 px-3 text-left">𝔖(<em>h</em>)</th>
              <th className="py-2 px-3 text-left">Consecutive gaps</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-rule"><td data-label="h" className="py-2 px-3">2</td><td data-label="h mod 3" className="py-2 px-3">2</td><td data-label="Classes" className="py-2 px-3">2</td><td data-label="S3(h)" className="py-2 px-3">3/4</td><td data-label="S(h)" className="py-2 px-3">1.3203</td><td data-label="Gaps" className="py-2 px-3">6,497,407</td></tr>
            <tr className="border-b border-rule"><td data-label="h" className="py-2 px-3">4</td><td data-label="h mod 3" className="py-2 px-3">1</td><td data-label="Classes" className="py-2 px-3">1</td><td data-label="S3(h)" className="py-2 px-3">3/4</td><td data-label="S(h)" className="py-2 px-3">1.3203</td><td data-label="Gaps" className="py-2 px-3">6,496,371</td></tr>
            <tr className="border-b border-rule"><td data-label="h" className="py-2 px-3">6</td><td data-label="h mod 3" className="py-2 px-3">0</td><td data-label="Classes" className="py-2 px-3">1, 2</td><td data-label="S3(h)" className="py-2 px-3">3/2</td><td data-label="S(h)" className="py-2 px-3">2.6406</td><td data-label="Gaps" className="py-2 px-3">11,604,547</td></tr>
            <tr className="border-b border-rule"><td data-label="h" className="py-2 px-3">8</td><td data-label="h mod 3" className="py-2 px-3">2</td><td data-label="Classes" className="py-2 px-3">2</td><td data-label="S3(h)" className="py-2 px-3">3/4</td><td data-label="S(h)" className="py-2 px-3">1.3203</td><td data-label="Gaps" className="py-2 px-3">5,157,442</td></tr>
            <tr className="border-b border-rule"><td data-label="h" className="py-2 px-3">10</td><td data-label="h mod 3" className="py-2 px-3">1</td><td data-label="Classes" className="py-2 px-3">1</td><td data-label="S3(h)" className="py-2 px-3">3/4</td><td data-label="S(h)" className="py-2 px-3">1.7604</td><td data-label="Gaps" className="py-2 px-3">6,682,808</td></tr>
            <tr className="border-b-2 border-ink"><td data-label="h" className="py-2 px-3">12</td><td data-label="h mod 3" className="py-2 px-3">0</td><td data-label="Classes" className="py-2 px-3">1, 2</td><td data-label="S3(h)" className="py-2 px-3">3/2</td><td data-label="S(h)" className="py-2 px-3">2.6406</td><td data-label="Gaps" className="py-2 px-3">8,621,685</td></tr>
          </tbody>
        </table>
        <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 3.</strong> Small even gaps: the classes of <em>p</em> mod 3 for which (<em>p</em>, <em>p</em>+<em>h</em>) can be a pair of primes with <em>p</em> &gt; 3, the local factor at <em>p</em> = 3, the singular series, and the number of times <em>h</em> occurs as a gap between consecutive primes among the first 10<sup>8</sup> primes.</div>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">What the Transition Data Show</h2>
      <p className="mb-4"><strong>The minimum-gap ternary class does not determine the effect.</strong> Each transition <em>d</em><sub>1</sub> → <em>d</em><sub>2</sub> has a smallest possible gap (2, 4, 6, 8 or 10). Averaging the entries of Table 1 by that gap gives 30.47% (gap 2), 26.39% (gap 4), 29.02% (gap 6), 23.29% (gap 8) and 18.13% (gap 10). Gaps 2 and 8 have the same class mod 3, yet every gap-8 transition is below 25%; apart from gap 6, which is raised by the factor 3/2, the averages decrease with the gap. Gap-6 transitions are enhanced: 1 → 7 (30.02%) and 3 → 9 (30.01%) are the most frequent in their rows. Gap-2 transitions are not dominated by twin primes: only 27.09% of the 9 → 1 transitions have gap 2, while 38.06% have gap 12.</p>
      <p className="mb-4"><strong>The diagonal suppression is a gap-length effect.</strong> Same-digit gaps are multiples of 10 and receive the extra <em>p</em> = 5 factor 4/3, so the singular series <em>favours</em> the diagonal; same-digit transitions are suppressed because they need a gap of at least 10. This is the negative term <em>c</em><sub>1</sub>(<em>q</em>; <em>a</em>, <em>a</em>) log log <em>x</em>/log <em>x</em>. Modulo 3, where same-class gaps receive the maximal <em>p</em> = 3 factor, a repeated class still occurs only 44.67% of the time among the first 10<sup>8</sup> primes (45.15% for 10<sup>9</sup>), below the uniform 50%.</p>
      <p className="mb-4"><strong>A crude Hardy–Littlewood model.</strong> Take <em>P</em>(<em>d</em><sub>1</sub> → <em>d</em><sub>2</sub>) ∝ Σ<sub><em>h</em> ≡ <em>d</em><sub>2</sub> − <em>d</em><sub>1</sub> (10)</sub> 𝔖′(<em>h</em>) <em>e</em><sup>−<em>h</em>/log <em>x</em></sup>, normalised over each row, where 𝔖′ keeps the local factors at primes <em>p</em> ∤ 10 and <em>x</em> = 2.04 × 10<sup>9</sup> (Table 2 of the paper). With the correct <em>p</em> = 3 factor it reproduces the observed matrix to an RMS error of 0.85 percentage points (largest error 1.7 points, for 1 → 7). With no <em>p</em> = 3 factor the error is 2.36 points, and the diagonal entries are still 19.5%–21.0%; with a factor that vanishes for 3 ∣ <em>h</em> it is 5.94 points.</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Remark 4.1</div>
        <p className="text-[0.95rem] leading-relaxed italic">The model and the Lemke Oliver–Soundararajan conjecture both rest on the Hardy–Littlewood conjecture, and neither is a proof. What the comparison shows is that the prime 3 matters, through its ordinary local factor 3/2 or 3/4. No further “mechanistic layer” beneath the singular series is needed to account for the matrix: the factor at 3 is one local factor among the factors at all primes.</p>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Decay, Other Moduli, Parity and the Programme</h2>
      <p className="mb-4">The imbalance of single primes modulo 3 is far smaller than the digit bias and decays far faster. π(<em>x</em>; 3, 2) − π(<em>x</em>; 3, 1) is 190, 420, 2107 and 6264 at <em>x</em> = 10<sup>7</sup>, 10<sup>8</sup>, 10<sup>9</sup>, 10<sup>10</sup>, of the order √<em>x</em>/log <em>x</em> of Chebyshev's bias [5]; its relative size falls by a factor of about 21 over that range, while the mean diagonal deficit of the base-10 matrix falls only from 8.50 to 6.28 points (factor 1.35) over a comparable one. Modulo 4, a repeated class occurs 45.04% of the time among the first 10<sup>8</sup> primes (45.48% for 10<sup>9</sup>), close to the values modulo 3; both moduli have φ(<em>q</em>) = 2.</p>
      <p className="mb-4">Selberg's parity problem [6] is that classical sieves cannot detect the parity of Ω(<em>n</em>). Zhang [7] proved bounded gaps (7 × 10<sup>7</sup>); Maynard [8] obtained 600, and 12 under the Elliott–Halberstam conjecture; Polymath8b [9] obtained 246 unconditionally and 6 under the generalised Elliott–Halberstam conjecture. The value 246 is set by the Bombieri–Vinogradov level of distribution; it is the parity problem that prevents these methods from going below 6, even under the generalised conjecture, and so from reaching gap 2. The condition <em>p</em> ≡ 2 (mod 3) for twin primes is a local condition that every sieve, and the singular series, already take into account.</p>
      <p className="mb-4">In the programme, the level of distribution θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> for moduli 3<sup><em>K</em></sup> is a conjecture (p04 [10]); for each individual modulus it would go beyond what the generalised Riemann hypothesis gives. The 5/8 in Pascadi's work [11] concerns smooth numbers and primes with triply-well-factorable weights for general moduli, not moduli 3<sup><em>K</em></sup>; the agreement is a coincidence. The digit bias needs nothing from the programme.</p>

      <div className="my-6 p-4 border border-rule border-l-4 border-light bg-paper-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Withdrawn claims of the first version</div>
        <ul className="list-disc pl-5 space-y-1 text-[0.9rem] leading-relaxed">
          <li><strong>The ternary-constitutional explanation:</strong> not supported by the data; the Lemke Oliver–Soundararajan explanation accounts for the bias.</li>
          <li><strong>The printed transition matrix:</strong> rows 3, 7 and 9 were wrong by up to 14 points (3 → 1 given as 38%, against 24.04%) and violated the <em>n</em> ↦ −<em>n</em> symmetry.</li>
          <li><strong>A <em>p</em> = 3 factor of 0 for 3 ∣ <em>h</em> and 1/2 otherwise:</strong> the formula inverted the role of χ<sub>3</sub> and used the wrong normalisation; the factor is 3/2 or 3/4.</li>
          <li><strong>“𝔖(2) is the largest, 𝔖(10) &lt; 1”:</strong> 𝔖(2) is the smallest even-gap value and 𝔖(10) ≈ 1.76.</li>
          <li><strong>The minimum-gap ternary-class rule</strong> (gap 2 “twin signature”, gap 6 “redistribution”): refuted by gap 2 against gap 8 and gap 4 against gap 10.</li>
          <li><strong>“Snail's pace = Siegel–Walfisz rate”:</strong> the bias concerns pairs, an <em>O</em>-bound is not a rate, and exp(−<em>c</em>√log <em>N</em>) decays faster than log log <em>N</em>/log <em>N</em>.</li>
          <li><strong>Base-independence through mod-3 arithmetic:</strong> when gcd(<em>b</em>, 3) = 1 the last digit in base <em>b</em> carries no information about the class mod 3.</li>
          <li><strong>“Gap 2 is the only even gap avoiding the Forbidden class”:</strong> the table fixed <em>p</em> ≡ 2; for <em>p</em> ≡ 1 the pair (<em>p</em>, <em>p</em>+4) avoids it.</li>
          <li><strong>Digit bias and cascade-moduli level as “projections of the same underlying structure”.</strong></li>
        </ul>
      </div>

      <div className="mt-12 pt-6 border-t border-rule">
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
        <ol className="list-none [counter-reset:refs]">
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">R. J. Lemke Oliver and K. Soundararajan, “Unexpected biases in the distribution of consecutive primes,” <em>Proc. Natl. Acad. Sci. USA</em> 113(31) (2016), E4446–E4454. arXiv:1603.03720.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">G. H. Hardy and J. E. Littlewood, “Some problems of ‘Partitio numerorum’; III: on the expression of a number as a sum of primes,” <em>Acta Math.</em> 44 (1923), 1–70.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. Klarreich, “Mathematicians discover prime conspiracy,” <em>Quanta Magazine</em>, 13 March 2016.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">C.-J. de la Vallée Poussin, “Recherches analytiques sur la théorie des nombres premiers,” <em>Ann. Soc. Sci. Bruxelles</em> 20 (1896).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">M. Rubinstein and P. Sarnak, “Chebyshev's bias,” <em>Experiment. Math.</em> 3(3) (1994), 173–197.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Selberg, “On elementary methods in prime number theory and their limitations,” in <em>Den 11te Skandinaviske Matematikerkongress, Trondheim, 1949</em>, Johan Grundt Tanums Forlag, Oslo, 1952.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">Y. Zhang, “Bounded gaps between primes,” <em>Ann. of Math.</em> 179(3) (2014), 1121–1174.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">J. Maynard, “Small gaps between primes,” <em>Ann. of Math.</em> 181(1) (2015), 383–413.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes,” <em>Res. Math. Sci.</em> 1 (2014), Art. 12.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, “Ternary Forcing on the Hexagonal Lattice: Eisenstein Integers, Cascade Moduli, and a Conjectured Level of Distribution 5/8,” ARC Institute of Knowware, preprint, 2026.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. Pascadi, “On the exponents of distribution of primes and smooth numbers,” arXiv:2505.00653 (2025).</li>
        </ol>
      </div>
    </>
  ),
  nextPaper: {
    id: "09",
    title: <>09 · The Constitutional Constant θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" />: Conjugate Symmetry of the Real Discrete Fourier Transform</>,
    desc: <>The classical Hermitian symmetry of the real DFT: the spectrum of a real signal of length <em>N</em> has exactly <em>N</em> independent real parameters out of 2<em>N</em>, which gives θ<sub>FFT</sub> = <Fraction numerator="1" denominator="2" /> and no compression relative to the input.</>,
    url: "/papers/p09"
  }
};

export default p08;

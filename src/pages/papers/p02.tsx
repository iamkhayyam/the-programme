import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p02: PaperContent = {
  id: "02",
  track: "Paper · ARC-CF-P02",
  title: "Khayyam's Triangle: Historical Restoration and the Geometry Hidden in the Numbers",
  authors: "Khayyam Wakil",
  affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
  date: "January 2026 · revised November 2026 · Constitutional Sieve Programme, Paper 02 of 09",
  pdfUrl: `${import.meta.env.BASE_URL}files/p02.pdf`,
  githubUrl: "https://github.com/iamkhayyam/the-programme/tree/main/papers/p02-khayyams-triangle",
  abstract: (
    <>
      <p className="mb-3">The triangular array of binomial coefficients has been called "Pascal's Triangle" in the West for centuries — yet it was known in India, in the Islamic world and in China long before Pascal's <em>Traité</em> of 1654. In Iran it carries the name of the Persian mathematician Omar Khayyam, whose work on the extraction of roots, written before about 1070 and now lost, is the basis for associating the triangle with him; he was not its first discoverer. We review this history and correct the popular account where it goes wrong. We then argue that a further consideration favours Khayyam's name: the triangle's most striking structural property is <em>geometric</em>. Reduce the triangle's entries modulo any prime <em>p</em> and a Sierpiński-type fractal emerges — a self-similar geometric structure far from the probabilistic questions Pascal put to the triangle, and of the kind of hidden geometry that runs through Khayyam's work. For <em>p</em> = 3 its Hausdorff dimension is log 6/log 3 ≈ 1.631.</p>
      <p>This paper is the second in a nine-paper program on constitutional sieve theory. The fractal motivates the program's interest in the prime 3, but it does not supply its arithmetic: nothing in the fractal singles out the prime 3, and the program's central arithmetic claim, a level of distribution <em>θ<sub>W</sub></em> = <Fraction numerator="5" denominator="8" /> for the moduli 3<sup><em>K</em></sup>, is a conjecture. This paper makes the historical and mathematical case for the name, and shows you the fractal.</p>
    </>
  ),
  keywords: "Pascal's triangle, Khayyam's triangle, Sierpiński fractal, Lucas's theorem, modular arithmetic, history of mathematics, cascade moduli, constitutional sieve theory",
  msc: "01A30 · 11B65 · 28A80 · 11N35",
  content: (
    <>
      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Revision note — November 2026</div>
        <p className="text-[0.95rem] leading-relaxed">The Hausdorff dimension of the mod-<em>p</em> fractal is corrected to log(<em>p</em>(<em>p</em>+1)/2)/log <em>p</em>, which is log 6/log 3 ≈ 1.631 for <em>p</em> = 3 (larger, not smaller, than the mod-2 value), with six, not three, self-similar copies at each scale. The claim that the mod-3 void pattern matches the count of "<em>k</em> invalid configurations out of 2<sup><em>k</em></sup>" is false and has been withdrawn, as has the claim that the fractal explains why the prime 3 is singled out. Companion results are cited with their revised status: θ<sub>W</sub> = 5/8 is a conjecture and the counting formula is a postulate. The history is corrected: Khayyam's treatment of the binomial expansion is lost, his surviving algebra does not contain the triangle, and earlier sources are listed; the date of Apianus (1527), the gaps to Pascal and the al-Ṭūsī citation are fixed. The 11-decimal solar-year figure, a modern reconstruction of doubtful authenticity, is no longer presented as Khayyam's, and the claim that the fractal went unnoticed for three centuries is replaced by its nineteenth-century history.</p>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Whose Name?</h2>
      <p className="mb-4">Colour every entry of the triangle that is <em>not</em> divisible by 3 and leave the rest blank. Row after row, what emerges is not a triangle but a fractal — an infinite, self-similar geometric object (Figure 1). This is not a recent discovery: the arithmetic behind it was worked out in the nineteenth century [3, 4], and the picture is well documented [6, 7]. The question asked here is a different one: does this fractal belong to Pascal's mathematical world, or to someone else's? The paper argues that it belongs to Omar Khayyam's — while stressing that Khayyam was not the first to know the triangle, and that his own account of it is lost.</p>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Centuries Before Pascal</h2>
      <div className="responsive-table-container">
        <table className="responsive-table text-[0.85rem] font-stix">
          <thead>
            <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
              <th className="py-2 px-3 text-left">Date</th>
              <th className="py-2 px-3 text-left">Source</th>
              <th className="py-2 px-3 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-rule"><td className="py-2 px-3">10th c.</td><td className="py-2 px-3">Halāyudha, on Piṅgala's <em>meru-prastāra</em></td><td className="py-2 px-3">India</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">c. 1000</td><td className="py-2 px-3">al-Karajī (reported by al-Samawʾal, 1144)</td><td className="py-2 px-3">Baghdad</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">c. 1050</td><td className="py-2 px-3">Jia Xian (reported by Yang Hui)</td><td className="py-2 px-3">China</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">before c. 1070</td><td className="py-2 px-3">Omar Khayyam (lost work on roots)</td><td className="py-2 px-3">Persia</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">13th c.</td><td className="py-2 px-3">Jordanus de Nemore</td><td className="py-2 px-3">Europe</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1261</td><td className="py-2 px-3">Yang Hui</td><td className="py-2 px-3">China</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1265</td><td className="py-2 px-3">al-Ṭūsī, <em>Jawāmiʿ al-ḥisāb</em></td><td className="py-2 px-3">Persia</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1303</td><td className="py-2 px-3">Zhu Shijie</td><td className="py-2 px-3">China</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1356</td><td className="py-2 px-3">Narayana Pandita</td><td className="py-2 px-3">India</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1527</td><td className="py-2 px-3">Petrus Apianus</td><td className="py-2 px-3">Germany</td></tr>
            <tr className="border-b-2 border-ink"><td className="py-2 px-3">1654</td><td className="py-2 px-3">Blaise Pascal [2]</td><td className="py-2 px-3">France</td></tr>
          </tbody>
        </table>
        <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> Some appearances of the triangle before Pascal; see [8] for a full account.</div>
      </div>
      <p className="mb-4">Khayyam's own treatment of the triangle does not survive. His algebra treatise, the <em>Risāla fī'l-barāhīn ʿalā masāʾil al-jabr wa'l-muqābala</em> [1, 9], written c. 1070 in Samarkand, classifies the cubic equations and solves them with conic sections; it does not contain the triangle. In it Khayyam mentions an earlier work of his own on finding roots of higher order, which presumably used the binomial coefficients and is lost. The association of the triangle with Khayyam rests on this reference and on the later tradition that carries his name in Iran. Others were earlier — al-Karajī, Jia Xian and the Indian prosodists — and Pascal's <em>Traité</em>, printed in 1654, came some 584 years after Khayyam's algebra, 127 years after Apianus, and last of all the entries in Table 1. Since Khayyam was not first, priority alone would favour other names; the paper's case for his rests also on the character of his mathematics.</p>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Two Ways of Seeing a Triangle</h2>
      <p className="mb-4">Pascal's <em>Traité</em> applies the triangle to, among other things, the <em>problème des partis</em> — dividing the stakes fairly when a game of chance is interrupted — and asks <em>how many</em> outcomes are possible [2]. Khayyam's central achievement was solving cubic equations <em>geometrically</em>, by intersecting conic sections [1, 9]: he asked what <em>shape</em> a relationship took. From about 1074 he worked at the Isfahan observatory on the calendar reform that produced the Jalali calendar of 1079. The year length his group adopted is not, as far as the paper can determine, preserved in a reliable primary source: the often-quoted 365.24219858156 days equals 365 + 683/2820 to every printed digit — the mean year of a 2820-year intercalation cycle proposed in the twentieth century — and is very likely a modern back-calculation rather than Khayyam's value [10].</p>
      <p className="mb-4">The paper reads Khayyam's work as a method — find the hidden geometry, ask what structure the observations encode — and argues that the same instinct suits the question "what shape is hiding in the triangle?" There is no evidence that Khayyam studied the triangle modulo a prime; the point concerns the kind of question, not a discovery he made.</p>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Fractal Inside the Triangle</h2>
      <p className="mb-4">Replace every entry by its remainder modulo 3. The first 3<sup><em>m</em></sup> rows contain six copies of the first 3<sup><em>m</em>−1</sup> rows — one in the top band of 3<sup><em>m</em>−1</sup> rows, two in the middle band, three in the bottom band — separated by voids, and the self-similarity continues without bound. (The copies agree with the original in which entries vanish; in one of them the nonzero residues are multiplied by 2.) This is an exact fact, established by Lucas's theorem [3].</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Lemma 4.1 — Lucas [3]</div>
        <p className="text-[0.95rem] leading-relaxed">Write <em>n</em> = ∑<sub><em>i</em></sub> <em>n<sub>i</sub></em><em>p</em><sup><em>i</em></sup> and <em>k</em> = ∑<sub><em>i</em></sub> <em>k<sub>i</sub></em><em>p</em><sup><em>i</em></sup> in base <em>p</em>. Then <em>C</em>(<em>n</em>, <em>k</em>) ≡ ∏<sub><em>i</em></sub> <em>C</em>(<em>n<sub>i</sub></em>, <em>k<sub>i</sub></em>) (mod <em>p</em>). In particular, <em>C</em>(<em>n</em>, <em>k</em>) ≢ 0 (mod <em>p</em>) if and only if <em>k<sub>i</sub></em> ≤ <em>n<sub>i</sub></em> for all <em>i</em>.</p>
      </div>
      <p className="mb-4">The product vanishes the moment any base-<em>p</em> digit of <em>k</em> exceeds the corresponding digit of <em>n</em>, and exactly those positions are the voids. By Lemma 4.1, row <em>n</em> has ∏<sub><em>i</em></sub>(<em>n<sub>i</sub></em> + 1) entries not divisible by <em>p</em> [5], and summing over the rows <em>n</em> &lt; <em>p</em><sup><em>m</em></sup> gives (1 + 2 + ⋯ + <em>p</em>)<sup><em>m</em></sup> = (<em>p</em>(<em>p</em>+1)/2)<sup><em>m</em></sup>.</p>
      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 4.2 [6, 7]</div>
        <p className="text-[0.95rem] leading-relaxed">For any prime <em>p</em>, the entries of the triangle not divisible by <em>p</em> form a Sierpiński-type fractal, self-similar at scales <em>p</em><sup><em>m</em></sup>: the first <em>p</em><sup><em>m</em></sup> rows contain <em>p</em>(<em>p</em>+1)/2 copies of the pattern of the first <em>p</em><sup><em>m</em>−1</sup> rows, and (<em>p</em>(<em>p</em>+1)/2)<sup><em>m</em></sup> entries not divisible by <em>p</em> in all. Rescaled to a triangle of fixed size, the pattern converges to a self-similar set of Hausdorff dimension <em>d</em> = log(<em>p</em>(<em>p</em>+1)/2)/log <em>p</em>. For <em>p</em> = 3 this gives <em>d</em> = log 6/log 3 ≈ 1.631.</p>
      </div>
      <p className="mb-4">The value log 3/log 2 ≈ 1.585 is the dimension of the binary (<em>p</em> = 2) Sierpiński gasket, the case <em>p</em> = 2 of the formula. The mod-3 fractal has the larger dimension, and the dimension increases with <em>p</em> towards 2 (about 1.683 for <em>p</em> = 5 and 1.712 for <em>p</em> = 7); these are distinct fractals (Remark 4.3).</p>

      <div className="mt-8 mb-8">
        <img
          src={`${import.meta.env.BASE_URL}khayyam_sierpinski_academic.png`}
          alt="Khayyam's Triangle in raw form and reduced modulo 2 and modulo 3, with Lucas's theorem and the self-similar mod-3 pattern"
          className="w-full h-auto border border-rule shadow-sm"
          referrerPolicy="no-referrer"
        />
        <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid">
          <strong>Figure 1.</strong> From counting numbers to hidden geometry. Top: the triangle (12 rows), reduced modulo 2 (64 rows; dimension log 3/log 2 ≈ 1.585) and modulo 3 (64 rows; residues 1 and 2 survive, multiples of 3 are void; dimension log 6/log 3 ≈ 1.631). Bottom: the first 27 rows, which contain six self-similar copies of the first 9 rows; the mechanism of Lucas's theorem; 128 rows. Errors printed in the image: the inset "d = log 4/log 3 ≈ 1.585" should read d = log 6/log 3 ≈ 1.631; the bottom-left legend "Three self-similar copies" should read six; and in the mod-2 panel the odd entries are plotted in dark blue, not gold.
        </div>
      </div>

      <h3 className="font-stix font-semibold italic text-[0.92rem] text-mid mt-6 mb-2">4.1 Connection to the companion papers</h3>
      <p className="mb-4">The fractal motivated the companion papers' interest in the prime 3; it does not supply their arithmetic. Its void pattern does not match a count of "<em>k</em> invalid configurations out of 2<sup><em>k</em></sup>": in the first 3<sup><em>K</em></sup> rows there are 6<sup><em>K</em></sup> nonzero and 3<sup><em>K</em></sup>(3<sup><em>K</em></sup>+1)/2 − 6<sup><em>K</em></sup> zero entries modulo 3 (0, 9, 162 and 2025 zero entries for <em>K</em> = 1, 2, 3, 4). The survivor density 1, <Fraction numerator="4" denominator="5" />, <Fraction numerator="4" denominator="7" />, <Fraction numerator="16" denominator="41" />, <Fraction numerator="16" denominator="61" />, … tends to 0, whereas (2<sup><em>K</em></sup> − <em>K</em>)/2<sup><em>K</em></sup> tends to 1, and no statistic of the triangle equals 2<sup><em>K</em></sup> − <em>K</em>. Nor does anything in Proposition 4.2 single out the prime 3: Lucas's theorem and the dimension formula hold uniformly for every prime. The companion papers single out 3 because it is the only prime that ramifies in ℤ[ω], a property of the field ℚ(√−3), not of the fractal — and every prime ramifies in some quadratic field. The companion results, with their current status:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>The formula θ<sub><em>k</em></sub> = (2<sup><em>k</em></sup> − <em>k</em>)/2<sup><em>k</em></sup> is a postulate, not a theorem [11, 12]: if a configuration counts as invalid whenever some constraint fails, there are 2<sup><em>k</em></sup> − 1 invalid configurations, not <em>k</em>.</li>
        <li>The level of distribution θ<sub>W</sub> = <Fraction numerator="5" denominator="8" /> for the moduli <em>q</em> = 3<sup><em>K</em></sup> is a conjecture [13]. The summed form of the statement holds for every fixed exponent below 1, so it carries no information about <Fraction numerator="5" denominator="8" />; the per-modulus form would go beyond what the Generalised Riemann Hypothesis gives.</li>
        <li>Condition W3, the absence of exceptional zeros for characters modulo 3<sup><em>K</em></sup>, is true, with a one-line proof [14]: (ℤ/3<sup><em>K</em></sup>ℤ)<sup>×</sup> is cyclic of even order, so the only real non-principal character modulo 3<sup><em>K</em></sup> is induced from χ<sub>−3</sub> modulo 3; an exceptional zero can only belong to a real character, so it would be a zero of <em>L</em>(<em>s</em>, χ<sub>−3</sub>), which is positive on (0, 1].</li>
        <li>An analogy between this arithmetic and information theory is explored in [15].</li>
      </ul>

      <h3 className="font-stix font-semibold italic text-[0.92rem] text-mid mt-6 mb-2">4.2 When the fractal was noticed</h3>
      <p className="mb-4">The arithmetic behind the fractal is a nineteenth-century achievement: Kummer determined in 1852 the exact power of a prime dividing <em>C</em>(<em>n</em>, <em>k</em>) [4], Lucas proved Lemma 4.1 in 1878 [3], Fine counted the entries of each row not divisible by <em>p</em> in 1947 [5], and Wolfram treated the geometry of binomial coefficients modulo <em>p</em>, including its fractal dimension, in 1984 [6]. About two centuries passed after Pascal's <em>Traité</em> before the arithmetic of the pattern was understood. What revealed it was a question about the arithmetic of the entries — which of them a given prime divides — rather than the value of any single entry. The paper reads that as a question about structure, and as the kind of question Khayyam asked.</p>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Case, Stated Plainly</h2>
      <p className="mb-4"><strong>First</strong>, the triangle was known centuries before Pascal, in India, the Islamic world and China. Khayyam's own treatment is lost and he was not first — on priority alone al-Karajī, Jia Xian or the Indian prosodists would have the stronger claim — but Iran already uses his name and China uses Yang Hui's, so the correction extends an existing usage. <strong>Second</strong>, the triangle's most striking structural property is the self-similar fractal revealed by modular reduction, which the paper argues is best seen through a geometric, structure-seeking lens closer to Khayyam's than to Pascal's combinatorial use of the triangle (historically, its arithmetic was worked out by Kummer, Lucas, Glaisher and Fine, not by either man). <strong>Third</strong>, a name frames the questions one asks. The paper proposes that the standard Western designation go forward as Khayyam's Triangle, with a note acknowledging Pascal's work and the earlier history: a proposal about a name, not a claim of priority.</p>

      <div className="mt-12 pt-6 border-t border-rule">
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
        <ol className="list-none [counter-reset:refs]">
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">O. Khayyam, <em>Risāla fī'l-barāhīn ʿalā masāʾil al-jabr wa'l-muqābala</em> (Treatise on the demonstration of problems of algebra), Samarkand, c. 1070 CE; edition and translation in [9].</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">B. Pascal, <em>Traité du triangle arithmétique</em>, G. Desprez, Paris, 1665 (printed 1654).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">É. Lucas, "Théorie des fonctions numériques simplement périodiques," <em>Amer. J. Math.</em> 1 (1878), 184–196, 197–240, 289–321.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. E. Kummer, "Über die Ergänzungssätze zu den allgemeinen Reciprocitätsgesetzen," <em>J. Reine Angew. Math.</em> 44 (1852), 93–146.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">N. J. Fine, "Binomial coefficients modulo a prime," <em>Amer. Math. Monthly</em> 54 (1947), 589–592.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">S. Wolfram, "Geometry of binomial coefficients," <em>Amer. Math. Monthly</em> 91 (1984), 566–571.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. M. Reiter, "Determining the dimension of fractals generated by Pascal's triangle," <em>Fibonacci Quart.</em> 31(2) (1993), 112–120.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">A. W. F. Edwards, <em>Pascal's Arithmetical Triangle</em>, Charles Griffin, London, 1987; reprinted Johns Hopkins University Press, Baltimore, 2002.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">R. Rashed and B. Vahabzadeh, <em>Omar Khayyām the Mathematician</em>, Bibliotheca Persica Press, New York, 2000.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">M. Heydari-Malayeri, "A concise review of the Iranian calendar," arXiv:astro-ph/0409620 (2004).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, <em>Constitutional Forcing</em>, ARC Institute of Knowware, preprint (2026).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, <em>Ramanujan's Dimensional Forcing: A Universal Formula for Sieve Levels</em>, ARC Institute of Knowware, preprint (2026).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, <em>Ternary Forcing on the Hexagonal Lattice: Eisenstein Integers, Cascade Moduli, and a Conjectured Level of Distribution 5/8</em>, ARC Institute of Knowware, preprint (2026).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, <em>Condition W3: Absence of Siegel Zeros for Characters Modulo 3<sup>K</sup></em>, ARC Institute of Knowware, preprint (2026).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, <em>The Shannon–Wakil Effect: Constitutional Forcing as a Universal Pattern in Information Theory and Prime Arithmetic</em>, ARC Institute of Knowware, preprint (2026).</li>
        </ol>
      </div>
    </>
  ),
  nextPaper: {
    id: "03",
    title: "03 · Spherical Cow Philosophy: A Methodological Framework for Mathematical Discovery",
    desc: <>A methodology that takes a proved structural fact — here <em>p</em> ≡ 2 (mod 3) for twin primes <em>p</em> &gt; 3 — as the entry point to a hard problem, and uses the programme's twin-prime case study to show that a consequence depending on a further choice is a hypothesis, not a forced consequence.</>,
    url: "/papers/p03"
  }
};

export default p02;

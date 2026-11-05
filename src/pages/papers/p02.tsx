import { Link } from "react-router-dom";
import { Fraction } from "../../components/Fraction";
import type { PaperContent } from "./types";

const p02: PaperContent = {
  id: "02",
  track: "Paper · ARC-CF-P02",
  title: "Khayyam's Triangle",
  authors: "Khayyam Wakil",
  affiliation: "The ARC Institute of Knowware, Calgary, Alberta, Canada",
  date: "Submitted January 2026 · Constitutional Sieve Programme, Paper 02 of 09",
  pdfUrl: "https://preprint.knowware.institute/pdf/p02.pdf",
  githubUrl: "https://github.com/knowware-institute/p02",
  abstract: (
    <>
      <p className="mb-3">The triangular array of binomial coefficients has been called "Pascal's Triangle" in the West for centuries — yet Pascal arrived 584 years after the Persian mathematician Omar Khayyam described it. That alone might justify a rename. But there is a stronger argument hiding in plain sight: the triangle's deepest structural property is <em>geometric</em>, not combinatorial, and it belongs by mathematical character to Khayyam's tradition rather than Pascal's. Reduce the triangle's entries modulo any prime <em>p</em> and a Sierpiński-type fractal emerges — a self-similar geometric structure invisible to Pascal's probabilistic eye, but exactly the kind of hidden geometry Khayyam spent his life finding.</p>
      <p>This paper is the second in the nine-paper Constitutional Sieve Programme. The mod-3 fractal structure of Khayyam's Triangle, governed by Lucas's theorem, is the direct combinatorial ancestor of the cascade moduli framework and the level-of-distribution result <em>θ<sub>W</sub></em> = <Fraction numerator="5" denominator="8" /> claimed in the companion papers. A reader wishing to understand why the prime 3 plays a privileged role in that arithmetic programme will find the answer here.</p>
    </>
  ),
  keywords: "Pascal's triangle, Khayyam's triangle, Sierpiński fractal, Lucas's theorem, modular arithmetic, history of mathematics, cascade moduli, constitutional sieve theory",
  msc: "01A30 · 11B65 · 28A80 · 11N35",
  content: (
    <>
      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">The Wrong Man's Name</h2>
      <p className="mb-4">Here is a simple question nobody seems to have asked. You know the triangular array of binomial coefficients — the one where each entry is the sum of the two above it, the one that encodes combinations, gives you Pascal's Rule, and sits in every combinatorics textbook. You call it Pascal's Triangle. But what does its deepest structural property look like, and whose mathematical instincts would have found it?</p>
      <p className="mb-4">Colour every entry that is <em>not</em> divisible by 3 and leave the rest blank. Do this for row after row, hundreds of rows deep. What emerges is not a triangle. It is a fractal — an infinite, self-similar geometric object that replicates itself at every scale. This is not a recent discovery. What is curious is that nobody has used it to ask the obvious question: does this fractal belong to Pascal's mathematical world, or to someone else's? The answer is someone else's. His name was Omar Khayyam.</p>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">584 Years Earlier</h2>
      <div className="responsive-table-container">
        <table className="responsive-table text-[0.85rem] font-stix">
          <thead>
            <tr className="font-plex-sans font-medium text-[0.7rem] uppercase tracking-wider border-y-2 border-ink">
              <th className="py-2 px-3 text-left">Year</th>
              <th className="py-2 px-3 text-left">Mathematician</th>
              <th className="py-2 px-3 text-left">Location</th>
              <th className="py-2 px-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-rule"><td className="py-2 px-3">~1070</td><td className="py-2 px-3">Omar Khayyam</td><td className="py-2 px-3">Persia</td><td className="py-2 px-3">Treatment now lost; cited by al-Ṭūsī, 1265</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1261</td><td className="py-2 px-3">Yang Hui</td><td className="py-2 px-3">China</td><td className="py-2 px-3">Independent discovery</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1265</td><td className="py-2 px-3">al-Ṭūsī</td><td className="py-2 px-3">Persia</td><td className="py-2 px-3">Explicitly cites Khayyam</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1303</td><td className="py-2 px-3">Zhu Shijie</td><td className="py-2 px-3">China</td><td className="py-2 px-3">Includes diagram</td></tr>
            <tr className="border-b border-rule"><td className="py-2 px-3">1527</td><td className="py-2 px-3">Petrus Apianus</td><td className="py-2 px-3">Europe</td><td className="py-2 px-3">127 years before Pascal</td></tr>
            <tr className="border-b-2 border-ink"><td className="py-2 px-3">1654</td><td className="py-2 px-3">Blaise Pascal</td><td className="py-2 px-3">France</td><td className="py-2 px-3"><em>Traité du triangle arithmétique</em></td></tr>
          </tbody>
        </table>
        <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid"><strong>Table 1.</strong> The triangle before Pascal. He came last.</div>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Two Ways of Seeing a Triangle</h2>
      <p className="mb-4">Pascal's question was: <em>how many outcomes?</em> He wrote his <em>Traité</em> to solve the problem of points — how to divide gambling stakes fairly when a game is interrupted. That question is extraordinarily productive. It built probability theory. It shaped mathematics for generations. But it cannot see the fractal.</p>
      <p className="mb-4">Khayyam's question was: <em>what structure is hiding here?</em> Reduce the triangle modulo 3. What survives? The answer is a Sierpiński triangle — the same self-similar fractal pattern at every scale, its appearance governed exactly by Lucas's theorem. The fractal is invisible to Pascal's question. It is the first thing Khayyam's question finds.</p>

      <div className="my-6 p-4 border border-rule border-l-4 border-ink bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Lemma 4.1 — Lucas's Theorem</div>
        <p className="text-[0.95rem] leading-relaxed">The binomial coefficient <em>C</em>(<em>n</em>, <em>k</em>) ≡ 0 (mod <em>p</em>) if and only if at least one base-<em>p</em> digit of <em>k</em> exceeds the corresponding digit of <em>n</em>. Equivalently, <em>C</em>(<em>n</em>, <em>k</em>) is nonzero mod <em>p</em> if and only if every base-<em>p</em> digit of <em>k</em> is at most the corresponding digit of <em>n</em>.</p>
      </div>

      <div className="my-6 p-4 border border-rule border-l-4 border-mid bg-note-bg">
        <div className="font-plex-sans font-semibold text-[0.7rem] uppercase tracking-widest text-ink mb-2">Proposition 4.2 — Hausdorff Dimension of the Mod-<em>p</em> Fractal</div>
        <p className="text-[0.95rem] leading-relaxed">For any prime <em>p</em>, the set of nonzero entries of the triangular array modulo <em>p</em> forms a Sierpiński fractal with Hausdorff dimension log(<em>p</em>(<em>p</em>+1)/2)/log(<em>p</em>). For <em>p</em> = 3: dimension = log(6)/log(3) ≈ 1.631. For <em>p</em> = 2: dimension = log(3)/log(2) ≈ 1.585.</p>
      </div>

      <h2 className="font-stix font-semibold text-[1.05rem] text-ink mt-9 mb-3">Why This Matters: The Combinatorial Origin of θ = <Fraction numerator="5" denominator="8" /></h2>
      <p className="mb-4">The mod-3 fractal is not decorative. The surviving entries — the nonzero residues 1 and 2 mod 3 — trace out exactly the constitutional residue classes that twin primes inhabit.</p>
      <p className="mb-4">Proposition 2.3 of the Ramanujan paper [5] proposes a direct combinatorial correspondence between the fractal and the sieve. The triangle is not a metaphor for the arithmetic. The triangle <em>is</em> the arithmetic, seen from a different frame. Both are projections of the same underlying structure. Khayyam's Triangle (combinatorial face) and the hexagonal lattice of the Eisenstein integers (algebraic face) are the same result in two mathematical languages.</p>

      <div className="mt-12 pt-6 border-t border-rule">
        <h2 className="font-stix font-semibold text-[1.05rem] text-ink mb-6">References</h2>
        <ol className="list-none [counter-reset:refs]">
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">R. Rashed (ed.), <em>Encyclopedia of the History of Arabic Science</em>, Vol. 2. Routledge, 1996.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">B. Pascal, <em>Traité du triangle arithmétique</em> (1654; published posthumously 1665).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">E. W. Weisstein, "Pascal's Triangle," MathWorld, Wolfram Web Resource.</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">M. Gardner, "Mathematical Games," <em>Scientific American</em> (1977).</li>
          <li className="relative pl-9 mb-3 font-stix text-[0.82rem] leading-relaxed text-mid before:content-['['counter(refs)']'] before:[counter-increment:refs] before:absolute before:left-0 before:font-plex-mono before:text-[0.68rem] before:text-light">K. Wakil, "Ramanujan's Dimensional Forcing: A Universal Formula for Sieve Levels," Constitutional Sieve Programme Paper 05 (2026).</li>
        </ol>
      </div>

      <div className="mt-12 mb-8">
        <img 
          src={`${import.meta.env.BASE_URL}khayyam_sierpinski_academic.png`} 
          alt="Khayyam's Triangle and the Geometry Hidden in the Numbers" 
          className="w-full h-auto border border-rule shadow-sm"
          referrerPolicy="no-referrer"
        />
        <div className="text-center mt-3 font-plex-sans text-[0.72rem] italic text-mid">
          <strong>Figure 1.</strong> Khayyam's Triangle and the Geometry Hidden in the Numbers. Modular reduction reveals what counting cannot see.
        </div>
      </div>
    </>
  ),
  nextPaper: {
    id: "03",
    title: "03 · Spherical Cow Philosophy",
    desc: <>A Methodological Framework for Mathematical Discovery. Why the barrier at θ = <Fraction numerator="1" denominator="2" /> is not an obstacle — it is information.</>,
    url: "/papers/p03"
  }
};

export default p02;

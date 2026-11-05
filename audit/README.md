# Audit of the programme papers: old versions p01–p09

**Date:** 5 November 2026
**Scope:** every paper in `papers/` (the `.tex` sources, checked against the compiled PDFs and, where they differ, the `.html` versions), the Lean files in `lean/`, `LEAN_VERIFICATION_REPORT.md`, the website text in `src/`, and the programme registry.
**Method:**
- Every paper was read line by line.
- Every number, table, residue count, exponent and decimal that could be recomputed was recomputed. The scripts are in `scripts/`; see "How to re-run" below.
- External results were checked against the literature.
- Each finding is marked **VERIFIED** (demonstrated by computation, derivation or a standard reference) or **SUSPECT** (plausible but not demonstrated).

Detailed findings, with file:line, quotes, evidence and suggested corrections, are in `findings/`.

> **Update (November 2026).** The papers, website, README, Lean verification report and programme registry have since been revised in line with this audit. Each paper now opens with a revision note listing what changed. Line numbers in `findings/` refer to the versions audited here (git history before the revision commits), not to the revised papers.

---

## 1. Bottom line

The Kolmogorov 3/4 is not an isolated contaminant. It is one case of a pattern that runs through the whole programme: a constant from the literature that happens to equal an entry of the θ_k table gets adopted as an "instance", and a derivation is then built backwards to reach it.

The same thing happened with 5/8. Pascadi's 5/8 (general moduli, spectral methods) matched θ_3. A "three-level" twin-prime / Eisenstein story was then constructed, and a theorem was claimed for moduli 3^K. Without the Kolmogorov error, the following still fail:

1. **The Counting Theorem is not a theorem.** Under the paper's own definitions it gives 2^k − 1 invalid configurations, not k. So θ_k = (2^k − k)/2^k is a stipulation, not a consequence.
2. **The "three independent levels" behind θ_3 = 5/8 do not exist.** For twin primes, the conditions mod 9 and mod 27 add nothing beyond p ≡ 2 (mod 3). By the programme's own independence criterion (C2), the depth is 1.
3. **The main arithmetic theorem (p04 Thm 1.1, also p05 Thm 5.7 and p06 Thm 5.1) proves nothing about 5/8.**
   - *As written*, it is true for **every** exponent below 1. It sums over only about log x moduli, so the trivial bound already covers it. Recomputed at x = 10^7, the sum is 0.00092·x at θ ≈ 0.61 and 0.00096·x at θ ≈ 0.95. Stopping at 5/8 changes nothing.
   - *As intended* (each modulus 3^K up to x^{5/8}), it would go beyond what the Generalised Riemann Hypothesis gives. The best known results for prime-power moduli are 3/8 → 2/5 → 5/12 → 0.4736.
   - *Its proof* rests on a Kloosterman bound q^{3/8} that is false. Exact computation gives max_b |S(1,b;3^K)| ≈ 2·3^{K/2} (ratio above 1.99 for 3 ≤ K ≤ 9), so Weil's bound is essentially sharp. Even granting every step, the paper's own final inequality yields 4/5, not 5/8.
4. **Pascadi is misattributed in every paper that cites him, under three different wrong titles.** arXiv:2505.00653 is *"On the exponents of distribution of primes and smooth numbers"*. It covers general moduli with well-factorable weights, not moduli 3^K, and it does not confirm the programme.
5. **Condition W3 (p07) is true but trivial, and its proof is invalid.** The only real character mod 3^K comes from mod 3. The "Stark–Baker theorem" the proof uses would, as stated, solve the Landau–Siegel problem. W3 also supplies nothing p04 needs.
6. **The Lean files verify arithmetic, not the mathematics.** They contain no primes-in-progressions, L-function, DFT or Navier–Stokes content. The analytic claims are `axiom … : True` or `∃ c, c > 0`, and the "main theorem" of P04 is `1/2 + 1/8 = 5/8`.

**What survives** is listed in §6. It is a set of correct but standard facts: the Eisenstein-integer arithmetic, cyclicity of (Z/3^K)^*, the inert/split criterion, Lucas's theorem, Hermitian symmetry of the real DFT, p ≡ 2 (mod 3) for twin primes, and the arithmetic of the θ_k table itself.

---

## 2. How the 3/4 got in, and why the same mechanism produced the other errors

The θ_k table has 3/4 at **k = 4**: (16 − 4)/16. Kolmogorov's well-known 3/4 is the exponent in the dissipation length η = (ν³/ε)^{1/4}, i.e. η/L ~ Re^{−3/4}. p01 wanted it as a **k = 2** instance with "two constraints" (incompressibility and helicity orthogonality). The formula gives θ_2 = 1/2, so p01 §3.4 silently changed the base space from 2^k to 2^3 and wrote θ_2 = (2^3 − 2)/2^3 = 6/8 = 3/4 (p01.tex:438). A remark then legitimised the switch ("the configuration space depends on the system", l.450–455).

Once the base space is free, the framework can reach almost anything: 3/4 = (2^2−1)/2^2 = (2^3−2)/2^3 = (2^4−4)/2^4. The same freedom appears elsewhere:

| Where | How the formula was bent to reach a target value |
|---|---|
| p01 Kolmogorov | k = 2 but base 2^3, giving 3/4 instead of 1/2 |
| p09 FFT | Uses (2^k − **1**)/2^k, not (2^k − k)/2^k, to call 1/2 a "k = 1" instance. Since θ_1 = θ_2 = 1/2, the value cannot identify depth 1 anyway. |
| Sophie Germain | Depth stated as k = 1 (p01), k = 2 (p03, p05, p06) and k = 1 (P03/P06 Lean). Since θ_1 = θ_2 = 1/2, the "falsification test" can never fail. |
| Khayyam's triangle | Assigned k = 3 (p01 table). The actual mod-3 survivor density is 1, 4/5, 4/7, 16/41, 16/61 … → 0; (2^K − K)/2^K → 1. |
| Shannon AEP / capacity | Called k = 1 (forcing θ = 1/2), but the constants given are H/log|A| and C/log|X|, which take any value in (0,1). |
| 5/8 for 3^K | "Three levels" mod 3, 9, 27 picked by hand. The (1−ω)-adic filtration of Z[ω]/(3^K) has 2K steps. |
| p04 exponents | The paper's own inequality x^{1/2}Q^{5/8} ≤ x gives Q ≤ x^{4/5}. "5/8" is read off the exponent of Q, not derived. |

The other numbers that "poisoned" the research were mostly external constants matched to table entries in the same way. These are listed as errors in the papers themselves (see `findings/`):

- Kolmogorov 3/4 (p01, website, essays, cover letter, registry).
- Pascadi 5/8 (p01, p03–p09).
- A "measured" 0.749 ± 0.003 for k = 4 (p05 Table 2). It has no method or code anywhere and cannot be reproduced.
- The p08 transition matrix. Its rows 3, 7 and 9 are wrong by up to about 1,600 standard errors; for example 3→1 is given as 38% but is 24.04%.
- The p09 "θ_emp = 0.500247". For a real signal this quantity can never exceed 1/2.

---

## 3. Root-cause errors (inherited by several papers)

Several files in `findings/` refer to "facts 1–7". These map to the IDs below as follows: fact 1 = R2, fact 2 = R1, fact 3 = R3, fact 4 = R6, fact 5 = R4, fact 6 = R7, fact 7 = R8.

| ID | Error | First appears | Inherited by | Status |
|---|---|---|---|---|
| R1 | **Counting Theorem miscount.** With c ∈ {0,1}^k (c_i = 1 iff constraint i holds), one failing constraint invalidates 2^{k−1} configurations. Invalid = 2^k − 1 and valid = 1 for every k (k = 3: 7 invalid, not 3). The induction ignores that the k − 1 invalid configurations each split in two. | p01 Thm 2.6 (l.242–270) | p02, p03, p04, p05 (Prop 4.1, whose own proof defines valid = "all coordinates 1"), p06, p09, Lean P01/P05, website | VERIFIED |
| R2 | **Kolmogorov α = 3/4.** Formula gives θ_2 = 1/2. The bound ε^{3/4}/ν^{3/4} has units T^{−3/2}, not vorticity's T^{−1}. K41's 3/4 (η/L ~ Re^{−3/4}) was derived a priori by dimensional analysis in 1941. "Helicity orthogonality prevents blow-up" asserts the open Navier–Stokes regularity problem. The helical decomposition presupposes ∇·u = 0, so the two constraints are not independent. | p01 §3.4 | website (Home, PaperDetail, EssayDetail, Preprints, CoverLetter, programme.ts), registry skill; contradicts p06's "k ≤ 2 gives at most 1/2" | VERIFIED |
| R3 | **Twin-prime "three levels".** Admissible residues mod 9, 27, 81 are exactly the 3, 9, 27 lifts of 2 mod 3. Twin primes up to 10^8 are uniform over them. The depth is 1. | p01 §3.2 | p03, p04 (Prop 2.4), p05, p06, HTML "8 − 3 = 5" | VERIFIED |
| R4 | **The cascade-moduli theorem is vacuous or beyond GRH.** Σ over ~log x moduli 3^K is trivially ≪ x/(log x)^A for any θ < 1. The per-modulus version would exceed GRH (single modulus: x^{1/2}). Known for prime powers: Barban–Linnik–Tshudakov 3/8, Gallagher 2/5, Huxley 5/12, Banks–Shparlinski 0.4736. | p04 Thm 1.1 | p01, p02, p03, p05 Thm 5.7, p06 Thm 5.1, p07, p08, p09, website ("PROVED (UNCONDITIONAL VIA PAPER 07)") | VERIFIED |
| R5 | **The p04 proof fails.** Kloosterman bound q^{3/8} is false (Weil is essentially sharp: max |S| ≈ 2·3^{K/2}). "Ceiling 2/3 improved to 5/8" lowers the level, and 2/3 − 1/8 = 13/24. x^{1/2}Q^{5/8} ≤ x gives 4/5. Watt (1995) is a t-aspect mean value of |ζ|⁴|M|², with no characters and no "conditions W1–W3". W1/W2 are "checked" by invalid logic and fail for most K. | p04 §§2–3, App. A | p05 §5, p07 §6–7 | VERIFIED |
| R6 | **Pascadi misattributed.** The real paper (arXiv:2505.00653): smooth numbers, and primes with triply-well-factorable weights, up to x^{5/8−o(1)} for general moduli. It uses large-sieve inequalities for exceptional Maass forms (arXiv:2404.04239, Forum Math. Pi 2026) and Kim–Sarnak 7/64. Lichtman had 66/107, and 5/8 under Selberg's eigenvalue conjecture. It is not about 3^K, is not a "matching lower bound", and does not "increase depth to k = 3". Titles used: "Level of distribution 5/8 for smooth moduli" (p01, p04–p06); "Primes with Beatty and Chebotarev conditions…" (p08). The p04 HTML gives the author as "Alessandro … (Cambridge)"; he is Alexandru Pascadi, Oxford. | p01 | p03–p09, website | VERIFIED |
| R7 | **Condition W3 is trivial, and its proof is invalid.** (Z/3^K)^* is cyclic, so the only real non-principal character mod 3^K is induced from χ_{−3}. L(σ,χ_{−3}) ≥ 1/3 on (0,1). The "Stark–Baker theorem" (p07 Thm 3.2) as stated would solve Landau–Siegel. The lifting χ(n) = Ψ((n)) is impossible for odd χ. The conductor is 𝔭^{2K−1}, not 𝔭^{2K}. "θ_f ≤ 7/32" is Kim–Sarnak, not a Siegel-zero statement. | p07, p04 App. A | p01, p05, p06, website | VERIFIED |
| R8 | **Bombieri–Vinogradov misstated.** BV is an average over q ≤ x^{1/2}(log x)^{−B}, not each q. GRH does not push the level past 1/2. Levels > 1/2 are known (BFI 4/7, Zhang, Maynard 3/5, Lichtman 66/107, Pascadi 5/8), and none of 4/7, 3/5, 66/107 has the form (2^k−k)/2^k. "On the large sieve" is Bombieri's alone. | p01 §3.1 | p03, p04, p05, p06, p07, p08 | VERIFIED |
| R9 | **"θ > 1/2 (or θ_5 = 27/32) gives infinitely many twin primes."** Even level 1 (Elliott–Halberstam) gives only gaps ≤ 12, or ≤ 6 under GEH. The parity barrier blocks gap 2. | p03, p05 | website | VERIFIED |
| R10 | **The Sophie Germain "non-instance" is unfalsifiable.** "2p+1 is odd" holds for every integer p, and the real coupling is mod 3, the same as twin primes. "Level of distribution of SG pairs" is undefined. The "computational confirmation" (δ·log x = 2.38 ± 0.18, p < 0.001) has no definition of δ. p06 Thm 7.1 cites itself. | p01, p03, p06 | p05, Lean | VERIFIED |

---

## 4. Per-paper verdicts

Severity: **C** = invalidates a headline claim, **M** = wrong number, false statement or misattribution, **m** = inconsistency or mislabel.

| Paper | Headline claim | Verdict | C / M / m | Most important findings |
|---|---|---|---|---|
| **p01** Constitutional Forcing | θ_k forced; three proven instances (BV, cascade 5/8, Shannon, Kolmogorov) | **Does not hold.** Counting Theorem stipulated (R1). No instance satisfies the paper's own definition: Kolmogorov (R2), cascade (R3, R4), Shannon gives H/log\|A\|, not 1/2, and BV rests on a vacuous binary predicate. | 3 / 5 / 3 | R1, R2, R3, R6, R8; Shannon instance contradicts Table 1 |
| **p02** Khayyam's Triangle | Mod-3 fractal is the combinatorial origin of 5/8 | **The history needs correcting, and the maths link is false.** Hausdorff dimension is log 6/log 3 ≈ 1.631, not log 4/log 3 ≈ 1.262, and it is *larger* than the mod-2 value, not smaller. "Three copies" should be six. The survivor counts don't match k-of-2^k. | see p02_p03 | Wrong dimension (also inherited by p09); Khayyam's surviving algebra doesn't contain the triangle (Piṅgala, al-Karajī, Jia Xian earlier); solar-year gap is 0.741447 s, not 0.741312 s, and the 11-decimal value is the modern 365 + 683/2820 |
| **p03** Spherical Cow | Methodology; "five forced consequences"; SG non-instance | **Does not hold.** The consequences are not forced (R1, R3, R4). θ > 1/2 does not give twin primes (R9). The SG test is unfalsifiable (R10). The AEP "same pattern" is the opposite: the typical set is a vanishing fraction. The degraded-channel claim is backwards. | (p02+p03: 7 / 17 / 14) | R9, R10; "2/3 improved to 5/8" |
| **p04** Eisenstein, θ = 5/8 | Level 5/8 for moduli 3^K, unique and sharp | **Not proved.** As stated, true for every θ < 1 (trivial). As intended, beyond GRH. The proof fails at Prop 2.4 (no three-level filtration), the Kloosterman q^{3/8} bound (false), and the final arithmetic (gives 4/5). | 4 / 19 / 7 | R3, R4, R5, R6, R7; Lean "main theorem" is 1/2 + 1/8 = 5/8 |
| **p05** Ramanujan's Dimensional Forcing | Universal formula; unifies BV and Pascadi; empirical table | **Does not hold.** Counting Theorem contradicts its own definitions. The §5 exponents don't give 5/8. The "empirical" 0.624/0.749/0.843 are irreproducible and undefined. Nothing comes from Ramanujan, and there is no Ramanujan reference. | 8 / 16 / 7 | R1, R4, R5, R6, R9; Table 2 "measured" column |
| **p06** Shannon–Wakil Effect | Cross-domain effect; SG non-instance "[Proven]" | **Does not hold.** Primes do not "concentrate" on a ≡ 2 (mod 3): half are ≡ 1. Theorem 5.1 is trivial (R4). Shannon's constants contradict k = 1. The capacity formula C = log\|X\| − min H(X\|Y) is false (it gives C = log\|X\| for every channel). The category/functor that p01 cites p06 for does not exist in p06. | 4 / 19 / 10 | R4, R10; false capacity identity |
| **p07** Condition W3 | No Siegel zeros mod 3^K via CM; makes 5/8 unconditional | **Statement true but trivial. Proof invalid. Does not make anything unconditional.** | 5 / 9 / 5 | R7; "Stark–Baker theorem" is the open Landau–Siegel problem; "2 splits since −3 ≡ 1 mod 8" (−3 ≡ 5, and 2 is inert); "specific to 3" is false (Q(√−7), Q(√−11), … work identically) |
| **p08** Prime bias / ternary bridge | Ternary structure explains the Lemke Oliver–Soundararajan bias | **Mechanism is backwards; data are wrong.** The Hardy–Littlewood p = 3 factor is *maximal* (3/2) for gaps ≡ 0 mod 3, not zero. S(2) is the smallest even-gap value, not the largest. S(10) = 1.76 > 1. Gap 6 is the most common gap. The transition matrix rows 3/7/9 are wrong. LO–S already explain the bias via Hardy–Littlewood. | 5 / 17 / 11 | Recomputed 10^9-prime tables; "snail's pace ≠ Siegel–Walfisz"; twin count 3,424,506, not 3,424,009 |
| **p09** θ_FFT = 1/2 | Formal proof, empirical confirmation, bridge to Khayyam | **The true kernel is textbook** (Hermitian symmetry; N real parameters of 2N). Everything built on it fails. The coefficient count gives (⌊N/2⌋+1)/N, not 1/2. The "2× compression floor" is illusory (rfft stores N reals). θ_emp ≤ 1/2 always, so 0.500247 is impossible. The mod-2 void fraction → 1, not 1/2. Cor 3.2 is false for every N. | 4 / 13 / 5 | Wrong Hausdorff dimension inherited from p02; 2730× compression unsupported |

Cross-paper numbering is inconsistent. p01 calls itself "Paper 00 of a seven-paper program", p04 is "fifth of six", p06 "third of six", and the HTML "04 of 09". The registry skill swaps p05/p06 relative to the repo and lists p09 as "Photonic Regimes". See `findings/lean_site_xref.md`.

---

## 5. Supporting material

**Lean (`lean/`, `LEAN_VERIFICATION_REPORT.md`).** See `findings/lean_site_xref.md` §A for the theorem-by-theorem classification of all 59 theorems and 20 axioms. In short:

- **The Counting Theorem is true by definition.** `def invalidCount (k : ℕ) : ℕ := k` (P01:28), so `counting_theorem` is `k = k`, closed by `rfl`. The flawed induction appears only in a comment.
- **The one concrete model refutes it.** The model in P05:168–171 defines "invalid" as "some constraint fails" (p05's own rule). Under that definition there are 2^k − 1 invalid configurations, and the file only proves "at least k".
- **The headline results are arithmetic or vacuous statements.** `main_theorem_cascade` is `1/2 + 1/8 = 5/8`. `condition_W3` is `∃ c : ℚ, c > 0`, and `watt_conditions_satisfied` is `True`. `constitutional_forcing_conjecture` is trivially provable because `forced_constant` ignores its argument.
- **The axioms carry no content.** 14 of the 20 axioms are `True` or trivially provable. No axiom states anything about primes in progressions, L-functions, Kloosterman sums, Shannon theory, Kolmogorov or prime bias. Even p09's one genuine theorem, DFT conjugate symmetry, is assumed as an axiom rather than proved.
- **What is genuinely proved:** numeral arithmetic (36 of 59 theorems; the θ_k values are correct), a few correct Eisenstein-integer identities (N(1−ω) = 3, 3 = −ω²(1−ω)²), and about a dozen elementary facts (e.g. twin primes > 3 are ≡ 2 mod 3).
- **P02 is wrong as well as empty.** It encodes the wrong Hausdorff-dimension formula and the survivor count 4^K, which should be 6^K. Its axiom `mod3_smaller_than_mod2` states the opposite of the truth.
- **The April 2026 verification report overstated what was built and verified.** Its claim that "all 1,031 lines compile" cannot be checked from the repo: there is no `lake-manifest.json`, build log or CI job. It said Watt, Kloosterman and Cauchy–Schwarz were "stated but axiomatised", but none of them appears in the code. Its "machine-verified" count included theorems that depend on axioms. *Update:* `LEAN_VERIFICATION_REPORT.md` was rewritten in November 2026 to describe what each declaration actually states; the Lean files themselves are unchanged.

**Website (`src/`).** The site repeats Kolmogorov α = 3/4 as an instance in many places: `programme.ts:9`, `Home.tsx:176,263–264,354`, `PaperDetail.tsx:78–79`, `EssayDetail.tsx:743,798–799,834–848,895,948`, `Preprints.tsx:19–20` and `CoverLetter.tsx:78,129`. Two of these get the arithmetic wrong on its own terms: `PaperDetail.tsx:79` prints θ₂ = (4 − 2)/4 = 3/4, and `EssayDetail.tsx:837` reads "Two constraints. Eight configurations. Two invalid. Six valid. θ₂ = 6/8 = 3/4". Other problems:

- **Status labels contradict each other.** p04 is "PROVED (UNCONDITIONAL VIA PAPER 07)" in `programme.ts:44`, "Proved (conditional W3)" in `PaperDetail.tsx:119` and "PROVED" in `Preprints.tsx:77`. p05's main result is a Theorem in the .tex but "Conjecture 6.1" on the site.
- **Twin primes.** The site says a level of distribution would yield infinitely many twin primes (`PaperDetail.tsx:473,486`, `EssayDetail.tsx:383–384,941`). That is false (R9).
- **arXiv links.** The links `arxiv.org/abs/2602.0101` … `2603.0109` and their DOIs are not valid arXiv identifiers: post-2015 IDs have five digits after the dot. The cover letter (`CoverLetter.tsx:98–101`) says the math.NT endorsement was still pending, so these links do not resolve to the papers.
- **False numerical statements.** Mod-2 "void fraction exactly 1/2" (`PaperDetail.tsx:822`), the Kloosterman q^{3/8} bound (`:358`), "(1,3) constitutionally forbidden" (`:731`) and the reversed "12% discrepancy" (`:443`) are all false.

The site is deployed from this repo by `.github/workflows/deploy.yml`, so these claims are live.

**Programme registry (the `constitutional-forcing-programme` skill).** The registry that Claude consults before touching programme papers carries the Kolmogorov error itself:
- the k-hierarchy table lists "k = 2 … Kolmogorov turbulence exponent α = 3/4", next to θ_2 = 1/2;
- "Key Constants" lists "α = 3/4, p01 (Kolmogorov instance, k=2)";
- it also says θ_W = 5/8 is "confirmed by Pascadi independently".

Unless it is corrected, any future session that consults the skill will reintroduce these errors. The skill lives outside this repository and has to be edited where it is maintained. Suggested replacements:
- the k = 2 row's "Known Instance" → "none established";
- delete the α row from Key Constants;
- replace "confirmed by Pascadi independently" with "Pascadi (arXiv:2505.00653) proves 5/8 for general moduli with triply-well-factorable weights; this is unrelated to moduli 3^K";
- fix the p05/p06/p09 rows to match `papers/`.

---

## 6. What is correct and can be kept

- θ_k values as arithmetic: 1/2, 1/2, 5/8, 3/4, 27/32, 29/32.
- Eisenstein integers: N(1−ω) = 3; 3 = −ω²(1−ω)²; (1−ω) prime with residue field F_3; discriminant −3; class number 1; unit group μ₆.
- (Z/3^K)^* cyclic of order 2·3^{K−1}, with 2 a primitive root.
- For ℓ > 3: ℓ inert ⇔ ℓ ≡ 2 (mod 3), split ⇔ ℓ ≡ 1 (mod 3).
- L(s, χ∘N) = L(s,χ)·L(s,χχ_{−3}).
- For p > 3, twin primes and Sophie Germain primes satisfy p ≡ 2 (mod 3).
- Lucas's theorem. The number of entries of Pascal's triangle not divisible by p in the first p^n rows is (p(p+1)/2)^n.
- For real x: X[N−k] = conj(X[k]), and the DFT has exactly N independent real parameters (the proof at p09.tex:214–252 is correct for that count).
- Condition W3 *as a statement* is true. It is classical, and its one-line proof is the cyclicity argument in R7.
- The hand-typed gap table in P08.lean is correct.

---

## 7. Checklist for the new versions

1. **Drop Kolmogorov everywhere**: papers, website, essays, cover letter, Preprints page, registry.
2. **Do not call θ_k "proved"** unless a new definition makes "each constraint eliminates exactly one configuration" consistent with the configuration space. Otherwise state it as a definition or conjecture.
3. **Fix the base space at 2^k** (or state the rule) and fix each system's k *before* comparing with any known constant. Never choose k or the base space after seeing the target value.
4. **Twin primes have one 3-adic condition, not three.** Any "θ_3 = 5/8" instance needs three genuinely independent constraints, checked by the (C2) test the programme itself proposes.
5. **Restate the 5/8 cascade-moduli claim or withdraw it.** If kept, it must be per-modulus and normalised by φ(q). It must be compared with GRH (1/2) and with the prime-power literature (Barban–Linnik–Tshudakov, Gallagher, Huxley, Banks–Shparlinski). The Kloosterman step must be removed.
6. **Cite Pascadi correctly**, including title, scope (general moduli, triply-well-factorable weights), method and author, and stop presenting it as confirmation.
7. **Present W3 for what it is**: a one-line consequence of cyclicity, independent of CM theory. It does not affect any level of distribution.
8. **Recompute every empirical table from code shipped with the paper**: p05 Table 2, p08 matrix and twin count, p09 Table (θ_emp and 2730×).
9. **Correct the facts** listed in `findings/`:
   - Khayyam history, the solar-year figure, and the Hausdorff dimension log 6/log 3;
   - Hardy–Littlewood singular-series values and channel capacity;
   - BV as an average, and twin primes not following from any level of distribution.
10. **Describe the Lean files accurately** ("arithmetic checks of the tabulated values"), or formalise actual statements. Replace `True` axioms with real hypotheses, and use Mathlib's `Choose.lucas_theorem` instead of an axiom.
11. **Unify paper numbering** across the papers, HTML, website and registry.

---

## 8. How to re-run

Python 3 with `numpy`, `sympy` and `mpmath`:

```bash
pip install numpy sympy mpmath
```

Run each script from its own directory, e.g.:

```bash
cd audit/scripts/p04 && python3 kloosterman.py
```

| Folder | What it checks |
|---|---|
| `scripts/p01/` | p01: Counting Theorem enumeration, Kolmogorov dimensions, twin/SG residues mod 3^K, AEP values (`p01_checks.py`); exact Kloosterman sums mod 3^K (`lead_p04_checks.py`); the Thm 1.1 sum over all 3^K at x = 10^7 (`lead_trivial_sum.py`) |
| `scripts/p02_p03/` | Pascal mod p counts and dimension, history arithmetic, twin/SG distributions, the cascade sum |
| `scripts/p04/` | Kloosterman sums, exponent arithmetic, conductor of χ∘N, L(s,χ_{−3}), Thm 1.1 |
| `scripts/p05/` | `c1`–`c8`, one per critical finding |
| `scripts/p06/` | Run `nt.py` first; it writes the `.npy` prime lists the other scripts load |
| `scripts/p07/` | Character group, L-values, conductors, norm map, class numbers |
| `scripts/p08/` | `sieve.c`/`sieve2.c` (compile with `gcc -O2`), raw outputs `out_1e8.txt`/`out_1e9.txt`, `analyze.py`, and the Hardy–Littlewood transition `model.py` |
| `scripts/p09/` | DFT degrees of freedom, θ_emp bound, Pascal mod 2, compression claims |
| `scripts/lean_site/` | θ_k table and Lean model counts (`checks.py`), Pascal mod 2/mod 3 and website numbers (`checks2.py`), axiom truth checks (`axioms_check.py`), theorem numbering across papers (`numbering.py`) |

Limitations:
- The Lean files were reviewed by reading. No Lean toolchain is available here, so they were not compiled.
- arxiv.org could not be fetched from this environment, so external papers were checked through search results, abstracts and standard references. Items that could not be confirmed are marked SUSPECT in `findings/`.
- `public/constitutional_proof.pdf` is a screenplay and was not audited as mathematics.

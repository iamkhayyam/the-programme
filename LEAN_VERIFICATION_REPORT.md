# Lean 4 Formalisation Report

## The Programme: Constitutional Forcing and Constitutional Sieve Theory

**Author:** Khayyam Wakil, ARC Institute of Knowware
**Formalisation date:** April 2026
**Report revised:** November 2026
**Lean version (pinned):** leanprover/lean4 v4.29.0 (`lean/lean-toolchain`)
**Mathlib version (pinned):** tag `v4.29.0` (`lean/lakefile.toml`); no `lake-manifest.json` is committed
**Build status:** not independently verified (see §3)

> **Revision note (November 2026).** This report replaces the April 2026 version, which overstated what the Lean files verify. The April version said the formalisation "confirms that the combinatorial and algebraic skeleton of the programme is logically sound", that 56 theorems were "fully machine-verified", and that Watt's theorem, Kloosterman cancellation and Stark–Baker were "stated but axiomatised". None of that holds: the theorems carrying the programme's names state arithmetic identities, definitions or `True`, and the analytic results are not stated anywhere. This revision describes what each declaration actually states. The underlying review is in `audit/findings/lean_site_xref.md` §A; the Lean files themselves are unchanged.

---

## 1. Summary

| Category | Count |
|---|---|
| Lines of Lean 4 (9 files + root) | 1,031 |
| `theorem` declarations | 59 |
| … (i) arithmetic on fixed numbers (`norm_num`, `decide`, table lookups) | 36 |
| … (ii) true by definition, restatements, or `True` | 8 |
| … (iii) genuine but elementary statements | 12 |
| … left as `sorry` | 3 |
| `axiom` declarations | 20 |
| … whose statement is `True` (or `… → True`) | 8 |
| … trivially provable (empty existentials, a `norm_num` fact, a definitional conjecture) | 6 |
| … true standard results assumed without proof | 6 |
| Definitions and structures | 47 |

**What the files do check (if they compile):**
- **The arithmetic of the θ_k table.** For k = 1…6: 1/2, 1/2, 5/8, 3/4, 27/32, 29/32 (all correct). Also 416/729 ≠ 5/8.
- **A few correct Eisenstein-integer identities.** N(1−ω) = 3, (1−ω)² = −3ω, 3 = −ω²(1−ω)², N(1+ω) = 1.
- **About a dozen elementary facts.** Examples: if p > 3 and p, p+2 are both prime then p ≡ 2 (mod 3); every prime p > 3 has p mod 3 ≠ 0; |{0,1}^k| = 2^k; 3^K − 3^(K−1) = 2·3^(K−1); 2^k ≥ k.
- **A hand-entered table of minimum gaps between last decimal digits of consecutive primes.** The table values are correct.

**What the files do not formalise.** No theorem or axiom states any of the following:
- the Counting Theorem as a counting statement;
- a level of distribution, or θ_W = 5/8 for moduli 3ᴷ;
- Dirichlet L-functions or Siegel zeros (Condition W3);
- Kloosterman sums, Watt's theorem or Cauchy–Schwarz;
- the AEP or channel capacity;
- Kolmogorov or turbulence;
- the frequencies of prime last-digit transitions;
- the Constitutional Forcing Conjecture, in any form with content.

---

## 2. What a Lean check does and does not tell you

When Lean accepts a `theorem` without `sorry`, it has checked that the proof establishes *the statement as written*, given the axioms the proof depends on. Two cautions apply to this project in particular:

- **Names and docstrings are not checked.** `theorem main_theorem_cascade : (1 : ℚ) / 2 + 1 / 8 = 5 / 8` is verified as a fact about rational numbers. It says nothing about primes, moduli or levels of distribution, whatever its name or comment suggests.
- **Axioms are trusted, not checked.** A theorem that depends on an axiom is only as good as the axiom. Two theorems here depend on axioms: `binom_nonzero_mod_iff` on `lucas_theorem`, and `condition_W3` on `stark_baker_theorem`. All 20 axioms are true statements, so the axiom set is consistent. But most are `True` or trivially provable, so assuming them adds no content.

---

## 3. Build status

The April report said "All 1,031 lines compile. Zero errors" and "Build completed successfully (3295 jobs)". That cannot be confirmed from the repository:
- there is no committed `lake-manifest.json`, build log or `.olean` output;
- no CI job runs `lake build` (the only workflow, `.github/workflows/deploy.yml`, builds the website);
- Mathlib is pinned by tag only.

The files were not compiled for this revision, because no Lean toolchain was available in the audit environment.

Points to watch when building (unverified):
- `theta_fft_value` (P09:58–60) uses `field_simp`, which needs `(N : ℚ) ≠ 0` from `hN : N ≥ 2` in ℕ.
- P02 uses `Real.log`, and P09 uses `Real.pi` and `Complex.exp`, with only `import Mathlib.Tactic` (plus `Mathlib.Data.Complex.Basic` in P09).
- Unused-variable linter warnings are likely beyond the two in P08 that the April report mentioned. Examples: `S` in `forced_constant` (P01:114) and `hp` in `classifyPrime` (P04).

To make the build claim checkable: commit `lean/lake-manifest.json`, add a CI job that runs `lake build`, and link its log here.

---

## 4. Paper by paper

Classes: **i** = arithmetic on fixed numbers; **ii** = true by definition, a restatement, or `True`; **iii** = genuine but elementary; **sorry** = unproved. Line numbers refer to `lean/TheProgramme/*.lean`; the copies next to each paper in `papers/` are identical.

### P01 — Constitutional Forcing (`P01_ConstitutionalForcing.lean`, 182 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 41 | `two_pow_ge_k` | iii | 2^k ≥ k |
| 62 | `counting_theorem` | ii | `invalidCount k = k ∧ validCount k = 2^k − k`, by `rfl`. `invalidCount` is *defined* as `k` (line 28), so nothing is counted. |
| 69 | `valid_count_eq` | ii | Unfolds the same definitions |
| 77–92 | `theta_1` … `theta_6` | i | The six θ_k values (correct) |
| 126 | `BV_forced` | i | `theta 1 = 1/2`. `forced_constant` ignores its system argument (line 114). |
| 139 | `cascade_forced` | i | `theta 3 = 5/8`, for the same reason |
| 147 | `sophie_germain_coupling` | iii | p odd → 2p+1 odd. The hypothesis is unused: 2p+1 is odd for every integer p. |
| 155 | `sophie_germain_no_enhancement` | ii | Restates `theta_1` |
| 163 | `theta_approaches_one` | sorry | True; elementary |
| 168 | `theta_strictly_increasing` | sorry | True for k ≥ 2; elementary |

**Axiom:** `constitutional_forcing_conjecture` (line 179). It is trivially provable, not an open conjecture. The first conjunct holds by `rfl` because `forced_constant S := theta k`, and the second needs only any witness.

### P02 — Khayyam's Triangle (`P02_KhayyamsTriangle.lean`, 85 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 39 | `binom_nonzero_mod_iff` | iii (uses axiom) | Lucas's criterion, as a consequence of the axiom `lucas_theorem` |
| 72 | `mod3_configuration_count` | i | 8 − 3 = 5 and 5/8 = 5/8. Nothing about mod 3 or a fractal. |
| 82 | `ternary_survivor_count` | ii | 4^K = (3+1)^K. The intended claim is false: the number of entries not divisible by 3 in the first 3^K rows is **6^K**. |

**Axioms:**
- `lucas_theorem` (35): true and standard. Mathlib appears to include Lucas's theorem; if so, use it instead of an axiom.
- `sierpinski_self_similarity` (57): `∃ copies, copies = (p+1)^m`, which is empty. The intended count is (p(p+1)/2)^m.
- `mod3_smaller_than_mod2` (65): true only for the definition `hausdorffDim p := log(p+1)/log p` (lines 61–62), and that definition is wrong for p ≥ 3. The correct dimension is log(p(p+1)/2)/log p. For p = 3 that is log 6/log 3 ≈ 1.631, which is *larger* than log 3/log 2 ≈ 1.585, so the axiom asserts the opposite of the truth about the real fractals.

### P03 — Spherical Cow Philosophy (`P03_SphericalCowPhilosophy.lean`, 90 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 31 | `twin_prime_constitution` | iii | If p > 3 and p, p+2 are both prime, then p ≡ 2 (mod 3). A correct, complete proof of a classical fact. |

**Axiom:** `k4_prediction` (89): `∃ constellation, True`. This is empty, and does not mention 3/4.

The paper's Sophie Germain non-instance is not formalised here.

### P04 — Eisenstein integers (`P04_EisensteinIntegers.lean`, 138 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 48 | `norm_one_minus_omega` | i | N(1−ω) = 3 (correct) |
| 60 | `oneMinusOmega_sq_val` | i | (1−ω)² = −3ω (correct) |
| 65 | `ramification_of_three` | i | (1+ω)(−3ω) = 3, i.e. 3 = −ω²(1−ω)² (correct) |
| 70 | `neg_omega_sq_is_unit` | i | N(1+ω) = 1. No ring structure or unit group is defined. |
| 87 | `unit_group_order` | iii | 3^K − 3^(K−1) = 2·3^(K−1). It does not mention φ or (ℤ/3ᴷℤ)ˣ. |
| 106 | `main_theorem_cascade` | i | **(1 : ℚ)/2 + 1/8 = 5/8.** Nothing about primes or moduli. |
| 114 | `uniqueness_of_five_eighths` | i | 2/3 ≠ 5/8 ∧ 1/2 + 1/8 = 5/8 |
| 135 | `twin_primes_are_inert_split` | sorry | Even if proved, `classifyPrime` is defined from p mod 3, so the statement would say nothing about factorisation in ℤ[ω]. |

**Axioms:** `three_level_filtration` (79) is `∃ n, n = 3`, and `unit_group_cyclic` (96) is `True`. Both are empty.

Theorem 1.1 of the paper (level of distribution 5/8 for moduli 3ᴷ) is not formalised.

### P05 — Ramanujan's Dimensional Forcing (`P05_RamanujansDimensionalForcing.lean`, 118 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 25 | `config_space_size` | iii | \|Fin k → Bool\| = 2^k |
| 44 | `singleFail_injective` | iii | The k "single-fail" configurations are distinct |
| 52 | `counting_theorem_configs` | iii | Each single-fail configuration is invalid. This gives *at least* k invalid configurations. |
| 64 | `config_density_3` | i | (8 − 3)/8 = 5/8 |
| 75, 80 | `pattern_density_neq_config`, `density_discrepancy` | i | 416/729 ≠ 5/8, and 5/8 > 416/729 |
| 88–90 | `unification_k1`, `unification_k3`, `unification_k4` | i | θ₁ = 1/2, θ₃ = 5/8, θ₄ = 3/4 |
| 106 | `theta_5_value` | i | θ₅ = 27/32 |
| 109 | `three_first_odd_prime` | iii | 3 is the smallest odd prime |

**This is the only file that models configurations concretely, and its model contradicts the Counting Theorem.** Lines 29–33 define valid as "every constraint holds" and invalid as "some constraint fails". Under those definitions the number of invalid configurations is **2^k − 1**, not k (k = 3: 7, not 3). The file proves only the lower bound k.

**Axioms:**
- `geometric_pillar_theta3` (97): `configDensity 3 = 5/8`. This is arithmetic that `norm_num` already proves at line 64, not an analytic result.
- `general_correspondence_conjecture` (103): `∀ k ≥ 1, True`, which is empty.

### P06 — The Shannon–Wakil Effect (`P06_ShannonWakilEffect.lean`, 75 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 46 | `three_instances_satisfy_SW` | ii | Only one system is defined (lines 37–44), and all four of its property fields are `True`. The AEP and channel coding are not defined. |
| 57 | `sophie_germain_noninstance` | i | θ₁ = 1/2. Its docstring says Sophie Germain has k = 1, but p06.tex (Theorem 7.1) says k = 2. |
| 61, 66, 75 | `framework_falsifiable`, `k_hierarchy_table`, `k4_prediction_value` | i | θ_k values (correct) |

No axioms.

### P07 — Condition W3 (`P07_ConditionW3.lean`, 90 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 37 | `unique_ramified_prime` | iii | If a prime p divides 3 then p = 3. Nothing about ramification or discriminants. |
| 64 | `condition_W3` | ii (uses axiom) | **∃ c : ℚ, c > 0**, taken from the axiom `stark_baker_theorem`. No L-function or zero appears. |
| 69 | `watt_conditions_satisfied` | ii | `True` |
| 89 | `three_in_stark_list` | i | 3 ∈ [1, 2, 3, 7, 11, 19, 43, 67, 163]. These are the Heegner numbers d of ℚ(√−d), not discriminants as the name `class_number_one_discriminants` says. The list itself shows that 3 is not the only prime with a class-number-1 CM field. |

**Axioms:**
- `canonical_lifting` (51) and `l_function_factorisation` (57) are `True`.
- `stark_baker_theorem` (54) is `∃ c : ℚ, c > 0`.

All three are empty; none states anything about Hecke characters, L-functions or zero-free regions.

### P08 — Prime digit bias (`P08_PrimeBiasTernaryBridge.lean`, 129 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 32 | `prime_avoids_forbidden` | iii | Every prime p > 3 has p mod 3 ≠ 0 |
| 51 | `twin_prime_ternary_signature` | iii | Twin primes p > 3 have p ≡ 2 and p+2 ≡ 1 (mod 3) |
| 102–121 | `diagonal_has_max_gap`, `offdiagonal_smaller_gap`, `diagonal_gap_ternary`, `gap2_transitions`, `gap2_is_classII` | i | Lookups in a hand-entered 4×4 table of minimum gaps between last digits (values correct), plus 10 mod 3 = 1 and 2 mod 3 = 2 |

**Axioms:** `dirichlet_mod3_equilibrium` (127), `snails_pace_is_siegel_walfisz` (128) and `base_independence` (129) are all `True`.

Nothing connects the gap table to actual transition frequencies. The April report's statement that "the diagonal suppression mechanism … is formally verified" was wrong.

### P09 — θ_FFT = 1/2 (`P09_WakilThetaFFT.lean`, 91 lines)

| Line | Theorem | Class | What it actually states |
|---|---|---|---|
| 51 | `independent_dof_even` | i | 1 + 1 + 2(N/2 − 1) = N for even N ≥ 2 |
| 58 | `theta_fft_value` | i | N/(2N) = 1/2 |
| 76 | `khayyam_bridge` | i | 1/2 = (2¹ − 1)/2¹ |
| 87 | `compression_floor` | i | 1/(1/2) = 2. The docstring's "guaranteed 2× lossless compression floor" is not what this states, and is not true. The half-spectrum of a real length-N signal holds N real numbers, the same as the input. |
| 91 | `universal_constant` | ii | `thetaFFT = 1/2` by `rfl` |

**Axioms:**
- `conjugate_symmetry` (32), `dc_is_real` (37), `nyquist_is_real` (41) and `energy_conservation` (67) are true, standard DFT facts. Conjugate symmetry is the paper's one genuine theorem; it is assumed here rather than proved, though it has an elementary proof.
- `structural_bridge` (80) is `True`.

---

## 5. All 20 axioms

| Axiom | File:line | Statement | Assessment |
|---|---|---|---|
| `constitutional_forcing_conjecture` | P01:179 | ∀k ≥ 1, (∀S, forced_constant S = θ_k) ∧ (∃S, …) | Trivially provable (definitional) |
| `lucas_theorem` | P02:35 | Lucas's criterion | True, standard |
| `sierpinski_self_similarity` | P02:57 | ∃ copies, copies = (p+1)^m | Empty; intended count is wrong |
| `mod3_smaller_than_mod2` | P02:65 | log 4/log 3 < log 3/log 2 | True numerically, but false about the real fractals (wrong dimension formula) |
| `k4_prediction` | P03:89 | ∃ constellation, True | Empty |
| `three_level_filtration` | P04:79 | ∃ n, n = 3 | Empty |
| `unit_group_cyclic` | P04:96 | True | Empty |
| `geometric_pillar_theta3` | P05:97 | configDensity 3 = 5/8 | Arithmetic; `norm_num` proves it |
| `general_correspondence_conjecture` | P05:103 | ∀k ≥ 1, True | Empty |
| `canonical_lifting` | P07:51 | True | Empty |
| `stark_baker_theorem` | P07:54 | ∃ c : ℚ, c > 0 | Empty |
| `l_function_factorisation` | P07:57 | True | Empty |
| `dirichlet_mod3_equilibrium` | P08:127 | True | Empty |
| `snails_pace_is_siegel_walfisz` | P08:128 | True | Empty |
| `base_independence` | P08:129 | ∀ base ≥ 2, True | Empty |
| `conjugate_symmetry` | P09:32 | X[N−k] = conj X[k] for real x | True, standard, provable |
| `dc_is_real` | P09:37 | Im X[0] = 0 | True, standard, provable |
| `nyquist_is_real` | P09:41 | Im X[N/2] = 0 (even N) | True, standard, provable |
| `energy_conservation` | P09:67 | \|X[N−k]\|² = \|X[k]\|² | True, standard, provable |
| `structural_bridge` | P09:80 | True | Empty |

---

## 6. Known problems in the Lean files

These are not fixed in the files yet.

1. **The Counting Theorem is a definition, not a theorem** (P01:28, 62), and P05's concrete model gives 2^k − 1 invalid configurations, not k. Either state the provable `card {c // isInvalid c} = 2^k − 1` and drop the "Counting Theorem" label, or change the model.
2. **The constants ignore the systems.** `forced_constant` (P01:114) returns θ_k regardless of the system, so `BV_forced`, `cascade_forced` and the conjecture axiom have no content.
3. **The Hausdorff dimension is wrong** (P02:61–62). The correct value is log(p(p+1)/2)/log p and the survivor count is 6^K for p = 3. Fix `hausdorffDim` and `ternary_survivor_count`, and drop or reverse `mod3_smaller_than_mod2`.
4. **Names claim more than the statements.** These should be renamed or replaced by real statements:
   - `main_theorem_cascade`, `uniqueness_of_five_eighths`
   - `condition_W3`, `watt_conditions_satisfied`
   - `three_instances_satisfy_SW`
   - `compression_floor`, `khayyam_bridge`
   - `three_level_filtration`
   - `class_number_one_discriminants`
5. **Empty axioms.** The 14 axioms that are `True` or trivially provable should be deleted, or replaced by their real statements and listed as unformalised.
6. **P09 should prove conjugate symmetry** rather than assume it.
7. **P02 should use Mathlib's Lucas theorem** rather than an axiom, if Mathlib's version covers the statement.
8. **Inconsistencies with the papers:**
   - P06's docstring gives Sophie Germain k = 1, but p06.tex gives k = 2.
   - Several docstrings cite theorem numbers that differ from the compiled papers, e.g. P01 "Theorem 2.3" for what is Theorem 2.6, and P07 "Theorem 3.1" for what is Theorem 3.2.
9. **The root file `TheProgramme.lean`** describes P04 as formalising "θ = 5/8" and P07 as formalising "Siegel zero exclusion"; neither is formalised.

---

## 7. Reproduction instructions

```bash
# Prerequisites: elan (the Lean version manager)
curl https://raw.githubusercontent.com/leanprover/elan/master/elan-init.sh -sSf | sh
```

```bash
# Build (from the repository root)
cd lean
lake update        # fetches Mathlib at tag v4.29.0
lake build         # compiles the nine files
```

Please record the result, and commit the generated `lake-manifest.json`, so the build can be reproduced exactly.

---

## 8. Repository structure

```
the-programme/
├── papers/
│   ├── p01-constitutional-forcing/p01.tex
│   ├── p02-khayyams-triangle/Paper_02_Khayyams_Triangle.tex
│   ├── p03-constitutional-signatures/p03.tex
│   ├── p04-that-eisenstein-guy/p04.tex
│   ├── p05-ramanujans-formula/p05.tex
│   ├── p06-shannon-wakil/p06.tex
│   ├── p07-condition_w3/p07.tex
│   ├── p08-prime-bias-ternary-bridge/p08.tex
│   └── p09-wakil-theta-fft/p09.tex
│
├── lean/
│   ├── lakefile.toml
│   ├── lean-toolchain
│   ├── TheProgramme.lean              (root import)
│   └── TheProgramme/
│       ├── P01_ConstitutionalForcing.lean
│       ├── P02_KhayyamsTriangle.lean
│       ├── P03_SphericalCowPhilosophy.lean
│       ├── P04_EisensteinIntegers.lean
│       ├── P05_RamanujansDimensionalForcing.lean
│       ├── P06_ShannonWakilEffect.lean
│       ├── P07_ConditionW3.lean
│       ├── P08_PrimeBiasTernaryBridge.lean
│       └── P09_WakilThetaFFT.lean
│
├── audit/                             (November 2026 audit of papers, Lean and website)
└── LEAN_VERIFICATION_REPORT.md        (this document)
```

---

## 9. Conclusion

The Lean files are a set of arithmetic checks, not a formalisation of the programme's results:
- They confirm the tabulated values of θ_k = (2^k − k)/2^k, a few Eisenstein-integer identities, and some elementary facts about primes mod 3.
- They do not establish the Counting Theorem; P05's own model contradicts it.
- They contain nothing about levels of distribution, Condition W3, Kloosterman sums, Watt's theorem, Shannon theory, the prime digit bias, or the Constitutional Forcing Conjecture.
- Three statements are left as `sorry`, and 14 of the 20 axioms are `True` or trivially provable.
- The build has not been independently verified.

The files should be described this way wherever they are cited, including in the papers, on the website and in submissions, until they are extended to state and prove the actual results.

---

*Original report: April 2026; Lean 4 formalisation by Claude (Anthropic), in collaboration with Khayyam Wakil.*
*Revised: November 2026, following the audit in `audit/`.*

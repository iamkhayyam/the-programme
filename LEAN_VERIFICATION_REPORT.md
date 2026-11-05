# Lean 4 Formalisation Report

## The Programme: Constitutional Forcing and Constitutional Sieve Theory

**Author:** Khayyam Wakil, ARC Institute of Knowware
**Formalisation:** April 2026; revised November 2026
**Lean:** leanprover/lean4 v4.29.0 (`lean/lean-toolchain`)
**Mathlib:** tag `v4.29.0`, commit `8a178386ff` (pinned in `lean/lake-manifest.json`)

**Build status (November 2026):** `lake build` completes successfully (3,301 jobs).
- No errors.
- No `sorry`.
- One axiom (Lucas's criterion).
- 64 theorems.
- 7 style-linter warnings.

> **Revision note.** The April 2026 files compiled too (re-checked November 2026: 3,300 jobs, no errors, 16 warnings, 3 of them `sorry`). But they mostly checked arithmetic on fixed numbers, and their names claimed more than their statements did. For example, "Main Theorem 1.1" was `1/2 + 1/8 = 5/8`, "Condition W3" was `∃ c > 0`, and the "Counting Theorem" was true by definition. 14 of their 20 axioms were `True` or trivially provable. The files were rewritten in November 2026 so that every name describes its statement, the empty axioms are gone, and several facts that had been assumed are now proved. The old files are in the git history; the audit of them is in `audit/findings/lean_site_xref.md` §A.

---

## 1. What the files prove, and what they do not

**Proved** (relative to Lean's standard axioms `propext`, `Classical.choice` and `Quot.sound`; checked with `#print axioms` for every theorem):

- **The programme's formula as arithmetic.**
  - θ_k = (2^k − k)/2^k for k = 1…6.
  - θ₁ = θ₂, so the value 1/2 cannot identify a depth.
  - 1 − θ_k = k/2^k; θ_k is strictly increasing for k ≥ 2, and θ_k → 1.
- **The papers' configuration model** (P05).
  - With "invalid" meaning "some constraint fails", exactly **2^k − 1** configurations are invalid, not k.
  - The k single-fail configurations are distinct and invalid.
- **Elementary number theory.**
  - Twin primes p > 3 satisfy p ≡ 2 (mod 3), and so do Sophie Germain primes p > 3.
  - "2p + 1 is odd" holds for every integer p.
  - Primes p > 3 are not divisible by 3.
- **Eisenstein integers and moduli 3^K.**
  - N(1−ω) = 3, (1−ω)² = −3ω, 3 = (1+ω)(1−ω)², N(1+ω) = 1.
  - φ(3^K) = 2·3^(K−1).
  - (ℤ/3^Kℤ)ˣ is cyclic, and so is (ℤ/7^Kℤ)ˣ.
  - The class-number-one list contains the odd primes 3, 7, 11, 19, 43, 67, 163.
- **Pascal's triangle mod p.**
  - 6 and 36 entries are not divisible by 3 in the first 3 and 9 rows, i.e. 6^K for K = 1, 2.
  - The Hausdorff dimension is defined correctly as log(p(p+1)/2)/log p, with values log 3/log 2 at p = 2 and log 6/log 3 at p = 3.
  - Lucas's non-vanishing criterion follows from the axiom `lucas_theorem`.
- **The discrete Fourier transform** (P09).
  - X[N−k] = conj X[k] for real signals.
  - X[0] is real, and X[N/2] is real for even N.
  - |X[N−k]|² = |X[k]|².
  - N real degrees of freedom out of 2N.
- **Information theory** (P06): for a fair coin, H/log 2 = 1, so the AEP constant is not θ₁ = 1/2.
- **Last digits of consecutive primes** (P08): the minimum-gap table equals the formula (b − a) mod 10 (10 when a = b), and facts about it.

**Not formalised:**
- the level of distribution θ_W = 5/8 (a conjecture: p04);
- Condition W3 itself and any L-function, zero or Hecke character;
- Kloosterman sums and Watt's theorem;
- the AEP and channel coding theorems;
- the Lemke Oliver–Soundararajan bias;
- the Constitutional Forcing Conjecture.

The papers do not claim these are formalised.

---

## 2. File by file

Line numbers refer to `lean/TheProgramme/*.lean`. Identical copies sit next to each paper in `papers/`.

### P01 — Constitutional Forcing (14 theorems)
| Theorem | Statement |
|---|---|
| `two_pow_ge_k` | 2^k ≥ k |
| `theta_1` … `theta_6` | θ_k values 1/2, 1/2, 5/8, 3/4, 27/32, 29/32 |
| `theta_1_eq_theta_2` | θ₁ = θ₂ |
| `one_sub_theta` | 1 − θ_k = k/2^k |
| `theta_strictly_increasing` | θ_k < θ_{k+1} for k ≥ 2 |
| `sq_le_two_pow` | k² ≤ 2^k for k ≥ 4 |
| `theta_approaches_one` | ∀ε > 0 ∃N ∀k ≥ N, 1 − θ_k < ε |
| `two_mul_add_one_odd` | 2p + 1 is odd for every integer p |
| `sophie_germain_mod_three` | p > 3, p and 2p + 1 prime ⇒ p ≡ 2 (mod 3) |

`theta` is a definition. The file does not derive it from a count, and it says so in its header.

### P02 — Khayyam's Triangle (6 theorems, 1 axiom)
| Theorem | Statement |
|---|---|
| `binom_nonzero_mod_iff` | C(n,k) ≢ 0 (mod p) ⇔ the base-p digits of k are dominated by those of n (from the axiom) |
| `survivorCount_three_rows`, `survivorCount_nine_rows` | 6 and 36 entries not divisible by 3 in the first 3 and 9 rows |
| `survivorCount_mod_two` | 9 odd entries in the first 4 rows |
| `hausdorffDim_two`, `hausdorffDim_three` | the dimension equals log 3/log 2 and log 6/log 3 |

**Axiom:** `lucas_theorem`, Lucas's criterion (1878). It is true and standard. Mathlib proves Lucas's theorem in product form (`Choose.choose_modEq_prod_range_choose_nat`); deriving the criterion from it is left to do.

### P03 — Spherical Cow Philosophy (1 theorem)
`twin_prime_constitution`: if p > 3 and p, p+2 are prime, then p ≡ 2 (mod 3). The methodology is recorded as structures (data types) only.

### P04 — Eisenstein integers (8 theorems)
| Theorem | Statement |
|---|---|
| `norm_one_minus_omega`, `oneMinusOmega_sq_val`, `ramification_of_three`, `norm_one_plus_omega` | the Eisenstein-integer identities above |
| `totient_three_pow` | φ(3^K) = 2·3^(K−1) (Mathlib `Nat.totient_prime_pow`) |
| `units_three_pow_cyclic` | (ℤ/3^Kℤ)ˣ is cyclic (Mathlib `ZMod.isCyclic_units_of_prime_pow`) |
| `twin_prime_mod_three` | twin primes p > 3 have p ≡ 2 (mod 3) |
| `twin_primes_classify_inert_split` | for twin primes p > 3, `classifyPrime` gives p inert and p+2 split; `classifyPrime` is defined from p mod 3, so this restates the line above |

### P05 — Ramanujan's Dimensional Forcing (15 theorems)
| Theorem | Statement |
|---|---|
| `config_space_size` | there are 2^k configurations |
| `isValid_iff`, `isInvalid_iff` | the only valid configuration is all-true |
| `invalid_count` | **exactly 2^k − 1 configurations are invalid** |
| `invalid_count_three` | 7 at k = 3 |
| `singleFail_injective`, `single_fail_invalid` | the k single-fail configurations are distinct and invalid |
| `configDensity_1/3/4/5` | (2^k − k)/2^k values |
| `patternDensity3_val`, `pattern_density_neq_config`, `pattern_density_lt_config` | (2/3)(8/9)(26/27) = 416/729, which is ≠ 5/8 and < 5/8 |
| `three_first_odd_prime` | 3 is the smallest odd prime |

### P06 — The Shannon–Wakil Effect (3 theorems)
| Theorem | Statement |
|---|---|
| `k_hierarchy_table` | θ_k for k = 1…6 |
| `k_hierarchy_one_eq_two` | θ₁ = θ₂ |
| `fair_coin_entropy_ratio` | binEntropy(1/2)/log 2 = 1 (Mathlib `Real.binEntropy_two_inv`) |

### P07 — Condition W3 (3 theorems)
| Theorem | Statement |
|---|---|
| `prime_dvd_three` | a prime dividing 3 is 3 |
| `units_seven_pow_cyclic` | (ℤ/7^Kℤ)ˣ is cyclic: cyclicity is not special to 3 (the 3^K case is P04's `units_three_pow_cyclic`) |
| `heegner_odd_primes` | 3, 7, 11, 19, 43, 67, 163 are in the class-number-one list and are prime |

The header explains why Condition W3 is essentially immediate. It is not formalised, because Mathlib has no Dirichlet L-functions with zero-free regions in the form needed.

### P08 — Prime digit bias (8 theorems)
| Theorem | Statement |
|---|---|
| `prime_avoids_forbidden` | primes p > 3 are not ≡ 0 (mod 3) |
| `twin_prime_ternary_signature` | twin primes p > 3 have p ≡ 2 and p+2 ≡ 1 (mod 3) |
| `minGap_formula` | the minimum-gap table equals (b − a) mod 10, or 10 when a = b |
| `diagonal_has_max_gap`, `offdiagonal_smaller_gap`, `gap2_transitions` | facts about the table |
| `diagonal_gap_ternary`, `gap2_is_classII` | 10 ≡ 1 and 2 ≡ 2 (mod 3) |

None of these concerns transition frequencies or explains the bias.

### P09 — θ_FFT = 1/2 (6 theorems)
| Theorem | Statement |
|---|---|
| `conjugate_symmetry` | X[N−k] = conj X[k] for real x, 1 ≤ k ≤ N−1 |
| `dc_is_real` | Im X[0] = 0 |
| `nyquist_is_real` | Im X[N/2] = 0 for even N |
| `energy_symmetry` | \|X[N−k]\|² = \|X[k]\|² |
| `independent_dof_even` | 1 + 1 + 2(N/2 − 1) = N for even N |
| `dof_fraction` | N/(2N) = 1/2 |

In the April version the first four were axioms; they are now proved.

---

## 3. Build details and reproduction

```bash
# Prerequisites: elan (the Lean version manager)
curl https://raw.githubusercontent.com/leanprover/elan/master/elan-init.sh -sSf | sh
```

```bash
# Build (from the repository root)
cd lean
lake update        # fetches Mathlib v4.29.0 and its dependencies (pinned in lake-manifest.json)
lake build         # compiles the nine files
```

`lake update` downloads Mathlib's prebuilt cache when it can. Without it, Mathlib compiles from source: about 3,300 jobs, a little over an hour on 4 cores, which is how the November 2026 build was done. `lakefile.toml` requires Mathlib directly from its git repository, so no package-index lookup is needed.

The 7 remaining warnings are style lints in proofs carried over from the April version: flexible `simp` calls in P05 and P08, a deprecated `push_neg`, a `show` used as `change`, and an unused simp argument. None affects correctness.

---

## 4. Conclusion

The Lean files are a correct, compiling formalisation of:
- the arithmetic of the programme's tables;
- the configuration model, which gives 2^k − 1 invalid configurations rather than the k the original Counting Theorem claimed;
- a set of elementary facts about primes mod 3, Eisenstein integers, the units mod 3^K, Pascal's triangle mod p and the real DFT.

They do not formalise any of the programme's open or withdrawn claims, and they should not be cited as doing so.

---

*Original formalisation: April 2026, by Claude (Anthropic) in collaboration with Khayyam Wakil. Revised and rebuilt: November 2026.*

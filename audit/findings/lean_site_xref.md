# Audit: Lean formalisation, verification report, website, cross-paper consistency

Repo HEAD at review time: `40c2f3d` ("Add Lean 4 formalisation of all 9 papers", 2026-04-02). Review was read-only and changed no repo files.

**Environment and method.**
- `lean`, `lake` and `elan` are not on PATH, and `~/.elan` does not exist. arxiv.org cannot be reached (DNS blocked). The Lean code was therefore reviewed by reading it, and nothing was compiled.
- Numerical claims were checked with Python. The scripts are in the scratchpad `audit/` folder: `checks.py`, `checks2.py`, `axioms_check.py`, `numbering.py` (it reconstructs each paper's amsart theorem numbering; its output is in `numbering.txt`).
- The nine `.lean` files next to the papers are byte-identical to `lean/TheProgramme/*.lean` (confirmed with `cmp`).
- Labels used below:
  - **VERIFIED**: checked directly (code, arithmetic, enumeration, or a standard textbook fact).
  - **SUSPECT**: likely correct but not checkable here (needs a compile, the network, or a historical source).

---

## A. Lean formalisation and LEAN_VERIFICATION_REPORT.md

### A.0 Headline numbers (VERIFIED by grep and reading)

| Item | Report says | Files contain |
|---|---|---|
| Lines | 1,031 | 998 (9 files) + 33 (root) = 1,031 ✓ |
| `theorem` declarations | 59 | 59 ✓ |
| `sorry` | 3 | 3 ✓ (P01:165, P01:170, P04:138) |
| `axiom` | 20 | 20 ✓ |
| defs/structures | 47 | 47 ✓ |
| `admit` / `native_decide` | n/a | 0 / 0 |
| `decide`-only proofs | n/a | 4 (P04:50, 62, 67, 72), all on concrete integer literals |
| Axioms whose statement is literally `True` or `… → True` | n/a | **8** |
| Other axioms that are trivially provable | n/a | **6** (5 trivial existentials, plus 1 that `norm_num` already proves) |

**How the 59 theorems break down** (full table in A.1):
- **(i) Arithmetic on fixed numerals: 36.**
- **(ii) Definitional tautologies, `True`, or vacuous statements: 8.**
- **(iii) Genuine but elementary statements: 12.**
  - None of the 12 is an original claim of the programme.
  - One of them (`binom_nonzero_mod_iff`) depends on an axiom.
- **`sorry`: 3.**

**What the code never encodes.** No theorem or axiom states any of the following:
- a level of distribution;
- a Dirichlet L-function or a Siegel zero;
- a Kloosterman sum;
- Watt's theorem;
- Cauchy–Schwarz;
- the AEP or channel capacity;
- Kolmogorov (no Lean object mentions him at all);
- prime last-digit transition frequencies;
- a count of invalid configurations under any non-trivial model.

### A.1 Per-theorem classification

| File:line | Theorem | Class | What it actually states / comment |
|---|---|---|---|
| P01:41 | `two_pow_ge_k` | iii | 2^k ≥ k. True. Never used: `theta` subtracts in ℤ, and `validCount` uses truncated ℕ subtraction without this lemma. |
| P01:62 | `counting_theorem` | **ii** | `invalidCount k = k ∧ validCount k = 2^k - k` proved by `rfl, rfl`. `invalidCount` is *defined* as `k` (P01:28). |
| P01:69 | `valid_count_eq` | ii | Unfolds definitions: `2^k - k = 2^k - k`. |
| P01:77–92 | `theta_1` … `theta_6` | i | `norm_num` on (2^k−k)/2^k. All six values are correct (1/2, 1/2, 5/8, 3/4, 27/32, 29/32; e.g. (64−6)/64 = 58/64 = 29/32). |
| P01:126 | `BV_forced` | i/ii | `forced_constant S := theta k` ignores `S` (P01:114), so this is `theta 1 = 1/2`. |
| P01:139 | `cascade_forced` | i/ii | Same: `theta 3 = 5/8`. |
| P01:147 | `sophie_germain_coupling` | iii | ∀p∈ℤ, p odd → 2p+1 odd. True, but the hypothesis is never used: 2p+1 is odd for *every* p. |
| P01:155 | `sophie_germain_no_enhancement` | ii | `:= theta_1`, a restatement. |
| P01:163 | `theta_approaches_one` | sorry | True elementary statement. |
| P01:168 | `theta_strictly_increasing` | sorry | True. Actually holds for k ≥ 2. |
| P02:39 | `binom_nonzero_mod_iff` | iii (axiom-dep.) | Contrapositive of axiom `lucas_theorem`. |
| P02:72 | `mod3_configuration_count` | i | 8−3 = 5 and 5/8 = 5/8. Nothing about mod 3 or a fractal. |
| P02:82 | `ternary_survivor_count` | ii | `4^K = (3+1)^K`. The claim it is named after is false (see A-05). |
| P03:116 | `twin_prime_constitution` | iii | p, p+2 prime, p > 3 ⇒ p ≡ 2 (mod 3). A genuine, classical elementary proof. |
| P04:48 | `norm_one_minus_omega` | i | `decide`: 1² − 1·(−1) + (−1)² = 3 ✓ |
| P04:60 | `oneMinusOmega_sq_val` | i | `decide`: (1−ω)² = −3ω ✓ |
| P04:65 | `ramification_of_three` | i | `decide`: (1+ω)(−3ω) = 3 ✓ |
| P04:70 | `neg_omega_sq_is_unit` | i | `decide`: N(1+ω) = 1. The name says "unit", but no ring structure or units are defined. |
| P04:87 | `unit_group_order` | iii | 3^K − 3^(K−1) = 2·3^(K−1) (K ≥ 1). Does not mention φ or (ℤ/3^Kℤ)ˣ. |
| P04:106 | `main_theorem_cascade` | **i** | `(1:ℚ)/2 + 1/8 = 5/8`. Named "Main Theorem 1.1". |
| P04:114 | `uniqueness_of_five_eighths` | **i** | `2/3 ≠ 5/8 ∧ 1/2 + 1/8 = 5/8`. Named "Theorem 5.1 uniqueness". |
| P04:135 | `twin_primes_are_inert_split` | sorry | Even if proved, `classifyPrime` is *defined* by `p % 3` (P04:129), so it would say nothing about factorisation in ℤ[ω]. |
| P05:163 | `config_space_size` | iii | `card (Fin k → Bool) = 2^k`. |
| P05:182 | `singleFail_injective` | iii | The k "single-fail" configurations are distinct. |
| P05:190 | `counting_theorem_configs` | iii | Each single-fail configuration is invalid. This gives *at least* k invalid configurations; see A-02. |
| P05:202, 226–228, 244 | `config_density_3`, `unification_k1/k3/k4`, `theta_5_value` | i | Numeral arithmetic. |
| P05:213, 218 | `pattern_density_neq_config`, `density_discrepancy` | i | 416/729 ≠ 5/8 and 5/8 − 416/729 > 0 ✓ |
| P05:247 | `three_first_odd_prime` | iii | Trivial. |
| P06:46 | `three_instances_satisfy_SW` | **ii** | Only *one* system is defined, and all four of its Prop fields are `True`. |
| P06:57, 61, 66, 75 | `sophie_germain_noninstance`, `framework_falsifiable`, `k_hierarchy_table`, `k4_prediction_value` | i | Numeral arithmetic. The table values are correct. |
| P07:112 | `unique_ramified_prime` | iii | If a prime p divides 3, then p = 3. Says nothing about ramification or discriminants. |
| P07:139 | `condition_W3` | **ii (axiom)** | `∃ c : ℚ, c > 0`, obtained from axiom `stark_baker_theorem`. |
| P07:144 | `watt_conditions_satisfied` | **ii** | `True := trivial`. |
| P07:164 | `three_in_stark_list` | i | `3 ∈ [1,2,3,7,…]`. |
| P08:32 | `prime_avoids_forbidden` | iii | Prime p > 3 ⇒ p mod 3 ≠ 0. |
| P08:51 | `twin_prime_ternary_signature` | iii | Repeats P03, plus p+2 ≡ 1 (mod 3). |
| P08:102, 107, 113, 116, 121 | `diagonal_has_max_gap`, `offdiagonal_smaller_gap`, `diagonal_gap_ternary`, `gap2_transitions`, `gap2_is_classII` | i | Lookups in a hand-entered 4×4 table, plus `10 % 3 = 1` and `2 % 3 = 2`. |
| P09:180 | `independent_dof_even` | i | 1+1+2(N/2−1) = N for even N ≥ 2. |
| P09:187 | `theta_fft_value` | i | N/(2N) = 1/2. |
| P09:205 | `khayyam_bridge` | i | 1/2 = (2−1)/2. |
| P09:216 | `compression_floor` | i | 1/(1/2) = 2. |
| P09:220 | `universal_constant` | ii | `thetaFFT = 1/2 := rfl`. |

### A.2 Axioms (all 20)

**Consistency check.** Every axiom is a true statement:
- `lucas_theorem`: brute-forced for p ≤ 7, n < 200, with 0 counterexamples.
- The four DFT axioms: checked numerically against the Lean definition of `dftCoeff`, with maximum error 1.8e−14.
- `mod3_smaller_than_mod2`: 1.262 < 1.585 for the Lean definition.

So the axiom set is consistent, and `False` cannot be derived (VERIFIED). But none of the 20 encodes a contested claim of the programme.

| Axiom (file:line) | Statement | Status |
|---|---|---|
| `constitutional_forcing_conjecture` P01:179 | ∀k ≥ 1, (∀S, forced_constant S = θ_k) ∧ (∃S, …) | **Trivially provable.** The first conjunct is `rfl`, because `forced_constant` ignores S. The second is witnessed by `⟨_,_,_,True,True⟩`. |
| `lucas_theorem` P02:35 | Lucas's criterion | True and standard. SUSPECT: probably already in Mathlib (`Mathlib/Combinatorics/Choose/Lucas.lean`). |
| `sierpinski_self_similarity` P02:57 | `∃ copies, copies = (p+1)^m` | Vacuous (provable by `⟨_, rfl⟩`). The intended claim is false (A-05). |
| `mod3_smaller_than_mod2` P02:65 | log4/log3 < log3/log2 | True for the Lean definition. False for the real fractals (A-05). |
| `k4_prediction` P03:174 | `∃ constellation, True` | Vacuous. Does not mention 3/4. |
| `three_level_filtration` P04:79 | `∃ n, n = 3` | Vacuous. |
| `unit_group_cyclic` P04:96 | `True` | Vacuous. |
| `geometric_pillar_theta3` P05:235 | `configDensity 3 = 5/8` | Arithmetic, already proved by `norm_num` at P05:202. The report files it under "Deep analytic results". |
| `general_correspondence_conjecture` P05:241 | `∀k, k ≥ 1 → True` | Vacuous. |
| `canonical_lifting` P07:126 | `True` | Vacuous. |
| `stark_baker_theorem` P07:129 | `∃ c:ℚ, c > 0` | Vacuous (c = 1). |
| `l_function_factorisation` P07:132 | `True` | Vacuous. |
| `dirichlet_mod3_equilibrium`, `snails_pace_is_siegel_walfisz`, `base_independence` P08:127–129 | `True` / `∀ base ≥ 2, True` | Vacuous. |
| `conjugate_symmetry`, `dc_is_real`, `nyquist_is_real`, `energy_conservation` P09:161–198 | Standard DFT facts | True and provable. This is the only genuine theorem of p09, and it is the part left unproved. |
| `structural_bridge` P09:209 | `True` | Vacuous. |

### A.3 Findings: Lean code

**A-01 · CRITICAL · P01_ConstitutionalForcing.lean:28, 62–66 · VERIFIED**
- Quote: `def invalidCount (k : ℕ) : ℕ := k` … `theorem counting_theorem … := by constructor · rfl · rfl`
- What is wrong:
  - The "Counting Theorem" (p01 Theorem 2.6; p05 Theorem 3.4) is turned into a definition and then "proved" by reflexivity.
  - The docstring (P01:57–61) repeats the paper's faulty induction ("the k−1 previously invalid configs remain invalid … Total: (k−1)+1 = k"), but no induction is formalised.
- Evidence:
  - The statement is literally `k = k ∧ 2^k−k = 2^k−k`.
  - The lead's fact 2 shows the induction miscounts.
- Fix:
  - Rename it (for example `theta_def`) and remove the "Counting Theorem" claims from the file and the report.
  - Alternatively, state a real model with a cardinality claim (see A-02); that statement is false.

**A-02 · CRITICAL · P05_RamanujansDimensionalForcing.lean:168–193 (header P05:145) · VERIFIED**
- Quote: `def isInvalid (c : Configuration k) : Prop := ∃ i : Fin k, c i = false`, with the header "Counting Theorem: k invalid out of 2^k".
- What is wrong:
  - This is the only file that models configurations concretely.
  - Under its own definitions (valid ⇔ every constraint holds; invalid ⇔ some constraint fails, which is exactly p05's "failure at any earlier level is sufficient for invalidity"), the number of invalid configurations is **2^k − 1**, not k.
  - The file proves only that the k single-fail configurations are distinct and invalid (a lower bound). The theorem it claims would be *false* in this model.
- Evidence: exhaustive enumeration for k = 1…6 gives 1, 3, 7, 15, 31, 63 invalid configurations (`checks.py`).
- Fix: state `Fintype.card {c // isInvalid c} = 2^k - 1`, which is provable. Report that the Lean model contradicts p01 Theorem 2.6 / p05 Theorem 3.4.

**A-03 · CRITICAL · P04:105–119, P07:138–144, P05:234–235 · VERIFIED**
- Quote: `theorem main_theorem_cascade : (1 : ℚ) / 2 + 1 / 8 = 5 / 8`; `theorem condition_W3 : ∃ (c : ℚ), c > 0`; `theorem watt_conditions_satisfied : True := trivial`; `axiom geometric_pillar_theta3 : configDensity 3 = 5 / 8`
- What is wrong:
  - The programme's three central analytic results are each replaced by numeral arithmetic, an existential that is trivially true, or `True`:
    - level of distribution 5/8 (p04 Theorem 1.1),
    - its uniqueness (p04 Theorem 5.1),
    - Condition W3 (p07 Theorem 1.1).
  - The names claim the theorems; the statements encode nothing about them.
- Fix: rename these as "placeholders", or state the real propositions with `sorry`/`axiom` and say plainly that they are unformalised.

**A-04 · CRITICAL · P01:100–114, 121–140, 179–182 · VERIFIED**
- Quote: `def forced_constant (S : ConstitutionalSystem k) : ℚ := theta k`; `axiom constitutional_forcing_conjecture : ∀ k ≥ 1, (∀ S, forced_constant S = theta k) ∧ (∃ S, …)`
- What is wrong:
  - The value of a "system" is *defined* to be θ_k, independent of the system. `ConstitutionalSystem`'s Prop fields are set to `True` for BV and for the cascade.
  - So `BV_forced` and `cascade_forced` just compute θ_1 and θ_3.
  - The programme's "main open conjecture" is posted as an axiom but is a theorem (provable by `rfl` plus a trivial witness). It has no content.
- Fix: delete the axiom, or define `forced_constant` from data that can actually differ from θ_k.

**A-05 · MAJOR · P02:57–65, 81–85 (and p02.tex:106–114, p09.tex:467–533) · VERIFIED**
- Quote: `hausdorffDim (p) := Real.log (p + 1) / Real.log p`; `axiom mod3_smaller_than_mod2`; `theorem ternary_survivor_count … 4 ^ K = (3 + 1) ^ K`
- What is wrong:
  - The nonzero entries of Pascal's triangle mod p, in the first p^m rows, number (p(p+1)/2)^m, not (p+1)^m.
  - The Hausdorff dimension is therefore log(p(p+1)/2)/log p. This agrees with log(p+1)/log p only when p = 2.
  - For p = 3 there are 6^K survivors and the dimension is log 6/log 3 ≈ **1.631**, which is *larger* than log 3/log 2 ≈ 1.585.
  - So the "mod-3 is strictly smaller" axiom is true only because the Lean definition is wrong.
- Evidence: direct count (`checks.py`). p = 3: rows < 3, 9, 27 have 6, 36, 216 nonzero entries, versus 4, 16, 64 predicted by (p+1)^m.
- Fix: correct the definition to log(p(p+1)/2)/log p and the count to 6^K, and drop or flip `mod3_smaller_than_mod2`. The papers and website propagate the error (W-07).

**A-06 · MAJOR · whole axiom set (A.2) · VERIFIED**
- Quote: `axiom unit_group_cyclic (K : ℕ) (hK : K ≥ 1) : True` and seven more of the same form.
- What is wrong:
  - 8 of 20 axioms are `True`; 5 are trivial existentials; 1 duplicates a `norm_num` fact; 1 (`constitutional_forcing_conjecture`) is trivially provable.
  - Total: 14 of 20 are vacuous or trivially provable. The remaining 6 are true textbook facts.
  - Docstrings and the report present these as "deep external results" (A-R04).
- Fix: replace each `True` axiom with its real statement, or delete it and say it is not formalised.

**A-07 · MAJOR · P06_ShannonWakilEffect.lean:5–8, 37–48, 56–58 · VERIFIED**
- Quote: header "Three instances: AEP, Channel Coding, Cascade Moduli"; `theorem three_instances_satisfy_SW : satisfies_SW CascadeModuli_system`; "Sophie Germain primes: effective k=1"
- What is wrong:
  - AEP and channel coding are never defined. One system, with all fields `True`, is "verified".
  - The Lean docstring gives Sophie Germain **k = 1**, but p06.tex:452–460 (Theorem 7.1) says **k = 2**.
- Fix: rename the theorem, and align the Sophie Germain depth with the paper (see X-02).

**A-08 · MAJOR · P07_ConditionW3.lean:111–119, 160–165 · VERIFIED**
- Quote: `def class_number_one_discriminants : List ℕ := [1, 2, 3, 7, 11, 19, 43, 67, 163]`
- What is wrong:
  - These are the Heegner numbers d of ℚ(√−d), not discriminants (the discriminants are −4, −8, −3, −7, …).
  - The list itself refutes p07 Prop 5.1 / website "Theorem 5.1" ("no other prime-power family satisfies all three properties"):
    - ℓ = 7, 11, 19, 43, 67, 163 each ramify in the class-number-1 CM field ℚ(√−ℓ);
    - (ℤ/ℓ^Kℤ)ˣ is cyclic for every odd prime ℓ.
  - `unique_ramified_prime` proves only that 3's prime divisors are {3}.
- Fix: rename the list; remove or qualify the specificity claim.

**A-09 · MAJOR · P08_PrimeBiasTernaryBridge.lean:90–129 · VERIFIED**
- Quote: `def minGap : TerminalDigit → TerminalDigit → ℕ | .d1, .d1 => 10 | …`
- What is wrong:
  - The gap table is typed in by hand and not derived from anything. The values themselves are correct (checked against ((s−r) mod 10) or 10).
  - The theorems are table lookups. Nothing connects the table to prime transition frequencies, the LOS bias, or Siegel–Walfisz (whose axiom is `True`).
- Fix: present this as "encoding of the minimum-gap table only".

**A-10 · MAJOR · P09_WakilThetaFFT.lean:160–171, 186–220 · VERIFIED**
- What is wrong:
  - The one real theorem in p09 (conjugate symmetry, a two-line proof) is an **axiom**.
  - Meanwhile `N/(2N) = 1/2`, `1/(1/2) = 2` and `thetaFFT = 1/2 := rfl` count as "verified theorems".
  - `compression_floor`'s name claims a "guaranteed 2× lossless compression floor". In fact the N independent real degrees of freedom of the half-spectrum equal the N input reals, so there is no compression relative to the signal (see W-17).
  - `khayyam_bridge` encodes only 1/2 = (2¹−1)/2¹. p09.tex never assigns k = 1; that assignment is made only in the Lean code and on the website.
- Fix: prove `conjugate_symmetry` (it is elementary with `Complex.exp` periodicity); rename `compression_floor`.

**A-11 · MAJOR · P04:105–119 vs p04.tex:74–75 · VERIFIED**
- What is wrong: the Lean decomposition 5/8 = **1/2 + 1/8** contradicts the paper's narrative, "ceiling θ ≤ 2/3 … improving the ceiling by 1/8 to θ = 5/8".
- Evidence: 2/3 − 1/8 = 13/24; 2/3 + 1/8 = 19/24; 2/3 − 5/8 = 1/24. Neither narrative is coherent.
- Fix: decide which bound composition is intended.

**A-12 · MINOR · P01:146–152 · VERIFIED**
- What is wrong: the "Sophie Germain coupling" lemma's hypothesis ¬(2∣p) is unused, because 2p+1 is always odd. The lemma therefore shows no coupling between the two conditions; the second "condition" is vacuous for every integer p.

**A-13 · MINOR · docstrings · VERIFIED**
- What is wrong: paper theorem numbers cited in the Lean docstrings, compared with the numbering reconstructed from each paper's LaTeX counters:

  | Lean docstring says | Paper's actual number |
  |---|---|
  | P01 "Theorem 2.3" (Counting) | Thm 2.6 |
  | P01 "Definitions 2.1 and 2.2" | Def 2.1 and 2.4 |
  | P03 "Remark 5.3" | Remark 5.5 |
  | P04 "Proposition 2.3" (filtration) | Prop 2.4 |
  | P05 "Theorem 5.1" (geometric pillar) | Thm 5.7 |
  | P07 "Proposition 2.1" (lifting) | Prop 2.5 |
  | P07 "Theorem 3.1" (Stark–Baker) | Thm 3.2 |

**A-14 · MINOR · P01:163–170, P04:135–138 · VERIFIED**
- What is wrong:
  - The three `sorry`s are elementary true statements; `theta_strictly_increasing` even holds from k = 2. They do not support "Lean-tedious".
  - `twin_primes_are_inert_split` would be definitional (A.1).

### A.4 Findings: LEAN_VERIFICATION_REPORT.md and the root file

**A-R01 · CRITICAL · LEAN_VERIFICATION_REPORT.md:9, 38, 326–335, 388 · build claims unverifiable (VERIFIED absence); compile risks SUSPECT**
- Quote: "Build status: All 1,031 lines compile. Zero errors." / "Expected output: Build completed successfully (3295 jobs)" / "Two harmless linter warnings … in P08" / "Verified on: leanprover/lean4 v4.29.0, Mathlib v4.29.0"
- What is wrong:
  - There is no committed `lake-manifest.json`, `.lake/`, `.olean`, build log or Lean CI. `.github/workflows/deploy.yml` only builds the website.
  - Mathlib is pinned only to `rev = "v4.29.0"` (lakefile.toml:14–17), not to a commit.
  - The compile cannot be confirmed. Plausible failure or warning points (SUSPECT):
    - P09:187–189: `field_simp` must discharge `(N:ℚ) ≠ 0` from `hN : N ≥ 2` in ℕ.
    - P02 uses `Real.log`, and P09 uses `Real.pi` and `Complex.exp`, with only `import Mathlib.Tactic` (plus `Mathlib.Data.Complex.Basic`). It is not verified that these are in scope.
    - There are unused-variable warnings beyond P08, for example `S` in `forced_constant` (P01:114) and `hp` in `classifyPrime` (P04:129). This contradicts "two warnings".
- Fix: commit `lake-manifest.json` and a CI job running `lake build`, and attach the log. Until then, say "not independently compiled".

**A-R02 · CRITICAL · LEAN_VERIFICATION_REPORT.md:28, 376–378, 382 · VERIFIED**
- Quote: "These proofs cannot contain logical errors"; "The Lean 4 formalisation confirms that the combinatorial and algebraic skeleton of the Constitutional Forcing programme is logically sound"; "The deep analytic machinery — Cauchy–Schwarz chains, Watt's theorem, Kloosterman cancellation, Stark–Baker — is stated but axiomatised."
- What is wrong:
  - Nothing about the skeleton is checked. The Counting Theorem is `rfl` (A-01), and the conjecture axiom is trivial (A-04).
  - Cauchy–Schwarz, Watt's theorem and Kloosterman sums are **not stated anywhere**, not even as axioms. Stark–Baker is "stated" as `∃ c : ℚ, c > 0`.
- Fix: replace §8 with an accurate scope statement (see the verdict in the final reply).

**A-R03 · MAJOR · LEAN_VERIFICATION_REPORT.md:22, 28, 42 · VERIFIED**
- Quote: "Theorems (fully machine-verified) 56"; "If a theorem compiles without `sorry` or `axiom`, the statement is true."
- What is wrong:
  - `binom_nonzero_mod_iff` depends on axiom `lucas_theorem`, and `condition_W3` depends on axiom `stark_baker_theorem`.
  - By the report's own definition, at most 54 are axiom-free.
  - "Machine-verified" also hides that 44 of the 56 are numeral arithmetic or tautologies.
- Fix: report the (i)/(ii)/(iii) split.

**A-R04 · MAJOR · LEAN_VERIFICATION_REPORT.md:201, 249–290 · VERIFIED**
- Quote: "These represent deep results in algebraic number theory (Hecke character theory, Baker's theorem …)"; Category B rows include "`stark_baker_theorem` … Requires CM field theory", "`three_level_filtration` … Algebraic number theory machinery", "`geometric_pillar_theta3` … Full analytic proof"; Category C row "`constitutional_forcing_conjecture` … Open conjecture".
- What is wrong: each description misstates the actual Lean statement (`∃ c>0`; `∃ n, n = 3`; a `norm_num` fact; trivially provable). See A.2.

**A-R05 · MAJOR · LEAN_VERIFICATION_REPORT.md:157, 162, 308–310 · VERIFIED**
- Quote: "`unification_k3` | θ₃ = 5/8 (Pascadi/Wakil)"; "This resolves the 12% discrepancy … and confirms that the large sieve connects to configuration density"
- What is wrong:
  - The 5/8 attribution to Pascadi is wrong (lead's fact 4).
  - (5/8 − 416/729) is 8.7% of 5/8, or 9.5% of 416/729. It is not 12%.
  - Lean shows only that two rationals differ. Nothing about the large sieve is encoded.

**A-R06 · MAJOR · LEAN_VERIFICATION_REPORT.md:223, 312–314 · VERIFIED**
- Quote: "the diagonal suppression mechanism … is formally verified … This is the structural cause of the Lemke Oliver-Soundararajan bias."
- What is wrong: only a hand-entered table is checked (A-09). The causal claim is not formalised. LOS attribute the bias to second-order terms of the Hardy–Littlewood singular series.

**A-R07 · MAJOR · lean/TheProgramme.lean:10–24 · VERIFIED**
- Quote: "P04 Eisenstein Integers (ramification, filtration, θ = 5/8) … P07 Condition W3 (Siegel zero exclusion via CM structure) … theorem — fully proved in Lean 4"
- What is wrong: the root file advertises formalised content that is absent.

**A-R08 · MINOR · LEAN_VERIFICATION_REPORT.md:56, 122, 245, 346, 15 · VERIFIED**
- What is wrong:
  - P01 says "(12)" machine-verified theorems but lists 13 rows; the file has 13 non-sorry theorems.
  - P04 says "(8)" but lists 7; the file has 7 non-sorry theorems plus 1 sorry.
  - P09 says "Axioms (4)", but the file has 5 (`structural_bridge`).
  - The per-paper axiom counts sum to 19, against a headline of 20.
  - §7 gives the path `p02-khayyams-triangle/p02.tex`; the real file is `Paper_02_Khayyams_Triangle.tex`.
  - "covers all nine papers": p01's Kolmogorov instance and p06's AEP and channel coding have no Lean counterpart.

**A-R09 · MINOR · LEAN_VERIFICATION_REPORT.md:242, 259 · VERIFIED / SUSPECT**
- What is wrong:
  - "guaranteed 2× compression" is wrong; see A-10 (VERIFIED).
  - "lucas_theorem — Partially in Mathlib" is probably understated; Mathlib likely has Lucas's theorem in full (SUSPECT, no offline check possible).

---

## B. Website and README

The status labels come from `src/constants/programme.ts`, which `PaperDetail.tsx:884` and `Home.tsx` render.

**W-01 · CRITICAL · Kolmogorov · VERIFIED** (with lead's fact 1). Every location of the claim:
- `PaperDetail.tsx:79`: "Formula: θ₂ = (4 − 2)/4 = 3/4 … This is the first *a priori* structural derivation of an exponent validated empirically for 84 years."
  - This is plain arithmetic error: (4−2)/4 = **1/2**.
  - It also differs from p01.tex:438, which uses (2³−2)/2³.
- `EssayDetail.tsx:837`: "Two constraints. Eight configurations. Two invalid. Six valid. θ₂ = 6/8 = 3/4."
  - The formula gives θ₂ = 1/2.
  - A space of 8 configurations with k = 2 violates (CF1), under which |C_k| = 2^k.
- `EssayDetail.tsx:834–835, 838`: "the vorticity dissipation exponent … Exactly. α = 3/4"; "It is always 3/4 … Nobody knows why"; "first structural derivation".
  - The K41 3/4 is η/L ~ Re^{−3/4}, which follows a priori from dimensional analysis under Kolmogorov's hypotheses.
- Other places the instance is asserted:
  - `Home.tsx:262–264` (table row "Dissipation exponent α = 3/4") and `Home.tsx:354`;
  - `programme.ts:9` ("Four instances … including Kolmogorov's turbulence exponent α = 3/4") under status "PROVED";
  - `Preprints.tsx:15, 19–20` ("Instance I: The α = 3/4 Dissipation Exponent", "Lemma 3.1: Kolmogorov-Shannon Equivalence"; p01 contains no lemma at all);
  - `CoverLetter.tsx:78, 129`;
  - `EssayDetail.tsx:743, 799, 844, 895, 948`.
- Fix: remove Kolmogorov as an instance everywhere.

**W-02 · CRITICAL · status labels · VERIFIED**
- Quotes: `programme.ts:8, 20, 32, 69, 82, 95` `status: "PROVED"`; `:44` `"PROVED (UNCONDITIONAL VIA PAPER 07)"`; `:56` `"PROVED · K≥4 CONJECTURAL"`; `:108` `"PROVED · 6TH INSTANCE NAMED"`; `Preprints.tsx:14–182` "PROVED" on all nine.
- What is wrong:
  - p02 is a history paper and p03 a methodology paper, yet both are labelled "PROVED".
  - p01's "PROVED" rests on the miscounted Counting Theorem (fact 2) and on Kolmogorov (W-01).
  - p04's 5/8 for individual moduli 3^K would exceed what GRH gives (fact 5).
  - p07's result is essentially trivial (fact 6).
  - The site is internally inconsistent about p04:
    - `programme.ts:44`: "UNCONDITIONAL VIA PAPER 07";
    - `PaperDetail.tsx:119`: "Proved (conditional W3)";
    - `Preprints.tsx:77`: plain "PROVED";
    - `PaperDetail.tsx:368`: "subject to Condition W3 (proved unconditionally in [7])";
    - `PaperDetail.tsx:850`: "Proved (W3 via Paper 07)".
  - It is also inconsistent about p05: `programme.ts:56` says "PROVED", while `PaperDetail.tsx:480` labels the main result "**Conjecture** 6.1 — Ramanujan's Dimensional Forcing" (p05.tex:522 calls it *Theorem* 6.1).
- Fix: replace "PROVED" with accurate labels (e.g. "preprint; claims under review").

**W-03 · CRITICAL · Pascadi misattribution · VERIFIED (fact 4); author name and affiliation SUSPECT**
- Places where Pascadi's 5/8 is presented as an instance, special case or independent confirmation of θ₃:
  - `Home.tsx:273–276`: "Analytic number theory | 2025 | Pascadi | θ = 5/8 for smooth triply-well-factorable moduli", listed as a Constitutional Forcing instance;
  - `programme.ts:57`: "Unifies Bombieri–Vinogradov and Pascadi as special cases";
  - `Preprints.tsx:99`;
  - `PaperDetail.tsx:57` ("Two paths. One value. Neither chosen."), `:381` ("Remark — Independent Confirmation … Alessandro Pascadi (Cambridge) … convergence of two independent paths …"), `:420`, `:433`, `:471` ("Cascade moduli / Pascadi (2025)");
  - `EssayDetail.tsx:372` ("Pascadi (2025) … Three independent constitutional constraints, the full Eisenstein filtration"), `:378`, `:410`, `:490–538` ("sailboats"), `:552`;
  - `CoverLetter.tsx:133`;
  - `ConstitutionalProofScreenplay.tsx:973`.
- What is wrong:
  - arXiv:2505.00653 is "On the exponents of distribution of primes and smooth numbers". Its 5/8 is for primes and smooth numbers with triply-well-factorable *weights* over general moduli. It is neither "smooth moduli" nor "3^K", and it is not an independent confirmation.
  - `PaperDetail.tsx:138` cites the paper under the title "Primes with restricted digits and large gaps between primes" (wrong; compare X-07).
  - The author's first name is given as "Alessandro" and his affiliation as Cambridge. The reviewer believes it is Alexandru Pascadi (Oxford), but this could not be checked without network access (SUSPECT).
- Fix: cite the correct title, describe the result accurately, and remove the "special case" and "confirmation" framing.

**W-04 · CRITICAL · GPY / twin primes · VERIFIED (standard: GPY 2009; Maynard 2015; Polymath8b 2014)**
- Quotes:
  - `PaperDetail.tsx:473` "k = 5 … 27/32 … Would imply twin prime infinitude via GPY";
  - `PaperDetail.tsx:486` "If this can be established analytically over a broad family, twin prime infinitude follows. The formula already knows the answer.";
  - `EssayDetail.tsx:383–384` "GPY requires θ > 1/2 … to conclude the infinitude of twin primes … by GPY, infinitely many twin primes follow directly";
  - `EssayDetail.tsx:941`;
  - `ConstitutionalProofScreenplay.tsx:919` "Ternary: theta equals five-eighths. PRECISELY sufficient."
- What is wrong:
  - A level θ > 1/2 gives *bounded gaps*, not twin primes.
  - Even the Elliott–Halberstam conjecture (θ = 1) gives only gaps ≤ 12, and its generalised form gives only ≤ 6. The parity barrier blocks gap 2.
  - No level of distribution alone implies twin prime infinitude. p05 Conj 6.5 and p03 §4.3 repeat the error.
- Fix: delete the implication.

**W-05 · CRITICAL · arXiv IDs and DOIs · VERIFIED (format); existence of the knowware URLs SUSPECT**
- Quotes:
  - `Preprints.tsx:11, 32, 54, 74, 95, 116, 137, 158, 179`: `doi: "10.48550/arXiv.2602.0101"` … `"…2603.0109"`;
  - `Preprints.tsx:25, 46, 67, 88, 109, 130, 151, 172, 193` and `PaperDetail.tsx:43, 160, 256, 318, 414, 519, 622, 704, 779`: `https://arxiv.org/abs/2602.0101` etc.
- What is wrong:
  - Post-2015 arXiv identifiers have the form YYMM.NNNNN (five digits). "2602.0101" is malformed, and the sequence numbers (0101…0109, matching paper numbers) are placeholders.
  - `CoverLetter.tsx:98–101` (dated March 11, 2026) says the author has endorsements only for cs.IT and math.HO and is "still waiting for the math.NT endorsement", yet the site gives arXiv/DOI records for the math.NT papers too.
  - The links `github.com/knowware-institute/p0N` and `preprint.knowware.institute/...` could not be checked.
- Fix: remove the fake DOIs and arXiv links until real identifiers exist.

**W-06 · MAJOR · number of instances and domains (self-contradictory) · VERIFIED**
- The counts given, by location:

  | Location | Count given |
  |---|---|
  | `programme.ts:9`, `CoverLetter.tsx:47, 129` | "Four instances across three domains" |
  | `PaperDetail.tsx:48` | "three proven instances across three independent domains" (matching p01.tex:76, whose list actually names BV, cascade, AEP, channel coding and Kolmogorov) |
  | `Home.tsx:179, 236–240` | "found six times, in six different domains"; "SIX PROVEN INSTANCES … Four. Five. Six Faces" |
  | `Preprints.tsx:183, 185`, `programme.ts:108` | "sixth instance" |
  | `PaperDetail.tsx:857` | "The DFT result … adds a **seventh** proven instance" |
  | `EssayDetail.tsx:743, 852` | "seven places, not six"; "Seven papers. Six domains." |

- The two "six" lists also differ:
  - Home: Khayyam, Kolmogorov, Shannon, **Pascadi**, **Wakil**, DFT. It splits one result into "analytic NT" and "algebraic NT" and omits LOS.
  - EssayDetail:772–829 and CoverLetter:78: prime arithmetic, Shannon, Kolmogorov, DFT, Khayyam, **LOS**.
- Time spans also disagree: "a millennium" (`Home.tsx:179, 240`) versus "five centuries" (`EssayDetail.tsx:41, 1043, 1054`; `CoverLetter.tsx:75`).
- Fix: use one list, without Kolmogorov or Pascadi.

**W-07 · MAJOR · Hausdorff dimension and the "void pattern" · VERIFIED** (see A-05)
- Quotes:
  - `PaperDetail.tsx:209` "Hausdorff dimension log(p+1)/log(p). For p = 3: … ≈ 1.262";
  - `EssayDetail.tsx:123` same;
  - `EssayDetail.tsx:818` "θ = log(4)/log(3)", given as Khayyam's "constant". This value (1.26) is not in (0,1), the range the programme and the Lean `theta_in_range` require for a governing constant;
  - `PaperDetail.tsx:213` "The Sierpiński void pattern at scale 3^K matches, entry for entry, the count of invalid configurations in a K-level cascade sieve."
- What is wrong:
  - The correct values are log 6/log 3 ≈ 1.631 and 6^K survivors.
  - The voids number 3^K(3^K+1)/2 − 6^K, which is unrelated to K.
- Fix: correct the formula and delete the "entry for entry" claim.

**W-08 · MAJOR · `PaperDetail.tsx:822, 825` · VERIFIED**
- Quote: "Khayyam's Triangle modulo 2 has void fraction exactly 1/2 as rows grow (by Lucas's theorem: half the binomial coefficients are even in the limit)"; "θ_Khayyam,2 = 1/2 be the mod-2 survivor fraction"
- What is wrong: the odd fraction in the first 2^m rows is 3^m/(2^m(2^m+1)/2), which tends to 0. The void fraction tends to **1**.
- Evidence: computed void fractions are 0.40, 0.65, 0.80 and 0.89 at 16, 64, 256 and 1024 rows. p09.tex:476–481 claims 1/2, its formula gives 1/3, and its own proof (p09.tex:510–515) says the survival fraction tends to 0.
- Fix: withdraw the "Khayyam Bridge".

**W-09 · MAJOR · Sophie Germain · VERIFIED**
- Quote: `PaperDetail.tsx:96` (P01 page) "exhibit Constitutional Forcing of depth k = 2 … mod-3 residue of 2p+1 is determined by that of p … Confirmed computationally."
- What is wrong:
  - This contradicts p01.tex:466–486, which uses mod-2 conditions and an effective depth **k = 1**.
  - It matches p03, p05 and p06 instead (see X-02).
  - Since θ₁ = θ₂ = 1/2 = BV, the "prediction" cannot distinguish anything, so it is not a falsification test.
  - The level of distribution of Sophie Germain pairs cannot be "confirmed computationally".
- Also at: `PaperDetail.tsx:287–289, 470`, `EssayDetail.tsx:294–295`, `CoverLetter.tsx:90`.

**W-10 · MAJOR · `PaperDetail.tsx:442–443` · VERIFIED**
- Quote: "Remark 4.3 — The 12% Discrepancy: Pattern density overestimates configuration density by approximately 12% … predictions that were systematically 12% too high."
- What is wrong: the sign is reversed and the size is wrong. Pattern density 416/729 ≈ 0.571 is *below* 5/8 = 0.625, by 8.7% or 9.5% depending on the base. p05.tex:336 and the Lean `density_discrepancy` both say pattern < config.

**W-11 · MAJOR · `PaperDetail.tsx:323, 336, 361, 674` · VERIFIED**
- Quote: "both the improvement from 1/2 to 2/3 (Part I) and from 2/3 to 5/8 (Part II)"; "improves the ceiling from 2/3 to 5/8"; "improving the ceiling by 1/8 to θ_W = 5/8".
- What is wrong: 5/8 < 2/3, so this is a decrease. 2/3 − 5/8 = 1/24, not 1/8. The Lean code instead uses 1/2 + 1/8 (A-11).

**W-12 · MAJOR · `PaperDetail.tsx:358` · VERIFIED**
- Quote: "|S(m, n; 3^K)| ≤ 2 · gcd(m,n,3^K)^{1/2} · (3^K)^{1/2−1/8}"
- What is wrong: the bound is false. Kloosterman sums to prime-power moduli have explicit evaluations of size about 2q^{1/2}.
- Evidence: |S(1,1;81)| = 17.78 > 2·81^{3/8} = 10.39; |S(1,1;6561)| = 162 > 54; |S(1,4;9)| = 5.64 > 4.56 (all with gcd = 1; `checks2.py`).
- Fix: delete. This also undermines p04 Prop 3.3 (refer to the p04 reviewer).

**W-13 · MAJOR · `PaperDetail.tsx:346` · VERIFIED**
- Quote: "x² + x + 1 ≡ (x+1)² (mod 3), since (−1)² + (−1) + 1 = 1 ≡ 1 ≢ 0 mod 3... wait: 1 − 1 + 1 = 1. Check: … These agree mod 3 since 2 ≡ −1."
- What is wrong:
  - Draft working notes ("wait:") are published inside a proof.
  - The factorisation is wrong: (x+1)² ≡ x² − x + 1 (mod 3). The correct statement is Φ₃ ≡ (x−1)² (mod 3).
- Fix: replace the proof with the correct factorisation.

**W-14 · MAJOR · p07 page · VERIFIED**
- Each claim and what is wrong with it:
  - `PaperDetail.tsx:670`: "(iii) unique CM field Q(√−3) with class number 1 … do not simultaneously hold for any other prime-power family".
    - Wrong: ℚ(√−7), ℚ(√−11), … (nine fields with class number 1) each ramify their own prime, and (ℤ/ℓ^K)ˣ is cyclic for every odd ℓ. Compare A-08.
  - `PaperDetail.tsx:646`: "χ(n) = Ψ_χ((n)) … L(s,Ψ_χ) = L(s,χ)·L(s,χε)".
    - The base-change character, which is the one that gives this factorisation, is Ψ = χ∘N. It satisfies Ψ((n)) = χ(n²), not χ(n). The two statements are incompatible.
  - `PaperDetail.tsx:638`: "Consequently, Watt's condition θ_f ≤ 7/32 holds".
    - Non sequitur: the absence of Siegel zeros says nothing about such an exponent.
  - `PaperDetail.tsx:625`: "closes the gap marked [NOTE] in the companion paper [4]".
    - p04.tex contains no "[NOTE]" (grep).
  - Whole page:
    - Mod 3^K the only real non-principal character is induced from χ₋₃, so the result is essentially trivial (fact 6).

**W-15 · MAJOR · p08 page / LOS · VERIFIED** (computed from consecutive primes ≤ 10⁷, `checks2.py`)
- Each claim and what is wrong with it:
  - `PaperDetail.tsx:731`: "For the pair (r, s) = (1, 1): both digits project to 1 mod 3 … For the pair (1, 3) = (1 mod 3, 0 mod 3): … this pair is constitutionally forbidden entirely."
    - A last digit does not determine the residue mod 3: of primes ending in 1, 83,003 are ≡ 1 and 83,101 are ≡ 2 (mod 3).
    - 1→3 is not forbidden: it occurred 51,623 times, at 1.24× the uniform rate, i.e. it is *enhanced*. p08.tex:346 itself says "Enhanced".
  - `PaperDetail.tsx:728`: "consecutive primes cannot both occupy the same ternary class in quick succession".
    - 43% of consecutive prime pairs share a class (e.g. 31, 37).
  - `PaperDetail.tsx:742`, `EssayDetail.tsx:912`, `CoverLetter.tsx:57`: the "snail's pace" is "the Siegel–Walfisz rate … O(1/(log N)^A) for any fixed A".
    - The LOS bias decays like (log log x)/log x, far slower than any 1/(log N)^A.
    - For fixed q = 3, the prime number theorem error is even smaller (e^{−c√log N}).
    - So the identification is wrong.

**W-16 · MAJOR · Shannon "θ" · VERIFIED**
- The site gives three different values for the same "instance":
  - `Home.tsx:270` "AEP + Channel Coding Theorem; θ₁ = 1/2";
  - `PaperDetail.tsx:577` "θ₁ = (2−1)/2 = 1/2 | θ₁ = 1/2 (binary channel)";
  - `EssayDetail.tsx:788` "θ = H / C".
- What is wrong:
  - p01.tex:392 says the AEP forced constant is θ₁ = H/log|A|, which is not 1/2 in general.
  - Binary-channel capacity 1 − h(p) ranges over [0, 1].
  - `EssayDetail.tsx:200, 208` ("θ_k … matches Shannon's entropy formula … exactly … as a mathematical limit") has no support in p06.

**W-17 · MAJOR · FFT compression · VERIFIED**
- Quote: `PaperDetail.tsx:833` "The 2× floor is constitutionally guaranteed regardless of the signal … achieves 2730× compression at 96% energy retention … a factor of 2 is constitutionally guaranteed"
- What is wrong:
  - By p09's own proof (p09.tex:227–245), the half-spectrum holds exactly N real numbers, the same as the input. There is no compression relative to the signal.
  - "Lossless" is incompatible with 96% energy retention.
  - "NFR" is expanded as "Neural Frequency Reduction" here but "Neural Fiber Representation" in p09.tex:605.
- Related wording: "θ_FFT = 1/2 is Bombieri-Vinogradov in the frequency domain" (`EssayDetail.tsx:1018`, `programme.ts:111`) and "Paper 09 provides the cleanest independent confirmation" (`CoverLetter.tsx:165`) are overstated.

**W-18 · MAJOR · history of the θ = 1/2 barrier · VERIFIED**
- Quotes and what is wrong with each:
  - `PaperDetail.tsx:243` "the 2,300-year-old barrier at θ = 1/2": the level-of-distribution 1/2 barrier dates from Bombieri–Vinogradov, 1965.
  - `PaperDetail.tsx:260` and `EssayDetail.tsx:269, 370` "two centuries of effort": same problem.
  - `PaperDetail.tsx:56` "For sixty years": wrong in the other direction (W-18 last bullet shows 1/2 was exceeded within about 50 years).
  - `EssayDetail.tsx:556` "For over two centuries, the best unconditional result … was θ = 1/2 — the Bombieri-Vinogradov theorem of 1965 … Zhang … Maynard … Polymath … All of it without touching the Bombieri-Vinogradov barrier."
    - The sentence contradicts itself (two centuries versus 1965).
    - Zhang and Polymath8a exceeded 1/2 for smooth moduli (1/2 + 7/300). p04.tex:107 itself cites 0.5233.
  - `EssayDetail.tsx:269` "for 2,300 years no one has known whether they [twin primes] ever stop": the twin prime conjecture dates from de Polignac, 1849.

**W-19 · MAJOR · screenplay and essay "verdict" · VERIFIED (text); whether the events happened is SUSPECT**
- Quotes:
  - `ConstitutionalProofScreenplay.tsx:615` "Based on actual events from November 22, 2025";
  - `:664` (named living mathematicians: Tao, Maynard, Green, Zhang, Matomäki, Radziwiłł, Pascadi);
  - Chapter Five "The Unanimous Verdict";
  - `EssayDetail.tsx:331` "I was on a Zoom call with eleven of the smartest mathematicians alive. Eight of them, at least.";
  - `EssayDetail.tsx:455` "Eleven votes. Unanimous.".
- What is wrong:
  - Real living researchers are presented as having reviewed and unanimously endorsed the proof. If this was a simulation or role-play, the page must say so.
  - The screenplay also contradicts the papers:
    - `:903–906` BV appears as a "binary" k = 2 cascade (4 − 2 = 2), whereas p01/p05/p06 put BV at k = 1;
    - `:919` "Quaternary: impossible. No four-fold weights." contradicts the k = 4 open prediction θ₄ = 3/4 that every paper makes;
    - `:862` "5/8 ← 8/5 = 1.6 → inverse = 5/8 ✓" is circular.

**W-20 · MINOR · year arithmetic · VERIFIED**
- "84 years" since 1941 (`PaperDetail.tsx:79`; `EssayDetail.tsx:835, 838, 839`; p01.tex:409, 447): 2026 − 1941 = 85.
- "77-year gap" (`programme.ts:70`; `PaperDetail.tsx:585`; `Preprints.tsx:125`): 2026 − 1948 = 78. `EssayDetail.tsx:174, 218, 221` makes it work by dating the cascade result to **2025**, contradicting "2026" in `Home.tsx:280`, `PaperDetail.tsx:555` and p06.tex:568.
- "Nine years" since LOS 2016 (`programme.ts:96`; `EssayDetail.tsx:908, 912, 913`; `CoverLetter.tsx:56–57`): 10 by 2026.
- `EssayDetail.tsx:335` "ninety-seven years after his death" (Ramanujan, d. 1920): the essay's own "combined total of two hundred and thirty-one years" (`:332`: 105 + 78 + 48) implies 2025, so it should be 105.
- `EssayDetail.tsx:455` "Hardy and Littlewood … seventy-eight years deceased": Littlewood died in 1977.

**W-21 · MINOR · programme numbering on the site versus the papers · VERIFIED**
- Quotes:
  - `PaperDetail.tsx:48` "nine-paper programme. The remaining eight papers" (p01.tex:93: "seven-paper program. The remaining six");
  - `PaperDetail.tsx:164` "second in the nine-paper" (p02.tex:31: "first in a six-paper");
  - `PaperDetail.tsx:784` "ninth in the nine-paper" (p09.tex:91: "third in the six-paper").
- The site's 01–09 order matches the repo directories but not any paper's internal numbering, nor the external registry (lead's fact 7: p05/p06 swapped; p09 = "Photonic Regimes"). See C.1.

**W-22 · MINOR · theorem numbers on the site do not match the papers · VERIFIED** (via `numbering.txt`)

| Site location | Site label | Paper's number |
|---|---|---|
| `PaperDetail.tsx:83` | "Theorem 4.1 — Counting Theorem" | p01 Thm 2.6 |
| `PaperDetail.tsx:95` | "Proposition 5.1 — Sophie Germain" | p01 Prop 4.1 |
| `PaperDetail.tsx:101` | "Conjecture 6.1" | p01 Conj 5.1 |
| `PaperDetail.tsx:66` | "Definition 2.2" | p01 Def 2.4 |
| `PaperDetail.tsx:341` | "Proposition 2.1 — Ramification" | p04 Prop 2.2 |
| `PaperDetail.tsx:351` | "Corollary 2.4 — Twin Primes" | p04 Cor 6.4 |
| `PaperDetail.tsx:448` | "Theorem 3.1 — Nested Constraint Count" | p05 Thm 3.4 |
| `PaperDetail.tsx:480` | "Conjecture 6.1" | p05 **Theorem** 6.1 |
| `PaperDetail.tsx:655` | "Theorem 2.1 — Stark–Baker" | p07 Thm 3.2 |
| `PaperDetail.tsx:669` | "Theorem 5.1" | p07 **Proposition** 5.1 |
| `PaperDetail.tsx:721` | "Theorem 3.1 — Constitutional Signature" | p08 Thm 3.2 |
| `PaperDetail.tsx:801` | "Theorem 3.2" | p09 Thm 3.1 |
| `PaperDetail.tsx:824` | "Theorem 6.1" | p09 **Proposition** 6.1 |

**W-23 · MINOR · `Preprints.tsx` highlights cite results that do not exist · VERIFIED** (grep across papers)
- Labels with no counterpart in the papers:
  - p01 (`:17–19`): "Definition 1.1" (actual 2.1); "Theorem 2.4: The Counting Theorem for Cascade Moduli" (actual 2.6, and it is general, not for cascade moduli); "Lemma 3.1: Kolmogorov-Shannon Equivalence" (no such lemma).
  - p02 (`:38–41`): "Theorem 1.2: Mod-3 Sierpiński Convergence", "Definition 2.1: The Khayyam Cascade", "Combinatorial Proof of Ternary Symmetry" (p02 has only Lemma 4.1 and Prop 4.2).
  - p03 (`:59`): "The Constitutional Axiom" (p03.tex:167 says the constitution is a theorem, not an axiom).
  - p04 (`:80`): "Theorem 4.1: θW = 5/8" (actual Theorem 1.1).
  - p05 (`:104`): "Ramanujan Identity Correspondences" (absent).
  - p06 (`:123, 125`): "Theorem 3.2: Shannon Capacity of the Integers", "Information-Theoretic Sieve Bounds" (absent).
  - p07 (`:145`): "L-function Non-vanishing at s=1" (the paper is about real zeros near 1).
  - p08 (`:166`): "Theorem 2.2: The Unbidden Result" (absent).
  - p09 (`:186–187`): "Theorem 5.1: DFT Conjugate Symmetry as Forcing", "Fourier Spectrum of Riemann Zeros" (absent; "Riemann" does not occur in p09.tex).

**W-24 · MINOR · dates · VERIFIED**
- Mismatches between the site and the `\date` in each paper:

  | Paper | Paper's `\date` | Site |
  |---|---|---|
  | p02 | January 2026 | `Preprints.tsx:34` "Feb 2026" (`PaperDetail.tsx:157` correctly says January) |
  | p06 | February 2026 | `Preprints.tsx:118` "Mar 2026"; `PaperDetail.tsx:516` "Submitted March 2026" |
  | p07 | February 2026 | `Preprints.tsx:139` "Mar 2026" |
  | p08 | March 2026 | `PaperDetail.tsx:701` "Submitted February 2026" |

**W-25 · MINOR · reference metadata · VERIFIED (standard bibliographic facts)**
- Wrong author initials:
  - "V. Bombieri" should be E. Bombieri (`PaperDetail.tsx:133, 387, 494`);
  - "A. Watt" should be N. Watt (`:389, 681`);
  - "H. Goldfeld" should be D. Goldfeld (`:683`);
  - "E. C. Walfisz" should be A. Walfisz (`:757`).
- Pascadi's title is wrong (W-03, X-07).
- p02.tex:71 attributes the triangle to Khayyam's *algebra* treatise and cites al-Tūsī's *Sharḥ al-ishārāt*. The al-Tūsī text normally cited for the triangle is *Jawāmiʿ al-ḥisāb* (SUSPECT; refer to the p02 reviewer).

**W-26 · MINOR · history of the triangle · SUSPECT**
- Quotes: `PaperDetail.tsx:187, 191` and `EssayDetail.tsx:69`: "~1070 Omar Khayyam — First documented appearance"; "1523 Petrus Apianus — 131 years before Pascal"; "584 years before Pascal published anything".
- What is wrong:
  - Al-Karajī (c. 1000) and Jia Xian (c. 1050) predate Khayyam.
  - Apianus's book appeared in 1527.
  - Pascal published in 1640 (*Essai pour les coniques*).
  - `EssayDetail.tsx:80` quotes Khayyam's year length to 11 decimal places (365.24219858156); historians regard this precision as spurious.

**W-27 · MINOR · `programme.ts` paper↔essay pairing · VERIFIED**
- `essayTitle` and `essayUrl` attach each essay to a paper by index (rendered in `Script.tsx:51–55`), which gives topically mismatched pairs:
  - Paper 01 (CF) ↔ "Khayyam's Triangle";
  - Paper 02 (Khayyam) ↔ "The Shannon-Wakil Effect";
  - Paper 04 (Eisenstein) ↔ "Once Upon a Napkin: A Tribute to Ramanujan";
  - Paper 06 (Shannon–Wakil) ↔ "The Stepping Stones: … Condition W3" (`programme.ts:72` teaser is about W3);
  - Paper 07 (W3) ↔ "The Seventh Domain: Constitutional Forcing: The Mechanism Named".

**W-28 · MINOR · inconsistent descriptions of the "constraints" · VERIFIED**
- BV's single constraint:
  - `PaperDetail.tsx:73`: "each progression must be coprime to its modulus";
  - p01.tex:317: "primality itself".
- The three cascade constraints:
  - `PaperDetail.tsx:76`: coprimality, ramification, cyclic group;
  - `PaperDetail.tsx:377`: coprime (level 0), 𝔭-orbits (level 1), Kloosterman-stable (level 2);
  - p01.tex:347–356: survival mod 3, 9, 27. Per fact 3, the mod 9 and mod 27 conditions add nothing.
- `PaperDetail.tsx:377, 434` (and p05.tex:139) call 2³ = 8 configurations "8 dimensions".

**W-29 · MINOR · README.md:25–29 · VERIFIED**
- Quote: "Fluid Dynamics: Investigating connections to Kolmogorov's turbulence exponents."
- What is wrong:
  - The README hedges where the site asserts "PROVED" and "first structural derivation".
  - "Explaining the Bombieri-Vinogradov theorem" overstates.
  - The README makes no mention of the Lean code (fine).

---

## C. Cross-paper consistency

### C.1 How each source numbers and titles the programme

Entries give the number each source assigns to the work in that row; "self" marks the source's own paper.

| Work (repo dir) | p01.tex table (541–574) | p02:31 | p03:133 | p04:159 | p05:173 | p06:187 | p08 bib (717–727) | p09:91, 623–640 | Website | Registry (fact 7) |
|---|---|---|---|---|---|---|---|---|---|---|
| Constitutional Forcing (p01) | **00** (self) | — | — | — | — | — | Paper 00–06 series [Wakil26] | not listed | 01 | p01 |
| Khayyam's Triangle (p02) | 01 | "first" of 6 (self) | cited | cited | cited | cited | — | Paper 1 | 02 | p02 |
| Spherical Cow (p03) | 02 | cited | self: "companion to a five-paper arithmetic program" | cited | cited | cited | "Paper 02" | cited, unnumbered | 03 | p03 |
| Eisenstein (p04) | **05** | cited | cited | "fifth" of 6 (self) | cited | cited | — | Paper 4 | 04 | p04 |
| Ramanujan (p05) | **04** | cited | cited | cited | "fourth" of 6 (self) | cited | — | Paper 2 | 05 | **p06** |
| Shannon–Wakil (p06) | **03** | cited | cited | cited | cited | "third" of 6 (self) | — | Paper 6 | 06 | **p05** |
| Condition W3 (p07) | 06 | cited | cited | cited | cited | cited | — | Paper 5 | 07 | p07 |
| Prime-digit bias (p08) | absent | — | — | — | — | — | self (not in "00–06") | absent | 08 | p08 |
| θ_FFT (p09) | absent | — | — | — | — | — | — | **"third" of 6 / "Paper 3"** (self) | 09 | p09 = "Photonic Regimes" |
| **Programme size** | 7 | 6 | 5 + methodology | 6 | 6 | 6 | 7 (00–06) | 6 (cites 7 works) | 9 | 9 |

### C.2 Depth k assigned to each instance

| Instance | p01 | p03 | p05 | p06 | p09 | Website | Lean |
|---|---|---|---|---|---|---|---|
| Bombieri–Vinogradov | k=1, constraint "primality" (317) | — | k=1 | k=1 | — | k=1, constraint "coprimality" (PD:73); **k=2 "binary cascade"** in screenplay :903 | k=1 |
| Cascade / twin primes | k=3; levels mod 3, 9, 27 (347–356) | k=3 | k=3 (Ex 3.3) **and** k=5 "twin prime threshold" (Conj 6.5; 596, 639) | k=3 | — | k=3, with three different constraint lists (W-28) | k=3 |
| Khayyam's triangle | **k=3**, "oldest known instance" (557) | — | "K-level", 2^K−K valid (Prop 2.3) | — | p=2 bridge, θ=1/2 | PD:849 k=3, θ=5/8; ED:818 θ=log4/log3 | no k; 4^K survivors (wrong) |
| Shannon AEP / channel | k=1, but θ₁ = **H/log\|A\|** (392); table gives the SW paper "k=1,3" (564) | — | — | no k; constants H, C | — | θ₁ = 1/2 (Home:270, PD:577); θ = H/C (ED:788) | not encoded |
| Kolmogorov | **k=2 on a base of 8**, giving 6/8 (438) | — | — | — | — | k=2: "(4−2)/4 = 3/4" (PD:79); 6/8 (ED:837) | not encoded |
| Sophie Germain | **k=1** (mod 2 conditions, 466–486) | **k=2** (mod 3, 494) | **k=2**, but caption says "reduce to one independent level" (628–636) | **k=2** (452–460) | — | k=2 (PD:96, 287, 470; ED:294) | **k=1** (P01:154 and P06:56; contradicts p06.tex) |
| DFT θ_FFT | — | — | — | — | **none assigned** | k=1 (PD:784, 818) | k=1 (`khayyam_bridge`) |
| LOS bias (p08) | — | — | — | — | — | PD:853 k=1, "1/2 (base)"; ED:828 "θ = mod 3" | none |
| Pascadi 2025 | "increase depth to k=3 by restricting to cascade moduli" (330) | — | k=3 special case (86, 125, 533) | — | — | k=3 special case | report "θ₃ (Pascadi/Wakil)" |

### C.3 Status each source gives θ₃ = 5/8 for cascade moduli

| Source | Status claimed |
|---|---|
| p01 | "established" by [WakilEisenstein]; uniqueness "proved in Theorem 5.1" of p04; "established in 2025–2026 [Pascadi2025, WakilEisenstein]" (129–130) |
| p02 | "proved in the companion papers"; W3 "established independently" |
| p03 | "proved result" (164); W3 "verified" in p07; extending to the GPY family is "[Open]" |
| p04 | Theorem 1.1 stated **without** condition; App. A defines **W3 as "θ_f ≤ 7/32"** ✓ via p07 (514–546); "Sharpness follows from the matching lower bound in Pascadi" (412); "independent confirmation" (561) |
| p05 | "[Proved] … **subject to Condition W3**" (96, 162); table: "Pascadi 2025; Thm 5.7 — **Two independent proofs**" (572); "Proved (Pascadi; Thm.)" (637) |
| p06 | "Proven (cascade moduli)" (492); "no unconditional result achieves θ > θ_W" (148) |
| p07 | "renders … **unconditional**"; "closes the gap marked [NOTE] in Appendix A" of p04 (72–74, 605–609). No [NOTE] exists in p04. W3 is defined as "no real zero σ > 1 − c/log q" |
| p08 | "establishes θ_W = 5/8" (591) |
| p09 | uses it as given |
| Website | "PROVED (UNCONDITIONAL VIA PAPER 07)" (programme.ts:44); "Proved (conditional W3)" (PD:119); "PROVED" (Preprints:77); "subject to Condition W3 (proved unconditionally in [7])" (PD:368); Pascadi 2025 and Wakil 2026 listed as two instances (Home:273–282); "Cascade Moduli, 2025" (ED:174) |
| Lean | `theta_3`, `cascade_forced` (arithmetic), `geometric_pillar_theta3` (axiom that is arithmetic), `main_theorem_cascade` (1/2 + 1/8 = 5/8) |

### C.4 Pascadi arXiv:2505.00653 bibliography entries

| Source | Title given |
|---|---|
| p01:656, p03:721, p04:600, p05:714, p06:648, p07:665 | "Level of distribution 5/8 for smooth moduli" |
| p08:710–715 | "Primes with Beatty and Chebotarev conditions, and a note on Selberg's sieve" |
| PaperDetail.tsx:138 | "Primes with restricted digits and large gaps between primes" |
| Actual (fact 4) | "On the exponents of distribution of primes and smooth numbers" |

### C.5 Findings

**X-01 · CRITICAL · programme numbering is incompatible across sources (C.1) · VERIFIED**
- Quotes: p01.tex:542 "Paper~00 of a seven-paper program"; p06.tex:187 and p09.tex:91 both "the third in a/the six-paper program"; p03.tex:133 "companion to a five-paper arithmetic program"; p08.tex:721 "Seven-paper series: Papers 00–06"; p08.tex:726 Spherical Cow = "Paper 02".
- What is wrong:
  - Two papers both claim to be "third".
  - p01 places Shannon–Wakil at 03 and Eisenstein at 05; the repo has them at p06 and p04.
  - The registry swaps p05 and p06, and its p09 is a different paper.
- Fix: adopt one numbering and update every "Position in the program" section.

**X-02 · CRITICAL · Sophie Germain depth contradicts itself (C.2) · VERIFIED**
- What is wrong:
  - p01 (466–486, Prop 4.1): mod-2 conditions, effective depth k=1, θ₁.
  - p03 (494–500), p05 (636), p06 (452–460, Theorem 7.1): k=2 via mod-3 coupling, θ₂; "reduces effective k from 3 to 2" (p06:469–470, p03:508).
  - p05's table caption (628) says coupling "reduce[s] to one independent constraint level" (k=1) but lists k=2.
  - The mod-3 "coupling" claim ("both satisfy p ≡ 2 (mod 3)") holds trivially for any p ≡ 2, since 2p+1 ≡ 2 (mod 3).
  - Because θ₁ = θ₂ = 1/2, neither version is a falsifiable prediction.
  - p06.tex:452 cites `\cite[Theorem~7.1]{WakilShannon}`, which is p06 itself, and **`WakilShannon` has no bibitem in p06** (bib at p06:626–684), so the reference is undefined.
- Fix: choose one account; remove the "confirmed non-instance" language.

**X-03 · CRITICAL · Condition W3 has two definitions and a phantom gap (C.3) · VERIFIED**
- Quotes: p04.tex:514 "Condition W3 (Absence of Siegel zeros, θ_f ≤ 7/32)"; p07.tex:116–120 "(W3) No Siegel zeros … no real zero in σ > 1 − c/log q"; p07.tex:72–74 "closes the gap marked [NOTE] in Appendix A of the companion paper"
- What is wrong:
  - The same label names two different conditions.
  - p04 contains no "[NOTE]". Its App. A already ticks W3 by citing p07, so the dependency is circular in the current versions.
  - p05 says "subject to W3"; p07 says "unconditional"; the website has three versions.
  - Per fact 6, W3 as stated in p07 is essentially trivial for 3^K.

**X-04 · MAJOR · Kolmogorov appears only in p01 and violates p01's own definition · VERIFIED**
- Quote: p01.tex:421–438 "(CF1): … configuration space of size 2^3 = 8 … (CF2): Two constitutional constraints … θ₂ = (2^3 − 2)/2^3 = 6/8 = 3/4"
- What is wrong:
  - Definition 2.4 (CF1) requires |C_k| = 2^k. Remark 3.5 (446–456) rationalises the clash after the fact.
  - p01's abstract says "three proven instances across three independent domains" but lists prime arithmetic (k=1, k=3), information theory and fluid dynamics.
  - The acknowledgements (634–636) count Shannon as two instances and Kolmogorov as "a third".
  - No other paper (p05/p06 hierarchy tables) contains a k=2 Kolmogorov instance. p05 and p06 list k=2 as the Sophie Germain non-instance at 1/2, so the papers assign k=2 both 3/4 and 1/2.
  - See fact 1.

**X-05 · MAJOR · twin primes are placed at k=3 and at k=5 · VERIFIED**
- Quotes: p05.tex:259 "Example [Twin primes, k=3]"; p05.tex:637 "3 | 5/8 | Twin primes; cascade moduli"; p05.tex:596–600 "Conjecture [Twin prime threshold] θ₅ = 27/32 … would imply … twin primes"; p05.tex:639 "5 | 27/32 | 5-element constellation | Conjectured (twin prime threshold)"
- What is wrong:
  - p03.tex:419–423 says any θ > 1/2 over a broad family suffices.
  - The screenplay (:919) says 5/8 is "PRECISELY sufficient".
  - These are three incompatible thresholds, and all three are false (W-04).

**X-06 · MAJOR · the role of Khayyam's triangle is inconsistent, and its central count is false · VERIFIED**
- The accounts that disagree:
  - p01:557 calls it the oldest instance, at k=3.
  - p05 Prop 2.3 (203–222) says the mod-3 pattern "partitions configurations … exactly 2^K − K valid … exactly K invalid".
  - p02:119 says "the Sierpiński void pattern at scale 3^K matches exactly the count of invalid configurations".
  - p09 uses p=2 with θ = 1/2.
  - The website (ED:818) gives θ = log4/log3.
- Evidence:
  - The real count is 6^K survivors (A-05).
  - The voids number 3^K(3^K+1)/2 − 6^K: 0, 9, 162, … for K = 1, 2, 3. That is never K and never 2^K − K.
  - p05's proof of Prop 2.3 never uses Lucas's theorem in the counting step.

**X-07 · MAJOR · Pascadi is cited under three different wrong titles and in four different roles (C.4) · VERIFIED**
- The roles assigned:
  - p01:330: Pascadi "increase[s] depth to k = 3 by restricting to cascade moduli";
  - p04:412: "matching lower bound … for smooth moduli, which includes 3^K";
  - p04:561: "independent confirmation";
  - p05:572: "two independent proofs";
  - p03:430: an avenue for combining.
- None matches the actual paper (fact 4).

**X-08 · MAJOR · broken cross-references · VERIFIED** (via `numbering.txt`)
- p04.tex:414 cites "[WakilRamanujan], Proposition 5.2, for the matching configuration density". p05's Prop 5.2 is "Ramification of 3"; configuration density is Prop 3.5.
- p06.tex:452 has an undefined citation (X-02).
- Checked and correct: p03's cross-references (Thm 1.1 and Cor 2.5 of p04; Thm 3.4 and Prop 2.3 of p05; Thm 7.1 of p06) and p05's reference to p03 §4.3.

**X-09 · MAJOR · p07's specificity argument contains a false arithmetic step · VERIFIED**
- Quote: p07.tex:520 "The prime 2 splits in K (since −3 ≡ 1 (mod 8))"
- What is wrong:
  - −3 ≡ 5 (mod 8), so 2 is **inert** in ℚ(√−3): x²+x+1 is irreducible mod 2.
  - The proof (507–525) also fixes the field ℚ(√−3) for every ℓ instead of using ℚ(√−ℓ). It concedes "a separate argument would be required for each ℓ", which contradicts the proposition's "no other prime-power family".
  - See A-08 and W-14.

**X-10 · MAJOR · p09 contradicts itself on the mod-2 void fraction · VERIFIED**
- Quote: p09.tex:476–481 "void fraction → 1 − 1/p^{d_p−1}. For p = 2 this gives void fraction → 1/2"
- What is wrong:
  - The formula gives 1 − 2/3 = 1/3, not 1/2.
  - The proof at 510–513 states that the survival fraction tends to 0, i.e. the void fraction tends to 1.
  - The website repeats "exactly 1/2" (W-08).

**X-11 · MAJOR · arithmetic of the 2/3 → 5/8 step differs by source · VERIFIED**
- The versions:
  - p04 abstract: "first ceiling θ ≤ 2/3 … improving the ceiling by 1/8 to θ = 5/8";
  - p05.tex:450 "Part II: Cyclic group structure improves 2/3 to 5/8";
  - Lean: 1/2 + 1/8;
  - website: "from 2/3 to 5/8" described as an improvement.
- No two of these agree. 5/8 is below 2/3, so it is not an improvement. See W-11 and A-11.

**X-12 · MINOR · age of the θ = 1/2 barrier · VERIFIED**
- p05.tex:114 "nearly six decades"; p03.tex:68 "two centuries"; PaperDetail:56 "sixty years"; PaperDetail:243 "2,300-year-old".
- Bombieri–Vinogradov dates from 1965, and Zhang (2013) and earlier Fouvry–Iwaniec / BFI results went beyond 1/2 in restricted settings.

**X-13 · MINOR · p06.tex:565–569 "77-year gap" alongside "established in 2026" · VERIFIED**
- 2026 − 1948 = 78.

**X-14 · MINOR · the Counting Theorem is circular as stated in p01 · VERIFIED**
- p01's Definition 2.4 (CF3) already *stipulates* "number exactly 2^k − k" (p01.tex:215–217).
- Theorem 2.6 claims to derive (CF3) from (CF1)–(CF2) (p01.tex:238–240), with the miscounted induction (fact 2).
- p05 labels it "[Proved]" (p05:152). Lean proves it by `rfl` (A-01). Every source inherits the same gap.

**X-15 · MINOR · empirical "validation" of θ₄ and θ₅ in p05 conflicts with the website and with the concept · VERIFIED (internal), SUSPECT (method)**
- Quote: p05.tex:574–577 "4 | 3/4 | — | 0.749 ± 0.003 | Computational; 5 | 27/32 | — | 0.843 ± 0.004 … from prime distribution over [2, 10^6] in cascade moduli"
- What is wrong:
  - A level of distribution is an asymptotic exponent and cannot be measured to ±0.003 from primes up to 10^6.
  - The website calls k=4 and k=5 "Predicted (open)" (PD:472–473), while p06 calls k=5 "Conjectured" (p06:494). Refer to the p05 reviewer.

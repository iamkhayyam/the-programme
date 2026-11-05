/-
  Paper 02 — Khayyam's Triangle: Historical Restoration and the
             Geometry Hidden in the Numbers
  Khayyam Wakil, January 2026

  Lean 4 formalisation, revised November 2026.

  What this file contains:
    1. Lucas's criterion: C(n,k) ≢ 0 (mod p) iff the base-p digits of k are
       dominated by those of n. The criterion is assumed as an axiom
       (`lucas_theorem`); Mathlib proves Lucas's theorem in product form
       (`Choose.choose_modEq_prod_range_choose_nat`), from which the
       criterion follows, but that derivation is not carried out here.
    2. Exact counts of the entries not divisible by 3 in the first 3 and
       first 9 rows: 6 and 36, i.e. 6^K for K = 1, 2 (by computation).
    3. The Hausdorff dimension of the mod-p Pascal fractal, defined
       correctly as log(p(p+1)/2)/log p, with its values for p = 2, 3.

  Corrections from the April 2026 version:
    * The dimension was defined as log(p+1)/log p, which is right only for
      p = 2. For p = 3 the correct value is log 6/log 3 ≈ 1.631, which is
      LARGER than the mod-2 value log 3/log 2 ≈ 1.585. The axiom
      `mod3_smaller_than_mod2` asserted the opposite and has been removed.
    * `ternary_survivor_count` proved only 4^K = (3+1)^K; the true count of
      survivors in the first 3^K rows is 6^K. It has been replaced.
    * The empty axiom `sierpinski_self_similarity` (∃ copies, copies = …)
      and the unrelated arithmetic `mod3_configuration_count` (8 − 3 = 5)
      have been removed. Nothing in the fractal counts "k invalid
      configurations out of 2^k".
-/

import Mathlib.Tactic
import Mathlib.Analysis.SpecialFunctions.Log.Basic

-- ════════════════════════════════════════════════════════════════════════════
-- Section 1: Base-p Digit Representation
-- ════════════════════════════════════════════════════════════════════════════

/-- Extract the i-th digit of n in base p. -/
def baseDigit (p : ℕ) (n : ℕ) (i : ℕ) : ℕ :=
  (n / p ^ i) % p

/-- The digit-wise domination condition: k_i ≤ n_i for all i in base p. -/
def digitDominates (p : ℕ) (n k : ℕ) : Prop :=
  ∀ i : ℕ, baseDigit p k i ≤ baseDigit p n i

-- ════════════════════════════════════════════════════════════════════════════
-- Section 2: Lucas's Theorem (Lemma 4.1 of Paper 02)
-- ════════════════════════════════════════════════════════════════════════════

/-- **Lucas's criterion** (É. Lucas, 1878), assumed here.
    C(n,k) ≡ 0 (mod p) iff digit domination fails. A standard, true result;
    Mathlib proves the product form of Lucas's theorem
    (`Choose.choose_modEq_prod_range_choose_nat`). -/
axiom lucas_theorem (p : ℕ) (hp : Nat.Prime p) (n k : ℕ) (hk : k ≤ n) :
  (Nat.choose n k) % p = 0 ↔ ¬ digitDominates p n k

/-- **Non-vanishing criterion** (from `lucas_theorem`):
    C(n,k) ≢ 0 (mod p) iff the digits of k are dominated by those of n. -/
theorem binom_nonzero_mod_iff (p : ℕ) (hp : Nat.Prime p) (n k : ℕ) (hk : k ≤ n) :
    (Nat.choose n k) % p ≠ 0 ↔ digitDominates p n k := by
  constructor
  · intro h
    by_contra hnd
    exact h ((lucas_theorem p hp n k hk).mpr hnd)
  · intro hd h
    exact absurd hd ((lucas_theorem p hp n k hk).mp h)

-- ════════════════════════════════════════════════════════════════════════════
-- Section 3: Survivor counts (Proposition 4.2)
-- ════════════════════════════════════════════════════════════════════════════

/-- The set of surviving entries in Khayyam's Triangle mod p up to row N. -/
def survivors (p : ℕ) (N : ℕ) : Set (ℕ × ℕ) :=
  { pos | pos.1 ≤ N ∧ pos.2 ≤ pos.1 ∧ (Nat.choose pos.1 pos.2) % p ≠ 0 }

/-- Number of entries C(n,k), 0 ≤ k ≤ n < R, that are not divisible by p. -/
def survivorCount (p R : ℕ) : ℕ :=
  ∑ n ∈ Finset.range R, ((Finset.range (n + 1)).filter (fun k => Nat.choose n k % p ≠ 0)).card

/-- In the first 3 rows, 6 = 6¹ entries are not divisible by 3. -/
theorem survivorCount_three_rows : survivorCount 3 3 = 6 := by decide

/-- In the first 9 rows, 36 = 6² entries are not divisible by 3
    (not 4² = 16, as the April 2026 version claimed). -/
theorem survivorCount_nine_rows : survivorCount 3 9 = 36 := by decide

/-- In the first 4 rows, 9 = 3² entries are odd (the mod-2 case). -/
theorem survivorCount_mod_two : survivorCount 2 4 = 9 := by decide

-- ════════════════════════════════════════════════════════════════════════════
-- Section 4: Hausdorff dimension
-- ════════════════════════════════════════════════════════════════════════════

/-- **Hausdorff dimension** of the mod-p Pascal (Sierpiński-type) fractal:
    log(p(p+1)/2) / log p, since the first p^m rows contain (p(p+1)/2)^m
    entries not divisible by p. -/
noncomputable def hausdorffDim (p : ℕ) : ℝ :=
  Real.log ((p * (p + 1) / 2 : ℕ) : ℝ) / Real.log (p : ℝ)

/-- For p = 2: log 3 / log 2 ≈ 1.585 (the classical Sierpiński triangle). -/
theorem hausdorffDim_two : hausdorffDim 2 = Real.log 3 / Real.log 2 := by
  norm_num [hausdorffDim]

/-- For p = 3: log 6 / log 3 ≈ 1.631 — larger than the mod-2 value. -/
theorem hausdorffDim_three : hausdorffDim 3 = Real.log 6 / Real.log 3 := by
  norm_num [hausdorffDim]

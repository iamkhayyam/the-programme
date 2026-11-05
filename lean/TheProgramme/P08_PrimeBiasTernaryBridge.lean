/-
  Paper 08 — The Lemke Oliver-Soundararajan Bias as Surface Evidence
             of Ternary Constitutional Structure
  Khayyam Wakil, March 2026

  Lean 4 formalisation, revised November 2026.

  What this file proves:
    1. Every prime p > 3 has p mod 3 ≠ 0.
    2. Twin primes p > 3 have p ≡ 2 and p + 2 ≡ 1 (mod 3).
    3. Facts about the 4×4 table of minimum gaps between the last decimal
       digits of consecutive primes: the table equals the formula
       (b − a) mod 10 (10 when a = b), same-digit transitions have the
       largest minimum gap (10), and 9→1, 7→9, 1→3 have minimum gap 2.

  What this file does NOT formalise: any frequency of prime last-digit
  transitions, the Lemke Oliver–Soundararajan bias, or a mechanism for it.
  The minimum-gap facts are arithmetic about digits; they do not show that
  the bias is caused by gap size. Note also that the last decimal digit of
  a prime does not determine its residue mod 3. The April 2026 version
  included three `True` axioms (Dirichlet equilibrium, "snail's pace is
  Siegel–Walfisz", base independence); they have been removed.
-/

import Mathlib.Tactic
import Mathlib.Data.Nat.Prime.Basic

-- ════════════════════════════════════════════════════════════════════════════
-- Section 1: Constitutional Classes Modulo 3
-- ════════════════════════════════════════════════════════════════════════════

inductive TernaryClass where
  | forbidden | classI | classII
  deriving Repr, DecidableEq

def ternaryClass (n : ℕ) : TernaryClass :=
  match n % 3 with
  | 0 => .forbidden
  | 1 => .classI
  | 2 => .classII
  | _ => .forbidden

/-- Every prime p > 3 avoids the Forbidden Class. -/
theorem prime_avoids_forbidden (p : ℕ) (hp : Nat.Prime p) (hgt : p > 3) :
    ternaryClass p ≠ .forbidden := by
  simp [ternaryClass]
  intro h
  have : p % 3 = 0 := by
    match hm : p % 3 with
    | 0 => rfl
    | 1 => simp [hm] at h
    | 2 => simp [hm] at h
    | n + 3 => exact absurd hm (by omega)
  have : 3 ∣ p := Nat.dvd_of_mod_eq_zero this
  have := hp.eq_one_or_self_of_dvd 3 this
  omega

-- ════════════════════════════════════════════════════════════════════════════
-- Section 2: Twin Prime Ternary Signature
-- ════════════════════════════════════════════════════════════════════════════

/-- Twin prime signature: p ≡ 2 (mod 3) and p+2 ≡ 1 (mod 3). -/
theorem twin_prime_ternary_signature (p : ℕ) (hp : Nat.Prime p) (hp2 : Nat.Prime (p + 2))
    (hgt : p > 3) :
    ternaryClass p = .classII ∧ ternaryClass (p + 2) = .classI := by
  constructor
  · simp [ternaryClass]
    have : p % 3 ≠ 0 := by
      intro h; have := Nat.dvd_of_mod_eq_zero h
      have := hp.eq_one_or_self_of_dvd 3 this; omega
    have : p % 3 ≠ 1 := by
      intro h
      have : (p + 2) % 3 = 0 := by omega
      have := Nat.dvd_of_mod_eq_zero this
      have := hp2.eq_one_or_self_of_dvd 3 this; omega
    match hm : p % 3 with
    | 0 => contradiction
    | 1 => contradiction
    | 2 => rfl
    | n + 3 => exact absurd hm (by omega)
  · simp [ternaryClass]
    have hp2mod : p % 3 = 2 := by
      have : p % 3 ≠ 0 := by
        intro h; have := Nat.dvd_of_mod_eq_zero h
        have := hp.eq_one_or_self_of_dvd 3 this; omega
      have : p % 3 ≠ 1 := by
        intro h; have : (p + 2) % 3 = 0 := by omega
        have := Nat.dvd_of_mod_eq_zero this
        have := hp2.eq_one_or_self_of_dvd 3 this; omega
      omega
    have : (p + 2) % 3 = 1 := by omega
    simp [this]

-- ════════════════════════════════════════════════════════════════════════════
-- Section 3: Minimum Gap Structure
-- ════════════════════════════════════════════════════════════════════════════

inductive TerminalDigit where
  | d1 | d3 | d7 | d9
  deriving Repr, DecidableEq

/-- Minimum even gap from digit d₁ to digit d₂. -/
def minGap : TerminalDigit → TerminalDigit → ℕ
  | .d1, .d1 => 10  | .d1, .d3 => 2   | .d1, .d7 => 6   | .d1, .d9 => 8
  | .d3, .d1 => 8   | .d3, .d3 => 10  | .d3, .d7 => 4   | .d3, .d9 => 6
  | .d7, .d1 => 4   | .d7, .d3 => 6   | .d7, .d7 => 10  | .d7, .d9 => 2
  | .d9, .d1 => 2   | .d9, .d3 => 4   | .d9, .d7 => 8   | .d9, .d9 => 10

/-- Numeric value of a terminal digit. -/
def TerminalDigit.val : TerminalDigit → ℕ
  | .d1 => 1 | .d3 => 3 | .d7 => 7 | .d9 => 9

/-- The table is the formula: the minimum gap from last digit a to last
    digit b is (b − a) mod 10, or 10 when a = b. -/
theorem minGap_formula : ∀ a b : TerminalDigit,
    minGap a b = if a = b then 10 else (b.val + 10 - a.val) % 10 := by
  intro a b
  cases a <;> cases b <;> decide

-- ════════════════════════════════════════════════════════════════════════════
-- Section 4: Minimum-gap facts
-- ════════════════════════════════════════════════════════════════════════════

/-- Same-digit transitions have the largest minimum gap (10). -/
theorem diagonal_has_max_gap :
    ∀ d : TerminalDigit, minGap d d = 10 := by
  intro d; cases d <;> rfl

/-- Different-digit transitions have a smaller minimum gap. -/
theorem offdiagonal_smaller_gap :
    ∀ d1 d2 : TerminalDigit, d1 ≠ d2 → minGap d1 d2 < 10 := by
  intro d1 d2 hne
  cases d1 <;> cases d2 <;> simp_all [minGap]

/-- 10 ≡ 1 (mod 3). -/
theorem diagonal_gap_ternary : (10 : ℕ) % 3 = 1 := by norm_num

/-- The transitions 9→1, 7→9 and 1→3 have minimum gap 2. -/
theorem gap2_transitions :
    minGap .d9 .d1 = 2 ∧ minGap .d7 .d9 = 2 ∧ minGap .d1 .d3 = 2 := by
  constructor <;> [rfl; constructor <;> rfl]

/-- 2 ≡ 2 (mod 3). -/
theorem gap2_is_classII : (2 : ℕ) % 3 = 2 := by norm_num

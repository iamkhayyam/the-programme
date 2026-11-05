/-
  Paper 03 — Spherical Cow Philosophy: A Methodological Framework
             for Mathematical Discovery
  Khayyam Wakil, February 2026

  Lean 4 formalisation, revised November 2026.

  What this file contains:
    1. Twin Prime Constitution (Proposition 4.1): if p > 3 and p, p + 2 are
       both prime, then p ≡ 2 (mod 3). A complete proof of a classical fact.
    2. The five-step methodology and decision criteria, recorded as
       structures (data types only; nothing is proved about them).

  Not formalised: the Sophie Germain non-instance (see P01 for the mod-3
  fact about Sophie Germain pairs) and the k = 4 prediction. The April 2026
  version stated the k = 4 prediction as the empty axiom
  `∃ constellation, True`; it has been removed.
-/

import Mathlib.Tactic

-- ════════════════════════════════════════════════════════════════════════════
-- Section 1: Twin Prime Constitution (Proposition 4.1)
-- ════════════════════════════════════════════════════════════════════════════

/-- A twin prime pair is (p, p+2) where both are prime. -/
def IsTwinPrimePair (p : ℕ) : Prop :=
  Nat.Prime p ∧ Nat.Prime (p + 2)

/-- **Twin Prime Constitution** (Proposition 4.1, Paper 03).
    Every twin prime p > 3 satisfies p ≡ 2 (mod 3).

    Proof: Among three consecutive integers, exactly one is divisible by 3.
    - If p ≡ 0 (mod 3), then 3 ∣ p, so p not prime (for p > 3).
    - If p ≡ 1 (mod 3), then p+2 ≡ 0 (mod 3), so p+2 not prime.
    - Therefore p ≡ 2 (mod 3). -/
theorem twin_prime_constitution (p : ℕ) (hp : IsTwinPrimePair p) (hgt : p > 3) :
    p % 3 = 2 := by
  rcases hp with ⟨hp_prime, hp2_prime⟩
  have hmod_bound : p % 3 < 3 := Nat.mod_lt p (by omega)
  interval_cases h : p % 3
  · exfalso
    have : 3 ∣ p := Nat.dvd_of_mod_eq_zero h
    have : p = 3 := by
      have := hp_prime.eq_one_or_self_of_dvd 3 this
      omega
    omega
  · exfalso
    have : (p + 2) % 3 = 0 := by omega
    have : 3 ∣ (p + 2) := Nat.dvd_of_mod_eq_zero this
    have : p + 2 = 3 := by
      have := hp2_prime.eq_one_or_self_of_dvd 3 this
      omega
    omega
  · rfl

-- ════════════════════════════════════════════════════════════════════════════
-- Section 2: The Five-Step Methodology (Definition 3.1)
-- ════════════════════════════════════════════════════════════════════════════

/-- A spherical cow analysis of a mathematical domain. -/
structure SphericalCowAnalysis where
  constitution : Prop
  constitution_computable : Decidable constitution
  consequences : List Prop
  within_domain_validation : Prop
  cross_domain_validation : Option Prop
  predictions : List Prop
  has_testable_prediction : predictions.length > 0

-- ════════════════════════════════════════════════════════════════════════════
-- Section 3: Decision Criteria
-- ════════════════════════════════════════════════════════════════════════════

/-- Criterion for when spherical cow philosophy applies. -/
structure SphericalCowApplicable where
  structural_barrier : Prop
  constitution_identified : Prop
  cross_domain_echo : Prop
  falsifiable_predictions : Prop

/-- Criterion for when classical methods are preferred. -/
structure ClassicalPreferred where
  provable_from_axioms : Prop
  single_domain : Prop
  no_constitution : Prop
  contradiction_works : Prop

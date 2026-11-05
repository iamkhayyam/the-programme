/-
  Paper 07 — Condition W3: Absence of Siegel Zeros for Characters
             Modulo 3^K via the CM Structure of Z[ω]
  Khayyam Wakil, February 2026

  Lean 4 formalisation, revised November 2026.

  What this file proves:
    1. The only prime dividing 3 is 3.
    2. (ℤ/3^Kℤ)ˣ is cyclic (Mathlib), and so is (ℤ/ℓ^Kℤ)ˣ for every odd
       prime ℓ, e.g. ℓ = 7.
    3. The list of d with Q(√−d) of class number 1 (the Heegner numbers)
       contains the odd primes 3, 7, 11, 19, 43, 67, 163, so 3 is not the only
       prime with a class-number-one imaginary quadratic field.

  Why Condition W3 is essentially immediate (not formalised here): a cyclic
  group of even order has exactly one element of order 2, so there is
  exactly one real non-principal character modulo 3^K, the one induced from
  the character modulo 3. An exceptional (Siegel) zero can only belong to a
  real character, so any such zero would be a zero of the single fixed
  L-function L(s, χ₋₃), which has none near s = 1.

  What this file does NOT formalise: Dirichlet characters, L-functions,
  zeros, Hecke characters or the paper's three-step argument. The April
  2026 version stated "Condition W3" as ∃ c : ℚ, c > 0 (derived from an
  axiom of the same form called `stark_baker_theorem`), the "Watt
  conditions" as `True`, and two further steps as `True` axioms; those have
  been removed. As stated in Paper 07 (Theorem 3.2), the "Stark–Baker
  theorem" for all CM fields would settle the Landau–Siegel problem; it is
  not an established theorem.
-/

import Mathlib.Tactic
import Mathlib.RingTheory.ZMod.UnitsCyclic
import TheProgramme.P04_EisensteinIntegers

/-- The only prime dividing 3 is 3. -/
theorem prime_dvd_three : ∀ p : ℕ, Nat.Prime p → p ∣ 3 → p = 3 := by
  intro p hp hdvd
  have h3 : Nat.Prime 3 := by norm_num
  have := h3.eq_one_or_self_of_dvd p hdvd
  rcases this with h | h
  · exact absurd h (Nat.Prime.one_lt hp).ne'
  · exact h

/-- (ℤ/3^Kℤ)ˣ is cyclic: `units_three_pow_cyclic`, proved in P04. -/
example (K : ℕ) : IsCyclic (ZMod (3 ^ K))ˣ := units_three_pow_cyclic K

/-- (ℤ/7^Kℤ)ˣ is cyclic too: cyclicity does not single out 3. -/
theorem units_seven_pow_cyclic (K : ℕ) : IsCyclic (ZMod (7 ^ K))ˣ :=
  ZMod.isCyclic_units_of_prime_pow 7 (by norm_num) (by norm_num) K

/-- The Heegner numbers: the d > 0 for which Q(√−d) has class number 1
    (Heegner, Baker, Stark). Stated as data; the classification itself is
    not proved here. -/
def heegnerNumbers : List ℕ := [1, 2, 3, 7, 11, 19, 43, 67, 163]

/-- The list contains the odd primes 3, 7, 11, 19, 43, 67 and 163:
    3 is one of seven. -/
theorem heegner_odd_primes :
    ∀ p ∈ [3, 7, 11, 19, 43, 67, 163], p ∈ heegnerNumbers ∧ Nat.Prime p := by
  norm_num [heegnerNumbers]

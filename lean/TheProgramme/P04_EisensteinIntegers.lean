/-
  Paper 04 — Ternary Forcing on the Hexagonal Lattice: Eisenstein Integers,
             Cascade Moduli, and Level of Distribution 5/8
  Khayyam Wakil, February 2026

  Lean 4 formalisation, revised November 2026.

  What this file proves:
    1. Eisenstein integer arithmetic: N(1−ω) = 3, (1−ω)² = −3ω, and
       3 = (1+ω)(1−ω)² with N(1+ω) = 1 (Lemma 2.1, Proposition 2.2).
    2. φ(3^K) = 2·3^(K−1), and (ℤ/3^Kℤ)ˣ is cyclic (Lemma 3.1), using
       Mathlib's `Nat.totient_prime_pow` and `ZMod.isCyclic_units_of_prime_pow`.
       Cyclicity holds for every odd prime power, not only for 3^K.
    3. For twin primes p > 3, `classifyPrime` gives p "inert" and p + 2
       "split" (Corollary 6.4). `classifyPrime` is defined from p mod 3, so
       this restates p ≡ 2 (mod 3); no factorisation in ℤ[ω] is formalised.

  What this file does NOT formalise: the paper's main claim (Theorem 1.1,
  level of distribution 5/8 for moduli 3^K), the three-level filtration
  (Proposition 2.4), the Kloosterman and Watt steps, or the uniqueness
  theorem (Theorem 5.1). The April 2026 version presented the arithmetic
  identity 1/2 + 1/8 = 5/8 as "Main Theorem 1.1" and stated the filtration
  and cyclicity as empty axioms (∃ n, n = 3; True); those have been removed.
-/

import Mathlib.Tactic
import Mathlib.RingTheory.ZMod.UnitsCyclic

-- ════════════════════════════════════════════════════════════════════════════
-- Section 1: Eisenstein Integer Arithmetic
-- ════════════════════════════════════════════════════════════════════════════

/-- An Eisenstein integer a + bω, where ω² + ω + 1 = 0. -/
structure EisensteinInt where
  a : ℤ
  b : ℤ
  deriving Repr, DecidableEq

namespace EisensteinInt

/-- The norm: N(a+bω) = a² - ab + b². -/
def norm (z : EisensteinInt) : ℤ :=
  z.a ^ 2 - z.a * z.b + z.b ^ 2

/-- 1 - ω in Z[ω]. -/
def oneMinusOmega : EisensteinInt := ⟨1, -1⟩

/-- Multiplication: (a+bω)(c+dω) = (ac-bd) + (ad+bc-bd)ω. -/
def mul (z w : EisensteinInt) : EisensteinInt :=
  ⟨z.a * w.a - z.b * w.b, z.a * w.b + z.b * w.a - z.b * w.b⟩

end EisensteinInt

-- ════════════════════════════════════════════════════════════════════════════
-- Section 2: Lemma 2.1 — N(1-ω) = 3
-- ════════════════════════════════════════════════════════════════════════════

/-- **Lemma 2.1**: N(1-ω) = 1 + 1 + 1 = 3. -/
theorem norm_one_minus_omega :
    EisensteinInt.norm EisensteinInt.oneMinusOmega = 3 := by
  decide

-- ════════════════════════════════════════════════════════════════════════════
-- Section 3: Proposition 2.2 — Ramification of 3
-- ════════════════════════════════════════════════════════════════════════════

/-- (1-ω)² = ⟨0, -3⟩ in Z[ω]. -/
def oneMinusOmega_sq : EisensteinInt :=
  EisensteinInt.mul EisensteinInt.oneMinusOmega EisensteinInt.oneMinusOmega

theorem oneMinusOmega_sq_val :
    oneMinusOmega_sq = ⟨0, -3⟩ := by
  decide

/-- **Proposition 2.2**: (1+ω)·(1−ω)² = 3, i.e. 3 = −ω²(1−ω)² since 1 + ω = −ω². -/
theorem ramification_of_three :
    EisensteinInt.mul ⟨1, 1⟩ ⟨0, -3⟩ = ⟨3, 0⟩ := by
  decide

/-- 1 + ω (= −ω²) has norm 1. (Norm 1 is what makes it a unit; the unit
    group itself is not formalised here.) -/
theorem norm_one_plus_omega :
    EisensteinInt.norm ⟨1, 1⟩ = 1 := by
  decide

-- ════════════════════════════════════════════════════════════════════════════
-- Section 4: The unit group (ℤ/3^Kℤ)ˣ (Lemma 3.1)
-- ════════════════════════════════════════════════════════════════════════════

/-- **Lemma 3.1 (order)**: φ(3^K) = 2·3^(K−1) for K ≥ 1. -/
theorem totient_three_pow (K : ℕ) (hK : 1 ≤ K) :
    Nat.totient (3 ^ K) = 2 * 3 ^ (K - 1) := by
  rw [Nat.totient_prime_pow Nat.prime_three (by omega)]
  ring

/-- **Lemma 3.1 (cyclicity)**: (ℤ/3^Kℤ)ˣ is cyclic. This holds for every
    odd prime power p^K, so it does not single out p = 3. -/
theorem units_three_pow_cyclic (K : ℕ) : IsCyclic (ZMod (3 ^ K))ˣ :=
  ZMod.isCyclic_units_of_prime_pow 3 Nat.prime_three (by norm_num) K

-- ════════════════════════════════════════════════════════════════════════════
-- Section 5: Twin primes and the mod-3 classification (Corollary 6.4)
-- ════════════════════════════════════════════════════════════════════════════

inductive EisensteinClass where
  | inert | split | ramified
  deriving Repr, DecidableEq

/-- The splitting type of a rational prime in ℤ[ω], *defined* by the
    classical criterion: 3 ramifies, p ≡ 2 (mod 3) is inert, p ≡ 1 splits.
    (The criterion itself is not proved here.) -/
def classifyPrime (p : ℕ) : EisensteinClass :=
  if p = 3 then .ramified
  else if p % 3 = 2 then .inert
  else .split

/-- Twin primes p > 3 satisfy p ≡ 2 (mod 3). -/
theorem twin_prime_mod_three (p : ℕ) (hp : Nat.Prime p) (hp2 : Nat.Prime (p + 2))
    (hgt : p > 3) : p % 3 = 2 := by
  have h0 : p % 3 ≠ 0 := by
    intro h
    have := hp.eq_one_or_self_of_dvd 3 (Nat.dvd_of_mod_eq_zero h)
    omega
  have h1 : p % 3 ≠ 1 := by
    intro h
    have h3 : 3 ∣ p + 2 := by omega
    have := hp2.eq_one_or_self_of_dvd 3 h3
    omega
  omega

/-- **Corollary 6.4**: for twin primes p > 3, `classifyPrime` gives p inert
    and p + 2 split. Because `classifyPrime` is defined from p mod 3, this is
    a restatement of `twin_prime_mod_three`. -/
theorem twin_primes_classify_inert_split (p : ℕ) (hp : Nat.Prime p)
    (hp2 : Nat.Prime (p + 2)) (hgt : p > 3) :
    classifyPrime p = .inert ∧ classifyPrime (p + 2) = .split := by
  have h := twin_prime_mod_three p hp hp2 hgt
  have h2 : (p + 2) % 3 = 1 := by omega
  constructor
  · simp [classifyPrime, h, show p ≠ 3 by omega]
  · simp [classifyPrime, h2, show p + 2 ≠ 3 by omega]

/-
  Paper 01 — Constitutional Forcing
  Khayyam Wakil, February 2026

  Lean 4 formalisation, revised November 2026.

  What this file proves:
    1. The values of θ_k = (2^k − k)/2^k for k = 1..6 (arithmetic).
    2. θ₁ = θ₂: the value 1/2 cannot distinguish depth 1 from depth 2.
    3. 1 − θ_k = k/2^k; θ_k is strictly increasing for k ≥ 2; θ_k → 1.
    4. Sophie Germain pairs: "2p+1 is odd" holds for every integer p, so it
       is not a constraint; the real coupling is mod 3 (p ≡ 2 mod 3 for
       p > 3), the same condition as for twin primes.

  What this file does NOT formalise:
    * The Counting Theorem of Paper 01 (Theorem 2.6). In the paper's own
      configuration model (a configuration is invalid if any constraint
      fails) the number of invalid configurations is 2^k − 1, not k; this
      is proved as `invalid_count` in P05_RamanujansDimensionalForcing.lean.
      The April 2026 version "proved" the theorem by defining the invalid
      count to be k; that definition has been removed.
    * Any notion of a "constitutional system" or of a forced constant, and
      the Constitutional Forcing Conjecture (Conjecture 5.1). The April 2026
      version defined the constant of every system to be θ_k regardless of
      the system, which made the conjecture trivially true; it has been
      removed.
-/

import Mathlib.Tactic

-- ════════════════════════════════════════════════════════════════════════════
-- Section 1: The formula θ_k = (2^k − k)/2^k
-- ════════════════════════════════════════════════════════════════════════════

/-- The configuration density θ_k = (2^k − k)/2^k as a rational number.
    (A definition: nothing in this file derives it from a count.) -/
def theta (k : ℕ) : ℚ := (2 ^ k - k : ℤ) / (2 ^ k : ℤ)

/-- 2^k ≥ k for all k. -/
theorem two_pow_ge_k : ∀ k : ℕ, 2 ^ k ≥ k := by
  intro k
  induction k with
  | zero => simp
  | succ n ih =>
    have h1 : 2 ^ n ≥ 1 := Nat.one_le_pow n 2 (by omega)
    calc 2 ^ (n + 1) = 2 * 2 ^ n := by ring
    _ = 2 ^ n + 2 ^ n := by ring
    _ ≥ n + 1 := by omega

/-- θ₁ = 1/2. -/
theorem theta_1 : theta 1 = 1 / 2 := by norm_num [theta]

/-- θ₂ = 1/2. -/
theorem theta_2 : theta 2 = 1 / 2 := by norm_num [theta]

/-- θ₃ = 5/8. -/
theorem theta_3 : theta 3 = 5 / 8 := by norm_num [theta]

/-- θ₄ = 3/4. -/
theorem theta_4 : theta 4 = 3 / 4 := by norm_num [theta]

/-- θ₅ = 27/32. -/
theorem theta_5 : theta 5 = 27 / 32 := by norm_num [theta]

/-- θ₆ = 29/32. -/
theorem theta_6 : theta 6 = 29 / 32 := by norm_num [theta]

/-- θ₁ = θ₂. The value 1/2 is produced by both depth 1 and depth 2, so
    observing 1/2 cannot tell the two depths apart (relevant to the
    Sophie Germain "non-instance" and to θ_FFT = 1/2). -/
theorem theta_1_eq_theta_2 : theta 1 = theta 2 := by norm_num [theta]

-- ════════════════════════════════════════════════════════════════════════════
-- Section 2: Monotonicity and limit
-- ════════════════════════════════════════════════════════════════════════════

/-- 1 − θ_k = k / 2^k. -/
theorem one_sub_theta (k : ℕ) : 1 - theta k = (k : ℚ) / 2 ^ k := by
  unfold theta
  push_cast
  field_simp
  ring

/-- θ_k is strictly increasing for k ≥ 2 (θ₁ = θ₂, so not for k = 1). -/
theorem theta_strictly_increasing (k : ℕ) (hk : 2 ≤ k) :
    theta k < theta (k + 1) := by
  have h1 := one_sub_theta k
  have h2 := one_sub_theta (k + 1)
  have hpos : (0 : ℚ) < 2 ^ k := by positivity
  have hpos' : (0 : ℚ) < 2 ^ (k + 1) := by positivity
  have hk' : (2 : ℚ) ≤ k := by exact_mod_cast hk
  have key : ((k + 1 : ℕ) : ℚ) / 2 ^ (k + 1) < (k : ℚ) / 2 ^ k := by
    rw [div_lt_div_iff₀ hpos' hpos, pow_succ]
    push_cast
    nlinarith
  linarith

/-- k² ≤ 2^k for k ≥ 4. -/
theorem sq_le_two_pow (k : ℕ) (hk : 4 ≤ k) : k ^ 2 ≤ 2 ^ k := by
  induction k, hk using Nat.le_induction with
  | base => norm_num
  | succ n hn ih =>
    have h : (n + 1) ^ 2 ≤ 2 * n ^ 2 := by nlinarith
    calc (n + 1) ^ 2 ≤ 2 * n ^ 2 := h
      _ ≤ 2 * 2 ^ n := by omega
      _ = 2 ^ (n + 1) := by ring

/-- θ_k → 1: for every ε > 0, 1 − θ_k < ε for all large k. -/
theorem theta_approaches_one (ε : ℚ) (hε : 0 < ε) :
    ∃ N : ℕ, ∀ k : ℕ, N ≤ k → 1 - theta k < ε := by
  obtain ⟨M, hM⟩ := exists_nat_gt (1 / ε)
  refine ⟨max M 4 + 1, fun k hk => ?_⟩
  rw [one_sub_theta]
  have hk4 : 4 ≤ k := by omega
  have hkpos : (0 : ℚ) < k := by exact_mod_cast (by omega : 0 < k)
  have hkM : (M : ℚ) < k := by exact_mod_cast (by omega : M < k)
  have hsq : (k : ℚ) ^ 2 ≤ 2 ^ k := by exact_mod_cast sq_le_two_pow k hk4
  have h1 : (k : ℚ) / 2 ^ k ≤ 1 / k := by
    rw [div_le_div_iff₀ (by positivity) hkpos]
    nlinarith
  have h2 : (1 : ℚ) / k < ε := by
    rw [div_lt_iff₀ hkpos]
    have h3 : 1 / ε < (k : ℚ) := lt_trans hM hkM
    rw [div_lt_iff₀ hε] at h3
    linarith [mul_comm (k : ℚ) ε]
  linarith

-- ════════════════════════════════════════════════════════════════════════════
-- Section 3: Sophie Germain pairs (Proposition 4.1 of Paper 01)
-- ════════════════════════════════════════════════════════════════════════════

/-- 2p + 1 is odd for every integer p. The "second condition" used in
    Paper 01's Sophie Germain argument therefore constrains nothing. -/
theorem two_mul_add_one_odd (p : ℤ) : ¬ (2 ∣ 2 * p + 1) := by
  omega

/-- If p > 3 and both p and 2p + 1 are prime, then p ≡ 2 (mod 3).
    This mod-3 condition is the genuine coupling for Sophie Germain pairs,
    and it is the same condition that twin primes satisfy. -/
theorem sophie_germain_mod_three (p : ℕ) (hp : p.Prime) (hq : (2 * p + 1).Prime)
    (hgt : 3 < p) : p % 3 = 2 := by
  have h0 : p % 3 ≠ 0 := by
    intro h
    have := hp.eq_one_or_self_of_dvd 3 (Nat.dvd_of_mod_eq_zero h)
    omega
  have h1 : p % 3 ≠ 1 := by
    intro h
    have h3 : 3 ∣ 2 * p + 1 := by omega
    have := hq.eq_one_or_self_of_dvd 3 h3
    omega
  omega

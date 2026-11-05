/-
  Paper 06 — The Shannon–Wakil Effect
  Khayyam Wakil, February 2026

  Lean 4 formalisation, revised November 2026.

  What this file proves:
    1. The k-hierarchy table θ_k = (2^k − k)/2^k for k = 1..6 (arithmetic).
    2. θ₁ = θ₂, so the value 1/2 cannot tell depth 1 from depth 2.
    3. The binary entropy of a fair coin is log 2 (Mathlib's
       `Real.binEntropy_two_inv`), so for a fair binary source the AEP
       constant H / log|A| equals 1, not θ₁ = 1/2. In general H / log|A|
       and channel capacity take any value in [0, 1]; they are not θ₁.

  What this file does NOT formalise: the AEP, the channel coding theorem,
  the Shannon–Wakil Effect (Definition 2.1), the cascade-moduli instance or
  the Sophie Germain non-instance. The April 2026 version defined a
  "Shannon–Wakil system" whose four defining properties were all set to
  `True` and then "verified" it; that has been removed.

  Note: Paper 06 (Theorem 7.1) gives Sophie Germain pairs depth k = 2;
  Paper 01 gives k = 1. Both give 1/2 (see `k_hierarchy_one_eq_two`).
-/

import Mathlib.Tactic
import Mathlib.Analysis.SpecialFunctions.BinaryEntropy

/-- The k-hierarchy value (2^k − k)/2^k. -/
def k_hierarchy (k : ℕ) : ℚ := (2 ^ k - k : ℤ) / (2 ^ k : ℤ)

/-- The k-hierarchy table for k = 1..6. -/
theorem k_hierarchy_table :
    k_hierarchy 1 = 1 / 2 ∧
    k_hierarchy 2 = 1 / 2 ∧
    k_hierarchy 3 = 5 / 8 ∧
    k_hierarchy 4 = 3 / 4 ∧
    k_hierarchy 5 = 27 / 32 ∧
    k_hierarchy 6 = 29 / 32 := by
  refine ⟨?_, ?_, ?_, ?_, ?_, ?_⟩ <;> norm_num [k_hierarchy]

/-- θ₁ = θ₂: depth 1 and depth 2 give the same value. -/
theorem k_hierarchy_one_eq_two : k_hierarchy 1 = k_hierarchy 2 := by
  norm_num [k_hierarchy]

/-- For a fair binary source, H / log 2 = 1 (entropy measured in nats):
    the AEP constant is 1 here, not 1/2. -/
theorem fair_coin_entropy_ratio : Real.binEntropy 2⁻¹ / Real.log 2 = 1 := by
  rw [Real.binEntropy_two_inv]
  exact div_self (Real.log_pos (by norm_num)).ne'

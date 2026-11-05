/-
  Paper 05 — Ramanujan's Dimensional Forcing: A Universal Formula
             for Sieve Levels
  Khayyam Wakil, February 2026

  Lean 4 formalisation, revised November 2026.

  The configuration model of Papers 01 and 05: a configuration at depth k
  is c : Fin k → Bool, where c i = true means constraint i holds. A
  configuration is valid if every constraint holds and invalid if at least
  one fails ("failure at any level is sufficient for invalidity").

  What this file proves:
    1. There are 2^k configurations.
    2. Exactly one configuration is valid, so exactly 2^k − 1 are invalid
       (`invalid_count`). The paper's Counting Theorem (Theorem 3.4; Paper 01,
       Theorem 2.6) says k are invalid; under these definitions that is false
       for every k ≥ 2 (k = 3: 7 invalid, not 3).
    3. The k "single-fail" configurations are distinct and invalid, so at
       least k configurations are invalid (the April 2026 version proved only
       this lower bound).
    4. Arithmetic: configDensity k := (2^k − k)/2^k takes the values 1/2,
       5/8, 3/4, 27/32 at k = 1, 3, 4, 5; the "pattern density"
       (2/3)(8/9)(26/27) = 416/729 ≈ 0.571 lies below 5/8, by about 9%.

  Removed from the April 2026 version: the axiom `geometric_pillar_theta3`
  (it was the arithmetic fact configDensity 3 = 5/8, already proved below,
  presented as an analytic result) and the empty axiom
  `general_correspondence_conjecture` (∀ k ≥ 1, True).
-/

import Mathlib.Tactic

-- ════════════════════════════════════════════════════════════════════════════
-- Section 1: Configuration Space
-- ════════════════════════════════════════════════════════════════════════════

/-- A binary configuration at depth k. -/
abbrev Configuration (k : ℕ) := Fin k → Bool

/-- Total number of configurations. -/
theorem config_space_size (k : ℕ) : Fintype.card (Configuration k) = 2 ^ k := by
  show Fintype.card (Fin k → Bool) = 2 ^ k
  simp [Fintype.card_fun, Fintype.card_fin, Fintype.card_bool]

/-- A configuration is valid iff all constraints are satisfied. -/
def isValid {k : ℕ} (c : Configuration k) : Prop := ∀ i : Fin k, c i = true

/-- A configuration is invalid iff at least one constraint fails. -/
def isInvalid {k : ℕ} (c : Configuration k) : Prop := ∃ i : Fin k, c i = false

instance {k : ℕ} : DecidablePred (@isInvalid k) := fun c => by
  unfold isInvalid; infer_instance

-- ════════════════════════════════════════════════════════════════════════════
-- Section 2: Counting invalid configurations
-- ════════════════════════════════════════════════════════════════════════════

/-- The configuration in which every constraint holds. -/
def allTrue (k : ℕ) : Configuration k := fun _ => true

/-- The only valid configuration is `allTrue`. -/
theorem isValid_iff {k : ℕ} (c : Configuration k) : isValid c ↔ c = allTrue k := by
  constructor
  · intro h
    funext i
    exact h i
  · rintro rfl i
    rfl

/-- Invalid means "not the all-true configuration". -/
theorem isInvalid_iff {k : ℕ} (c : Configuration k) : isInvalid c ↔ c ≠ allTrue k := by
  rw [← isValid_iff]
  simp [isInvalid, isValid]

/-- **Exactly 2^k − 1 configurations are invalid.** This contradicts the
    Counting Theorem's "exactly k invalid" for every k ≥ 2. -/
theorem invalid_count (k : ℕ) :
    Fintype.card {c : Configuration k // isInvalid c} = 2 ^ k - 1 := by
  classical
  rw [Fintype.card_congr (Equiv.subtypeEquivRight (fun c => isInvalid_iff c)),
    Fintype.card_subtype_compl, Fintype.card_subtype_eq, config_space_size]

/-- At depth 3: 7 invalid configurations, not 3. -/
theorem invalid_count_three :
    Fintype.card {c : Configuration 3 // isInvalid c} = 7 := by
  rw [invalid_count]

/-- A single-fail configuration: all true except position i. -/
def singleFailConfig (k : ℕ) (i : Fin k) : Configuration k :=
  fun j => if j = i then false else true

/-- Single-fail configs are pairwise distinct. -/
theorem singleFail_injective (k : ℕ) :
    Function.Injective (singleFailConfig k) := by
  intro i j h
  have : singleFailConfig k i i = singleFailConfig k j i := by rw [h]
  simp [singleFailConfig] at this
  exact this

/-- Each single-fail configuration is invalid (so at least k are invalid). -/
theorem single_fail_invalid (k : ℕ) :
    ∀ i : Fin k, isInvalid (singleFailConfig k i) := by
  intro i
  exact ⟨i, by simp [singleFailConfig]⟩

-- ════════════════════════════════════════════════════════════════════════════
-- Section 3: Configuration Density (arithmetic)
-- ════════════════════════════════════════════════════════════════════════════

/-- Configuration density as defined in the paper: (2^k − k)/2^k. -/
def configDensity (k : ℕ) : ℚ := (2 ^ k - k : ℤ) / (2 ^ k : ℤ)

theorem configDensity_1 : configDensity 1 = 1 / 2 := by norm_num [configDensity]
theorem configDensity_3 : configDensity 3 = 5 / 8 := by norm_num [configDensity]
theorem configDensity_4 : configDensity 4 = 3 / 4 := by norm_num [configDensity]
theorem configDensity_5 : configDensity 5 = 27 / 32 := by norm_num [configDensity]

-- ════════════════════════════════════════════════════════════════════════════
-- Section 4: Pattern Density vs Configuration Density
-- ════════════════════════════════════════════════════════════════════════════

/-- "Pattern density" at k = 3 as used in the paper: (2/3)(8/9)(26/27). -/
def patternDensity3 : ℚ := (2 : ℚ) / 3 * (8 / 9) * (26 / 27)

theorem patternDensity3_val : patternDensity3 = 416 / 729 := by
  norm_num [patternDensity3]

/-- The two densities differ. -/
theorem pattern_density_neq_config : patternDensity3 ≠ 5 / 8 := by
  norm_num [patternDensity3]

/-- Pattern density lies below configuration density at k = 3. -/
theorem pattern_density_lt_config : patternDensity3 < configDensity 3 := by
  norm_num [configDensity, patternDensity3]

-- ════════════════════════════════════════════════════════════════════════════
-- Section 5: The prime 3
-- ════════════════════════════════════════════════════════════════════════════

/-- 3 is the smallest odd prime. -/
theorem three_first_odd_prime : Nat.Prime 3 ∧ 3 % 2 = 1 ∧
    ∀ p : ℕ, Nat.Prime p → p % 2 = 1 → p ≥ 3 := by
  refine ⟨by norm_num, by norm_num, ?_⟩
  intro p hp hodd
  by_contra h
  push_neg at h
  interval_cases p
  · exact absurd hp (by norm_num)
  · exact absurd hp (by norm_num)
  · exact absurd hodd (by norm_num)

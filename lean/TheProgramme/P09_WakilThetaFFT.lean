/-
  Paper 09 — The Constitutional Constant θ_FFT = 1/2
  Khayyam Wakil, March 2026

  Lean 4 formalisation, revised November 2026.

  What this file proves (all classical facts about the DFT):
    1. Conjugate symmetry: for a real signal x of length N,
       X[N − k] = conj(X[k]) for 1 ≤ k ≤ N − 1 (Theorem 3.1).
    2. X[0] is real; for even N, X[N/2] is real.
    3. |X[N − k]|² = |X[k]|².
    4. For even N the spectrum has 1 + 1 + 2(N/2 − 1) = N independent real
       parameters, i.e. N out of 2N: the fraction 1/2.

  The April 2026 version assumed (1)–(3) as axioms; they are now proved.

  Removed from the April 2026 version:
    * `compression_floor` (1/(1/2) = 2), described as a "guaranteed 2×
      lossless compression floor". There is no such floor: the half-spectrum
      holds exactly N real numbers, as many as the signal itself.
    * `khayyam_bridge` (1/2 = (2¹ − 1)/2¹) and the axiom `structural_bridge`
      (`True`). The mod-2 Pascal triangle's void fraction tends to 1, not 1/2.
    * `universal_constant` (thetaFFT = 1/2 by definition).
-/

import Mathlib.Tactic
import Mathlib.Analysis.SpecialFunctions.Trigonometric.Basic

open Complex

-- ════════════════════════════════════════════════════════════════════════════
-- Section 1: DFT Definition
-- ════════════════════════════════════════════════════════════════════════════

/-- A finite real-valued signal of length N. -/
def RealSignal (N : ℕ) := Fin N → ℝ

/-- The k-th DFT coefficient: X[k] = Σₙ x[n] · exp(−2πi·k·n/N). -/
noncomputable def dftCoeff (N : ℕ) (x : RealSignal N) (k : ℕ) : ℂ :=
  ∑ n : Fin N, ((x n : ℝ) : ℂ) * exp (-2 * (Real.pi : ℂ) * I * (k : ℂ) * ((n : ℕ) : ℂ) / (N : ℂ))

-- ════════════════════════════════════════════════════════════════════════════
-- Section 2: Conjugate Symmetry (Theorem 3.1)
-- ════════════════════════════════════════════════════════════════════════════

/-- **Theorem 3.1**: for real x, X[N − k] = conj(X[k]). -/
theorem conjugate_symmetry (N : ℕ) (hN : N ≥ 2) (x : RealSignal N) (k : ℕ)
    (hk : 1 ≤ k ∧ k ≤ N - 1) :
    dftCoeff N x (N - k) = starRingEnd ℂ (dftCoeff N x k) := by
  have hN0 : (N : ℂ) ≠ 0 := by exact_mod_cast (by omega : N ≠ 0)
  have hkN : k ≤ N := by omega
  unfold dftCoeff
  rw [map_sum]
  refine Finset.sum_congr rfl (fun n _ => ?_)
  rw [map_mul, conj_ofReal, ← exp_conj]
  congr 1
  have hcast : ((N - k : ℕ) : ℂ) = (N : ℂ) - (k : ℂ) := by
    rw [Nat.cast_sub hkN]
  rw [hcast]
  have key : -2 * (Real.pi : ℂ) * I * ((N : ℂ) - (k : ℂ)) * ((n : ℕ) : ℂ) / (N : ℂ)
      = ((-((n : ℕ) : ℤ) : ℤ) : ℂ) * (2 * (Real.pi : ℂ) * I)
        + starRingEnd ℂ (-2 * (Real.pi : ℂ) * I * (k : ℂ) * ((n : ℕ) : ℂ) / (N : ℂ)) := by
    simp only [map_div₀, map_mul, map_neg, map_ofNat, conj_ofReal, conj_I, map_natCast]
    push_cast
    field_simp
    ring
  rw [key, exp_add, exp_int_mul_two_pi_mul_I, one_mul]

/-- The DC component X[0] is real. -/
theorem dc_is_real (N : ℕ) (x : RealSignal N) : (dftCoeff N x 0).im = 0 := by
  simp [dftCoeff, im_sum]

/-- For even N, the Nyquist component X[N/2] is real. -/
theorem nyquist_is_real (N : ℕ) (hN : N ≥ 2) (heven : Even N) (x : RealSignal N) :
    (dftCoeff N x (N / 2)).im = 0 := by
  obtain ⟨m, hm⟩ := heven
  have h1 : N - N / 2 = N / 2 := by omega
  have hsym := conjugate_symmetry N hN x (N / 2) ⟨by omega, by omega⟩
  rw [h1] at hsym
  exact (conj_eq_iff_im).1 hsym.symm

/-- |X[N − k]|² = |X[k]|². -/
theorem energy_symmetry (N : ℕ) (hN : N ≥ 2) (x : RealSignal N) (k : ℕ)
    (hk : 1 ≤ k ∧ k ≤ N - 1) :
    normSq (dftCoeff N x (N - k)) = normSq (dftCoeff N x k) := by
  rw [conjugate_symmetry N hN x k hk, normSq_conj]

-- ════════════════════════════════════════════════════════════════════════════
-- Section 3: Counting real degrees of freedom
-- ════════════════════════════════════════════════════════════════════════════

/-- For even N: X[0] and X[N/2] are real (one parameter each) and the
    remaining N/2 − 1 conjugate pairs carry two each: N in total. -/
theorem independent_dof_even (N : ℕ) (hN : N ≥ 2) (heven : Even N) :
    1 + 1 + 2 * (N / 2 - 1) = N := by
  obtain ⟨m, hm⟩ := heven
  subst hm
  omega

/-- N real parameters out of 2N real numbers: the fraction 1/2. -/
theorem dof_fraction (N : ℕ) (hN : N ≥ 2) :
    (N : ℚ) / (2 * N) = 1 / 2 := by
  have : (N : ℚ) ≠ 0 := by exact_mod_cast (by omega : N ≠ 0)
  field_simp

/-
  The Programme — Lean 4 Formalisation
  ====================================

  Lean 4 files accompanying the nine papers of the Constitutional Forcing
  programme by Khayyam Wakil (2026). Revised November 2026.

  These files check the arithmetic of the programme's tables and a number
  of elementary facts. They do NOT formalise the papers' main claims: no
  level of distribution, Siegel-zero, Kloosterman, Watt, Shannon or
  prime-bias statement is formalised, and neither is the Constitutional
  Forcing Conjecture. See LEAN_VERIFICATION_REPORT.md for a statement-by-
  statement account.

  Files:
    P01  θ_k values; θ₁ = θ₂; monotonicity and limit of θ_k;
         Sophie Germain pairs satisfy p ≡ 2 (mod 3)
    P02  Lucas's criterion (assumed); survivor counts mod 3; the correct
         Hausdorff dimension log(p(p+1)/2)/log p
    P03  Twin primes p > 3 satisfy p ≡ 2 (mod 3)
    P04  Eisenstein-integer identities; φ(3^K); (ℤ/3^Kℤ)ˣ is cyclic
    P05  Configuration model: exactly 2^k − 1 configurations are invalid
         (not k, as the papers' Counting Theorem states)
    P06  k-hierarchy table; the AEP constant for a fair coin is 1, not 1/2
    P07  (ℤ/ℓ^Kℤ)ˣ is cyclic for ℓ = 3 and ℓ = 7; Heegner-number primes
    P08  Prime residues mod 3; the minimum-gap table for last digits
    P09  DFT conjugate symmetry and real DC/Nyquist terms, proved

  Status key:
    theorem  — proved in Lean 4 (relative to any axiom it uses)
    axiom    — assumed; the only one left is Lucas's criterion in P02
-/

import TheProgramme.P01_ConstitutionalForcing
import TheProgramme.P02_KhayyamsTriangle
import TheProgramme.P03_SphericalCowPhilosophy
import TheProgramme.P04_EisensteinIntegers
import TheProgramme.P05_RamanujansDimensionalForcing
import TheProgramme.P06_ShannonWakilEffect
import TheProgramme.P07_ConditionW3
import TheProgramme.P08_PrimeBiasTernaryBridge
import TheProgramme.P09_WakilThetaFFT

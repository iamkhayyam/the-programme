# Constitutional Forcing Programme

> **Status (November 2026): under revision.** The website is in maintenance mode. An audit of the nine papers found errors in their assumptions, numbers and attributions, and the papers are being revised. See [`audit/README.md`](audit/README.md) for the findings and the scripts that reproduce them.

The **Constitutional Forcing Programme** is a research programme by Khayyam Wakil (ARC Institute of Knowware). It proposes a mechanism called **Constitutional Forcing**: the claim that certain mathematical systems have built-in structural constraints that determine their governing constants, rather than those constants being chosen or fitted.

## Core concepts

### 1. Constitutional constraint
A constraint that is intrinsic to a system, independent of its other constraints, and that eliminates one configuration class.

### 2. Configuration density
For a system of depth *k*, the programme proposes the formula
$$\theta_k = \frac{2^k - k}{2^k},$$
which gives θ₁ = θ₂ = 1/2, θ₃ = 5/8, θ₄ = 3/4 and θ₅ = 27/32. Whether this count follows from the definition of a constitutional constraint is one of the points under revision.

### 3. The Shannon–Wakil Effect
A proposed structural parallel between Claude Shannon's information theory and prime arithmetic.

## Proposed instances

The programme puts forward instances of the mechanism in several domains. None of them should be read as established while the papers are under revision:

*   **Prime arithmetic:** a level of distribution θ = 5/8 for primes over the cascade moduli q = 3ᴷ (Papers 04 and 07).
*   **Information theory:** Shannon's AEP and channel coding theorem, read as depth-1 instances (Paper 06).
*   **Signal processing:** the conjugate symmetry of the DFT of real-valued signals, which leaves N of its 2N real degrees of freedom, read as θ_FFT = 1/2 (Paper 09).
*   **Prime digit bias:** a ternary reading of the Lemke Oliver–Soundararajan bias in consecutive primes (Paper 08).
*   **History and combinatorics:** the mod-3 fractal structure of Khayyam's (Pascal's) Triangle (Paper 02).

### Withdrawn
*   **Kolmogorov's turbulence exponent is not an instance.** The formula gives θ₂ = 1/2, not 3/4. Kolmogorov's 3/4 is the dissipation-scale exponent (η/L ~ Re^{−3/4}), which he derived in 1941 by dimensional analysis.
*   **Pascadi's 5/8 is not a confirmation or a special case of the formula.** The paper is arXiv:2505.00653, *"On the exponents of distribution of primes and smooth numbers"*. It concerns general moduli with well-factorable weights, not moduli 3ᴷ.

## Repository structure

*   `papers/p01-…/` to `papers/p09-…/`: LaTeX sources, PDFs, HTML versions and Lean files of the nine papers. These are the versions currently under revision.
*   `audit/`: the November 2026 audit. `README.md` holds the summary, `findings/` the per-paper findings with file and line references, and `scripts/` the code that reproduces every check.
*   `lean/`: a Lean 4 project (builds with `lake build`: 64 theorems, no `sorry`, one axiom). It proves the arithmetic of the tables, the configuration count 2^k − 1, elementary facts about primes mod 3 and Eisenstein integers, and the conjugate symmetry of the real DFT. It does not formalise the papers' main claims; see `LEAN_VERIFICATION_REPORT.md`.
*   `src/`: the website (React + Vite). `src/constants/programme.ts` lists the papers; `src/pages/PaperDetail.tsx` and `src/pages/EssayDetail.tsx` hold the paper summaries and essays.
*   `maintenance/`: the static page published while the site is in maintenance mode.

## Website and maintenance mode

The site is deployed to GitHub Pages by `.github/workflows/deploy.yml`, from the `main` branch.
- While `MAINTENANCE_MODE` is `'true'` in that file, only the page in `maintenance/` is published.
- Set it to `'false'` to build and publish the full site again.

---

*Published by the ARC Institute of Knowware, 2026.*

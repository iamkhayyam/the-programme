from itertools import product
from fractions import Fraction as F
from sympy import primerange, isprime

print("== 1. Counting Theorem under p01's own (CF1) semantics: c_i=1 iff constraint i holds")
for k in range(1,7):
    configs=list(product([0,1],repeat=k))
    invalid=[c for c in configs if 0 in c]          # failing ANY constraint => invalid (p01 line 262-263)
    per_constraint=[sum(1 for c in configs if c[i]==0) for i in range(k)]
    print(f"k={k}: total={2**k} invalid={len(invalid)} valid={2**k-len(invalid)}  "
          f"configs eliminated by each single constraint={per_constraint[0]}  formula claims invalid={k}")

print("\n== 2. Induction step: invalid configs at depth k-1 each split in two")
for k in range(2,7):
    print(f"k={k}: p01 says (k-1)+1={k}; actual split count of k-1 invalid configs alone = 2*(k-1) = {2*(k-1)}")

print("\n== 3. Kolmogorov: theta_2 from the formula vs p01's computation")
th=lambda k:F(2**k-k,2**k)
print("theta_2 = (2^2-2)/2^2 =",th(2), "  p01 line 438 writes (2^3-2)/2^3 =",F(8-2,8))
print("Which (n,k) give 3/4 via (2^n-k)/2^n:",[(n,k) for n in range(1,8) for k in range(0,n+1) if F(2**n-k,2**n)==F(3,4)])

print("\n== 4. Dimensional check of |omega| <= C eps^{3/4}/nu^{3/4}")
# dims as (L,T): eps = L^2 T^-3, nu = L^2 T^-1, omega = T^-1
eps=(2,-3); nu=(2,-1)
d=tuple(F(3,4)*e - F(3,4)*n for e,n in zip(eps,nu))
print("eps^{3/4}/nu^{3/4} has dims L^%s T^%s ; vorticity needs L^0 T^-1" % d)
d2=tuple(F(1,2)*e - F(1,2)*n for e,n in zip(eps,nu))
print("(eps/nu)^{1/2} has dims L^%s T^%s  (K41 vorticity scale)" % d2)
d3=tuple(F(3,4)*n - F(1,4)*e for e,n in zip(eps,nu))
print("(nu^3/eps)^{1/4} has dims L^%s T^%s  (Kolmogorov length eta)" % d3)

print("\n== 5. Twin primes: do mod 9 / mod 27 add constraints beyond p = 2 mod 3?")
for m in (3,9,27,81):
    adm=[r for r in range(m) if r%3!=0 and (r+2)%3!=0]
    lifts=[r for r in range(m) if r%3==2]
    print(f"mod {m}: admissible residues (p,p+2 both coprime to 3) = {len(adm)}; lifts of 2 mod 3 = {len(lifts)}; identical: {adm==lifts}")
ps=[p for p in primerange(5,10**6) if isprime(p+2)]
for m in (9,27):
    seen=sorted(set(p%m for p in ps))
    print(f"twin primes p<10^6, residues mod {m} actually occurring: {seen}")

print("\n== 6. Sophie Germain: the real coupling is mod 3, not mod 2")
sg=[p for p in primerange(5,10**6) if isprime(2*p+1)]
print("SG primes p>3 below 1e6: residues mod 3 =",sorted(set(p%3 for p in sg)), " count",len(sg))
print("mod-2 'second condition' 2p+1 odd holds for every integer p; it is not a constraint at all")

print("\n== 7. AEP 'theta_1 = H/log|A|' is not 1/2 in general")
import math
for p in (0.5,0.1,0.25):
    H=-(p*math.log2(p)+(1-p)*math.log2(1-p))
    print(f"Bernoulli({p}): H/log2|A| = {H:.4f};  typical-set fraction of {{0,1}}^n at n=100 ~ 2^(n(H-1)) = {2**(100*(H-1)):.3e}")

print("\n== 8. Eisenstein: 3 = -w^2 (1-w)^2")
import cmath
w=cmath.exp(2j*math.pi/3)
print("-w^2(1-w)^2 =",-w**2*(1-w)**2)

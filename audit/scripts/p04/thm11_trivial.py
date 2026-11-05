# Theorem 1.1 of p04 summed over the lacunary family q=3^K: show it is trivially true for any level.
import numpy as np, math
x = 20_000_000
# von Mangoldt
sieve = np.ones(x+1, dtype=bool); sieve[:2]=False
for p in range(2, int(x**0.5)+1):
    if sieve[p]: sieve[p*p::p]=False
primes = np.nonzero(sieve)[0]
Lam = np.zeros(x+1)
for p in primes:
    lp = math.log(p); pk = p
    while pk <= x:
        Lam[pk] = lp; pk *= p
n = np.arange(x+1)
logx = math.log(x)
print("x =", x, " log x = %.2f" % logx)
print("K   q=3^K    log_x q   max_a|E(q,a)|    trivial bound (x/q+1)log x+1.5x/q    max|E|*phi(q)/x (relative)")
tot = 0.0; tot_by_theta = {}
for K in range(1, 16):
    q = 3**K
    if q > x: break
    psi = np.bincount(n % q, weights=Lam, minlength=q)
    a = np.array([r for r in range(q) if r % 3 != 0])
    phi = 2*3**(K-1)
    E = np.abs(psi[a] - x/phi)
    mE = E.max()
    triv = (x/q+1)*logx + 1.5*x/q
    tot += mE
    print(f"{K:2d} {q:9d}  {math.log(q)/logx:.3f}  {mE:14.1f}  {triv:14.1f}   {mE*phi/x:.4f}")
    tot_by_theta[round(math.log(q)/logx,3)] = tot
print("Sum over ALL 3^K <= x of max_a|E| =", round(tot,1), " ; x/(log x)^1 =", round(x/logx), " x/(log x)^2 =", round(x/logx**2), " x/(log x)^3 =", round(x/logx**3))

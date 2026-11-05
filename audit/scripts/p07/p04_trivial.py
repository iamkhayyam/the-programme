"""Illustrate that p04 Thm 1.1 (sum over K of max_a |psi(x;3^K,a)-x/phi(3^K)|) is controlled
by the trivial bound (x/3^K) log x for all but the smallest K -- no level-of-distribution input needed."""
import numpy as np, math
x = 10**7
lam = np.zeros(x + 1)
sieve = np.ones(x + 1, dtype=bool); sieve[:2] = False
for p in range(2, int(x**0.5) + 1):
    if sieve[p]:
        sieve[p*p::p] = False
primes = np.nonzero(sieve)[0]
for p in primes:
    pk = p; lp = math.log(p)
    while pk <= x:
        lam[pk] = lp; pk *= p
n = np.arange(x + 1)
tot = 0.0
print(f"x = {x:.0e}")
for K in range(1, 30):
    q = 3**K
    if q > x: break
    phi = 2 * 3**(K-1)
    psi = np.bincount(n % q, weights=lam, minlength=q)
    units = np.array([a for a in range(q) if a % 3]) if q < 10**6 else None
    if units is None:
        mask = (np.arange(q) % 3) != 0
        err = np.abs(psi[mask] - x/phi).max()
    else:
        err = np.abs(psi[units] - x/phi).max()
    triv = (x/q + 1) * math.log(x) + x/phi
    tot += err
    print(f"K={K:2d} q=3^K={q:>8d} (q = x^{math.log(q)/math.log(x):.3f})  max_a|E|={err:12.1f}  trivial bound={triv:12.1f}  cumulative/x={tot/x:.5f}")

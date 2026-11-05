"""Numerical / algebraic checks for the p07 (Condition W3) audit."""
import cmath, math
from fractions import Fraction
import mpmath as mp

print("=" * 70)
print("1. Character group mod 3^K: real characters and conductors")
def primitive_root_check(K):
    q = 3 ** K
    phi = 2 * 3 ** (K - 1)
    # 2 is a primitive root mod 9 hence mod 3^K
    seen = set(); x = 1
    for i in range(phi):
        seen.add(x); x = x * 2 % q
    return len(seen) == phi

def dlog_table(q, g, phi):
    t = {}; x = 1
    for i in range(phi):
        t[x] = i; x = x * g % q
    return t

def char_conductor(K, j):
    """chi_j(2^i) = e(ij/phi).  Return conductor exponent (0..K)."""
    q = 3 ** K; phi = 2 * 3 ** (K - 1)
    t = dlog_table(q, 2, phi)
    for c in range(0, K + 1):
        # chi trivial on {n = 1 mod 3^c} ?  (for c=0 means trivial char)
        mod = 3 ** c
        ok = all((t[n] * j) % phi == 0 for n in t if (n - 1) % mod == 0)
        if ok:
            return c
    return None

for K in range(1, 6):
    q = 3 ** K; phi = 2 * 3 ** (K - 1)
    assert primitive_root_check(K)
    real = [j for j in range(phi) if (2 * j) % phi == 0]
    prim = [j for j in range(phi) if char_conductor(K, j) == K]
    prim_real = [j for j in prim if (2 * j) % phi == 0]
    print(f"K={K}: #chars={phi}, real chars j={real} conductors={[char_conductor(K,j) for j in real]}, "
          f"#primitive={len(prim)}, #primitive REAL={len(prim_real)}")

print("\nL(s, chi_{-3}) = 3^{-s}(zeta(s,1/3) - zeta(s,2/3))")
mp.mp.dps = 30
def L3(s):
    return mp.power(3, -s) * (mp.zeta(s, mp.mpf(1)/3) - mp.zeta(s, mp.mpf(2)/3))
print("L(1,chi_-3) =", mp.nsum(lambda n: (1 if n % 3 == 1 else -1 if n % 3 == 2 else 0) / n, [1, mp.inf]) if False else
      mp.mpf(1)/3 * (mp.digamma(mp.mpf(2)/3) - mp.digamma(mp.mpf(1)/3)))
print("pi/(3*sqrt3)    =", mp.pi / (3 * mp.sqrt(3)))
vals = [(s, L3(mp.mpf(s))) for s in [0.001, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99]]
for s, v in vals:
    print(f"  L({s}, chi_-3) = {mp.nstr(v, 10)}")
print("  min over grid of 2000 pts in (0,1):",
      mp.nstr(min(L3(mp.mpf(k) / 2000) for k in range(1, 2000)), 10))

print("=" * 70)
print("2. Norm map (O/3^K O)^* -> (Z/3^K)^*: is it surjective?")
def norm(a, b):
    return a * a - a * b + b * b
for K in range(1, 5):
    q = 3 ** K
    img = set()
    for a in range(q):
        for b in range(q):
            n = norm(a, b) % q
            if n % 3 != 0:
                img.add(n)
    print(f"K={K}: |image| = {len(img)}, |(Z/3^K)^*| = {2*3**(K-1)}, all image = 1 mod 3: {all(x%3==1 for x in img)}")
print("Norm form a^2-ab+b^2 mod 3 takes values:", sorted({norm(a, b) % 3 for a in range(3) for b in range(3)}))
print("Units of Z[w] all have norm 1:", [norm(a, b) for (a, b) in [(1,0),(-1,0),(0,1),(0,-1),(1,1),(-1,-1)]])

print("=" * 70)
print("3. Conductor of the base change chi o N for chi primitive mod 3^K")
# O/3^K O = O/p^{2K}; elements a+b*w, a,b mod 3^K.
def in_p_power(a, b, m, K):
    """is a+bw in p^m  (p=(1-w)), working mod 3^K, m <= 2K"""
    j, r = divmod(m, 2)
    pj = 3 ** j
    if a % pj or b % pj:
        return False
    if r == 0:
        return True
    return ((a // pj + b // pj) % 3) == 0

def base_change_conductor(K, j):
    q = 3 ** K; phi = 2 * 3 ** (K - 1)
    t = dlog_table(q, 2, phi)
    units = [(a, b) for a in range(q) for b in range(q) if norm(a, b) % 3 != 0]
    for m in range(0, 2 * K + 1):
        # U^{(m)} = units congruent to 1 mod p^m   (m=0: all units)
        ok = True
        for (a, b) in units:
            if m > 0 and not in_p_power(a - 1, b, m, K):
                continue
            n = norm(a, b) % q
            if (t[n] * j) % phi != 0:
                ok = False; break
        if ok:
            return m
    return None

for K in range(1, 5):
    phi = 2 * 3 ** (K - 1)
    prim = [j for j in range(phi) if char_conductor(K, j) == K]
    conds = sorted({base_change_conductor(K, j) for j in prim})
    print(f"K={K}: conductor exponents of chi o N over primitive chi mod 3^K: {conds}  (paper claims {2*K})")

print("\n   Check conductor-discriminant: |d_K| N(f) = f(chi) f(chi eps)  =>  N(f)=3^{2K-1} for K>=2")

# unramified comparison: inert l=5, split l=7, chi primitive mod l^K, K=1,2
def unram_conductor(l, K, root=None):
    q = l ** K; phi = (l - 1) * l ** (K - 1)
    # find primitive root mod l^K
    for g in range(2, q):
        if math.gcd(g, l) != 1: continue
        x = 1; s = set()
        for i in range(phi):
            s.add(x); x = x * g % q
        if len(s) == phi: break
    t = dlog_table(q, g, phi)
    def cond_chi(j):
        for c in range(0, K + 1):
            mod = l ** c
            if all((t[n] * j) % phi == 0 for n in t if (n - 1) % mod == 0):
                return c
    prim = [j for j in range(phi) if cond_chi(j) == K]
    res = set()
    units = [(a, b) for a in range(q) for b in range(q) if norm(a, b) % l != 0]
    for j in prim:
        # inert case: ideal l^m O ; elements a+bw = 1 mod l^m iff l^m | a-1, l^m | b
        for m in range(0, K + 1):
            ok = True
            for (a, b) in units:
                if m > 0 and ((a - 1) % l ** m or b % l ** m):
                    continue
                if (t[norm(a, b) % q] * j) % phi:
                    ok = False; break
            if ok:
                res.add(m); break
    return res
print("   inert l=5: conductor exponent of chi o N (as power of the ideal (5)), chi primitive mod 5^K:")
for K in (1, 2):
    print(f"     K={K}: {unram_conductor(5, K)}   (= K, i.e. f(chi o N) = (5^K) exactly)")
print("   inert l=2 (paper says 2 splits): x^2+x+1 mod 2 roots:", [x for x in range(2) if (x*x+x+1) % 2 == 0],
      "; -3 mod 8 =", (-3) % 8)

print("=" * 70)
print("4. Ray class group of Q(sqrt-3) mod p^m: |(O/p^m)^*| / |image of mu_6|")
mu6 = [(1,0),(-1,0),(0,1),(0,-1),(1,1),(-1,-1)]  # 1,-1,w,-w,1+w=-w^2,-1-w=w^2
for m in range(1, 9):
    K = (m + 1) // 2
    q = 3 ** K
    tot = sum(1 for a in range(q) for b in range(q) if norm(a, b) % 3)
    # O/p^m has 3^m elements, units 3^m - 3^{m-1}
    nunits = 3 ** m - 3 ** (m - 1)
    # image of mu6 mod p^m: count distinct classes
    classes = []
    for (a, b) in mu6:
        if not any(in_p_power((a - c) % q, (b - d) % q, m, K) for (c, d) in classes):
            classes.append((a, b))
    print(f"  m={m}: |(O/p^m)^*|={nunits}, |mu6 image|={len(classes)}, ray class group order={nunits//len(classes)}")
print("  -> no nontrivial ray-class character of conductor p^2 exists (K=1 case of Prop 2.5 impossible)")
print("  -> #ray class chars mod p^{2K} = 3^{2K-2}  vs  #chars mod 3^K = 2*3^{K-1}")

print("=" * 70)
print("5. Kloosterman sums S(1,1;3^K): |S| vs 2*3^{K/2} and (3^K)^{3/8}")
for K in range(1, 10):
    q = 3 ** K
    s = 0j
    for x in range(1, q):
        if x % 3:
            s += cmath.exp(2j * math.pi * (x + pow(x, -1, q)) / q)
    print(f"  K={K}: |S|={abs(s):10.4f}  2*3^(K/2)={2*3**(K/2):10.4f}  (3^K)^(3/8)={q**0.375:8.4f}")
print("  sum_{K<=N} (3^K)^{3/8} ~ C * (3^N)^{3/8}  (geometric), not (3^N)^{5/8}")

print("=" * 70)
print("6. Misc constants")
print("  Minkowski bound (2/pi)sqrt3 =", 2 / math.pi * math.sqrt(3))
w = cmath.exp(2j * math.pi / 3)
print("  (1-w)(1-wbar) =", (1 - w) * (1 - w.conjugate()), " ; 1-(w+wbar)+1 =", 1 - (w + w.conjugate()) + 1,
      " ; '3-(-1)' =", 3 - (-1))
print("  -w^2(1-w)^2 =", -w**2 * (1 - w)**2)
print("  Kim-Sarnak 7/64 doubled =", Fraction(7, 64) * 2)
for theta in (Fraction(1, 2), Fraction(5, 8)):
    for c in (0.1, 1.0):
        print(f"  zero-free width c/log q with q=x^{theta}, c={c}: x^beta = x * exp(-c/theta) = x * {math.exp(-c/float(theta)):.4f}")

print("=" * 70)
print("7. Class numbers h(-d) for d = 3,7,11,19,43,67,163 (count reduced forms)")
def h(D):
    D = -D
    cnt = 0
    a = 1
    while 3 * a * a <= -D:
        for b in range(-a + 1, a + 1):
            if (b * b - D) % (4 * a) == 0:
                c = (b * b - D) // (4 * a)
                if c >= a and math.gcd(math.gcd(a, abs(b)), c) == 1:
                    if b < 0 and (a == c):
                        continue
                    cnt += 1
        a += 1
    return cnt
for d in (3, 7, 11, 19, 43, 67, 163):
    print(f"  h(-{d}) = {h(d)};  only ramified prime: {d}")

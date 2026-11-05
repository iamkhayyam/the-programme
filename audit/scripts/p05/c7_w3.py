import mpmath as mp
# L(s,chi_{-3}) = 3^{-s}(zeta(s,1/3)-zeta(s,2/3))
L=lambda s: 3**(-s)*(mp.zeta(s,mp.mpf(1)/3)-mp.zeta(s,mp.mpf(2)/3))
print("L(1,chi_-3)=",L(1)," pi/(3sqrt3)=",mp.pi/(3*mp.sqrt(3)))
print("min of L(sigma) on (0,1):", min(L(mp.mpf(i)/200) for i in range(1,200)))
# real characters mod 3^K: generator g=2 (primitive root mod 3^K for all K)
for K in range(1,7):
    q=3**K; phi=2*3**(K-1)
    # characters chi_j(2^m)=exp(2pi i j m/phi); real iff 2j/phi integer => j in {0, phi/2}
    real=[j for j in range(phi) if (2*j)%phi==0]
    # check chi_{phi/2}(n) depends only on n mod 3
    dlog={}; v=1
    for m in range(phi): dlog[v]=m; v=v*2%q
    ok=all(((-1)**dlog[n])==(1 if n%3==1 else -1) for n in range(1,q) if n%3)
    print("K",K,"real chars j:",real," nontrivial real char = (n/3) induced from mod 3:",ok)

import numpy as np, math
# 1. Kloosterman sums mod 3^K: is |S(1,b;3^K)| << q^{3/8}?
for K in range(2,10):
    q=3**K
    n=np.array([x for x in range(q) if x%3]); inv=np.array([pow(int(x),-1,q) for x in n])
    best=0
    for b in range(1,q):
        if b%3==0: continue
        S=np.exp(2j*np.pi*((n+b*inv)%q)/q).sum()
        best=max(best,abs(S))
    print(f"K={K} q={q}: max_b |S(1,b;q)|={best:9.2f}  q^(1/2)={q**.5:8.2f} ratio={best/q**.5:.3f}  q^(3/8)={q**.375:7.2f}")

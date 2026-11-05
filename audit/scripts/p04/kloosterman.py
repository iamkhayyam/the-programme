# Kloosterman sums S(a,b;3^K): test the claimed bound |S| << (3^K)^{3/8+eps}
import numpy as np
from math import gcd
def S_all_b(q, a=1):
    # S(a,b;q) for all b via FFT: S(a,b)=sum_{y unit} e(a*ybar/q) e(b*y/q)
    f = np.zeros(q, dtype=complex)
    for y in range(1, q):
        if gcd(y, q) == 1:
            yb = pow(y, -1, q)
            f[y] = np.exp(2j*np.pi*a*yb/q)
    # sum_y f(y) e(b y/q) = q * ifft(f)[b]
    return q*np.fft.ifft(f)
print("K  q   max_b|S(1,b)|/q^(1/2)   |S(1,1)|/q^(1/2)  #b with |S|>q^(1/2)  max|S|/q^(3/8)")
rows=[]
for K in range(1, 12):
    q = 3**K
    S = S_all_b(q)
    m = np.max(np.abs(S[1:]))  # b != 0
    # restrict to b coprime to 3 for honesty
    idx = [b for b in range(1,q) if b%3]
    mc = np.max(np.abs(S[idx]))
    cnt = sum(1 for b in idx if abs(S[b]) > q**0.5)
    rows.append((K,q,mc/q**0.5, abs(S[1])/q**0.5, cnt, mc/q**0.375))
    print(K, q, round(mc/q**0.5,4), round(abs(S[1])/q**0.5,4), cnt, round(mc/q**0.375,3))
# Sum over K of max |S| vs Q^{1/2}, Q^{3/8}, Q^{5/8}

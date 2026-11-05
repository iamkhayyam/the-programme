from fractions import Fraction as F
from math import comb, log
import itertools
print("theta_k:", [(k, F(2**k-k, 2**k)) for k in range(1,8)])
# P05 model: valid iff all constraints true; count invalid
for k in range(1,7):
    inv = sum(1 for c in itertools.product([0,1],repeat=k) if not all(c))
    print(f"k={k}: P05-model invalid={inv} (2^k-1={2**k-1}), claimed k={k}")
# Pascal mod p survivors in rows 0..p^m-1
for p in (2,3,5):
    for m in (1,2,3):
        N=p**m
        s=sum(1 for n in range(N) for k in range(n+1) if comb(n,k)%p)
        print(f"p={p} m={m}: nonzero entries rows<{N} = {s}; (p+1)^m={(p+1)**m}; (p(p+1)/2)^m={(p*(p+1)//2)**m}")
for p in (2,3,5):
    print(p, "log(p+1)/log p =", log(p+1)/log(p), " true dim log(p(p+1)/2)/log p =", log(p*(p+1)/2)/log(p))
pd = F(2,3)*F(8,9)*F(26,27)
print("pattern density", pd, float(pd), "5/8-pd", float(F(5,8)-pd), "rel to 5/8", float((F(5,8)-pd)/F(5,8)), "rel to pd", float((F(5,8)-pd)/pd))
# Eisenstein
def mul(z,w): a,b=z; c,d=w; return (a*c-b*d, a*d+b*c-b*d)
def N(z): a,b=z; return a*a-a*b+b*b
print("N(1-w)",N((1,-1)), "(1-w)^2", mul((1,-1),(1,-1)), "(1+w)(1-w)^2", mul((1,1),mul((1,-1),(1,-1))), "N(1+w)", N((1,1)))
# minGap table
tbl={(1,1):10,(1,3):2,(1,7):6,(1,9):8,(3,1):8,(3,3):10,(3,7):4,(3,9):6,(7,1):4,(7,3):6,(7,7):10,(7,9):2,(9,1):2,(9,3):4,(9,7):8,(9,9):10}
ok=all(((b-a)%10 or 10)==g for (a,b),g in tbl.items()); print("minGap table correct:", ok)
# phi(3^K)
print([3**K-3**(K-1)==2*3**(K-1) for K in range(1,8)])
# K41 kolmogorov wrong derivation check
print("(2^3-2)/2^3 =", F(6,8), " theta_2 =", F(2**2-2,4))
print("log2(3) =", log(3,2))

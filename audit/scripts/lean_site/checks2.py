import cmath, math
from math import comb
# 1. Pascal mod 2: fraction of even (void) entries in first 2^m rows
for m in (4,6,8,10):
    N=2**m; tot=N*(N+1)//2; odd=3**m
    print(f"mod2 rows<{N}: odd frac={odd/tot:.4f}, void frac={1-odd/tot:.4f}")
# 2. LOS transitions up to 10^7
L=10**7
sieve=bytearray([1])*(L+1); sieve[0]=sieve[1]=0
for i in range(2,int(L**.5)+1):
    if sieve[i]: sieve[i*i::i]=bytearray(len(range(i*i,L+1,i)))
ps=[i for i in range(7,L+1) if sieve[i]]
from collections import Counter
c=Counter((a%10,b%10) for a,b in zip(ps,ps[1:]))
tot=sum(c.values())
print("transitions (r,s): count, share")
for r in (1,3,7,9):
    print(r, [(s, c[(r,s)], round(c[(r,s)]/tot*16,3)) for s in (1,3,7,9)])
# same class mod 3 consecutive
same=sum(1 for a,b in zip(ps,ps[1:]) if a%3==b%3)
print("consecutive primes same class mod 3 share:", same/(len(ps)-1))
# last digit 1 primes by class mod 3
print("primes ending in 1, mod 3 classes:", Counter(p%3 for p in ps if p%10==1))
# 3. Kloosterman sums S(1,1;3^K)
def kl(m,n,q):
    s=0
    for x in range(1,q):
        if math.gcd(x,q)==1:
            xi=pow(x,-1,q); s+=cmath.exp(2j*math.pi*(m*x+n*xi)/q)
    return s
for K in range(2,10):
    q=3**K
    best=max(abs(kl(1,n,q)) for n in (1,2,4,7))
    print(f"K={K} q={q}: max|S(1,n;q)|={best:.2f}, q^(1/2)={q**.5:.2f}, 2q^(3/8)={2*q**.375:.2f}")

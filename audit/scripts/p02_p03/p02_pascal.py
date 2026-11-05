# Audit p02: Pascal/Khayyam triangle mod p facts
from math import comb, log
from fractions import Fraction

def nonzero_count(p, rows):
    # count entries C(n,k) % p != 0 for 0<=k<=n<rows, via row recurrence mod p
    row=[1]; cnt=0
    for n in range(rows):
        cnt += sum(1 for v in row if v % p)
        row=[1]+[(row[i]+row[i+1])%p for i in range(len(row)-1)]+[1]
    return cnt

print("== nonzero counts in first p^n rows ==")
for p in (2,3,5,7):
    for n in range(1,5):
        R=p**n
        if R>3000: break
        c=nonzero_count(p,R)
        print(f"p={p} n={n} rows={R}: nonzero={c}, (p(p+1)/2)^n={(p*(p+1)//2)**n}, (p+1)^n={(p+1)**n}")

print("\n== dimensions ==")
for p in (2,3,5,7):
    print(f"p={p}: correct log(p(p+1)/2)/log p = {log(p*(p+1)/2)/log(p):.5f}; paper's log(p+1)/log p = {log(p+1)/log(p):.5f}")

print("\n== number of sub-triangle copies at one scale step for p=3 ==")
# rows 0..26 (3^3) split into 3x3 block grid of 9-row blocks; count blocks that are nonzero copies
p=3; n=3; R=p**n; s=p**(n-1)
tri=[[comb(a,b)%p for b in range(a+1)] for a in range(R)]
copies=0; voids=0
for I in range(p):
    for J in range(I+1):
        # block (I,J): rows I*s..I*s+s-1, cols J*s.. ; upright copy region
        ok=all((tri[I*s+i][J*s+j]!=0)==(comb(i,j)%p!=0) for i in range(s) for j in range(i+1))
        copies+=ok
print("upright copies of the 9-row triangle inside first 27 rows:", copies)

print("\n== voids (zero entries mod 3) in first 3^K rows vs 'k invalid of 2^k' ==")
for K in range(1,6):
    R=3**K; total=R*(R+1)//2; nz=6**K
    print(f"K={K}: entries={total}, nonzero={nz} (check {nonzero_count(3,R) if R<=243 else 'skip'}), zero={total-nz}, survivor density={Fraction(nz,total)}={nz/total:.4f}; (2^K-K)/2^K={Fraction(2**K-K,2**K)}={(2**K-K)/2**K:.4f}")
print("(2/3)^3 (digit-pair density in full square) =", Fraction(2,3)**3)

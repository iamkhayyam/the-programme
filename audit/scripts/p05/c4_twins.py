import numpy as np
from collections import Counter
N=10**7
s=np.ones(N+3,bool); s[:2]=False
for i in range(2,int((N+2)**0.5)+1):
    if s[i]: s[i*i::i]=False
P=np.nonzero(s)[0]
tw=[int(p) for p in P if p>3 and p+2<=N+2 and s[p+2]]
print("twin pairs p in (3,1e7]:",len(tw))
for m in (3,9,27):
    c=Counter(p%m for p in tw); tot=len(tw)
    print("mod",m,{r:round(c[r]/tot,4) for r in sorted(c)})
# Every residue r mod 27 with r=2 mod 3 occurs; check conditional independence
print("residues mod 27 with r%3==2:",sorted(r for r in range(27) if r%3==2))
# Sophie Germain
sg=[int(p) for p in P if p>3 and 2*p+1<=N+2 and s[2*p+1]]
print("Sophie Germain p in (3,~5e6]:",len(sg), Counter(p%3 for p in sg))
# cousin primes (p,p+4) also constrained mod 3: p = 1 mod 3
co=[int(p) for p in P if p>3 and p+4<=N+2 and s[p+4]]
print("cousin p mod 3:",Counter(p%3 for p in co))

# Audit p03: twin primes vs Sophie Germain primes, 3-adic structure and local densities
import numpy as np
from collections import Counter
from math import log
N=10**8
s=np.ones(2*N+2,dtype=bool); s[:2]=False
for i in range(2,int((2*N+1)**0.5)+1):
    if s[i]: s[i*i::i]=False
P=np.nonzero(s[:N+1])[0]
tw=P[(P>3)&s[P+2]]
sg=P[(P>3)&s[2*P+1]]
print(f"N={N}: #twin p (p>3) = {len(tw)}, #SG p (p>3) = {len(sg)}")

# 1. every lift of 2 mod 3 to mod 3^K keeps both members coprime to 3
for K in (2,3,4):
    q=3**K
    lifts=[a for a in range(q) if a%3==2]
    bad_tw=[a for a in lifts if a%3==0 or (a+2)%3==0]
    bad_sg=[a for a in lifts if a%3==0 or (2*a+1)%3==0]
    print(f"mod {q}: lifts of 2 mod 3 = {len(lifts)}; lifts killing p or p+2: {bad_tw}; lifts killing p or 2p+1: {bad_sg}")

# 2. empirical distribution of p mod 3^K among lifts for twins and SG
for K in (2,3,4):
    q=3**K
    for name,arr in (("twin",tw),("SG",sg)):
        c=Counter((arr%q).tolist())
        vals=np.array([c.get(a,0) for a in range(q) if a%3==2])
        others=sum(v for a,v in c.items() if a%3!=2)
        exp=len(arr)/len(vals)
        chi2=((vals-exp)**2/exp).sum()
        print(f"  {name:4s} mod {q:3d}: classes={len(vals)}, outside 2 mod 3={others}, min/max ratio to mean = {vals.min()/exp:.4f}/{vals.max()/exp:.4f}, chi2={chi2:.1f} (df={len(vals)-1})")

# 3. local forbidden residue classes mod l for (n, n+2) vs (n, 2n+1)
print("forbidden classes mod l: twin vs SG")
for l in (2,3,5,7,11,13):
    ft=sorted({a for a in range(l) if a%l==0 or (a+2)%l==0})
    fs=sorted({a for a in range(l) if a%l==0 or (2*a+1)%l==0})
    print(f"  l={l}: twin {ft} ({len(ft)}), SG {fs} ({len(fs)})")

# 4. Hardy-Littlewood: twin ~ 2C2 int dt/log^2 t ; SG ~ 2C2 int dt/(log t log(2t+1))
from mpmath import mp, quad, log as mlog
mp.dps=20
C2=0.6601618158468696
It=2*C2*quad(lambda t: 1/mlog(t)**2,[2,N])
Is=2*C2*quad(lambda t: 1/(mlog(t)*mlog(2*t+1)),[2,N])
print(f"HL twin pred {float(It):.0f} vs actual {len(tw)+1} ; HL SG pred {float(Is):.0f} vs actual {len(sg)+2}")

import numpy as np
from mpmath import mp, mpf, log, findroot
mp.dps=30
def H2(p): return -p*log(p,2)-(1-p)*log(1-p,2)
# BSC capacity 1-H(p) = 1/2
p=findroot(lambda q: 1-H2(q)-mpf(1)/2, 0.1)
print("BSC crossover p with C=1/2:", p)
# Claimed formula C = log|X| - min_{p(x)} H(X|Y) for BSC(0.11)
def HXgivenY(px1, eps):
    px=np.array([1-px1,px1]); W=np.array([[1-eps,eps],[eps,1-eps]])
    pxy=px[:,None]*W; py=pxy.sum(0)
    h=0
    for x in range(2):
        for y in range(2):
            if pxy[x,y]>0: h-= pxy[x,y]*np.log2(pxy[x,y]/py[y])
    return h
eps=0.11
grid=np.linspace(0,1,100001)
vals=[HXgivenY(g,eps) for g in grid]
print("min_p H(X|Y) for BSC(0.11):", min(vals), "at p(x=1)=",grid[int(np.argmin(vals))])
print("claimed C = 1 - min H(X|Y) =", 1-min(vals))
Ivals=[ (lambda g: (-(g*(1-eps)+(1-g)*eps)*np.log2(g*(1-eps)+(1-g)*eps+1e-300)-(1-(g*(1-eps)+(1-g)*eps))*np.log2(1-(g*(1-eps)+(1-g)*eps)+1e-300)) - float(H2(mpf(eps))))(g) for g in grid]
print("true C = max I =", max(Ivals), " 1-H(0.11)=", 1-float(H2(mpf(eps))))
# H(X|Y) at uniform input
print("H(X|Y) at uniform:", HXgivenY(0.5,eps), "H(0.11)=", float(H2(mpf(eps))))
# AEP example: p=(1/3,2/3) on binary alphabet
pp=mpf(1)/3
Hh=H2(pp)
print("AEP binary p=1/3: H/log2|A| =", Hh, "(not 1/2, not dyadic)")
for n in [10,100,1000]:
    print(" n=",n," typical fraction ~ 2^{n(H-1)} =", mpf(2)**(n*(Hh-1)))
# Check H = log|A| - D(p||u)
p3=np.array([0.5,0.3,0.2]); H=-(p3*np.log2(p3)).sum(); D=(p3*np.log2(p3*3)).sum()
print("H, log3 - D:", H, np.log2(3)-D)
# k-hierarchy
from fractions import Fraction as F
print([ (k, F(2**k-k,2**k)) for k in range(1,7)])
print("log2(3)=", mp.log(3,2))
print("2026-1948=",2026-1948)

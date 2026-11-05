# Can "0.624 +- 0.002", "0.749 +- 0.003", "0.843 +- 0.004" be measured from primes in [2,1e6] with moduli 3^K?
import numpy as np, math
x=10**6
print("Available exponents log_x(3^K) for x=1e6:")
g=[(K,math.log(3**K)/math.log(x)) for K in range(1,13)]
for K,t in g: print(K,3**K,round(t,4))
for target,err in [(0.624,0.002),(0.749,0.003),(0.843,0.004)]:
    near=min(g,key=lambda kt:abs(kt[1]-target))
    print("target",target,"+-",err," nearest grid point K=%d -> %.4f (distance %.4f)"%(near[0],near[1],abs(near[1]-target)))
print("grid spacing log3/log(1e6) =",math.log(3)/math.log(x))
# One natural 'empirical level' statistic: largest q=3^K with max_a|pi(x;q,a)-pi(x)/phi(q)| <= c*pi(x)/phi(q)
s=np.ones(x+1,bool); s[:2]=False
for i in range(2,int(x**0.5)+1):
    if s[i]: s[i*i::i]=False
P=np.nonzero(s)[0]; pix=len(P)
rel={}
for K in range(1,13):
    q=3**K; cnt=np.bincount(P%q,minlength=q); a=np.arange(q); cop=a%3!=0
    m=pix/(2*q//3); rel[K]=np.abs(cnt[cop]-m).max()/m
    print(K, round(rel[K],4))
for c in [0.05,0.1,0.2,0.5,1.0]:
    Ks=[K for K in rel if rel[K]<=c]
    Kmax=max(Ks); print("threshold",c,"-> empirical level",round(math.log(3**Kmax)/math.log(x),4))
# Regression: fit log(max err) ~ alpha + beta log q ; solve where err = main term
Ks=np.arange(1,13); lq=Ks*math.log(3)
errs=[]
for K in Ks:
    q=3**int(K); cnt=np.bincount(P%q,minlength=q); a=np.arange(q); cop=a%3!=0
    errs.append(np.abs(cnt[cop]-pix/(2*q//3)).max())
b,a0=np.polyfit(lq,np.log(errs),1)
# main term log: log(pix) - log(phi(q)) ; crossing log q*
lq_star=(math.log(pix)-math.log(2/3)-a0)/(b+1)
print("regression slope",round(b,3)," crossing exponent",round(lq_star/math.log(x),4))

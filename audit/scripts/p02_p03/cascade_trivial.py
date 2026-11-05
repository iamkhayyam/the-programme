# The stated "level of distribution 5/8 over cascade moduli 3^K" (p04 Thm 1.1 / p05 Thm 5.7, repeated in p03)
# is a sum over ~log x moduli; trivial bound |psi(x;q,a)-x/phi(q)| << x log x / q makes the tail geometric.
# Numerically: S(theta) = sum_{3^K<=x^theta} max_a |psi(x;3^K,a) - x/phi(3^K)| for several theta.
import numpy as np, math
x=10**8
s=np.ones(x+1,dtype=bool); s[:2]=False
for i in range(2,int(x**0.5)+1):
    if s[i]: s[i*i::i]=False
P=np.nonzero(s)[0]
# prime powers p^m (m>=2) <= x
pp=[];lw=[]
for p in P[P<=int(x**0.5)]:
    v=int(p)*int(p)
    while v<=x: pp.append(v); lw.append(math.log(p)); v*=int(p)
N=np.concatenate([P,np.array(pp,dtype=np.int64)]); W=np.concatenate([np.log(P.astype(float)),np.array(lw)])
rows=[]
K=1
while 3**K<=x//2:
    q=3**K; phi=2*3**(K-1)
    r=(N%q).astype(np.int64)
    psi=np.bincount(r,weights=W,minlength=q)
    a=np.arange(q); mask=(a%3!=0)
    err=np.abs(psi[mask]-x/phi).max()
    rows.append((K,q,math.log(q)/math.log(x),err))
    K+=1
cum=0
print(f"x={x:.0e}; x/(log x)^2={x/math.log(x)**2:.3e}")
for K,q,th,err in rows:
    cum+=err
    print(f"K={K:2d} q=3^K={q:>10d} log q/log x={th:.3f} max_a|err|={err:12.1f}  err/x={err/x:.2e}  cumulative sum/x={cum/x:.3e}")

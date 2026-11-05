import numpy as np, math
X=10**7; pr=np.load("pr.npy"); pr=pr[pr<=X]
# Lambda: primes and prime powers
ns=[pr.astype(np.int64)]; ws=[np.log(pr.astype(float))]
pp=pr[pr<=int(X**0.5)+1].astype(np.int64)
k=2
while 2**k<=X:
    q=pp.astype(float)**k; m=q<=X; q=np.round(q).astype(np.int64)
    pass
    ns.append(q[m]); ws.append(np.log(pp[m].astype(float))); k+=1
n=np.concatenate(ns); w=np.concatenate(ws)
print("psi(x)/x =", w.sum()/X)
L=math.log(X); tot=0
print(" K   3^K     theta=log q/log x   max_a|psi-x/phi|     (that)/x      cum/x")
K=1
while 3**K<=X:
    q=3**K; phi=2*3**(K-1)
    b=np.bincount(n%q,weights=w,minlength=q)
    a=np.arange(q); coprime=(a%3!=0)
    err=np.abs(b[coprime]-X/phi).max()
    tot+=err
    print(f"{K:2d} {q:9d}  {math.log(q)/L:6.3f}   {err:14.1f}   {err/X:10.2e}   {tot/X:10.2e}")
    K+=1
print("x/(log x)^1 /x =",1/L," x/(log x)^2 /x=",1/L**2, " x/(log x)^3 /x=",1/L**3)

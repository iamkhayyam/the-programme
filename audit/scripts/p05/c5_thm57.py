# Theorem 5.7: sum over K with 3^K <= x^theta of max_a |psi(x;3^K,a) - x/phi(3^K)|.
# Show the sum is insensitive to theta (dominated by small K), i.e. the statement is trivial
# (trivial bound + Siegel-Walfisz) for ANY theta<=1, so 5/8 is not "forced".
import numpy as np, math
x=10**7
s=np.ones(x+1,bool); s[:2]=False
for i in range(2,int(x**0.5)+1):
    if s[i]: s[i*i::i]=False
Lam=np.zeros(x+1)
for p in np.nonzero(s)[0]:
    p=int(p); lp=math.log(p); pk=p
    while pk<=x:
        Lam[pk]=lp; pk*=p
n=np.arange(x+1)
rows=[]
for K in range(1,16):
    q=3**K
    if q>x: break
    psi=np.bincount(n%q,weights=Lam,minlength=q)
    a=np.arange(q); cop=(a%3)!=0
    main=x/(2*q//3)
    err=np.abs(psi[cop]-main)
    rows.append((K,q,math.log(q)/math.log(x),err.max(),main,err.max()/main, (x/q)*math.log(x)))
print("K q log_x q  max_a|err|  main x/phi(q)  rel.err  trivial (x/q)log x")
for r in rows: print("%2d %8d %.4f %12.1f %12.1f %8.4f %12.1f"%r)
tot=0
print("\ntheta  sum_{3^K<=x^theta} max_a|err|   as fraction of x")
for th in [0.3,0.5,0.625,0.75,0.9,1.0]:
    S=sum(r[3] for r in rows if r[1]<=x**th)
    print(th, round(S,1), S/x)

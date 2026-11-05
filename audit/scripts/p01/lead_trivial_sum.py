import numpy as np, math
x=10**7
s=np.ones(x+1,bool); s[:2]=False
for i in range(2,int(x**.5)+1):
    if s[i]: s[i*i::i]=False
P=np.nonzero(s)[0]
# Lambda(n): log p at prime powers
n_list=[];w_list=[]
for p in P:
    lp=math.log(p); pk=int(p)
    while pk<=x:
        n_list.append(pk); w_list.append(lp); pk*=int(p)
n=np.array(n_list,dtype=np.int64); w=np.array(w_list)
psi=w.sum()
print(f"x={x:.0e}, psi(x)={psi:.0f}")
total=0; rows=[]
K=1
while 3**K<=x:
    q=3**K; phi=2*3**(K-1)
    sums=np.bincount(n%q,weights=w,minlength=q)
    cop=np.array([a for a in range(q) if a%3]) if q<=3**9 else None
    vals=sums[np.arange(q)%3!=0]
    err=np.max(np.abs(vals-x/phi))
    total+=err
    rows.append((K,q,math.log(q)/math.log(x),err,total))
    K+=1
for K,q,th,e,t in rows: print(f"K={K:2d} q=3^{K} (theta={th:.3f}): max_a err={e:12.1f}   cumulative={t:12.1f}  cumulative/x={t/x:.5f}")
print("x/(log x)^2 =",x/math.log(x)**2, "  x/(log x)^3 =",x/math.log(x)**3)

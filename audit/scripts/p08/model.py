# Crude Hardy-Littlewood/Cramer-type model of last-digit transitions (base 10),
# P(d1->d2) ∝ sum_{h>0, h ≡ d2-d1 mod 10} S'(h) exp(-h/log x),
# where S'(h) = prod_{p ∤ 10} local factor (the p=2,5 factors are fixed by conditioning on residues mod 10).
# Compare (A) correct p=3 factor (3/2 if 3|h, 3/4 otherwise) vs (B) the paper's claim (0 if 3|h, 1/2 otherwise).
import math, sympy
P=[p for p in sympy.primerange(3,20000) if p!=5]
def Sp(h, p3mode):
    s=1.0
    for p in P:
        if p==3:
            if p3mode=='correct': s*= 1.5 if h%3==0 else 0.75
            elif p3mode=='paper': s*= 0.0 if h%3==0 else 0.5
            continue
        nu = 1 if h%p==0 else 2
        s*= (1-nu/p)/(1-1/p)**2
    return s
D=[1,3,7,9]
def matrix(x, mode):
    L=math.log(x); out={}
    cache={}
    for d1 in D:
        row=[]
        for d2 in D:
            tot=0
            for h in range(2,int(40*L),2):
                if (d1+h)%10!=d2: continue
                if h not in cache: cache[h]=Sp(h,mode)
                tot+=cache[h]*math.exp(-h/L)
            row.append(tot)
        s=sum(row); out[d1]=[100*r/s for r in row]
    return out
x=2.038e9
obs={1:[18.493,29.718,30.019,21.770],3:[24.044,17.770,28.175,30.011],7:[25.496,27.020,17.757,29.727],9:[31.966,25.492,24.051,18.492]}
paper={1:[18,30,30,22],3:[38,18,24,20],7:[31,24,19,26],9:[41,20,22,17]}
for mode in ['correct','paper']:
    m=matrix(x,mode); err=0
    print(f"model p3={mode} at x={x:.3g}")
    for d in D:
        print(d,' '.join(f"{v:6.2f}" for v in m[d]), '   obs', ' '.join(f"{v:6.2f}" for v in obs[d]))
        err+=sum((a-b)**2 for a,b in zip(m[d],obs[d]))
    print("RMS error vs observed (pct points):", math.sqrt(err/16))
err=sum((a-b)**2 for d in D for a,b in zip(paper[d],obs[d]))
print("paper's table RMS error vs observed 1e8:", math.sqrt(err/16))
# singular series values for gaps
C2=1.0
for p in sympy.primerange(3,10**6): C2*=p*(p-2)/(p-1)**2
print("2*C2 =",2*C2)
for h in [2,4,6,8,10,12,14,30]:
    f=1.0
    for p in sympy.primefactors(h):
        if p>2: f*=(p-1)/(p-2)
    print(f"S({h}) = {2*C2*f:.4f}")
# Paper's own formula for S_3(k)
for k in range(1,7):
    chi=sum(1 for j in (1,2) if (j+k)%3 in (1,2))
    print("k",k,"chi3",chi,"paper formula (3/2)(1-chi/2) =",1.5*(1-chi/2), " correct p=3 local factor =", (chi/2)/(2/3))

def Sp_neutral(h):
    s=1.0
    for p in P:
        if p==3: continue
        nu = 1 if h%p==0 else 2
        s*= (1-nu/p)/(1-1/p)**2
    return s
L=math.log(x)
print("model with p=3 factor removed (no ternary information at all):")
for d1 in D:
    row=[sum(Sp_neutral(h)*math.exp(-h/L) for h in range(2,int(40*L),2) if (d1+h)%10==d2) for d2 in D]
    s=sum(row); print(d1,' '.join(f"{100*r/s:6.2f}" for r in row))

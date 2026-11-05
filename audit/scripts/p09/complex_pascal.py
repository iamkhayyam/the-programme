import numpy as np, math
N=64; n=np.arange(N)
def th(x):
    P=np.abs(np.fft.fft(x))**2; k=np.arange(N); return P[k>N/2].sum()/P.sum()
def pw(v): return np.sum(np.abs(np.fft.fft(v))**2)
rng=np.random.default_rng(3); xr=rng.standard_normal(N); xr-=xr.mean()
# (a) unequal power but theta same as real signal
x=(1+2j)*xr
print("(a) x=(1+2i)xR: P(xI)/P(xR)=%.2f theta=%.6f theta(xR)=%.6f"%(pw(x.imag)/pw(x.real),th(x),th(xr)))
# (b) equal power but theta=0
x=np.exp(2j*np.pi*n/N)
print("(b) x=exp(2pi i n/N): P(xI)/P(xR)=%.2f theta=%.6f"%(pw(x.imag)/pw(x.real),th(x)))
x=np.exp(-2j*np.pi*n/N)
print("    x=exp(-2pi i n/N): theta=%.6f  (endpoint 1 also reachable modulo DC/Nyq)"%th(x))
# Prop 5.4 counterexample
print("Prop 5.4: x=ones(32768): |theta_emp-1/2| =",abs(0.5-0.0), " vs claimed bound C*15*2.2e-16")
print()
# Pascal mod p
def counts(p,m):
    R=p**m; nz=0; row=[1]
    tot=0
    for r in range(R):
        tot+=len(row); nz+=sum(1 for v in row if v%p)
        row=[1]+[(row[i]+row[i+1])%p for i in range(len(row)-1)]+[1]
    return tot,nz
for p in [2,3,5]:
    for m in range(1,8 if p==2 else (6 if p==3 else 4)):
        tot,nz=counts(p,m)
        print("p=%d m=%d rows=%d total=%d nonzero=%d (=(p(p+1)/2)^m=%d) void frac=%.4f"%(p,m,p**m,tot,nz,(p*(p+1)//2)**m,1-nz/tot))
print()
for p in [2,3,5,7,11]:
    dpaper=math.log(p+1)/math.log(p); dtrue=math.log(p*(p+1)/2)/math.log(p)
    print("p=%2d paper d_p=log(p+1)/log p=%.4f  true dim=log(p(p+1)/2)/log p=%.4f  paper void formula 1-1/p^(d_p-1)=%.4f"%(p,dpaper,dtrue,1-1/p**(dpaper-1)))
d3=math.log(4)/math.log(3)
print("Table 6.1 p=3 entry 1-4^(1-d3)=%.4f ; text formula 1-3^(1-d3)=%.4f"%(1-4**(1-d3),1-3**(1-d3)))

# Conductor of the base change Psi = chi o N (chi primitive mod 3^K) as a ray class character of Q(omega).
# p04 Appendix A, Step 1 claims the conductor "matches the conductor of chi in Q exactly".
import cmath, math
def mul(z,w):  # (a+b w)(c+d w)
    a,b=z; c,d=w
    return (a*c-b*d, a*d+b*c-b*d)
def norm(z): a,b=z; return a*a-a*b+b*b
def pi_pow(n):
    z=(1,0)
    for _ in range(n): z=mul(z,(1,-1))
    return z
for K in range(1,6):
    q=3**K; phi=2*3**(K-1)
    # discrete log base 2 (2 is a primitive root mod 3^K)
    dlog={}; g=1
    for j in range(phi): dlog[g]=j; g=g*2%q
    assert len(dlog)==phi
    r=1  # 3 does not divide r -> primitive character
    chi=lambda m: cmath.exp(2j*math.pi*r*dlog[m%q]/phi)
    cond=None
    for n in range(0,2*K+1):
        pn=pi_pow(n); ok=True
        for a in range(q):
            for b in range(q):
                alpha=mul(pn,(a,b)); alpha=(alpha[0]+1,alpha[1])  # 1 + (1-w)^n * beta
                N=norm(alpha)%q
                if N%3==0: continue
                if abs(chi(N)-1)>1e-9: ok=False; break
            if not ok: break
        if ok: cond=n; break
    print(f"K={K}: chi primitive mod 3^{K}; conductor of chi o N = (1-omega)^{cond}, norm 3^{cond}; (3^K)=(1-omega)^{2*K}; conductor of chi = 3^{K}")

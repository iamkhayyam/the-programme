import numpy as np
def S(a,b,q):
    x=np.arange(q); m=np.gcd(x,q)==1; x=x[m]
    xinv=np.array([pow(int(v),-1,q) for v in x])
    ang=2*np.pi*((a*x + b*xinv)%q)/q
    return np.exp(1j*ang).sum()
print("K  q   |S(1,1;q)|  |S(1,7;q)|  max_b|S(1,b)|  q^(1/2)  2q^(1/2)  q^(3/8)  ratio max/q^(3/8)")
for K in range(1,11):
    q=3**K
    s11=abs(S(1,1,q)); s17=abs(S(1,7,q))
    # max over b in a sample of b coprime to 3
    bs=[b for b in range(1,min(q,200)) if b%3]
    mx=max(abs(S(1,b,q)) for b in bs)
    print(K,q,round(s11,2),round(s17,2),round(mx,2),round(q**0.5,2),round(2*q**0.5,2),round(q**0.375,2),round(mx/q**0.375,2))
# mean square identity: sum_a |S(a,1;q)|^2 = q*phi(q)
for K in [3,5,6]:
    q=3**K
    ms=sum(abs(S(a,1,q))**2 for a in range(q))
    print("K",K,"sum_a|S(a,1;q)|^2 =",round(ms), " q*phi(q) =", q*(2*q//3), " => RMS |S| =", round((ms/q)**0.5,2), " vs q^(3/8)=",round(q**0.375,2))
# sum over 3^K <= Q of |S(1,1;3^K)| vs Q^{3/8}
tot=0
for K in range(1,11):
    q=3**K; tot+=abs(S(1,1,q))
    print("Q=3^%d: sum_{3^j<=Q}|S(1,1;3^j)|=%.1f  Q^(3/8)=%.1f  Q^(1/2)=%.1f"%(K,tot,q**0.375,q**0.5))

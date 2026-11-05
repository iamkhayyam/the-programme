import numpy as np, math, sys
X=int(sys.argv[1]) if len(sys.argv)>1 else 10**8
N=2*X+3
s=np.ones(N+1,dtype=bool); s[:2]=False
for i in range(2,int(N**0.5)+1):
    if s[i]: s[i*i::i]=False
primes=np.nonzero(s[:X+1])[0]
print("X=",X,"#primes<=X:",len(primes))
# 1. primes mod 3 split
p5=primes[primes>3]
print("frac primes ≡2 mod 3:", np.mean(p5%3==2), " ≡1 mod 3:", np.mean(p5%3==1))
# 2. Sophie Germain and twin primes
sg=p5[s[2*p5+1]]
tw=p5[s[p5+2]]
print("#SG p<=X (p>3):",len(sg)," #twin p<=X (p>3):",len(tw))
for name,arr in [("SG",sg),("twin",tw)]:
    for m in [3,9,27,81]:
        r=arr%m; vals,cnt=np.unique(r,return_counts=True)
        print(name,"mod",m,dict(zip(vals.tolist(),cnt.tolist())))
np.save("sg.npy",sg); np.save("tw.npy",tw); np.save("pr.npy",primes)

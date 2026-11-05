import numpy as np, math
sg=np.load("sg.npy").astype(np.int64); tw=np.load("tw.npy").astype(np.int64); X=10**8
L=math.log(X)
print("Proxy equidistribution test for SG vs twin primes mod 3^K (x=1e8), classes a≡2 mod 3")
print(" K  theta   | SG: mean/class  max z   rel.maxdev | TW: mean/class  max z  rel.maxdev | E[max z] under multinomial (sim)")
rng=np.random.default_rng(1)
for K in range(2,16):
    q=3**K; m=3**(K-1)
    row=[K, math.log(q)/L]
    for arr in (sg,tw):
        r=arr%q; c=np.bincount(r,minlength=q); c=c[np.arange(q)%3==2]
        mu=len(arr)/m; z=np.abs(c-mu)/math.sqrt(mu)
        row+= [mu, z.max(), np.abs(c-mu).max()/mu]
    sim=rng.multinomial(len(sg), np.ones(m)/m, size=3) if m<=200000 else None
    ez = np.mean([ (np.abs(s-len(sg)/m)/math.sqrt(len(sg)/m)).max() for s in sim]) if sim is not None else float('nan')
    print("%2d %6.3f | %10.1f %7.2f %8.3f | %10.1f %7.2f %8.3f | %6.2f"%(tuple(row)+(ez,)))

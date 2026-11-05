import numpy as np, timeit
x=np.random.default_rng(0).standard_normal(32768); xc=x.astype(complex)
for name,f in [('fft complex input',lambda: np.fft.fft(xc)),('fft real input',lambda: np.fft.fft(x)),('rfft',lambda: np.fft.rfft(x))]:
    t=min(timeit.repeat(f,number=200,repeat=5))/200; print("%-18s %.1f us"%(name,t*1e6))
# Haar orthonormal transform: real->real, no redundancy (counterexample to Conj 8.1 'wavelet')
def haar(v):
    v=v.copy(); out=[]; 
    while len(v)>1:
        a=(v[0::2]+v[1::2])/np.sqrt(2); d=(v[0::2]-v[1::2])/np.sqrt(2); out.append(d); v=a
    out.append(v); return np.concatenate(out[::-1])
N=64; H=np.array([haar(e) for e in np.eye(N)]).T
print("Haar matrix orthogonal:",np.allclose(H@H.T,np.eye(N)),"rank",np.linalg.matrix_rank(H),"of",N,"-> redundancy 0")
# DHT
n=np.arange(N); C=np.cos(2*np.pi*np.outer(n,n)/N)+np.sin(2*np.pi*np.outer(n,n)/N)
print("Hartley matrix rank",np.linalg.matrix_rank(C),"of",N,"(real->real, invertible, no redundancy)")

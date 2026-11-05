import numpy as np, math
rng=np.random.default_rng(1)
def cor32(X):
    N=len(X); P=np.abs(X)**2
    lhs=P[1:N//2+1].sum()                 # k=1..floor(N/2)
    rhs=P[math.ceil(N/2)+1:N].sum()       # k=ceil(N/2)+1..N-1
    return lhs,rhs
print("Corollary 3.2 as stated (delta signal and random):")
for N in [2,3,4,5,8,9]:
    d=np.zeros(N); d[0]=1
    print(" N=%d delta: LHS=%.3f RHS=%.3f"%((N,)+cor32(np.fft.fft(d))), end=";")
    x=rng.standard_normal(N); print(" random: LHS=%.3f RHS=%.3f"%cor32(np.fft.fft(x)))
def theta_emp(x):
    X=np.fft.fft(x); N=len(X); P=np.abs(X)**2
    k=np.arange(N); return P[k>N/2].sum()/P.sum()
print("\ntheta_emp identity: theta = 1/2 - (|X0|^2+|X_{N/2}|^2)/(2E) for real x")
mx=0
for t in range(20000):
    N=int(rng.integers(2,64)); x=rng.standard_normal(N)*rng.uniform(0,3)+rng.uniform(-2,2)
    mx=max(mx,theta_emp(x))
print(" max theta_emp over 20000 random real signals (with random offsets):",mx)
N=32768
print(" constant signal:",theta_emp(np.ones(N)),"  alternating (-1)^n:",theta_emp((-1.0)**np.arange(N)))
print(" zero-mean, zero-Nyquist signal (sin):",theta_emp(np.sin(2*np.pi*5*np.arange(N)/N)))
x=rng.standard_normal(N)+0.1
print(" Gaussian + mean 0.1, N=32768:",theta_emp(x))
# sigma_mirror
X=np.fft.fft(rng.standard_normal(N)); k=np.arange(1,N)
print(" sigma_mirror (N=32768 gaussian):", 1-np.linalg.norm(X[N-k]-np.conj(X[k]))/(np.linalg.norm(X[N-k])+1e-12))

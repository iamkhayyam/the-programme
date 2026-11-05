import numpy as np
from fractions import Fraction as F
rng=np.random.default_rng(0)
print("numpy", np.__version__)
# 1. conjugate symmetry + counts
print("N | real-dof frac | indep complex bins frac (floor(N/2)+1)/N | Def2.3 derivable-bins frac")
for N in [2,3,4,5,8,9,16,17,32768]:
    x=rng.standard_normal(N); X=np.fft.fft(x)
    k=np.arange(1,N)
    err=np.max(np.abs(X[N-k]-np.conj(X[k])))
    indep_bins=N//2+1
    derivable=N-indep_bins
    # real dof: build Jacobian rank of x->[Re X, Im X]
    if N<=64:
        M=np.fft.fft(np.eye(N),axis=0)
        R=np.vstack([M.real,M.imag]); rank=np.linalg.matrix_rank(R)
    else: rank=None
    print(N, "symerr=%.1e"%err, "rank(real)=",rank, "realfrac=",F(N,2*N) if rank is None else F(rank,2*N),
          "indep_bins=",F(indep_bins,N), "derivable(Def2.3)=",F(derivable,N))

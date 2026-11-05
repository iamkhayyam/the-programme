import numpy as np, math
from mpmath import quad, log as mlog, mpf
sg=np.load("sg.npy"); tw=np.load("tw.npy")
C2=0.6601618158468696
print("Testing guesses for undefined 'delta' (paper: delta*log x = 2.38 +- 0.18)")
print("    x      piSG   delta1*L(vs 2C2 x/L^2)  delta2*L(vs 2C2 x/(L*log2x))  delta3*L(vs HL integral) | twin delta1*L")
for e in [5,5.5,6,6.5,7,7.5,8]:
    x=int(10**e); L=math.log(x)
    n=np.searchsorted(sg,x,side='right')+2  # include p=2,3
    nt=np.searchsorted(tw,x,side='right')+1 # include (3,5)
    m1=2*C2*x/L**2; m2=2*C2*x/(L*math.log(2*x))
    m3=float(2*C2*quad(lambda t: 1/(mlog(t)*mlog(2*t+1)),[2,x]))
    mt=2*C2*x/L**2
    print("%9d %8d   %7.3f   %7.3f   %7.3f | %7.3f"%(x,n,(n/m1-1)*L,(n/m2-1)*L,(n/m3-1)*L,(nt/mt-1)*L))

import numpy as np, math
rng=np.random.default_rng(7)
def energy_at_ratio(P,ratio):
    s=np.sort(P.ravel())[::-1]; m=max(1,int(round(P.size/ratio))); return s[:m].sum()/s.sum()
def ratio_at_energy(P,frac):
    s=np.sort(P.ravel())[::-1]; c=np.cumsum(s)/s.sum(); m=np.searchsorted(c,frac)+1; return P.size/m, m
W=rng.standard_normal((512,64))
for name,P in [('fft2 full',np.abs(np.fft.fft2(W))**2),('1D flat full',np.abs(np.fft.fft(W.ravel()))**2),('rfft half',np.abs(np.fft.rfft(W.ravel()))**2)]:
    print("Gaussian %-12s energy kept at 5x: %.3f ; ratio at 52%%: %.2f"%(name,energy_at_ratio(P,5),ratio_at_energy(P,0.52)[0]))
print("theory f(1-ln f) at f=0.2:",0.2*(1+math.log(5)))
for r in [1,4,8,16]:
    U=rng.standard_normal((512,r)); V=rng.standard_normal((r,64))
    W=U@V/np.sqrt(r)+0.1*rng.standard_normal((512,64))
    P=np.abs(np.fft.fft2(W))**2
    rr,m=ratio_at_energy(P,0.96)
    print("low-rank r=%d + 0.1 noise: coefficients for 96%% energy = %d -> ratio %.1fx"%(r,m,rr))
print("32768/12 =",32768/12, " floor:",32768//12, "; 32768/2730 =",32768/2730)
# eta_pred formula
N=32768
for dim in [1,2,0.5,0.1]:
    v=N**(0.03/dim); print("dim=%s: N^(d/dim)=%.4f floor=%d eta_pred=%.1f"%(dim,v,math.floor(v),N/math.floor(v) if math.floor(v)>0 else float('inf')))
print("d/dim needed for floor=12:", math.log(12)/math.log(N), " i.e. dim =",0.03/(math.log(12)/math.log(N)))
# rfft storage
x=rng.standard_normal(N); R=np.fft.rfft(x)
print("rfft bins",R.size,"-> real numbers stored:",2*R.size-2,"(imag of DC & Nyquist are 0); input real numbers:",N)
print("max|Im X0|,|Im X_N/2|:",abs(R[0].imag),abs(R[-1].imag))

import numpy as np
rng=np.random.default_rng(2026)
def th1d(X):
    P=np.abs(X)**2; N=P.size; k=np.arange(N); return P[k>N/2].sum()/P.sum()
def conventions(W):
    out={}
    out['flat1D']=th1d(np.fft.fft(W.ravel()))
    # per-axis: average over columns/rows of theta with energy pooled
    X0=np.fft.fft(W,axis=0); P=np.abs(X0)**2; n=W.shape[0]; out['axis0']=P[np.arange(n)>n/2].sum()/P.sum()
    X1=np.fft.fft(W,axis=1); P=np.abs(X1)**2; n=W.shape[1]; out['axis1']=P[:,np.arange(n)>n/2].sum()/P.sum()
    out['fft2_flatidx']=th1d(np.fft.fft2(W).ravel())
    return out
def make(kind):
    if kind=='ffn':
        r=8; return rng.standard_normal((512,r))@rng.standard_normal((r,64))/np.sqrt(r)+0.1*rng.standard_normal((512,64))
    if kind=='attn':
        A=rng.standard_normal((512,16))*(rng.random((512,16))<0.2); return A@rng.standard_normal((16,64))
    if kind=='rand': return rng.standard_normal((512,64))
for kind in ['ffn','attn','rand']:
    vals={}
    for s in range(200):
        c=conventions(make(kind))
        for k,v in c.items(): vals.setdefault(k,[]).append(v)
    print(kind)
    for k,v in vals.items():
        v=np.array(v); dev=np.abs(v-0.5)
        print("  %-13s mean=%.6f min=%.6f max=%.6f  P(|dev|<1e-6)=%.3f  P(rounds to 0.500000)=%.3f"%(k,v.mean(),v.min(),v.max(),(dev<1e-6).mean(),(np.round(v,6)==0.5).mean()))

import mpmath as mp
L=lambda s: 3**(-s)*(mp.zeta(s,mp.mpf(1)/3)-mp.zeta(s,mp.mpf(2)/3))
for s in [0.05,0.1,0.25,0.5,0.75,0.9,0.99]:
    print(s, mp.nstr(L(s),8))
print("L(1,chi_-3) =", mp.nstr(L(1-mp.mpf(10)**-20),10), " pi/(3*sqrt3) =", mp.nstr(mp.pi/(3*mp.sqrt(3)),10))

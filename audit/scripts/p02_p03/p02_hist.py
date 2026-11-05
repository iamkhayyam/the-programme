from fractions import Fraction
kh=Fraction("365.24219858156"); mod=Fraction("365.242190")
d=kh-mod
print("Khayyam - modern (days):", float(d), " seconds:", float(d*86400))
# mean tropical year (Laskar) T in Julian centuries from J2000: 365.2421896698 - 6.15359e-6 T - 7.29e-10 T^2 + 2.64e-10 T^3
for yr in (1079, 2000):
    T=(yr-2000)/100
    y=365.2421896698-6.15359e-6*T-7.29e-10*T**2+2.64e-10*T**3
    print(yr, "mean tropical year ~", round(y,7), "days; Khayyam minus this =", round((float(kh)-y)*86400,2), "s")
print("Gregorian mean year 365.2425 vs 365.24219: 1 day per", round(1/(365.2425-365.24219)), "yrs")
print("33-yr cycle 8 leaps:", 365+8/33, "vs 365.24219: 1 day per", round(1/(365+8/33-365.24219)), "yrs; vs vernal-equinox year 365.24237: 1 day per", round(1/abs(365+8/33-365.24237)),"yrs")
print("1654-1070 =",1654-1070," 1623-1070 =",1623-1070," 1654-1523 =",1654-1523," 1654-1527 =",1654-1527, " 2026-1948 =",2026-1948)

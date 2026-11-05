from math import comb, log, pi
import cmath, random
def baseDigit(p,n,i): return (n//p**i)%p
def dominates(p,n,k): return all(baseDigit(p,k,i)<=baseDigit(p,n,i) for i in range(0,20))
bad=0
for p in (2,3,5,7):
    for n in range(0,200):
        for k in range(0,n+1):
            if ((comb(n,k)%p)==0) != (not dominates(p,n,k)): bad+=1
print("lucas_theorem axiom counterexamples (p<=7,n<200):", bad)
print("mod3_smaller_than_mod2 (Lean def):", log(4)/log(3) < log(3)/log(2), "| true dims:", log(6)/log(3), log(3)/log(2))
# DFT axioms with Lean's definition
def dft(x,k):
    N=len(x); return sum(x[n]*cmath.exp(-2*pi*1j*k*n/N) for n in range(N))
random.seed(1); worst=0
for N in (2,3,4,7,8,16):
    x=[random.uniform(-1,1) for _ in range(N)]
    for k in range(1,N):
        worst=max(worst,abs(dft(x,N-k)-dft(x,k).conjugate()))
    worst=max(worst,abs(dft(x,0).imag))
    if N%2==0: worst=max(worst,abs(dft(x,N//2).imag))
print("DFT axioms max violation:", worst)

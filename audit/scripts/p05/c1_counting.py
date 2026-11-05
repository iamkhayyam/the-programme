# Check counting theorem, Lean definitions, pattern density, and discrepancy
from itertools import product
from fractions import Fraction as F
print("k | total | valid(all ones, per Def 3.1/Lean isValid) | invalid(Lean isInvalid) | single-fail | paper's 'invalid'=k")
for k in range(1,8):
    cs=list(product([0,1],repeat=k))
    valid=sum(all(c) for c in cs)
    invalid=sum(not all(c) for c in cs)
    single=sum(sum(1-x for x in c)==1 for c in cs)
    print(k,len(cs),valid,invalid,single,k)
# induction recurrence done honestly: invalid configs each split in two (both children invalid),
# the unique valid config splits into one valid and one invalid
I=1
for k in range(2,8):
    I=2*I+1
    print("honest recurrence I_%d ="%k, I, " = 2^k-1 =",2**k-1)
# paper's induction with its own IH: (k-1) invalid split -> 2(k-1); valid ones (2^{k-1}-(k-1)) each have a c_k=0 child
for k in range(2,8):
    print("paper-IH-consistent count k=%d:"%k, 2*(k-1)+(2**(k-1)-(k-1)), "vs claimed", k)
pd=F(2,3)*F(8,9)*F(26,27)
print("pattern density", pd, float(pd))
print("(5/8)/pd -1 =", float(F(5,8)/pd-1), " 1-pd/(5/8)=", float(1-pd/F(5,8)), " abs diff", float(F(5,8)-pd))
print("4/7=",4/7)
# table check
for k in range(1,7):
    print(k, 2**k, k, 2**k-k, F(2**k-k,2**k))

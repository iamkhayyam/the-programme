from sympy import Rational as R, symbols, solve
# Level implied by a bound E << x^{1/2} Q^c  <= x  :  Q <= x^{1/(2c)}
def level(c): return 1/(2*c)
cases = {
 "Prop 2.x (line 253): x^{1/2}Q^{3/4}": R(3,4),
 "Prop 3.3 (line 336): x^{1/2}Q^{5/8}": R(5,8),
 "Prop2-template with Kloosterman Q^{3/8} (line 329): x^{1/2}Q^{1/2}(Q^{3/8})^{1/2}=x^{1/2}Q^{11/16}": R(1,2)+R(3,16),
 "Prop2-template with summed Q^{5/8} (line 332): x^{1/2}Q^{1/2}(Q^{5/8})^{1/2}=x^{1/2}Q^{13/16}": R(1,2)+R(5,16),
}
for k,c in cases.items(): print(k, " -> level", level(c), "=", float(level(c)))
print("exponent needed for level 5/8: c =", 1/(2*R(5,8)))
print("2/3 - 1/8 =", R(2,3)-R(1,8), "; 2/3 - 5/8 =", R(2,3)-R(5,8), "; 1/2+1/8 =", R(1,2)+R(1,8), "; 1/2-1/8 =", R(1,2)-R(1,8))
print("Q^{1/2} * (Q^{1/2})^{1/2} exponent:", R(1,2)+R(1,4))
print("At Q=x^{5/8}: x^{1/2}Q^{5/8} = x^", R(1,2)+R(5,8)**2)
print("Watt params: (5/8)(2/3)=", R(5,8)*R(2,3), " (5/8)(1/3)=", R(5,8)*R(1,3))
# geometric series sum_{3^K<=Q} (3^K)^{3/8} vs Q^{3/8}
import math
for Q in [3**10, 3**20, 3**30]:
    s = sum((3**K)**0.375 for K in range(1, int(round(math.log(Q,3)))+1))
    print("Q=3^%d: sum (3^K)^{3/8} / Q^{3/8} = %.4f ; / Q^{5/8} = %.2e" % (round(math.log(Q,3)), s/Q**0.375, s/Q**0.625))
# Polymath8a level
print("Polymath8a: 1/2 + 7/300 =", float(R(1,2)+R(7,300)))
# DI-normalised Kim-Sarnak
print("Kim-Sarnak 7/64: lambda1 >= 1/4-(7/64)^2 =", R(1,4)-R(7,64)**2, "; DI theta = sqrt(1-4 lambda) =", (1-4*(R(1,4)-R(7,64)**2))**R(1,2))

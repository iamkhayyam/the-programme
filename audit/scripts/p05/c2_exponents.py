from sympy import Rational as R, symbols, solve
t=symbols('t')  # Q = x^t
# Part I: E_II << x^{1/2} Q^{1/2} Q^{1/4}; power saving iff 1/2 + t*(3/4) < 1
print("Part I threshold t:", solve(R(1,2)+t*(R(1,2)+R(1,4))-1,t))
# Part II: E_II << x^{1/2} Q^{1/2} Q^{3/16}
print("Part II threshold t:", solve(R(1,2)+t*(R(1,2)+R(3,16))-1,t), float(R(8,11)))
# exponent a such that x^{1/2}Q^a = x at Q=x^{5/8}
a=symbols('a'); print("needed Q-exponent for 5/8:", solve(R(1,2)+R(5,8)*a-1,a))
print("5/8 < 2/3 ?", R(5,8)<R(2,3), float(R(2,3)-R(5,8)))
# "each contributing exactly half the improvement over the Weil bound" from 1/2
print("improvement 1/2->5/8 =",R(5,8)-R(1,2),"; Part I alone claimed 2/3 => improvement",R(2,3)-R(1,2))

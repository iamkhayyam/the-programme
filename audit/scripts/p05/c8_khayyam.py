from math import comb
for K in range(1,6):
    N=3**K
    nz=sum(1 for n in range(N) for k in range(n+1) if comb(n,k)%3)
    tot=N*(N+1)//2
    full_rows=sum(1 for n in range(N) if all(comb(n,k)%3 for k in range(n+1)))
    zero_in_last=sum(1 for k in range(N) if comb(N-1,k)%3==0)
    print("K=%d: nonzero entries rows<3^K = %d (6^K=%d), fraction %.4f; rows w/o zeros = %d; 2^K-K = %d; (2^K-K)/2^K=%.4f"%(K,nz,6**K,nz/tot,full_rows,2**K-K,(2**K-K)/2**K))

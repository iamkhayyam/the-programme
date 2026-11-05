import re, math
txt=open('out_1e9.txt').read()
blocks=re.findall(r'== n=(\d+) primes, p_n=(\d+)\n((?:T10.*\n){4})T3:(.*)\nT4:(.*)\nT5:(.*)\nGAPS:(.*)\n',txt)
D=[1,3,7,9]
paper={1:[18,30,30,22],3:[38,18,24,20],7:[31,24,19,26],9:[41,20,22,17]}
for n,pn,t10,t3,t4,t5,gaps in blocks:
    n=int(n);pn=int(pn)
    rows=[list(map(int,l.split(':')[1].split())) for l in t10.strip().split('\n')]
    print(f"\n### first {n:.0e} primes (p_n={pn}); x=p_n, log x={math.log(pn):.3f}, loglog x/log x={math.log(math.log(pn))/math.log(pn):.4f}")
    print("row  ->1      ->3      ->7      ->9     rowtotal")
    for i,d in enumerate(D):
        tot=sum(rows[i])
        print(d, ' '.join(f"{100*c/tot:7.3f}%" for c in rows[i]), tot)
    tot_all=sum(map(sum,rows))
    print("ratio 9->1 / 9->9 =", rows[3][0]/rows[3][3])
    print("ratio 3->1 / 9->7 (should be ~1 by symmetry) =", rows[1][0]/rows[3][2])
    # diag overall
    print("diag share of all pairs", sum(rows[i][i] for i in range(4))/tot_all)
    # mod 3
    v=dict(re.findall(r'\((\d,\d)\)=(\d+)',t3)); v={k:int(x) for k,x in v.items()}
    r1=v['1,1']+v['1,2']; r2=v['2,1']+v['2,2']
    print("mod3: P(1->1)=%.4f P(1->2)=%.4f P(2->1)=%.4f P(2->2)=%.4f"%(v['1,1']/r1,v['1,2']/r1,v['2,1']/r2,v['2,2']/r2))
    v=dict(re.findall(r'\((\d,\d)\)=(\d+)',t4)); v={k:int(x) for k,x in v.items()}
    r1=v['1,1']+v['1,3']; r3=v['3,1']+v['3,3']
    print("mod4: P(1->1)=%.4f P(1->3)=%.4f P(3->1)=%.4f P(3->3)=%.4f"%(v['1,1']/r1,v['1,3']/r1,v['3,1']/r3,v['3,3']/r3))
    g=dict((int(a),int(b)) for a,b in (x.split(':') for x in gaps.split()))
    top=sorted(g.items(),key=lambda t:-t[1])[:5]
    print("most common gaps:",top)

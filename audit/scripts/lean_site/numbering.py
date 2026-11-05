import re,sys,glob
envs={'theorem','proposition','lemma','corollary','conjecture','definition','example','remark','criterion','principle'}
for f in sorted(glob.glob('../../../papers/*/*.tex')):
    txt=open(f).read().split('\n')
    sec=0; cnt=0; appendix=False
    out=[]
    for i,l in enumerate(txt,1):
        s=l.split('%')[0] if not l.strip().startswith('%') else ''
        if '\\appendix' in s: appendix=True; sec=0
        m=re.search(r'\\section\{',s)
        if m: sec+=1; cnt=0
        for m in re.finditer(r'\\begin\{(\w+)\}(\[([^\]]*(?:\][^\]]*)?)\])?',s):
            e=m.group(1)
            if e in envs:
                cnt+=1
                secs=chr(64+sec) if appendix else str(sec)
                # find label within next 3 lines
                lab=''
                for j in range(i-1,min(i+3,len(txt))):
                    mm=re.search(r'\\label\{([^}]*)\}',txt[j])
                    if mm: lab=mm.group(1);break
                out.append(f"  L{i}: {e.capitalize()} {secs}.{cnt} [{(m.group(3) or '')[:60]}] {lab}")
    print('==',f.split('/')[-2]); print('\n'.join(out))

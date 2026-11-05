#!/bin/bash
# Build single-file HTML versions of the papers from their LaTeX sources with TeX4ht.
# Requires TeX Live with tex4ht (htlatex) and bibtex. Usage:
#   papers/tools/build_html.sh                 # all papers
#   papers/tools/build_html.sh papers/p04-that-eisenstein-guy/   # one paper (note trailing slash)
# Output: papers/pNN-*/pNN.html, with the stylesheet inlined and the paper's LaTeX
# macros passed to MathJax.
set -u
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
WORK="$(mktemp -d)"
EXTRA_CSS='body{max-width:48rem;margin:2rem auto;padding:0 1rem;font-family:"STIX Two Text","Times New Roman",serif;font-size:17px;line-height:1.55;color:#1a1a1a;background:#faf9f6}
h2,h3,h4{line-height:1.3} .maketitle{text-align:center;margin-bottom:2rem} table{border-collapse:collapse;margin:1rem auto} td{padding:2px 8px}
img{max-width:100%;height:auto} .abstract{margin:1.5rem 0;padding:1rem 1.25rem;background:#f4f2ee}
@media (prefers-color-scheme: dark){body{background:#151515;color:#e8e6e1} .abstract{background:#222} a{color:#9bb8ff}}'
if [ $# -gt 0 ]; then DIRS=("$@"); else DIRS=("$REPO"/papers/p0*/); fi
for d in "${DIRS[@]}"; do
  name=$(basename "$d"); nn=${name:0:3}
  tex=$(ls "$d"*.tex | head -1); base=$(basename "$tex" .tex)
  out="$d$nn.html"
  rm -rf "$WORK/$nn"; mkdir -p "$WORK/$nn"
  cp "$d"*.tex "$WORK/$nn/"; cp "$d"*.bib "$d"*.png "$WORK/$nn/" 2>/dev/null
  sed -i 's/^\\pdfoutput=1//' "$WORK/$nn/"*.tex
  ( cd "$WORK/$nn"
    htlatex "$base.tex" "xhtml,mathjax,charset=utf-8" " -cunihtf -utf8" > build1.log 2>&1
    if [ -f references.bib ]; then bibtex "$base" > bib.log 2>&1; fi
    htlatex "$base.tex" "xhtml,mathjax,charset=utf-8" " -cunihtf -utf8" > build2.log 2>&1
    htlatex "$base.tex" "xhtml,mathjax,charset=utf-8" " -cunihtf -utf8" > build3.log 2>&1 )
  if [ ! -s "$WORK/$nn/$base.html" ]; then echo "$nn FAILED"; continue; fi
  python3 - "$WORK/$nn/$base.html" "$WORK/$nn/$base.css" "$out" "$EXTRA_CSS" <<'PY'
import sys,re
html,css,out,extra=sys.argv[1:5]
s=open(html,encoding='utf-8').read(); c=open(css,encoding='utf-8').read()
s=re.sub(r'<link rel="stylesheet" type="text/css" href="[^"]+\.css" ?/>', '<meta name="viewport" content="width=device-width, initial-scale=1" />\n<style>\n'+c+'\n'+extra+'\n</style>', s, count=1)
s=s.replace('mathjax@3/es5','mathjax@3.2.2/es5').replace('\\mathrm@@ ','\\mathrm').replace('alt="PIC"','alt="Figure"')
open(out,'w',encoding='utf-8').write(s)
PY
  echo "$nn ok $(wc -c < "$out") bytes; images: $(grep -o '<img[^>]*src="[^"]*"' "$out" | sed 's/.*src="//;s/"//' | tr '\n' ' ')"
  python3 "$REPO/papers/tools/mj_macros.py" "$tex" "$out"
done

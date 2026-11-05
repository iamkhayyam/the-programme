r"""Extract \newcommand / \renewcommand / \DeclareMathOperator definitions from a
LaTeX preamble and inject them as MathJax macros into a TeX4ht HTML file."""
import json, re, sys

def read_group(s, i):
    """s[i] == '{'; return (content, index after closing brace)."""
    depth = 0
    for j in range(i, len(s)):
        if s[j] == '{': depth += 1
        elif s[j] == '}':
            depth -= 1
            if depth == 0: return s[i+1:j], j+1
    raise ValueError('unbalanced')

def macros_from_tex(tex):
    pre = tex.split('\\begin{document}')[0]
    pre = re.sub(r'(?<!\\)%.*', '', pre)
    out = {}
    for m in re.finditer(r'\\(?:re)?newcommand\*?\s*', pre):
        i = m.end()
        if pre[i] == '{':
            name, i = read_group(pre, i)
        else:
            mm = re.match(r'\\[A-Za-z]+', pre[i:]); name = mm.group(0); i += len(name)
        name = name.strip().lstrip('\\')
        nargs = 0
        mm = re.match(r'\s*\[(\d)\]', pre[i:])
        if mm: nargs = int(mm.group(1)); i += mm.end()
        mm = re.match(r'\s*\[([^\]]*)\]', pre[i:])   # optional default arg -> ignore default
        opt = None
        if mm: opt = mm.group(1); i += mm.end()
        while pre[i].isspace(): i += 1
        body, i = read_group(pre, i)
        out[name] = [body, nargs, opt] if opt is not None else ([body, nargs] if nargs else body)
    for m in re.finditer(r'\\DeclareMathOperator(\*?)\s*\{\\([A-Za-z]+)\}\s*\{([^}]*)\}', pre):
        out[m.group(2)] = ('\\operatorname*{%s}' if m.group(1) else '\\operatorname{%s}') % m.group(3)
    return out

tex_path, html_path = sys.argv[1], sys.argv[2]
macros = macros_from_tex(open(tex_path, encoding='utf-8').read())
s = open(html_path, encoding='utf-8').read()
old = 'window.MathJax = { tex: { tags: "ams", }, };'
assert old in s, 'MathJax config not found'
new = 'window.MathJax = { tex: { tags: "ams", macros: %s } };' % json.dumps(macros, ensure_ascii=False)
s = s.replace(old, new)
open(html_path, 'w', encoding='utf-8').write(s)
print(html_path.split('/')[-1], len(macros), 'macros:', ', '.join(sorted(macros)))

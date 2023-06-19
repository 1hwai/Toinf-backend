from latex2sympy2 import latex2sympy, latex2latex
import sympy as smp
import sys

from sympy import exp

string = str(sys.argv[1][1:-1])

sympy_dict = {
  'exp(x)': smp.exp
}

def derivative(latex):
  partial_latex = string.split("\\")

  partial_newLatex = []
  for ps in partial_latex:
    if (len(ps) == 0):
      partial_newLatex.append("\\")
    else: partial_newLatex.append(ps)

  latex = "".join(partial_newLatex)

  x = smp.symbols('x', real=True)
  f = latex2sympy(latex)
  smp.sympify(f, locals=sympy_dict)
  dfdx = smp.diff(f, x)
  print('dfdx',dfdx)
  return smp.latex(dfdx)

print(derivative(string), end='')
import latex2sympy2
import sympy as smp
import sys
import numpy as np

from sympy import exp

string = str(sys.argv[1][1:-1])

def getParsed(latex):
  partial_latex = string.split("\\")

  partial_newLatex = []
  for ps in partial_latex:
    if (len(ps) == 0):
      partial_newLatex.append("\\")
    else: partial_newLatex.append(ps)

  latex = "".join(partial_newLatex)
  latex2sympy2.set_real(True)
  return latex2sympy2.latex2sympy(latex)

def derivative(latex):
  f = getParsed(latex)

  x = smp.symbols('x', real=True)
#   dfdx = smp.diff(f, f.args[0])
  dfdx = f.diff()
  return smp.latex(dfdx)

print(derivative(string), end='')
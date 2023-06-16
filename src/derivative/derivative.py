from latex2sympy2 import latex2sympy, latex2latex
import sympy as smp
import sys

string = str(sys.argv[1][1:-1])

def derivative(string):
  x = smp.symbols('x', real=True)
#   f = latex2sympy('$$ \sin\left(x\right) $$')
  f = smp.sin(x)
  dfdx = (smp.diff(f, x))
  return smp.latex(dfdx)

print(derivative(string), end='')
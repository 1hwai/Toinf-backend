from latex2sympy2 import latex2sympy, latex2latex
import sympy as smp
import sys

tex = r"\frac" + str(sys.argv[1][1:-1])


# tex = r"\frac{d}{dx}(x^{2}+x)"
# # Or you can use '\mathrm{d}' to replace 'd'
x = smp.symbols('x', real=True)
f = latex2sympy(tex)

# # => "Derivative(x**2 + x, x)"
# latex2latex(tex)
# # => "2 x + 1"

print(smp.latex(f), end='')
# from latex2sympy2 import latex2sympy, latex2latex

# tex = r"\frac{d}{dx}(x^{2}+x)"
# # Or you can use '\mathrm{d}' to replace 'd'
# print(latex2sympy(tex))
# # => "Derivative(x**2 + x, x)"
# latex2latex(tex)
# # => "2 x + 1"

import sys
import json
import ast

input = ast.literal_eval(sys.argv[1])
output = input
output['data_returned'] = 'Data returning example'

sys.stdout.flush()
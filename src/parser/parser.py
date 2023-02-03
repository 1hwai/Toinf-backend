from latex2sympy2 import latex2sympy, latex2latex
import sympy as smp
import sys

string = str(sys.argv[1][1:-1])

def parse(string):
  string = repr(string).strip("'")

  partial_string = string.split("\\\\")

  partial_newString = []
  for ps in partial_string:
    if (len(ps) == 0):
      partial_newString.append("\\")
    else: partial_newString.append(ps)

  string = "".join(partial_newString)
  return string

print(parse(string), end='')
def isMatch(s, p):
  if (len(s)>=0 and len(s)<=20 and len(p)>=0 and len(p)<=30):
    if p =='.*':
        return True
    
    # * can repeat previous element but 
    # if .* match 0or> of any char
    # . any char
    arr = list(s)
    reg = list(p)
    new_arr = []
    i = 0
    while len(reg)>len(arr):
      if reg[i] not in arr and reg[i+1] is '*':
        reg.pop(i)
        reg.pop(i)
        i-=2
      print(reg)
      print(i)
      i+=1
      
    # aab  = c*a*b
    #caminho ao contrario
    #ver o que falta,
    print(reg)
    distance = 0 
    # while distance != range(len(reg)):

        
    # if '*'in reg:
    #     if char not in original and next char * x0
    #     if len               
# isMatch(s = "aab", p = "c*a*b*c*")
# mult n por n-1 = res
# mult res por n-1

def factorial(n):
  # m=n-1
  # if n>1:
  #   return factorial(n)*m
  # else:
  #   return 2
  # correct=
  if n == 2:
    return 2
  return n*factorial(n-1)


def fibonacci(n):
  one = 0
  two = 1
  while two<n:
    res = one+two
    one=two
    two=res
    print(two)
  

print(fibonacci(21))
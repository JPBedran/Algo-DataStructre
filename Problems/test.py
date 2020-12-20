# dic = {1:0, 2:0, 3:0}
# lis = [1,2,3,4,5,4,2,4]
# def checker(arr,check):
#   for i in arr:
#     if i in check.keys():
#       check[i]+=1
#     else:
#       check[i]=1
#   print(check)
# checker(lis,dic)

def num_gen(m):
  for i in range(m):
    yield i

# def fibonacci(n):
#   before = 0
#   after = 1
#   res = 0
#   for i in range(n):
    # wrong yielding is passing target because i dont yield first 0's
    # res = before+after
    # before = after
    # after = res
    # yield res

    # yields target correctly because i yield at start, difference pf ++i and i++
#      yield before
#      res = before+after
#      before = after
#      after = res
 
 
#  for x in fibonacci(20):
#    print(x)
class Song:
    def __init__(self, name):
        self.name = name
        self.next = None

    def next_song(self, song):
        self.next = song 
    
    def is_repeating_playlist(self):
        """
        :returns: (bool) True if the playlist is repeating, False if not.
        """
        flag = False
        current = self
        li = []
        while current.next != None: 
            li.append(current.name)
            print(li)
            if current.name in li:
                flag = True   
            current=current.next
            print(current)
        
        return flag
            
            
        
            
first = Song("Hello")
second = Song("Eye of the tiger")
third = Song("timbakut")

    
first.next_song(second)
second.next_song(third)
third.next_song(first)
    
print(first.is_repeating_playlist())
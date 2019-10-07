# return whether any numbers in list "a" produces a sum "k'

n=4
a=[1,2,4,7]
k=15

def dfs(index, sum):
    # print ("run dfs")
    if index == n:
        return sum == k
    if dfs(index+1, sum):
        return True
    if dfs(index+1, sum+a[index]):
        return True
    return False

def sol():
    if dfs(0,0): 
        print ("Yes")
    else:
        print ("False")

sol()
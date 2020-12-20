#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumSwaps function below.
def minimumSwaps(arr):
    swaps = 0
    pair = {}
    # tracker = []
    # for num,i in enumerate(arr):
    #     for numj,j in enumerate(arr):
    #         if (i>(num+1)):
    #             if(j==(num+1)and j not in tracker):
    #                 tracker.append(j)
    #                 swaps+=1
    #                 temp = j
    #                 print("temp:",temp)
    #                 arr[numj]=i
    #                 print("arrj: ",arr[numj])
    #                 arr[num]=temp
    #                 print("arr: ",arr[num])
    for i,v in enumerate(arr):
        pair[v]=i
    for i,v in enumerate(arr):
        if v>(i+1):
            temp = arr[pair[i+1]]

            arr[pair[v]]=arr[i]
            arr[i] = temp
            pair[v] = i
            swaps +=1
            
        if v>(i+1):
            swaps += 1
            t = arr[i]
            arr[i] = i+1
            arr[pair[i+1]] = t
            pair[t]=pair[i+1]
    print(arr)
    print(pair)
    return(swaps)
                    
                    
                
                
                

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    res = minimumSwaps(arr)

    fptr.write(str(res) + '\n')

    fptr.close()

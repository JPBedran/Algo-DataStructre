def shortestPathBinaryMatrix(grid):
        r=0
        c=0
        steps=0
        flag = True
        grid = zi
        if grid[0][0]==0:
            steps+=1
        while (r+1)<len(grid) and (c+1)<len(grid):
            try:
                print(r,c)
                if c>=(len(grid)-1):
                    c=0
                    r+=1
                if grid[r+1][c+1]==0:
                    steps+=1
                    r+=1
                    c+=1
                elif grid[r+1][c]==0:
                    steps+=1
                    r+=1
                elif grid[r][c+1]==0:
                    steps+=1
                    c+=1
                else:
                    break
            except IndexError:
                print("HERE")
                break
            else:
                if grid[r+1][c]==0:
                   steps+=1
                   r+=1

        print(steps)

shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])
                
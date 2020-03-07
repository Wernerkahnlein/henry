# Enter your code here. Read input from STDIN. Print output to STDOUT
def creaTablero():
    line = raw_input().split()
    N, M, K = map(lambda i: int(i), line) 
    
    tablero = [[] for each in range(N)]
    i = 0
    x = 0
    y = 0
    for b in range(N):
        line = list(raw_input().rstrip())
        for j in range(len(line)):
            tablero[b].append(line[j])
            if line[j] == '*':
                y = j
                x = i
        i += 1
        
    return tablero, N,M,K, [x,y]
 

# Implementation of delta function
def delta(i, j, x, y):
    if i == x:
        if j + 1 == y:
            if tablero[i][j] == 'R':
                return 0
            else:
                return 1
        else:
            if tablero[i][j] == 'L':
                return 0
            else:
                return 1
    else:
        if i + 1 == x:
            if tablero[i][j] == 'D':
                return 0
            else:
                return 1
        else:
            if tablero[i][j] == 'U':
                return 0
            else:
                return 1
#Initialise f to infinity

[tablero, N, M, K, target] = creaTablero()
INF = 999999999
f = [[[INF] * (M) for each in range(N)] for each in range(K + 1)]
ans = INF
for k in range(K + 1):
    for i in range(N):
        for j in range(M):
            if k == 0:
                if i == 0 and j == 0:
                    f[k][i][j] = 0
                else:
                    f[k][i][j] = INF
            else:
                res = INF
                if i > 0:
                    res = min(res, f[k - 1][i - 1][j] + delta(i-1,j,i,j))
                if i < (N - 1):                     
                    res = min(res, f[k - 1][i + 1][j] + delta(i+1,j,i,j))                                      
                if j > 0:
                    res = min(res, f[k - 1][i][j - 1] + delta(i,j-1,i,j))
                if j < (M - 1):
                    res = min(res, f[k - 1][i][j + 1] + delta(i,j+1,i,j))
 
                f[k][i][j] = min(res, f[k - 1][i][j])
 

ans = f[K][target[0]][target[1]]
if ans == INF:
    print "-1"
else:
    print ans
def creaTablero(input):
	tablero = []
	lines = input.split('\n')
	N, M, K = map(lambda i: int(i), lines[0].split(' ')) 
	for i,line in enumerate(lines[1:]):
		tablero.append([]);
		for j,letter in enumerate(line):
			tablero[i].append(letter)
			if(letter == '*'):
				target = [i,j]
	return tablero, N, M, K, target


INF = 999999999

def enTablero(i,j):
	if i < 0 or i > N-1: return False
	if j < 0 or j > M-1: return False
	return True


def delta(i,j,costo, k):
	if not enTablero(i,j): return
	if costo > distancias[i][j]: return

	distancias[i][j] = costo

	if i == target[0] and j == target[1]: return;

	if k>K: return

	delta(i+1,j, costo if tablero[i][j] == 'D' else costo +1, k + 1)
	delta(i-1,j, costo if tablero[i][j] == 'U' else costo +1, k + 1)
	delta(i,j+1, costo if tablero[i][j] == 'R' else costo +1, k + 1)
	delta(i,j-1, costo if tablero[i][j] == 'L' else costo +1, k + 1)

 # var input = '3 3 7\nRRD\nDLL\nRR*'
# var input = '2 2 3\nRD\n*L'
# input = '18 42 42\nDUDDDLLRURULLDLURURLDLRULDURLDDURLUURLURRU\nDLDLURDRRLDDLDULRUDURDDUURDLLLLRRLDUULLDDD\nRULURDLLUULDRDDLLDLRDUDRDDRRRDRUDRURURLRLD\nRLUDLLLUURRDRRDRDRLDLDDDULLRRLLRLDLUDRDDUU\nRDDRURLRUUDLLRLULLLLULLDLUDRLDRDDURDLRDRLL\nLDRDDDLDUDLDUDRLURRDLURRRDLDURLULDDURDUDLU\nUDUULDRUULUDL*UDULUDLLRRLULULUDULURLRDULLL\nUDLDRLDLDLRRULURDRUDRLDLLDDRLRRLRUURLUDULR\nRULDDLUULRRDRDLUULRULDRRUULULLUDRLLRLLDRRR\nULRLDDDUUDLLRLURRURLDRULRRDUDRULUDDRDLULDD\nDDDRDRRULRLUUDRRDDLDUDRLRRRDLRDRLUDRULLLDR\nDUDULULRLUDRLRLLLUUURRDLLRRLLLDUDLDRDDURRR\nUULDRUULRDDRDLUDLLLULULRRUUUULDDDRRRUDLLDU\nLLLURRRDRUUULDLLLDDDLLRLDLLURUDLRLDLDDLLUL\nLLLDDDDULDRURULULLULLUDRDURRRRUUURRLURDURL\nRDDDDDLRRRRLRUDRLURRLRRUUUUURULULRRDRUUDUU\nRDUURUULLDULRUULRRLLDDLRURDULRDLUDDDURDRUD\nLUDLDDRDURUDLLLDRLRRRLRDULLLDLDUUUDRRDRLRU'

# input = '3 3 7\nRRD\nDLL\nRR*'
input = '2 2 3\nRD\n*L'
[tablero, N, M, K, target] = creaTablero(input)
# distancias = [[[INF] for each in range(M)] for each in range(M)]

# delta(0,0,0,0);

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

# minCambios = distancias[target[0]][target[1]]
#print minCambios if minCambios != INF else -1
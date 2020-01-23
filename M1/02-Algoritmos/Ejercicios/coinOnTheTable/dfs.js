//Armar tablero
function creaTablero(input){
    var target = [-1,-1];
    var tablero = [];
    var lines = input.split('\n');
    [N, M, K] = lines[0].split(' ');
    for(i = 0; i<=N-1; i++){
        tablero.push([])
        for(j=0;j<=M-1;j++){
         tablero[i].push(lines[i+1][j])
         tablero[i][j] == '*' ? target = [i,j]: target; 
        }
    }    
    return [tablero,K,N-1,M-1,target];
}

//camino más corto (ditancia manhattan)
function shortestPath(coin,target){
    return Math.abs(coin[0] - target[0]) + Math.abs(coin[1] - target[1]);
}

const INF = 9999999999;
function jugar(input){
    //chequea que esté dentro del tablero
    function enTablero(i, j){
        if( i < 0 || i > N) return false;
        if( j < 0 || j > M) return false;
        return true;
    }
    //Delta es 0 si la letra siguiente me lleva al destino, si no hay que cambiarla y cuesta 1.
    function delta(f,c,costo,k){
        if(!enTablero(f,c)) return
        if(costo > distancias[f][c]) return;
        distancias[f][c] = costo;

        if(f === target[0] && c === target[1]) return;

        if( k>K ) return;

        delta(f-1,c, tablero[f][c]=='U' ? costo  : costo+1, k +1 );
        delta(f+1,c, tablero[f][c]=='D' ? costo  : costo+1, k +1 );
        delta(f,c+1, tablero[f][c]=='R' ? costo  : costo+1, k +1 );
        delta(f,c-1, tablero[f][c]=='L' ? costo  : costo+1, k +1 );
    }

    var [tablero, K, N, M, target] = creaTablero(input);
    var distancias  = tablero.map(function(arr) {
            return arr.map(function(item){
                return INF;
            });
        });
    delta(0,0,0,0);
    minCambios = distancias[target[0]][target[1]];
    console.log( minCambios === INF ? -1 : minCambios); 
}
// var input = '3 3 7\nRRD\nDLL\nRR*'
// var input = '2 2 3\nRD\n*L'
var input = '18 42 42\nDUDDDLLRURULLDLURURLDLRULDURLDDURLUURLURRU\nDLDLURDRRLDDLDULRUDURDDUURDLLLLRRLDUULLDDD\nRULURDLLUULDRDDLLDLRDUDRDDRRRDRUDRURURLRLD\nRLUDLLLUURRDRRDRDRLDLDDDULLRRLLRLDLUDRDDUU\nRDDRURLRUUDLLRLULLLLULLDLUDRLDRDDURDLRDRLL\nLDRDDDLDUDLDUDRLURRDLURRRDLDURLULDDURDUDLU\nUDUULDRUULUDL*UDULUDLLRRLULULUDULURLRDULLL\nUDLDRLDLDLRRULURDRUDRLDLLDDRLRRLRUURLUDULR\nRULDDLUULRRDRDLUULRULDRRUULULLUDRLLRLLDRRR\nULRLDDDUUDLLRLURRURLDRULRRDUDRULUDDRDLULDD\nDDDRDRRULRLUUDRRDDLDUDRLRRRDLRDRLUDRULLLDR\nDUDULULRLUDRLRLLLUUURRDLLRRLLLDUDLDRDDURRR\nUULDRUULRDDRDLUDLLLULULRRUUUULDDDRRRUDLLDU\nLLLURRRDRUUULDLLLDDDLLRLDLLURUDLRLDLDDLLUL\nLLLDDDDULDRURULULLULLUDRDURRRRUUURRLURDURL\nRDDDDDLRRRRLRUDRLURRLRRUUUUURULULRRDRUUDUU\nRDUURUULLDULRUULRRLLDDLRURDULRDLUDDDURDRUD\nLUDLDDRDURUDLLLDRLRRRLRDULLLDLDUUUDRRDRLRU'
jugar(input);

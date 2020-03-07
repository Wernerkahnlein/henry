// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

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
    return [tablero,K,target];
}
//Verificar si es necesario hacer más cambios
function findPath(tablero, K, target){
    var coin = [0,0];
    var k = 0;
    var prevCoin = [];
    var change = [coin.slice(0), direction(tablero, coin.slice(0), target)];
    var thisPath;
    var minPath = shortestPath(coin,target)
    //no hay solucion
    if(K < minPath){
        console.log('K < camino mas corto');
        return false
    }
    if(target.equals([-1,-1])) return false

    while(true){
        thisPath = shortestPath(coin,target);

        if(thisPath < minPath){
            // console.log(minPath, thisPath);
            minPath= thisPath;
            change = [prevCoin.slice(0), direction(tablero, prevCoin.slice(0), target)];
        }
        switch(tablero[coin[0]][coin[1]]){
                case 'R':
                    coin[1] += 1;
                    break;
                case 'L':
                    coin[1] -= 1;
                    break;
                case 'U':
                    coin[0] -= 1;
                    break;
                case 'D':
                    coin[0] += 1;
                    break;
                case '*':
                    return true
                    break;
        }
        k += 1;
        //Hay que hacer cambios al tablero
        //console.log(change);
        if( coin[0] < 0 || coin[1] < 0 || k>K ) return change;
        prevCoin = coin;

    }
}
//camino más corto (ditancia manhattan)
function shortestPath(coin,target){
    return Math.abs(coin[0] - target[0]) + Math.abs(coin[1] - target[1]);
}
//Qué direccion reemplazar?
function direction(tablero, change, target){
    var aa = target[0] - change[0];
    var id = target[1] - change[1];
    // console.log('aa:', aa, 'id:', id);
    return aa > id ? 'D' : 'R';
}
//Modifica tablero
function modificaTablero(tablero, change){
    console.log(change);
    var lugar = change[0];
    var letra = change[1];
    tablero[lugar[0]][lugar[1]] = letra;
    return tablero;
}

function jugar(input){
    var operaciones = 0;
    var [tablero, K, target ]= creaTablero(input);
    // console.log(tablero);
    // console.log(findPath(tablero, K, target));
    // var output = findPath(tablero, K, target);
    // tablero = modificaTablero(tablero, output);
    // console.log(tablero);
    // console.log(findPath(tablero, K, target));
    while(true){
        output = findPath(tablero, K, target);
        if( output === true ) return operaciones;
        operaciones++
        tablero = modificaTablero(tablero, output);
    }

}
// var input = '3 3 7\nRRD\nDLL\nRR*'
// var input = '2 2 3\nRD\n*L'
var input = '18 42 42\nDUDDDLLRURULLDLURURLDLRULDURLDDURLUURLURRU\nDLDLURDRRLDDLDULRUDURDDUURDLLLLRRLDUULLDDD\nRULURDLLUULDRDDLLDLRDUDRDDRRRDRUDRURURLRLD\nRLUDLLLUURRDRRDRDRLDLDDDULLRRLLRLDLUDRDDUU\nRDDRURLRUUDLLRLULLLLULLDLUDRLDRDDURDLRDRLL\nLDRDDDLDUDLDUDRLURRDLURRRDLDURLULDDURDUDLU\nUDUULDRUULUDL*UDULUDLLRRLULULUDULURLRDULLL\nUDLDRLDLDLRRULURDRUDRLDLLDDRLRRLRUURLUDULR\nRULDDLUULRRDRDLUULRULDRRUULULLUDRLLRLLDRRR\nULRLDDDUUDLLRLURRURLDRULRRDUDRULUDDRDLULDD\nDDDRDRRULRLUUDRRDDLDUDRLRRRDLRDRLUDRULLLDR\nDUDULULRLUDRLRLLLUUURRDLLRRLLLDUDLDRDDURRR\nUULDRUULRDDRDLUDLLLULULRRUUUULDDDRRRUDLLDU\nLLLURRRDRUUULDLLLDDDLLRLDLLURUDLRLDLDDLLUL\nLLLDDDDULDRURULULLULLUDRDURRRRUUURRLURDURL\nRDDDDDLRRRRLRUDRLURRLRRUUUUURULULRRDRUUDUU\nRDUURUULLDULRUULRRLLDDLRURDULRDLUDDDURDRUD\nLUDLDDRDURUDLLLDRLRRRLRDULLLDLDUUUDRRDRLRU'
console.log(jugar(input));
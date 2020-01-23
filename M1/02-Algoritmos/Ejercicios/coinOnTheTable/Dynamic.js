// Otro approach, en cada paso buscar el camino mas corto según donde este.

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

function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var min = 99999;
    var minIndex = 99;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min && arr[i] != -99) {
            minIndex = i;
            min = arr[i];
        }
    }
    return minIndex;
}
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
//Cantidad de Pasos al objetivo
function contarPasos(tablero, coin, target){
    var pasos = 0;
    var visitado  = tablero.map(function(arr) {
            return arr.slice();
        });
    var prevCoin = [];
    var change = coin.slice(0);
    var thisPath;
    var minPath = shortestPath(coin,target)
    while(true){
        if(visitado[coin[0]][coin[1]] ===  'x') return [change,-99]
        visitado[coin[0]][coin[1]] = 'x';
        prevCoin = coin;
        thisPath = shortestPath(coin,target);
        if(thisPath < minPath && thisPath !=0){
            // console.log(minPath, thisPath);
            minPath= thisPath;
            change = prevCoin.slice(0);
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
                    return [change,pasos]
                    break;
        }
        pasos += 1;
        if( coin[0] < 0 || coin[1] < 0 ) {
            return [change,-99];
        }
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
function modificaTablero(tablero, lugar, letra){
    tablero[lugar[0]][lugar[1]] = letra;
}

function jugar(input){
    var operaciones = 0;
    var [tablero, K, target ]= creaTablero(input);
    [lugar, pasos] = contarPasos(tablero, [0,0], target);
    while(K < pasos || pasos == -99){
        var  pasosD, pasosU, pasosL, pasosR;
        //modifico tablero si no llega antes de K pasos
        var pasos = [ 'U', 'D', 'L', 'R'];
        var direccion = pasos.map(function(letra){
            modificaTablero(tablero, lugar, letra);
            [a, nextPasos] = contarPasos(tablero,[0,0], target);
            return nextPasos;
        })
        var letra = ''
        switch(indexOfMin(direccion)){
            case 0:
                letra = 'U';
                break;
            case 1:
                letra = 'D';
                break;
            case 2:
                letra = 'L';
                break;
            case 3:
                letra = 'R';
                break;
            case 99:
                letra = 'D';
        }
        modificaTablero(tablero, lugar, letra);
        [lugar, pasos] = contarPasos(tablero,[0,0], target);
        operaciones++;
    }
    return operaciones;
}
// var input = '3 3 7\nRRD\nDLL\nRR*'
// var input = '2 2 8\nRD\n*L'
var input = '18 42 42\nDUDDDLLRURULLDLURURLDLRULDURLDDURLUURLURRU\nDLDLURDRRLDDLDULRUDURDDUURDLLLLRRLDUULLDDD\nRULURDLLUULDRDDLLDLRDUDRDDRRRDRUDRURURLRLD\nRLUDLLLUURRDRRDRDRLDLDDDULLRRLLRLDLUDRDDUU\nRDDRURLRUUDLLRLULLLLULLDLUDRLDRDDURDLRDRLL\nLDRDDDLDUDLDUDRLURRDLURRRDLDURLULDDURDUDLU\nUDUULDRUULUDL*UDULUDLLRRLULULUDULURLRDULLL\nUDLDRLDLDLRRULURDRUDRLDLLDDRLRRLRUURLUDULR\nRULDDLUULRRDRDLUULRULDRRUULULLUDRLLRLLDRRR\nULRLDDDUUDLLRLURRURLDRULRRDUDRULUDDRDLULDD\nDDDRDRRULRLUUDRRDDLDUDRLRRRDLRDRLUDRULLLDR\nDUDULULRLUDRLRLLLUUURRDLLRRLLLDUDLDRDDURRR\nUULDRUULRDDRDLUDLLLULULRRUUUULDDDRRRUDLLDU\nLLLURRRDRUUULDLLLDDDLLRLDLLURUDLRLDLDDLLUL\nLLLDDDDULDRURULULLULLUDRDURRRRUUURRLURDURL\nRDDDDDLRRRRLRUDRLURRLRRUUUUURULULRRDRUUDUU\nRDUURUULLDULRUULRRLLDDLRURDULRDLUDDDURDRUD\nLUDLDDRDURUDLLLDRLRRRLRDULLLDLDUUUDRRDRLRU'
console.log(jugar(input));

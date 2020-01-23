# Sorting.js

## Introducción

### Setup Inicial

No hay repo para este workshop! Vamos a hacer este desde cero.

Creemos nuestros archivos para testear con testem. Empeza haciendo un nuevo directorio dentro de tu carpeta de Plataforma 5 llamado `sorting`. Luego, `cd` a ese directorio, inicializa un repo de git y crea tus archivos iniciales.
```sh
    mkdir sorting
    cd sorting
    git init # hace un nuevo repo de git
    touch bubblesort.js bubblesort.spec.js mergesort.js mergesort.spec.js
    touch testem.json
    subl . # abre el directorio en Sublime si descargaron el symlink `subl`
```

Un archivo testem.json es un archivo de configuracion que te permite especificar el "source" de archivos, "ignorar" otros, que framework de testeo usar, etc. Por default, Testem utiliza el framework Jasmine, version 1.3. Recomendamos usar la version 2 que podes utilizar agregando esto en tu testem.json 

```json
    {
      "framework": "jasmine2"
    }
```

Ejecuta el comando `testem` en esta carpeta, navega a la pagina donde corren los tests, y verifica la version de Jasmine arriba en la esquina derecha. Vas a querer abrir la documentación asociada a la API como referencia.

Finalmente vas a querer hacer tu primer commit en git:

```sh
    git add -A
    git status
    git commit -m 'initialized project'
```


## Bubble Sort

### Escribiendo Tests

El primer test en bubblesort.spec.js va a chequear que bubblesort.js puede manejar un arreglo vacio.
```javascript
    describe('Bubble Sort', function(){
      it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
      });
    });
```

Los bloques de `describe` son funciones usadas para organizar tus tests, ademas te permite crear scopes para variables compartidas entre multiples tests. Los bloques It son tests que pueden o no pasar dependiendo si un error fue arrojado (`throw`) cuando corrieron. `expect` o `assert` son funciones que pueden o no arrojar un error

Trabaja con tu compañero para crear tests para items individuales y multiples. Refierete a la documentacion de Jasmine para inspiración.

### Función bubbleSort

Escribe la funcion bubbleSort para pasar los tests que escribiste. La función deberia verse algo asi:

```javascript
function bubbleSort(array) {

  /* tu codigo aquí */

}
```

Como un ejercicio, deberías también trackear cuantas comparaciones y swaps se hacen para cada bubblesort. Pero eso es un problema. Como puede tus tests saber cuantas "comparaciones" o "swaps" ocurren durante un determinado bubble sort? Hay varias maneras de lograr esto:

#### Contadores Globales

Podriamos tener un "swap counter" global y un "comparison counter" global que seteamos a 0 previo a cada bubble sort, e incrementa adentro del bubble sort. Desde nuestro test spec podemos hacer un assertion como `expect(swapCounter).toEqual(100)`.

Esto no es lo mejor. Tendríamos código en nuestro bubble sort que nada tienen que ver con resolver bubble sort. Eso significa que nuestro bubble sort va a tener runntime innecesario, solo para poder testearlo.

#### Test spies

Una mejor opción es usar "spies". Un `spy` es una funcion que se traquea a sí misma, grabando informacion en propiedades del objeto de la función. En nuestro código de testeo, normalment tomaremos una función existente y la reemplazariamos con un spy. El spy puede comportarse exactamente igual que el original, pero tambien grabar cuantas veces es llamado, que argumentos fue llamado, y otras cosas copadas. 

For example:
``` javascript
// source code
const tootsiepop = {};
tootsiepop.lick = function () {
  return 'licked';
};
tootsiepop.getToCenter = function () {
  this.lick();
  this.lick();
  this.lick();
  return 'got to center';
};
```

```javascript
// testing code
before(function () {
  spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('getting to the center of tootsiepop involves exactly three licks', function () {
  tootsiepop.getToCenter();
  expect(tootsiepop.lick.calls.count()).toEqual(3);
});
```

¿Pero sobre qué funcion deberiamos espiar? Si espiamos sobre bubbleSort eso solo sería capaz de decirnos cuantas veces llamamos bubbleSort, no cuantas veces hicimos swap y/o comparar.

Bueno esto es lo q podemos hacer (y es posible que vos ya hiciste esto): toma la logica del swap fuera de bubbleSort y ponla en su propia swap function. Luego usa esa funcion dentro de bubbleSort. Ahora en los tests podemos `spyOn` esa funcion global `swap`. Haciendo eso, ahora podemos contar cuantos swaps sucedieron. Podemos hacer algo similar a eso para contar las comparaciones.

## Merge Sort

### Función split

Merge sort usa una función split que puede dividir un arreglo en dos arreglos separados.

La funcion debería verse algo como:

```javascript
function split(wholeArray) {

  /* tu código aqui para definir el firstHalf y secondHalf array */

  return [firstHalf, secondHalf];
}
```

El esqueleto de un test básico:

```javascript
describe('Split Array function', function() {
  it('es capar de dividir el arreglo en dos partes', function() {
    // tu código aquí 
  });
});
```

Considera lo que quieras hacer para arreglos de length impar.


### Función merge

Merge sort usa un algoritmo de mergeo para combinar arreglos ordenados en un solo arreglo ordenado. Crea un test para esta funcion en mergesort.spec.js:

```javascript
describe('Merge', function(){
  it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function(){
    // testea el merging algorithm
  });
});
```
Ahora, escribe la funcion `merge` para pasar el test

### Función mergesort

Ahora que tenés las funciones `merge` y `sort`, implementa la función recursiva de mergeSort.

La funcion puede verse como:
```javascript
function mergeSort(array) {

  /* tu código aquí */

}
```
 
También deberias escribir tests para probar la función `mergeSort

## Optimización

### Performance

![performance](https://www.explainxkcd.com/wiki/images/d/d5/optimization.png)

Cuando desarrollamos aplicaciones de software, tipicamente no nos obsesionamos sobre micro-optimizaciones y mejoras de performance teoricas. La optimización precoz tiene varias cons:

- Alenta el proceso de desarrollo
- Genera codigo más complejo, dificil de mantener ("optimizacion es inversamente proporcional a la calidad del códigi")
- Es mas propenso a errores
- Es normalmente un esfuerzo innecesario, ya que lo que ganas es indetectable
- Distrae de areas que quizás realmente necesitan optimizarse. 

#### Los algoritmos son eficientes

Habiendo dicho eso, los algotitmos son parcialmente definidos por su performance. Merge sort es supuestamente O(n*log(n)), por ejemplo, y fallar en escribirlo de esa manera significa... bueno, que no hemos hecho un merge sort adecuado. Confirmemos el comportamiento de nuestra solución experimentalmente.


#### Benchmarking

Visita [este repo](https://github.com/atralice/sorting-benchpress) y git clone en tu computadora. Luego `npm install` y `npm start`. Vas a ver un chart popularse a medida que automaticamente corre los tres sorting algorithms - native(quicksort), bubble, y merge sort. Aunque... esto es una mentira! No te hemos dado las soluciones para bubble o merge sort todavía, así que esta usando el mismo algoritmo para los tres charts.

Abrir `browser > js > sorts.js` y reemplaza mergeSort y bubbleSort cont tus implementaciones (copy-paste). Refreshea la página de benchmarking  para ver la performance de las soluciones. Merge sort deberia estar muy pegada a la nativa quicksort. Bubble sort, por el otro lado, no es... lo mejor, mas bien, es terrible.

Si tu mergeSort no es comparable a quickSort, probablemente estas haciendo algo de forma ineficiente o no optimizado. Fijaté si puedes darte cuenta que és.

## Al inifinito y mas allá

### Bonus 

Si llegaste hasta este punto, buen trabajo! Probablemente has implementado tu Bubble y Merge sort como simples sorts númericos - usando < ó > operadores directamente en el arreglo de elementos.

```javascript
var arrToSort = [4, 8, 2, 9];
var sorted = arrToSort.sort(); // se fija si los elementos son `>` que los otros
```

Si eso es verdad, trata de extender tu sort para aceptar opcionalmente una función comparadora para usar, para que puedas ordenar de esta manera:

```javascript
var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
var sorted = arrToSort.sort(function comparator (a, b) {
  if (a.age < b.age) return -1; // devolver `-1` significa "a va antes que b"
  if (a.age > b.age) return 1;  // devolver `1` significa que "b va antes que a"
  return 0; // devolver 0 signifca "a y b son equivalentes"
});
```

Vé los detalles de [JavaScript's .sort ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) para mas info.


### Autodidacta

#### INSERTION SORT

Una forma de ordenar muy sencilla de buscar e implementar es Insertion Sort. Cuál es la complejidad de tiempo de Insertion sort y por qué? A pesar de tener un promedio y una complejidad de tiempo en el peor caso bastante pobre, isertion sort tiene una o dos ventajas practicas; por ejemplo, es muy rapida para arreglos muy pequeños

#### QUICKSORT

El metodo de ordenamiento mas común que usan como implentacion nativa, incluyendo V8, es Quicksort. Quisort es un metodo de ordenamiento muy rápido en promedio, pero apesar de su nombre, su performance de ordenamiento en el peor caso es en realidad de O(n^2). Haz algo de research sobre Quicksort e intenta implementarlo tu mismo.

#### HEAPSORT

Si previamente investigaste Heaps (un tipo de estructura de datos), una extensión natural sería implementar Heapsort. Las características del Big O de Heapsort son comparables con merge sort, pero en práctica es realmente un poco más lenta.

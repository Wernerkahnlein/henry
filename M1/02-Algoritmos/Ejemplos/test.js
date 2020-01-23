const test = require('tape');
const factores = require('./functions.js').factores;
const bubbleSort = require('./functions.js').bubbleSort;
const insertionSort = require('./functions.js').insertionSort;
const selectionSort = require('./functions.js').selectionSort;
const quickSort = require('./functions.js').quickSort;
const heapSort = require('./functions.js').heapSort;
const N = require('./Heap.js');

test('Factores', (t) => {
  t.deepEqual(factores(12), [2, 2, 3], 'Factores de 12');
  t.deepEqual(factores(5), [5], 'Factores de 5');
  t.deepEqual(factores(8), [2, 2, 2], 'Factores de 8');
  t.deepEqual(factores(33), [3, 11], 'Factores de 33');
  t.deepEqual(factores(65), [5, 13], 'Factores de 65');
  t.deepEqual(factores(99), [3, 3, 11], 'Factores de 99');
  t.deepEqual(factores(133), [7, 19], 'Factores de 133');
  t.deepEqual(factores(7), [7], 'Factores de 7 - Primo');
  t.deepEqual(factores(11), [11], 'Factores de 11 - Primo');
  t.end();
});


test('Bubble Sort - Menor a Mayor', (t) => {
  t.equal(Array.isArray(bubbleSort([1])), true, 'Devuelve un arreglo');
  t.deepEqual(bubbleSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
  t.deepEqual(bubbleSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
  t.deepEqual(bubbleSort([2]), [2], 'Unico Elemento.');
  t.deepEqual(bubbleSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
  t.deepEqual(bubbleSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
  t.deepEqual(bubbleSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
  t.deepEqual(bubbleSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
  const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
    34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
    75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
  const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
    29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
    41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
  t.deepEqual(bubbleSort(randomArr), orederdArr, 'Random Numbers 5');
  t.end();
});

test('Insertion Sort - Menor a Mayor', (t) => {
  t.equal(Array.isArray(insertionSort([1])), true, 'Devuelve un arreglo');
  t.deepEqual(insertionSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
  t.deepEqual(insertionSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
  t.deepEqual(insertionSort([2]), [2], 'Unico Elemento.');
  t.deepEqual(insertionSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
  t.deepEqual(insertionSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
  t.deepEqual(insertionSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
  t.deepEqual(insertionSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
  const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
    34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
    75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
  const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
    29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
    41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
  t.deepEqual(insertionSort(randomArr), orederdArr, 'Random Numbers 5');
  t.end();
});

test('Selection Sort - Menor a Mayor', (t) => {
  t.equal(Array.isArray(selectionSort([1])), true, 'Devuelve un arreglo');
  t.deepEqual(selectionSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
  t.deepEqual(selectionSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
  t.deepEqual(selectionSort([2]), [2], 'Unico Elemento.');
  t.deepEqual(selectionSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
  t.deepEqual(selectionSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
  t.deepEqual(selectionSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
  t.deepEqual(selectionSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
  const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
    34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
    75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
  const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
    29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
    41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
  t.deepEqual(selectionSort(randomArr), orederdArr, 'Random Numbers 5');
  t.end();
});
test('Quick Sort - Menor a Mayor', (t) => {
  t.equal(Array.isArray(quickSort([1])), true, 'Devuelve un arreglo');
  t.deepEqual(quickSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
  t.deepEqual(quickSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
  t.deepEqual(quickSort([2]), [2], 'Unico Elemento.');
  t.deepEqual(quickSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
  t.deepEqual(quickSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
  t.deepEqual(quickSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
  t.deepEqual(quickSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
  const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
    34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
    75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
  const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
    29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
    41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
  t.deepEqual(quickSort(randomArr), orederdArr, 'Random Numbers 5');
  t.end();
});

test('Heap Sort', (t) => {
  const heap = new N(5).add(4).add(3).add(2)
    .add(1)
    .add(7)
    .delete(7)
    .add(0)
    .delete(0);
  const arr = [heap.pop(), heap.pop(), heap.pop(), heap.pop(), heap.pop()];
  t.deepEqual(arr, [1, 2, 3, 4, 5], 'Heap Order');

  t.equal(Array.isArray(heapSort([1])), true, 'Devuelve un arreglo');
  t.deepEqual(heapSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
  t.deepEqual(heapSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
  t.deepEqual(heapSort([2]), [2], 'Unico Elemento.');
  t.deepEqual(heapSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
  t.deepEqual(heapSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
  t.deepEqual(heapSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
  t.deepEqual(heapSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
  const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
    34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
    75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
  const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
    29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
    41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
  t.deepEqual(heapSort(randomArr), orederdArr, 'Random Numbers 5');

  t.end();
});

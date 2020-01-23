# Ejercicios Estructura de Datos

Dificultad:

* :suspect: : Obligatorio! no te vayas sin terminar estos ejercicios.
* :hurtrealbad: : Si terminaste rápido intenta hacer estos.
* :goberserk: : Sólo para gente manija y sin sentimientos.

# Normal :suspect:

## Arreglos

> Usá estos [tests](./tests.js) para guiarte y para comprobar que todo funcione bien.

1. La clase Array ya está implementada en Javascript vamos a investigarla:
	* Listar todas las operaciones que nos permite hace la clase array.
	* Usemos un arreglos de números para calcular las siguientes propiedades estadísticas:
		+ Encontrar el mínimo número.
		+ Encontrar el máximo.
		+ Encontrar el total, o sea la suma de todos los elementos.
		+ Calcular el promedio.
		+ Calcular la Varianza y la desviación standard  :no_mouth:.

## Pilas

1. Vamos a implementar pilas en Javascript:
	+ Implementa una pila usando __listas enlazadas__. Deberá tener la siguiente funcionalidad:
		+ insert(value): inserta el valor al final de la Pila. 	 
		+ pop(): obtiene el último elemento de la Pila.
		+ getAll(): Lista todos los elementos de la Pila.
		+ len(): Devuelve el número de elementos en la Pila.
	+ Asegurate de saber en todo momento cuantos elementos hay en la pila.
	+ Usá la pila para revertir un arreglo.


## Colas

## Listas enlazadas

1. Implementar una clase Lista que tenga las siguientes operaciones:
	+ getAll() : Muestra todos los elementos de la lista.
	+ get(index): Lista el enésimo elemento de la lista.
	+ insert(value): Insertar un nodo al comienzo de la lista.
	+ get(): Sacar un nodo del comienzo de la lista.
	+ pop(): Sacar un nodo del final de la lista.
	+ find(value): Buscar un nodo con valor `value`, si existe lo devuelve, si no existe devuelve null.

## Listas Doblemente Enlazadas

2. Modificar el ejercicio anterior para que ahora sea una lista doblemente enlazada que tenga las mismas operaciones:
	+ getAll(): Listar todos los elementos de la lista.
	+ getN(n): Listar el enésimo elemento de la lista.
	+ insert(value): Insertar un nodo al comienzo de la lista.
	+ get(): Sacar un nodo del comienzo de la lista.
	+ pop(): Sacar un nodo del final de la lista.
	+ find(value): Buscar un elemento de la lista por el dato.
	+ next(): Avanza el puntero a la siguiente posición.
	+ past(): Retrocede el puntero a la posición anterior.

## Árboles

### Árbol binario

1. Implementar un árbol binario que realice las sigiuentes operaciones:
	* Insertar un elemento.
	* Borrar un elemento.
	* Buscar un elemento.


# Díficiles :hurtrealbad:

## Arreglos

1. Implementar la clase Matriz, que es básicamente un arreglo de arreglos.
	- Que pueda hacer las siguientes operaciones:
		- Buscar un valor.
		- Sumar matrices.
		- Restar matrices.
		- Multiplicar matrices.

## Pilas

1. Implementa pilas sin utilizar arreglos ni listas enlazadas.

## Colas

## Listas enlazadas

1. 	Agregá las siguientes features:
 	+ Insertar al final de la lista.
	+ Insertar en el enésimo lugar de la lista.
	+ Insertar una lista dentro de otra lista (en el medio)
	+ Sacar el enésimo nodo de la lista.
	+ Buscar y sacar un nodo por el dato.

## Listas Doblemente Enlazadas

2. Agregá las siguientes features:
	+ Insertar al final de la lista.
	+ Insertar en el enésimo lugar de la lista.
	+ Insertar una lista dentro de otra lista (en el medio)
	+ Sacar el enésimo nodo de la lista.
	+ Buscar y sacar un nodo por el dato.

## Árboles

### Árbol binario

1. Agrega una función que devuelve true si el árbol está balanceado.


# Imposibles :goberserk:

## Arreglos

* Creá tu propia estructura de datos que tenga la misma funcionalidad que la clase Array de javascript.

## Sets

## Colas

## Listas enlazadas

+ Ordenar la lista según los valores de los datos (númericos).
+ Hacer una lista ordenada, es decir, cada vez que se agregué un nodo ubicarlo en el lugar correspondiente según cierto orden.

## Listas Doblemente Enlazadas

* Ordenar la lista según los valores de los datos (númericos).
* Hacer una lista ordenada, es decir, cada vez que se agregué un nodo ubicarlo en el lugar correspondiente según cierto orden.


## Árboles

### Árbol binario

* Una función que balancee el árbol binario.   	

----

## God Mode

### Arbol AVL :godmode: 

Implementar un árbol AVL que realice las sigiuentes operaciones:
	- Insertar un elemento.
	- Borrar un elemento.
	- Buscar un elemento.
	- Que tenga una función que devuelve true si el árbol está balanceado.
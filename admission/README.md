# Henry Challenge

## Algoritmos y pseudocódigo

Un **algoritmo** es un proceso para resolver un problema, define las acciones y en qué orden tenes que ejecutarlas.

**Pseudocódigo** es un lenguaje informal en el que expresamos las instrucciones que definen un . Este utiliza las convenciones estructurales de un lenguaje de programacion real, pero es más fácil leerlo para un humano que para una computadora.
No existe una síntaxis estandar para el pseudocodigo, en nuestros ejemplos vamos a usar un subgrupo de instrucciones:

* **Variables**: vamos a poder definir variables y darle valores. Podemos usar cualquier nombre para las variables y luego referinos a ellas con esos nombres:
  Ejemplo:
  ```
  maximo = 3;
  imprimir maximo * 2;
  ```

  OUTPUT:
  6

* **Instrucciones simples**: Vamos a poder usar cualquier operación matématica (sumas, divisiones, multiplicaciones, etc...) usando los signos que ya conocemos. Además podemos dar instrucciones como "imprimir" (que va a imprimir por pantalla) o "retornar" (que nos devuelve un valor y termina la ejecucion del algoritmo).

* **Iteraciones**: Vamos a poder iterar sobre números y listas de la siguiente forma:
  ```
  Para cada numero i del n1 al n2:
    instrucciones
  ```
  Ejemplo:
  ```
  Para cada numero i del 1 al 5:
    imprimir i * 2
  ```

  output:
    2
    4
    6
    8
    10

  Cuando tengamos una lista de numeros, podemos hacer lo siguiente:
  ```
  para cada elemento j de la lista:
    instucciones
  ```

  Ej:
  ```
  lista = [1,2,3,4]
  para cada elemento i de la lista:
    imprimir i * 3
  ```
  output:
  3
  6
  9
  12

* **condicionales**: los condicionales nos permiten tener un control sobre qué instrucciones queremos que se realizen dependiendo de alguna condicion. Básicamente, podemos escribir lo siguiente:
  ```
  SI (condicion) ENTONCES:
    instruccion
  ```
  En el caso que la condicion sea VERDADERA, el algoritmo ejecutará la instruccion. Si la condicion es FALSA, simplemente ignorará esa linea.

  Ej:

    ```
    Para cada número i del 1 al 5:
      imprimir i
      SI (i == 3) ENTONCES:
        imprimir 'TRES'
    ```

    El output será:
    1
    2
    3
    TRES
    4
    5

  A su vez, podemos usar **operadores lógicos**, como el `Y` y el `O` para realizar condiciones más complejas. Por ejemplo:

    ```
    Para cada número i del 1 al 5:
      imprimir i
      SI (i == 3 o i == 1) ENTONCES:
        imprimir 'TRES'
    ```

  > La condicion se cumple cuando *i* es igual a 3, **O** *i* es igual a 1.

  El output será:
    1
    TRES
    2
    3
    TRES
    4
    5
  ```
  Para cada número i del 1 al 5:
    imprimir i
    SI (i > 1 Y i < 4) ENTONCES:
      imprimir 'TRES'
  ```

  > La condicion se cumple cuando *i* es mayor a 2, **Y** *i* es menor a 4. El mayor y menos son excluyentes, si queremos incluir el número deberíamos usar el >= (mayor igual) o el <= (menor igual).

  El output será:
    1
    2
    TRES
    3
    TRES
    4
    5

  Tambien podemos elegir qué hacer si la condiciones NO se cumple, usamos el SI NO:
  ```
    SI (condicion):
      instruccion1
    SI NO:
      instruccion2
  ```

  Lo interesante de esto, es que sólo se ejecutará una de las instrucciones, según si la condicion se haya cumplido o no.

  Por último, podemos combinar estas estructuras para obtener una cadena de condicionales entrelazados:

  ```
    SI (condicion):
      instruccion1
    SI NO, SI (condicion2) :
      instruccion2
    SI NO, SI (condicion3):
      instruccion3
    ...
    SI NO:
      instruccionN
  ```

  De esta forma, según cual condicion sea verdadera, se ejecutará SÓLO UNA de las instrucciones. En el caso que ninguna sea verdadera, se ejecturá la última instruccion, la del SI NO.

## Ejemplo 1

Escribir en pseudo código un programa que imprima todos los múltiplos de cinco entre el 1 y el 100.

Solución:

```
Para cada número n de 1 a 100:
  SI (n % 5 == 0):
    imprimir n
```

> El % es la operación módulo, devuelve el resto de la división entera. Por ejemplo: 4 % 3 = 1 ( cuatro módulo tres es uno, porque cuatro divido tres da 1 y tiene resto 1.). 5 % 3 = 2 . 6 % 3 = 0. 

## Ejemplo 2

Encontrar el máximo número dentro de una lista de números enteros.

```
maximo = primer elemento de la lista
Para cada elemento i de la lista:
  SI (i > maximo):
    maximo = i

retorno maximo
```

En este caso, primero tomamos como máximo al primer elemento de la lista. Luego empezamos a recorrer toda la lista, elemento por elemento. Empezamos a comparar cada elemento con el máximo que habiamos elegido. Si el elemento es mayor que el máximo, entonces guardo el valor del elemento en la variable máximo, si no, no hago nada. De esta forma, al llegar al final, puedo devolver la variable maximo, sabiendo que adentro está el mayor valor de la lista.

## Ejercicios

Resolver los siguientes ejercicios en pseudocodigo:

### Ejercicio 1

Escribir un algoritmo que imprima los numeros del 1 al 100, con la condicion que si el numero a imprimir es multiplo de 3, imprima el string 'Fizz', si el numero es multiplo de 5 imprima: 'Buzz', y si es multiplo de ambos imprima: 'FizzBuzz'

ejemplo de output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// ...
// 14
// FizzBuzz
// 16

### Ejercicio 2

Escribir un algoritmo que encuentre el máximo y el minímo número dentro de una lista de números enteros (desordenados).

Output:

  [1, 3, 0, -1, 12, 3]
  Output:
    min: -1
    max: 12

### Ejercicio 3

Escribir un algoritmo que, dada una lista de números ordenados, te diga si alguna combinación de dos números cualesquiera suman un segundo número (N).
Si un mismo número sumado dos veces da el segundo parámetro, debería devolver Falso.

Por Ejemplo:
```
En este caso, la lista es [1,2,3,4] y el segundo número (N) es 10:

[1 ,2, 3, 4] y 10. Queres saber si alguna combinación de esos cuatro números de la lista suman 10. en Este caso es FALSO, porque ninguna combinación de dos números suma diez.
[1, 2, 3, 4] y 5 . Es VERDADERO, porque 2 + 3 es igual a cinco.
[1, 2, 3, 4] y 8 . Es FALSO.

[2,5,7,10,11,15,20] y 13  // verdadero     2+11 suman 13
[2,5,7,10,11,15,20] y 14  // falso
```

>> **TIPS**:
>>  * Es importante primero leer la consigna y entender perfectamente qué se está pidiendo. Si hay alguna duda de la consigna podés preguntar por email a toni@soyhenry.com.
>> * La idea es encontrar una solución al problema, no importa si no es la solución más óptima. Si deciden optimizar una solución, es mejor que presenten la primera solución y su optimización.
>> * La resolución de los algoritmos deben estar escritas en pseudocódigo. Pueden usar cualquier otra estructura de control, o instrucciones que no hayamos mencionado arriba [aca](https://es.wikipedia.org/wiki/Pseudoc%C3%B3digo#Estructuras_de_control), pueden encontrar algunas más. De todos modos, con las presentadas se pueden resolver todos los problemas.
>> * En el caso que no se les ocurra cómo escribir la solución en pseudocódigo, pueden enviar la solución descripta con sus propias palabras. 

---

Una vez resuelto todo, enviar la solucion por correo a: toni@soyhenry.com
Si las soluciones son correctas, después haremos un call donde tendrás que explicar el razonamiento usado para resolverlos. Acordaté que si sospechamos que copiaste la solución de internet, o no la podés defender en el call, vas a ser descalificado para entrar a ser Henry.
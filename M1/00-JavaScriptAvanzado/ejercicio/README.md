
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiguen cúal es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a; 
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar); 
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

### Event loop

Considerando el siguiente código, cuál sería el orden del ouput? Por qué?

```javascript
function printing() {
   console.log(1); 
   setTimeout(function() { console.log(2); }, 1000); 
   setTimeout(function() { console.log(3); }, 0); 
   console.log(4);
}

printing();
```


### Coerción de Datos

Que crees que va dar estas operaciones:

```javascript
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![] 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Closures

Considerando el siguiente código, cuál sería el output del console log si el usuario clikeara en el primer y último `button`:

```javascript
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
      console.log('You clicked element #' + i);
   });
}
```

### Closures

Modificar el código anterior, de tal forma que funcione como se espera.

### Hoisting

Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así: 

```javascript
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este:

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

Cuál es el output que vemos en consola luego de ejecutar esté código? Explicar porqué es así:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Call and Apply

Modificá el código anterior, de tal manera que el último console log imprima 'Aurelio De Rosa'.

## OOP - Prototypes

### Repeatify

Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

```javascript
console.log('hola'.repeatify(3));   //holaholahola 
```

### Shapes

* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
* Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
* Agregá un nuevo método al prototipo llamado `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var t = new Triangle(1, 2, 3);
> t instanceof Triangle
// true
> shape.isPrototypeOf(t);
// true
> t.getPerimeter();
// 6
> t.getType();
// "Triangle"
```

* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

Probá tu solución con el siguiente código:

```javascript
> var t = new Circle(2);
> t instanceof Circle
// true
> shape.isPrototypeOf(t);
// true
> t.getPerimeter();
// 12.566370614359172
> t.getType();
// "Circle"
```

* Creá una última `shape` llamada `Square`.
* Agregá el método `getArea` de todas las `shape`s.
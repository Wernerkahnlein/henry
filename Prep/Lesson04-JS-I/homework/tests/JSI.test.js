/* eslint-disable no-undef */
const {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  square,
  cube,
  raiseToPower,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
} = require('../homework.js');

describe('nuevaString', function() {
  it('should be a string', function() {
    expect(typeof nuevaString).toBe('string');
  });
});

describe('nuevoNum', function() {
  it('should be a number', function() {
    expect(typeof nuevoNum).toBe('number');
  });
});

describe('nuevoBool', function() {
  it('should be a boolean', function() {
    expect(typeof nuevoBool).toBe('boolean');
  });
});

describe('newSubtract', function() {
  it('should be a boolean', function() {
    expect(newSubtract).toBe(true);
  });
});

describe('newMultiply', function() {
  it('should be a boolean', function() {
    expect(newMultiply).toBe(true);
  });
});

describe('nuevoModulo', function() {
  it('should be a boolean', function() {
    expect(nuevoModulo).toBe(true);
  });
});

describe('devolverString(str)', function() {
  it('should return the string provided', function() {
    let string = 'lambdaSchool';
    expect(devolverString(string)).toBe(string);
  });
});

describe('sumar(x, y)', function() {
  it('should return the sum of the two arguments', function() {
    expect(sumar(5, 5)).toBe(10);
    expect(sumar(-1, 5)).toBe(4);
  });
});

describe('restar(x, y)', function() {
  it('should return the difference of the two arguments', function() {
    expect(restar(5, 5)).toBe(0);
    expect(restar(-1, 5)).toBe(-6);
    expect(restar(5, -5)).toBe(10);
    expect(restar(0, 0)).toBe(0);
  });
});

describe('divide(x, y)', function() {
  it('should return the quotient of the two arguments', function() {
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
});

describe('multiplica(x, y)', function() {
  it('should return the product of the two arguments', function() {
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });
});


describe('sonIguales(x, y)', function() {
  it('should return true if the arguments are equal', function() {
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales('test', 'test')).toBe(true);
  });
});

describe('tienenMismaLongitud(str1, str2)', function() {
  it('should return true if the arguments have the same length', function() {
    expect(tienenMismaLongitud('hi', 'there')).toBe(false);
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
  });
});

describe('menosQueNoventa(num)', function() {
  it('should return true if the argument is less than ninety', function() {
    expect(menosQueNoventa(15)).toBe(true);
    expect(menosQueNoventa(90)).toBe(false);
    expect(menosQueNoventa(100)).toBe(false);
  });
});

describe('mayorQueCincuenta(num)', function() {
  it('should return true if the argument is greater than fifty', function() {
    expect(mayorQueCincuenta(15)).toBe(false);
    expect(mayorQueCincuenta(50)).toBe(false);
    expect(mayorQueCincuenta(60)).toBe(true);
  });
});

describe('esPar(num)', function() {
  it('should return the bool true if the argument is even, false otherwise', function() {
    expect(esPar(6)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
  });
});

describe('esImpar(num)', function() {
  it('should return the bool true if the argument is odd, false otherwise', function() {
    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});

// TODO
// Check this
/*
describe('square(num)', function() {
  it('should return the argument after squaring it', function() {
    expect(square(6)).toBe(36);
    expect(square(7)).toBe(49);
    expect(square(0)).toBe(0);
    expect(square(-5)).toBe(25);
  });
});
*/

// TODO
// Check this
/*
describe('cube(num)', function() {
  it('should return the argument after cubing it', function() {
    expect(cube(3)).toBe(27);
    expect(cube(0)).toBe(0);
    expect(cube(-5)).toBe(-125);
  });
});
*/

// TODO
// Check this
/*
describe('raiseToPower(num, exponent)', function() {
  it('should return the argument after raising it to the exponent\'s power', function() {
    expect(raiseToPower(2, 2)).toBe(4);
    expect(raiseToPower(2, 3)).toBe(8);
    expect(raiseToPower(0, 5)).toBe(0);
    expect(raiseToPower(10, 1)).toBe(10);
  });
});
*/

describe('redondearNumero(num)', function() {
  it('should return the argument after rounding it', function() {
    expect(redondearNumero(1.5)).toBe(2);
    expect(redondearNumero(2)).toBe(2);
    expect(redondearNumero(0.1)).toBe(0);
  });
});

describe('redondearHaciaArriba(num)', function() {
  it('should return the argument after rounding it up', function() {
    expect(redondearHaciaArriba(1.5)).toBe(2);
    expect(redondearHaciaArriba(2)).toBe(2);
    expect(redondearHaciaArriba(0.1)).toBe(1);
  });
});

describe('agregarSimboloExclamacion(str)', function() {
  it('should add an exclamation point to the end of the string', function() {
    expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
  });
});

describe('combinarNombres(firstName, lastName)', function() {
  it('should return the two strings combined into one with a space separating them', function() {
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });
});

describe('obtenerSaludo(name)', function() {
  it('should return the string \'Hola {name}!\'', function() {
    expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
    expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
  });
});

describe('obtenerAreaRectangulo(alto, ancho)', function() {
  it('deberia retornar el area correcta', function() {
    expect(obtenerAreaRectangulo(2, 2)).toBe(4);
    expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    expect(obtenerAreaRectangulo(0, 2)).toBe(0);
  });
});
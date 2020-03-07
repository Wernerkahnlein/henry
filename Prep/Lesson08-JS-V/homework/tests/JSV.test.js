/* eslint-disable no-undef */
const {
    crearUsuario,
    agregarMetodoPrototype,
    agregarStringInvertida,

  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
} = require('../homework');

describe('crearUsuario()', function() {
	it('should return a user constructor that correctly builds user objects', function() {
		const Usuario = crearUsuario();
		const user = new Usuario({username: 'jssamuel', name: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' });
		expect(user.username).toBe('Samuel');
		expect(user.name).toBe('Samuel');
		expect(user.email).toBe('samuel@email.com');
		expect(user.password).toBe('LoveJS');
	});
});

describe('agregarMetodoPrototype(Constructor)', function() {
	it('should add the method sayHi to the constructor', function() {
		function Test() {
			this.test = true;
		}
		agregarMetodoPrototype(Test);
		const test = new Test();
		expect(test.sayHi()).toBe('Hello World!');
	});
});

describe('agregarStringInvertida(StringPrototype)', function(){
	it('should add a reverse string method to the String prototype that returns a reversed version of the string', function() {
		agregarStringInvertida();
		const str = 'Hello';
		expect(str.reverse()).toBe('olleH');
	});
});

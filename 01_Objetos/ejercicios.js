console.log('Hola desde ejercicios!');

// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
// 	 Generar el RFC a partir de el nombre, edad y sexo

class Persona {
  constructor(nombre, edad, sexo, peso, altura) {
    if (arguments.length != 5) throw new Error('Para crear una persona debes ingresar nombre, edad, sexo, peso y altura');
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.RFC = nombre + edad + sexo + nombre.length;
  }

  calcularIMC() {
    this.IMC = (this.peso / (this.altura * this.altura)).toFixed(2);
    if (this.IMC >= 30) {
      return `El IMC de ${this.nombre} es ${this.IMC}, valor que indica obesidad`;
    } else if (this.IMC >= 25) {
      return `El IMC de ${this.nombre} es ${this.IMC}, valor que indica sobrepeso`;
    } else if (this.IMC >= 18.5) {
      return `El IMC de ${this.nombre} es ${this.IMC}, valor que indica un peso saludable`;
    } else {
      return `El IMC de ${this.nombre} es ${this.IMC}, valor que indica delgadez`;
    }
  }

  esMayorDeEdad() {
    if (this.edad > 17) return `${this.nombre} tiene ${this.edad} años, por lo tanto es mayor de edad`;
    return `${this.nombre} tiene ${this.edad} años, por lo tanto es menor de edad`;
  }
}

let pedro = new Persona('Pedro', 26, 'M', 72, 1.80);
console.log(pedro);
console.log(pedro.calcularIMC());
console.log(pedro.esMayorDeEdad());

// 2.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
// 	 -Titular y cantidad
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta {
  constructor(titular, cantidad) {
    if (arguments.length != 2) throw new Error('Para crear una cuenta debes ingresar nombre del titular y cantidad de apertura');
    this.titular = titular;
    this.cantidad = cantidad;
  }

  // no debe de tener más de $900
  ingresar(dinero) {
    if (dinero === undefined) throw new Error('Para ingresar dinero a tu cuenta debes indicar la cantidad')
    this.cantidad += dinero;
    if (this.cantidad > 900) throw new Error('No puedes tener más de $900 en la cuenta');
    return this.cantidad;
  }

  // no debe de tener menos de $10
  retirar(dinero) {
    this.cantidad -= dinero;
    if (this.cantidad < 10) throw new Error('No puedes tener menos de $10 en la cuenta');
    return this.cantidad;
  }
}

const cuentaPedro = new Cuenta('Pedro', 100);

console.log(cuentaPedro);
console.log(cuentaPedro.ingresar(100)); // 200
console.log(cuentaPedro.ingresar(300)); // 500
// console.log(cuentaPedro.ingresar(500)); // esto marca error porque se pasa de $900
// console.log(cuentaPedro.retirar(500)); // esto marca error porque es menos de $10

console.log('Hola desde app!');

//OBJETO LITERAL

const objetoLiteral = {
  nombre: 'Pedro',
  apellido: 'González',
  comer: () => console.log('Yummy yummy 🌯')
}
console.log(objetoLiteral);

const json = {
  "nombre": "Pedro",
  "apellido": "González",
  "comer": true
}
console.log(json);

// La principal diferencia entre un objeto literal y JSON, es que JSON es el formato mínima para expresar un objeto en la arquitectura REST y sus atributos van entre comillas ""

// Syntatic sugar, obtenido de wikipedia:
// In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.

// CLASES
// Las clases son los "moldes" o "plantillas" de un objeto que comparte atributos y métodos
// Las clases fueron agregadas a JS desde ECMAScript6

//Sintaxis para declarar una clase

class Car {
  //Uso del método constructor para indicar las propiedades de esta clase
  constructor(name, color, velocidad, ruedas, motor){
    //this sirve para que el argumento declarado sea parte del objeto en sí mismo, si no fuera así, sólo sería un dato sin referencia
    this.name = name;
    this.color = color;
    this.velocidad = velocidad;
    this.ruedas = ruedas;
    this.motor = motor;
  }

  arranca(){
    return 'Runn runnnn 🚗💨';
  }

  frena(){
    return 'Frenandoooo.... 🚗🛑';
  }

  dobla(){
    return 'Doblandoooo ⏎☸️';
  }
}

//Para usar o "instanciar" una clase hacemos uso de la palabra reservada new y la clase con sus propiedades del constructor
const corvette = new Car('Corvette', 'rojo', 220, 4, 'V8');
console.log(corvette);
console.log(corvette.ruedas);
console.log(corvette.motor);
console.log(corvette.arranca());
console.log(corvette.frena());

//Puedo usar la misma clase N cantidad de veces para crear diferentes objetos
const tesla = new Car('Tesla S', 'rojo', 240, 4, 'Electric');
console.log(tesla);
console.log(tesla.motor);
console.log(tesla.dobla());

// Ejemplo polígono
// Getters & Setters
class Poligono {
  constructor(figura, alto, ancho){
    this.figura = figura;
    this.alto = alto;
    this.ancho = ancho;
  }

  getName(){
    return this.figura;
  }

  getArea(){
    return this.alto*this.ancho;
  }

  setName(newName){
    // if(newName === undefined) return 'Debes introducir un nombre válido';
    if(newName === undefined) throw new Error('Debes introducir un nombre válido');
    this.figura = newName;
    return this.figura;
  }

  setAlto(newAlto){
    if(newAlto === undefined) throw new Error('Debes introducir un valor de altura válido');
    this.alto = newAlto;
    return this.alto;
  }

  setAncho(newAncho){
    if(newAncho === undefined) throw new Error('Debes introducir un valor de anchura válido');
    this.ancho = newAncho;
    return this.ancho;
  }
}

const rectangulo = new Poligono('rectangulo', 20, 40);
console.log(rectangulo);
console.log(rectangulo.getName());
console.log(rectangulo.getArea());
console.log(rectangulo.setName('Rectangulito'));
console.log(rectangulo.setAlto(5));
console.log(rectangulo.setAncho(10));
console.log(rectangulo.getArea());

console.log(rectangulo);

//Por qué no obtener el valor de una propiedad directo sin un get?
//Por seguridad, para evitar vulnerabilidades de acceder a una propiedad directa de un objeto
console.log(rectangulo.figura);
console.log(rectangulo.getName()); //con un método podemos acceder de manera más segura a una propiedad para validar la solicitud


// 4 PILARES DE LA PROGRAMACIÓN ORIENTADA A OBJETOS POO
// Abstracción: abstraer características de cualquier objeto de la vida real y representarlo mediante una clase que cuente con atributos y métodos.
// Encapsulamiento: encerrar todo lo que un objeto necesita en sus atributos y métodos para que todo esté contenido en un solo lugar.
// Polimorfismo: habilidad de un hijo (una instacia de una clase) para redefinir cualquiera de sus atributos o métodos sin importar lo que obtenga del padre (clase de la que se creó la instancia)
// Herencia: posibilidad de pasar toda la información de una clase padre a una clase hijo, para reutilizar código.

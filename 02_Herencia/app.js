console.log('Hola desde app! 👋');

class Animal {
  constructor(name){
    if (!name) throw new Error('Debes ingresar un nombre para el animal')
    this.name = name;
    this.brain = true;
    this.legs = 0;
  }

  dormir(){
    return this.name + ' está durmiendo zzZzZzZzz...'
  }
}

const zabumafu = new Animal('Zabumafú');
console.log(zabumafu);
console.log(zabumafu.dormir());

// Para heredar usamos la palabra reservada extends seguido del nombre de la clase padre, la cual heredará todos sus atributos y métodos
class Human extends Animal {
  constructor(name){
    if (!name) throw new Error('Debes ingresar un nombre para el Humano')
    super(name);
    this.legs = 2;
  }

  hablar(palabras){
    if (!palabras) throw new Error('Para hablar, debes indicar las palabras a decir')
    return this.name + ' dice: ' + palabras
  }
}

const pedro = new Human('Pedro');
console.log(pedro);
console.log(pedro.hablar('Hola amigxs, todo súper! 🤘'));
console.log(pedro.dormir());

// Clase Pet que se hereda de Animal
class Pet extends Animal {
  constructor(name){
    if (!name) throw new Error('Debes ingresar un nombre para la mascota')
    super(name);
    this.legs = 4;
    this.fleas = 0;
  }

  comer(comida){
    if (!comida) throw new Error('Para comer, debes indicar la comida')
    return this.name + ' está comiendo ' + comida
  }
}

const firulais = new Pet('Firulais');
console.log(firulais);
console.log(firulais.comer('atun 🍣'));
console.log(firulais.dormir());

// Clase Dog que se hereda de Pet
class Dog extends Pet {
  constructor(name, breed){
    if (!name || !breed) throw new Error('Debes ingresar un nombre y raza para el perro')
    super(name)
    this.breed = breed;
    this.fleas = 8;
  }

  ladrar(){
    return 'Guau guauuuu 🐶';
  }
}

const scoobydoo = new Dog('Scooby Doo', 'Gran Danés');
console.log(scoobydoo.fleas); // Atirbuto modificado desde la clase Dog
console.log(scoobydoo.legs); // Atributo modificado desde la clase padre Pet
console.log(scoobydoo.brain); // Atributo heredado desde la clase abuelo Animalconsole.log(scoobydoo.ladrar()); // Método declarado en clase Dog
console.log(scoobydoo.comer('pizza 🍕')); // Método heredado de clase padre Pet
console.log(scoobydoo.dormir()); // Método heredado de clase abuelo Animal

// Clase Cat que se hereda de Pet
class Cat extends Pet {
  constructor(name, breed){
    if (!name || !breed) throw new Error('Debes ingresar un nombre y raza para el gato')
    super(name);
    this.breed = breed;
    this.fleas = 4;
  }

  maullar(){
    return 'Miaaau miaauuu 😸';
  }
}

const garfield = new Cat('Garfield', 'Gato Persa');
console.log(garfield.fleas); // Atirbuto modificado desde la clase Cat
console.log(garfield.legs); // Atributo modificado desde la clase padre Pet
console.log(garfield.brain); // Atributo heredado desde la clase abuelo Animal
console.log(garfield.maullar()); // Método declarado en la clase Cat
console.log(garfield.comer('lasagna 🍝')); // Método heredado de clase padre Pet
console.log(garfield.dormir()); // Método heredado de clase abuelo Animal

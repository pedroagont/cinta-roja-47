console.log('Hola desde ejercicios!');

// EJERCICIO HERENCIA
// Clase Largometraje (atributos: nombre y duracion)
//   Subclases: Pelicula (atributos: genre)/ Documental (atributos: topic)
// Clase Cine
//   metodo: reproducir(largometraje) {
//     return ‘Wall-E tiene una duración de 103 minutos’;
//   }
// El código debe lucir similar a esto:
// Cine.reproducir(pelicula);
// Cine.reproducir(documental);

class Largometraje {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class Pelicula extends Largometraje {
  constructor(name, duration, genre) {
    super(name, duration)
    this.genre = genre;
  }
}

class Documental extends Largometraje {
  constructor(name, duration, director) {
    super(name, duration)
    this.director = director;
  }
}

class Cine {
  constructor(name) {
    this.name = name;
  }

  play(largometraje) {
    return `Reproduciendo ${largometraje.name} con una duración de ${largometraje.duration} minutos en ${this.name}`;
  }
}

const walle = new Pelicula('Wall-E', 103, 'kids')
const shenzhen = new Pelicula('Shenzhen: The Silicon Valley of Hardware', 67, 'WIRED')
const cinepolis = new Cine('Cinepolis')

console.log(cinepolis.play(walle));
console.log(cinepolis.play(shenzhen));

// -----------------------------------------------------------------------------------------------------------
// 1. Hacer superclase Maestro y subclases Maestro de Física y Maestro de Música:
//        a. A cada uno asignarle su atributo materia y calificaciones
//        b. Calcular el promedio de grupo a partir de calificaciones (puedes usar arreglos)
//        c. El maestro de física tiene un atributo "antiguedad" que guarda un valor numerico
//        d. El maestro de música tiene un atributo "edad" también guardando un valor numérico.
// -----------------------------------------------------------------------------------------------------------

class Maestro {
  constructor(materia, calificaciones) {
    this.materia = materia;
    this.calificaciones = calificaciones;
  }

  calcularPromedio() {
    let suma = 0;

    for (let i = 0; i < this.calificaciones.length; i++) {
      suma += this.calificaciones[i];
    }

    console.log('Promedio: ' + suma / this.calificaciones.length);
    return suma / this.calificaciones.length;
  }
}

const maestro1 = new Maestro('inglés', [10, 9, 8, 6, 10, 10]);
console.log(maestro1);
maestro1.calcularPromedio();

class MaestroFisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}

const maestro2 = new MaestroFisica('Fisica I', [100, 90, 85], 5);
console.log(maestro2);
maestro2.calcularPromedio();

class MaestroMusica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super(materia, calificaciones);
    this.edad = edad;
  }
}

const maestro3 = new MaestroMusica('Música 3', [100, 100, 90], 35);
console.log(maestro3);
maestro3.calcularPromedio();


// -----------------------------------------------------------------------------------------------------------
// 2.- Crea una superclase llamada Electrodoméstico con las siguientes características:
//        a. Sus atributos son precio, color, consumoEnergetico y capacidad (peso máximo)
//        b. El constructor solo debe pedir precio, color y capacidad.
//        c. consumoEnergetico debe iniciar con valor de 100
//     Crea una subclase de Electrodomestico llamada Lavadora con las siguientes características:
//        a. Su atributo es carga(kg de ropa), además de los atributos heredados.
//        b. Crea el método precioFinal(). Este se calcula multiplicando el consumoEnergetico por la carga.
// -----------------------------------------------------------------------------------------------------------

class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnergetico = 100;
  }
}

class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga, modelo) {
    super(precio, color, capacidad);
    this.carga = carga;
    this.modelo = modelo
  }

  precioFinal() {
    return this.consumoEnergetico * this.carga;
  }
}

const lavadora1 = new Lavadora(12000, 'amarilla', 20, 50, 'MABE');
console.log(lavadora1);
lavadora1.precioFinal();

const lavadora2 = new Lavadora(10000, 'azul', 20, 50, 'LG');
console.log(lavadora2);
lavadora2.precioFinal();

// -----------------------------------------------------------------------------------------------------------
// 3.- Crear una superclase Bebida que herede a dos subclases Cerveza y Refresco
//        a. Ambas clases deben tener la propiedad cantidad (ml)
//        b. La clase Refresco debe tener el atributo azucar(g)
//        c. La clase Cerveza debe el atributo porcentajeAlcohol.
//        d. Crear los getters y setters correspondientes.
//           GET -> OBTENER O MOSTRAR EL VALOR DE UNA PROPIEDAD
//           SET -> CAMBIAR O ACTUALIZAR EL DE VALOR DE UNA PROPIEDAD
// -----------------------------------------------------------------------------------------------------------

class Bebida {
  constructor(cantidad) {
    this.cantidad = cantidad;
  }

  getCantidad() {
    return this.cantidad;
  }

  setCantidad(nuevaCantidad) {
    this.cantidad = nuevaCantidad;
  }
}

class Cerveza extends Bebida {
  constructor(cantidad, porcentajeAlcohol) {
    super(cantidad);
    this.porcentajeAlcohol = porcentajeAlcohol;
  }

  getPorcentajeAlcohol() {
    return this.porcentajeAlcohol;
  }

  setPorcentajeAlcohol(nuevoPorcentaje) {
    this.porcentajeAlcohol = nuevoPorcentaje;
  }
}

const michelada = new Cerveza(1000, 5);
console.log(michelada);
michelada.setCantidad(500);
michelada.getCantidad();
michelada.getPorcentajeAlcohol();
michelada.setPorcentajeAlcohol(4);
console.log(michelada);

class Refresco extends Bebida {
  constructor(cantidad, azucar) {
    super(cantidad);
    this.azucar = azucar;
  }

  getAzucar() {
    return this.azucar;
  }

  setAzucar(nuevaCantidadAzucar) {
    this.azucar = nuevaCantidadAzucar;
  }
}

const cocacola = new Refresco(355, 100);
console.log(cocacola);
michelada.setCantidad(750);
michelada.getCantidad();
cocacola.setAzucar(10);
cocacola.getAzucar();
console.log(cocacola);

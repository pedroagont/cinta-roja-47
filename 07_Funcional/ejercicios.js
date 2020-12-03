// 1. Multiplicar x 5 cada uno de los elementos del siguiente arreglo -> [10, 4, 3, 2, 6, 8]

const multiplicadosPor5 = [10, 4, 3, 2, 6, 8].map(numero => numero * 5);
console.log(multiplicadosPor5);

// 2. Del arreglo siguiente, elegir los elementos que sean mayores que 5 -> [12, 2, 1, 5, 8]

const mayoresDe5 = [12, 2, 1, 5, 8].filter(numero => numero > 5);
console.log(mayoresDe5);

// 3. Del arreglo siguiente, elegir los elementos que sean divisibles entre 2 -> [12, 2, 1, 5, 8]

const divisiblesEntre2 = [12, 2, 1, 5, 8].filter(numero => numero % 2 === 0);
console.log(divisiblesEntre2);

// 4. A partir del arreglo ['Ana', 'Diego', 'Julio'] crear el siguiente -> ['1. Ana ', '2. Diego', '3. Julio']

const nuevoArreglo = ['Ana', 'Diego', 'Julio'].map((nombres, posicion) => `${posicion+1}. ${nombres}`);
console.log(nuevoArreglo);

// 5. A partir del arreglo filtrar sólo los que sean mayores a 18
const edades = [
    { nombre: 'Karla', edad: 20 },
    { nombre: 'Sonia', edad: 14 },
    { nombre: 'Jesús', edad: 15 },
    { nombre: 'Miguel', edad: 24 },
    { nombre: 'Luis', edad: 12 }
];

const mayoresDe18 = edades.filter(persona => persona.edad >= 18);
console.log(mayoresDe18);

// 6.- Genera un nuevo arreglo en el que solo se encuentren los conejos a partir del siguiente arreglo de animalitos:
const animalitos = [
    { nombre: "carlitos", especie: "conejo" },
    { nombre: "esteban", especie: "perro" },
    { nombre: "fabiruchis", especie: "tortuga" },
    { nombre: "anita", especie: "gato" },
    { nombre: "miranda", especie: "conejo" },
    { nombre: "lucas", especie: "conejo" },
    { nombre: "Horacia", especie: "tortuga" }
];

const conejitos = animalitos.filter(animalito => animalito.especie === 'conejo');
console.log(conejitos);

// 7.- Genera un nuevo arreglo que contenga los nombres de todas las mascotas a partir del siguiente arreglo de mascotas
const mascotas = [
    { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: [ "Semillas", "Nueces" ] },
    { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: [ "Huesos", "Jamon" ] },
    { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: [ "Croquetas", "Pollo" ] },
    { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: [ "Atun", "Pescado" ] },
    { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: [ "Semillas" ] }
];

const nombresMascotas = mascotas.map(mascota => mascota.nombre);
console.log(nombresMascotas);

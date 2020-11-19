console.log('Hola Mundo desde app!');

// REPASO

// Enviar mensajes a consola:
console.log('Soy un mensaje desde la consola!');
console.warn('Soy un mensaje de alerta!');
console.error('Soy un mensaje de error!');

// Declarar variables
// Para declarar variables usamos las palabras reservadas (var, let, const) + nombreDeLaVariable
var numero;

// Asignar un valor a una variable
numero = 100;

// Declarar y asignar
var nombre = 'Pedro';
var nombreDeUsuario = 'pedroagont';
var numeroTelefonico = 9988458554;

// Diferencia entre var, let y const
// SCOPE
// var -> se puede reasignar valor y es una variable GLOBAL
// let -> se puede reasignar valor y es una variable LOCAL
// const -> NO se puede reasignar valor y es una variable LOCAL

// var sí puedo reasignar
var num = 5;
console.log(num);
num = 1;
console.log(num);
num = 100;
console.log(num);

// let sí puedo reasignar
let numLet = 10;
console.log(numLet);
numLet = 200;
console.log(numLet);

// const no puedo reasignar
const gravedad = 9.81;
console.log(gravedad);
// gravedad = 0; //esto marca error
// console.log(gravedad);

// Variable global
{
  var varGlobal = 500;
  console.log(varGlobal); // acceso a la variable dentro del scope
}
console.log(varGlobal); // acceso a la variable fuera del scope

// Variable local
{
  let letLocal = 3000;
  const url = 'http://cualquiercosa.com/api/ejemplo';
  console.log(letLocal);
  console.log(url);
  // acceso a las variables let y const dentro del scope
}
// console.log(letLocal, url); // esto marca error


// TIPOS DE DATOS
// Números
let numX = 2.5;
let numY = 10;

// Strings/cadenas de carácteres
let nombreAlumna = 'Lourdes';
let presentacion = 'Mi nombre es "Pedro"'; // para hacer uso de comillas dobles en nuestra cadena, usamos comillas simples afuera y viceversa
let textoGrande = 'qwertyuiop asdfghjkl 12312536798 zxcvbnm `+´ç+'

// Boolean true/false
let esMayorDeEdad = true;
let isAlive = false;

// Arrays/arreglos/listas []
let alumnos = ['Braulio', 'Gonzalo', 'Guillermo', 'Lourdes', 'Sebastian'];
let listaNumeros = [123, 321, 456, 654, 123123];
let listaMixta = ['Pedro', 'Hombre', 26, 'Cancún', true];
// para imprimir el arreglo completo
console.log(alumnos);
// para acceder a valores del arreglo, hago uso de corchetes y la posición del elemento del arreglo deseada
console.log(alumnos[0]); // Braulio
console.log(alumnos[3]); // Lourdes
console.log(alumnos.length); // hacemos uso de la propiedad length para saber el tamaño/largo del arreglo

// Objetos JS (igual que diccionarios en Python) {}
const objeto = { propiedad: 'valor' };
const persona = {
  nombre: 'Pedro',
  genero: 'Hombre',
  edad: 26,
  ciudad: 'Cancún',
  isAlive: true,
  musica: ['Doc Severinsen', 'Stanley Turrentine'],
  mascota: {
    nickname: 'Snacky',
    raza: 'Salchicha'
  }
}
// para imprimir el objeto completo
console.log(persona);
// para acceder a propiedades directas del objeto, hacemos uso del objeto y separado de un punto con la propiedad deseada
console.log(persona.nombre); // Pedro
console.log(persona.isAlive); // true
console.log(persona.musica[1]); // Stanley Turrentine
console.log(persona.mascota.raza); // Salchicha

// También podemos acceder a variables de un objeto por medio de desestructuración / destructuring
const { nickname, raza } = persona.mascota;
console.log(nickname, raza);

// Aunque hagamos uso de variables tipo const, no podemos volver a declararlas pero sí podemos modificar valores internos específicos o agregar nuevos
persona.nombre = 'Juan';
persona.mascota = { nickname: 'Bambi', raza: 'Chihuahua'}
persona.telefono = 9988458554;
console.log(persona);

// Para saber el tipo de dato de una variable, podemos usar typeof variable
console.log(typeof numX); //number
console.log(typeof nombreAlumna); //string
console.log(typeof isAlive); //boolean
console.log(typeof alumnos); //object
console.log(typeof objeto); //object


// ESTRUCTURAS DE CONTROL

// Condicionales -> decisiones
// if - else
// if - else if - else (elif en Python)
// do while
// switch case

// Operadores relaciones / comparadores
// > mayor que
// < menor que
// >= mayor igual que
// <= menor igual que
// == igual que 100 = '100' -> true
// === exactamente igual que (valor y tipo de datos) 100 = '100' -> false
// != diferente de
// && AND
// || OR

let edad = 26;
let id = 'dni';

if (edad >= 18 && id) { //con el uso de AND && ambas condiciones se tienen que cumplir
  if (id === 'pasaporte' || id === 'dni' || id === 'cartilla') { //con el uso de OR || cualquiera de las condiciones se puede cumplir para validarla
    console.log('Es mayor de edad porque tiene ' + edad);
  } else {
    console.log('Es menor de edad porque tiene ' + edad);
  }
} else {
  console.log('No tiene edad o identificación para ser mayor de edad');
}

let boleto = 300;

if (boleto <= 100) {
  console.log('Boleto normal');
} else if (boleto <= 200) {
  console.log('Boleto plus');
} else if (boleto <= 300) {
  console.log('Boleto VIP');
} else {
  console.log('Error en boleto');
}

// CICLOS FOR
// sirven para repetir tareas
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Hacemos uso de la palabra reservada for, seguido de los valores del ciclo
// valor inicial; tope/valor final; secuencia/incremento/decremento
for (let iterador = 0; iterador <= 10; iterador = iterador + 1) {
  console.log(iterador);
}

// Normalmente usamos los ciclos con arreglos
let frutas = ['manzana', 'pera', 'platano', 'mandarina', 'pitahaya'];
// haciendo uso de la propiedad length podemos imprimir todos los elementos de un arreglo en un ciclo

console.log(frutas.length);
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//FUNCIONES

//Creamos funciones con la palabra reservada function
function mostrarAlumnos(){
  let alumnos = ['Braulio', 'Guillermo', 'Leonel', 'Marvin', 'Simón']
  for (var i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
  }
}
// Para mandar a llamar la función, simplemente la escribimos
mostrarAlumnos();

//Función con valor de retorno
function obtenerNombreCompleto(){
  let nombre = 'Gonzalo';
  let apellido = 'Varas';
  let nombreCompleto = nombre + ' ' + apellido;
  return nombreCompleto;
}
console.log(obtenerNombreCompleto());

//Funciones con parámetros
function sumar(num1, num2) {
  return num1 + num2
}
// Mandamos a llamar la función con los parámetros indicados
console.log(sumar(5, 5));

//Funciones flecha de ES6 () => {}
//Nos permiten optimizar la forma en que escribimos código
const sumarFlecha = (num1, num2) => num1 + num2; //misma función que arriba pero en una sola línea por ser flecha
console.log(sumarFlecha(5, 5));

const crearContrasena = (nombre, edad, mesNacimiento) => {
  let contrasena = nombre + edad + mesNacimiento;
  if (contrasena) {
    console.log('su contraseña es: ' + contrasena);
  } else {
    console.log('no introdujo la información completa');
  }
}
crearContrasena('Pedro', 26, 'Noviembre');
crearContrasena('Victor', 26, 'Enero');
crearContrasena();

// Ejemplo función con input del usuario/prompt
const saludar = (nombre) => console.log('Hola '+ nombre + '! 👋');
let nombrePrompt = prompt('Ingresa un nombre');
saludar(nombrePrompt); // Hola Pedrito! 👋

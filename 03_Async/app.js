console.log('Hola desde app! 👋');

// CÓDIGO SÍNCRONO/SECUENCIAL
// Un proceso que espera a que el anterior termine para poder ser ejecutado
console.log('1');
console.log('2');
console.log('3');

// CÓDIGO ASÍNCRONO
// Permite procesos en paralelo, y la respuesta se procesa hasta haber sido recibida, evita la detención innecesaria de procesos
console.log('1');
setTimeout( () => console.log('2'), 3000);
console.log('3');

// Nota:
// JavaScript le da preferencia a los procesos síncronos, y los procesos asíncronos los manda a la pila de ejecución "call stack", la cual nos permite que se ejecuten las tareas de manera adecuada y sin interrupciones

// CALL STACK

// const terceraFuncion = () => {
//   console.log('Saludos desde terceraFuncion 3️⃣');
// }
//
// const segundaFuncion = () => {
//   terceraFuncion();
//   console.log('Saludos desde segundaFuncion 2️⃣');
// }
//
// const primeraFuncion = () => {
//   segundaFuncion();
//   console.log('Saludos desde primeraFuncion 1️⃣');
// }
//
// primeraFuncion();
// 3
// 2
// 1

// EVENT LOOP / BUCLE DE EVENTOS

// const terceraFuncion = () => {
//   setTimeout(()=> console.log('Saludos desde terceraFuncion 3️⃣'), 5000);
// }
//
// const segundaFuncion = () => {
//   terceraFuncion();
//   console.log('Saludos desde segundaFuncion 2️⃣');
// }
//
// const primeraFuncion = () => {
//   segundaFuncion();
//   console.log('Saludos desde primeraFuncion 1️⃣');
// }
//
// primeraFuncion();
// 2
// 1
// Esperar 5 segundos...
// 3

// CALLBACK -> UNA FUNCIÓN QUE SE PASA COMO ARGUMENTO DE OTRA FUNCIÓN

//Función inicial / Función de orden superior
let mostrarDosMensajes = (funcion1, funcion2) => {
    funcion1();
    funcion2();
};

// Función callback
let yoSoyelCallback = () => {
    console.log('Hola desde el callback 1!');
}

// Otra función callback
let yoSoyelCallback2 = () => {
    console.log('Hola desde el callback 2!');
}

// La función de orden superior manda a llamar las otras funciones como argumentos, es decir, como callbacks
mostrarDosMensajes(yoSoyelCallback, yoSoyelCallback2);

// Ejemplo saludar:
// Función de orden superior
let saludarUsuario = (nombreUsuario, callback) => {
    callback(nombreUsuario);
};

// Función callback
let callback = (nombreUsuario) => {
    console.log(`Bienvenidx, ${nombreUsuario}`);
}

saludarUsuario('Braulio', callback);
saludarUsuario('Gonzalo', callback);
saludarUsuario('Lourdes', callback);

// EJEMPLO:
// Crear una función de orden superior que reciba como
// argumentos dos números y un callback. Según el callback
// que se pase a la función, se devuelve la suma de los
// dos números, la resta de los dos números, la
// multiplicación de los dos números, o la división de estos.

const resultado = (num1, num2, operacion) => {
  if (typeof operacion !== 'function') throw new Error('Debes pasar una función como argumento');
  return operacion(num1, num2);
}

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

console.log(resultado(5, 7, sumar)); // 12
console.log(resultado(5, 7, restar)); // -2
console.log(resultado(5, 7, multiplicar)); // 35
console.log(resultado(5, 7, dividir)); // 0.7142

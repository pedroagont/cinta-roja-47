console.log('Hola desde ejercicios 🏋️‍♀️');

/*
1.- Muestra un mensaje en consola mediante un callback.
  La función de orden superior que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
*/

const mensajeEnConsola = (callback, mensaje) => {
  callback(mensaje);
}

mensajeEnConsola(console.log, "Hola log");
mensajeEnConsola(console.info, "Hola info");
mensajeEnConsola(console.warn, "Hola warn");
mensajeEnConsola(console.error, "Hola error");

/*
2.- Crear una función de orden superior que reciba como
    argumento una variable de cualquier tipo y un callback. La función de orden superior debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.
*/

const higherOrder = (variable, callback) => {
  callback(variable);
}

const obtenerTipoDeDato = (variable) => typeof(variable);

const callbackContenido = (variable) => {
  console.log(obtenerTipoDeDato(variable));
  console.log(variable);
}

const miVariable = { nombre: "Pedro" };
higherOrder(miVariable, callbackContenido);

/*
3.- Escribe una función de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayúsculas o en minúsculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELARTO
*/

const ordenSuperior = (cadena, convertir) => convertir(cadena);

const minusculas = (cadena) => cadena.toLowerCase(); //pejelagarto
const mayusculas = (cadena) => cadena.toUpperCase(); //PEJELAGARTO

console.log(ordenSuperior('peJeLagArTo', minusculas));
console.log(ordenSuperior('peJeLagArTo', mayusculas));

/*
4.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
    EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas)
    mediante un callback.
*/

const funcionTiempos = (tiempos, comparacion) => comparacion(tiempos);

const mayorDe2Horas = (tiempos) => {
  let arregloMayores2horasEnHrs = [];
  for (let i = 0; i < tiempos.length; i++) {
    if(tiempos[i]>=120) arregloMayores2horasEnHrs.push(parseFloat(tiempos[i]/60).toFixed(2));
  }
  return `Los tiempos mayores a 2 horas son: ${arregloMayores2horasEnHrs}`;
}

const menorDe2Horas = (tiempos) => {
  let arregloMenores2horasEnHrs = [];
  for (let i = 0; i < tiempos.length; i++) {
    if(tiempos[i]<120) arregloMenores2horasEnHrs.push(parseFloat(tiempos[i]/60).toFixed(2));
  }
  return `Los tiempos menores a 2 horas son: ${arregloMenores2horasEnHrs}`;
}

const arreglo = [120, 80, 200, 100];
console.log(funcionTiempos(arreglo, mayorDe2Horas)); // [120, 200]
console.log(funcionTiempos(arreglo, menorDe2Horas)); // [80, 100]

const otroArreglo = [300, 120, 100, 50, 10, 150];
console.log(funcionTiempos(otroArreglo, mayorDe2Horas)); // [300, 120, 150]
console.log(funcionTiempos(otroArreglo, menorDe2Horas)); // [100, 50, 10]

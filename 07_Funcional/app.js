let empleados = [
  { nombre: 'Marco', sueldo: 10000 },
  { nombre: 'Diana', sueldo: 40000 },
  { nombre: 'Ana', sueldo: 60000 },
  { nombre: 'Daniel', sueldo: 30000 }
];

// Iterar con un ciclo FOR
for (let i = 0; i < empleados.length; i++) {
  console.log(`nombre: ${empleados[i].nombre}, sueldo: ${empleados[i].sueldo}`);
}


// Iterar con un FOREACH
empleados.forEach(empleado => {
  console.log(`nombre: ${empleado.nombre}, sueldo: ${empleado.sueldo}`);
})

// empleados.forEach((elementoActual, posicion, arregloCompleto) => {
//   console.log(elementoActual);
//   console.log(posicion);
//   console.log(arregloCompleto);
// })


// MAP
// Nos permite crear un arreglo a partir de otro arreglo

const empleadosFelices = empleados.map(empleado => {
  return { ...empleado, sueldo: empleado.sueldo + 10000 }
})
console.log('Empleados felices: ', empleadosFelices);
console.log('Empleados: ', empleados);


// FILTER
// Nos permite crear un arreglo a partir de elementos de otro arreglo que cumplan una condición que pongamos en el return

const directivos = empleados.filter(empleado => {
  return empleado.sueldo >= 30000
})
console.log('Empleados directivos:', directivos);

const operativos = empleados.filter(empleado => {
  return empleado.sueldo <= 10000
})
console.log('Empleados operativos:', operativos);

// console.log('Hola desde client!');

// Ejemplo de: https://www.npmjs.com/package/request

// Importamos el módulo o la librería a utilizar
// Este módulo será buscado en la carpeta node_modules

const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// Estructura básica de una petición
// request(url, callback(error, response, body))

// EJEMPLO SWAPI

// const URL_SWAPI = 'https://swapi.dev/api/';
// const URL_SWAPI = 'https://swapi.dev/api/people';
// const URL_SWAPI = 'https://swapi.dev/api/people/1'; // Luke Skywalker
const URL_SWAPI = 'https://swapi.dev/api/people/2'; // C-3P0
const URL_SWAPI = 'https://swapi.dev/api/people/4'; // Darth Vader

request.get(URL_SWAPI, (err, res, body) => {
  if(res.statusCode !== 200) throw new Error('La petición fue rechazada: ' + res.statusCode); // Validamos la respuesta del servidor
  // console.log(body); // El body viene como una JSON el cual se interpreta como una cadena enorme
  const json = JSON.parse(body); // Para acceder a la información del body, tenemos que convertirlo en un objeto utilizable por JavaScript
  // console.log(json); // El json es un objeto con los datos que vienen del body, al que ya podemos acceder
  console.log(`Hola, mi nombre es: ${json.name} y nací el año ${json.birth_year}`);
})

// Para revisar adecuadamente un body en formato JSON podemos utilizar una herramienta como http://jsoneditoronline.org
// Esta herramienta nos permite "leer" el cuerpo de un json en código, como un árbol de información más "legible" para los humanos

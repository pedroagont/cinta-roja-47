// Hello World ExpressJS: https://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000

// Para no tener que terminar el proceso y volver a correrlo en caso de cambios
// Usamos nodemon: https://www.npmjs.com/package/nodemon
// npm install --save-dev nodemon

// MIDDLEWARES
// Funciones y métodos que sirven como intermediarios entre las peticiones y las respuestas
app.use(express.json()); // Para permitir el paso de archivos formato application/json en nuestro servidor
app.use(express.urlencoded({ extended: true })); // Para permitir el paso de archivos formato application/x-www-form-urlencoded (documentos, imagenes, videos, etc)

// ENDPOINTS
// Cada una de las rutas para nuestras peticiones
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Estructura de un endpoint
// app.metodo('/endpoint', callback(peticion, respuesta){
//   //Aquí hacemos algo con el objeto petición (lo que viene del cliente)
//   //y respondemos con el objeto respuesta (lo que regresamos del servidor)
// });

app.get('/prueba', (req, res) => {
  res.status(202); // status() para responder con un código de respuesta en específico, 200 por default
  res.send({ message: 'Esto es una prueba! 👋'}); // send() para responder desde el servidor
});

// Para peticiones tipo GET
// ¿Cómo trabajamos con querys? url.com/ruta?query1=algo&query2=otracosa
app.get('/ejemplo', (req, res) => {
  console.log('✅', req.query);
  return res.status(200).send(req.query); // Podemos encadenar los métodos status() y send() al objeto res en una sóla línea
})
// GET http://localhost:3000/ejemplo?precio=5000&marca=Apple&fecha=2020-12-01
// {
//   "precio": "5000",
//   "marca": "Apple",
//   "fecha": "2020-12-01"
// }

// ¿Cómo trabajamos con params? url.com/pedrito/posts/2010
app.get('/autores/:nombre/:edad', (req, res) => {
  console.log('📝', req.params);
  return res.status(200).send(req.params);
})
// GET http://localhost:3000/autores/pedro/27
// {
//   "nombre": "pedro",
//   "edad": "27"
// }

// Para peticiones tipo POST
// ¿Cómo le pasamos información desde un body en JSON?
app.post('/perfil', (req, res) => {
  console.log(req.body);

  // const usuario = {
  //   id: Math.floor(Math.random()*100),
  //   usuario: req.body.usuario,
  //   correo: req.body.correo
  // }

  // Con Spread Syntax podemos acceder a todas las propiedades que trae el objeto ...req.body
  // Más información: https://medium.com/@paulryan17/spread-operator-javascript-a77a890b96eb
  const usuario = { id: Math.floor(Math.random()*100), ...req.body }

  return res.status(201).send(usuario);
})
// POST http://localhost:3000/perfil
// Body desde el cliente
// {
//   "usuario": "pedroagont",
//   "correo": "pgonzalez@post.com"
// }
// Respuesta
// {
//   "id": 22,
//   "usuario": "pedroagont",
//   "correo": "pgonzalez@post.com"
// }

// LISTENER
// Crea la conexión entre el host y el puerto disponible para que nuestro servidor "escuche" o esté pendiente de las peticiones que le lleguen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

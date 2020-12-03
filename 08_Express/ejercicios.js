// MODULES
const express = require('express');
const app = express();
const port = 4200;

// MIDDLEWARES
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//EJERCICIOS
// 1.- Agrega un endpoint '/api/' que responda a
//         una petición de tipo GET con un código de estado 200
//         y el siguiente json:
//                     {'mensaje':'hola mundo'}

app.get('/api', (req, res) => {
  res.status(200).send({ mensaje: 'Hola Mundo' });
});
// GET http://localhost:4200/api
// {
//   "mensaje": "Hola Mundo"
// }

// 2.- Agrega un endpoint '/api/suma' que responda a una
//     petición de tipo GET con la suma de dos números que
//     reciba mediante las querys num1 y num2. El servidor
//     debe responder con un código de estado 200 y un json
//     como el siguiente:
//                    {'resultado': 7}

app.get('/api/suma', (req, res) => {
  // console.log(req.query);
  // const num1 = req.query.num1;
  // const num2 = req.query.num2;
  // Desestructuración (Destructuring Es6)
  const { num1, num2 } = req.query;
  const resultado = parseInt(num1) + parseInt(num2);
  return res.status(200).send({ resultado });
});
// INSMONIA
// http://localhost:4200/api/suma?num1=10&num2=20
// {
//   "resultado": 30
// }

// 3.- Agrega un endpoint '/api/usuario/' que responda a
//     una petición de tipo GET con el nombre que sea
//     recibido a través de params. El servidor debe responder
//     con un código de estado 200 y un json como este:
//                {'usuario': 'Edwin'}

app.get('/api/usuario/:nombre', (req, res) => {
  // console.log(req.params);
  return res.status(200).send({ usuario: req.params.nombre });
});
// GET http://localhost:4200/api/usuario/Jorge
// {
//   "usuario": "Jorge"
// }

// 4.- Agrega un endpoint '/api/swapi' que responda a una
//     petición de tipo GET con el personaje solicitado de
//                         https://swapi.co/
//     El cliente debe mandar el número de personaje mediante
//     params. La respuesta del servidor debe lucir algo así
//               {'personaje': {
//                      'name': 'Luke Skywalker',
//                       ...,
//               }}

const request = require('request');
app.get('/api/swapi/:id', async (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  const URL_SWAPI = `https://swapi.dev/api/people/${id}`;
  await request.get(URL_SWAPI, (error, response, body) =>{
    return response.statusCode === 200
    ? res.send({ personaje: JSON.parse(body) })
    : res.send({ message: 'Character not found...' });
  });
});
// GET http://localhost:4200/api/swapi/1
// {
//   "personaje": {
//     "name": "Luke Skywalker",
//      ...,
//   }
// }
// GET http://localhost:4200/api/swapi/13
// {
//   "personaje": {
//     "name": "Chewbacca",
//      ...,
//   }
// }

//LISTEN
app.listen(port, () => console.log(`Listening @ http://localhost:${port}`));

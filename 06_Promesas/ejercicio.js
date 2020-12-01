// EJERCICIO CRUD DE PETICIONES CON PROMESAS
//
// Convierte todas tus funciones del ejercicio del
// CRUD de Cliente para que ahora devuelvan promesas.
//
// Es necesario que personalicen el mensaje de error
// de cada de una de las funciones para que sea más
// fácil identificar dónde se rompe nuestro código.
//
// Finalmente para probar tus nuevas promesas, tienes
// que hacer los siguientes pasos encadenando promesas:
// 1. Crear un autor
// 2. Modificar el autor
// 3. Obtener ese autor
// 4. Eliminar el autor

const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

// Create - POST
const createAuthor = (name, last_name, nacionality, biography, gender, age) => {
  if(!name || !last_name || !nacionality || !biography || !gender || !age) throw new Error('Debes ingresar todos los parámetros');

  const jsonSend = {
    'name': name,
    'last_name': last_name,
    'nacionalidad': nacionality,
    'biography': biography,
    'gender': gender,
    'age': age,
  }

  return new Promise((resolve, reject) => {
    request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
      console.log('Creando autor...');
      res.statusCode === 201
      ? resolve(JSON.parse(body))
      : reject({mensaje: 'Error creando autor', body});
    });
  });
}

// Read - GET
const readOneAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')

  return new Promise((resolve, reject) => {
    request.get(`${URL_BASE}${id}`, (err, res, body) => {
      console.log('Leyendo autor...');
      res.statusCode === 200
      ? resolve(JSON.parse(body))
      : eject({mensaje: 'Error leyendo autor', body});
    });
  });
}

// Update - PUT
const updateAuthor = (id, name, last_name, nacionality, biography, gender, age) => {
  if(!id || !name || !last_name || !nacionality || !biography || !gender || !age) throw new Error('Debes ingresar todos los argumentos');

  const jsonSend = {
    'name': name,
    'last_name': last_name,
    'nacionalidad': nacionality,
    'biography': biography,
    'gender': gender,
    'age': age,
  }

  return new Promise((resolve, reject) => {
    request.put(`${URL_BASE}${id}/`, { form: jsonSend }, (err, res, body) => {
      console.log('Actualizando autor...');
      res.statusCode === 200
      ? resolve(JSON.parse(body))
      : reject({mensaje: 'Error modificando autor', body});
    });
  });
}

// Delete - DELETE
const deleteAuthor = (id) => {
  if(!id) throw new Error('Debes ingresar un id')
  return new Promise((resolve, reject) => {
    request.delete(`${URL_BASE}${id}/`, (err, res, body) => {
      console.log('Borrando autor...');
      res.statusCode === 204
      ? resolve(`El id ${id} fue eliminado correctamente`)
      : reject({mensaje: 'Error borrando autor', body});
    });
  });
}

// FORMA 1: Directamente llamando cada .then() seguido de la función (no recomendable, código complicado)
// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27)
//   .then(newAuthor => {
//     console.log(newAuthor);
//     updateAuthor(newAuthor.id, 'Pedrini', 'Gonzalezco', 'USA', 'Chavito cool', 'M', 27)
//     .then(modifiedAuthor => {
//       console.log(modifiedAuthor);
//       readOneAuthor(modifiedAuthor.id)
//       .then(readAuthor => {
//         console.log(readAuthor);
//         deleteAuthor(readAuthor.id)
//         .then(deletedResponse => console.log(deletedResponse));
//       });
//     });
//   })
//   .catch(error => console.log(error))

// FORMA 2: Usando return en cada .then() (código más entendible)
// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27)
//   .then(newAuthor => {
//     console.log(newAuthor);
//     return updateAuthor(newAuthor.id, 'Pedrini', 'Gonzalezco', 'USA', 'Chavito cool', 'M', 27);
//   })
//   .then(modifiedAuthor => {
//     console.log(modifiedAuthor);
//     return readOneAuthor(modifiedAuthor.id);
//   })
//   .then(readAuthor => {
//     console.log(readAuthor);
//     return deleteAuthor(readAuthor.id);
//   })
//   .then(deletedResponse => console.log(deletedResponse))
//   .catch(error => console.log(error));

// FORMA 3: Con async/await (La forma más recomendable)
const authorLifeCycle = async () => {
  try {
    const newAuthor = await createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 27);
    console.log(newAuthor);
    const modifiedAuthor = await updateAuthor(newAuthor.id, 'Pedrini', 'Gonzalezco', 'USA', 'Chavito cool', 'M', 27);
    console.log(modifiedAuthor);
    const readAuthor = await readOneAuthor(modifiedAuthor.id);
    console.log(readAuthor);
    const deletedResponse = await deleteAuthor(readAuthor.id);
    console.log(deletedResponse);
  } catch (error) {
    console.log(error);
  }
}

authorLifeCycle();

const express = require('express')
const app = express()
const port = 3000

// DATABASE
// Quickstart de Firebase: https://firebase.google.com/docs/firestore/quickstart
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

// MIDDLEWARE
app.use(express.json()); // Para permitir el paso de archivos formato application/json en nuestro servidor
app.use(express.urlencoded({ extended: true })); // Para permitir el paso de archivos formato application/x-www-form-urlencoded (documentos, imagenes, videos, etc)

// Data model de Firebase: https://firebase.google.com/docs/firestore/data-model
// const docRef = db.collection('users').doc('alovelace');
// docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });
//
// const aTuringRef = db.collection('users').doc('aturing');
// aTuringRef.set({
//   'first': 'Alan',
//   'last': 'Turing',
//   'born': 1912
// });

// ENDPOINTS
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// CRUD
// Create
app.post('/api/v1/users', async (req, res) => {
  // 1. Desestructuramos el body de la petición
  const { body } = req;
  // 2. Validamos que el body contenga nombre y correo para poder crear el usuario
  if(!body.nombre || !body.correo) {
    return res.status(400).send({ message: 'Debes ingresar "nombre" y "correo"'});
  }
  try {
    // 3. Creamos un nuevo documento en la colección "users" a partir del body, usamos add() para asignarle un id de manera automática
    const newDoc = await db.collection('users').add(body);
    // 5. Respondemos con el status 201 de creado, con el id del nuevo documento creado y un mensaje
    res.status(201).send({ id: newDoc.id, message: 'Usuario creado correctamente 👍'});
  } catch (error) {
    res.status(400).send({ message: 'Error creando usuario 👎' })
  }
})

// Read all
app.get('/api/v1/users', async (req, res) => {
  try {
    // 1. Traemos los datos de todos los usuarios al momento de la petición
    const data = await db.collection('users').get();
    // 2. Creamos un nuevo arreglo que incluya un objeto por cada uno de los todos los elementos de la base de datos con map()
    const arrayData = await data.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    // 3. Respondemos con un status 200 y con el arreglo de usuarios
    res.status(200).send(arrayData);
  } catch (error) {
    res.status(400).send({ message: 'Error en la búsqueda. 👎' });
  }
})

// Read one
app.get('/api/v1/users/:id', async (req, res) => {
  // 1. Desestructuramos el id de los parámetros en la url
  const { id } = req.params;
  try {
    // 2. Traemos al usuario a través del id proporcionado desde la base de datos dentro de la colección "users"
    const user = await db.collection('users').doc(id).get();
    // 3. Validamos que el usuario exista en la base de datos
    if(!user.exists) res.status(404).send({ message: 'Usuario no existe. 🔍'});
    // 4. Respondemos con el status 200 de ok y con la información encontrada del usuario
    res.status(200).send({ id: user.id, data: user.data() });
  } catch (error) {
    res.status(400).send({ message: 'Error en la búsqueda. 👎' , error})
  }
})

// Update
app.put('/api/v1/users/:id', async (req, res) => {
  // 1. Desestructuramos el id de los parámetros en la url
  const { id } = req.params;
  // 2. Desestructuramos el body de la petición
  const { body } = req;
  try {
    // 3. Traemos al usuario a través del id proporcionado desde la base de datos dentro de la colección "users"
    const user = await db.collection('users').doc(id).get();
    // 4. Validamos que el usuario exista en la base de datos
    if(!user.exists) res.status(404).send({ message: 'Usuario no existe. 🔍'});
    // 5. Actualizamos los valores del body al nuevo usuario con update()
    await db.collection('users').doc(id).update(body);
    // 6. Respondemos con el status 200 de creado, con el id del documento modificado y un mensaje
    res.status(200).send({ id: user.id, message: 'Usuario modificado correctamente 👍'});
  } catch (error) {
    res.status(400).send({ message: 'Error modificando usuario. 👎', error})
  }
})

// Delete
app.delete('/api/v1/users/:id', async (req, res) => {
  // 1. Desestructuramos el id de los parámetros en la url
  const { id } = req.params;
  try {
    // 2. Traemos al usuario a través del id proporcionado desde la base de datos dentro de la colección "users"
    const user = await db.collection('users').doc(id).get();
    // 3. Validamos que el usuario exista en la base de datos
    if(!user.exists) res.status(400).send({ message: 'Usuario no existe. 🔍'});
    // 4. Borramos el usuario de la base de datos con el método delete()
    await db.collection('users').doc(id).delete();
    // 5. Respondemos con el status 200 de creado, con el id del nuevo documento y un mensaje
    res.status(200).send({ message: 'Usuario eliminado correctamente 👍'});
  } catch (error) {
    res.status(400).send({ message: 'Error eliminando usuario. 👎', error})
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

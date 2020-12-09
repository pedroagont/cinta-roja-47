import axios from 'axios'; // Para realizar peticiones basadas en promesas
import { useState, useEffect } from 'react'; // Para importar los hooks

import PersonajeCard from '../components/PersonajeCard';

// HOOKS
// Los hooks son una nueva modalidad de React 16.8 que nos permite crear componentes reactivos funcionales, sin necesidad de declarar clases
// Más info y ejemplos: https://reactjs.org/docs/hooks-overview.html

const Personajes = () => {
  // useState -> Inicializar y modificar el valor del estado de componentes funcionales
  // Similar a declarar this.state en componentes clase
  // Sintaxis: const [variableState, funcionModificarState] = useState('valor inicial')
  const [personajes, setPersonajes] = useState([]);

  // useEffect -> Nos permite controlar el renderizado de componentes funcionales
  // Similar a utilizar el método componentDidUpdate() en componentes clase
  // Sintaxis: useEffect(callback, []) (si agregamos como segundo argumento un arreglo vacío optimizamos el renderizado)
  const getPersonajes = async () => {
    const URL = 'https://rickandmortyapi.com/api/character/';
    await axios.get(URL)
      .then(response => {
        setPersonajes(response.data.results);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => getPersonajes(), []);

  const isEmpty = (data) => {
    if(data.length === 0) return (
      <div className="text-center">
        <h1 className="display-4 m-3">Cargando personajes... ⌛️</h1>
        <div className="spinner-border text-primary my-5" role="status" style={{width: 8+'em', height: 8+'em'}}></div>
      </div>
    );
    return <h1 className="display-4 m-3 text-center">Personajes de Rick y Morty 👽</h1>
  }

  return(
    <>
      {
        isEmpty(personajes)
      }
      <div className="container-fluid row justify-content-center my-5">
        {
          personajes.map(personaje => {
            return(
              <PersonajeCard
                key={personaje.id}
                id={personaje.id}
                name={personaje.name}
                species={personaje.species}
                image={personaje.image}
                gender={personaje.gender}
                status={personaje.status}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default Personajes;

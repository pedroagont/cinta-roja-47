import React from 'react';
import './style.css'

function ComponenteFuncional() {
  return <h1 className="titulo-funcional">Hola desde el componente funcional! 🪝</h1>
}

export default ComponenteFuncional;

// Los componentes funcionales son solamente funciones que retornan piezas de código con HTML y JS
// Podemos usar directamente return sin el método render() y aplicar hooks como useState() y useEffect()
// Ver más: https://reactjs.org/docs/components-and-props.html

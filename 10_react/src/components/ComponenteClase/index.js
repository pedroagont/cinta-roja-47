import React, { Component } from 'react';
import './style.css'

class ComponenteClase extends Component {
  render() {
    return <h1 className="titulo-clase">Hola desde el componente clase! 👴</h1>
  }
}

export default ComponenteClase;

// Los componentes clase están basados en ES6 y heredan todos los atributos y métodos de un componente React
// Podemos usar this.state, constructor(), render(), componentDidMound()
// Ver más: https://reactjs.org/docs/react-component.html

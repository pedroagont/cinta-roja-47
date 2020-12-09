import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar';
import Personajes from './pages/Personajes';
import PersonajeDetails from './pages/PersonajeDetails';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';

// React Router -> Nos permite renderizar dinámicamente los componentes desde el cliente sin necesidad de refrescar la página o cargar una nueva desde el lado del servidor
// Quick Start: https://reactrouter.com/web/guides/quick-start

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/personajes" component={Personajes}/>
        <Route exact path="/personajes/:id" component={PersonajeDetails}/>
        <Route exact path="/" component={Inicio}/>
      </Switch>
    </Router>
  );
}

export default App;

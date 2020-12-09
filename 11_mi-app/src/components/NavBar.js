import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          Mi app
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mx-1">
              <Link to="/">Inicio</Link>
            </NavItem>
            <NavItem className="mx-1">
              <Link to="/personajes">Personajes</Link>
            </NavItem>
            <NavItem className="mx-1">
              <Link to="/contacto">Contacto</Link>
            </NavItem>
          </Nav>
          <NavbarText className="mx-1">
            React API Rick & Morty
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

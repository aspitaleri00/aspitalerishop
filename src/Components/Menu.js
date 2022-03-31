
import React from 'react';
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
function Menu() {
  
    return (
     
        


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
      <Navbar.Brand as={Link} to ="/">Andes Argentinos</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     
      <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
              <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
              <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
              <Nav.Link as={Link} to="/alta/productos">Alta</Nav.Link>
              <Nav.Link as={Link} to="/reloj">Horario</Nav.Link>
      |</Nav>
              <NavDropdown title="Mas Opciones" id="basic-nav-dropdown"/>
              
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item ></NavDropdown.Item>
                <NavDropdown.Item >Tablets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >PC</NavDropdown.Item>
          </NavDropdown>
     
        
      
      
    </Navbar>
    );
  
  
}

export default Menu;

import Home from '../Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Reloj from '../Pages/Reloj';
import Menu from '../Components/Menu';
import AltaProductos from '../Pages/AltaProductos';
import ModificarProducto from '../Pages/ModificarProducto';

import Footer from '../Components/Footer';


import Detalle from '../Pages/Detalle';


function Public() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/ingresar" element={<Login />}/>
          <Route path="/alta/productos" element={<AltaProductos/>}/>
          <Route path="/modificar/producto/:id" element={<ModificarProducto/>}/>
          <Route path="/producto/:id" element={<Detalle />}/>
          <Route path="/reloj" element={<Reloj />}/>
          
          
          
        </Routes>
        <Footer />
      </Router>
 </div>
  );
}

export default Public;

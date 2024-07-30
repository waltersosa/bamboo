// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Menu.css';

const Menu = ({ menuAbierto }) => {
  return (
    <div id="dropdownMenu" className={`dropdown-menu ${menuAbierto ? 'show' : ''}`}>
      <Link to="/">Inicio</Link>
      <Link to="/catalogo">Catálogo</Link>
      <Link to="/promocion">Promoción</Link>
      <Link to="/quienes-somos">Quiénes Somos</Link>
    </div>
  );
};

export default Menu;

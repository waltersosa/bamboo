// Encabezado.js
import React from 'react';
import '../Styles/Encabezado.css';

const Encabezado = ({ alternarMenu }) => {
  return (
    <div className="top-bar">
      <div className="menu-icon" onClick={alternarMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="site-name" onClick={() => window.location.href = '/'}>
        BoxBamboo
      </div>
    </div>
  );
};

export default Encabezado;

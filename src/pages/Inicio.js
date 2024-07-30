import React from 'react';
import '../Styles/Inicio.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="inicio-mensaje">
        <h1 className="animate-title">Cajas de Bambu</h1>
        <p className="animate-subtitle">Expresa tu amor con un regalo único</p>
      </div>
      <div className="navegacion-cuadros">
        <Link to="/" className="cuadro">Inicio</Link>
        <Link to="/catalogo" className="cuadro">Catálogo</Link>
        <Link to="/promocion" className="cuadro">Promoción</Link>
        <Link to="/quienes-somos" className="cuadro">Quiénes Somos</Link>
      </div>
      <div className="redes-sociales">
        <a href="https://facebook.com" className="circulo facebook"><FaFacebook /></a>
        <a href="https://instagram.com" className="circulo instagram"><FaInstagram /></a>
        <a href="https://whatsapp.com" className="circulo whatsapp"><FaWhatsapp /></a>
      </div>
    </div>
  );
};

export default Inicio;

import React from 'react';
import '../Styles/PieDePagina.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const PieDePagina = () => {
  return (
    <div className="pie-de-pagina">
      <div className="iconos-redes">
        <div className="icono-red facebook">
          <FaFacebook />
          <span>Facebook</span>
        </div>
        <div className="icono-red instagram">
          <FaInstagram />
          <span>Instagram</span>
        </div>
        <div className="icono-red whatsapp">
          <FaWhatsapp />
          <span>WhatsApp</span>
        </div>
      </div>
    </div>
  );
};

export default PieDePagina;

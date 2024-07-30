import React from 'react';
import '../Styles/Promocion.css';
import PieDePagina from '../componentes/PieDePagina';
import { FaTag } from 'react-icons/fa'; // Importar el icono de promoción

const Promocion = () => {
  return (
    <div className="promocion-container">
      <div className="promocion-mensaje">
        <h1>Llévate 2 cajas al precio de una</h1>
      </div>
      <div className="promocion">
        <div className="carta">
          <img src="/promocionHombre.png" alt="Promoción Hombres" className="carta-imagen" />
          <h3>Promoción para Hombres</h3>
          <button className="boton-obtener">
            <FaTag className="icono-promocion" /> Obtener Promoción
          </button>
        </div>
        <div className="carta">
          <img src="/promocionMujeres.png" alt="Promoción Mujeres" className="carta-imagen" />
          <h3>Promoción para Mujeres</h3>
          <button className="boton-obtener">
            <FaTag className="icono-promocion" /> Obtener Promoción
          </button>
        </div>
      </div>
      <PieDePagina />
    </div>
  );
};

export default Promocion;

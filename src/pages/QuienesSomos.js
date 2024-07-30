import React from 'react';
import '../Styles/QuienesSomos.css';
import PieDePagina from '../componentes/PieDePagina';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <div className="quienes-somos-content">
        <div className="quienes-somos-image">
          <img src="/cajasHechas.png" alt="Quienes Somos" />
        </div>
        <div className="quienes-somos-text">
          <h2>Misión</h2>
          <p>
            La misión de BoxBamboo es entregar regalos únicos y personalizados que no solo expresen amor y aprecio, sino que también promuevan la sostenibilidad y el respeto por el medio ambiente, utilizando bambú y otras materiales ecológicos para crear productos de alta calidad que encanten y se puedan conservar.
          </p>
          <h2>Visión</h2>
          <p>
            Nuestra visión es ser la marca líder en el mercado de regalos sostenibles, reconocida por nuestra innovación, compromiso con el medio ambiente y la capacidad de transformar cada ocasión en un momento especial a través de productos únicos y responsables con el planeta.
          </p>
          <h2>Valores</h2>
          <ul>
            <li>Sostenibilidad</li>
            <li>Calidad</li>
            <li>Personalización</li>
            <li>Pasión</li>
            <li>Innovación</li>
          </ul>
        </div>
      </div>
      <PieDePagina />
    </div>
  );
};

export default QuienesSomos;

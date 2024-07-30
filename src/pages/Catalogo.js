import React from 'react';
import '../Styles/Catalogo.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Catalogo = ({ alternarMenu, cerrarMenu, menuAbierto }) => {
  const productos = [
    { nombre: 'Cajas para Niños', imagen: 'cajasNiños.png' },
    { nombre: 'Cajas para Niñas', imagen: 'cajasNiñas.png' },
    { nombre: 'Cajas para Hombres', imagen: 'cajasHombres.png' },
    { nombre: 'Cajas para Mujeres', imagen: 'cajasMujeres.png' },
  ];

  return (
    <div className={`catalogo-container ${menuAbierto ? 'menu-abierto' : ''}`}>
      <div className="catalogo-mensaje">
        <h1>Bienvenid@ a nuestra tienda online</h1>
        <p>Te presentamos nuestras colecciones de cajas de regalo temáticas.</p>
      </div>
      <div className="catalogo">
        {productos.map((producto) => (
          <div className="carta" key={producto.nombre}>
            <img src={producto.imagen} alt={producto.nombre} className="carta-imagen" />
            <h3>{producto.nombre}</h3>
            <button className="boton-obtener" aria-label={`Obtener ${producto.nombre} ahora`}>
              <span role="img" aria-label="carrito">🛒</span> Obtener ahora
            </button>
          </div>
        ))}
      </div>
      <footer className="pie-de-pagina">
        <div className="iconos-redes">
          <div className="icono-red facebook">
            <FaFacebookF />
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
      </footer>
    </div>
  );
};

export default Catalogo;

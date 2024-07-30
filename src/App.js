// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Menu from './componentes/Menu';
import PieDePagina from './componentes/PieDePagina';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Promocion from './pages/Promocion';
import QuienesSomos from './pages/QuienesSomos';
import './Styles/App.css';

const AppContent = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const showHeaderAndFooter = location.pathname !== '/';

  return (
    <div className="app-container">
      {showHeaderAndFooter && <Encabezado alternarMenu={alternarMenu} />}
      {showHeaderAndFooter && <Menu menuAbierto={menuAbierto} />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/promocion" element={<Promocion />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      {showHeaderAndFooter && <PieDePagina />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

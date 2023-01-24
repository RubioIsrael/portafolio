import React, { useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Info from './Info.js';
import Cursos from './Cursos.js';
import Proyectos from './Proyectos.js';
import '../css/App.css';

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = 'José De Israel Rubio Moreno';
  });
  return (
    <div className="App">
      <div className="header">
        <span className="nombre">José De Israel Rubio Moreno</span>
        <span className="fecha">2023</span>
      </div>
      <nav className="nav">
        <Link className="link" to="/informacion" style={{ textDecoration: 'none' }}>Información y contacto</Link>
        <Link className="link" to="proyectos" style={{ textDecoration: 'none' }}>Proyectos realizados</Link>
        <Link className="link" to="cursos" style={{ textDecoration: 'none' }}>Cursos y certificaciones</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Info/>}/>
          <Route path='/portafolio' element={<Info/>}/>
          <Route path='/informacion' element={<Info/>}/>
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/proyectos' element={<Proyectos/>}/>
        </Routes>
    </div>
  );
}

export default App;

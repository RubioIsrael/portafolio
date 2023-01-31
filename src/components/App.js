import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Info from './Info.js';
import Cursos from './Cursos.js';
import Proyectos from './Proyectos.js';
import mexico_flag  from '../img/mexico_flag.png';
import usa_flag from '../img/usa_flag.png';
import '../css/App.css';

function App() {
  
  const [lang, setLang] = useState("MX");
  let infoTxt,proyectosTxt,cursosTxt;

  
  function seleccionarIdioma(lang){
    setLang(lang);
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = 'José De Israel Rubio Moreno';
  });

  if(lang === "MX"){
        infoTxt = "Información y contacto";
        proyectosTxt = "Proyectos";
        cursosTxt = "Cursos y certificaciones";
    }else{
      infoTxt = "About & contact";
      proyectosTxt = "Projects";
      cursosTxt = "Courses & certificates";
  }
  return (
    <div className="App">
      <div className="header">
        <span className="nombre">José De Israel Rubio Moreno</span>
        <span className="fecha">2023</span>
        <div className="div-bandera" >
          <button className="boton-bandera" onClick={()=>seleccionarIdioma("MX")}>
            <img src={mexico_flag} alt="mx"/>
          </button>
          <button className="boton-bandera" onClick={()=>seleccionarIdioma("EN")}>
            <img src={usa_flag} alt="en"/>
          </button>
        </div>
      </div>
      <nav className="nav">
        <Link className="link" to="/informacion" style={{ textDecoration: 'none' }}>{infoTxt}</Link>
        <Link className="link" to="proyectos" style={{ textDecoration: 'none' }}>{proyectosTxt}</Link>
        <Link className="link" to="cursos" style={{ textDecoration: 'none' }}>{cursosTxt}</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Info lang={lang}/>}/>
          <Route path='/portafolio' element={<Info lang={lang}/>}/>
          <Route path='/informacion' element={<Info lang={lang}/>}/>
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/proyectos' element={<Proyectos lang={lang}/>}/>
        </Routes>
    </div>
  );
}

export default App;

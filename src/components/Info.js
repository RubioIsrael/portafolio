import React from 'react';
import foto from "../img/foto.jpeg"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import html5 from "../img/html5.png";
import css from "../img/css.png";
import js from "../img/js.png";
import php from "../img/php.png";
import laravel from "../img/laravel.png";
import mariadb from "../img/mariadb.png"
import reactIcon from "../img/react.png"
import '../css/info.css';

function Info(){
    return(
        <div className="contenedor-flex">
            <img src={foto} alt="Israel" className="foto"/>
            <div className="contenedor-descripcion">
                <p>
                    José De Israel Rubio Moreno - Desarrollador Web
                </p>
                <div className="descripcion">
                    <p>Desarrollador Web con experiencia laboral de 2 años  
                    en constante aprendizaje y apasionado de la programación.
                    He trabajado en distintos proyectos privados basados en 
                    tecnologías web.</p>
                </div>
                <div className='contenedor-flex'>
                    <div className='div-tecnologias'>
                        <p>Tecnologías</p>
                        <div className='flex-align-center justify-center'>
                            <img src={html5} alt="html5" title="html5"/>
                            <img src={css} alt="css3" title="css3"/>
                            <img src={js} alt="javascript" title="javascript"/>
                            <img src={php} alt="php" title="php"/>
                        </div>
                        <div className='flex-align-center justify-center'>
                            <img src={laravel} alt="laravel" title="laravel"/>
                            <img src={mariadb} alt="mariadb" title="mariadb"/>
                            <img src={reactIcon} alt="react" title="react"/>
                        </div>
                    </div>
                    <div className="div-contacto">
                        <p>Contacto</p>
                        <div className='flex-align-center'>
                            <CallIcon className="elemento-contacto"></CallIcon>
                            <span className="elemento-contacto">+52 2297791049</span>
                        </div>
                        <div className='flex-align-center'>
                            <EmailIcon className="elemento-contacto"></EmailIcon>
                            <span className="elemento-contacto">rubioisrael.jm@gmail.com</span>
                        </div>
                        <div className='flex-align-center'>
                            <LinkedInIcon className="elemento-contacto"></LinkedInIcon>
                            <span className="elemento-contacto">https://www.linkedin.com/in/jirm-wd/</span>
                        </div>
                    </div>
                </div>
                <span className='leyenda'>
                    Íconos de  
                    <a href="https://icons8.com/icons/" rel ="noreferrer" target="_blank">
                        Icons8
                    </a>
                </span>
            </div>
        </div>
        )
}

export default Info;
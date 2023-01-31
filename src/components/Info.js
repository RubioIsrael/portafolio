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
import { info_texto } from '../js/info_texto';
import '../css/info.css';

function Info(props){
    const lang = props.lang;
    return(
        <div className="contenedor-flex mw">
            <img src={foto} alt="Israel" className="foto"/>
            <div className="contenedor-descripcion">
                <p>
                    José De Israel Rubio Moreno - {info_texto[lang].cargo}
                </p>
                <div className="descripcion">
                    <p>{info_texto[lang].descripcion}</p>
                </div>
                <div className='contenedor-flex-contacto'>
                    <div className='div-tecnologias'>
                        <p>{info_texto[lang].tecno}</p>
                        <div className='flex-align-center justify-center'>
                            <img className="icon" src={html5} alt="html5" title="html5"/>
                            <img className="icon" src={css} alt="css3" title="css3"/>
                            <img className="icon" src={js} alt="javascript" title="javascript"/>
                            <img className="icon" src={php} alt="php" title="php"/>
                        </div>
                        <div className='flex-align-center justify-center'>
                            <img className="icon" src={laravel} alt="laravel" title="laravel"/>
                            <img className="icon" src={mariadb} alt="mariadb" title="mariadb"/>
                            <img className="icon" src={reactIcon} alt="react" title="react"/>
                        </div>
                    </div>
                    <div className="div-contacto">
                        <p>{info_texto[lang].cont}</p>
                        <div className='flex-align-center text-justify wrap'>
                            <CallIcon className="elemento-contacto"></CallIcon>
                            <span className="elemento-contacto">+52 2297791049</span>
                        </div>
                        <div className='flex-align-center text-justify wrap'>
                            <EmailIcon className="elemento-contacto"></EmailIcon>
                            <span className="elemento-contacto">
                                <a href="mailto: rubioisrael.jm@gmail.com">
                                    rubioisrael.jm@gmail.com
                                </a>
                            </span>
                        </div>
                        <div className='flex-align-center text-justify wrap'>
                            <LinkedInIcon className="elemento-contacto"></LinkedInIcon>
                            <span className="elemento-contacto">
                                <a href="https://www.linkedin.com/in/jirm-wd/" 
                                    rel="noreferrer"
                                    target="_blank">
                                    https://www.linkedin.com/in/jirm-wd/
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <span className='leyenda'>
                    <a href="https://icons8.com/icons/" rel ="noreferrer" target="_blank">
                        Icons8
                    </a>
                </span>
            </div>
        </div>
        )
}

export default Info;
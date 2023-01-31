import React from "react";
import Curso from "./Curso";
import linkedin from "../img/linkedin.png";
import fcc from "../img/freecodecamp.png";
import { cursos_texto } from "../js/textos_modulo_cursos/cursos_texto";
import "../css/cursos.css";

function Cursos(props){
    const lang = props.lang;
    return (
    <div className="flex-align-center justify-center">
        <div className="div-cursos">
            <Curso img={linkedin} nombre={cursos_texto[lang].cReactLink} enlace="https://www.linkedin.com/learning/certificates/5b0acd4285fe3e4b48b6245986d96b7c010575b668a8d58109a6ea248074a8ed"></Curso>
            <Curso img={fcc} nombre={cursos_texto[lang].cJavascriptFcc} enlace="https://www.freecodecamp.org/certification/Israel_Rubio/javascript-algorithms-and-data-structures"></Curso>
            <Curso img={linkedin} nombre={cursos_texto[lang].cUnity2DLink} enlace="https://www.linkedin.com/learning/unity-practico-videojuego-2d-de-plataformas"></Curso>
        </div>        
    </div>
    )
}

export default Cursos;
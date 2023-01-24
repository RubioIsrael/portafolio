import React from "react";
import Proyecto from "./Proyecto.js";
import { useEffect } from "react";
import "../css/proyectos.css";
import descripciones from "./descripciones.js";
import { crearCarril } from "./funciones.js";
import personal from "../img/Gris.png";
import cimat from "../img/cimat.png";
import itver from "../img/itver.png";

function Proyectos(){
    const {memorama,sgp,pcv,gdf,pcm,bot} = descripciones;
    useEffect(crearCarril,[]);
    return(
        <div>
            <div className="div-proyectos">
                <div id="pr1" name="proyecto" className="activa">
                    <Proyecto 
                        nombre="Memorama numérico" 
                        imagen={personal}
                        tecnologias="HTML, CSS y Javascript" 
                        institucion="Proyecto personal"
                        descripcion={memorama} 
                        enlace="https://codepen.io/ImbiRM/pen/zYaRzdW">
                    </Proyecto>
                </div>
                <div id="pr2" name="proyecto" className="inactiva">
                    <Proyecto 
                        nombre="Sistema Gestor de Proyectos"  
                        imagen={cimat}
                        tecnologias="HTML, CSS, JS, PHP/Laravel, JQuery, Bootstrap" 
                        institucion="CIMAT"
                        descripcion={sgp} 
                        enlace="">
                    </Proyecto>
                </div>
                <div id="pr3" name="proyecto" className="inactiva">
                    <Proyecto 
                        nombre="Plataforma de estadísticas covid"   
                        imagen={cimat}
                        tecnologias="HTML, CSS, JS, PHP/Laravel, AmCharts, Mariadb" 
                        institucion="CIMAT"
                        descripcion={pcv} 
                        enlace="">
                    </Proyecto>
                </div>
                <div id="pr4" name="proyecto" className="inactiva">
                    <Proyecto 
                        nombre="Bots con conexión a Google Drive"   
                        imagen={cimat}
                        tecnologias="Python" 
                        institucion="CIMAT"
                        descripcion={bot} 
                        enlace="">
                    </Proyecto>
                </div>
                <div id="pr5" name="proyecto" className="inactiva">
                    <Proyecto 
                        nombre="Sistema Gestor de Filas" 
                        imagen={itver}
                        tecnologias="HTML, CSS, JS, PHP/Laravel, Mariadb" 
                        institucion="ITVER"
                        descripcion={gdf} 
                        enlace="">
                    </Proyecto>
                </div>
                <div id="pr6" name="proyecto" className="inactiva">
                    <Proyecto 
                        nombre="Plataforma de certificación escolar" 
                        tecnologias="HTML, CSS y Javascript" 
                        imagen={personal}
                        institucion="Privada"
                        descripcion={pcm} 
                        enlace="">
                    </Proyecto>
                </div>
            </div>
            <div id="div-puntos" className="flex-justify-align-center div-puntos">

            </div>
        </div>
    )
}

export default Proyectos;
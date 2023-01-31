import React from "react";
import Proyecto from "./Proyecto.js";
import { useEffect , useState } from "react";
import "../css/proyectos.css";
import { info_proyectos } from "../js/info_proyectos.js";
import { info_proyectos_en } from "../js/info_proyectos_en.js";


function Proyectos(props){
    //const {memorama,sgp,pcv,gdf,pcm,bot} = descripciones;
    const [index, setIndex] = useState(0);
    let proyecto = "";

    function crearCarril(){
        const divPuntos = document.getElementById("div-puntos");
        for(let i = 0; i<6;i++){
            const punto = document.createElement("span");
            punto.textContent = "■";
            punto.id = i;
            punto.className = "punto punto-inactivo";
            punto.onclick = seleccionarProyecto.bind(this,punto);
            divPuntos.appendChild(punto);
        }
    }
    function seleccionarProyecto(punto){
        setIndex(punto.id);
    }
    useEffect(
        crearCarril,
        ([])
    );

    if(props.lang === "MX"){
        proyecto = info_proyectos[index];
    }else{
        proyecto = info_proyectos_en[index];
    }

    return(
        <div>
            <div className="div-proyectos">
                <div id="pr1" name="proyecto" className="activa">
                    <Proyecto 
                        nombre={proyecto.nombre} 
                        imagen={proyecto.imagen}
                        tecnologias={proyecto.tecnologias}
                        institucion={proyecto.institucion}
                        descripcion={proyecto.descripcion} 
                        enlace={proyecto.enlace}>
                    </Proyecto>
                </div>
                {/* <div id="pr2" name="proyecto" className="inactiva">
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
                        tecnologias="HTML, CSS & Javascript" 
                        imagen={personal}
                        institucion="Privada"
                        descripcion={pcm} 
                        enlace="">
                    </Proyecto>
                </div> */}
            </div>
            <div id="div-puntos" className="flex-justify-align-center div-puntos">

            </div>
        </div>
    )
}

export default Proyectos;
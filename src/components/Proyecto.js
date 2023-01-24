import React from "react";
function Proyecto(props){
    function verPrivacidad(enlace){
        if(enlace === ""){
            return <p>Plataforma privada</p>
        }else{
            return (<a href={props.enlace} rel="noreferrer" target="_blank">
                    Ver
                </a>);
        }
    }
    return(
        <div className="div-proyecto">
            <div className="div-imagen flex-justify-align-center">
            <img className="imagen" src={props.imagen} alt="institucion"/>
            </div>
            <div className="div-info">
                <p>{props.nombre}</p>
                <p>{props.institucion}</p>
                <p>Tecnologías usadas: {props.tecnologias}</p>
                <p>{props.descripcion}</p> 
                {verPrivacidad(props.enlace)}
            </div>
        </div>
    )
}

export default Proyecto;
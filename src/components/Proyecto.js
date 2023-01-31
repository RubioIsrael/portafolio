import React from "react";
function Proyecto(props){
    function verPrivacidad(enlace){
        if(enlace === ""){
            return <p></p>
        }else{
            return (<a href={props.enlace} rel="noreferrer" target="_blank">
                    Link
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
                <p>{props.tecnologias}</p>
                <p>{props.descripcion}</p> 
                {verPrivacidad(props.enlace)}
            </div>
        </div>
    )
}

export default Proyecto;
import React from "react";

function Curso(props){
    return (
            <div className="flex-align-center justify-center">
                <a href={props.enlace} rel="noreferrer" target="_blank" className="flex-align-center">
                    <img className="elemento-imagen" src={props.img} alt="Imagen del curso"/>
                    {props.nombre}
                </a>
            </div>

    )
}

export default Curso;
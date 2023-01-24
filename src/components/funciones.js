export function crearCarril(){
    const divPuntos = document.getElementById("div-puntos");
    const puntos = document.getElementsByName("proyecto");
    puntos.forEach(element=>{
        const punto = document.createElement("span");
        punto.textContent = "■";
        punto.id = element.id;
        punto.className = "punto punto-inactivo";
        punto.onclick = seleccionarProyecto.bind(this,punto);
        divPuntos.appendChild(punto);
    })
}
export function seleccionarProyecto(objeto){
    const puntos = document.getElementsByName("proyecto");
    const seleccionadores = document.getElementsByClassName("punto");
    puntos.forEach(element=>{
        if(element.id === objeto.id){
            element.className = "activa";
        }else{
            element.className = "inactiva";
        }
    })
    Array.from(seleccionadores).forEach(element=>{
        if(element.id === objeto.id){
            element.className = "punto punto-activo";
        }else{
            element.className = "punto punto-inactivo";
        }
    })
}

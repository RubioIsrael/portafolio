
import personal from "../../img/Gris.png";
import cimat from "../../img/cimat.png";
import itver from "../../img/itver.png";
import descripciones from "./descripciones.js";


const {memorama,sgp,pcv,gdf,pcm,bot} = descripciones;

export const info_proyectos = [
    { 
        nombre: "Memorama numérico",
        imagen: personal,
        tecnologias: "HTML, CSS & Javascript",
        institucion: "Proyecto personal",
        descripcion: memorama,
        enlace: "https://codepen.io/ImbiRM/pen/zYaRzdW"
    },
    { 
        nombre: "Sistema Gestor de Proyectos",
        imagen: cimat,
        tecnologias: "HTML, CSS, JS, PHP/Laravel, JQuery, Bootstrap",
        institucion: "CIMAT",
        descripcion: sgp,
        enlace: ""
    },
    { 
        nombre: "Plataforma de estadísticas covid",
        imagen: cimat,
        tecnologias: "HTML, CSS, JS, PHP/Laravel, AmCharts, Mariadb",
        institucion: "CIMAT",
        descripcion: pcv,
        enlace: ""
    },
    { 
        nombre: "Bots con conexión a Google Drive",
        imagen: cimat,
        tecnologias: "Python",
        institucion: "CIMAT",
        descripcion: bot,
        enlace: ""
    },
    { 
        nombre: "Sistema Gestor de Filas",
        imagen: itver,
        tecnologias: "HTML, CSS, JS, PHP/Laravel, Mariadb",
        institucion: "ITVER",
        descripcion: gdf,
        enlace: ""
    },
    { 
        nombre: "Plataforma de certificación escolar",
        imagen: personal,
        tecnologias: "HTML, CSS & Javascript",
        institucion: "Privada",
        descripcion: pcm,
        enlace: ""
    }
]
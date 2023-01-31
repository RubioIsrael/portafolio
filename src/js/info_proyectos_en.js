
import personal from "../img/Gris.png";
import cimat from "../img/cimat.png";
import itver from "../img/itver.png";
import descripciones_en from "./descripciones_en.js";


const {memorama,sgp,pcv,gdf,pcm,bot} = descripciones_en;

export const info_proyectos_en = [
    { 
        nombre: "Numeric Memory",
        imagen: personal,
        tecnologias: "HTML, CSS & Javascript",
        institucion: "Personal demo",
        descripcion: memorama,
        enlace: "https://codepen.io/ImbiRM/pen/zYaRzdW"
    },
    { 
        nombre: "Project Management System",
        imagen: cimat,
        tecnologias: "HTML, CSS, JS, PHP/Laravel, JQuery, Bootstrap",
        institucion: "CIMAT",
        descripcion: sgp,
        enlace: ""
    },
    { 
        nombre: "Covid-19 stats site",
        imagen: cimat,
        tecnologias: "HTML, CSS, JS, PHP/Laravel, AmCharts, Mariadb",
        institucion: "CIMAT",
        descripcion: pcv,
        enlace: ""
    },
    { 
        nombre: "GoogleDrive bots",
        imagen: cimat,
        tecnologias: "Python",
        institucion: "CIMAT",
        descripcion: bot,
        enlace: ""
    },
    { 
        nombre: "Queue Managment System",
        imagen: itver,
        tecnologias: "PHP Laravel, HTML, CSS & JS",
        institucion: "ITVER",
        descripcion: gdf,
        enlace: ""
    },
    { 
        nombre: "School certification platform",
        imagen: personal,
        tecnologias: "PHP Laravel, HTML, CSS & JS",
        institucion: "Private platform",
        descripcion: pcm,
        enlace: ""
    },
]
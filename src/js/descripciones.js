const descripciones = {
    memorama :"Generador de memorama númerico creado con HTML CSS y JS, el usuario puede seleccionar " 
    +"el tamaño del memorama y este se genera a partir de ello. El memorama es una tabla html donde las celdas "
    +"reciben un número y se les aplican estilos CSS para 'voltearla', todo el demás funcionamiento está "
    +"aplicado con JS utilizando diferentes funciones para la generación, selección, puntos, tiempo entre otras "
    +"cosas.",
    sgp:"Sistema de Gestión de Proyectos privado de la institución CIMAT, es un sistema que tiene diferentes"
    +" características para la creación y administración de proyectos."
    +" Trabajé en el desarrollo de los módulos requeridos para la generación de reportes y nuevos proyectos a"
    +" través de formularios asíncronos y librerías de creación de documentos como PHPWord y OfficeConverter.",
    pcv:"Plataforma que muestra el semáforo COVID-19 junto con gráfica y series de tiempo. "
    +"Desarrollé la plataforma en conjunto con un compañero, la plataforma se secciona en dos partes, "
    +"un módulo del semáforo nacional y otro del semáforo por estados y zonas metropolitanas. Me encargué de "
    +"la elaboración del módulo por estados mostrando un mapa del estado con sus zonas metropolitanas coloreadas "
    +"y seleccionables, todo esto a través de AmCharts y JS. Elaboré tablas que muestran la última información "
    +"sobre las estadísitcas covid del estado y las diferentes gráficas y series de tiempo respectivas. "
    +"Me encargué también de la elaboración de la base de datos a la que consulta la plataforma, desde las "
    +"tablas hasta vistas, procedimientos almacenados y disparadores",
    gdf:"Sistema gestor de filas para la administración de filas y turnos de los trámites escolares del ITVER "
    +"Trabajé en el desarrollo completo del sistema, este incluía login con roles como Alumno y Administrador, "
    +"generación de nuevas filas, historial, administración y eliminado de filas, administración de los alumnos "
    +"y sus turnos, y solicitud de turnos por parte de los alumnos. También participé parcialmente en la imple"
    +"mentación de la base de datos.",
    pcm:"Plataforma para agilizar la automatización de certificaciones de las materias escolares universitarias. "
    +"Trabajé en el desarrollo completo de la plataforma que incluía login, formularios, generación de documentos "
    +"excel y pdf, actualización de datos y diferentes módulos para llenado de información por parte del personal. "
    +"Existían diferentes roles y según estos eran los módulos que se mostraban para su llenado.",
    bot:"Bots de búsqueda y descarga de archivos de Google Drive. "
    +"Desarrollé 2 bots con Python que consistían en conectarse con un perfil a una carpeta compartida de Google "
    +"Drive donde realizaban la búsqueda de archivos .csv para su descarga, posteriormente abrían cada uno de los "
    +"archivos y validaban su contenido para luego realizar los registros de este contenido a una base de datos. "
    +"Los bot realizan la conexión con la librería PyDrive y con Pandas manipulan los archivos .csv para luego "
    +"utilizar Pymysql como librería de conexión con la base de datos. Ambos bot generan un log de registro de " 
    +"errores en un archivo .txt y al finalizar mandan un correo de éxito o en caso de haber encontrado errores "
    +"enlista los errores encontrados en los diferentes archivos. Uno de los bots también realiza llamados "
    +"simultáneos a scripts php que crean otros archivos csv con la nueva información registrada a la base de datos "
    +"y finalmente carga los nuevos archivos a otra carpeta de Google Drive."

};

export default descripciones;
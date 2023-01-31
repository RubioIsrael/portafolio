const descripciones = {
    memorama :"Numeric memory generator created with HTML CSS and JS, the user can select the size of the memory "
    +"and it is generated from it. The memorama is an html table where the cells receive a number and CSS styles "
    +"are applied to 'flip' it, all the other operation is applied with JS using different functions for "
    +"generation, selection, points, time among other things.",
    sgp:"Private Project Management System, is a system that has different characteristics for the creation "
    +"and administration of projects. I worked on the development of the modules required for the generation of "
    +"reports and new projects through asynchronous forms and document creation libraries such as PHPWord and "
    +"OfficeConverter.",
    pcv:"Platform that shows the COVID-19 traffic light along with graphs and time series. I developed the "
    +"platform together with a colleague, the platform is divided into two parts, a module for the national "
    +"traffic light and another for the traffic light by states and metropolitan areas. I was in charge of the "
    +"elaboration of the module by states showing a map of the state with its colored and selectable metropolitan "
    +"areas, all this through AmCharts and JS. I prepared tables that show the latest information on the state's "
    +"covid statistics and the different graphs and respective time series. I was also in charge of the "
    +"development of the database that the platform consults, from the tables to views, stored procedures "
    +"and triggers.",
    gdf:"Queue management system for the administration of queues and shifts for ITVER school procedures. I "
    +"worked on the complete development of the system, this included login with roles such as Student and "
    +"Administrator, generation of new queues, history, administration and deletion of queues, administration of "
    +"students and their shifts, and requests for shifts by students. I also partially participated in the "
    +"implementation of the database.",
    pcm:"Platform to expedite the certification process of university school subjects. I worked on the complete "
     +"development of the platform that included login, forms, generation of excel and pdf documents, data "
     +"updating and different modules for filling in information by the users. There were different roles and "
     +"according to these were the modules that were shown for filling",
    bot:"Google Drive file download and search bots. I developed 2 bots with Python that consisted of "
    +"connecting with a profile to a shared Google Drive folder where they searched for .csv files for download"
    +", then opened each of the files and validated their content to then record it to a database. "
    +"The bots make the connection with the PyDrive library and with Pandas they manipulate the .csv files to "
    +"later use Pymysql as a connection library with the database. Both bots generate an error log in a .txt "
    +"file and when finished they send a success email or in case of having found errors, it lists the errors "
    +"found in the different files. One of the bots also makes simultaneous calls to php scripts that create "
    +"other csv files with the new information registered to the database and finally uploads the new files "
    +"to another Google Drive folder."

};

export default descripciones;
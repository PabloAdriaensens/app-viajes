#Creacion de base de datos para Geeks Hubs Travels
CREATE DATABASE GeeksHubsTravel_DB CHARSET latin1 COLLATE latin1_spanish_ci;
#Creacion de tabla 
CREATE TABLE Usuarios(
	id INTEGER PRIMARY KEY not null,
    Usuario varchar(45) not null,
    Email varchar(45) not null,
    Contraseña varchar(80) not null,
    hash varchar(80) null);
    
    


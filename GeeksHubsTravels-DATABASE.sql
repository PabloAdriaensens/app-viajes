#Creacion de base de datos para Geeks Hubs Travels
CREATE DATABASE GeeksHubsTravel_DB CHARSET latin1 COLLATE latin1_spanish_ci;
#Creacion de tabla
CREATE TABLE `GeeksHubsTravel_DB`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `pass` VARCHAR(256) NULL,
  `active` INT(11) NULL,
  `hash` VARCHAR(256) NULL,
  PRIMARY KEY (`id`));
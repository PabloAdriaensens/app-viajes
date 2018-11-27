// cargar mysql
const MYSQL = require('mysql');

// establecer datos conexión
const CONN = MYSQL.createConnection({
    // crear objeto con los datos de conexión
    // donde esta ubicado mi servidor de mysql
    host: 'localhost',
    // indicar mi usario de conexión root
    user: 'root',
    // password
    password: 'rootroot',
    database: 'app-prueba'
});
module.exports = CONN;
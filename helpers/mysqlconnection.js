// cargar mysql
const Mysql = require('mysql');


class mysqlConnection
{
    static getConnection (){
        return Mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password:'mysql',
            database: 'GeeksHubsTravel_DB'
        })
    }

}

module.exports= mysqlConnection;



/*
const MYSQL = require('mysql');

// establecer datos conexión
const CONN = MYSQL.createConnection({
    // crear objeto con los datos de conexión
    // donde esta ubicado mi servidor de mysql
    host: 'localhost',
    // indicar mi usario de conexión root
    user: 'root',
    // password
    password: 'root',
    database: 'GeeksHubsTravel_DB'
});
module.exports = CONN;




/*
const Sequelize = require('sequelize');
const sequelize= new Sequelize('database','username','password', {
host: 'localhost',
dialect: 'mysql',
operatorAliases: false,
pool:{
max:5,
min: 0,
acquire : 30000,
idle: 10000
}
});
//O BIÉN.
const sequelize = new
Sequelize('mysql://user:pass@example.com:3306/GeeksHubsTravel_DB');
 */
const CONN = require('../helpers/mysqlconnection');

let Users = {};

Users.fetchAll = () => {
    return new Promise((res, rej) => {
        if (!CONN) rej("No se ha podido crear la conexión");
        let SQL = 'SELECT * FROM mitabla ;';
        CONN.query(SQL, (err, rows) => {
            if (err) return rej(err);
            else return res(rows);
        });
    })
};

Users.insert = (user) => {
    return new Promise((res, rej) => {
        if (!CONN) rej("No se ha podido crear la conexión");
        let SQL = 'INSERT INTO mitabla SET ?';
        CONN.query(SQL, [user], (err, result) => {
            if (err) return rej(err);
            else return res(result.insertId);
        })
    })
};

Users.find = (id) => {
    return new Promise((res, rej) => {
        if (!CONN) rej("No se ha podido crear la conexión");
        let SQL = 'SELECT  *FROM mitabla WHERE id =' + id;
        CONN.query(SQL, (err, result) => {
            if (err) return rej(err);
            else return res(result);
        })
    })
}

module.exports = Users;
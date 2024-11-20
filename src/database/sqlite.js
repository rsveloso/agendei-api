import sqlite3 from 'sqlite3';

const SQLite = sqlite3.verbose();

function query(comand, params, method = 'all') {
    return new Promise(function (resolve, reject) {
        db[method](comand, params, function (error, result) {
            if (error)
                reject(err);
            else
                resolve(result);
        });
    });
}

const db = new SQLite.Database('./src/database/banco.db', SQLite.OPEN_READWRITE, (err) => {
    if (err)
        return console.error("Erro ao conectar com o banco de dados: " + err.message);
});

export { db, query };
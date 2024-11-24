import { query } from "../database/sqlite.js";

// async function Listar() {
//     const sql = `SELECT * FROM users`;

//     const users = await query(sql);
//     return users;
// }

async function Inserir(name, email, hashPassword) {
    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)
    RETURNING id_user`;

    const user = await query(sql, [name, email, hashPassword]);
    return user[0];
}

async function InserirAdmin(name, email, hashPassword) {
    const sql = `INSERT INTO admins (name, email, password) VALUES (?, ?, ?)
    RETURNING id_admin`;

    const user = await query(sql, [name, email, hashPassword]);
    return user[0];
}

// async function Editar(id_user, name, email, hashPassword) {
//     const sql = `UPDATE users SET name = ?, email = ?, password = ? WHERE id_user = ?`;
//     await query(sql, [name, email, hashPassword, id_user]);
//     return { id_user, name, email };
// }

async function ListarByEmail(email) {

    const sql = `SELECT * FROM users WHERE email = ?`;

    const user = await query(sql, [email]);

    if (user.length === 0)
        return [];
    else
        return user[0];
}

async function ListarByEmailAdmin(email) {
    const sql = `SELECT * FROM admins WHERE email = ?`;
    const user = await query(sql, [email]);
    if (user.length === 0)
        return [];
    else
        return user[0];
}

async function Profile(id_user) {
    const sql = `SELECT id_user, name, email FROM users WHERE id_user = ?`;
    const user = await query(sql, [id_user]);
    return user[0];
}

export default { Inserir, ListarByEmail, InserirAdmin, ListarByEmailAdmin, Profile };
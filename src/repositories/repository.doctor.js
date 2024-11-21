import { query } from "../database/sqlite.js";

async function Listar(name) {

    let filtro = [];

    let sql = `SELECT * FROM doctors `;

    if (name){
        sql = sql + `WHERE name LIKE ?`;
        filtro.push(`%${name}%`);
    }
    
    sql = sql + `ORDER BY name ASC`;

    const doctors = await query(sql, filtro);

    return doctors;
}

async function Inserir(name, specialty, icon) {
    const sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?)
    RETURNING id_doctor`;

    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];
}

async function Editar(id_doctor, name, specialty, icon) {
    const sql = `UPDATE doctors SET name = ?, specialty = ?, icon = ? WHERE id_doctor = ?`;

    await query(sql, [name, specialty, icon, id_doctor]);

    return  { id_doctor };
}

async function Excluir(id_doctor) {
    const sql = `DELETE FROM doctors WHERE id_doctor = ?`;
    await query(sql, [id_doctor]);

    return { id_doctor };
}

async function ListarServicos(id_doctor) {

    const sql = `select d.id_service, s.description, d.price
    from doctors_services d
    join services s on (s.id_service = d.id_service)
    where id_doctor = ?
    order by s.description`;

    const services = await query(sql, [id_doctor]);

    return services;
}

export default { Listar, Inserir, Editar, Excluir, ListarServicos };
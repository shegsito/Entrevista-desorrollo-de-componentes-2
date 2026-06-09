const pool = require('../config/db');

exports.insertInscripcion = (escuela, nombre, )
const sql = `INSERT INTO inscripcion(idcliente, idescuela, )
VALUES ($1, $2)
RETURNING *`;

const res = await dbClient.query(sql, [escuela, nombre, ]);
const inscripcion = res.rows [0];
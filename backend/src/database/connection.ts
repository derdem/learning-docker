import mysql from "mysql2";

export const poolNoDb = mysql.createPool({
    connectionLimit : 10,
    host: 'database',
    port: 3306,
    user: 'root',
    password: 'envelio123',
})

export const poolforApp = mysql.createPool({
    connectionLimit : 10,
    host: 'database',
    port: 3306,
    user: 'root',
    password: 'envelio123',
    database: 'app',
})

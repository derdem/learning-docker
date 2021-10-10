import mysql from "mysql2";
export const poolNoDb = mysql.createPool({
    connectionLimit: 10,
    host: '172.18.0.2',
    user: 'root',
    password: 'envelio123',
});
export const poolforApp = mysql.createPool({
    connectionLimit: 10,
    host: '172.18.0.2',
    user: 'root',
    password: 'envelio123',
    database: 'app',
});
//# sourceMappingURL=connection.js.map
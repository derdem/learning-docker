import mysql from "mysql2";

const poolforApp = mysql.createPool({
  connectionLimit : 10,
  host: 'database',
  port: 3306,
  user: 'root',
  password: 'envelio123',
  database: 'app',
})

poolforApp.query("SELECT * FROM Users;", (error, result) => {
  console.log(error);
  console.log(result);
})

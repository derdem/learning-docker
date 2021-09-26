import {poolWithDb, poolNoDb} from "./connection.js";

const databasecreate = `CREATE DATABASE todo;`;
const tablecreate = `CREATE TABLE list (id int, name varchar(255), description varchar(255));`;
const tablefill = `INSERT INTO list (id, name, description) VALUES (1, 'apple', 'the red kind');`;

const createDatabasePromise = () => {
    return new Promise((resolve, reject) => {
        poolNoDb.query(databasecreate, (error, result) => {
            if (error) reject(`error: ${error.message}`);
            console.log(result);
            resolve();
        })
    })
}

const createTablePromise = () => {
    return new Promise((resolve, reject) => {
        poolWithDb.query(tablecreate, (error, result) => {
            if (error) reject(`error: ${error.message}`);
            console.log(result);
            resolve();
        }) 
    })
}

const fillTablePromise = () => {
    return new Promise((resolve, reject) => {
        poolWithDb.query(tablefill, (error, result) => {
            if (error) reject(`error: ${error.message}`);
            console.log(result);
            resolve();
        });
    })
}

export function createDatabase() {
    return createDatabasePromise().then(() => {
        console.log("Database created")
    })
}

export function createTable() {
    return createTablePromise()
        .then(fillTablePromise)
}
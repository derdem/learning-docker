import {poolWithDb as connection} from "./connection.js";

const selecttable = `SELECT * FROM list`;
function connectPromise() {
    return new Promise((resolve, reject) => {
        connection.connect((error) => {
            if (error) reject(`error: ${error.message}`);
            console.log("connection successful")
            resolve();
        });
    });
}

function queryPromise() {
    return new Promise((resolve, reject) => {
        connection.query(selecttable, (error, result) => {
            if (error) reject(`error: ${error.message}`);
            console.log(result);
            resolve(result)
        })
    })
}

export default function queryDb() {
    return queryPromise()
}
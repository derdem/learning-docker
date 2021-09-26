import Express from "express";

import {createDatabase, createTable} from "./src/setup.js";
import queryDb from "./src/query.js";

const app = Express();
const port = 3000;

app.post("/setupDatabase", async (request, response) => {
    await createDatabase()
    response.send("setup DB")
})

app.post("/setupTable", async (request, response) => {
    await createTable()
    response.send("setup Table")
})
app.get("/query", async (request, response) => {
    const results = await queryDb()
    response.send(results)
})

app.listen(port, () => console.log(`listening on port: ${port}`))
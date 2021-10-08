import Express from "express";
import {createDatabase, createTable} from "./src/setup.js";
import queryDb from "./src/query.js";

const router = Express.Router();

const app = Express();
const port = 3000;

router.get("/", (request, response) => {
    return response.sendFile('/application/src/index.html')
})

router.post("/setupDatabase", async (request, response) => {
    await createDatabase()
    response.send("setup DB")
})

router.post("/setupTable", async (request, response) => {
    await createTable()
    response.send("setup Table")
})
router.get("/query", async (request, response) => {
    const results = await queryDb()
    response.send(results)
})

app.use("/", router)
app.listen(port, () => console.log(`listening on port: ${port}`))
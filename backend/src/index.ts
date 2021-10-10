// @ts-nocheck
import express from "express";
import getUser from "./models/users/queries.js"; 
import path from "path"; 

const router = express.Router();
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

router.get("/", (request, response) => {
    return response.sendFile(path.resolve() + "/src/templates/index.html")
})

router.get("/login", (request, response) => {
    return response.sendFile(path.resolve() + "/src/templates/login.html")
})

router.post("/login", async (request, response) => {
    const {email, password} = request.body;
    console.log(email, password)
    const user = await getUser({email, password})
        .catch((error) => {
            console.error(new Error(error));
            return []
        });
    console.log(user)
    return response.send(user)
})

app.use("/", router)
app.listen(port, () => console.log(`listening on port: ${port}`))


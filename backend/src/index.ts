import express from "express";
import proxy from "express-http-proxy";
import jwt from "jsonwebtoken";
import getAccessToken from "./jsonwebtoken/accesstoken.js";
import getUser from "./models/users/queries.js";
import path from "path";

const router = express.Router();
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(proxy("http://frontend:4000", {
    filter: (req) => {
        return new Promise(function (resolve) {
            const apiRegEx = /\/api*/
            const { originalUrl } = req;
            const regExMatch = originalUrl.match(apiRegEx)
            resolve(regExMatch === null);
        });
    }
}));


router.get("/randomData", (request, response) => {
    const randomData = ["Hallo", "Bego"]
    return response.send(randomData)
})

router.post("/login", async (request, response) => {
    const {email, password} = request.body;
    const user = await getUser({email, password})
        .catch((error) => {
            throw new Error(error);
        });

    if (user) {
        const accessToken = jwt.sign({ username: user.email,  role: user.role }, getAccessToken());
        const responsePayload = {token: accessToken, username: user.email};
        return response.json(responsePayload)
    }


    return response.send(user)
})

app.use("/api", router)
app.listen(port, () => console.log(`listening on port: ${port}`))


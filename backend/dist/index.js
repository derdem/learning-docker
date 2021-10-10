var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-nocheck
import express from "express";
import getUser from "./models/users/queries.js";
import path from "path";
const router = express.Router();
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
router.get("/", (request, response) => {
    return response.sendFile(path.resolve() + "/src/templates/index.html");
});
router.get("/login", (request, response) => {
    return response.sendFile(path.resolve() + "/src/templates/login.html");
});
router.post("/login", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    console.log(email, password);
    const user = yield getUser({ email, password })
        .catch((error) => {
        console.error(new Error(error));
        return [];
    });
    console.log(user);
    return response.send(user);
}));
app.use("/", router);
app.listen(port, () => console.log(`listening on port: ${port}`));
//# sourceMappingURL=index.js.map
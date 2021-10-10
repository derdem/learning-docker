var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { poolforApp as connection } from "../../database/connection.js";
const queryComposer = (emailPassword) => {
    const { email, password } = emailPassword;
    return (`SELECT * FROM Users WHERE email='${email}' AND password='${password}';`);
};
const userQueryCallbackComposer = (resolve, reject) => {
    return (error, result) => {
        console.log(error);
        if (error)
            reject(`error: ${error.message}`);
        resolve(result);
    };
};
const promiseFunctionComposer = (query) => {
    return (resolve, reject) => {
        const userQueryCallback = userQueryCallbackComposer(resolve, reject);
        connection.query(query, userQueryCallback);
    };
};
const getUser = (emailPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const query = queryComposer(emailPassword);
    const getUser = promiseFunctionComposer(query);
    return new Promise(getUser);
});
export default getUser;
//# sourceMappingURL=queries.js.map
import { poolforApp as connection } from "../../database/connection.js";

// todo: remove password from User interface
interface User {
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  role: string
}
interface EmailPassword {
    email: string,
    password: string,
}

type Resolver = (x: any) => void
type Rejecter = (x: any) => void
type QueryComposer = (x: EmailPassword) => string
type GetUser = (x: EmailPassword) => Promise<User>
type GetUserCallback = (error: any, result: EmailPassword) => void
type UserQueryCallbackComposer = (resolve: Resolver, reject: Rejecter) => GetUserCallback
type PromiseFunctionComposer = (query: string) => (resolve: Resolver, reject: Rejecter) => void

const queryComposer: QueryComposer = (emailPassword) => {
    const {email, password} = emailPassword
    return (
        `SELECT * FROM Users WHERE email='${email}' AND password='${password}';`
    )
}

const userQueryCallbackComposer: UserQueryCallbackComposer = (resolve, reject) => {
    return (error, result) => {
        if (error) reject(`error: ${error.message}`);
        // return first entry of list
        resolve(result[0])
    }
}

const promiseFunctionComposer: PromiseFunctionComposer = (query) => {
    return (resolve, reject) => {
        const userQueryCallback = userQueryCallbackComposer(resolve, reject)
        connection.query(query, userQueryCallback)
    }
}

const getUser: GetUser = async (emailPassword) => {
    const query = queryComposer(emailPassword);
    const getUser = promiseFunctionComposer(query);
    return new Promise(getUser)

}

export default getUser

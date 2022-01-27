import axios, { AxiosResponse } from "axios";

export interface Login {
  email: string;
  password: string;
}

type LoginPost = (loginData: Login) => Promise<AxiosResponse<string>>;

export const loginPost: LoginPost = ({ email, password }) => {
  return axios.post("/api/login", { email, password }).catch((error) => {
    throw new Error(error);
  });
};

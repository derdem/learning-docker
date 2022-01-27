import { defineStore } from "pinia";
import { loginPost, Login } from "@/services/login";

const loginHandler = (store: any) => (userInfo: any) => {
  store.username = userInfo.data.username;
  store.token = userInfo.data.token;
};

export const userStore = defineStore("user", {
  state: () => ({
    username: "Nikodem Bienia",
    token: "",
  }),
  actions: {
    login(loginDetails: Login) {
      return loginPost(loginDetails).then(loginHandler(this));
    },
  },
});

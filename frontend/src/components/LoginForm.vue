<template>
  <div>
    <h1 class="font-medium p-2">Login</h1>
    <form @submit.prevent="login()">
      <div class="grid p-2">
        <div class="pb-2 flex flex-col">
          <label for="email" class="mb-1">Email</label>
          <input
            v-model="email"
            name="email"
            type="email"
            class="ring-gray-300 ring-2 rounded border-transparent w-64 px-2"
            autocomplete="email"
            required
          />
        </div>
        <div class="pb-2 flex flex-col">
          <label for="password" class="mb-1">Password</label>
          <input
            v-model="password"
            name="password"
            type="password"
            autocomplete="current-password"
            class="ring-gray-300 ring-2 rounded border-transparent px-2"
            required
          />
        </div>
      </div>
      <div class="w-100 flex flex-row-reverse">
        <button
          class="bg-gradient-to-b from-lima-200 to-lima-300 p-2 rounded mr-2 hover:bg-gradient-to-b hover:from-yellow-300 hover:to-yellow-400"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Login } from "@/services/login";
import { userStore } from "@/store/user";
import router from "@/router";

const store = userStore();

const email = ref("");
const password = ref("");

const login = () => {
  const payload: Login = {
    email: email.value,
    password: password.value,
  };
  store.login(payload).then(() => {
    router.push({ name: "Home" });
  });
};
</script>

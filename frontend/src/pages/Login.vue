<template>
  <SimpleCenteredVue>
    <div class="bg-white p-4 rounded-lg shadow">
      <h1 class="font-medium p-2">Login</h1>
      <form @submit.prevent="add()">
        <div class="grid p-2">
          <div class="pb-2 flex flex-col">
            <label for="email" class="mb-1">Email</label>
            <input
              name="email"
              type="email"
              class="ring-gray-300 ring-2 rounded border-transparent w-64"
              autocomplete="email"
              required
            />
          </div>
          <div class="pb-2 flex flex-col">
            <label for="password" class="mb-1">Password</label>
            <input
              name="password"
              type="password"
              autocomplete="current-password"
              class="ring-gray-300 ring-2 rounded border-transparent"
              required
            />
          </div>
        </div>
      </form>
    </div>
  </SimpleCenteredVue>
</template>

<script setup lang="ts">
import SimpleCenteredVue from "@/components/SimpleCentered.vue";
const add = () => void 0;
</script>

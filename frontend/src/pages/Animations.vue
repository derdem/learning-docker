<template>
  <CompleteWidthTemplateVue>
    <div class="basis-full">Hover effects</div>
    <div class="m-2 p-2 w-32 h-32 bg-slate-500 relative transition effect1">
      <div class="center">Example1</div>
    </div>

    <div class="m-2 p-2 w-32 h-32 bg-slate-500 relative transition effect2">
      <div class="center">Example2</div>
    </div>

    <div class="m-2 p-2 w-32 h-32 bg-slate-500 relative transition effect3">
      <div class="center">Example3</div>
    </div>

    <div class="m-2 p-2 w-32 h-32 bg-slate-500 relative transition effect4">
      <div class="center">Example4</div>
    </div>

    <div class="m-2 p-2 w-32 h-32 bg-slate-500 relative transition effect5">
      <div class="center">Example5</div>
    </div>

    <div class="m-2 p-2 w-32 h-32 bg-slate-500 relative transition effect6">
      <div class="center">Example6</div>
    </div>

    <div class="m-2 p-2 w-32 h-32 bg-slate-500 relative transition effect7">
      <div class="center">Example7</div>
    </div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
</script>

<style scoped lang="scss">
$prime: #ff6e48;

.transition {
  transition: all 250ms ease;

  &.effect1:hover {
    box-shadow: inset 0 0 0 0.5rem $prime;
  }

  &.effect2:hover {
    border-radius: 2rem;
  }

  &.effect3 {
    &::after {
      transition: all 250ms ease;
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 0.5rem;
      background-color: $prime;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  &.effect4:hover {
    transform: translate(1rem, 0.5rem);
  }

  &.effect5:hover {
    box-shadow: 0 1.9rem 3.8rem rgb(100, 100, 100, 0.3),
      0 1.5rem 1.2rem rgba(100, 100, 100, 0.22);
    transform: translate(0, -1rem);
  }

  &.effect6 {
    animation: animation-out 500ms forwards;
    &:hover {
      animation: animation-in 500ms forwards;
    }
  }

  @keyframes animation-in {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 1rem);
    }
    100% {
      transform: translate(0, 1rem) rotate(5deg);
    }
  }

  @keyframes animation-out {
    0% {
      transform: translate(0, 1rem) rotate(5deg);
    }
    50% {
      transform: translate(0, 1rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  &.effect7:hover {
    animation: swiggle 250ms forwards ease;
  }

  @keyframes swiggle {
    0% {
      transform: translate(0, 0);
    }
    15% {
      transform: translate(1rem, 0);
    }
    35% {
      transform: translate(-1rem, 0);
    }
    55% {
      transform: translate(1rem, 0);
    }
    80% {
      transform: translate(-1rem, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
}
</style>

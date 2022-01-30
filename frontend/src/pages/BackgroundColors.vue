<template>
  <CompleteWidthTemplateVue>
    <div class="basis-full">Background effects - Linear Gradient</div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-8"
    >
      <div class="center text-center">Gradient to top-left</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-2"
    >
      <div class="center text-center">Gradient to top</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-7"
    >
      <div class="center text-center">Gradient to top-right</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-4"
    >
      <div class="center text-center">Gradient to left</div>
    </div>
    <div
      class="invisible basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-8"
    >
      <div class="center text-center"></div>
    </div>

    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-3"
    >
      <div class="center text-center">Gradient to right</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-6"
    >
      <div class="center text-center">Gradient to bottom-left</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-1"
    >
      <div class="center text-center">Gradient to bottom</div>
    </div>

    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-5"
    >
      <div class="center text-center">Gradient to bottom-right</div>
    </div>

    <div class="basis-full">Background effects - Radial Gradient</div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-9"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-10"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-11"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-12"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-13"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="invisible basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-8"
    >
      <div class="center text-center"></div>
    </div>
    <div class="basis-full">Background effects - Repeat Radial Gradient</div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-14"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-15"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-16"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-17"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-18"
    >
      <div class="center text-center">Radial gradient</div>
    </div>
    <div
      class="invisible basis-1/4 m-2 p-2 w-32 h-32 bg-slate-700 relative custom-gradient-8"
    >
      <div class="center text-center"></div>
    </div>
  </CompleteWidthTemplateVue>
</template>

<script setup lang="ts">
import CompleteWidthTemplateVue from "@/components/CompleteWidthTemplate.vue";
</script>

<style scoped lang="scss">
.custom-gradient-1 {
  background-image: linear-gradient(to bottom, #c7d2fe, #4338ca);
}
.custom-gradient-2 {
  background-image: linear-gradient(to top, #c7d2fe, #4338ca);
}
.custom-gradient-3 {
  background-image: linear-gradient(to right, #c7d2fe, #4338ca);
}
.custom-gradient-4 {
  background-image: linear-gradient(to left, #c7d2fe, #4338ca);
}
.custom-gradient-5 {
  background-image: linear-gradient(to bottom right, #c7d2fe, #4338ca);
}
.custom-gradient-6 {
  background-image: linear-gradient(to bottom left, #c7d2fe, #4338ca);
}
.custom-gradient-7 {
  background-image: linear-gradient(to top right, #c7d2fe, #4338ca);
}
.custom-gradient-8 {
  background-image: linear-gradient(to top left, #c7d2fe, #4338ca);
}

.custom-gradient-9 {
  background-image: radial-gradient(#4338ca, #c7d2fe);
}

.custom-gradient-10 {
  background-image: radial-gradient(closest-side at 65% 65%, #4338ca, #c7d2fe);
}
.custom-gradient-11 {
  background-image: radial-gradient(farthest-side at 65% 65%, #4338ca, #c7d2fe);
}
.custom-gradient-12 {
  background-image: radial-gradient(
    closest-corner at 65% 65%,
    #4338ca,
    #c7d2fe
  );
}
.custom-gradient-13 {
  background-image: radial-gradient(
    farthest-corner at 65% 65%,
    #4338ca,
    #c7d2fe
  );
}

.custom-gradient-14 {
  background-image: repeating-radial-gradient(#4338ca, #c7d2fe 10%);
}

.custom-gradient-15 {
  background-image: repeating-radial-gradient(
    closest-side at 65% 65%,
    #4338ca,
    #c7d2fe 10%
  );
}
.custom-gradient-16 {
  background-image: repeating-radial-gradient(
    farthest-side at 65% 65%,
    #4338ca,
    #c7d2fe 10%
  );
}
.custom-gradient-17 {
  background-image: repeating-radial-gradient(
    closest-corner at 65% 65%,
    #4338ca,
    #c7d2fe 10%
  );
}
.custom-gradient-18 {
  background-image: repeating-radial-gradient(
    farthest-corner at 65% 65%,
    #4338ca,
    #c7d2fe 10%
  );
}
</style>

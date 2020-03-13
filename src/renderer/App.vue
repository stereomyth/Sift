<script>
import Side from '@/components/Side.vue';
import Top from '@/components/Top.vue';
import Viewer from '@/components/Viewer.vue';

export default {
  components: { Side, Top, Viewer },
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <Top />
    <div class="flex text flex-1">
      <Viewer class="flex-1" />
      <!-- <Side /> -->
    </div>
    <!-- <Thumbs /> -->
  </div>
</template>

<style lang="postcss">
@tailwind base;

body {
  @apply text-white bg-gray-900;
}

input {
  @apply font-mono text-white mx-1 px-1;
  background-color: rgba(255, 255, 255, 0.1);
}

label {
  @apply block text-xs;
}

pre {
  @apply border-dashed border-2 p-2 m-2;
  font-size: 10px;
}

.btn {
  @apply bg-black rounded block w-40 text-left p-2 m-2;
}

@tailwind components;
@tailwind utilities;
</style>

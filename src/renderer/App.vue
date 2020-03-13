<script>
import Main from '@/components/Main.vue';

export default {
  components: { Main },
};
</script>

<template>
  <Main />
</template>

<style lang="postcss">
@tailwind base;

body {
  background-color: #333;
  @apply text-white;
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

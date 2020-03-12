<script>
import Main from './components/Main.vue';

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
  color: white;
}

@tailwind components;
@tailwind utilities;
</style>

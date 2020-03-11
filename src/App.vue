<script>
import Side from './components/Side.vue';

export default {
  components: { Side },
};
</script>

<template>
  <div class="flex">
    <div class="main">
      <h1>main</h1>
    </div>
    <Side />
  </div>
</template>

<style lang="postcss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

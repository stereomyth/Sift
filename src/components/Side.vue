<script>
export default {
  props: ['files'],
  data: () => ({ choices: [1, 2, 3, 4, 5, 6, 7] }),
};
</script>

<template>
  <div class="flex bg-red">
    <div class="choices">
      <button v-for="choice in files" :key="choice.path" class="btn">
        {{ choice.name }}
      </button>
    </div>
  </div>
</template>

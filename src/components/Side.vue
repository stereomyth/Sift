<script>
export default {
  data: () => ({ choices: [1, 2, 3, 4, 5, 6, 7] }),
};
</script>

<template>
  <div class="flex bg-red">
    <div class="choices">
      <button
        v-for="choice in choices"
        :key="choice"
        class="bg-black rounded block w-40 text-left p-2 m-2"
      >
        {{ choice }}
      </button>
    </div>
  </div>
</template>

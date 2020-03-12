<script>
export default {
  methods: {
    open() {
      console.log('open');
    },
  },
};
</script>

<template>
  <div class="">
    <button class="bg-black rounded p-2 m-2" @click="open">Open</button>
  </div>
</template>

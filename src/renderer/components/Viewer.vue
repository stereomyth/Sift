<script>
import { mapState } from 'vuex';

export default {
  data: () => ({ current: 0 }),

  computed: {
    focus() {
      return this.images.length ? this.images[this.current] : {};
    },

    ...mapState(['images']),
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div class="m-1 flex-1 relative bg-gray-800 rounded">
      <img
        :src="`file://${focus.path}`"
        class="w-full h-full object-contain absolute inset-0"
        v-if="focus.path"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

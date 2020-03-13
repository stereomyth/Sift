<script>
import { mapState } from 'vuex';

export default {
  computed: {
    focus() {
      return this.images.length ? this.images[this.cursor] : {};
    },

    ...mapState(['images', 'cursor']),
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
      <div class="absolute bottom-0 bg-black opacity-25 rounded m-2 p-1 hover:opacity-75">
        {{ focus.filename }}
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

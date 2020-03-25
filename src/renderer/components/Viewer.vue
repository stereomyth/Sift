<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['images', 'cursor']),
    ...mapGetters(['current']),
  },
};
</script>

<template>
  <div class="flex flex-col ml-1 mt-1">
    <div class="m-1 flex-1 relative bg-gray-800 rounded">
      <img
        :src="`file://${current.path}`"
        class="w-full h-full object-contain absolute inset-0"
        v-if="current.path"
      />
      <div class="meta">
        {{ current.filename }}
      </div>
      <div class="meta right-0">{{ cursor + 1 }} of {{ images.length }}</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.meta {
  @apply absolute bottom-0 bg-black opacity-25 rounded m-2 p-1 leading-none cursor-default;
}
.meta:hover {
  @apply opacity-75;
}
</style>

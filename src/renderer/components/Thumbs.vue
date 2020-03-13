<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    upcomming() {
      return [...Array(3).fill({}), ...this.images].slice(this.cursor, this.cursor + 20);
    },
    ...mapState(['images', 'cursor']),
  },

  methods: {
    ...mapMutations(['focus']),
  },
};
</script>

<template>
  <div class="flex overflow-hidden">
    <div
      v-for="img in upcomming"
      :key="img.id"
      :class="{ 'border-2': img.id === cursor }"
      class="h-40 w-32 flex-shrink-0 m-1 rounded overflow-hidden bg-gray-800"
    >
      <img
        :src="`file://${img.path}`"
        class="h-40 w-32 object-cover"
        @click="focus(img.id)"
        v-if="img.id"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>

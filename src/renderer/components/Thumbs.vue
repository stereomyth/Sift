<script>
import { mapState } from 'vuex';

export default {
  computed: {
    upcomming() {
      return this.images.slice(this.cursor, this.cursor + 20);
    },

    ...mapState(['images', 'cursor']),
  },
};
</script>

<template>
  <div class="flex overflow-hidden">
    <img
      :src="`file://${img.path}`"
      class="h-40 object-contain rounded m-1 block object-cover thing"
      :class="{ 'border-2': img.id === cursor }"
      v-for="img in upcomming"
      :key="img.path"
      @click="current = img.id"
    />
  </div>
</template>

<style lang="postcss" scoped>
.thing {
  max-width: 160px;
}
</style>

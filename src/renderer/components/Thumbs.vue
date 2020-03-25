<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    upcomming() {
      // calc total based on width?
      const total = 31;
      const imgLength = this.images.length;
      const wing = Math.floor(total / 2);

      const start = this.cursor - wing;
      const end = this.cursor + wing + 1;

      const center = this.images.slice(Math.max(start, 0), end);

      // spacer mode
      if (imgLength < total) {
        return [
          ...Array(Math.max(wing - this.cursor, 0)).fill({}),
          ...center,
          ...Array(Math.max(wing - (imgLength - this.cursor - 1), 0)).fill({}),
        ];
      }

      // looping mode
      return [
        ...(start < 0 ? this.images.slice(start) : []),
        ...center,
        ...(end > imgLength ? this.images.slice(0, end - imgLength) : []),
      ];
    },
    array() {},
    ...mapState(['images', 'cursor']),
  },

  methods: {
    ...mapMutations(['focus']),
  },
};
</script>

<template>
  <div class="flex overflow-hidden m-1 mt-0 justify-center rpad">
    <div
      v-for="img in upcomming"
      :key="img.id"
      :class="{ 'border-2': img.id === cursor }"
      class="w-32 flex-shrink-0 m-1 rounded overflow-hidden bg-gray-800"
    >
      <img
        :src="`file://${img.path}`"
        class="w-32 h-full  object-cover"
        @click="focus(img.id)"
        v-if="img.path"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.rpad {
  padding-right: 150px;
}
</style>

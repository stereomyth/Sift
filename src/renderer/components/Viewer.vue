<script>
export default {
  props: ['config', 'files'],
  data: () => ({ current: 0 }),

  computed: {
    focus() {
      return this.files.length ? this.files[this.current] : {};
    },
    upcomming() {
      return this.files.slice(this.current, this.current + 20);
    },

    bg() {
      return `background:url(file://${this.focus.path})`;
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div class="m-1 flex-1 relative">
      <img
        :src="`file://${focus.path}`"
        class="w-full h-full object-contain absolute inset-0"
        v-if="focus.path"
      />
    </div>
    <div class="flex overflow-hidden">
      <img
        :src="`file://${img.path}`"
        class="h-40 object-contain rounded m-1 block object-cover thing"
        :class="{ 'border-2': img.id === current }"
        v-for="img in upcomming"
        :key="img.path"
        @click="current = img.id"
      />
    </div>
    <!-- <div>{{ current }} of {{ files.length }}</div> -->
  </div>
</template>

<style lang="postcss" scoped></style>

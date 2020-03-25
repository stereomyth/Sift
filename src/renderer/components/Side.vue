<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['destDirs', 'srcPath']),
  },
  methods: mapActions(['move']),
};
</script>

<template>
  <div class="flex flex-col overflow-y-auto pr-1 py-1">
    <button
      v-for="choice in destDirs"
      :key="choice.path"
      class="btn m-1 text-left"
      @click="move(choice)"
    >
      {{ choice.name }}
    </button>
  </div>
</template>

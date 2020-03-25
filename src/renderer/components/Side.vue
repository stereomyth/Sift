<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['dirs']),
  },
  methods: {
    ...mapMutations(['addIgnore']),
    ...mapActions(['move']),
  },
};
</script>

<template>
  <div class="flex flex-col overflow-y-auto pr-1 py-1">
    <div v-for="choice in dirs" :key="choice.path" class="flex">
      <button class="btn m-1 text-left flex-1" @click="move(choice)">
        {{ choice.name }}
      </button>
      <button class="p-1 text-gray-800" @click="addIgnore(choice.path)">x</button>
    </div>
  </div>
</template>

<script>
import Side from './Side.vue';
import Top from './Top.vue';
import Viewer from './Viewer.vue';

export default {
  components: { Side, Top, Viewer },
};
</script>

<template>
  <div>
    <Top />
    <div class="flex text">
      <Viewer class="flex-1" />
      <Side />
    </div>
  </div>
</template>

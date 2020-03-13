<script>
import Side from './Side.vue';
import Top from './Top.vue';
import Viewer from './Viewer.vue';
const fs = require('fs');
const { join } = require('path');

export default {
  components: { Side, Top, Viewer },
  data: () => ({ config: { parent: '', source: '' }, folders: [], files: [] }),

  computed: {
    choices() {
      return this.folders.filter(f => f.name !== this.config.source);
    },
  },

  methods: {
    setConfig(change) {
      this.config = { ...this.config, ...change };
      // this.getFiles();
    },

    getFiles() {
      fs.readdir(this.config.parent, { withFileTypes: true }, (error, folders) => {
        this.folders = folders
          .filter(dir => dir.isDirectory())
          .map(dir => ({ path: join(this.config.parent, dir.name), ...dir }));
      });

      fs.readdir(join(this.config.parent, this.config.source), (error, files) => {
        this.files = files.map((file, i) => ({
          path: join(this.config.parent, this.config.source, file),
          filename: file,
          id: i,
        }));
      });
    },
  },

  watch: {
    config() {
      localStorage.config = JSON.stringify(this.config);
    },
  },

  created() {
    if (localStorage.config) {
      this.config = { ...this.config, ...JSON.parse(localStorage.config) };
      this.getFiles();
    }
  },
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <Top :parent="config.parent" :source="config.source" @change="setConfig" />
    <div class="flex text flex-1">
      <Viewer :config="config" :files="files" class="flex-1" />
      <!-- <Side :files="choices" /> -->
    </div>
    <!-- <button class="btn" @click="getFiles">Get</button> -->
  </div>
</template>

<template>
    <div class="theme-container" style="padding-right: 20px;">
      <div class="theme-default-content">
        <img src="/logo.png" alt="Bagisto Documentation" class="logo" style="height: 86px; width: 200px;">

        <h1>Page not found.</h1>

        <div class="warning-container">
          <div>
            <strong>! WARNING</strong> Page Not Found
          </div>

          <div>
            <blockquote style="color:black">{{ getMsg() }}</blockquote>
          </div>
        </div>

        <div class="link">
          <div v-for="url in availableURLs" :key="url.version">
            <a @click="e => getCurrentUrl(e, url.objects[0])">
              {{ url.version.replace(/\//g, '') }}
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
const msgs = [
  `This page does not exist for this version of Bagisto but was found in other versions.`,
]

import configurations from '../../config';

export default {
  data() {
    return {
      currentURL: window.location.href,
      
      availableURLs: [],
    }
  },

  mounted() {
    this.findSimilarPaths(`/${this.currentURL.split('/')[3]}/`, this.currentURL.split('/')[4]);
  },

  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },

    getCurrentUrl(e, url) {
      e.preventDefault();

      window.location.href = url.path;
    },

    findSimilarPaths(targetVersion, targetPath) {
      const similarObjects = [];

      let data = configurations.themeConfig.sidebar;

      for (const version in data) {
        if (version !== targetVersion) {
          const versionData = data[version];

          const matchingObjects = versionData.filter(obj => obj.path.endsWith(`/${targetPath}`));

          if (matchingObjects.length > 0) {
            similarObjects.push({
              version,
              objects: matchingObjects,
            });
          }
        }
      }

      this.availableURLs = similarObjects;
    }
  }
}
</script>

<style scoped>
  .warning-container {
    border: 1px solid #E9E9E9;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 20px 10px 10px 10px;
    margin: 10px 0px 20px 0px;
    background: rgb(242, 226, 196);
  }

  .link {
    display: grid;
    gap: 10px;
    cursor: pointer;
  }
</style>
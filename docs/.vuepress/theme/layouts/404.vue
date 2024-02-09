<template>
  <div class="theme-container" style="padding-right: 20px;">
    <div class="theme-default-content">
      <img src="/logo.png" alt="Bagisto Documentation" class="logo" style="height: 86px; width: 200px;">

      <h1>Page not found.</h1>

      <div class="warning-container">
        <div>
          <strong>! WARNING</strong> You're browsing the documentation for an old version of Bagisto. Consider upgrading your project to Bagisto v2.x.
        </div>

        <div>
          <blockquote>{{ getMsg() }}</blockquote>
        </div>
      </div>

      <div class="link">
        <div>
          <a @click="e => getCurrentUrl(e, '2.x')">
            v2.x.(Latest)
          </a>
        </div>
        <div>
          <a @click="e => getCurrentUrl(e, '1.5.x')">
            v1.5.x.
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

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },

    getCurrentUrl(e, version) {
      e.preventDefault();
      var currentURL = window.location.href;

      var newURL = currentURL.replace('1.x', version);

      window.location.href = newURL;
    }
  }
}
</script>

<style scoped>
  .warning-container {
    border: 1px solid #E9E9E9; /* Added "solid" to specify the border style and "black" for the color */
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 20px 10px 10px 10px;
    margin: 10px 0px 20px 0px;
  }

  .link {
    display: grid;
    gap: 10px;
    cursor: pointer;
  }
</style>
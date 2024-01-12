<template>
  <div class="top-nav">
    <div class="nav-text">
      trest
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 164, 35);
  color: #fff; /* Set your desired text color */
  padding: 0.5rem;
  z-index: 1000; /* Set a high z-index to ensure it's above other elements */
}

.nav-text {
  color: #0e0d0d; /* Set your desired text color */
  text-align: center;
  margin: 0 auto; /* Center the text horizontally */
  font: bold;
}

/* Responsive Styles */
@media (max-width: 500px) {
  .top-nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-text {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>

<template>
  <div v-if="this.$route.path == '/'">
    <div>
      <h2> Web infomation student </h2>
    </div>
    <div>
      <router-link class="link" to="/home">
        <p>Go to home</p>
      </router-link>
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: 'App',
  mounted() {
  }
}
</script>
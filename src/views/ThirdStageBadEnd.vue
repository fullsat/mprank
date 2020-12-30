<template>
  <div class="about">
    <h1>This is 3rd Stage BadEnd</h1>
    <v-btn @click="backHome"> 最初からやり直す </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    backHome: function(){
      this.$store.commit('initLock')
      this.$router.push({path: '/'})
    },
  }
}
</script>


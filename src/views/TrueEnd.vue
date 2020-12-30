<template>
  <div class="about">
    <h1>Congraturation!!!</h1>
    <v-btn @click="backHome"> 最初からやり直す </v-btn>
  </div>
</template>

<script>
export default {
  components: {
  },
  methods: {
    backHome: function(){
      this.$store.commit('initLock')
      this.$router.push({path: '/'})
    },
  },
  mounted: function(){
    this.$store.commit('initLock')
  },
  created: function(){
    if(!this.$store.state.lock1st ||
       !this.$store.state.lock2nd ||
       !this.$store.state.lock3rd) {
      console.log("ズルは良くないよ");
      this.$store.commit('initLock')
      this.$router.push({path: '/'})
    }
  },
}
</script>


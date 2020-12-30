<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h1>Congratulation！！！おめでとうございます！！！</h1>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          これでまた283パスがまた使えるようになった！これからも円滑にプロデュースすることができるぞ・・・！！
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text>
          <p>ここまでプレイしてくださり本当にありがとうございました。</p>
          <p>不具合等ありましたらtwitter:sasa_fullまでご連絡ください。</p>
          <v-btn
            class="primary"
            @click="backHome"
            >
            Topページに戻る
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
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


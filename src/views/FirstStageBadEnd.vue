<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h1>バッドコミュニケーション！ </h1>
        </v-card-title>
      </v-card>
      <br>

      <hint-text
        flavortext="メモ帳が永久にロックされてしまった・・・"
        text="昔のホームページは反転文字というのが流行ったらしいですよ">
      </hint-text>
      <br>

      <v-card>
        <v-card-title>
          またチャレンジしてね
        </v-card-title>
        <v-card-text>
          <v-btn
            id="backhome"
            class="primary"
            @click="backHome">
            最初からやり直す
          </v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import HintText from '@/components/HintText'

export default {
  name: 'FirstStageBadend',
  components: {
    HintText,
  },
  methods: {
    backHome: function(){
      this.$store.commit('initLock')
      this.$router.push({path: '/'})
    },
  }
}
</script>

<style>
#backhome {
  width: 100%;
}
</style>


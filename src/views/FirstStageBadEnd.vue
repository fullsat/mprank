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
        minHeight="150px"
        flavortext="メモ帳が永久にロックされてしまった・・・"
        text="プロデューサー。それでも私のプロデューサーですかー？あと、もう一つ思い出したんですけどー、昔のホームページは選択反転表示で隠し部屋を作ってたらしいんですよねー。iPhoneとiPadではできないらしいですよー。コピペで何とかなりますけどー。">

        <v-avatar
          size="64px"
          class="ht-avatar"
          >
          <img
            src="@/assets/avatar_mamimi.png"
          />
        </v-avatar>

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


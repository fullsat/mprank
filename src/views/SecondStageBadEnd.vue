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
        minHeight="100px"
        flavortext="メモ帳が永久にロックされてしまった・・・"
        text="最初からやり直って意味、勘違いしてませんかぁ？リロードしなくても最初からやり直せますよねぇ？">
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
  name: 'SecondStageBadend',
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

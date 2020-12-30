<template>
  <div class="home">
    <v-container>
      <v-card>
        <v-card-title><h1>Mamimi's Prank</h1></v-card-title>

        <v-divider></v-divider>

        <v-card-subtitle><h3>あらすじ</h3></v-card-subtitle>

        <v-card-text>
          <v-row
            align="center"
          >
            <v-col>
              <div>摩美々が<b>283パス</b>に<b>カギ</b>をかけてしまった。パスワードを聞くもどうやらうろ覚えで忘れてしまったらしい。このままだとアイドルのメモ帳がつかえず、<b>プロデュース活動に支障</b>が出てしまうぞ。何とかしないと・・・</div>
            </v-col>
          </v-row>

        </v-card-text>

        <v-card-text>
          <v-btn 
            id="gamestart"
            color=primary
            rounded
            @click="startGame"> 283パスを取り戻せ！ </v-btn>
        </v-card-text>
      </v-card>

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    startGame: function(){
      this.$store.commit('initLock')
      this.$router.push({path: '/firststage'})
    }
  }
}
</script>

<style>
#gamestart {
  width: 100%;
}
</style>

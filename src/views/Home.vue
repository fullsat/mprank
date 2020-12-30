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
              <div>摩美々が<b>283パス</b>に<b>カギ</b>をかけてしまった。パスワードを聞くもうろ覚えで忘れてしまったらしい。このままだとアイドルのメモ帳がつかえず、<b>プロデュース活動に支障</b>が出てしまうぞ。何とかしないと・・・</div>
            </v-col>
          </v-row>

        </v-card-text>

        <v-card-text>
          <v-btn 
            id="gamestart"
            color=primary
            rounded
            @click="startGame"> 283パスを取り戻せ！ (Game Start)</v-btn>
        </v-card-text>
      </v-card>
      <br>
      <v-card>
        <v-card-title>
          THE IDOL M@STER Shiny Colorsとは？
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>やれば分かる。やるのだ。</p>
          <p><a href="https://shinycolors.enza.fun/">https://shinycolors.enza.fun/</a></p>
          <h4>おススメポイント</h4>
          <ul>
            <li>イラストがいい</li>
            <li>コミュがいい</li>
            <li>グレフェスはそこそこ奥が深い</li>
            <li>楽しい</li>
          </ul>
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

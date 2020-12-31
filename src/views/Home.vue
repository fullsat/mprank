<template>
  <div class="home">
    <v-container>
      <v-card>
        <v-card-title><h2>Mamimi's Prank</h2></v-card-title>

        <v-divider></v-divider>

        <v-card-subtitle><h3>概要</h3></v-card-subtitle>

        <v-card-text>
          <v-row
            align="center"
          >
            <v-col>
              <div>このサイトはTHE IDOL M@STER Shiny Colorsを題材とした同人謎解きゲームです。</div>
              <div>ヒントからパスワードを導き、入力すると次のステージに進めます。</div>
              <div>全3ステージです。</div>
              <div>1stステージは普通です。</div>
              <div>2ndステージは簡単です。</div>
              <div>3rdステージはクリアできなくても怒らないでください。</div>
              <div>シャニマスをテーマとしていますが、謎部分はシャニマスとは一切関係ありません。</div>
            </v-col>
          </v-row>

        </v-card-text>

        <v-card-subtitle><h3>推奨環境</h3></v-card-subtitle>

        <v-card-text>
          <v-row
            align="center"
          >
            <v-col>
              <div>スマホからの操作はあまり推奨してませんが遊べないことはないはずです。</div>
              <div>古いバージョンのブラウザ使ってなければ多分大丈夫です。</div>
              <div>Safari(iPadPro10.5インチ)、Chrome 87.0.4280.88で確認しています。</div>
              <div>古いバージョン使ってると動かないかもしれません。</div>
              <div>端末ごとの表記ズレはあまり考慮してませんが遊べないほどになってたらすみません。</div>
            </v-col>
          </v-row>

        </v-card-text>


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
      this.$store.commit('countUpChallengeNum')
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

<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <h2>Congratulation！！！おめでとうございます！！！</h2>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-subtitle><h3>エンディング</h3></v-card-subtitle>
        <v-card-text>
          <p>これでまた283パスがまた使えるようになった！</p>
          <p>これからも円滑にプロデュースすることができるぞ・・・！！</p>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-subtitle>
          <h3>プレイ評価
          </h3>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text>
          <v-btn
            :href=twUrl
            target="_blank"
            text
            width=250px
            >
            <img width="6%" src="@/assets/twlogo.png"/>
            結果を共有する
          </v-btn>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    <h2>総合評価</h2>
                  </th>
                  <th class="text-left">
                    <v-avatar
                      size="48px"
                      class="ht-avatar"
                      >
                      
                      <img
                        v-if="rank == 'SS'"
                        src="@/assets/ss.png"
                      />
                      <img
                        v-else-if="rank == 'S'"
                        src="@/assets/s.png"
                      />
                      <img
                        v-else-if="rank == 'A'"
                        src="@/assets/a.png"
                      />
                      <img
                        v-else
                        src="@/assets/b.png"
                      />

                    </v-avatar>
                  </th>
                </tr>
              </thead>

              <thead>
                <tr>
                  <th class="text-left">
                    行動
                  </th>
                  <th class="text-left">
                    実績
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1stステージヒント解除</td>
                  <td>
                    <v-icon
                      v-if="$store.state.lock1sthint"
                      >mdi-circle-outline</v-icon>
                  </td>
                </tr>

                <tr>
                  <td>1stステージクリア</td>
                  <td>
                    <v-icon
                      v-if="$store.state.lock1st"
                      >mdi-circle-outline</v-icon>
                  </td>
                </tr>

                <tr>
                  <td>2ndステージヒント解除</td>
                  <td>
                    <v-icon
                      v-if="$store.state.lock2ndhint"
                      >mdi-circle-outline</v-icon>
                  </td>
                </tr>

                <tr>
                  <td>2ndステージクリア</td>
                  <td>
                    <v-icon
                      v-if="$store.state.lock2nd"
                      >mdi-circle-outline</v-icon>
                  </td>
                </tr>

                <tr>
                  <td>3rdステージヒント解除</td>
                  <td>
                    <v-icon
                      v-if="$store.state.lock3rdhint"
                      >mdi-circle-outline</v-icon>
                  </td>
                </tr>

                <tr>
                  <td>3rdステージクリア</td>
                  <td>
                    <v-icon
                      v-if="$store.state.lock3rd"
                      >mdi-circle-outline</v-icon>
                  </td>
                </tr>

                <tr>
                  <td>チャレンジ回数</td>
                  <td>
                    {{ $store.state.challengenum }}回
                  </td>
                </tr>

              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>

        <v-card-subtitle><h3>最後に</h3></v-card-subtitle>
        <v-card-text>
          <p>ここまでプレイしてくださり本当にありがとうございました。</p>
          <p>プレイデータを消したい場合は以下のボタンでTopに戻ってください</p>
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
  data: function(){
    return {
      sns: {
        url: encodeURIComponent('https://fullsat.github.io/mprank/'),
        title: encodeURIComponent("Mamimi's Prank"),
      },
    }
  },
  computed: {
    twUrl: function() {
      let desc = '謎解きゲーム ' + this.sns.title + 'をクリアしました！' + 
                 'ランクは【' + this.rank + '】でした！！やったね '
      return 'https://twitter.com/intent/tweet?url=' + this.sns.url + '&text=' + desc
    },
    rank: function() {
      if(this.$store.state.lock1st &&
         this.$store.state.lock1sthint &&
         this.$store.state.lock2nd &&
         this.$store.state.lock2ndhint &&
         this.$store.state.lock3rd &&
         this.$store.state.lock3rdhint &&
         this.$store.state.challengenum < 4){
        return "SS"
      }

      if(this.$store.state.lock1st &&
         this.$store.state.lock1sthint &&
         this.$store.state.lock2nd &&
         this.$store.state.lock2ndhint &&
         this.$store.state.lock3rd &&
         this.$store.state.lock3rdhint){
        return "S"
      }

      if(this.$store.state.lock1st &&
         this.$store.state.lock2nd &&
         this.$store.state.lock3rd &&
         this.$store.state.lock3rdhint){
        return "A"
      }

      return "B"
    }
  },
  methods: {
    backHome: function(){
      this.$store.commit('clearPlayData')
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


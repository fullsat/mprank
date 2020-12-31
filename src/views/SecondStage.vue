<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>2nd STAGE</v-card-title>
        <v-card-subtitle>
          <h2>流されるままに</h2>
        </v-card-subtitle>
      </v-card>
      <br>

      <v-card>
        <v-card-text>
          <v-timeline
            dense
            >
            <v-timeline-item
              v-for="i in cursor"
              :key="i"
              >
              <template
                v-if="timelineitems[i-1].icon == 'mamimi'"
                v-slot:icon
                >
                <v-avatar
                  size="64px"
                  >
                  <img
                    src="@/assets/avatar_mamimi.png"
                  />
                </v-avatar>
              </template>
              <template
                v-else
                v-slot:icon
                >
                <v-avatar
                  size="64px"
                  class="ht-avatar"
                  color="#888"
                  >
                    <span
                      style="background-color:#888;"
                      class="white--text headline"
                      >
                      P
                    </span>
                </v-avatar>
              </template>

              <span slot="opposite"></span>
              <v-card class="elevation-2">
                <v-card-text>
                  <v-row>
                    <v-col cols=9>
                      <p>
                      {{ timelineitems[i-1].text($store) }}
                      </p>
                      <p>
                        <v-btn
                          small
                          @click="nextCursor(i)"> {{ timelineitems[i-1].buttontext }}</v-btn>
                      </p>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
      <br>

      <v-card>
        <v-card-title>パスワード解除</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="password"
            >
          </v-text-field>
          <p>入力できる回数はあと{{ chance }}回</p>
          <v-btn
            class="primary"
            @click="next">
            解除する
          </v-btn>
        </v-card-text>
      </v-card>

      <v-snackbar
        top
        color="red lighten-1"
        centered
        rounded="true"
        tag="div"
        content-class="snackbar"
        :value="true"
        timeout=2000
        v-model="notification"
        >
        <p>不正解！チャンスはあと{{ chance }} 回</p>
      </v-snackbar>

      <v-snackbar
        top
        color="success"
        centered
        rounded="true"
        tag="div"
        content-class="snackbar"
        :value="true"
        timeout=2000
        v-model="congmessage"
        >
        1st STAGE 解除成功おめでとうございます！
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import jshash from 'jshash'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    chance: function(){
      return this.$store.state.chance2nd
    }
  },
  data: function(){
    return {
      password: '',
      cursor: 1,
      notification: false,
      congmessage: false,
      timelineitems: [
        {
          icon: "P",
          buttontext: "Next",
          text: function() {
            return "あれ！！またパスワード入力画面が出てきた！！入力に成功したはずでは・・・！？"
          }
        },
        {
          icon: "mamimi",
          buttontext: "Next",
          text: function(store) {
            if(store.state.lock2ndhint){
              return "そういえばぁ、パスワードは283passだったきがしますー"
            }else{
              return "そういえばぁ、ファイルに何回かパスワードかけたきがしますー"
            }
          }
        },
        {
          icon: "P",
          buttontext: "Next",
          text: function() {
            return "何ぃ！本当か・・・！！？2回目のパスワードは思い出せないか？"
          }
        },
        {
          icon: "mamimi",
          buttontext: "Next",
          text: function() {
            return "うーん、ちょっと記憶にないですねー"
          }
        },
        {
          icon: "P",
          buttontext: "Next",
          text: function() {
            return "まみみ、思い出してくれ。みんなのプロデュースにメモ帳は重要なんだ。いちいちどれを選択すると何が上昇するか覚えるのも大変だし、攻略サイトを開きながらプレイするのも億劫だ。283パスでそんなメモ帳を500円で買っているんだ。少ないお金だからといってそれを無駄にはしたくない。フェスやってればお金なんて自然にたまるからマニーショップ無料全然嬉しくないし、どうせ90日間継続のチケットで限定なんて当たらない。唯一役に立つのはメモ帳なんだ。そんなメモ帳を失いたくないんだ・・・！"
          }
        },
        {
          icon: "mamimi",
          buttontext: "Next",
          text: function() {
            return "プロデューサー・・・必死ですねー、ドン引きしますー"
          }
        },
        {
          icon: "P",
          buttontext: "Next",
          text: function() {
            return "うっ・・・ちょっと傷つく・・・それはそれとして、本当に何かメモしたこととか無いか？ちょっとしたことでもいいんだ"
          }
        },
        {
          icon: "mamimi",
          buttontext: "Next",
          text: function() {
            return "そういわれてもー、覚えてないのは覚えてないですー"
          }
        },
        {
          icon: "P",
          buttontext: "Next",
          text: function() {
            return "思い出さないと今度からおやつ抜きにするぞ"
          }
        },
        {
          icon: "mamimi",
          buttontext: "Next",
          text: function() {
            return "えー、おやつを人質にとるのは卑怯だと思いまーす。それに、283パス使わなくても、3000冊余ってるじゃないですかぁ。"
          }
        },
        {
          icon: "P",
          buttontext: "Next",
          text: function() {
            return "プロデュースに使えるアイテムは２個までなんだよ・・・"
          }
        },
        {
          icon: "mamimi",
          buttontext: "Next",
          text: function() {
            return "でも、プロデューサーと話してたら、なんかちょっと思い出してきたかもですー"
          }
        },
        {
          icon: "P",
          buttontext: "Next",
          text: function(){
            return "本当か！！"
          }
        },
        {
          callback: function(ctx){
            ctx.unlockhint()
          },
          icon: "mamimi",
          buttontext: "Next",
          text: function(){
            return "はいー、同じようなやり取りをしてたら何か思い出すかもしれませんー"
          }
        },
        {
          callback: function(){
            location.reload(true)
          },
          icon: "P",
          buttontext: "やり直す",
          text: function() {
            return "何回かこういうやり取りしていれば思い出すかもしれないな、最初からやり直してみるか"
          }
        },
      ]
    }
  },
  methods: {
    nextCursor: function(idx) {
      if(idx == this.cursor && idx < this.timelineitems.length){
        this.cursor = idx + 1;
      }

      if(this.timelineitems[idx - 1].callback){
        this.timelineitems[idx - 1].callback(this)
      }
    },
    unlockhint: function(){
      this.$store.commit('unlock', {'slot': 'lock2ndhint'})
    },
    unlockclear: function(){
      this.$store.commit('unlock', {'slot': 'lock2nd'})
    },
    next: function(){
      let hashed_password = jshash.djb2(this.password)
      if(hashed_password == 2121816493){
        this.unlockclear()
        this.$router.push({path: 'thirdstage'})
      }else{
        this.$store.commit('decrementChance', {'slot': 'chance2nd'})
        if(this.$store.state.chance2nd <= 0){
          this.$router.push({path: 'secondstage-badend'})
        }else{
          this.notification = true
        }
      }
    },
  },
  created: function(){
    this.$store.commit('lock',{'slot': 'lock2ndhint'})

    if(this.$store.state.chance2nd <= 0){
      this.$router.push({path: 'secondstage-badend'})
      return
    }

    if(!this.$store.state.lock1st) {
      console.log("ズルは良くないよ");
      this.$store.commit('initLock')
      this.$router.push({path: '/'})
      return
    }

    if(!this.$store.state.success1stagemessage){
      this.$store.commit('unlock',{'slot': 'success1stagemessage'})
      this.congmessage = true
    }
  }
}
</script>

<style>
.snackbar{
  text-align: center;
  color: #222;
  font-size: 20px;
}

</style>

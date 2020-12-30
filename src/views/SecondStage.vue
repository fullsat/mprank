<template>
  <div class="about">
    <h1>SecondStage</h1>
    <v-timeline
      dense
      >
      <v-timeline-item
        v-for="i in cursor"
        :key="i"
        >
        <span slot="opposite"></span>
        <v-card class="elevation-2">
          <v-card-text>
            <v-row>
              <v-col cols=10>
                {{ timelineitems[i-1].text($store) }}
              </v-col>
              <v-col cols=2>
              <v-btn
                small
                @click="nextCursor(i)"> {{ timelineitems[i-1].buttontext }}</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    password：
    <v-text-field
      v-model="password"
      >
    </v-text-field>
    <v-btn @click="next"> 次へ行く </v-btn>
    入力できる回数:{{ chance }}
  </div>
</template>

<script>
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
      timelineitems: [
        {
          buttontext: "Next",
          text: function() {
            return "あれ！！またパスワード画面が出てきた！！入力に成功したはずでは・・・！？"
          }
        },
        {
          buttontext: "Next",
          text: function(store) {
            if(store.state.lock2ndhint){
              return "そういえばぁパスワードは283passだったきがしますぅ"
            }else{
              return "そういえばぁ何回かパスワードかけたファイルに何回かパスワードかけたきがしますぅ"
            }
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "何ぃ！本当か・・・！！？2回目のパスワードは思い出せないか？"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "うーん、ちょっと記憶にないですねぇ"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "まみみ、思い出してくれ。みんなのプロデュースにメモ帳は重要なんだ。いちいちどれを選択すると何が上昇するか覚えるのも大変だし、攻略サイトを開きながらプレイするのも億劫だ。283パスでそんなメモ帳を500円で買っているんだ。少ないお金だからといってそれを無駄にはしたくない。フェスやってればお金なんて自然にたまるからマニーショップ無料全然嬉しくないし、どうせ90日間継続のチケットで限定なんて当たらない。唯一役に立つのはメモ帳なんだ。そんなメモ帳を失いたくないんだ・・・！"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "プロデューサー・・・必死ですねぇ、ドン引きしますぅ"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "うっ、・・・何かメモしたこととか無いか？ちょっとしたことでもいいんだ"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "そういわれてもぉ、覚えてないのは覚えてないですぅ"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "思い出さないと今度からおやつ抜きにするぞ"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "えー、おやつを人質にとるのは卑怯だと思いまーす。それに、283パス使わなくても、3000冊余ってるじゃないですかぁ。"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "プロデュースに使えるアイテムは２個までなんだよ・・・"
          }
        },
        {
          buttontext: "Next",
          text: function() {
            return "でも、プロデューサーと話してたら、なんかちょっと思い出してきたかもですぅ"
          }
        },
        {
          buttontext: "Next",
          text: function(){
            return "本当か！！"
          }
        },
        {
          callback: function(ctx){
            ctx.unlockhint()
          },
          buttontext: "Next",
          text: function(){
            return "はいー、リロード(ページを再読み込み)したら、何か思い出すかもしれませんー"
          }
        },
        {
          callback: function(){
            location.reload(true)
          },
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
      if(this.password == '283pass'){
        this.unlockclear()
        this.$router.push({path: 'thirdstage'})
      }else{
        this.$store.commit('decrementChance', {'slot': 'chance2nd'})
        if(this.$store.state.chance2nd <= 0){
          this.$router.push({path: 'secondstage-badend'})
        }
      }
    },
  },
  created: function(){
    this.$store.commit('lock',{'slot': 'lock2ndhint'})

    if(this.$store.state.chance2nd <= 0){
      this.$router.push({path: 'secondstage-badend'})
    }

    if(!this.$store.state.lock1st) {
      console.log("ズルは良くないよ");
      this.$store.commit('initLock')
      this.$router.push({path: '/'})
    }
  }

}
</script>


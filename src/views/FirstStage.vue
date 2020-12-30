<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>1st STAGE</v-card-title>
        <v-card-subtitle>
          <h2>昔のホームページなんか知らない</h2>
        </v-card-subtitle>
      </v-card>
      <br>

      <hint-text
        minHeight="130px"
        :text="hinttextsrc[hinttextidx].hinttext"
        :hiddentext="hinttextsrc[hinttextidx].hiddentext"
        >
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
        <v-card-title>パスワード解除</v-card-title>
        <v-card-text>
          <v-text-field
            label="パスワードを入力してください"
            @input="changeText($event)"
            >
          </v-text-field>
          <p>入力できる回数はあと{{ chance }}回</p>
          <v-btn
            class="primary"
            @click="next"
            > 
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
    </v-container>
  </div>
</template>

<script>
import HintText from '@/components/HintText'
export default {
  name: 'FirstStage',
  components: {
    HintText,
  },
  data: function() {
    return {
      hinttextidx: 0,
      hinttextsrc: [
        {
          hinttext: "だからー、謝ってるじゃないですかぁ",
          hiddentext: "--- メモ「デビ太郎」",
        },
        {
          hinttext: "なんかー、昔のホームページで流行った方法でメモの場所を隠した記憶はあるんですけどー、パスワードが何かは忘れちゃいましたあ",
          hiddentext: "--- メモ「デビ太郎」",
        },
        {
          hinttext: "ローマ字だったきがしますー",
          hiddentext: "--- メモ「デビ太郎」",
        },
      ],
      password: '',
      notification: false,
    }
  },
  computed: {
    chance: function(){
      return this.$store.state.chance1st
    }
  },
  methods: {
    unlockhint: function(){
      this.$store.commit('unlock', {'slot': 'lock1sthint'})
    },
    unlockclear: function(){
      this.$store.commit('unlock', {'slot': 'lock1st'})
    },
    next: function(){
      if(this.password == 'takayama'){
        this.unlockclear()
        this.$router.push({path: 'secondstage'})
      }else{
        this.$store.commit('decrementChance', {'slot': 'chance1st'})
        if(this.$store.state.chance1st <= 0){
          this.$router.push({path: 'firststage-badend'})
        }else{
          this.notification = true
        }
      }
    },
    changeText: function(event) {
      // unlock hint
      if(event == 'debitaro'){
        this.unlockhint()
        let hiddenhint = '--- メモ「高山」'
        this.hinttextsrc[0].hiddentext = hiddenhint
        this.hinttextsrc[1].hiddentext = hiddenhint
        this.hinttextsrc[2].hiddentext = hiddenhint
      }else{
        let hiddenhint = '--- メモ「デビ太郎」'
        this.hinttextsrc[0].hiddentext = hiddenhint
        this.hinttextsrc[1].hiddentext = hiddenhint
        this.hinttextsrc[2].hiddentext = hiddenhint
      }

      // update string
      this.password = event
    },
    changeHintTextIdx: function(){
      this.hinttextidx = (this.hinttextidx + 1) % this.hinttextsrc.length
    },
  },
  created: function() {
    if(this.$store.state.chance1st <= 0){
      this.$router.push({path: 'firststage-badend'})
    }

    setInterval(this.changeHintTextIdx, 8000)
  }
}
</script>

<style>
#firsthint {
  color: white;
}

.snackbar{
  text-align: center;
  color: #222;
  font-size: 20px;
}

</style>

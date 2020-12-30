<template>
  <div class="about">
    <v-container>
      <v-card>
        <v-card-title>FirstStage</v-card-title>
        <v-card-text>
          <p id="firsthint">{{ hinttext }}</p>
          password：
          <v-text-field
            @input="changeText($event)"
            >
          </v-text-field>
          <v-btn @click="next"> 次へ行く </v-btn>
          入力できる回数:{{ chance }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// %E3%82%A8%E3%83%B3%E3%82%B8%E3%83%AD%E3%82%A6
export default {
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      hinttext: 'debitaro',
      password: '',
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
        }
      }
    },
    changeText: function(event) {
      // unlock hint
      if(event == 'debitaro'){
        this.unlockhint()
        this.hinttext = '%E3%81%9F%E3%81%8B%E3%82%84%E3%81%BE'
      }else{
        this.hinttext = 'debitaro'
      }

      // update string
      this.password = event
    },
  },
  created: function() {
    if(this.$store.state.chance1st <= 0){
      this.$router.push({path: 'firststage-badend'})
    }
  }
}
</script>

<style>
#firsthint {
  color: white;
}
</style>

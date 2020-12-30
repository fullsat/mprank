<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >

    <p>{{ hinttext }}</p>
		<span :style="{color: selectqueue[0]}">■</span>
		<span :style="{color: selectqueue[1]}">■</span>
		<span :style="{color: selectqueue[2]}">■</span>
		<span :style="{color: selectqueue[3]}">■</span>
		<span :style="{color: selectqueue[4]}">■</span>

    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field
        v-model="search"
        label="password"
        dark
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>

      <v-btn 
        small
        @click="next"> パスワード送信 </v-btn>
      入力できる回数:{{ chance }}
    </v-sheet>
    <v-card-text>
      <v-treeview
        hoverable
        open-all
        :items="items"
        :search="search"
        :filter="filter"
      >
      <template v-slot:prepend="{ item }">
        <v-icon @click="selectColor(item)" :color="item.color"> mdi-crop-square </v-icon>
        
      </template>
      </v-treeview>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    selectqueue: ['','','','',''],
    trueselectqueue: ['','','','',''],
    items: [
      {
        id: 1,
        name: 'イルミネーションスターズ',
        searchKey: '',
        color: '',
        children: [
          {
            id: 2,
            name: 'さくらぎまの',
            searchKey: 'blue',
            color: 'gray',
          },
          {
            id: 3,
            name: 'かざのひおり',
            searchKey: '',
            color: 'red',
          },
          {
            id: 4,
            name: 'はちみやめぐる',
            searchKey: '',
            color: 'gray',
          },
        ],
      },
      {
        id: 5,
        name: 'アンティーカ',
        searchKey: '',
        color: '',
        children: [
          {
            id: 6,
            name: 'つきおかこがね',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 7,
            name: 'ゆうこくきりこ',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 8,
            name: 'みつみねゆいか',
            searchKey: '',
            color: 'yellow',
          },
          {
            id: 9,
            name: 'しらせさくや',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 10,
            name: 'たなかまみみ',
            searchKey: 'green',
            color: 'gray',
          },
        ],
      },
      {
        id: 11,
        name: '放課後クライマックスガールズ',
        searchKey: '',
        color: '',
        children: [
          {
            id: 12,
            name: 'こみやかほ',
            searchKey: 'black',
            color: 'gray',
          },
          {
            id: 13,
            name: 'そのだちよこ',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 14,
            name: 'さいじょうじゅり',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 15,
            name: 'もりのりんぜ',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 16,
            name: 'ありすがわなつは',
            searchKey: '',
            color: 'gray',
          },
        ],
      },
      {
        id: 17,
        name: 'アルストロメリア',
        searchKey: '',
        color: '',
        children: [
          {
            id: 18,
            name: 'おおさきあまな',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 19,
            name: 'おおさきてんか',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 20,
            name: 'くわやまちゆき',
            searchKey: '',
            color: 'black',
          },
        ],
      },
      {
        id: 21,
        name: 'ストレイライト',
        searchKey: '',
        color: '',
        children: [
          {
            id: 22,
            name: 'せりざわあさひ',
            searchKey: 'yellow',
            color: 'blue',
          },
          {
            id: 23,
            name: 'まゆずみふゆこ',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 24,
            name: 'いずみめい',
            searchKey: '',
            color: 'gray',
          },
        ],
      },
      {
        id: 25,
        name: 'ノクチル',
        searchKey: '',
        color: '',
        children: [
          {
            id: 26,
            name: 'あさくらとおる',
            searchKey: 'red',
            color: 'gray',
          },
          {
            id: 27,
            name: 'ひぐちまどか',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 28,
            name: 'いちかわひなな',
            searchKey: '',
            color: 'gray',
          },
          {
            id: 29,
            name: 'ふくまるこいと',
            searchKey: '',
            color: 'green',
          },
        ],
      },

    ],
    search: null,
  }),
  computed: {
    filter () {
      return function(item, search) {
        return item['searchKey'].indexOf(search) > -1
      }
    },
    hinttext () {
      return this.activeHint() ?
             'あ、ごめんなさいー、黒、緑、青、赤、黄でしたぁ' :
             '黄、赤、黒、青、緑ってメモしてますぅ'

    },
    chance: function(){
      return this.$store.state.chance3rd
    },
  },
  methods: {
    activeHint: function() {
      return this.trueselectqueue[0] == 'yellow' &&
             this.trueselectqueue[1] == 'red' &&
             this.trueselectqueue[2] == 'black' &&
             this.trueselectqueue[3] == 'blue' &&
             this.trueselectqueue[4] == 'green'
    },
    selectColor: function(item) {
      this.selectqueue.shift()
      this.selectqueue.push(item.color)
      this.trueselectqueue.shift()
      this.trueselectqueue.push(item.searchKey)

      if(this.activeHint()){
        this.unlockhint()
      }
    },
    unlockhint: function(){
      this.$store.commit('unlock', {'slot': 'lock3rdhint'})
    },
    unlockclear: function(){
      this.$store.commit('unlock', {'slot': 'lock3rd'})
    },
    next: function(){
      if(this.search == 'kotasaase'){
        this.unlockclear()
        this.$router.push({path: 'true-end'})
      }else{
        this.$store.commit('decrementChance', {'slot': 'chance3rd'})
        if(this.$store.state.chance3rd <= 0){
          this.$router.push({path: 'thirdstage-badend'})
        }
      }
    },
  },
  created: function(){
    if(!this.$store.state.lock1st ||
       !this.$store.state.lock2nd) {
      console.log("ズルは良くないよ");
      this.$store.commit('initLock')
      this.$router.push({path: '/'})
    }
  },
}
</script>


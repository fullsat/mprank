<template>
  <v-card>
    <v-card-title>
        {{ flavortext }}
    </v-card-title>
    <v-card-text
      class="ht-hintbox"
      >
      <v-divider></v-divider>
      <v-row>
        <v-col
          align="center"
          cols="2"
          lg="1"
          xl="1"
          >
          <v-avatar
            size="36px"
            class="ht-avatar"
            color="#888"
            >
            <span
              v-if="iconimage == ''"
              class="white--text headline"
              >
              P
            </span>
          </v-avatar>
        </v-col>

        <v-col
          cols="9"
          >
          <div class="balloon">
            <v-fade-transition>
              <div
                v-if="trans"
                >
                <span
                  >
                  {{ text  }}
                </span>
                <span
                  class="ht-hiddentext"
                  >
                  {{ hiddentext }}
                </span>
              </div>
            </v-fade-transition>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'HintText',
    props: {
      iconimage: {
        type: String,
        default: () => { return "" }
      },
      text: {
        type: String,
        default: () => { return "" }
      },
      hiddentext: {
        type: String,
        default: () => { return "" }
      },
      flavortext: {
        type: String,
        default: () => { return "会話に何かヒントがないだろうか・・・" }
      },
    },
    data: () => ({
      trans: true,
    }),
    methods: {
      fadeout: function(){
        this.trans = false
        setTimeout(this.fadein, 500)
      },
      fadein: function() {
        this.trans = true
      },
    },
    watch: {
      text: function(){
        this.fadeout()
      },
    },
  }
</script>

<style>

.balloon {
  content: ' ';
  position: relative;
  padding: 10px 20px;
  width: 100%;
  min-height: 200px;
  font-size: 20px;
  border: 0px solid #666;
  border-radius: 4px;
  box-shadow: 0 0 4px -1px #668AD8 inset;
}

.balloon p {
  margin: 0;
  padding: 0;
}

.ht-avatar {
  margin-top: 10px;
}

.ht-hiddentext {
  color: white;
}

.ht-hintbox {
  min-height: 100px;
}
</style>

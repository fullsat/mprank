<template>
  <v-app id="app">
    <div>
      <v-app-bar
        dense
        dark
      >
        <v-toolbar-title>
          <router-link
            id="gametitle"
            to="/">
            Mamimi's Prank
          </router-link>
        </v-toolbar-title>
      </v-app-bar> 
    </div>

    <div id="main">
      <router-view/>
    </div>

    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-text class="py-2 white--text text-center">
          2020 - <v-icon x-small>fab fa-twitter</v-icon> <strong>sasa_full</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<style>
html {
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
}

#main{
  width: 100%;
  height: 100%;

  position: relative;
  background-image: url("//onocom.net/code/wp-content/uploads/2018/01/loop_bg.png");
  background-repeat: repeat;
  animation: bg-slider 23s linear infinite;
  margin: 0;
  padding: 0;
}
@keyframes bg-slider {
  from { background-position: 0 0; }
  to { background-position: -1518px 0; } /* 1518pxとは使用した背景画像の長さ */
}

#gametitle {
  text-decoration: none;
  color: white;
}

</style>

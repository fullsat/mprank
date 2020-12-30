import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    lock1sthint: false,
    lock2ndhint: false,
    lock3rdhint: false,
    lock1st: false,
    lock2nd: false,
    lock3rd: false,
    chance1st: 3,
    chance2nd: 3,
    chance3rd: 3,
  },
  mutations: {
    initLock: function(state) {
      state.lock1sthint = false
      state.lock2ndhint = false
      state.lock3rdhint = false
      state.lock1st = false
      state.lock2nd = false
      state.lock3rd = false
      state.chance1st = 3
      state.chance2nd = 3
      state.chance3rd = 3
    },
    unlock: function(state, payload) {
      if(!payload || !payload.slot){return;}
      state[payload.slot] = true
    },
    lock: function(state, payload) {
      if(!payload || !payload.slot){return;}
      state[payload.slot] = false
    },
    decrementChance: function(state, payload) {
      if(!payload || !payload.slot){return;}
      state[payload.slot]--
    },
  },
  actions: {
  },
})

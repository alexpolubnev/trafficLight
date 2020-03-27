import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//
import Lights from './modules/Lights'


export default new Vuex.Store({
  modules: {
    Lights
  }
})
 
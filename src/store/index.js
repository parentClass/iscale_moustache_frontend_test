import Vue from 'vue'
import Vuex from 'vuex'

/**
 * modules import
 */
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    main
  }
})

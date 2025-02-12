import { createLogger } from 'vuex/types/logger.js'
import { createStore } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default store = createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state() {

  },
  getters: {

  },
  actions: {

  },
  mutations: {

  }
})

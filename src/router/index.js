/**
 * import vue
 */
import Vue from 'vue'
/**
 * import vue router for routing
 */
import Router from 'vue-router'
/**
 * import screens
 */
import MainScreen from '@/components/Screens/MainScreen.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    }
  ]
})

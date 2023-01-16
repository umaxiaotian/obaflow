import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VuePortal from '@linusborg/vue-simple-portal'

Vue.use(VueCompositionAPI)
Vue.use(VuePortal, {
  name: 'portal', // optional, use to rename component
})
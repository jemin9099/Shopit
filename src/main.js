export const stripe = 'https://js.stripe.com/v3'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import  store  from './store/store'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(store)
  .use(router)
  .mount('#app')

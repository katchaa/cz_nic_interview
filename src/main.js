import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '../vuetify.preset.js'

const app = createApp(App)

app.use(vuetify)
app.mount('#app')

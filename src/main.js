import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import store from './store/store'

// Vuetify Styling Deps
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// Use the Vuetify UI framework
Vue.use(Vuetify, {
  theme: {
    primary: "#f44336",
    secondary: "#e57373",
    accent: "#9c27b0",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

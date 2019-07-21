import 'bulma/css/bulma.min.css'
import Vue from 'vue'
import { plugin } from 'vue-function-api'
import App from './pages/App'

Vue.use(plugin)

new Vue({
    render: h => h(App)
}).$mount("#app")
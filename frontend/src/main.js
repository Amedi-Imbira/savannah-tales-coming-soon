import './assets/main.css'
import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faFacebook, faLinkedin, faTwitter)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')

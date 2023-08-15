import './bootstrap';
import Home from './Home.vue';

import {createApp} from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


library.add(faTwitter, faInstagram, faFacebook, faLinkedin);

createApp(Home)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
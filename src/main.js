import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faHome
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import {
  faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";


library.add(faHome);
library.add(faCalendarAlt);
library.add(faUserCircle);
library.add(faEnvelope);
library.add(faTachometerAlt);
library.add(faEdit);
library.add(faTrashAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype.$ebus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
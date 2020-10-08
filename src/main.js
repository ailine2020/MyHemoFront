import Vue from "vue";
import App from "./App.vue";
import "./axios.config";
import router from "./router";
import store from "./store";
import moment from "moment";

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
  faPrescriptionBottleAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faUserSlash
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import {
  faPlusCircle
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
library.add(faPrescriptionBottleAlt);
library.add(faUserSlash);
library.add(faAddressCard);
library.add(faPlusCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.prototype.$ebus = new Vue();

Vue.prototype.moment = moment;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
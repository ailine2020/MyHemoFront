<template>
  <!-- <div id="burger" :class="{ 'active' : isClassActive }" @click="toggleNavMobile">
      <span ></span>
  </div>-->
  <font-awesome-icon
    id="burger"
    icon="bars"
    @click="toggleNavMobile"
  />
</template>

<script>
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);
export default {
  methods: {
    toggleNavMobile() {
      // console.log("clicked burger", this.$ebus);
      this.$ebus.$emit("toggle-nav-mobile");
    }
  }
};
</script>

<style>
@media screen and (max-width: 979px) {
  #burger {
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-right: 40px;
    color: #91c0bb;
  }
}
</style>
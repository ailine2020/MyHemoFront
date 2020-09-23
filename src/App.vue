<template>
  <div id="app">
    <NavMain />
    <router-view />
    <FooterLink />
    <NavFooter />
    <NavMobile />
  </div>
</template>
<script>
import Nav from "@/components/nav/Nav.vue";
import FooterLink from "@/components/footer/FooterLink.vue";
import NavFooter from "@/components/footer/NavFooter.vue";
import NavMobile from "@/components/nav/NavMobile.vue";
import auth from "@/auth";

export default {
  components: { NavMain: Nav, FooterLink, NavMobile, NavFooter },
  beforeCreate() {
    const currentUser = this.$store.getters["user/current"];
    const token = auth.getLocalAuthToken();

    if (token && !currentUser) {
      this.$store.dispatch("user/getUserByToken");
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

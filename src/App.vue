<template>
  <div id="app">
    <NavMain />
    <router-view />
    <FooterLink />
    <NavFooter/>
  </div>
</template>
<script>
import Nav from "@/components/nav/Nav.vue";
import FooterLink from "@/components/footer/FooterLink.vue";
import NavFooter from "@/components/footer/NavFooter.vue";

export default {
  components: { NavMain: Nav, FooterLink, NavFooter }
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

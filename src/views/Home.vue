<template>
  <main class="main">
    <Caroussel />
    <MainMobile />
    <MainImage />
  </main>
</template>

<script>
// @ is an alias to /src
import MainMobile from "@/components/main/MainMobile.vue";
import MainImage from "@/components/main/MainImage.vue";
import Caroussel from "@/components/main/Caroussel.vue";

export default {
  name: "Home",
  components: {
    MainMobile,
    MainImage,
    Caroussel
  },
};
</script>
<style>
.main {
 min-height: calc(100vh - 200px);
 height: auto;
}
</style>

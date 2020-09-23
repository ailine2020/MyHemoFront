<template>
  <section>
    <!-- <h2 v-for="(user,i)" in users :key="i" class="user"> -->
    <h2 class="title-phone" v-if="currentUser">Bonjour {{currentUser.name}}!</h2>
    <figure>
      <img class="jauge" alt="jauge verte" src="../../assets/jaugeVerte.gif" />
    </figure>
  </section>
</template>

<script>
import axios from "axios";
export default {
  // name: "MainMobile",
  components: {},
  data() {
    return {
      name: null,
      userInfos: ""
    };
  },
  methods: {
    async getUsers(id) {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.name = apiRes.data.name;
    }
  },
   computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style>
@media screen and (min-width: 980px) {
  .jauge,
  #burger,
  .title-phone {
    display: none;
  }
}
@media screen and (max-width: 979px) {
  body {
    overflow-x: hidden;
  }

  .caroussel,
  #main-pc,
  .pixMobile,
  .para-main,
  .liens,
  .reseaux,
  .title-main,
  .nav-header {
    display: none;
  }
  .main {
    display: flex;
    flex-direction: column;
  }

  .title-phone {
    display: block;
    color: #a76576;
    text-align: center;
  }

  figure {
    width: 80%;
  }

  .jauge {
    display: block;
    width: 100%;
    /* height: 100%; */
    margin: auto;
  }

  /* #nav-mobile {
    display: flex;
    justify-content: space-around;
    margin: auto;
  } */
}
</style>
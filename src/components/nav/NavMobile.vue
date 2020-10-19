<template>
  <nav id="nav-mobile" :class="isActive && 'is-active'" @click="closeNav">
    <router-link to="/contact">
      <span class="icons">
        <font-awesome-icon icon="envelope" />
      </span>
    </router-link>
    <router-link
      to="dashboard"
      v-if="isSignedIn && currentUser.role === 'admin'"
    >
      <span class="icons">
        <font-awesome-icon icon="tachometer-alt" />
      </span>
    </router-link>
    <ButtonSignout v-if="isSignedIn" />
  </nav>
</template>

<script>
import auth from "@/auth";
import ButtonSignout from "../header/ButtonSignout";
export default {
  name: "navMobile",
  components: {
    ButtonSignout
  },
  data() {
    return {
      auth,
      isActive: false
    };
  },
  computed: {
    isSignedIn() {
      return Boolean(this.$store.getters["user/current"]);
    },
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  methods: {
    closeNav() {
      this.isActive = !this.isActive;
    }
  },
  created() {
    this.$ebus.$on("toggle-nav-mobile", () => {
      this.isActive = !this.isActive;
    });
  }
};
</script>

<style>
@media screen and (min-width: 980px) {
  #nav-mobile {
    display: none;
  }
}

@media screen and (max-width: 979px) {
  #nav-mobile {
    position: fixed;
    right: 0;
    /* height: 72%; */
    min-height: calc(100vh - 200px);
    top: 20.5%;
    background: #c4d5c5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
  }

  #nav-mobile.is-active {
    transform: translateX(0);
  }

  .icons {
    color: #2c3e50;
    font-size: 1.875rem;
    margin: auto;
  }
  .logo {
    width: 120px;
    height: 120px;
  }
}
</style>
<template>
  <header id="nav-logo">
    <figure id="logo">
      <img src="../../assets/Logo4.svg" alt="logo" class="logo" />
    </figure>
    <nav class="nav-header">
      <router-link to="/">
        <span class="icons">
          <font-awesome-icon icon="home" />
        </span>
      </router-link>
      <router-link to="/card">
        <span class="icons">
          <font-awesome-icon icon="address-card" />
        </span>
      </router-link>
      <router-link to="/rappels">
        <span class="icons">
          <font-awesome-icon icon="calendar-alt" />
        </span>
      </router-link>
      <router-link to="/drugs">
        <span class="icons">
          <font-awesome-icon icon="prescription-bottle-alt" />
        </span>
      </router-link>

      <router-link to="/contact">
        <span class="icons">
          <font-awesome-icon icon="envelope" />
        </span>
      </router-link>

      <router-link to="/signin">
        <span class="icons">
          <font-awesome-icon icon="user-circle" />
        </span>
      </router-link>
      <router-link to="/signin">
        <ButtonSignout v-if="isSignedIn" />
      </router-link>
      <router-link
        to="/dashboard"
        v-if="isSignedIn && currentUser.role === 'admin'"
      >
        <span class="icons">
          <font-awesome-icon icon="tachometer-alt" />
        </span>
      </router-link>
    </nav>
  </header>
</template>

<script>
import auth from "@/auth";
import ButtonSignout from "@/components/header/ButtonSignout.vue";

export default {
  name: "Nav",
  components: {
    ButtonSignout
  },
  data() {
    return {
      auth
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
  }
};
</script>

<style>
#nav-logo {
  /* background: rgba(40, 40, 40, 0.1); */
  /* background: #91c0bb; */
  background: #2c3e50;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.icons {
  color: #c4d5c5;
  font-size: 2.5rem;
  margin-right: 3.75rem;
}
.logo {
  width: 200px;
  height: 200px;
  margin-left: 80px;
}

@media screen and (max-width: 979px) {
  .nav-header {
    display: none;
  }
}
</style>
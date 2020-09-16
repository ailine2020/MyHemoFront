<template>
  <nav class="nav-footer">
    <router-link to="/">
      <span class="icons">
        <font-awesome-icon icon="home" />
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
    <router-link to="/signin">
      <span class="icons">
        <font-awesome-icon icon="user-circle" />
      </span>
    </router-link>
    <ButtonSignout v-if="isSignedIn" />
  </nav>
</template>

<script>
import auth from "@/auth";
import ButtonSignout from "../header/ButtonSignout";

export default {
  name: "NavFooter",
  data() {
    return {
      auth
    };
  },
  computed: {
    isSignedIn() {
      return Boolean(this.$store.getters["user/current"]);
    }
  },
  components: {
    ButtonSignout
  }
};
</script>

<style scoped>
@media screen and (max-width: 979px) {
  .nav-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #2c3e50;
    height: 70px;
    width: 100%;
  }
  .icons {
    color: #91c0bb;
    font-size: 1.875rem;
    margin-left: 1rem;
  }
}
</style>
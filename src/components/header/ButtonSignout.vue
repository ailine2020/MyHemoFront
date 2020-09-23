<template>
  <router-link to="/signin">
    <span class="icons">
      <font-awesome-icon
        title="signout"
        @click="signout"
        class="is-clickable icon"
        icon="user-slash"
      />
    </span>
  </router-link>
</template>

<script>
import auth from "@/auth/";

export default {
  name: "Signout",
  methods: {
    signout() {
      auth.signout(this); //  on passe l'instance de vue à la fonction de déconnexion
    }
  }
};
</script>
<style>
.icons {
  cursor: pointer;
  color: red;
}
</style>
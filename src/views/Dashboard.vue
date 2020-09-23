<template>
  <div>
    <h1>Dashboard</h1>
    <p v-if="currentUser">Hello {{currentUser.name}}!</p>
    <NavDashboard />
    <router-view></router-view>
  </div>
</template>

<script>
import NavDashboard from "@/components/dashboard/NavDashboard";
export default {
  data() {
    return {
      userInfos: ""
    };
  },
  components: {
    NavDashboard
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
</style>
<template>
  <header id="nav-logo">
    <img src="../../assets/LOGO_final.svg" alt="logo" class="logo" />
    <nav class="nav-header">
      <router-link to="/">
        <span class="icons">
          <font-awesome-icon icon="home" />
        </span>
      </router-link>

      <router-link to="rappels">
        <span class="icons">
          <font-awesome-icon icon="calendar-alt" />
        </span>
      </router-link>

      <router-link to="contact">
        <span class="icons">
          <font-awesome-icon icon="envelope" />
        </span>
      </router-link>

      <router-link to="se-connecter">
        <span class="icons">
          <font-awesome-icon icon="user-circle" />
        </span>
      </router-link>
      <router-link to="dashboard">
        <span class="icons">
          <font-awesome-icon icon="tachometer-alt" />
        </span>
      </router-link>
    </nav>
    <Burger />
  </header>
</template>

<script>
import Burger from "@/components/header/Burger.vue";

export default {
  name: "Nav",
  components:{Burger}
};
</script>

<style>
#nav-logo {
  background: rgba(40, 40, 40, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icons {
  color: #91c0bb;
  font-size: 2.5rem;
  margin-right: 3.75rem;
}
.logo {
  width: 200px;
  height: 200px;
}
</style>
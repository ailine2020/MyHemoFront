<template>
  <nav class="nav-footer">
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
    <router-link to="/signin">
      <span class="icons">
        <font-awesome-icon icon="user-circle" />
      </span>
    </router-link>
    <Burger />
  </nav>
</template>

<script>
import Burger from "@/components/header/Burger.vue";

export default {
  name: "NavFooter",
  components: { Burger }
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
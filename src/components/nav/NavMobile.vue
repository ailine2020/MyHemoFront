<template>
  <nav id="nav-mobile" :class="isActive && 'is-active'">
    <!-- <nav class="nav-footer"> -->
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
    <router-link to="dashboard">
      <span class="icons">
        <font-awesome-icon icon="tachometer-alt" />
      </span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
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
    height: 75vh;
    top: 27vh;
    background:#91c0bb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
  .logo{
    width: 120px;
    height: 120px;
  }
}
</style>
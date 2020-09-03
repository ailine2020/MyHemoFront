<template>
  <nav id="nav-mobile" :class="isActive && 'is-active'">
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

    <router-link to="/se-connecter">
      <span class="icons">
        <font-awesome-icon icon="user-circle" />
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

<style lang="scss" scoped>
#nav-mobile {
  top: 90px;
  position: fixed;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 90px);
  background: #2c3e50;
  transform: translateX(-220px);
  transition: transform 0.5s ease-in-out;
  z-index: 10;

  a {
    font-weight: bold;
    color: whitesmoke;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav-mobile.is-active {
  transform: translateX(0);
}
</style>
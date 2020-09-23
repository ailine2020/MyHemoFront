<template>
  <form @submit.prevent="signup" class="form">
    <h1 class="title">Signup</h1>
    <label for="name" class="label">Name</label>
    <input id="name" type="text" class="input" v-model="user.name" autocomplete="given-name" />
    <label for="email" class="label">email</label>
    <input id="email" type="email" class="input" v-model="user.email" autocomplete="email" />
    <label for="password" class="label">password</label>
    <input
      id="password"
      type="password"
      class="input"
      v-model="user.password"
      autocomplete="current-password"
    />
    <label for="role" class="label">role</label>
    <input id="role" type="text" class="input" v-model="user.role" autocomplete="role" />
    <Avatar v-if="user.avatar" :avatar="user.avatar" />
    <button class="btn">ok</button>
    <hr />
    <p>
      Already got an account ? Please
      <router-link to="/signin">signin</router-link>
    </p>
  </form>
</template>

<script>
import Avatar from "../components/Avatar";

export default {
  data() {
    return {
      user: {
        name: "titi",
        email: "titi@gmail.com",
        password: "12345",
        role: "admin",
        avatar: ""
      }
    };
  },
  components: {
    Avatar
  },
  methods: {
    // updateAvatar(image) {
    //   console.log(image);
    // },
    signup() {
      const fd = new FormData();
      fd.append("name", this.user.name);
      fd.append("email", this.user.email);
      fd.append("password", this.user.password);
      fd.append("role", this.user.role);
      if (this.user.avatar) fd.append("avatar", this.user.avatar);
      this.$store.dispatch("user/signup", fd);
      this.$router.push("/signin");
    }
  }
};
</script>

<style>
</style>

<template>
  <form @submit.prevent="cguChecked" class="form">
    <h1 class="title">Signup</h1>
    <label for="name" class="label">Name</label>
    <input
      id="name"
      type="text"
      class="input"
      v-model="user.name"
      autocomplete="given-name"
    />
    <label for="email" class="label">email</label>
    <input
      id="email"
      type="email"
      class="input"
      v-model="user.email"
      autocomplete="email"
    />
    <label for="password" class="label">password</label>
    <input
      id="password"
      type="password"
      class="input"
      v-model="user.password"
      autocomplete="current-password"
    />
    <label for="checkbox"
      ><router-link to="/cgu"
        >Conditions générales d'utilisation</router-link
      ></label
    >
    <input id="checkbox" type="checkbox" checked v-model="checked" />
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
        role: "user",
        avatar: ""
      },
      checked: ""
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
    },

    // manque catch!!
    cguChecked() {
      if (!this.checked) {
        alert("Merci d'accepter les conditions générales!");
      } else {
        this.signup();
      }
    }
  }
};
</script>

<style>
</style>

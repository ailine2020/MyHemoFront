<template>
  <main class="main">
    <h1 class="title">Signup</h1>
    <form @submit.prevent="cguChecked" class="form">
      <label for="name" class="label">Name</label>
      <input
        id="name"
        type="text"
        class="input"
        v-model="user.name"
        autocomplete="given-name"
        required
      />
      <label for="email" class="label">email</label>
      <input
        id="email"
        type="email"
        class="input"
        v-model="user.email"
        autocomplete="email"
        required
      />
      <label for="password" class="label">password</label>
      <input
        id="password"
        type="password"
        class="input"
        v-model="user.password"
        autocomplete="current-password"
        required
      />
      <label for="checkbox"
        ><router-link to="/cgu"
          >Conditions générales d'utilisation</router-link
        ></label
      >
      <input id="checkbox" type="checkbox" checked v-model="checked" required />
      <Avatar v-if="user.avatar" :avatar="user.avatar" />
      <button class="btn">ok</button>
    </form>
    <hr />
    <p>
      Already got an account ? Please
      <router-link to="/signin">signin</router-link>
    </p>
  </main>
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
      try {
        const fd = new FormData();
        fd.append("name", this.user.name);
        fd.append("email", this.user.email);
        fd.append("password", this.user.password);
        fd.append("role", this.user.role);
        if (this.user.avatar) fd.append("avatar", this.user.avatar);
        this.$store.dispatch("user/signup", fd);
        alert("Profil crée avec succés !");
        this.$router.push("/signin");
      } catch (err) {
        console.error(err);
        alert("Désolé, cet email n'est pas disponible.");
      }
    },

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
.main {
  min-height: calc(100vh - 200px);
  height: auto;
}
</style>

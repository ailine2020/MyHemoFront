<template>
  <main class="main">
    <h1 class="title">Signin</h1>
    <form v-on:submit.prevent="signin" class="form">
      <label for="email" class="label">email</label>
      <input
        id="email"
        type="email"
        class="input"
        v-model="email"
        autocomplete="email"
        required
      />
      <label for="password" class="label">password</label>
      <input
        id="password"
        type="password"
        class="input"
        v-model="password"
        autocomplete="current-password"
        required
      />
      <button class="btn">ok</button>
    </form>
    <hr>
    <p>
      No account yet ? Please
      <router-link to="/signup">signup</router-link>
    </p>
  </main>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
      email: "gui@gui.gui",
      password: "1234567"
    };
  },
  methods: {
    signin() {
      this.$store
        .dispatch("user/signin", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }
};
</script>

<style>
h1{
  margin-top: 50px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.main {
  min-height: calc(100vh - 200px);
  height: auto;
}
</style>
<template>
  <div>
    <form @submit.prevent="editUser">
      <h3>Edit User</h3>
      <label for="username">Name</label>
      <input type="text" id="name" v-model="name" />
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" />
      <label for="password">Password</label>
      <input type="text" id="password" v-model="password" />
      <label for="birthdate">Birthdate</label>
      <input type="text" id="birthdate" v-model="birthdate" />
      <label for="avatar">Avatar</label>
      <input type="text" id="avatar" v-model="avatar" />
      <label for="role">Role</label>
      <input type="text" id="role" v-model="role" />
      <label for="type_user">type_user</label>
      <input type="text" id="type_user" v-model="type_user" />
      <label for="hemophilia_card">Card</label>
      <input type="text" id="hemophilia_card" v-model="hemophilia_card" />
      <button>ok</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormUserEdit",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      birthdate: "",
      avatar: "",
      role: "",
      type_user: "",
      hemophilia_card: ""
    };
  },
  methods: {
    async editUser() {
      const {
        name,
        email,
        password,
        birthdate,
        avatar,
        role,
        type_user
      } = this.$data;
      try {
        const res = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + this.$route.params.id,
          {
            name,
            email,
            password,
            birthdate,
            avatar,
            role,
            type_user
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async getUser() {
      const res = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + this.$route.params.id
      );
      this.name = res.data.name;
      this.email = res.data.email;
      this.password = res.data.password;
      this.birthdate = res.data.birthdate;
      this.avatar = res.data.avatar;
      this.role = res.data.role;
      this.type_user = res.data.type_user;
      // console.log(res.data);
    }
  },

  created() {
    try {
      this.getUser();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
</style>

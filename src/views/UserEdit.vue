<template>
  <main class="main">
    <h2>MES INFOS</h2>
    <form @submit.prevent="editUser" class="edit-user" v-if="currentUser">
      <label for="username">Name</label>
      <input type="text" id="name" v-model="name" />
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" />
      <!-- <Avatar
        v-if="currentUser"
        :avatar="currentUser.avatar"
        :isEditable="true"
      /> -->
      <button>Mettre à jour</button>
    </form>

    <form class="edit-user">
      <h2 class="title">Mettre à jour votre mot de passe</h2>
      <label for="input-old-password" class="is-clickable"
        >ancien mot de passe</label
      >
      <input
        id="input-old-password"
        type="password"
        class="input"
        v-model="password"
      />
      <label for="input-password" class="is-clickable"
        >nouveau mot de passe</label
      >
      <input
        id="input-password"
        type="password"
        class="input"
        name="password"
      />
      <button class="btn">Mettre à jour</button>
    </form>
    <p class="delete-user" @click="deleteUser(user._id)">
      Supprimer mon compte
    </p>
  </main>
</template>

<script>
// import Avatar from "@/components/Avatar";
import axios from "axios";
import auth from "@/auth/";

export default {
  name: "FormUserEdit",
  data() {
    return {
      user: [],
      name: "",
      email: "",
      password: "",
      // avatar: "",
      isEditMode: false
    };
  },
  methods: {
    async editUser() {
      const {
        name,
        email,
        password //,avatar
      } = this.$data;
      try {
        const res = await axios.patch(
          process.env.VUE_APP_BACKEND_URL +
            `/users/${this.$store.getters["user/current"]._id}`,
          {
            name,
            email,
            password
            // avatar
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async getUser() {
      const res = await axios.get(
        process.env.VUE_APP_BACKEND_URL +
          `/users/${this.$store.getters["user/current"]._id}`
      );
      this.name = res.data.name;
      this.email = res.data.email;
      this.password = res.data.password;
      // this.avatar = res.data.avatar;
      // console.log(res.data);
    },
    async deleteUser() {
      try {
        const apiRes = await axios.delete(
          process.env.VUE_APP_BACKEND_URL +
            `/users/${this.$store.getters["user/current"]._id}`
        );
        this.users = apiRes.data;
        auth.signout(this);
      } catch (err) {
        console.error(err);
      }
    }
  },
  // components: {
  //   Avatar
  // },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
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
.edit-user {
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  box-shadow: black;
  margin: 50px;
  padding: 25px;
}
.delete-user {
  cursor: pointer;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 200px);
  height: auto;
}

/* .avatar {
  width: 70px;
  height: 60px;
} */
</style>

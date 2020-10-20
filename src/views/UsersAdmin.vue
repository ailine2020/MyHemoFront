<template>
  <main class="main">
    <h2>MANAGE USERS</h2>
    <section class="users-all-admin">
      <p v-if="!users || !users.length">
        Pas d'utilisateurs enregistrés pour le moment
      </p>
      <ul v-for="(user, i) in users" :key="i" class="user-admin">
        <li v-if="user" class="user-list">Name: {{ user.name }}</li>
        <li v-if="user" class="user-list">Email: {{ user.email }}</li>
        <!-- <img
          id="avatar"
          v-if="user"
          class="user-list"
          :src="user.avatar"
          alt="avatar"
        /> -->
        <li class="icons-manage">
          <router-link class="link" :to="'/users/' + user._id">
            <span>
              <font-awesome-icon class="icons-admin" icon="edit" />
            </span>
          </router-link>
          <span @click="deleteUsers(user._id)">
            <font-awesome-icon class="icons-admin" icon="trash-alt" />
          </span>
        </li>
      </ul>
    </section>
  </main>
</template>
<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      users: []
    };
  },
  methods: {
    async getUsers() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/"
      );
      this.users = apiRes.data;
      console.log(apiRes.data);
    },
    async deleteUsers(id) {
      const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/users/" + id
      );
      this.users = apiRes.data;
      console.log(apiRes.data);
      this.getUsers();
    }
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  created() {
    try {
      this.getUsers();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style scoped>
.icons-admin {
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: #2c3950;
}
.icons-manage {
  list-style-type: none;
}

#avatar {
  height: 60px;
  width: 70px;
}

.user-admin {
  border: 2px solid #2c3950;
  padding: 20px;
}

.users-all-admin {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 30px;
}
.user-list {
  padding: 10px;
  list-style-type: none;
}
h2 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
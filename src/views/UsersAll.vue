<template>
  <div>
    <h2>Manage Users</h2>
    <ul v-for="(user,i) in users" :key="i" class="user">
      <li v-if="user" class="user-list">Name: {{user.name}}</li>
      <li v-if="user" class="user-list">Email: {{user.email}}</li>
      <img id="avatar" v-if="user" class="user-list" :src="user.avatar" alt="avatar" />
      <li>
        <router-link class="link" :to="'/users/' + user._id">
          <span class="icons">
            <font-awesome-icon icon="edit" />
          </span>
        </router-link>
        <span class="icons" @click="deleteUsers(user._id)">
          <font-awesome-icon icon="trash-alt" />
        </span>
      </li>
    </ul>
  </div>
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
.icons {
  height: 50px;
  width: 50px;
  cursor: pointer;
}
.user {
  border: 1px solid;
  border-radius: 0.3rem;
  list-style: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.user-list {
  border: 1px solid;
}

#avatar {
  height: 60px;
  width: 70px;
}

#card-hemo {
  width: 100px;
  height: 70px;
}
</style>
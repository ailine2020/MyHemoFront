<template>
  <div>
    <h2>Manage Users</h2>
    <table class="users-manage-table">
      <thead>
        <tr class="table-row">
          <th class="table-head">Name</th>
          <th class="table-head">Email</th>
          <th class="table-head">Password</th>
          <th class="table-head">Birthdate</th>
          <th class="table-head">Avatar</th>
          <th class="table-head">Role</th>
          <th class="table-head">Type_user</th>
          <th class="table-head">Hemophilia_card</th>
          <th class="table-head">Edit</th>
          <th class="table-head">Delete</th>
        </tr>
      </thead>
      <tbody v-for="(user,i) in users" :key="i" class="user">
        <td class="table-row" v-if="user">{{user.name}}</td>
        <td class="table-row" v-if="user">{{user.email}}</td>
        <td class="table-row" v-if="user">{{user.password}}</td>
        <td class="table-row" v-if="user">{{user.birthdate}}</td>
        <td class="table-row" v-if="user">{{user.avatar}}</td>
        <td class="table-row" v-if="user">{{user.role}}</td>
        <td class="table-row" v-if="user">{{user.type_user}}</td>
        <td class="table-row" v-if="user">{{user.hemophilia_card}}</td>
        <td class="table-row">
          <router-link class="link" :to="'/users/' + user._id">
            <span class="icons-edit">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
        </td>
        <td @click="deleteUsers(user._id)" class="table-row">
          <span class="icons-edit">
            <font-awesome-icon icon="trash-alt" />
          </span>
        </td>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
// import NavDashboard from "@/components/dashboard/NavDashboard.vue";

export default {
  components: {  },
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
.icons-edit {
  height: 10px;
  width: 10px;
}
td {
  border: 1px solid black;
}
</style>
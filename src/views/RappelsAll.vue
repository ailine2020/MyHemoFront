<template>
  <div>
     <h2>Manage Rappels</h2>
    <table class="users-manage-table">
      <thead>
        <tr class="table-row">
          <th class="table-head">Author</th>
          <th class="table-head">Calendar</th>
          <th class="table-head">Periodicity</th>
          <th class="table-head">Injection</th>
          <th class="table-head">Drug</th>
          <th class="table-head">Rappel</th>
          <th class="table-head">Title</th>
          <th class="table-head">Edit</th>
          <th class="table-head">Delete</th>
        </tr>
      </thead>
      <tbody v-for="(rappel,i) in rappels" :key="i" class="rappel">
        <td class="table-row" v-if="rappel">{{rappel.author}}</td>
        <td class="table-row" v-if="rappel">{{rappel.calendar}}</td>
        <td class="table-row" v-if="rappel">{{rappel.periodicity}}</td>
        <td class="table-row" v-if="rappel">{{rappel.injection_ok}}</td>
        <td class="table-row" v-if="rappel">{{rappel.drugs}}</td>
        <td class="table-row" v-if="rappel">{{rappel.date_rappel}}</td>
        <td class="table-row" v-if="rappel">{{rappel.title}}</td>
        <td class="table-row">
          <router-link class="link" :to="'/rappels/' + rappel._id">
            <span class="icons-edit">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
        </td>
        <td @click="deleteRappels(rappel._id)" class="table-row">
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

export default {
  components: { },
  data() {
    return {
      rappels: []
    };
  },
  methods: {
    async getRappels() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/rappels/"
      );
      this.rappels = apiRes.data;
      console.log(apiRes.data);
    },
    async deleteRappels(id) {
      const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/rappels/" + id
      );
      this.users = apiRes.data;
      console.log(apiRes.data);
      this.getRappels();
    }
  },
  created() {
    try {
      this.getRappels();
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
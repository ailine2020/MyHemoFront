<template>
  <div>
    <h2>Manage Drugs</h2>
    <table class="users-manage-table">
      <thead>
        <tr class="table-row">
          <th class="table-head">Name</th>
          <th class="table-head">Date</th>
          <th class="table-head">Quantité</th>
          <th class="table-head">Edit</th>
          <th class="table-head">Delete</th>
        </tr>
      </thead>
      <tbody v-for="(drug,i) in drugs" :key="i" class="drug">
        <td class="table-row" v-if="drug">{{drug.name}}</td>
        <td class="table-row" v-if="drug">{{drug.date}}</td>
        <td class="table-row" v-if="drug">{{drug.quantite}}</td>
        <td class="table-row">
          <router-link class="link" :to="'/drugs/' + drug._id">
            <span class="icons-edit">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
        </td>
        <td @click="deleteDrugs(drug._id)" class="table-row">
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
      drugs: []
    };
  },
  methods: {
    async getDrugs() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/drugs/"
      );
      this.drugs = apiRes.data;
      console.log(apiRes.data);
    },
    async deleteDrugs(id) {
      const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/drugs/" + id
      );
      this.drugs = apiRes.data;
      console.log(apiRes.data);
      this.getDrugs();
    }
  },
  created() {
    try {
      this.getDrugs();
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
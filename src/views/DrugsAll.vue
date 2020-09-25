<template>
  <div>
    <h2>Manage Drugs</h2>
    <p v-if="!drugs.length">Pas de médicaments enregistrés pour le moment</p>
    <ul v-for="(drug, i) in drugs" :key="i" class="drug">
      <li class="drug-list">Author: {{drug.author.name}}</li>
      <li class="drug-list">Name: {{ drug.name }}</li>
      <li class="drug-list">
        Date: {{ moment(drug.date).format("DD-MM-YYYY") }}
      </li>
      <li class="drug-list">Quantité: {{ drug.quantite }}</li>
      <li>
        <router-link class="link" :to="'/drugs/' + drug._id">
          <span class="icons-edit">
            <font-awesome-icon icon="edit" />
          </span>
        </router-link>
      </li>
      <li @click="deleteDrugs(drug._id)">
        <span class="icons-edit">
          <font-awesome-icon icon="trash-alt" />
        </span>
      </li>
    </ul>
    <AddDrugs />
  </div>
</template>

<script>
import axios from "axios";
import AddDrugs from "../components/dashboard/Form-add-drug";

export default {
  components: { AddDrugs },
  data() {
    return {
      drugs: []
    };
  },
  methods: {
    async getDrugs() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL +
          `/drugs/user/${this.$store.getters["user/current"]._id}`
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
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
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
</style>
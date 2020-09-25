<template>
  <div>
    <form @submit.prevent="addDrugs" class="add-drug">
      <h3>Add Drugs</h3>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />
      <label for="date">Date</label>
      <input type="date" id="date" v-model="date" />
      <label for="quantite">Quantité</label>
      <input type="number" id="quantite" v-model.number="quantite" />
      <button>ok</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "formAddDrugs",
  data() {
    return {
      name: "",
      date: "",
      quantite: 0
    };
  },
  methods: {
    async getDrugs() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/drugs"
      );
      this.author = apiRes.data.author;
      this.name = apiRes.data.name;
      this.date = apiRes.data.date;
      this.quantite = apiRes.data.quantite;
      console.log(apiRes.data);
    },
    async addDrugs() {
      const { name, date, quantite } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/drugs",
          { author: this.currentUser._id, name, date, quantite }
        );
        console.log(apiRes.data);
      } catch (err) {
        console.log(err.message);
      }
      this.getDrugs();
      location.href = "/drugs";
    }
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style>
</style>
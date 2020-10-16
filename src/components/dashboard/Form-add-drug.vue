<template>
  <section class="add-drugs">
    <h3>AJOUTER UN MEDICAMENT</h3>
    <form @submit.prevent="addDrugs" class="add-drug">
      <label for="name" class="label">Name</label>
      <input type="text" id="name" v-model="name" class="input" />
      <label for="date" class="label">Date</label>
      <input type="date" id="date" v-model="date" class="input" />
      <label for="quantite" class="label">Quantité</label>
      <input
        type="number"
        id="quantite"
        v-model.number="quantite"
        class="input"
      />
      <button class="btn-drug">Ajouter</button>
    </form>
  </section>
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
      // this.author = apiRes.data.author;
      this.name = apiRes.data.name;
      this.date = apiRes.data.date;
      this.quantite = apiRes.data.quantite;
      console.log("add drug", apiRes.data);
    },
    async addDrugs() {
      const { name, date, quantite } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL +
            `/drugs/user/${this.$store.getters["user/current"]._id}`,
          {
            // author: this.currentUser._id,
            name,
            date,
            quantite
          }
        );
        console.log(apiRes.data);
      } catch (err) {
        console.log(err.message);
      }
      this.getDrugs();
      // location.href = "/drugs";
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
.add-drug {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border-top: 1px solid #2c3950; */
}
.btn-drug {
  background: #2c3950;
  width: 10%;
  height: 40px;
  color: #fff7c4;
}
.input {
  background: #fff7c4;
  width: 40%;
  height: 20px;
  margin-bottom: 20px;
}
</style>
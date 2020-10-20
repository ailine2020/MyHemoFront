<template>
  <main class="main-drugs">
    <h2>MANAGE MEDICAMENTS</h2>
    <section class="drugs-all">
      <p v-if="!drugs || !drugs.length">
        Pas de médicaments enregistrés pour le moment
      </p>
      <ul v-for="(drug, i) in drugs" :key="i" class="drug">
        <li class="drug-list">Créé par: {{ drug.author }}</li>
        <li class="drug-list">Name: {{ drug.name }}</li>
        <li v-if="currentUser" class="drug-list">
          Date: {{ moment(drug.date).format("DD-MM-YYYY") }}
        </li>
        <li class="drug-list">Quantité: {{ drug.quantite }}</li>
      </ul>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      drugs: []
    };
  },
  methods: {
    async getDrugsAll() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/drugs"
      );
      this.drugs = apiRes.data;
      console.log(apiRes.data);
    }
  },
  created() {
    try {
      this.getDrugsAll();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
.drug {
  border: 2px solid #2c3950;
  padding: 20px;
}
.drugs-all {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 30px;
}
.drug-list {
  padding: 10px;
  list-style-type: none;
}
h2,
h3 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
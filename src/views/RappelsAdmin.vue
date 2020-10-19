<template>
  <main class="section-rappel">
    <h2>MANAGE RAPPELS</h2>
    <section class="rappels-all">
      <p v-if="!rappels.length">Pas de rappel enregistré pour le moment</p>
      <ul v-for="(rappel, i) in rappels" :key="i" class="rappel">
        <li class="rappel-list">Créé par: {{ rappel.author }}</li>
        <li class="rappel-list">
          Date: {{ moment(rappel.date_created).format("DD-MM-YYYY") }}
        </li>
        <li class="rappel-list">Periodicité: {{ rappel.periodicity }}</li>
        <li class="rappel-list">Type de rappel: {{ rappel.title }}</li>
      </ul>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rappels: []
    };
  },
  methods: {
    async getRappelsAll() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/rappels/"
      );
      this.rappels = apiRes.data;
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
      this.getRappelsAll();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
.rappel-list {
  list-style-type: none;
  padding: 10px;
}
.rappel {
  border: 2px solid #2c3950;
  padding: 20px;
}
.rappels-all {
  display: flex;
  margin: 30px;
  justify-content: center;
  flex-flow: row wrap;
}
</style>
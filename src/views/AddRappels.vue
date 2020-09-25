<template>
  <div>
    <form @submit.prevent="addRappels" class="add-rappel">
      <h3>Add Rappels</h3>
      <label for="title">Name</label>
      <input type="text" id="title" v-model="title" />
      <label for="calendar">Date</label>
      <input type="text" id="calendar" v-model="calendar" />
      <label for="periodicity">Periodicity</label>
      <input type="text" id="periodicity" v-model="periodicity" />
      <label for="date-rappel">Rappel</label>
      <input type="date" id="date-rappel" v-model="date_rappel" />
      <button>ok</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "formAddRappels",
  data() {
    return {
      title: "",
      calendar: "",
      periodicity: "",
      date_rappel: ""
    };
  },
  methods: {
    async getRappel() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/rappels"
      );
      this.author = apiRes.data;
      this.title = apiRes.data;
      this.calendar = apiRes.data;
      this.periodicity = apiRes.datas;
      console.log(apiRes.data);
    },
    async addRappels() {
      const { title, calendar, periodicity, date_rappel } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + "/rappels",
          {
            author: this.currentUser._id,
            title,
            calendar,
            periodicity,
            date_rappel
          }
        );
        console.log(apiRes.data);
      } catch (err) {
        console.log(err.message);
      }
      this.getRappel();
      location.href = "/rappels";
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

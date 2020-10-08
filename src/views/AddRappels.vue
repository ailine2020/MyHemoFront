<template>
  <div>
    <form @submit.prevent="addRappels" class="add-rappel">
      <h3>Add Rappels</h3>
      <label for="title">Name</label>
      <input type="text" id="title" v-model="title" />
      <label for="date_created">Date</label>
      <input type="date" id="date_created" v-model="date_created" />
      <label for="periodicity">Periodicity</label>
      <select name="periodicity" v-model="periodicity">
        <option value="everyday">everyday</option>
        <option value="every 2 days">every 2 days</option>
        <option value="every 3 days">every 3 days</option>
        <option value="every 4 days">every 4 days</option>
        <option value="every 5 days">every 5 days</option>
        <option value="every 6 days">every 6 days</option>
        <option value="every 7 days">every 7 days</option>
        <option value="every 14 days">every 14 days</option>
      </select>
      <label for="date-last-rappel">Date Rappel</label>
      <input type="date" id="date-last-rappel" v-model="date_last_rappel" />
      <label for="drug">Drug</label>
      <input type="text" id="drug" v-model="drug" />
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
      date_created: "",
      periodicity: "",
      date_last_rappel: "",
      drug: ""
    };
  },
  methods: {
    async getRappel() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/rappels"
      );
      this.author = apiRes.data;
      this.title = apiRes.data;
      this.date_created = apiRes.data;
      this.periodicity = apiRes.data;
      this.date_last_rappel = apiRes.data;
      this.drug = apiRes.data;
      console.log("-----------", apiRes.data);
    },
    async addRappels() {
      const { title, date_created, periodicity, date_last_rappel, drug } = this.$data;
      try {
        const apiRes = await axios.post(
          process.env.VUE_APP_BACKEND_URL + `/rappels/user/${this.$store.getters["user/current"]._id}`,
          {
            author: this.currentUser._id,
            title,
            date_created,
            periodicity,
            date_last_rappel,
            drug,
          }
        );
        console.log(apiRes.data);
      } catch (err) {
        console.log(err.message);
      }
      this.getRappel();
      // location.href = "/rappels";
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

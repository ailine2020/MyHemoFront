<template>
  <main class="create-rappels">
    <h1>Add Rappels</h1>
    <form @submit.prevent="addRappels" class="add-rappel">
      <label for="title" class="label">Name</label>
      <input type="text" id="title" v-model="title" class="input" />
      <label for="date_created" class="label">Date</label>
      <input
        type="date"
        id="date_created"
        v-model="date_created"
        class="input"
      />
      <label for="periodicity" class="label">Periodicity</label>
      <select name="periodicity" v-model="periodicity" class="input">
        <option value="everyday">everyday</option>
        <option value="every 2 days">every 2 days</option>
        <option value="every 3 days">every 3 days</option>
        <option value="every 4 days">every 4 days</option>
        <option value="every 5 days">every 5 days</option>
        <option value="every 6 days">every 6 days</option>
        <option value="every 7 days">every 7 days</option>
        <option value="every 14 days">every 14 days</option>
      </select>
      <label for="date-last-rappel" class="label">Date Rappel</label>
      <input
        type="date"
        id="date-last-rappel"
        v-model="date_last_rappel"
        class="input"
      />
      <button class="btn-rappel">ok</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "formAddRappels",
  data() {
    return {
      title: "Injection",
      date_created: "",
      periodicity: "every 2 days",
      date_last_rappel: ""
    };
  },

  methods: {
    async addRappels() {
      const { title, date_created, periodicity, date_last_rappel } = this.$data;
      try {
        await this.$store.dispatch("rappels/add", {
          title,
          date_created,
          periodicity,
          date_last_rappel
        });
        this.$router.push("rappels")
      } catch (err) {
        console.error(err);
      }
    }
  },
  computed: {
    rappels() {
      return this.$store.getters["rappels/all"];
    },
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  }
};
</script>

<style>
.create-rappels {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.add-rappel {
  margin-top: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid #2c3950;
  padding: 25px;
}
.input {
  background: #fff7c4;
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
}

.btn-rappel {
  background: #2c3950;
  width: 30%;
  height: 40px;
  color: #fff7c4;
}
</style>

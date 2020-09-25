<template>
  <div>
    <h2>Manage Rappels</h2>
    <p v-if="!rappels.length">Pas de rappel enregistré pour le moment</p>
    <ul v-for="(rappel,i) in rappels" :key="i" class="rappel">
      <li class="rappel-list">Author: {{rappel.author.name}}</li>
      <li class="rappel-list">Calendar: {{ moment(rappel.calendar).format('DD-MM-YYYY') }}</li>
      <li class="rappel-list">Periodicity: {{rappel.periodicity}}</li>
      <li class="rappel-list">Injection: {{rappel.injection_ok}}</li>
      <li class="rappel-list">Drug: {{rappel.drugs}}</li>
      <li class="rappel-list">Rappel: {{ moment(rappel.date_rappel).format('DD-MM-YYYY') }}</li>
      <li class="rappel-list">Type: {{rappel.title}}</li>
      <router-link class="link" :to="'/rappels/' + rappel._id" tag="li">
        <span class="icons-edit">
          <font-awesome-icon icon="edit" />
        </span>
      </router-link>
      <li>
        <span @click="deleteRappels(rappel._id)" class="icons-edit">
          <font-awesome-icon icon="trash-alt" />
        </span>
      </li>
    </ul>
    <router-link class="link" :to="'/add-rappels'">
      <span class="icons-create">
        <font-awesome-icon icon="plus-circle" />
      </span>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "rappels",
  components: {},
  data() {
    return {
      rappels: []
    };
  },
  methods: {
    async getRappels() {
      console.log("WHAAAT ?");
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL +
          `/rappels/user/${this.$store.getters["user/current"]._id}`
      );
      console.log(apiRes);
      this.rappels = apiRes.data;
      console.log(apiRes.data);
    },
    async deleteRappels(id) {
      const apiRes = await axios.delete(
        process.env.VUE_APP_BACKEND_URL + "/rappels/" + id
      );
      this.rappels = apiRes.data;
      console.log(apiRes.data);
      this.getRappels();
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
  cursor: pointer;
}
.rappel-list {
  list-style-type: none;
}
.rappel {
  border: 1px solid black;
}
</style>
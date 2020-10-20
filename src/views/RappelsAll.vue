<template>
  <main class="main">
    <h2>MES RAPPELS</h2>
    <section class="rappels-all">
      <p v-if="!rappels.length">Pas de rappel enregistré pour le moment</p>
      <ul v-for="(rappel, i) in rappels" :key="i" class="rappel">
        <li v-if="currentUser" class="rappel-list">
          Créé par: {{ rappel.author.name }}
        </li>
        <li v-if="currentUser" class="rappel-list">
          Date: {{ moment(rappel.date_created).format("DD-MM-YYYY") }}
        </li>
        <li v-if="currentUser" class="rappel-list">
          Periodicité: {{ rappel.periodicity }}
        </li>
        <li v-if="currentUser" class="rappel-list">
          Date Rappel:
          {{ moment(rappel.date_last_rappel).format("DD-MM-YYYY") }}
        </li>
        <li v-if="currentUser" class="rappel-list">
          Type de rappel: {{ rappel.title }}
        </li>
        <li class="icons-manage">
          <router-link class="link" :to="'/rappels/' + rappel._id">
            <span id="icons-edit">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
          <span @click="deleteRappels(rappel._id)" id="icons-edit">
            <font-awesome-icon icon="trash-alt" />
          </span>
        </li>
      </ul>
    </section>
    <section class="create-rappels">
      <router-link class="link-create" :to="'/add-rappels'">
        <span>
          <font-awesome-icon id="icons-create" icon="plus-circle" />
        </span>
      </router-link>
    </section>
  </main>
</template>

<script>
// import axios from "axios";

export default {
  name: "rappels",
  components: {},
  data() {
    return {};
  },
  methods: {
    created() {
      this.$store.dispatch("rappels/getRappels");
    },
    async deleteRappels(id) {
      try {
        await this.$store.dispatch("rappels/deleteRappels", id),
          this.$router.push("rappels");
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
#icons-edit {
  height: 30px;
  width: 30px;
  cursor: pointer;
  color: #2c3950;
}
.icons-manage {
  display: flex;
  justify-content: space-around;
}
.rappel-list,
.icons-manage {
  list-style-type: none;
  padding: 10px;
}
.rappel {
  border: 2px solid #2c3950;
  padding: 20px;
}
.delete-icon {
  cursor: pointer;
}
.rappels-all {
  display: flex;
  margin: 30px;
  justify-content: center;
  flex-flow: row wrap;
}

#icons-create {
  height: 50px;
  width: 50px;
  color: #2c3950;
}
</style>
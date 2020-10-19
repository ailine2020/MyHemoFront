<template>
  <main class="main-drugs">
    <h2>MES MEDICAMENTS</h2>
    <section class="drugs-all">
      <p v-if="!drugs || !drugs.length">
        Pas de médicaments enregistrés pour le moment
      </p>
      <ul v-for="(drug, i) in drugs" :key="i" class="drug">
        <li v-if="currentUser" class="drug-list">
          Créé par: {{ drug.author.name }}
        </li>
        <li class="drug-list">Name: {{ drug.name }}</li>
        <li v-if="currentUser" class="drug-list">
          Date: {{ moment(drug.date).format("DD-MM-YYYY") }}
        </li>
        <li class="drug-list">Quantité: {{ drug.quantite }}</li>
        <li class="icons-manage-drug">
          <router-link class="link" :to="'/drugs/' + drug._id">
            <span class="icons-edit">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
          <button>
            <span class="icons-edit" @click="deleteDrugs(drug._id)">
              <font-awesome-icon icon="trash-alt" />
            </span>
          </button>
        </li>
        <button @click="decrementStock(drug._id)">
          -
        </button>
      </ul>
    </section>
    <AddDrugs />
  </main>
</template>

<script>
import AddDrugs from "../components/dashboard/Form-add-drug";

export default {
  components: { AddDrugs },
  methods: {
    created() {
      this.$store.dispatch("drugs/getDrugs");
    },
    async deleteDrugs(id) {
      try {
        await this.$store.dispatch("drugs/deleteDrugs", id),
          this.$router.push("drugs");
      } catch (err) {
        console.error(err);
      }
    },
    async decrementStock(id) {
      try {
        await this.$store.dispatch("drugs/decrementStock", id);
      } catch (err) {
        console.error(err);
      }
    }
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"];
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    },
    drugs() {
      return this.$store.getters["drugs/all"];
    }
  }
};
</script>

<style>
.icons-edit {
  height: 40px;
  width: 40px;
  cursor: pointer;
  color: #2c3950;
}
.icons-manage-drug {
  display: flex;
  justify-content: center;
}
.drug {
  display: flex;
  flex-direction: column;
  margin: 30px;
  justify-content: center;
  border: 2px solid #2c3950;
  padding: 20px;
  list-style-type: none;
  width: 50%;
}
.drugs-all {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.drug-list {
  padding: 10px;
}
h2,
h3 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
<template>
  <div>
    <form @submit.prevent="upload" class="upload-card">
      <label for="recto" class="r-v">recto</label>
      <input
        class="is-hidden"
        id="recto"
        type="file"
        @change="fileSelectRecto"
      />
      <label for="verso" class="r-v">verso</label>
      <input
        class="is-hidden"
        id="verso"
        type="file"
        @change="fileSelectVerso"
      />
      <button>Upload</button>
    </form>
    <figure class="cards">
      <img class="card" :src="currentUser.card.recto" alt="card" />
      <img class="card" :src="currentUser.card.verso" alt="card" />
    </figure>
  </div>
</template>

<script>
import axios from "axios";
import { apiHandler } from "../api/handler";
export default {
  name: "card",
  data() {
    return {
      recto: null,
      verso: null,
      rectoImage: "",
      versoImage: "",
      handler: apiHandler()
    };
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  methods: {
    fileSelectRecto(event) {
      this.recto = event.target.files[0];
      this.rectoImage = URL.createObjectURL(this.recto);
    },
    fileSelectVerso(event) {
      this.verso = event.target.files[0];
      this.versoImage = URL.createObjectURL(this.verso);
    },
    upload() {
      console.log("form ?");
      const fd = new FormData();
      fd.append("card", this.recto);
      fd.append("card", this.verso);
      this.handler
        .patch("/card/user/" + this.$store.getters["user/current"]._id, fd)
        // .post("/card/user/" + this.$store.getters["user/current"]._id, fd)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
      this.getCard();
      // location.href = "/card";
    },
    async getCard() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL +
          `/card/user/${this.$store.getters["user/current"]._id}`
      );
      this.recto = apiRes.data;
      this.verso = apiRes.data;
      // this.rectoImage = URL.createObjectURL(this.recto);
      // this.versoImage = URL.createObjectURL(this.verso);
      console.log("---------------++++", apiRes.data);
    }
  }
  // created() {
  //   try {
  //     this.getCard();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
};
</script>

<style>
.r-v {
  cursor: pointer;
}
.is-hidden {
  display: none;
}
.cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  width: 50%;
  height: 50%;
}
.upload-card {
  margin-top: 30px;
}
</style>
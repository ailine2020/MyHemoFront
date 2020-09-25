<template>
  <div>
    <form @submit.prevent="upload">
      <label for="recto">recto</label>
      <input
        class="is-hidden"
        id="recto"
        type="file"
        @change="fileSelectRecto"
      />
      <label for="verso">recto</label>
      <input
        class="is-hidden"
        id="verso"
        type="file"
        @change="fileSelectVerso"
      />
      <button>Upload</button>
    </form>
    <figure>
      <img v-if="rectoImage" :src="rectoImage" alt="card" />
      <img v-if="versoImage" :src="versoImage" alt="card" />
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
      rectoImage :"",
      versoImage :"",
      handler: apiHandler()
    };
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
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  async getCard() {
    const apiRes = await axios.get(process.env.VUE_APP_BACKEND_URL + "/card");
    this.recto = apiRes.data;
    this.verso = apiRes.data;
    console.log(apiRes.data);
  }
};
</script>

<style>
.is-hidden {
  display: none;
}
</style>
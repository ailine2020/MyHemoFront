<template>
  <form @submit.prevent="upload">
    <label for="recto">recto</label>
    <input class="is-hidden" id="recto" type="file" @change="fileSelectRecto" />
    <label for="verso">recto</label>
    <input class="is-hidden" id="verso" type="file" @change="fileSelectVerso" />
    <button>Upload</button>
  </form>
</template>

<script>
//import axios from "axios";
import { apiHandler } from "../api/handler";
export default {
  name: "card",
  data() {
    return {
      recto: null,
      verso: null,
      handler: apiHandler()
    };
  },
  methods: {
    fileSelectRecto(event) {
      this.recto = event.target.files[0];
    },
    fileSelectVerso(event) {
      this.verso = event.target.files[0];
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
        });
    }
  }
};
</script>

<style>
.is-hidden {
  display: none
}
</style>
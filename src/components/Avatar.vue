<template>
  <div class="avatar" :style="{'background-image': `url(${tmpURL || avatarImg})`}">
    <form v-if="isEditable">
      <label for="input-file" class="label">Avatar</label>
      <input id="input-file" type="file" @change="handleAvatar" accept="image/*" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmpURL: null
    };
  },
  name: "Avatar",
  props: ["avatar", "isEditable"],
  //Computed
  //- comme une method (return une valeur) mais ne prend pas de paramètre
  //- fais du cache grâce à une data ou prop détectée avec this.taData
  //- utilisable dans le template et ne sera pas toujours ré-exécuté
  computed: {
    avatarImg() {
      if (this.tmpURL) return this.tmpURL;
      else if (typeof this.$props.avatar === "object")
        return URL.createObjectURL(this.$props.avatar);
      else return this.$props.avatar;
    }
  },
  methods: {
    handleAvatar(e) {
      this.tmpURL = URL.createObjectURL(e.target.files[0]);
    }
  }
};
</script>

<style>
</style>
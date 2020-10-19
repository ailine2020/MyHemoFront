<template>
  <section class="main-mobile">
    <div class="title-jauge">
      <h2 class="title-phone" v-if="currentUser">
        Bonjour {{ currentUser.name }}!
      </h2>
      <figure>
        <img
          class="jauge"
          alt="jauge verte"
          src="../../assets/jaugeVerte.gif"
        />
      </figure>
    </div>
    <div class="min">
      <section class="min-rappel" v-if="currentUser">
        <h2 class="min-title">Mes rappels</h2>
        <ul v-for="(rappel, i) in rappels" :key="i">
          <li v-if="currentUser" class="min-list">{{ rappel.title }}</li>
          <li v-if="currentUser" class="min-list">
            le : {{ moment(rappel.date_last_rappel).format("DD-MM-YYYY") }}
          </li>
        </ul>
        <!-- <button class="btn-rappel" @click="decrementStock">Injection ok</button> -->
      </section>
      <section class="min-drug" v-if="currentUser">
        <h2 class="min-title">Stock</h2>
        <ul v-for="(drug, i) in drugs" :key="i">
          <li v-if="currentUser" class="min-list">
            Il reste {{ drug.quantite }} {{ drug.name }}
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainMobile",
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    },
    rappels() {
      console.log("check at rappels computed");
      return this.$store.getters["rappels/all"];
    },
    drugs() {
      console.log("check at drugs computed");
      return this.$store.getters["drugs/all"];
    }
  }
  // methods: {
  //   decrementStock() {
  //     console.log(this.$route);
  //     this.$store.dispatch("drugs/decrementStock", this.$route.params.id);
  //   }
  // }
};
</script>

<style>
@media screen and (min-width: 980px) {
  .jauge,
  #burger,
  .title-phone,
  .main-mobile {
    display: none;
  }
}
@media screen and (max-width: 979px) {
  body {
    overflow-x: hidden;
  }

  .caroussel,
  #main-pc,
  .pixMobile,
  .para-main,
  .liens,
  .reseaux,
  .title-main,
  .nav-header {
    display: none;
  }
  .main-mobile {
    /* min-height: calc(100vh - 200px); */
    height: 100vh;
    display: flex;
    align-items: center;
    background-image: url("../../assets/bleu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .min {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    margin-right: 10%;
  }
  .min-drug,
  .min-rappel {
    background-image: url("../../assets/postIt.gif");
    background-repeat: no-repeat;
    background-size: cover;
    width: 150px;
    height: 150px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-right: 100px; */
  }
  .min-title {
    font-size: 15px;
  }
  .title-phone {
    display: block;
    color: #a76576;
    text-align: center;
  }

  figure {
    width: 80%;
    margin: auto;
  }

  .jauge {
    width: 40%;
    /* height: 100%; */
  }
  .min-list {
    list-style: none;
    padding: 5px;
    font-size: 12px;
  }

  /* #nav-mobile {
    display: flex;
    justify-content: space-around;
    margin: auto;
  } */
}
</style>
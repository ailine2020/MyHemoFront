<template>
  <section>
    <h2 class="title-phone">Bonjour!</h2>
    <img class="jauge" alt="jauge verte" src="../../assets/jaugeVerte.gif" />
  </section>
</template>

<script>
export default {
  name: "MainMobile"
};
</script>

<style>
@media screen and (min-width: 980px) {
  .jauge,
  .title-phone {
    display: none;
  }
}
@media screen and (max-width: 979px) {
  body {
    overflow-x: hidden;
  }

  .caroussel,
  .pixMobile,
  .para-main,
  .liens,
  .reseaux,
  .title-main {
    display: none;
  }

  .main {
    display: flex;
    flex-direction: column;
  }

  .title-phone {
    display: block;
    color: #a76576;
    text-align: center;
  }

  .jauge {
    display: block;
    width: 412px;
    height: 412px;
    margin: auto;
  }

  .nav-footer {
    display: flex;
    justify-content: space-around;
    margin: auto;
  }

  .nav-header {
    position: absolute;
    right: 0;
    height: 75vh;
    top: 27vh;
    background: rgba(255, 247, 196, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 20%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
  }

  .nav-active {
    transform: translateX(0%);
  }

}
</style>
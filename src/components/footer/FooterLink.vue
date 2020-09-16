<template>
  <footer>
    <!-- <NavFooter /> -->
    <article class="liens">
      <a href="/plan-du-site">Plan du site</a>
      <a href="/mentions-legales">Mentions légales</a>
      <router-link to="contact">Contact</router-link>
    </article>
    <article class="reseaux">
      <a href="https://www.facebook.com/">
        <img src="../../assets/FB.svg" alt="facebook" class="rs" />
      </a>
      <a href>
        <img src="../../assets/TWITTER.svg" alt="twitter" class="rs" />
      </a>
      <a href>
        <img src="../../assets/INSTAGRAM.svg" alt="instagram" class="rs" />
      </a>
    </article>
  </footer>
</template>

<script>
// import NavFooter from "@/components/footer/NavFooter";

export default {
  name: "FooterLink",
  // components: {NavFooter}
};
</script>

<style>

@media screen and (min-width: 980px) {
  footer {
    margin-top: 15vh;
    background: rgba(40, 40, 40, 0.2);
    display: flex;
    justify-content: space-between;
  }

  .rs {
    margin-left: 20px;
    width: 30px;
    height: 30px;
    color: #91c0bb;
  }

  .reseaux {
    display: flex;
    flex-direction: row;
  }

  .liens > a {
    text-decoration: none;
    color: #91c0bb;
  }

  .nav-footer,
  .jauge,
  .title-phone {
    display: none;
  }
}

@media screen and (max-width: 979px){
  footer{
    display: none;
  }
}
</style>
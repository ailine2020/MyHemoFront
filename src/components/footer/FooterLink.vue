<template>
  <footer>
    <article class="liens">
      <router-link to="plan-du-site">Plan du site</router-link>
      <router-link to="cgu">Conditions générales d'utilisation</router-link>
      <router-link to="contact">Contact</router-link>
    </article>
    <article class="reseaux">
      <a href="https://www.facebook.com/">
        <span class="icons-footer">
          <font-awesome-icon :icon="['fab', 'facebook']"/>
        </span>
      </a>
      <a href="https://www.twitter.com/">
        <span class="icons-footer">
          <font-awesome-icon :icon="['fab', 'twitter']"/>
        </span>
      </a>
      <a href="https://www.instagram.com/">
        <span class="icons-footer">
          <font-awesome-icon :icon="['fab', 'instagram']"/>
        </span>
      </a>
    </article>
  </footer>
</template>

<script>
export default {
  name: "FooterLink"
};
</script>

<style>
@media screen and (min-width: 980px) {
  footer {
    bottom: 0;
    margin-top: 15vh;
    background: #2c3950;
    display: flex;
    justify-content: space-between;
  }

  .icons-footer {
    margin-left: 20px;
    font-size: 1.875rem;
    color: #c4d5c5;
  }

  .reseaux {
    display: flex;
    flex-direction: row;
  }

  a {
    text-decoration: none;
    color: #c4d5c5;
  }

  .nav-footer,
  .jauge,
  .title-phone {
    display: none;
  }
}

@media screen and (max-width: 979px) {
  footer {
    display: none;
  }
}
</style>
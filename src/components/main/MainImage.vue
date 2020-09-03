<template>
  <section class="main-pc">
    <img class="pixMobile" src="../../assets/mobileAplati.jpg" alt="mobile" />
    <article>
      <h2 class="title-main">Lorem ipsum dolor sit amet consectetur</h2>
      <p class="para-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rem fuga culpa magni
        nam deleniti beatae iusto tempore repellat quisquam. Ipsum repudiandae nihil neque asperiores doloremque
        voluptate ut magnam officiis!
      </p>
    </article>
  </section>
</template>

<script>
export default {
  name: "MainImage"
};
</script>

<style>
.main-pc {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 100px;
}

.pixMobile {
  margin-left: 60px;
  width: 574px;
  height: 382px;
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 70px;
}

.title-main {
  font-weight: 700;
  font-size: 30px;
}

.para-main {
  font-weight: 400;
  font-size: 20px;
}
</style>
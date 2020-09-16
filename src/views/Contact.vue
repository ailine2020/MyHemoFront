<template>
  <form @submit.prevent="sendMessage" class="form">
    <h1 class="title">Contact</h1>
    <p>Une remarque? une suggestion? N'hésitez pas à m'écrire.</p>
    <label for="full_name" class="label">Votre nom</label>
    <input id="full_name" type="text" class="input" v-model="full_name" />
    <label for="from" class="label">Votre email</label>
    <input type="from" class="input" v-model="from" />
    <label for="subject" class="label">Sujet</label>
    <input id="subject" type="text" class="input" v-model="subject" />
    <label for="message" class="label">Votre message</label>
    <textarea id="message" cols="30" rows="10" class="input" v-model="message"></textarea>
    <button class="btn">Envoyer</button>
  </form>
</template>

<script>
import { apiHandler } from "./../api/handler";
const handler = apiHandler();

export default {
  name: "Contact",
  data() {
    return {
      subject: "test",
      full_name: "titi tata",
      from: "titi@gmail.bar",
      message: "hello! this is a test"
    };
  },
  methods: {
    async sendMessage() {
      await handler.post("/contact", {
        subject: this.subject,
        full_name: this.full_name,
        from: this.from,
        message: this.message
      });
    }
  }
};
</script>

<style scoped>
.form {
  margin: 50px;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-start;
  /* border: 2px solid ; */
}

.input {
  background: lightgrey;
  width: 50%;
  height: 20px;
  margin-bottom: 20px;
}

#message{
  height: 20vh;
}
.btn {
  background: black;
  width: 30%;
  height: 40px;
  color: white;
}
</style>

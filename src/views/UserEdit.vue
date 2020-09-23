<template>
  <div>
    <form @submit.prevent="editUser" class="edit-user">
      <h3>Edit User</h3>
      <label for="username">Name</label>
      <input type="text" id="name" v-model="name" />
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
      <Avatar v-if="currentUser" :avatar="currentUser.avatar" :isEditable="true" />
      <input type="text" id="role" v-model="role" />
      <button>ok</button>
    </form>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import axios from "axios";

export default {
  name: "FormUserEdit",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      avatar: "",
      role: "",
      isEditMode: false
    };
  },
  methods: {
    async editUser() {
      const { name, email, password, avatar, role } = this.$data;
      try {
        const res = await axios.patch(
          process.env.VUE_APP_BACKEND_URL + "/users/" + this.$route.params.id,
          {
            name,
            email,
            password,
            avatar,
            role
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    async getUser() {
      const res = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/users/" + this.$route.params.id
      );
      this.name = res.data.name;
      this.email = res.data.email;
      this.password = res.data.password;
      this.avatar = res.data.avatar;
      this.role = res.data.role;
      // console.log(res.data);
    }
  },
  components: {
    Avatar
  },
  computed: {
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    }
  },
  created() {
    try {
      this.getUser();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style>
.edit-user {
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  box-shadow: black;
  margin: 50px;
  padding: 25px;
}

.avatar {
  width: 70px;
  height: 60px;
}

#hemophilia_card {
  width: 50px;
  height: 35px;
}
</style>

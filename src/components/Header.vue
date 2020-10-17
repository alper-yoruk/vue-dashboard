<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a @click="onClick">Logout</a>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  methods: {
    onClick() {
      const user = auth.currentUser();

      user
        .logout()
        .then(() => {
          this.$router.push({
            name: "signin",
            params: { userLoggedOut: true }
          });
        })
        .catch(() => {
          alert("asdas");
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

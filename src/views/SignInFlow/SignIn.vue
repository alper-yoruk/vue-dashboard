<template>
  <div
    class="container"
    :class="{
      'light-background': !isDarkMode,
      'dark-background': isDarkMode
    }"
  >
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" alt="logo" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" alt="logo" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{
            'ligth-field': isDarkMode,
            'dark-field': !isDarkMode
          }"
          v-model="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          :class="{
            'ligth-field': isDarkMode,
            'dark-field': !isDarkMode
          }"
          v-model="password"
          required
        />
        <button>Sign In</button>
      </form>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-mode': !isDarkMode }"
        >Forgot Your Password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
// import * as netlifyIdentityWidget from "netlify-identity-widget";

import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import Notification from "@/components/Notification";
import { auth } from "@/main";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  // mounted() {
  //   netlifyIdentityWidget.open();
  // }
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then(() => {
          this.$router.replace("/");
        })
        .catch(error => {
          alert("error: " + error);
        });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 16px;
  padding-bottom: 24px;
}
.login {
  width: 400px;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
}
</style>

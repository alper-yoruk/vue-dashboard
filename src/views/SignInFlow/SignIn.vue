<template>
  <div
    class="container"
    :class="{
      'light-background': !isDarkMode,
      'dark-background': isDarkMode
    }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" alt="logo" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" alt="logo" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <input
        :class="{
          'ligth-field': isDarkMode,
          'dark-field': !isDarkMode
        }"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{
          'ligth-field': isDarkMode,
          'dark-field': !isDarkMode
        }"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
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
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
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

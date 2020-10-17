<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
    <div v-show="show" class="bubble">
      <div class="message">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false
    };
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px;
  background: $blue;
}

.message {
  @include medium-text;
  color: $white;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

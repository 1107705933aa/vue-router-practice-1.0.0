<template>
  <div class="test">
    <div class="block"></div>
    <span>我是test3</span>
    <button @click="jump">返回上一级</button>
    <button>请点击</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted: {},
  methods: {
    // this.$router.go(n) 向前或者向后跳转n个页面，n可为正整数或负整数
    jump() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.block {
  width: 100%;
  height: 10px;
}

button {
  font-size: 16px;
}
</style>
<template>
  <div id="login">
    <div class="login-warp">
      <ul class="menu-tab">
        <li v-for="menuTab in menuTabs" :key="menuTab.id" :class="{'current': menuTab.current}" @click="toggleMenu(item)">{{menuTab.text}}</li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      menuTabs: [
        { text: '登录', current: true },
        { text: '注册', current: false }
      ],
      isActive: true
    };
  },
  created() {},
  mounted() {},
  methods: {
    toggleMenu(data) {
      console.log(data)
    }
  },
};
</script>

<style scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}

.login-warp {
  width: 330px;
  margin: auto;
}

.menu-tab {
  text-align: center;
}

.menu-tab li {
  display: inline-block;
  width: 88px;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
}

.current {
  background-color: rgba(0, 0, 0, .1);
}
</style>
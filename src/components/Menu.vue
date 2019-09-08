<template>
  <div>
    <a-menu v-model="currentTab" mode="horizontal" :theme="theme" @click="handleClick">
      <a-menu-item key="user">
        <a-icon type="user" />Пользователь
      </a-menu-item>
      <a-menu-item key="setting">
        <a-icon type="setting" />Настройки
      </a-menu-item>
      <a-menu-item style="float: right">
        <a-switch
          defaultChecked
          @change="changeTheme"
          checkedChildren="Тёмная тема"
          unCheckedChildren="Светлая тема"
        />
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      currentTab: ["user"],
      theme: "dark"
    };
  },
  methods: {
    handleClick(e) {
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    }
  }
};
</script>

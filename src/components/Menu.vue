<template>
  <div>
    <a-menu v-model="currentTab" mode="horizontal" :theme="theme" @click="handleClick">
      <a-menu-item key="search">
        <a-icon type="search" />Поисковик спутников
      </a-menu-item>
      <a-menu-item key="apartment">
        <a-icon type="apartment" />Модель спутникового канала связи
      </a-menu-item>
      <a-menu-item key="calculator">
        <a-icon type="calculator" />Расчет параметров
      </a-menu-item>
      <a-menu-item key="user" style="float: right">
        <a-icon type="user" />
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

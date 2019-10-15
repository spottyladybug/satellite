<template>
  <div>
    <a-menu id="menu" v-model="currentTab" mode="horizontal" :theme="getTheme" @click="handleClick">
      <a-menu-item v-if="isProfileLoaded" key="search">
        <router-link :to="{ name: 'searchInfo' }">
          <a-icon type="search" />Найти
        </router-link>
      </a-menu-item>
      <a-menu-item v-if="isProfileLoaded" key="rocket">
        <router-link :to="{ name: 'satellites' }">
          <a-icon type="rocket" />Спутники
        </router-link>
      </a-menu-item>
      <a-menu-item v-if="isProfileLoaded" key="calculator">
        <router-link :to="{ name: 'calculator' }">
          <a-icon type="calculator" />Расчет параметров
        </router-link>
      </a-menu-item>
      <a-sub-menu style="float: right" key="locale">
        <span slot="title">
          <a-icon type="global" />
        </span>
        <a-menu-item>Русский</a-menu-item>
        <a-menu-item>English</a-menu-item>
      </a-sub-menu>
      <a-menu-item v-if="!isProfileLoaded" key="register" style="float: right">
        <router-link :to="{ name: 'register' }">Присоединиться</router-link>
      </a-menu-item>
      <a-menu-item v-if="!isProfileLoaded" key="login" style="float: right">
        <router-link :to="{ name: 'login' }">Войти</router-link>
      </a-menu-item>
      <a-sub-menu v-if="isProfileLoaded" key="user" style="float: right">
        <span slot="title">
          <a-icon type="user" />
          <span>{{ userName }}</span>
        </span>
        <a-menu-item>
          <a-icon type="user" />
          <span>{{ userName }}</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item>
          <router-link :to="{ name: 'profile' }">
            <a-icon type="profile" />
            <span>Профиль</span>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link :to="{ name: 'settings' }">
            <a-icon type="setting" />
            <span>Настройки</span>
          </router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item @click="logout">
          <a-icon type="logout" />
          <span>Выход</span>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="help" style="float: right">
        <a-icon type="question-circle" />
      </a-menu-item>
      <a-menu-item style="float: right">
        <a-switch :defaultChecked="isDarkTheme" @change="changeTheme" />
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { AUTH_LOGOUT } from "src/store/actions/auth";
import { THEME } from "src/store/actions/theme";

export default {
  name: "Menu",
  data() {
    return {
      currentTab: ["user"]
    };
  },
  computed: {
    ...mapGetters([
      "isDarkTheme",
      "getTheme",
      "getName",
      "isAuthenticated",
      "isProfileLoaded"
    ]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      userName: state => `${state.user.name}`
    })
  },
  methods: {
    logout: function() {
      this.$store
        .dispatch(AUTH_LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
    handleClick(e) {
      this.current = e.key;
    },
    changeTheme(checked) {
      this.$store.commit(THEME, checked);
    }
  }
};
</script>
<style scoped>
ul#menu{
    position: relative;
    z-index: 2;
}
</style>

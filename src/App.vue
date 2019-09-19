<template>
    <a-locale-provider :locale="ru_RU">
        <div id="app">
            <Menu/>
            <div class="main-container">
                <div class="center-container">
                    <Login/>
                </div>
            </div>
        </div>
    </a-locale-provider>
</template>

<script>
    import ru_RU from 'ant-design-vue/lib/locale-provider/ru_RU'
    import Menu from './components/Menu.vue'
    import {USER_REQUEST} from './store/actions/user'
    import Login from "./components/Login";

    export default {
        name: 'app',
        data() {
            return {
                ru_RU,
            }
        },
        components: {
            Login,
            Menu
        },
        created: function () {
            if (this.$store.getters.isAuthenticated) {
                return this.$store.dispatch(USER_REQUEST)
            }
        }
    }
</script>
<style>
    .center-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10% 0;
    }
</style>

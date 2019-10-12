<template>
    <a-locale-provider :locale="ru_RU">
        <div id="app">
            <a-layout>
                <Menu/>
                <a-layout-content class="main-container">
                    <router-view></router-view>
                </a-layout-content>
                <Footer/>
            </a-layout>
        </div>
    </a-locale-provider>
</template>

<script>
    import ru_RU from 'ant-design-vue/lib/locale-provider/ru_RU'
    import Menu from 'src/components/Menu.vue'
    import Footer from 'src/components/Footer.vue'
    import {USER_REQUEST} from 'src/store/actions/user'

    export default {
        name: 'app',
        data() {
            return {
                ru_RU,
            }
        },
        components: {
            Menu,
            Footer
        },
        created: function () {
            if (this.$store.getters.isAuthenticated) {
                return this.$store.dispatch(USER_REQUEST)
            }
        }
    }
</script>
<style>
    div#app {
        position: relative;
        overflow: hidden;
    }
    .ant-layout {
        height: 100%;
    }
    .main-container.ant-layout-content {
        min-height: 600px;
        padding: 5% 0%;
    }
    .main-container {
        display: flex;
        align-items: center;
        flex-flow: column;
        z-index: 0;
        background-image: url(./assets/background.jpg);
    }
</style>

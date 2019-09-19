<template>
    <div>
        <a-menu v-model="currentTab" mode="horizontal" :theme="getTheme" @click="handleClick">
            <a-menu-item key="rocket">
                <a-icon type="rocket"/>
                Спутники
            </a-menu-item>
            <a-menu-item key="search">
                <a-icon type="search"/>
                Местоположение
            </a-menu-item>
            <a-menu-item key="apartment">
                <a-icon type="apartment"/>
                Модель канала связи
            </a-menu-item>
            <a-menu-item key="calculator">
                <a-icon type="calculator"/>
                Калькулятор
            </a-menu-item>
            <a-menu-item key="read">
                <a-icon type="read"/>
                Руководство
            </a-menu-item>
            <a-menu-item :visible="isProfileLoaded" key="user" style="float: right">
                <a-dropdown>
                    <a class="ant-dropdown-link" href="#">
                        <a-icon type="user"/>
                        {{ userName }}
                    </a>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <router-link to="logout">Выход</router-link>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
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
    import {mapGetters, mapState} from 'vuex'
    import {AUTH_LOGOUT} from '../store/actions/auth'
    import {THEME} from '../store/actions/theme'

    export default {
        name: "Menu",
        data() {
            return {
                currentTab: ["user"]
            };
        },
        computed: {
            ...mapGetters(['getTheme', 'getName', 'isAuthenticated', 'isProfileLoaded']),
            ...mapState({
                authLoading: state => state.auth.status === 'loading',
                userName: state => `${state.user.name}`,
            }),
        },
        methods: {
            logout: function () {
                this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
            },
            handleClick(e) {
                this.current = e.key;
            },
            changeTheme(checked) {
                this.$store.commit(THEME, checked ? "dark" : "light");
            }
        }
    };
</script>

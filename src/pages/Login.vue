<template>
    <a-form
        id="login-form"
        :form="form"
        class="login-form"
        @submit="login"
    >
        <a-form-item>
            <a-input
                v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Пожалуйста, введите свой логин!' }] }
        ]"
                placeholder="Логин"
            >
                <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0,0,0,.25)"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input
                v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Пожалуйста, введите свой пароль!' }] }
        ]"
                type="password"
                placeholder="Пароль"
            >
                <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0,0,0,.25)"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-checkbox
                v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
            >
                Запомнить меня
            </a-checkbox>
            <a
                class="login-form-forgot"
                href=""
            >
                Забыть пароль
            </a>
            <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
            >
                Войти
            </a-button>
            Или <a href="">
            присоединиться сейчас!
        </a>
        </a-form-item>
    </a-form>
</template>

<script>
    import {AUTH_REQUEST} from 'src/store/actions/auth'

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            login(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        const {username, password} = this;
                        this.$store.dispatch(AUTH_REQUEST, {username, password}).then(() => {
                            return this.$router.push({ name: 'home' })
                        })
                    }
                });
            },
        },
    };
</script>
<style>
    form#login-form {
        padding-left: 10%;
    }
    
    #login-form .login-form {
        max-width: 300px;
    }

    #login-form .login-form-forgot {
        float: right;
    }

    #login-form .login-form-button {
        width: 100%;
    }
</style>

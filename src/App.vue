<template>
<a-locale-provider :locale="ru_RU">
  <div id="app">
    <Menu/>
  </div>
</a-locale-provider>
</template>

<script>
import ru_RU from 'ant-design-vue/lib/locale-provider/ru_RU'
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  data() {
    return {
      ru_RU,
    }
  },
  components: {
    Menu
  }
}
</script>

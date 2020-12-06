<template>
  <div>
    <Login v-if="!auth" />
    <Generator v-else />
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import Generator from '../components/Generator.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Login,
    Generator
  },
  computed:{
    ...mapGetters(['auth'])
  }
}
</script>

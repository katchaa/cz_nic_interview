<script setup>
import { ref, defineEmits } from 'vue'
import AppUserMenu from '@/components/layout/AppUserMenu.vue'

const emit = defineEmits(['toggleDrawer'])

const drawerVisible = ref(true)

const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value
  emit('toggleDrawer', drawerVisible.value)
}

</script>

<template>
  <header>
    <v-app-bar color="primary" elevation="1">

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer" icon="mdi-menu"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Ferda</v-app-bar-title>
      <template v-slot:append>
        <v-btn
          ref="userMenuBtn"
          class="mr-4"
          id="activator"
        >
          <div class="d-flex align-center ga-4">
            <v-icon icon="mdi-account-circle" size="25"></v-icon>
            <p class="text-uppercase text-button font-weight-regular">Jan Musílek</p>
          </div>
        </v-btn>
      </template>

      <AppUserMenu activator="#activator" />

    </v-app-bar>
  </header>
</template>

<style scoped>

</style>

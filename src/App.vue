<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppDrawer from '@/components/layout/AppDrawer.vue'
import AppMainGrid from '@/components/layout/AppMainGrid.vue'
import { ref } from 'vue'

const drawerVisible = ref(true)

const toggleDrawer = (event) => {
  drawerVisible.value = event
}
const drawerItems = [
  {
    label: 'Registry',
    icon: 'mdi-earth',
  },

  {
    label: 'Home',
    icon: 'mdi-home',
  }
]
</script>

<template>
  <v-app>
    <AppHeader
      @toggle-drawer="toggleDrawer"
    />

    <AppDrawer
      :visible="drawerVisible"
      :items="drawerItems" />

    <AppMainGrid></AppMainGrid>
  </v-app>
</template>

<style scoped>
</style>

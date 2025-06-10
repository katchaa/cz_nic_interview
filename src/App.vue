<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppDrawer from '@/components/layout/AppDrawer.vue'
import AppMainGrid from '@/components/layout/AppMainGrid.vue'
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import { drawerItems, userInformation } from '@/utils/placeholdes.utils.js'

// Variables
const drawerVisible = ref(false)
const data = ref({})

// Methods
const toggleDrawer = (event) => {
  return drawerVisible.value = event
}

const getData = async () => {
  await axios.get('domain-detail.json')
    .then((response) => {
      data.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

// Hooks
onBeforeMount(() =>  {
  getData()
})

defineExpose({getData})
</script>

<template>
  <v-app>
    <AppHeader
      :user-info="userInformation"
      @toggle-drawer="toggleDrawer"
    />

    <AppDrawer
      :visible="drawerVisible"
      :items="drawerItems"
    />

    <template v-if="data">
      <AppMainGrid
        :data="data"
      />
    </template>

  </v-app>
</template>

<style scoped>
</style>

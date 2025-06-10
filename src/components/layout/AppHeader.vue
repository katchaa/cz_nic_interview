<script setup>
import { ref, defineEmits, computed } from 'vue'
import AppUserMenu from '@/components/layout/AppUserMenu.vue'

const props = defineProps({
  userInfo: {
    type: {
      firstName: String,
      lastName: String,
      role: String,
    },
    required: true
  }
})
const emit = defineEmits(['toggleDrawer'])

// Variables
const drawerVisible = ref(true)
const fullName = computed(() => `${props.userInfo.firstName} ${props.userInfo.lastName}`)

// Methods
const toggleDrawer = () => {
  drawerVisible.value = !drawerVisible.value
  emit('toggleDrawer', drawerVisible.value)
}

defineExpose({ toggleDrawer, drawerVisible, fullName })
</script>

<template>
  <header>
    <v-app-bar color="primary" elevation="1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="toggleDrawer"
          icon="mdi-menu"
          data-qa="header-menu-btn"
        ></v-app-bar-nav-icon>
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
            <p class="text-uppercase text-button font-weight-regular">{{fullName}}</p>
          </div>
        </v-btn>
      </template>

      <AppUserMenu
        activator="#activator"
        :user-name="fullName"
        :user-role="props.userInfo.role"
      />
    </v-app-bar>
  </header>
</template>

<style scoped>
</style>

<script setup>
import { ref } from 'vue'

defineProps({
  visible: {
    type: Boolean,
    default: false,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

// Variables
const activeItem = ref(0)
</script>

<template>
  <v-navigation-drawer
    :width="250"
    :permanent="visible"
  >
      <v-list-item>
        <v-list-item-title
          class="text-uppercase text-subtitle-2 font-weight-medium text-secondary-darken-1"
        >
          Applications
        </v-list-item-title>
      </v-list-item>
    <v-divider></v-divider>

    <v-list-item
      v-for="(item, index) in items" :key="item.label"
      :subtitle="item.label"
      :prepend-icon="item.icon"
      :active="activeItem === index"
      active-class="bg-warning"
      @click="activeItem = index"
    ></v-list-item>
  </v-navigation-drawer>
</template>

<style scoped>
/* remove default active list item overlay */
::v-deep(.v-list-item--active .v-list-item__overlay) {
  background-color: transparent !important;
}
</style>

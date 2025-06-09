<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <v-card max-height="400" class="ma-5">
    <template v-if="title">
      <v-card-title class="text-body-1 bg-secondary mb-3">
          {{title }}
      </v-card-title>
    </template>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<style scoped></style>

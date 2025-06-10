<script setup>
const props = defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <v-card class="mb-5">
    <template v-if="props.title">
      <v-card-title class="text-body-2 bg-secondary mb-3">
          {{ props.title }}:
      </v-card-title>
    </template>
    <div class="px-5 pb-3 text-body-2" :class="!props.title ? 'py-3' : ''">
      <slot />
    </div>
  </v-card>
</template>

<style scoped></style>

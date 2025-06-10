<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="d-flex align-items-center">
    <v-icon
      :icon="props.item.active ? 'mdi-check-circle' : 'mdi-close-circle'"
      size="16"
      :color="props.item.active ? 'success' : 'error'"
      class="mr-1"
    />
    <span
      class= "font-weight-light"
      :class="props.item.active ? 'text-success' : 'text-error'"
    >
         {{ props.item.description }}
       </span>
  </div>
</template>

<style scoped>
</style>

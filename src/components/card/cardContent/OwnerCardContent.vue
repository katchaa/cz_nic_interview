<script setup>
import { labels } from '@/utils/label_transcript.utils.js'
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  isVerbose: {
    type: Boolean,
    default: false
  }
})

// Variables
const modifiedData = computed(() => {
  const data = props.data
  return {
    handle: {
      value: data?.handle,
      publish: null,
      highlight: true
    },
    organization: {
      value: data?.organization,
      publish: data?.publish.organization,
      highlight: false
    },
    name: {
      value: data?.name,
      publish: data?.publish.name,
      highlight: false
    }
  }
})
</script>

<template>
  <v-row
    dense
    v-for="(value, key) in modifiedData" :key="key"
  >
    <v-col
      cols="3"
      lg="4"
      class="d-flex align-baseline ga-2"
    >
      <v-icon
        :icon="value.publish ? 'mdi-eye' : 'mdi-eye-off'"
        :class="value.publish !== null ? (value.publish ? 'text-success' : 'text-error') : 'text-transparent'"
        size="16"
      />
      <p class="font-weight-medium">{{labels[key]}}:</p>
    </v-col>
    <v-col v-if="value">
      <p :class="value.highlight ? 'text-primary' : ''">
        {{value.value}}
      </p>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

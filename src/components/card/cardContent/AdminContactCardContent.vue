<script setup>
import { labels } from '@/utils/label_transcript.utils.js'
import { computed } from 'vue'
const props = defineProps({
  data:  {
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
  const contact = props.data
  if (props.isVerbose) {
    return {
      handle: {
        value: contact?.handle,
        publish: null,
        highlight: true
      },
      organization: {
        value: contact?.organization,
        publish: contact?.publish.organization,
        highlight: false
      },
      name: {
        value: contact?.name,
        publish: contact?.publish.name,
        highlight: false
      }
    }
  }

  return props.data
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
        v-if="isVerbose"
        :icon="value.publish ? 'mdi-eye' : 'mdi-eye-off'"
        :class="value.publish !== null ? (value.publish ? 'text-success' : 'text-error') : 'text-transparent'"
        size="16"
      />
      <p class="font-weight-medium">{{isVerbose ? labels[key] : value.label}}:</p>
    </v-col>

    <v-col>
      <p :class="value.highlight ? 'text-primary' : ''">
        {{value.value}}
      </p>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

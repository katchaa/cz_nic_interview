<script setup>
import { labels } from '@/utils/label_transcript.utils.js'
import { computed } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// Variables
const modifiedData = computed(() => {
  const keySet = props.data
  return {
    handle: {
      value: keySet?.handle,
      highlight: true
    },
    registrar: {
      value: keySet?.registrar,
      highlight: true
    },
    dns_keys: {
      value: keySet?.dns_keys,
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
      <p class="font-weight-medium">{{labels[key]}}:</p>
    </v-col>
    <v-col>
      <template  v-if="key === 'dns_keys'">
        <p v-for="dnsKey in value.value" :key="dnsKey"
           class="text-caption"
        >
          {{dnsKey}}
        </p>
      </template>
      <p v-else :class="value.highlight ? 'text-primary' : ''">
        {{value.value}}
      </p>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

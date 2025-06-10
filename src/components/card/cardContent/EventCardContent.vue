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
const orderedData = computed(() => {
  const order = ['registered', 'updated', 'transferred', 'unregistered']

  const result = {}
    order.forEach(item => {
      result[item] = props.data[item]
    })

  return result
})

</script>
<template>
    <v-row dense v-for="(value, key) in orderedData" :key="key">
      <v-col cols="3">
        <p class="font-weight-medium">{{labels[key]}}:</p>
      </v-col>
      <template v-if="value">
        <v-col cols="4">
          <p>{{value.timestamp}}</p>
        </v-col>
        <template v-if="value.registrar_handle">
          <v-col cols="2">
            <p class="font-weight-medium">{{labels['registrar_handle']}}:</p>
          </v-col>
          <v-col>
            <p class="text-primary">{{value.registrar_handle}}</p>
          </v-col>
        </template>
      </template>
    </v-row>
  </template>

<style scoped>

</style>

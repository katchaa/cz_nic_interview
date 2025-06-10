<script setup>
import { labels } from '@/utils/label_transcript.utils.js'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <v-row
    dense
    v-for="(value, key) in props.data" :key="key"
  >
    <v-col
      cols="3"
      lg="4"
      class="d-flex align-baseline ga-2"
    >
      <p class="font-weight-medium">{{labels[key]}}:</p>
    </v-col>
    <v-col v-if="value">
      <template  v-if="key === 'dns'">
        <p v-for="(ip, index) in value" :key="index"
        >
          {{ip.name}} ({{ip.ip_address}})
        </p>
      </template>
      <p v-else class="text-primary">{{value}}</p>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

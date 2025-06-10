<script setup>
import { labels } from '@/utils/label_transcript.utils.js'
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// Variables
const passwordVisible = ref(false)
</script>

<template>
  <v-row dense v-for="(value, key) in props.data" :key="key">
    <v-col cols="3">
      <p class="font-weight-medium">{{labels[key]}}:</p>
    </v-col>
    <v-col>
      <div
        v-if="key === 'auth_info'"
        class="d-flex ga-5 align-baseline"
      >
        <v-btn
          class="px-5"
          color="primary"
          size="small"
          rounded="0"
          @click="passwordVisible = !passwordVisible"
        >
          {{passwordVisible ? 'HIDE' : 'SHOW'}}
        </v-btn>
        <p v-if="passwordVisible">{{value}}</p>
      </div>
      <p v-else>{{value}}</p>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

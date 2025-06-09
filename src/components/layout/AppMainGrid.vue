<script setup>

import CardContent from '@/components/card/CardContent.vue'
import AppCard from '@/components/card/AppCard.vue'
</script>

<template>
  <v-main class="mx-6">
    <v-row>
      <v-col
        cols="12"
        lg="8"
      >
        <AppCard>
          <CardContent></CardContent>
        </AppCard>
        <AppCard title="Events:">
          <CardContent></CardContent>
        </AppCard>

        <AppCard title="State flags:">
          <CardContent :simple="true"></CardContent>
        </AppCard>
      </v-col>
      <v-col
        cols="12"
        lg="4"
      >
        <AppCard></AppCard>
      </v-col>
    </v-row>
  </v-main>

</template>

<style scoped>

</style>

<script setup>
import AppCard from '@/components/card/AppCard.vue'
import { cardTitle } from '@/utils/label_transcript.utils.js'
import { computed, ref } from 'vue'
import AuthInfoCardContent from '@/components/card/cardContent/AuthInfoCardContent.vue'
import EventCardContent from '@/components/card/cardContent/EventCardContent.vue'
import StateFlagsCardContent from '@/components/card/cardContent/StateFlagsCardContent.vue'
import OwnerCardContent from '@/components/card/cardContent/OwnerCardContent.vue'
import AdminContactCardContent from '@/components/card/cardContent/AdminContactCardContent.vue'
import NssetCardContent from '@/components/card/cardContent/NssetCardContent.vue'
import KeySetCardContent from '@/components/card/cardContent/KeySetCardContent.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
})

// Variables
const verboseMode = ref(false)
const authInfoData = computed(() => {
  return {
    auth_info: 'Ob0LQhTTQ8VrxPn',
    expires_at: props.data?.expires_at,
  }
})
const administrativeContactData = computed(() => {
  const data = props.data['administrative_contacts']
  if (!verboseMode.value) {
    return data?.map(item => {
      return {
        label: item.name,
        value: item.handle,
        highlight: true
      }
    })
  }
  return props.data['administrative_contacts']
})
</script>

<template>
  <v-main class="ma-6" v-if="props.data">
    <div>
      <h2 class="text-h6">{{data.fqdn}}</h2>
      <v-switch
        @update:modelValue="verboseMode = $event"
        label="Verbose view"
        color="primary"
        class="text-secondary-darken-1 mb-n6"></v-switch>
    </div>
    <v-row>
      <v-col
        cols="12"
        lg="8"
      >
        <!--        AUTH INFO-->
        <AppCard v-if="authInfoData">
          <AuthInfoCardContent :data="authInfoData" />
        </AppCard>
        <!--        EVENTS-->
        <AppCard
          v-if="props.data['events']"
          :title="cardTitle['events']"
        >
          <EventCardContent
          :data="props.data['events']"
          />
        </AppCard>
        <!--          STATE FLAGS-->
        <AppCard
          v-if="props.data['state_flags']?.flags && props.data['state_flags']?.groups"
          :title="cardTitle['state_flags']"
        >
          <StateFlagsCardContent
          :data="props.data['state_flags']?.flags"
          :groups="props.data['state_flags']?.groups"
          :isVerbose="verboseMode"
          />
        </AppCard>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <!--        OWNER-->
        <AppCard
          v-if="props.data['owner']"
          :title="cardTitle['owner']"
        >
          <OwnerCardContent
          :data="props.data['owner']"
          :isVerbose="verboseMode"
          />
        </AppCard>
        <!--       ADMINISTRATIVE CONTACT-->
        <template v-if="verboseMode">
          <template v-for="(item, index) in administrativeContactData" :key="index">
            <AppCard
              v-if="administrativeContactData"
              :title="cardTitle['administrative_contacts']"
            >
              <AdminContactCardContent
                :data="item"
                :is-verbose="verboseMode"
              />
            </AppCard>
          </template>
        </template>
        <template v-else>
          <AppCard
            v-if="administrativeContactData"
            :title="cardTitle['administrative_contacts']"
          >
            <AdminContactCardContent
              :data="administrativeContactData"
              :is-verbose="verboseMode"
            />
          </AppCard>
        </template>

        <!--        NSSET-->
        <AppCard
          v-if="props.data['nsset']"
          :title="cardTitle['nsset']"
        >
         <NssetCardContent :data="props.data['nsset']" />
        </AppCard>
        <!--        KEY SET-->
        <AppCard
          v-if="props.data['keyset']"
          :title="cardTitle['keyset']"
        >
         <KeySetCardContent :data="props.data['keyset']" />
        </AppCard>
      </v-col>
    </v-row>
  </v-main>

</template>

<style scoped>
</style>

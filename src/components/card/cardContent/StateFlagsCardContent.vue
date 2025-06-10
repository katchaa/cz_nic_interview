<script setup>
import { computed } from 'vue'
import StateFlagItem from '@/components/card/StateFlagItem.vue'

const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  groups: {
    type: Array,
    default: []
  },
  isVerbose: {
    type: Boolean,
    default: false
  }
})

// Variables
const filteredData = computed(() => {
  const [group1Keys, group2Keys] = props.groups
  if (props.isVerbose) {
    const group1 = []
    const group2 = []
    const other = []

    for (const flag of props.data) {
      if (group1Keys.includes(flag.name)) {
        group1.push(flag);
      } else if (group2Keys.includes(flag.name)) {
        group2.push(flag);
      } else {
        other.push(flag);
      }
    }

      return [group1, group2, other]
  }

  return props.data.filter(item => item.active !== false)
})
</script>

<template>
  <v-row>
    <template v-if="isVerbose">
      <v-col v-for="(group, index) in filteredData" :key="index" cols="4">
        <template v-for="(item, index) in group" :key="index">
          <StateFlagItem :item="item" />
        </template>
      </v-col>
    </template>
    <template v-else>
      <v-col>
        <StateFlagItem
          :item="item"
          v-for="(item, index) in filteredData" :key="index" cols="4"
        />
      </v-col>
    </template>
  </v-row>
</template>

<style scoped>
</style>

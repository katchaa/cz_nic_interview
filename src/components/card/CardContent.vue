<script setup>
defineProps({
  simple: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <template v-if="simple">
    <div class="status-list">
      <div
        v-for="(item, index) in simpleData"
        :key="index"
      >
        <v-icon
          :icon="item.active ? 'mdi-check-circle' : 'mdi-close-circle'"
          size="16"
          :color="item.active ? 'success' : 'error'"
          class="mr-1"
        />
        <span
          class="text-caption font-weight-light"
          :class="item.active ? 'text-success' : 'text-error'"
        >
            {{ item.description }}
          </span>
      </div>
    </div>
  </template>

  <template v-else>
    <v-row
      v-for="(value, key, index) in data"
      :key="index"
    >
      <v-col
        cols="3"
      >
<!--        TODO publish eye icons-->
        <p class="font-weight-medium">{{key}}</p>

      </v-col>
      <template v-if="value">
        <v-col
          cols="4"
          v-if="value.timestamp"
        >
          <p class="text-no-wrap">{{value.timestamp}}</p>
        </v-col>
        <template v-if="value.registrar_handle">
          <v-col
            cols="2"
          >
            <p class="font-weight-medium">Registrar:</p>
          </v-col>
          <v-col>
            <a
              href="#"
              class="text-uppercase text-decoration-none text-primary"
            >
              {{value.registrar_handle}}
            </a>
          </v-col>
        </template>
      </template>
    </v-row>
  </template>
</template>

<style scoped>
.status-list {
  column-count: 3;
  column-width: 1fr;
}
</style>

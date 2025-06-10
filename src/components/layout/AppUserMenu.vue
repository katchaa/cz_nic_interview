<script setup>
const props = defineProps({
  activator: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
  }
})

//Methods
const logout = () => {
  console.log('logout')
}

defineExpose({ logout })
</script>

<template>
  <v-menu
    data-qa="user-menu"
    location="bottom right"
    :activator="props.activator"
    width="300"
  >
    <v-list class="rounded-0">
      <v-list-item
        :title="userName"
        :subtitle="userRole ? userRole : ''"
        tile
      >
        <template v-slot:prepend>
          <v-icon  icon="mdi-account-circle" size="30" />
        </template>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item
        title="Logout"
        prepend-icon="mdi-login-variant"
        tile
        class="cursor-pointer"
        @click="logout"
      ></v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>

</style>

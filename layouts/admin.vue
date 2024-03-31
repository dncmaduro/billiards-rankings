<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Billiards Rankings</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in items" :key="item.title">
          <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
        </v-btn>
      </v-toolbar-items>
      <v-btn icon class="hidden-md-and-up" @click="drawer = !drawer">
        <v-icon color="black">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="hidden-md-and-up"
    >
      <v-list-item link v-for="item in items" :key="item.title">
        <v-list-item-content>
          <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <slot />
  </div>
</template>

<script setup lang="ts">
const drawer = ref(false);

const items = [
  { title: "Rankings", to: "/" },
  { title: "Update Points", to: "/admin/points" },
  { title: "Update Players", to: "/admin/players" },
  { title: "Update Posts", to: "/admin/posts" },
];
</script>

<style scoped></style>

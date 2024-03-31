<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Billiards Rankings</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <nuxt-link to="/"> Rankings </nuxt-link>
        </v-btn>
        <v-btn>
          <nuxt-link to="/posts"> Posts </nuxt-link>
        </v-btn>
        <v-btn>
          <nuxt-link to="/admin/auth"> Admin </nuxt-link>
        </v-btn>
      </v-toolbar-items>
      <v-btn icon class="hidden-md-and-up" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="hidden-md-and-up"
    >
      <v-list-item link>
        <v-list-item-content>
          <nuxt-link to="/"> Rankings </nuxt-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <nuxt-link to="/posts"> Posts </nuxt-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-content>
          <nuxt-link to="/admin/auth"> Admin </nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(false);
</script>

<style scoped></style>

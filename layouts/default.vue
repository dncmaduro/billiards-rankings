<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Billiards Rankings</v-toolbar-title>
      <v-spacer />
      <v-btn>
        <nuxt-link to="/"> Rankings </nuxt-link>
      </v-btn>
      <v-btn>
        <nuxt-link to="/update"> Update Points </nuxt-link>
      </v-btn>
      <v-btn>
        <nuxt-link to="/posts"> Posts </nuxt-link>
      </v-btn>
    </v-toolbar>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

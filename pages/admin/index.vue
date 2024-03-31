<template>
  <div class="text-center">
    <div v-if="!store.admin">You have to be verified as Admin to access!</div>
    <div v-else>Welcome back, Admin!</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/stores/index";
const store = useStore();
definePageMeta({
  layout: "default",
});
if (store.admin) {
  setPageLayout("admin");
}
</script>

<style scoped></style>

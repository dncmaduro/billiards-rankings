<template>
  <v-row v-if="store.admin">
    <v-col>
      <v-form class="w-50 mx-auto mt-10" @submit="submit">
        <v-text-field label="Name" variant="underlined" v-model="form.name" />
      </v-form>
    </v-col>
  </v-row>
  <div v-else>You have to be verified as Admin to access!</div>
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
const form = ref({
  name: "",
});

const submit = async () => {
  await createPlayer(form.value.name);
};

definePageMeta({
  layout: "admin",
});
</script>

<style scoped></style>

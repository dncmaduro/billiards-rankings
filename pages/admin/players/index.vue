<template>
  <v-row>
    <v-col>
      <v-form class="w-50 mx-auto mt-10" @submit="submit">
        <v-text-field label="Name" variant="underlined" v-model="form.name" />
      </v-form>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
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

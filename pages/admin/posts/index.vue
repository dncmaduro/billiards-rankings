<template>
  <v-row v-if="store.admin">
    <v-col>
      <v-form class="mx-auto mt-10" @submit="submit">
        <v-text-field
          label="Title"
          variant="underlined"
          v-model="form.title"
        ></v-text-field>
        <v-text-field
          label="Link"
          variant="underlined"
          v-model="form.link"
        ></v-text-field>
        <v-btn @click="submit" type="submit">Create Post</v-btn>
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
const form = ref<IForm>({
  id: 0,
  title: "",
  link: "",
});

const submit = async () => {
  await createPost(form.value.title, form.value.link);
};
</script>

<style scoped></style>

<template>
  <v-row>
    <v-col>
      <v-form class="w-25 mx-auto mt-10" @submit="submit">
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
</template>

<script setup lang="ts">
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

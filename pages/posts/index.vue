<template>
  <v-row class="mt-16">
    <v-col class="text-center">
      <span class="title">Posts</span>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="mt-10">
      <v-card
        v-for="post in data.posts"
        class="mx-auto py-2 px-4"
        :key="post.id"
      >
        <v-card-title>{{ post.title }}</v-card-title>
        <nuxt-link :to="post.link"> <v-btn>Link</v-btn></nuxt-link>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { IPost } from "~/types/post";
const data = ref({
  posts: [] as IPost[],
});

onMounted(async () => {
  data.value.posts = await getPosts();
});
</script>

<style scoped lang="scss">
.title {
  font-size: 2rem;
  text-transform: uppercase;
}
</style>

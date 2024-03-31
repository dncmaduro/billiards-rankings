<template>
  <v-row class="w-50 mx-auto mt-10">
    <v-form class="w-100" @submit="submit">
      <v-text-field
        label="Admin Code"
        variant="underlined"
        v-model="input.code"
      >
      </v-text-field>
    </v-form>
  </v-row>
</template>

<script setup lang="ts">
import { useStore } from "~/stores/index";
const router = useRouter();
const store = useStore();

const input = ref({
  code: "",
});

const submit = (e: Event) => {
  e.preventDefault();
  if (input.value.code === "623876") {
    store.setAdminStatus(true);
    router.push("/admin");
  }
};
</script>

<style scoped lang="scss"></style>

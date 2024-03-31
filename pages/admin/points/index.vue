<template>
  <v-row v-if="store.admin">
    <v-col>
      <v-form class="w-25 mx-auto mt-10" @submit="submit">
        <v-autocomplete
          v-model="form.player"
          :items="playerItems"
          item-title="name"
          item-value="id"
          return-object
          label="Player"
        >
        </v-autocomplete>
        <v-text-field
          label="Points"
          v-model="form.player.points"
          variant="underlined"
        />
        <v-btn type="submit" @click="submit">Submit points</v-btn>
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
import { computed } from "vue";
import type { IPlayer } from "~/types/player";

const form = ref<IPlayer>({
  player: {
    id: 0,
    name: "",
    points: 0,
  },
});

const data = ref({
  players: [] as IPlayer[],
});

onMounted(async () => {
  data.value.players = await getRankings();
});

watch(
  () => form.value.player.id,
  async () => {
    data.value.players = await getRankings();
  }
);

const playerItems = computed(() => {
  return Object.entries(data.value.players).map(([id, player]) => ({
    id,
    name: player.name,
    ...player,
  }));
});

definePageMeta({
  layout: "admin",
});

const submit = async (e: Event) => {
  await updatePoints(form.value.player.id, form.value.player.points);
};
</script>

<style scoped></style>

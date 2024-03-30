<template>
  <v-row class="mt-10">
    <v-col class="text-center">
      <span class="title">Rankings</span>
    </v-col>
  </v-row>
  <v-row class="mt-10 rankings">
    <v-card v-for="(player, index) in data.players" class="w-50 px-10">
      <v-card-title>
        <span>{{ index + 1 }}</span>
        <span class="ml-10">{{ player.name }}</span>
      </v-card-title>
      <v-spacer />
      <v-card-items>
        <span class="points">{{ player.points }}</span>
      </v-card-items>
    </v-card>
  </v-row>
</template>

<script setup lang="ts">
import type { IPlayer } from "~/types/player";
const data = ref({
  players: [] as IPlayer[],
});

onMounted(async () => {
  data.value.players = await getRankings();
});
</script>

<style scoped lang="scss">
.title {
  font-size: 2rem;
  text-transform: uppercase;
}

.rankings {
  display: flex;
  justify-content: center;
}

.v-card {
  display: flex;
  align-items: center;
}

.points {
  font-size: 1.5rem;
}
</style>

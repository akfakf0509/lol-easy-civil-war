<script setup lang="ts">
import { useMatch } from "~/stores/match";

const { value } = useMatch();
</script>

<template>
  <div>
    <ul>
      <li v-for="(i, index) in value.team" :key="`team-${index}`">i</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>

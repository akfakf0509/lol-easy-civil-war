<script setup lang="ts">
import { useMatch } from "@/stores/match";

const { value } = useMatch();
</script>

<template>
  <div class="container">
    <h1 class="title">Match</h1>
    <ul class="member-list">
      <li v-for="i in 10" :key="`team-${i}`" class="member-list__item">
        <Member v-bind="value.members[i]" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 40px 0;
  margin: 0 400px;
}
.title {
  @include font-heading-xl;

  text-align: center;
  margin-bottom: 32px;
}

.member-list {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: stretch;
  gap: 16px;
}
</style>

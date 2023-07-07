<script setup lang="ts">
const team = useRoute().params.team;

const { data } = useAsyncData(async () => {
  if (typeof team !== "string") return;
  const { data } = await useSummonerSearch(team);
  return data.value;
});
</script>

<template>
  <article class="team-page">
    {{ team }}
    {{ data }}
    <ul class="team">
      <li class="team__item">
        <Member
          v-if="data"
          :nickname="data.name"
          :profile-image-id="data.profileIconId"
          class="team__item__inner"
        />
      </li>
    </ul>
  </article>
</template>

<style lang="scss" scoped>
.team {
  display: flex;
  gap: 8px;

  &__item {
    &__inner {
      height: 600px;
    }
  }
}
</style>

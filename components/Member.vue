<script setup lang="ts">
export interface Props {
  profileImageId: number;
  nickname: string;
}

defineProps<Props>();
</script>

<template>
  <div class="member">
    <img :src="useProfileImage(profileImageId)" class="member__profile" />
    <span class="member__name">{{ nickname }}</span>
  </div>
</template>

<style lang="scss" scoped>
// #20272b
// #080c10

.member {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  padding: 32px;

  background: url("@/assets/images/member-banner.svg");

  &__profile {
    width: 128px;
    height: 128px;

    object-fit: cover;
    object-position: center center;

    border-radius: 50%;
  }
  &__name {
    color: white;
  }
}
</style>

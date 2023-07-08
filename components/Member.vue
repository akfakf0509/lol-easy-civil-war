<script setup lang="ts">
export interface Props {
  profileImageId?: number;
  nickname?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="member" v-if="nickname">
    <img :src="useProfileImage(profileImageId)" class="member__profile" />
    <span class="member__name">{{ nickname }}</span>
  </div>
  <button class="member member--empty" v-else>Empty</button>
</template>

<style lang="scss" scoped>
.member {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  padding: 32px;

  &--empty {
    @include font-heading-xs;

    width: 100%;
    border: 1px solid $color-border;

    &:hover {
      background-color: $color-surface-hover;
    }
    &:active {
      color: $color-on-surface-active;
    }
  }

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

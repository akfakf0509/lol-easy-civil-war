<script setup lang="ts">
import { Team } from "~/types/match";

export interface Emits {
  (e: "submit", team: Team): void;
}

const name = ref("");

function handleSubmit() {}

const dialog = ref<HTMLDialogElement>();
function showDialog() {
  dialog.value?.showModal();
}
defineExpose({ showDialog });
</script>

<template>
  <dialog ref="dialog" class="dialog">
    <article class="content">
      <h1 class="content__header">Create Team</h1>
      <form
        autocomplete="off"
        novalidate="true"
        class="form"
        @submit="handleSubmit()"
      >
        <input v-model="name" />
      </form>
    </article>
  </dialog>
</template>

<style lang="scss" scoped>
.content {
  padding: 16px;

  &__header {
    @include font-heading-l;
  }
}

.dialog {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: $color-surface;
  border: 2px solid $color-border;
}
</style>

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
}

.dialog {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);
  border-radius: 12px;
}
</style>

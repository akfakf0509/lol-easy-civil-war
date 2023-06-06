<script setup lang="ts">
import CreateTeamDialog from "~/components/CreateTeamDialog.vue";
import Team from "~/components/Team.vue";
import { useMatch } from "~/stores/match";

const { value } = useMatch();

const createTeamDialog = ref<InstanceType<typeof CreateTeamDialog>>();
function showCreateTeamDialog() {
  createTeamDialog.value?.showDialog();
}
</script>

<template>
  <div>
    <ul>
      <li v-for="(i, index) in value.team" :key="`team-${index}`">
        <Team v-bind="i" />
      </li>
    </ul>

    <button @click="showCreateTeamDialog()">Create Team</button>
    <CreateTeamDialog ref="createTeamDialog" />
  </div>
</template>

<style lang="scss" scoped></style>

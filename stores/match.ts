import { Team } from "~/types/match";
import { Match } from "~/types/match";

export const useMatch = defineStore("match", () => {
  const value = ref<Match>({
    members: [],
    team: [],
  });

  return { value };
});

import { SummonerDTO } from "~/types/riotAPI";

export function useSummonerSearch(name: string) {
  return useFetch<SummonerDTO>(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
    {
      headers: { "X-Riot-Token": "RGAPI-65aff292-804b-4809-b471-f53670908d58" },
    }
  );
}

export function useProfileImage(id = 29) {
  return `http://ddragon.leagueoflegends.com/cdn/13.11.1/img/profileicon/${id}.png`;
}

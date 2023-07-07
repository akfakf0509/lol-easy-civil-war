export interface Member {
  name: string;
}

export interface Team {
  member: Member[];
}

export interface Match {
  members: Member[];
  team: Team[];
}

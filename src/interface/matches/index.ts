import { IOpponent } from "interface/opponents";
import { ITeam } from "interface/team";

export type IMatch = {
  matchId?: string;
  place: string;
  hour: string;
  date: string;
  opponent?: IOpponent;
  team?: ITeam;
  goalScored?: number;
  goalReceived?: number;
  opponentId: string;
};

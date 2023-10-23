import { IAction } from "interface/actions";
import { IAthlete } from "interface/athletes";
import { IMatch } from "interface/matches";

export type IHighlight = {
  highlightId?: string;
  minute?: string;
  pointX?: number;
  pointY?: number;
  matchId?: string;
  match?: IMatch;
  actionId?: string;
  action?: IAction;
  athleteId?: string;
  athlete?: IAthlete;
};

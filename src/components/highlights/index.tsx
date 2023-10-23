/* eslint-disable @next/next/no-img-element */
import { TrashIcon } from "@heroicons/react/20/solid";
import FieldComponent from "components/field";
import ScoreComponent from "components/score";
import { useActions } from "hooks/ActionsContext";
import { useAthletes } from "hooks/AthletesContext";
import { useHighlights } from "hooks/HighlightsContext";
import { useMatches } from "hooks/MatchesContext";
import { useTeam } from "hooks/TeamContext";
import { IAction } from "interface/actions";
import { IHighlight } from "interface/highlights";
import { IMatch } from "interface/matches";
import { FC, useEffect, useState } from "react";
import HighlightsListComponent from "./list";

type Props = {
  matchId: string;
};

const HighlightsComponent: FC<Props> = (props): JSX.Element => {
  const { matchId } = props;
  const { getHighlights } = useHighlights();
  const { getTeam, team } = useTeam();
  const { match, getMatch, putMatch } = useMatches();
  const { actionsList, getActions, actionsLoading } = useActions();
  const { athletesList, getAthletes } = useAthletes();

  const [highlightsList, setHighlightsList] = useState<IHighlight[]>([]);

  // useEffect(() => {
  //   getHighlights(matchId);
  // }, []);

  useEffect(() => {
    getTeam("1");
  }, []);

  useEffect(() => {
    getMatch(matchId);
  }, []);

  useEffect(() => {
    getActions("active");
  }, []);

  useEffect(() => {
    getAthletes("active");
  }, []);

  const goalScored = (positive: boolean) => {
    const newMatch: IMatch | undefined = match;
    if (newMatch) {
      if (positive) {
        if (
          newMatch.goalScored === undefined ||
          newMatch?.goalScored === null
        ) {
          newMatch.goalScored = 1;
        } else newMatch.goalScored++;
      } else {
        if (
          newMatch.goalScored === undefined ||
          newMatch?.goalScored === null ||
          newMatch.goalScored === 0
        ) {
          newMatch.goalScored = 0;
        } else newMatch.goalScored--;
      }
      updateMatch(newMatch);
    }
  };

  const goalReceived = (positive: boolean) => {
    const newMatch: IMatch | undefined = match;
    if (newMatch) {
      if (positive) {
        if (
          newMatch.goalReceived === undefined ||
          newMatch?.goalReceived === null
        ) {
          newMatch.goalReceived = 1;
        } else newMatch.goalReceived++;
      } else {
        if (
          newMatch.goalReceived === undefined ||
          newMatch?.goalReceived === null ||
          newMatch.goalReceived === 0
        ) {
          newMatch.goalReceived = 0;
        } else newMatch.goalReceived--;
      }
      updateMatch(newMatch);
    }
  };

  const updateMatch = (updateMatch: IMatch) => {
    putMatch(updateMatch);
  };

  return (
    <>
      {match && team && (
        <ScoreComponent
          goalScored={goalScored}
          goalReceived={goalReceived}
          match={match}
          team={team}
        />
      )}
      <div className="card m-4">
        <div className="flex ">
          <div className="w-5/6">
            {!actionsLoading && (
              <FieldComponent
                listAtlhetes={athletesList}
                matchId={matchId}
                listActions={actionsList}
                listHighlights={highlightsList}
                setHighlightsList={setHighlightsList}
              />
            )}
          </div>
          <div className="w-1/6 ml-4">
            <div className="grid grid-flow-row auto-rows-max">
              {actionsList?.map((action: IAction, index) => {
                return (
                  <div
                    className="grid grid-rows-1 grid-flow-col gap-1 m-4"
                    key={index}
                  >
                    <div className="flex">
                      <div
                        className="justify-items-center"
                        style={{
                          height: "40px",
                          width: "40px",
                          backgroundColor: action.color,
                          borderRadius: "50%",
                          display: "inline-block",
                          borderStyle: "dotted",
                        }}
                      ></div>
                      <b className="ml-2 mt-3">{action.name}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <HighlightsListComponent highlightsList={highlightsList} />
      </div>
    </>
  );
};

export default HighlightsComponent;

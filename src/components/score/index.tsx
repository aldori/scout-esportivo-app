/* eslint-disable @next/next/no-img-element */
import format from "date-fns/format";
import { IMatch } from "interface/matches";
import { ITeam } from "interface/team";
import { FC } from "react";
import ChevronUpIcon from "@heroicons/react/20/solid/ChevronUpIcon";
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";

type Props = {
  match: IMatch;
  team: ITeam;
  goalScored: (positive: boolean) => void;
  goalReceived: (positive: boolean) => void;
};

const ScoreComponent: FC<Props> = (props): JSX.Element => {
  const { match, team, goalScored, goalReceived } = props;

  return (
    <>
      <div className="mb-4">
        <div className="grid justify-items-center">
          <div className="flex flex-row">
            <div className="flex flex-row">
              <span className="text-4xl font-bold mt-7">
                {team?.name.slice(0, 3).toUpperCase()}
              </span>
              <img
                alt="Team"
                src={team?.logo}
                className="pr-3 pl-3 mt-4 object-cover h-16 w-16"
              />
              <span className="text-5xl font-bold">
                <div className="grid justify-items-center">
                  <ChevronUpIcon
                    width={24}
                    height={24}
                    onClick={() => goalScored(true)}
                  />
                  {match?.goalScored || 0}
                  <ChevronDownIcon
                    onClick={() => goalScored(false)}
                    width={24}
                    height={24}
                  />
                </div>
              </span>
            </div>

            <div className="flex flex-row">
              <span className="text-7xl font-semibold mr-2 ml-2 mt-3">-</span>
            </div>

            <div className="flex flex-row">
              <span className="text-5xl font-bold">
                <div className="grid justify-items-center">
                  <ChevronUpIcon
                    title="Aumentar placar"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                    onClick={() => goalReceived(true)}
                  />
                  {match?.goalReceived || 0}
                  <ChevronDownIcon
                    title="Diminuir placar"
                    className="cursor-pointer"
                    width={24}
                    height={24}
                    onClick={() => goalReceived(false)}
                  />
                </div>
              </span>
              <img
                alt="Team"
                className="pr-3 pl-3 mt-4 object-scale-down h-16 w-16"
                src={match?.opponent?.logo}
              />
              <span className="text-4xl font-bold mt-7">
                {match?.opponent?.name.slice(0, 3).toUpperCase()}
              </span>
            </div>
          </div>
          <span className="text-md font-semibold">
            {match?.date ? format(new Date(match?.date), "dd/MM/yyyy") : ""} -{" "}
            {match.hour}
          </span>
          <span className="text-md font-bold">{match?.place}</span>
          <div className="flex flex-row"></div>
        </div>
      </div>
    </>
  );
};

export default ScoreComponent;

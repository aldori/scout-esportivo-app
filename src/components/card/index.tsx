/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import PencilSquareIcon from "@heroicons/react/20/solid/PencilSquareIcon";
import PresentationChartBarIcon from "@heroicons/react/20/solid/PresentationChartBarIcon";
import format from "date-fns/format";

type Props = {
  matchId: string;
  team: string;
  logoTeam: string;
  opponent: string;
  logoOpponent: string;
  place: string;
  date: string;
  hour: string;
  goalScored?: number;
  goalReceived?: number;
  handleEdit: (matchId: string) => void;
  handleScout: (matchId: string) => void;
};

const CardComponent: FC<Props> = (props): JSX.Element => {
  const {
    matchId,
    team,
    logoTeam,
    opponent,
    logoOpponent,
    place,
    date,
    hour,
    goalScored = 0,
    goalReceived = 0,
    handleEdit,
    handleScout,
  } = props;

  const getColor =
    goalScored > goalReceived
      ? "bg-green-500"
      : goalScored < goalReceived
      ? "bg-red-500"
      : "bg-gray-300";

  const handleOptions = (option: any) => {
    console.log(option);
  };


  return (
    <div
      className="flex p-4 font-sans bg-gray-200 rounded border-t cursor-pointer
       border-r border-b border-l border-gray-400"
    >
      <div
        className="flex-none w-20 h-20 mb-1 relative z-10 before:absolute 
      before:top-1 before:w-full before:h-full rounded-full mt-10"
      >
        <img
          src={logoTeam}
          alt="logo"
          height={24}
          width={24}
          className="absolute z-10 inset-0 h-24 w-auto object-cover rounded-full"
          loading="lazy"
        />
      </div>
      <form className="flex-auto pl-6 pr-6">
        <div className="relative flex flex-wrap items-baseline pb-4 before:bg-gray-700 before:absolute 
                        before:-top-4 before:bottom-0 before:-left-400 before:-right-400">
          <h2 className="relative w-full flex-none mb-1 text-lg text-center font-semibold text-black">
            {team} x {opponent}
          </h2>
        </div>
        <div className="grid justify-items-center my-6">
          <div className="space-x-3 flex text-sm font-medium text-center">
            <label>
              <div
                className={`relative w-10 h-10 flex items-center justify-center text-black tracking-wider border-2 border-black ${getColor} text-black`}
              >
                {goalScored}
              </div>
            </label>
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="s"
              />
              <div
                className={`relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:${getColor}`}
              >
                X
              </div>
            </label>
            <label>
              <div
                className={`relative w-10 h-10 flex items-center justify-center text-black tracking-wider border-2 border-black ${getColor} text-black`}
              >
                {goalReceived}
              </div>
            </label>
          </div>
        </div>
        <div className="grid justify-items-center space-x-2 mb-4 text-xs font-small text-center">
          <div className="flex space-x-4">
            <div
              className={`px-4 h-10 uppercase font-semibold tracking-wider border-2 border-black  text-black`}
            >
              <div className="mt-3">{place}</div>
            </div>
          </div>
        </div>
        <p className="text-xs leading-6 text-slate-500 text-center">
          {format(new Date(date), "dd/MM/yyyy")} - {hour}
        </p>
        <div className="text-center">
          <button
            onClick={() => handleEdit(matchId)}
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="hover:bg-blue-700 inline-block  text-center  m-1
          rounded p-2 bg-blue-500 text-xs font-medium uppercase 
          leading-normal text-white shadow-md transition duration-150 
          ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <PencilSquareIcon className="h-4 w-4 black" />
          </button>
          <button
            type="button"
            onClick={() => handleScout(matchId)}
            data-te-ripple-init
            data-te-ripple-color="light"
            className="hover:bg-blue-700 inline-block  text-center m-1
          rounded p-2 bg-blue-500 text-xs font-medium uppercase 
          leading-normal text-white shadow-md transition duration-150 
          ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <PresentationChartBarIcon className="h-4 w-4 black" />
          </button>
        </div>
      </form>
      <div
        className="flex-none w-20 h-20 mb-1 mt-14 relative z-10 before:absolute 
      before:top-1 before:left-1 before:w-full before:h-full rounded-full"
      >
        <img
          src={logoOpponent}
          alt="logo"
          height={24}
          width={24}
          className="absolute z-10 inset-0 h-20 w-auto object-cover rounded-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CardComponent;

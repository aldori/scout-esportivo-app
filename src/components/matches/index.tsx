import CardComponent from "components/card";
import { useMatches } from "hooks/MatchesContext";
import { useTeam } from "hooks/TeamContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MatchesComponent = () => {
  const router = useRouter();

  const handleNew = () => {
    router.push("matches/new");
  };

  const handleEdit = (id: string) => {
    router.push(`matches/${id}`);
  };

  const handleScout = (id: string) => {
    router.push(`matches/${id}/highlights`);
  };

  const { matchesList, matchesLoading, getMatches } = useMatches();
  const { getTeam, team } = useTeam();

  useEffect(() => {
    getMatches();
  }, []);

  useEffect(() => {
    getTeam("1");
  }, []);

  return (
    <>
      <div className="mb-4">
        <div className="space-y-2" style={{ float: "right" }}>
          <button
            type="button"
            onClick={handleNew}
            className="rounded-md bg-green-500 px-3 py-2  ml-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Novo
          </button>
        </div>
        <div className="pb-2">
          <div className="space-y-18">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Jogos
            </h2>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3">
        {matchesList?.map((match, index) => {
          return (
            <CardComponent
              key={index}
              matchId={match.matchId || "0"}
              team={team?.name || ""}
              opponent={match.opponent?.name || ""}
              logoOpponent={match.opponent?.logo || ""}
              logoTeam={team?.logo || ""}
              place={match.place}
              date={match.date}
              hour={match.hour}
              goalReceived={match.goalReceived || 0}
              goalScored={match.goalScored || 0}
              handleEdit={handleEdit}
              handleScout={handleScout}
            />
          );
        })}
      </div>
    </>
  );
};

export default MatchesComponent;

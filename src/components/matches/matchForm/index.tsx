import { useMatches } from "hooks/MatchesContext";
import { IMatch } from "interface/matches";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useOpponents } from "hooks/OpponentsContext";
import { format } from "date-fns";

type Props = {
  matchId: string;
};

const MatchForm: FC<Props> = (props): JSX.Element => {
  const { matchId } = props;
  const router = useRouter();
  const { match, putMatch, postMatch, getMatch } = useMatches();
  const { getOpponents, opponentsList } = useOpponents();

  const [matchForm, setMatchForm] = useState<IMatch>({
    matchId: undefined,
    place: "",
    hour: "",
    date: "",
    opponentId: "",
  });

  useEffect(() => {
    if (matchId && matchId !== "new") getMatch(matchId);
  }, [matchId]);

  useEffect(() => {
    getOpponents();
  }, []);

  useEffect(() => {
    if (match && match.matchId) {
      match.date = format(new Date(match.date), "yyyy-dd-MM");
      setMatchForm(match);
    }
  }, [match]);

  const handleSubmit = async () => {
    if (matchForm.matchId) {
      await putMatch(matchForm);
      router.push("/matches");
    } else {
      await postMatch(matchForm);
      router.push("/matches");
    }
  };

  return (
    <>
      <div className="card">
        <form>
          <div className="space-y-18">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Jogos
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Usadas para registrar os dados dos jogos.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="matchId"
                      id="id"
                      value={matchForm.matchId}
                      autoComplete="given-name"
                      disabled
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                      pr-2 pl-2"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Adversário
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      value={matchForm.opponentId}
                      onChange={(event) => {
                        setMatchForm({
                          ...matchForm,
                          opponentId: event.target.value,
                        });
                      }}
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-2 pr-2 pl-2 
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {opponentsList?.map((opponent, index) => {
                        return (
                          <option value={opponent.opponentId} key={index}>
                            {opponent.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="place"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Lugar
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lugar"
                      id="lugar"
                      autoComplete="given-name"
                      value={matchForm.place}
                      onChange={(event) =>
                        setMatchForm({
                          ...matchForm,
                          place: event.target.value,
                        })
                      }
                      className="block w-full pr-2 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="given-name"
                      value={matchForm.date}
                      onChange={(event) =>
                        setMatchForm({
                          ...matchForm,
                          date: event.target.value,
                        })
                      }
                      className="block w-full pr-2 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="hour"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Hora
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="hour"
                      id="hour"
                      autoComplete="given-name"
                      value={matchForm.hour}
                      onChange={(event) =>
                        setMatchForm({
                          ...matchForm,
                          hour: event.target.value,
                        })
                      }
                      className="block w-full pr-2 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => router.push("/matches")}
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Savar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MatchForm;

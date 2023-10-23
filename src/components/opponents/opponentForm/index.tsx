/* eslint-disable @next/next/no-img-element */
import { useOpponents } from "hooks/OpponentsContext";
import { IOpponent } from "interface/opponents";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  opponentId: string;
};

const OpponentForm: FC<Props> = (props): JSX.Element => {
  const { opponentId } = props;
  const router = useRouter();
  const { opponent, putOpponent, postOpponent, getOpponent } = useOpponents();

  const [opponentForm, setOpponentForm] = useState<IOpponent>({
    opponentId: undefined,
    name: "",
    active: true,
    logo: "",
  });

  useEffect(() => {
    if (opponentId && opponentId !== "new") getOpponent(opponentId);
    if (opponentId && opponent) {
      setOpponentForm(opponent);
    }
  }, [opponentId]);

  useEffect(() => {
    if (opponent && opponent.opponentId) setOpponentForm(opponent);
  }, [opponent]);

  const handleSubmit = async () => {
    if (opponentForm.opponentId) {
      await putOpponent(opponentForm);
      router.push("/opponents");
    } else {
      await postOpponent(opponentForm);
      router.push("/opponents");
    }
  };

  return (
    <>
     <div className="card">
        <form>
          <div className="space-y-2" style={{ float: "right" }}>
            <div className="relative flex gap-x-3 right">
              <div className="flex h-6 items-center">
              <input
                  id="active"
                  name="active"
                  checked={opponentForm?.active}
                  onChange={(event) =>
                    setOpponentForm({
                      ...opponentForm,
                      active: event.target.checked,
                    })
                  }
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Ativo
                </label>
              </div>
            </div>
          </div>
          <div className="space-y-18">
            <div className="border-b border-gray-900/10 pb-20">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Adversários
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Adversários de seu time.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ID
                  </label>
                  <div className="mt-2">
                  <input
                      type="text"
                      name="opponentId"
                      id="id"
                      value={opponentForm.opponentId}
                      autoComplete="given-name"
                      disabled
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                      pr-2 pl-2"
                    />
                  </div>
                </div>
                <div className="sm:col-span-5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nome
                  </label>
                  <div className="mt-2">
                  <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      value={opponentForm?.name}
                      onChange={(event) =>
                        setOpponentForm({
                          ...opponentForm,
                          name: event.target.value,
                        })
                      }
                      className="block w-full pr-2 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-center leading-6 text-gray-900"
                  >
                    Logo
                  </label>
                  <div className="mx-auto w-24 text-center ">
                    <div className="relative w-32">
                      <img
                        className="w-24 h-24 rounded-full absolute"
                        src={opponent?.logo ||"/logo-empty.png"}
                        alt=""
                      />
                      <div className="w-24 h-24 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                        <img
                          className="hidden group-hover:block w-12"
                          src="https://www.svgrepo.com/show/33565/upload.svg"
                          alt="Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => router.push("/opponents")}
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

export default OpponentForm;

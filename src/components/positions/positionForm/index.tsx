import { usePositions } from "hooks/PositionsContext";
import { IPosition } from "interface/positions";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  positionId: string;
};

const PositionForm: FC<Props> = (props): JSX.Element => {
  const { positionId } = props;
  const router = useRouter();
  const { position, putPosition, postPosition, getPosition } = usePositions();

  const [positionForm, setPositionForm] = useState<IPosition>({
    positionId: undefined,
    name: "",
    active: true,
  });

  useEffect(() => {
    if (positionId && positionId !== "new") getPosition(positionId);
    if (positionId && position) {
      setPositionForm(position);
    }
  }, [positionId]);

  useEffect(() => {
    if (position && position.positionId) setPositionForm(position);
  }, [position]);

  const handleSubmit = async () => {
    if (positionForm.positionId) {
      await putPosition(positionForm);
      router.push("/positions");
    } else {
      await postPosition(positionForm);
      router.push("/positions");
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
                  checked={positionForm?.active}
                  onChange={(event) =>
                    setPositionForm({
                      ...positionForm,
                      active: event.target.checked,
                    })
                  }
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="active" className="font-medium text-gray-900">
                  Ativo
                </label>
              </div>
            </div>
          </div>
          <div className="space-y-18">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Posições
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Posições em que seus jogadores ficam em campo.
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
                      name="positionId"
                      id="id"
                      value={positionForm.positionId}
                      autoComplete="given-name"
                      disabled
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                      pr-2 pl-2"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
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
                      value={positionForm?.name}
                      onChange={(event) =>
                        setPositionForm({
                          ...positionForm,
                          name: event.target.value,
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
              onClick={() => router.push("/positions")}
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

export default PositionForm;

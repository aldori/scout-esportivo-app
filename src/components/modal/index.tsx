/* eslint-disable @next/next/no-img-element */
import { IHighlight } from "interface/highlights";
import { FC, useState } from "react";
import { IAthlete } from "interface/athletes";
import { IAction } from "interface/actions";

type Props = {
  highlight: IHighlight;
  atlhetes?: IAthlete[];
  actions?: IAction[];
  setIsOpen: (open: boolean) => void;
  handleSubmit: (highlight: IHighlight) => void;
};

const ModalComponent: FC<Props> = (props): JSX.Element => {
  const { setIsOpen, atlhetes, highlight, actions, handleSubmit } = props;

  const [highlightForm, setHighlightForm] = useState<IHighlight>(highlight);

  const handleSaveHighlight = () => {
    setIsOpen(false);
    handleSubmit(highlightForm);
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-70"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-3xl p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3 md:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  Cadastrar ação
                </h4>
                <hr className="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark" />
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
                        name="highlightId"
                        id="id"
                        value={highlightForm?.highlightId}
                        autoComplete="given-name"
                        disabled
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                      ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                      focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                      pr-2 pl-2"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="action"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ação
                    </label>
                    <div className="mt-2">
                      <select
                        id="action"
                        name="action"
                        value={highlightForm?.actionId}
                        onChange={(event) => {
                          setHighlightForm({
                            ...highlightForm,
                            actionId: event.target.value,
                          });
                        }}
                        className="block w-full rounded-md border-0 py-2 pr-2 pl-2 
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value={undefined}>Selecione uma ação</option>
                        {actions?.map((action, index) => {
                          return (
                            <option value={action.actionId} key={index}>
                              {action.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="minute"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Minuto
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="minute"
                        id="minute"
                        value={highlightForm?.minute}
                        onChange={(event) => {
                          setHighlightForm({
                            ...highlightForm,
                            minute: event.target.value,
                          });
                        }}
                        autoComplete="given-name"
                        className="block w-full pr-2 pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-8">
                    <label
                      htmlFor="action"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Atleta
                    </label>
                    <div className="mt-2">
                      <select
                        id="athlete"
                        name="athlete"
                        value={highlightForm?.athleteId}
                        onChange={(event) => {
                          setHighlightForm({
                            ...highlightForm,
                            athleteId: event.target.value,
                          });
                        }}
                        className="block w-full rounded-md border-0 py-2 pr-2 pl-2 
                      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset 
                      focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value={undefined}>Selecione um atleta</option>
                        {atlhetes?.map((atlhete, index) => {
                          return (
                            <option value={atlhete.athleteId} key={index}>
                              {atlhete.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <hr className="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark" />
                <div className="items-center gap-2 mt-6 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-green-600 focus:ring-2"
                    onClick={handleSaveHighlight}
                  >
                    Salvar
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;

import { useActions } from "hooks/ActionsContext";
import { IAction } from "interface/actions";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  actionId: string;
};

const ActionForm: FC<Props> = (props): JSX.Element => {
  const { actionId } = props;
  const router = useRouter();
  const { action, putAction, postAction, getAction } = useActions();

  const [actionForm, setActionForm] = useState<IAction>({
    actionId: undefined,
    name: "",
    active: true,
    color: "#3f302c",
  });

  useEffect(() => {
    if (actionId && actionId !== "new") getAction(actionId);
    if (actionId && action) {
      setActionForm(action);
    }
  }, [actionId]);

  useEffect(() => {
    if (action && action.actionId) setActionForm(action);
  }, [action]);

  const handleSubmit = async () => {
    if (actionId) {
      await putAction(actionForm);
      router.push("/actions");
    } else {
      await postAction(actionForm);
      router.push("/actions");
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
                  id="comments"
                  name="comments"
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
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Atletas
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Atletas vinculados ao seu time.
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
                      name="action_id"
                      id="id"
                      autoComplete="given-name"
                      disabled
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-center leading-6 text-gray-900"
                  >
                    Atleta
                  </label>
                  <div className="mx-auto w-32 text-center ">
                    <div className="relative w-64">
                      <img
                        className="w-32 h-32 rounded-full absolute"
                        src="/user.svg"
                        alt=""
                      />
                      <div className="w-32 h-32 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                        <img
                          className="hidden group-hover:block w-12"
                          src="https://www.svgrepo.com/show/33565/upload.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="color"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Número
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="number"
                      id="number"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Telefone
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            >
              Cancelar
            </button>
            <button
              type="submit"
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

export default ActionForm;

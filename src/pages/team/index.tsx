import { ITeam } from "interface/team";
import { FC } from "react";
import Image from "next/image";

const TeamForm: FC<ITeam> = (): JSX.Element => {
  return (
    <>
      <div className="card">
        <form>
          <div className="space-y-18">
            <div className="border-b border-gray-900/10 pb-20">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Time
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Dados do seu time.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    <div className="relative w-24">
                      <Image
                        className="w-24 h-24 rounded-full absolute"
                        src="/logo.png"
                        alt="Logo"
                        width={24}
                        height={24}
                      />
                      <div className="w-24 h-24 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                        <Image
                          className="hidden group-hover:block w-12"
                          src="https://www.svgrepo.com/show/33565/upload.svg"
                          alt="Logo"
                          width={24}
                          height={24}
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

export default TeamForm;

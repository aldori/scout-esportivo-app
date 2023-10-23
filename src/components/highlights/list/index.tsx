/* eslint-disable @next/next/no-img-element */
import { TrashIcon } from "@heroicons/react/20/solid";
import { IHighlight } from "interface/highlights";
import { FC } from "react";

type Props = {
  highlightsList: IHighlight[];
};

const HighlightsListComponent: FC<Props> = (props): JSX.Element => {
  const { highlightsList } = props;

  const handleDelete = (highlightItem: IHighlight) => {
    console.log(highlightItem)
  }

  return (
    <>
      {highlightsList.length > 0 && (
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-white font-medium ">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Ação
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Atleta
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Minuto
                      </th>
                      <th scope="col" className="px-6 py4">
                        Opções
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {highlightsList?.map((highlightItem, index) => {
                      return (
                        <tr
                          key={`tr-${index}`}
                          className="border-b bg-neutral-100"
                        >
                          <td
                            key={`td-action`}
                            className="whitespace-nowrap px-6 py-4"
                          >
                            <div
                          key={`div-${index}`}
                          className="mr-3 h-5 w-5 "
                          style={{
                            backgroundColor: highlightItem.action?.color,
                            borderRadius: "50%",
                            display: "inline-block",
                          }}
                        ></div>
                            {highlightItem.action?.name}
                          </td>

                          <td
                            key={`td-athlete`}
                            className="whitespace-nowrap px-6 py-4"
                          >
                            {highlightItem.athlete?.name}
                          </td>

                          <td
                            key={`td-action`}
                            className="whitespace-nowrap px-6 py-4"
                          >
                            {highlightItem.minute}
                          </td>

                          <td className="whitespace-nowrap px-6 py-4">
                            <button
                              onClick={() => handleDelete(highlightItem)}
                              title="Excluír"
                              className="px-3 py-2 text-xs font-medium bg-red-500 hover:bg-red-700 
                                text-white text-sm font-bold py-2 px-4 rounded"
                            >
                              <TrashIcon className="h-5 w-5 white" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HighlightsListComponent;

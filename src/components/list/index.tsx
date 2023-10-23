import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { ListProps } from "interface/components";
import { useRouter } from "next/router";
import { FC } from "react";

const List: FC<ListProps> = (props): JSX.Element => {
  const { columns, rows, url, idName } = props;
  const router = useRouter();
  const handleEdit = (event: any) => {
    router.push(`/${url}/${event[idName]}`);
  };
  const verifyFields = (field: string): boolean => {
    switch (field) {
      case "active":
        return false;
      case "picture":
        return false;
      case "logo":
        return false;
      default:
        return true;
    }
  };
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b bg-white font-medium ">
        <tr>
          {columns.map((colum, index) => {
            return (
              <th scope="col" key={`th-${index}`} className="px-6 py-4">
                {colum}
              </th>
            );
          })}
          <th scope="col" className="px-6 py4">
            Opções
          </th>
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index) => {
          return (
            <tr key={`tr-${index}`} className="border-b bg-neutral-100">
              {Object.keys(row).map((keyName, i) => (
                <>
                  {verifyFields(keyName) && (
                    <td key={`td-${i}`} className="whitespace-nowrap px-6 py-4">
                      {keyName !== "color" ? (
                        row[keyName]
                      ) : (
                        <div
                          key={`div-${i}`}
                          className="h-5 w-5 "
                          style={{
                            backgroundColor: row[keyName],
                            borderRadius: "50%",
                            display: "inline-block",
                          }}
                        ></div>
                      )}
                    </td>
                  )}
                </>
              ))}
              <td className="whitespace-nowrap px-6 py-4">
                <button
                  onClick={() => handleEdit(row)}
                  className="px-3 py-2 text-xs font-medium bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                >
                  <PencilSquareIcon className="h-5 w-5 white" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;

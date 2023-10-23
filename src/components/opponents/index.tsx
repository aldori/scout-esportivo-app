import DropdownComponent from "components/dropdown";
import List from "components/list";
import { optionsStatus } from "constants/common/status";
import { useOpponents } from "hooks/OpponentsContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const OpponentsComponent = () => {
  const router = useRouter();
  const columns = ["ID", "Nome"];
  const [status, setStatus] = useState({
    name: "Ativo",
    value: true,
  });

  const handleStatus = (status: any) => {
    setStatus(status);
  };

  const handleNew = () => {
    router.push("opponents/new");
  };

  const { opponentsList, opponentsLoading, getOpponents } = useOpponents();

  useEffect(() => {
    getOpponents(status.name);
  }, [status]);

  return (
    <div className="card">
      <div className="space-y-2" style={{ float: "right" }}>
        <DropdownComponent
          options={optionsStatus}
          handleSelect={handleStatus}
        />
        <button
          type="button"
          onClick={handleNew}
          className="rounded-md bg-green-500 px-3 py-2  ml-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Novo
        </button>
      </div>
      <div className="border-b border-gray-900/10 pb-2">
        <div className="space-y-18">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Ações
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            ({status.name})
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
        <div className="sm:col-span-8">
          {!opponentsLoading && (
            <List
              url="opponents"
              idName="opponentId"
              columns={columns}
              rows={opponentsList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OpponentsComponent;

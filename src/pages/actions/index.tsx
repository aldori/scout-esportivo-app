import { ActionsProvider } from "hooks/ActionsContext";
import Head from "next/head";
import { FC } from "react";
import ActionsComponent from "components/actions";

const Actions: FC = (): JSX.Element => {
  return (
    <ActionsProvider>
      <Head>
        <title>Scout - Ações</title>
      </Head>
      <ActionsComponent />
    </ActionsProvider>
  );
};

export default Actions;

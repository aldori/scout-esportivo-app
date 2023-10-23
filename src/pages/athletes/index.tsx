import { AthletesProvider } from "hooks/AthletesContext";
import Head from "next/head";
import { FC } from "react";
import ActionsComponent from "components/athletes";

const Athletes: FC = (): JSX.Element => {
  return (
    <AthletesProvider>
      <Head>
        <title>Scout - Atletas</title>
      </Head>
      <ActionsComponent />
    </AthletesProvider>
  );
};

export default Athletes;

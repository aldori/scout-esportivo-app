import { OpponentsProvider } from "hooks/OpponentsContext";
import Head from "next/head";
import { FC } from "react";
import OpponentsComponent from "components/opponents";

const Opponents: FC = (): JSX.Element => {
  return (
    <OpponentsProvider>
      <Head>
        <title>Scout - Ações</title>
      </Head>
      <OpponentsComponent />
    </OpponentsProvider>
  );
};

export default Opponents;

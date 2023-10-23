import PositionsComponent from "components/positions";
import { PositionsProvider } from "hooks/PositionsContext";
import Head from "next/head";
import { FC } from "react";

const Positions: FC = (): JSX.Element => {
  return (
    <PositionsProvider>
      <Head>
        <title>Scout - Posições</title>
      </Head>
      <PositionsComponent />
    </PositionsProvider>
  );
};

export default Positions;

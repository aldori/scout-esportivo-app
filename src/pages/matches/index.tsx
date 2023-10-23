import { MatchesProvider } from "hooks/MatchesContext";
import Head from "next/head";
import { FC } from "react";
import MatchesComponent from "components/matches";

const Matches: FC = (): JSX.Element => {
  return (
    <MatchesProvider>
      <Head>
        <title>Scout - Jogos</title>
      </Head>
      <MatchesComponent />
    </MatchesProvider>
  );
};

export default Matches;

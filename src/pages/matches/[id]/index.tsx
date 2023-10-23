import MatchForm from "components/matches/matchForm";
import { MatchesProvider } from "hooks/MatchesContext";
import { OpponentsProvider } from "hooks/OpponentsContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

const Match: FC = (): JSX.Element => {
  const router = useRouter();
  if (!router.query.id) return <></>;

  return (
    <MatchesProvider>
      <Head>
        <title>Scout - Formulário Ação</title>
      </Head>
      <OpponentsProvider>
        <MatchForm matchId={router.query.id as string} />
      </OpponentsProvider>
    </MatchesProvider>
  );
};

export default Match;

import OpponentForm from "components/opponents/opponentForm";
import { OpponentsProvider } from "hooks/OpponentsContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

const Opponent: FC = (): JSX.Element => {
  const router = useRouter();
  if (!router.query.id) return <></>;
  
  return (
    <OpponentsProvider>
      <Head>
        <title>Scout - Formulário Ação</title>
      </Head>
      <OpponentForm opponentId={router.query.id as string} />
    </OpponentsProvider>
  );
};

export default Opponent;

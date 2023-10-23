import { PositionsProvider } from "hooks/PositionsContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import PositionForm from "components/positions/positionForm";

const Position: FC = (): JSX.Element => {
  const router = useRouter();

  if (!router.query.id) return <></>;

  return (
    <PositionsProvider>
      <Head>
        <title>Scout - Formulário Ação</title>
      </Head>
      <PositionForm positionId={router.query.id as string} />
    </PositionsProvider>
  );
};

export default Position;

import ActionForm from "components/actions/actionForm";
import { ActionsProvider } from "hooks/ActionsContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

const Action: FC = (): JSX.Element => {
  const router = useRouter();
  if (!router.query.id) return <></>;

  return (
    <ActionsProvider>
      <Head>
        <title>Scout - Formulário Ação</title>
      </Head>
      <ActionForm actionId={router.query.id as string} />
    </ActionsProvider>
  );
};

export default Action;

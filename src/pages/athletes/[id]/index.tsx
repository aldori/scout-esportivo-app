import { AthletesProvider } from "hooks/AthletesContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

const AthleteForm: FC = (): JSX.Element => {
  const router = useRouter();
  if (!router.query.id) return <></>;
  
  return (
    <AthletesProvider>
    <Head>
      <title>Scout - Formulário Atleta</title>
    </Head>
    <AthleteForm athleteId={router.query.id as string} />
  </AthletesProvider>
  );
};

export default AthleteForm;

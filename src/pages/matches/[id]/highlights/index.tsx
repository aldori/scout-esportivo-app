import MatchForm from "components/matches/matchForm";
import { MatchesProvider } from "hooks/MatchesContext";
import { HighlightsProvider } from "hooks/HighlightsContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { OpponentsProvider } from "hooks/OpponentsContext";
import HighlightsComponent from "components/highlights";
import { TeamProvider } from "hooks/TeamContext";
import { ActionsProvider } from "hooks/ActionsContext";
import { AthletesProvider } from "hooks/AthletesContext";

const Highlights: FC = (): JSX.Element => {
  const router = useRouter();

  if (!router.query.id) return <></>;

  return (
    <>
      <Head>
        <title>Scout - Highlights</title>
      </Head>
      <HighlightsProvider>
        <ActionsProvider>
          <TeamProvider>
            <MatchesProvider>
              <AthletesProvider>
                <HighlightsComponent matchId={router.query.id as string} />
              </AthletesProvider>
            </MatchesProvider>
          </TeamProvider>
        </ActionsProvider>
      </HighlightsProvider>
    </>
  );
};

export default Highlights;

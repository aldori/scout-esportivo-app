import { IMatch } from "interface/matches";
import React, { createContext, useContext, ReactNode, useState } from "react";
import MatchesService from "services/matches.service";

type ContextType = {
  matchesList: IMatch[] | undefined;
  match: IMatch | undefined;
  getMatches(status?: string): void;
  getMatch(matchId: string): void;
  postMatch(matchData: IMatch): void;
  putMatch(matchData: IMatch): void;
  matchesLoading: boolean;
};

type MatchesProviderProps = {
  children: ReactNode;
};

const MatchesContext = createContext({} as ContextType);

export const MatchesProvider = ({ children }: MatchesProviderProps) => {
  const [matchesList, setMatchesList] = useState<IMatch[]>();
  const [match, setMatch] = useState<IMatch>();
  const [matchesLoading, setMatchesLoading] = useState<boolean>(true);

  const getMatches = async (status?: string) => {
    setMatchesLoading(true);
    const matches = await MatchesService.getMatches(status);
    setMatchesList(matches);
    setMatchesLoading(false);
  };

  const getMatch = async (matchId: string) => {
    setMatchesLoading(true);
    const matchData = await MatchesService.getMatch(matchId);
    setMatch(matchData);
  };

  const postMatch = async (matchData: IMatch) => {
    setMatchesLoading(true);
    await MatchesService.postMatch(matchData);
    setMatchesLoading(false);
  };

  const putMatch = async (matchData: IMatch) => {
    setMatchesLoading(true);
    const updatedMatch = await MatchesService.updateMatch(matchData);
    setMatch(updatedMatch);
    setMatchesLoading(false);
  };

  return (
    <MatchesContext.Provider
      value={{
        matchesList,
        match,
        matchesLoading,
        getMatches,
        getMatch,
        postMatch,
        putMatch,
      }}
    >
      {children}
    </MatchesContext.Provider>
  );
};

export const useMatches = () => useContext(MatchesContext);

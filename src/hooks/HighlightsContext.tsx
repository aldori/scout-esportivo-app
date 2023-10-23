import { IHighlight } from "interface/highlights";
import React, { createContext, useContext, ReactNode, useState } from "react";
import HighlightsService from "services/highlights.service";

type ContextType = {
  highlightsList: IHighlight[] | undefined;
  getHighlights(matchId: string): void;
  postHighlight(highlightData: IHighlight): void;
  putHighlight(highlightData: IHighlight): void;
  highlightsLoading: boolean;
};

type HighlightsProviderProps = {
  children: ReactNode;
};

const HighlightsContext = createContext({} as ContextType);

export const HighlightsProvider = ({ children }: HighlightsProviderProps) => {
  const [highlightsList, setHighlightsList] = useState<IHighlight[]>();
  const [highlightsLoading, setHighlightsLoading] = useState<boolean>(true);

  const getHighlights = async (matchId: string) => {
    setHighlightsLoading(true);
    const highlights = await HighlightsService.getHighlights(matchId);
    setHighlightsList(highlights);
    setHighlightsLoading(false);
  };

  const postHighlight = async (highlightData: IHighlight) => {
    setHighlightsLoading(true);
    await HighlightsService.postHighlight(highlightData);
    setHighlightsLoading(false);
  };

  const putHighlight = async (highlightData: IHighlight) => {
    setHighlightsLoading(true);
    await HighlightsService.updateHighlight(highlightData);
    setHighlightsLoading(false);
  };

  return (
    <HighlightsContext.Provider
      value={{
        highlightsList,
        highlightsLoading,
        getHighlights,
        postHighlight,
        putHighlight,
      }}
    >
      {children}
    </HighlightsContext.Provider>
  );
};

export const useHighlights = () => useContext(HighlightsContext);

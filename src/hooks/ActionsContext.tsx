import { IAction } from "interface/actions";
import React, { createContext, useContext, ReactNode, useState } from "react";
import ActionsService from "services/actions.service";

type ContextType = {
  actionsList: IAction[] | undefined;
  action: IAction | undefined;
  getActions(status?: string): void;
  getAction(actionId: string): void;
  postAction(actionData: IAction): void;
  putAction(actionData: IAction): void;
  actionsLoading: boolean;
};

type ActionsProviderProps = {
  children: ReactNode;
};

const ActionsContext = createContext({} as ContextType);

export const ActionsProvider = ({ children }: ActionsProviderProps) => {
  const [actionsList, setActionsList] = useState<IAction[]>();
  const [action, setAction] = useState<IAction>();
  const [actionsLoading, setActionsLoading] = useState<boolean>(true);

  const getActions = async (status?: string) => {
    setActionsLoading(true);
    const actions = await ActionsService.getActions(status);
    setActionsList(actions);
    setActionsLoading(false);
  };

  const getAction = async (actionId: string) => {
    setActionsLoading(true);
    const actionData = await ActionsService.getAction(actionId);
    setAction(actionData);
  };

  const postAction = async (actionData: IAction) => {
    setActionsLoading(true);
    await ActionsService.postAction(actionData);
    setActionsLoading(false);
  };

  const putAction = async (actionData: IAction) => {
    setActionsLoading(true);
    await ActionsService.updateAction(actionData);
    setActionsLoading(false);
  };

  return (
    <ActionsContext.Provider
      value={{
        actionsList,
        action,
        actionsLoading,
        getActions,
        getAction,
        postAction,
        putAction,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
};

export const useActions = () => useContext(ActionsContext);

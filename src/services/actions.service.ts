import { IAction } from "interface/actions";
import instanceServer from "./http-base-request";

const getActions = async (status?: string): Promise<IAction[]> => {
  const response = await instanceServer.get(`/action?status=${status}`);

  return response.data;
};

const getAction = async (id: string): Promise<IAction> => {
  const response = await instanceServer.get(`/action/${id}`);
  return response.data;
};

const postAction = async (action: IAction): Promise<IAction> => {
  const response = await instanceServer.post(`/action`, action);

  return response.data;
};

const updateAction = async (action: IAction): Promise<IAction> => {
  const response = await instanceServer.put(`/action`, action);

  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getActions, 
  getAction, 
  postAction, 
  updateAction 
};

import { IMatch } from "interface/matches";
import instanceServer from "./http-base-request";

const getMatches = async (status?: string): Promise<IMatch[]> => {
  const response = await instanceServer.get(`/match?status=${status}`);

  return response.data;
};

const getMatch = async (id: string): Promise<IMatch> => {
  const response = await instanceServer.get(`/match/${id}`);
  return response.data;
};

const postMatch = async (match: IMatch): Promise<IMatch> => {
  const response = await instanceServer.post(`/match`, match);

  return response.data;
};

const updateMatch = async (match: IMatch): Promise<IMatch> => {
  const response = await instanceServer.put(`/match`, match);

  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getMatches, 
  getMatch, 
  postMatch, 
  updateMatch 
};

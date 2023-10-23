import { IHighlight } from "interface/highlights";
import instanceServer from "./http-base-request";

const getHighlights = async (matchId: string): Promise<IHighlight[]> => {
  const response = await instanceServer.get(`/highlight/${matchId}`);

  return response.data;
};

const postHighlight = async (highlight: IHighlight): Promise<IHighlight> => {
  const response = await instanceServer.post(`/highlight`, highlight);

  return response.data;
};

const updateHighlight = async (highlight: IHighlight): Promise<IHighlight> => {
  const response = await instanceServer.put(`/highlight`, highlight);

  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
  getHighlights, 
  postHighlight, 
  updateHighlight 
};

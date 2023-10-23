import { IOpponent } from "interface/opponents";
import instance from "./http-base-request";

const getOpponents = async (status?: string): Promise<IOpponent[]> => {
  const response = await instance.get(`/opponent?status=${status}`);

  return response.data;
};

const getOpponent = async (id: string): Promise<IOpponent> => {
  const response = await instance.get(`/opponent/${id}`);
  return response.data;
};

const postOpponent = async (opponent: IOpponent): Promise<IOpponent> => {
  const response = await instance.post(`/opponent`, opponent);

  return response.data;
};

const updateOpponent = async (opponent: IOpponent): Promise<IOpponent> => {
  const response = await instance.put(`/opponent`, opponent);

  return response.data;
};

export default { getOpponents, getOpponent, postOpponent, updateOpponent };

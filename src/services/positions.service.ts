import { IPosition } from "interface/positions";
import instance from "./http-base-request";

const getPositions = async (status?: string): Promise<IPosition[]> => {
  const response = await instance.get(`/position?status=${status}`);

  return response.data;
};

const getPosition = async (id: string): Promise<IPosition> => {
  const response = await instance.get(`/position/${id}`);
  return response.data;
};

const postPosition = async (position: IPosition): Promise<IPosition> => {
  const response = await instance.post(`/position`, position);

  return response.data;
};

const updatePosition = async (position: IPosition): Promise<IPosition> => {
  const response = await instance.put(`/position`, position);

  return response.data;
};

export default { getPositions, getPosition, postPosition, updatePosition };

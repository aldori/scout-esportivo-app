import { ITeam } from "interface/team";
import instance from "./http-base-request";

const getTeam = async (id:string): Promise<ITeam> => {
  const response = await instance.get(`/team/${id}`);

  return response.data;
};

const postTeam = async (team: ITeam): Promise<ITeam> => {
  const response = await instance.post(`/team`, team);

  return response.data;
};

const updateTeam = async (team: ITeam): Promise<ITeam> => {
  const response = await instance.put(`/team`, team);

  return response.data;
};

export default { getTeam, postTeam, updateTeam };

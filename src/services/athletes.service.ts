import { IAthlete } from "interface/athletes";
import instance from "./http-base-request";

const getAthletes = async (status?: string): Promise<IAthlete[]> => {
  const response = await instance.get(`/athlete?status=${status}`);

  return response.data;
};

const getAthlete = async (id: string): Promise<IAthlete> => {
  const response = await instance.get(`/athlete/${id}`);
  return response.data;
};

const postAthlete = async (athlete: IAthlete): Promise<IAthlete> => {
  const response = await instance.post(`/athlete`, athlete);

  return response.data;
};

const updateAthlete = async (athlete: IAthlete): Promise<IAthlete> => {
  const response = await instance.put(`/athlete`, athlete);

  return response.data;
};

export default { getAthletes, getAthlete, postAthlete, updateAthlete };

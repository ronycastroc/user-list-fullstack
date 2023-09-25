import { User, UserForm } from "../../models";
import api from "../api/api";

export const postUser = async (params: UserForm) => {
  const response = await api.post("/users", params);

  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");

  return response.data;
};
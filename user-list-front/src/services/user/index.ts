import { UserForm } from "../../models";
import api from "../api/api";

export const postUser = async (params: UserForm) => {
  const response = await api.post("/users", params);

  return response.data;
};
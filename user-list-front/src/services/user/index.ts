import { PartialUserForm, User, UserForm } from "../../models";
import api from "../api/api";

export const postUser = async (body: UserForm) => {
  const response = await api.post("/users", body);

  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");

  return response.data;
};

export const updateUser = async ({ id, body }: {id: number, body: PartialUserForm }) => {
  const response = await api.patch(`/users/${id}`, body);

  return response.data;
};

export const deleteUser = async (id: number) => {  
  const response = await api.delete(`/users/${id}`);

  return response.data;
};
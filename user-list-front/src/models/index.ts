export interface UserForm {
  name: string;
  email: string;
  password: string;
}

export type PartialUserForm = Partial<UserForm>;

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
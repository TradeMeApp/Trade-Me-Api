import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  firstName?: string | null;
  imageUrl?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};

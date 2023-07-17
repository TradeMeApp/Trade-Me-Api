import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  firstName?: string | null;
  imageUrl?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};

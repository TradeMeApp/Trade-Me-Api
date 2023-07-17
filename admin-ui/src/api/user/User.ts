import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  imageUrl: string | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

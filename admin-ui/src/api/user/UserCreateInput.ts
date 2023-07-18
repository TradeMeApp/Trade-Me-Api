import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  imageUrl?: string | null;
  listings?: ListingCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};

import { Comment } from "../comment/Comment";
import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  imageUrl: string | null;
  listings?: Array<Listing>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

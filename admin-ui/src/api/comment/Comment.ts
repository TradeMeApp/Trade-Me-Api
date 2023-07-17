import { User } from "../user/User";
import { Listing } from "../listing/Listing";

export type Comment = {
  author?: User;
  commented?: Comment | null;
  commentOn?: Array<Comment>;
  createdAt: Date;
  id: string;
  listing?: Listing;
  text: string;
  updatedAt: Date;
};

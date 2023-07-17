import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  Author?: SortOrder;
  commentedId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  Comments?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};

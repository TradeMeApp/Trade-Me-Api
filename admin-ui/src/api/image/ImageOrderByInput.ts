import { SortOrder } from "../../util/SortOrder";
import { Listing } from "../listing/Listing";

export type ImageOrderByInput = {
  alt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  Listing?: SortOrder;
  order?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};

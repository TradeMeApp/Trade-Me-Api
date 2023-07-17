import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  categoryId?: SortOrder;
  condition?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  OwnerId?: SortOrder;
  published?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

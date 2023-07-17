import { ListingUpdateManyWithoutCategoriesInput } from "./ListingUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  imageUrl?: string | null;
  listings?: ListingUpdateManyWithoutCategoriesInput;
  name?: string;
};

import { ListingCreateNestedManyWithoutCategoriesInput } from "./ListingCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  imageUrl?: string | null;
  listings?: ListingCreateNestedManyWithoutCategoriesInput;
  name: string;
};

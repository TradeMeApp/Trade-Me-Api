import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ImageCreateNestedManyWithoutListingsInput } from "./ImageCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  category: CategoryWhereUniqueInput;
  condition: "New" | "Excellent" | "Good" | "Okay";
  description?: string | null;
  images?: ImageCreateNestedManyWithoutListingsInput;
  location?: string | null;
  owner: UserWhereUniqueInput;
  published?: boolean | null;
  title: string;
};

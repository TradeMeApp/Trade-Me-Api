import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ImageUpdateManyWithoutListingsInput } from "./ImageUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingUpdateInput = {
  category?: CategoryWhereUniqueInput;
  condition?: "New" | "Excellent" | "Good" | "Okay";
  description?: string | null;
  images?: ImageUpdateManyWithoutListingsInput;
  location?: string | null;
  owner?: UserWhereUniqueInput;
  published?: boolean | null;
  title?: string;
};

import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingCreateInput = {
  category: CategoryWhereUniqueInput;
  condition: "New" | "Excellent" | "Good" | "Okay";
  description?: string | null;
  location?: string | null;
  owner: UserWhereUniqueInput;
  published?: boolean | null;
  title: string;
};

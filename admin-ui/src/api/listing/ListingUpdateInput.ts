import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutListingsInput } from "./CommentUpdateManyWithoutListingsInput";
import { ImageUpdateManyWithoutListingsInput } from "./ImageUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ListingUpdateInput = {
  category?: CategoryWhereUniqueInput;
  comments?: CommentUpdateManyWithoutListingsInput;
  condition?: "New" | "Excellent" | "Good" | "Okay";
  description?: string | null;
  images?: ImageUpdateManyWithoutListingsInput;
  location?: string | null;
  owner?: UserWhereUniqueInput;
  published?: boolean | null;
  title?: string;
};

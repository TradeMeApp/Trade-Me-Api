import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ListingWhereInput = {
  category?: CategoryWhereUniqueInput;
  condition?: "New" | "Excellent" | "Good" | "Okay";
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  owner?: UserWhereUniqueInput;
  published?: BooleanNullableFilter;
  title?: StringFilter;
};
